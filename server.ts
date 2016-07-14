import 'babel-polyfill';
import lodash from 'lodash';


console.log(1);

(async () => {
  const start = lodash.now();
  console.log(2);

  await new Promise(resolve => {
    setTimeout(() => {      
      console.log(4);
      resolve();
    }, 2000);
  });

  console.log(5);
  console.log(lodash.now() - start + 'ms passed.');
})();

console.log(3);