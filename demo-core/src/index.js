import config from './config';

import {getDemoData} from './controllers/Demo.controller';

getDemoData({hello: 'world'}, (data) => {
  console.log(data);
})
