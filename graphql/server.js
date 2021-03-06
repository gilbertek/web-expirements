const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./server/schema');

const server = express();
const port = parseInt(process.env.PORT, 10) || 3000;

server.use('/', expressGraphQL({
  schema,
  graphiql: true,
}));

server.listen(port, (err) => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:${port}`);
});
