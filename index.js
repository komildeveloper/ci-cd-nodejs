import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (_, res) => {
  res.json({
    msg: 'Hello World'
  })
})

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
  console.log(PORT)
})
