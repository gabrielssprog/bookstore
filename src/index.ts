import { PrismaClient } from '@prisma/client'
import { App } from './app'

const connection = new PrismaClient()
const app = App.newApp(connection)

app.listen(process.env.PORT || 3001, () => console.log('server running...'))
