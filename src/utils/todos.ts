// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import shortid from 'shortid';

export default [
  {
    id: shortid.generate(),
    text: 'Buy me a coffee',
    done: false,
    color: 'blue',
  },
  {
    id: shortid.generate(),
    text: 'Grocery Shopping',
    done: false,
    color: 'orange',
  },
];
