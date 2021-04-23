import express from 'express'

import config from './config.js'
import abilities from './routes/abilities.js'
import character from './routes/character.js'
import primary from './routes/primary.js'
import secondary from './routes/secondary.js'
import weapons from './routes/weapons.js'

const app = express()

app.use('/api/abilites', abilities)
app.use('/api/character/', character)
app.use('/api/weapons/primary/', primary)
app.use('/api/weapons/secondary/', secondary)
app.use('/api/weapons/', weapons)

app.listen(config.port, () => console.log(`Listening to port: ${config.port}`))