import { MongoMemoryServer } from 'mongodb-memory-server'
import { MongoClient } from 'mongodb' 

export default class Database {

  private _mongod: Promise<MongoMemoryServer>
  private _Uri: string = ""
  public get Uri() {
    return this._Uri
  }

  public isReady(): Promise<any> {
    return new Promise((res) => {
      this._mongod.then(() => {
        res(true)
      })
    })
  }
  
  private static instance: Database
  public static getInstance(): Database {
    if(!Database.instance) {
      Database.instance = new Database()
    }
    return Database.instance
  }

  private constructor() {
    this._mongod = new Promise(async (res, rej) => {
      console.log('connecting to database...')
      const server = await MongoMemoryServer.create()
      this._Uri = server.getUri()
      console.log('database connected.')
      return
    })
  }

  public stop = async () => {
    const mongod = await this._mongod
    mongod.stop()
  }
}


