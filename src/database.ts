import { MongoMemoryServer } from 'mongodb-memory-server'

class Database {

  private _mongod: MongoMemoryServer | null = null
  
  private static instance: Database
  public static getInstance(): Database {
    if(!Database.instance) {
      Database.instance = new Database()
    }
    return Database.instance
  }

  constructor() {
    this.connect()   
  }

  public connect = async () => {
    this._mongod = await MongoMemoryServer.create()
  }

  public stop = async () => {
    await this._mongod?.stop()
  }

  public getUri = () => {
    return this._mongod?.getUri

  }
}
