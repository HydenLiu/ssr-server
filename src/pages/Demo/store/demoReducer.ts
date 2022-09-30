import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

// https://redux-toolkit.js.org/introduction/getting-started

const getDemoData = createAsyncThunk(
  'demo/getData',
  async (initData: string) => {
    const res = await axios.post('http://localhost:3000/api/getDemoData', {
      content: initData
    })
    return res.data?.data?.content
  }
)

const demoReducer = createSlice({
  name: 'demo',
  initialState: typeof window !== 'undefined'
    ? (window as any)?.context?.state?.demo
    : {
        content: '默认数据'
      },

  // 同步reducer
  reducers: {},
  // 异步reducer
  extraReducers(build) {
    build
      .addCase(getDemoData.pending, (state) => {
        state.content = 'pending'
      })
      .addCase(getDemoData.fulfilled, (state, action) => {
        state.content = action.payload
      })
      .addCase(getDemoData.rejected, (state) => {
        state.content = 'rejected'
      })
  }
})

export { demoReducer, getDemoData }
