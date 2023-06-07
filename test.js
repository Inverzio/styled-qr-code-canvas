const  styled = require('../styled-qr-code/dist');

const BASE_QR_IMAGE = './src/assets/img.png';


const width = 600;
const height = 600;
const dataForQRcode = `test/qr/example`;

const my_f = async () => {
  return await  new styled.QRCodeCanvas({
    width: width,
    height: height,
    data: dataForQRcode,
    margin: 14,
    qrOptions: { typeNumber: 8, mode: 'Byte', errorCorrectionLevel: 'H' },
    imageOptions: { hideBackgroundDots: true, imageSize: 0.7, margin: 0 },
    dotsOptions: { type: 'dots', color: '#0e1d31', gradient: undefined },
    backgroundOptions: { color: '#ffffff' },
    image: BASE_QR_IMAGE,
    cornersSquareOptions: { type: 'extra-rounded', color: '#101d31' },
    cornersDotOptions: { type: 'dot', color: '#101d31' }
  }).toDataUrl();
}

const buffer = my_f().then(res => console.log(res)).catch(e => console.error(e));
