import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import expressGraphQL from 'express-graphql';

dotenv.config();

const app = express();

/*
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'access.log'),
  { flag: 'a' }
);
*/

const schema = require('./server/schema');

// CORS configuration, in which the origin parameter
const corsOptions = {
  origin: ['http://localhost:3000'],
  credentials: true,
};

app
  .use(cors(corsOptions))
  .use(bodyParser())
  .use(
    '/',
    expressGraphQL({
      schema,
      // rootValue: root,
      graphiql: true,
    })
  );

app.listen(env.PORT, () => {
  console.log(`Server is running at ${env.HOST}:${env.PORT}`);
});
