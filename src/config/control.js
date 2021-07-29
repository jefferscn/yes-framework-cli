import IconFont from '../font';
import * as defaultControls from 'yes-framework';
const context = require.context('../controls', true, /.js$/);

const obj = {};
Object.assign(obj, defaultControls);

context.keys().forEach((key) => {
  const c = context(key).default;
  if(c.key) {
    obj[c.key] =  c;
  } else {
    const name = key.split('/').pop() // remove the first 2 characters
      .split('.').shift(); // remove the file extension
    obj[name] = c;
  }
});

obj['IconFont'] = IconFont;

export default obj;
