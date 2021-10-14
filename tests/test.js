import { filenameToUrl } from '../src/index';

test('test reserved characters', () => {
  expect(filenameToUrl('T<.png')).toBe('T.png');
  expect(filenameToUrl('T>.png')).toBe('T.png');
  expect(filenameToUrl('T".png')).toBe('T.png');
  expect(filenameToUrl('T#.png')).toBe('T.png');
  expect(filenameToUrl('T%.png')).toBe('T.png');
  expect(filenameToUrl('T{.png')).toBe('T.png');
  expect(filenameToUrl('T}.png')).toBe('T.png');
  expect(filenameToUrl('T|.png')).toBe('T.png');
  expect(filenameToUrl('T\.png')).toBe('T.png');
  expect(filenameToUrl('T^.png')).toBe('T.png');
  expect(filenameToUrl('T~.png')).toBe('T.png');
  expect(filenameToUrl('T[.png')).toBe('T.png');
  expect(filenameToUrl('T].png')).toBe('T.png');
  expect(filenameToUrl('T\'.png')).toBe('T.png');
});

test('test unsafe characters', () => {
  expect(filenameToUrl('T;.png')).toBe('T.png');
  expect(filenameToUrl('T/.png')).toBe('T.png');
  expect(filenameToUrl('T?.png')).toBe('T.png');
  expect(filenameToUrl('T:.png')).toBe('T.png');
  expect(filenameToUrl('T@.png')).toBe('T.png');
  expect(filenameToUrl('T=.png')).toBe('T.png');
  expect(filenameToUrl('T&.png')).toBe('T.png');
});

test('test multiple', () => {
  expect(filenameToUrl('T@;$%^.png')).toBe('T.png');
});

test('test Chinese', () => {
  expect(filenameToUrl('中国@人民.png')).toBe('中国人民.png');
});

test('test replacement', () => {
  expect(filenameToUrl('中国@人民.png', {
    replace: '*'
  })).toBe('中国*人民.png');
});
