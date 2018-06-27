import {NativeModules} from 'react-native';

const Buffer = require('buffer/').Buffer;

export default NativeModules.AnylineSDKPlugin;

/**
 * Decrypts the License and returns the date till it's valid
 *
 * @param License
 */
export const getLicenseExpiryDate = (License) => {
  console.log("@@@@@@@@@@@@@@@@@@");
  console.log("@@@@@@@@@@@@@@@@@@");
  const licenseString = Buffer.from(License, 'base64').toString('ascii');
  const licenseJsonString = licenseString.substr(0, licenseString.lastIndexOf('}')+1);
  const licenseJson = JSON.parse(licenseJsonString);
  return licenseJson.valid;
};