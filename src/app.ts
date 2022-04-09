import { Request, Response } from 'express'
import express = require('express')

const app = express()

app.get('/', (request: Request, response: Response) => {
  response.status(204)
})

export default app
