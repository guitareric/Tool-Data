import dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';

import { GoogleDriveService } from './googleDriveService';

dotenv.config();

const driveClientId = '417781912750-ss7tp9ofi6k2s40cmpgcr0q7k5eu7pj1.apps.googleusercontent.com';
const driveClientSecret = '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';
const driveRedirectUri = 'https://developers.google.com/oauthplayground';
const driveRefreshToken = '1//04UA0UfKuTbcrCgYIARAAGAQSNwF-L9IrPGmunEFxuN2d0NHJs6RwRY3-iHLIHtZGtli75JTMLNmawaZ21daAJlDkLe7lrks7dno';

(async () => {
  const googleDriveService = new GoogleDriveService(driveClientId, driveClientSecret, driveRedirectUri, driveRefreshToken);

  const finalPath = path.resolve(__dirname, '../public/img.jpg');
  const folderName = 'Tool Data';

  if (!fs.existsSync(finalPath)) {
    throw new Error('File not found!');
  }

  let folder = await googleDriveService.searchFolder(folderName).catch((error) => {
    console.error(error);
    return null;
  });

  if (!folder) {
    folder = await googleDriveService.createFolder(folderName);
  }

  await googleDriveService.saveFile('SpaceX', finalPath, 'image/jpg', folder.id).catch((error) => {
    console.error(error);
  });

  console.info('File uploaded successfully!');

  // Delete the file on the server
  fs.unlinkSync(finalPath);
})();
