import childProcess from 'child_process'
import express from 'express'

const app = express()

app.get('*', (req, res) => {
  res.send(`
    <html
      <body>
        <div>hello-ssr</div>
      </body>
    </html>
  `)
})

app.listen(3000, () => {
  console.log('ssr-server listen on 3000')
})

childProcess.exec('start http://127.0.0.1:3000')
