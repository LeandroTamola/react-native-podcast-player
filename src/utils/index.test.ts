import {getDay, getDuration, removeHtmlTags} from './';

test('getDay to return the full week name', () => {
  const date = 'Wed, 25 Apr 2018 22:37:10 +0000';
  expect(getDay(date)).toBe('Wednesday');
});

test('removeHtmlTags to return the inner HTML', () => {
  const pTagDescription = '<p>Matthew Walkeer is Professor</p>';
  expect(removeHtmlTags(pTagDescription)).toBe('Matthew Walkeer is Professor');
});

test('getDuration to return Xhrs. Xmin', () => {
  const duration = '02:02:35';
  expect(getDuration(duration)).toBe('2hrs. 2min');
});
