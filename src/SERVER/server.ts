import { serverHTTP as appHTTP, serverHTTPS as appHTTPS } from './app.js';

// console.log('try cred', process.env);
const HTTPport: string = process.env.HTTP_PORT || '80';

export const serverHTTP: () => void = () => {
  appHTTP.listen(HTTPport, () => {
    console.log(`HTTP running on port ${HTTPport}`);
  });
}

const HTTPSport: string = process.env.HTTPS_PORT || '443';

export const serverHTTPS: () => void = () => {
  appHTTPS.listen(HTTPSport, () => {
    console.log(`HTTPS running on port ${HTTPSport}`);
  });
}
