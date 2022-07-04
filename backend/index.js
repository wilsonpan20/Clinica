const express = require('express')
const cors = require('cors')
const port = 5000

const app = express()

// Config JSON response
app.use(express.json())

// Solve CORS
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))

// Public folder for images
app.use(express.static('public'))

// Routes
//const PatientRoutes = require('./routes/PatientRoutes')
const UserRoutes = require('./routes/UserRoutes')

//app.use('/patient', PatientRoutes)
app.use('/users', UserRoutes)

app.listen(port,()=> console.log(`Serviço rodando na porta${port}`))
