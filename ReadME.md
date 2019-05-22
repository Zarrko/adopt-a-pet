# Adopt Me for Pets. 
This project is part of Frontend masters course on React. 

## Getting Started
Getting up and running should be a simple step. You will need to install dependencies using either npm/yarn:

This can be done as follows:

```bash
npm install
# or
yarn install
```
    
> This will install all dependencies for the project under the `node_modules` directory

## Running the application

You can run the application using the `start` script task provided in the package.json file.

```bash
npm run dev

```

Ensure that you have a `.env` file in the root of the project that specifies environment variables to use. 
These environment variables can be attached to the containers that will be span up by docker componse

The .env file will look like below:

```dotenv
API_KEY = <API_KEY>
API_SECRET=<API_SECRET>
```
> Ensure you have the correct API_KEY and API_SECRET from petfinder.com

## Running tests (Low Confidence Tests)

```bash
npm test

```

To update a Snapshot (Go easy on them...)
```bash
npm run test:update

```

### Run tests interavtively
```bash
npm run test:watch

```


