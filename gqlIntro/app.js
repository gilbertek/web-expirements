import fs             from 'fs';
import path           from 'path';
import dotenv         from 'dotenv';
import express        from 'express';
import bodyParser     from 'body-parser';
import cookieParser   from 'cookie-parser';
import cors           from 'cors';

import graphqlHTTP    from 'express-graphql';

import morgan         from 'morgan';

dotenv.config();

const app             = express();

const accessLogStream = fs.createWriteStream(
                            path.join(__dirname, 'access.log'), { flag: 'a' }
                        )

// CORS configuration, in which the origin parameter
const corsOptions = {
  origin: ['http://localhost:3000'],
  credentials: true
}

app
  .use(
    morgan(
      ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-type] ":referrer" ":user-agent"',
      { stream: accessLogStream }
    )
  )
  .use(cors(corsOptions))
  .use(bodyParser())
  .use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello, world.')
});

app.listen(env.PORT, () => {
  console.log(`Server is running at ${env.HOST}:${env.PORT}`)
});
