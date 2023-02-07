import express, { Express } from 'express'

export default class App {
  /* Express server object */
  private _server: Express

  /* Crates new express server and runs the setup, routes, 
    and middleware functions.  */
  constructor() {
    this._server = express()
  }
}
