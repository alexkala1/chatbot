const express = require('express')
const cors = require('cors');
const morgan = require('morgan')
const helmet = require('helmet');
require('dotenv').config();

const app = express();

app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());



app.get('/', (request, response) => {
	response.json({
		message: 'Welcome to chat bot app'
	})
})

const port = process.env.PORT
app.listen(port, ()  => {
	console.log(`listening at http://localhost:${port}`)
})