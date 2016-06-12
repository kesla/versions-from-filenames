import test from 'tapava';
import versionsFromFilenames from './lib/index';

test('versionsFromFilenames()', t => {
  const actual = versionsFromFilenames([
    'foo-bar-1.2.3.tgz',
    'foo-bar-1.2.4.tgz',
    'beep-boop-hello-world-4.0.0.tgz'
  ]);
  const expected = {
    'foo-bar': [
      '1.2.3',
      '1.2.4'
    ],
    'beep-boop-hello-world': [
      '4.0.0'
    ]
  };
  t.deepEqual(actual, expected);
});
