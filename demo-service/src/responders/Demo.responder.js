import {Responder} from 'cote';

import config from '../config';
import * as Controller from '../controllers/Demo.controller';

export default function start() {
  const responder = new Responder({
    name: 'demo responder',
    namespace: 'demo',
  });

  responder.on('get', Controller.get);

  if (config.debug) {
    responder.on('*', console.log);
  }
}
