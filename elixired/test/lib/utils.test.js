import expect from 'expect';
import * as utils from '../../src/lib/Utils';

describe('parseText', () => {
  it('returns text with parsed link', () => {
    const actual = 'This is a link to Google http://google.com';
    const expected = `This is a link to Google <a href='http://google.com'>http://google.com</a>`;
    expect(utils.parseText(actual)).toEqual(expected);
  });

  it('returns text with parsed link in the middle', () => {
    const actual = 'A link to Google http://google.com for searching.';
    const expected = `A link to Google <a href='http://google.com'>http://google.com</a> for searching.`;
    expect(utils.parseText(actual)).toEqual(expected);
  });
});
