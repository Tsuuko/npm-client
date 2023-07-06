import { Test } from '@tsuuko/npm-test';

(async () => {
  console.log(Test.initialValue);
  const t = new Test();
  console.log(t.count);

  t.increment();
  t.increment();
  console.log(t.count);

  t.decrement();
  console.log(t.count);
})();
