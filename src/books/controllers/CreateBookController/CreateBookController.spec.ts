import { PrismaClient } from "@prisma/client"
import { App } from "../../../app"

describe('Create book controller', () => {
  const connection = Object.create(PrismaClient.prototype)
  const app = App.newApp(connection)

  it('should return created book', async () => {
    
  })
})
