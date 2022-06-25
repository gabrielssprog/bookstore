import { PrismaClient } from "@prisma/client"
import express from "express"
import { Routes } from "./routes"

export class App {
  public static newApp(connection: PrismaClient) {
    const app = express()
    const routes = Routes.newRoutes(connection)

    app.use(routes)

    return app
  }
}
