# TSE-REST-API by Malignant

This is a REST API made by Malignant Developers in order to facilitate access to the Data provided by the original API. This API *for now* uses Mongo DB and Mongoose for ODM. It's main purpose is to provide pagination, match and sorting criteria.
**This repo is still under development**

## Enpoints

There are two main routes that you should be using:

 - /corte
 - /corte/:type?params

### /Corte

This endpoint returns basic meta-data, please remember Mongoose adds a extra field for version control so this extra __v is not provided with the original data set.

```json
[

	{

		"_id": "5e2792065236e2148c093e55",

		"numero": 6,

		"fecha": "2019-06-07",

		"hora": "01:46 p.m.",

		"__v": 0

	}

]
```

### /corte/:type?params

With this endpoint you have access to the main bulk of data, it provides pagination (limit and sort), search criteria and sorting (*both soon to be added*).

#### Usage

  1. Provide a type for the Election type, accepted values: 'A' or 'R'
  2. Provide parameters, this is used for limiting the original data set (made out of +6000 lines per type). This supports 'limit' and 'skip' to archive pagination and sorting.

#### Example Output

In your preferred API Client access the following endpoint (remember to run the server):
```localhost/corte/A?limit=3&skip=0&sortBy=electores:desc```
This endpoint will limit the output to 3 documents for the Election of type 'A' or 'Alcalde', access the page number 0 and sort by 'electores' in a descending manner.

```json
[
	{
	
		"_id": "5e2792065236e2148c093e66",

		"nivel1": 1,

		"nivel2": 1,

		"nivel3": 1,

		"nivel4": 0,

		"totalMesas": 8,

		"mesasProcesadas": 8,

		"votosEmitidos": 1309,

		"nulosYBlancos": 23,

		"electores": 4712,

		"v": [...],

		"eleccion": "5e2792065236e2148c093e56",

		"__v": 0

	},

	{

		"_id": "5e2792065236e2148c093e74",

		"nivel1": 1,

		"nivel2": 1,

		"nivel3": 1,

		"nivel4": 1,

		"totalMesas": 1,

		"mesasProcesadas": 1,

		"votosEmitidos": 126,

		"nulosYBlancos": 0,

		"electores": 550,

		"v": [...],

		"eleccion": "5e2792065236e2148c093e56",

		"__v": 0

	}
]
```

## Installation

Install dependencies:

```
npm i
```

Start the server:

```
npm run start
```

There is a function which loads up the data over at index.js, if this is your first time using this server, do remember to call it.

```javascript
const app = require('./app')
const {clearDataBase,loadData} = require('./utils/dataloader')

// clearDataBase()
loadData().then(result => console.log(result))

const PORT = 3000 | process.env.PORT

app.listen(PORT, (req,res) => {
    console.log('express server is up!');
})
```

## Features Under Development

  1. ~~Sorting~~
  2. Migration into MySql and Sqlize odm
  3. Migration into TypeScript
