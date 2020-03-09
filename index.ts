require('./.env')
import Obniz from 'obniz';
const obniz = new Obniz(process.env.OBNIZ_ID);
const lineNotify = require('line-notify-nodejs')(process.env.LINE_NOTIFY_TOKEN);

obniz.connect();
obniz.connectWait().then(async () => {
  const sensor = obniz.wired("SHT31", { vcc: 0, sda: 1, scl: 2, adr: 3, gnd: 4, addressmode: 5 });

  setInterval(async () => {
    const data = await sensor.getAllWait();
    console.log({ data });
    
    if (data.humidity < 40) {
      await lineNotify.notify({
        message: '乾いたよ',
      })
    }
  }, 60000);
});
