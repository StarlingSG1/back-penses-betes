import { launch } from './server'

const port = parseInt(process.env.PORT) || 8082
launch(port)
