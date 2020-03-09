require('./.env')
import Obniz from 'obniz';
const lineNotify = require('line-notify-nodejs')(process.env.LINE_NOTIFY_TOKEN);

const callback = async () => {
  const obniz = new Obniz(process.env.OBNIZ_ID);
  obniz.connect();
  await obniz.connectWait({});
  
  const sensor = obniz.wired("SHT31", { vcc: 0, sda: 1, scl: 2, adr: 3, gnd: 4, addressmode: 5 });
  const data = await sensor.getAllWait();
  console.log({ data });
  
  if (data.humidity < 35) {
    await lineNotify.notify({
      message: '乾いたよ',
    })
  }

  obniz.close();
}

setInterval(callback, 60000);
