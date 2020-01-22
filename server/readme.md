# TSE-REST-API by Malignant

This is a REST API made by Malignant Developers in order to facilitate access to the Data provided by the original API. This API *for now* uses Mongo DB and Mongoose for ODM. It's main purpose is to provide pagination, match and sorting criteria.
**This repo is still under development**

# Files
There are still some files to be removed but you should be focused *for now* on the following files.
src/
├── app.js
├── db
│   └── mongoose.js
├── models
│   ├── corte.js
│   ├── eleccion.js
│   ├── lugar.js
│   
├── routes
│   └── cortes.js
└── utils
    └── dataloader.js

5 directories, 11 files

## Usage
There are two main routes that you should be using:
 - /corte
 - /corte/:type?params
### /Corte
This endpoint returns basic meta-data, please remember Mongoose adds a extra field for versioning so this extra __v is not provided with the original data set.
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
 2. Provided parameters, this is used for limiting the original data set (made out of +6000 lines per type). This supports 'limit' and 'skip' to archive pagination.
#### Example Output
In your preferred API Client access the following endpoint (remember to run the server):
```localhost/corte/A?limit=2&skip=1```
This endpoint will limit the output to two documents for the Election of type 'A' or 'Alcalde' and access the page number 2
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
```terminal
npm i
```
Start the server using nodemon:
```
npm run dev
```
## Features Under Development

 1. Sorting and Matching
 2. Migration into TypeScript
 3. Migration into MySql and Sqlize odm
 4. Code Refractoring

