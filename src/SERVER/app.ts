import express, { Express } from 'express';
import https, { Server } from 'https';
import fs from 'fs';
import path from 'path';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import router from './routes/index.js';

import { tryCredentials } from './utilities/authorise.js';
const __dirname: string = process.env.PWD || '';

dotenv.config({
  path: path.resolve(
    __dirname,
    `config${process.env.NODE_ENV === 'production' ? '' : '.dev'}.env`,
  ),
});
tryCredentials();

const currentEnv: string = process.env.NODE_ENV || 'development';
const currentVersion: string = process.env.VERSION || 'unknown version';

const appHTTPS: Express = express();

console.log(' Application started\n', `Environment: ${currentEnv}`);

if (currentEnv === 'production') {
  console.log(` Version: ${process.env.PROD_VERSION}\n`);
}
if (currentEnv === 'development') {
  console.log(` Version: ${currentVersion}`);
  appHTTPS.use(morgan('tiny'));
}

appHTTPS.use(express.json());

const corsConfiguration: { origin: string[] } = {
  origin: [
    'http://localhost:9000',
    'http://localhost:3000',
    'http://localhost:8080',
    'https://poludnev.github.io',
    'https://hidden-tundra-18474.herokuapp.com',
  ],
};

appHTTPS.use(cors(corsConfiguration));
appHTTPS.use(express.static(path.resolve(__dirname, './Ver2/dist/APP')));
// console.log(path.resolve(__dirname, './Ver2/dist/APP'));
// appHTTPS.set('views', path.resolve(__dirname, 'views'));
// appHTTPS.set('view engine', 'pug');

appHTTPS.use('/api', router.apiRouter);
appHTTPS.use('/', router.indexRouter);

// configurate https certificate
const keyAddress: string = path.resolve(
  path.format({
    root: process.env.PWD,
    dir: `${process.env.CERT_ADDRESS}`,
    name: process.env.CERT_NAME,
    ext: '.key',
  }),
);

const certAddress: string = path.resolve(
  path.format({
    root: process.env.PWD,
    dir: `${process.env.CERT_ADDRESS}`,
    name: process.env.CERT_NAME,
    ext: '.crt',
  }),
);

const key: Buffer = fs.readFileSync(keyAddress);
const cert: Buffer = fs.readFileSync(certAddress);

// initiate https
const httpsOptions: { key: Buffer; cert: Buffer } = { key, cert };

export const serverHTTPS: Server = https.createServer(httpsOptions, appHTTPS);

export const serverHTTP: Express = express();
serverHTTP.use('/', router.redirect);
