import express from 'express'
import employees_routes from './routes/employees.routes.js'
import index_routes from  './routes/index.routes.js'

const app = express()

app.use(express.json()) 

app.use(index_routes)
app.use('/api', employees_routes)
app.use((req, res, next) =>{
  res.status(404).json({
    msg:'endpoint not found!!!'
  })
})

export default app