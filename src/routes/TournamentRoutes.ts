import * as express from "express"
import * as bodyParser from "body-parser"
import { GetTournamentById } from '../models'

export class TournamentRoutes { 
  public path: string = '/tournament'
  public router = express.Router()

  constructor() {
    this._initialize()
  }

  /**
   * Create all of the Tournament routes
   */
  private _initialize = (): void => {
    this.router.get(this.path + "/id/:tournamentId", GetTournamentById)
  }



}