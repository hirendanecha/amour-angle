const url = 'https://api.amourangles.tube';
const webUrl = 'https://amourangles.tube/';
const tubeUrl = 'https://video.amourangles.tube/';

// const url = 'http://localhost:8080';
// const webUrl = 'http://localhost:4200/';

export const environment = {
  production: false,
  hmr: false,
  serverUrl: `${url}/api/v1/`,
  socketUrl: `${url}/`,
  webUrl: webUrl,
  tubeUrl: tubeUrl,
  domain: '.amourangles.tube',
  siteKey: '0x4AAAAAAAcB0TNHKPsd00zc',
  secretKey: '0x4AAAAAAAcB0dxtzqUZmRAFmo3p-S7ibI0',
  qrLink: `${webUrl}settings/edit-profile/`,
  EncryptIV: 8625401029409790,
  EncryptKey: 8625401029409790,
};
