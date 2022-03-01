import fs from 'fs';

export const tryCredentials = () => {
  const path = process.env.GOOGLE_APPLICATION_CREDENTIALS;
  if (!path) return false;
  return fs.statSync(path);
}