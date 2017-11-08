import cote from 'cote';

const requester = new cote.Requester({
  name: 'demo requester',
  namespace: 'demo',
});


export function getDemoData(input, cb) {
  requester.send({type: 'get', ...input}, cb);
}
