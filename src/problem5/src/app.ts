import express from 'express'
import { PrismaClient } from "@prisma/client"
import router from '../routes/routes'

export const app = express()

app.use(express.json())

app.use(router);

const prisma = new PrismaClient()