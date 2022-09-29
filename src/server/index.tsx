import childProcess from 'child_process'
import path from 'path'
import express from 'express'
import { renderToString } from 'react-dom/server'
import { Route, Routes } from 'react-router-dom'
import { StaticRouter } from 'react-router-dom/server'
import router from '@/router'

const app = express()

app.use(express.static(path.resolve(process.cwd(), 'client_build')))

app.get('*', (req, res) => {
  const content = renderToString(
    <StaticRouter location={req.path}>
    <Routes>
      {router?.map((item, index) => {
        return <Route {...item} key={index} />
      })}
    </Routes>
  </StaticRouter>)

  res.send(`
    <html
      <body>
        <div id="root">${content}</div>
        <script src="/index.js"></script>
      </body>
    </html>
  `)
})

app.listen(3000, () => {
  console.log('ssr-server listen on 3000')
})

childProcess.exec('start http://127.0.0.1:3000')
