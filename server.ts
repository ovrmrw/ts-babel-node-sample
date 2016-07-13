import 'babel-polyfill';
import lodash from 'lodash';

(async () => {
  const start = lodash.now();
  console.log(1);

  await new Promise(resolve => {
    setTimeout(() => {      
      console.log(2);
      resolve();
    }, 2000);
  });

  console.log(3);
  console.log(lodash.now() - start + 'ms passed.');
})();