import { Request, Response } from 'express'
import { MongoClient, ObjectId } from 'mongodb'
import Database from '../../database'

export async function GetTournamentById(request: Request, response: Response) {

  const { tournamentId } = request.params

  const mongoServer = Database.getInstance()

  await mongoServer.isReady()

  console.log(mongoServer.Uri)

  const client = new MongoClient(mongoServer.Uri)
  const collection = client.db('App').collection('tournaments')
  
  const query = {
    _id: new ObjectId(tournamentId)
  }
  
  const tournament = await collection.findOne(query)
  if(tournament) {
    response.json(tournament)
  } else {
    response.status(404).json({errors: ["Tournament ID not found."]})
  }
}