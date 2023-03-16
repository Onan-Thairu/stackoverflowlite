import mssql from 'mssql'
import sqlConfig from '../config/db.config'

class DatabaseConnection {
  public pool: Promise<mssql.ConnectionPool>

  constructor(){
    this.pool = mssql.connect(sqlConfig)
  }

  createRequest(request: mssql.Request, inputParams: { [x:string]: string|number }){
    let keys = Object.keys(inputParams)

    keys.map(keyName => request.input(keyName, inputParams[keyName]))

    return request
  }


  async exec(sp: string, inputParams: { [x:string]: string }) {

    let emptyRequest = await (await this.pool).request()

    let request = this.createRequest(emptyRequest, inputParams)
    let result = await (await request.execute(sp)).recordset

    return result
  }

  checkConnection() {
    return this.pool.then(() => {
      return true
    }).catch(() => false)
  }

}


let DB = new DatabaseConnection()

export default DB