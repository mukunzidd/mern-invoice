import chalk from 'chalk';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';

const app = express();

if (process.env.NODE_ENV === 'dev') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.get('/api/v1/test', (req, res) => {
  res.json({ hi: 'Welcome to the Invoice API' });
});

const PORT = process.env.PORT || 1994;

app.listen(PORT, () => {
  console.log(
    `${chalk.green.bold('✔')} 👍 server is running in ${chalk.yellow.bold(
      process.env.NODE_ENV
    )} mode on port ${chalk.blue.bold(PORT)}`
  );
});
