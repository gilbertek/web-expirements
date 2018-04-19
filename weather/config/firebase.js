import { initializeApp } from 'firebase';

// configure the firebase app
const app = initializeApp({
  apiKey: '',
  databaseUrl: 'https://weather.firebaseio.com',
  projectId: 'weather',
});

// get reference to the database
const database = app.database();

// export reference to database
export default database;
