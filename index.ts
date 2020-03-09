require('./.env')
import Obniz from 'obniz';

const obniz = new Obniz(process.env.OBNIZ_ID);

obniz.connect();
obniz.connectWait().then(() => {
  console.log('connected');
});
