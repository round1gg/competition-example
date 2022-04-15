import { Request, Response } from 'express'
import * as express from 'express'
import Database from './database'
import { TournamentRoutes } from './routes'

const app = express()

app.get('/', (request: Request, response: Response) => {
  response.status(204)
})

// Routes
const tournamentRoutes = new TournamentRoutes()
app.use('/', tournamentRoutes.router)



export default app

