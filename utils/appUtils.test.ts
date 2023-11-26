import { PageLimit } from '@/types/api';
import { buildRequest, getLink, getPageLimit } from './appUtils';

describe('AppUtils tests', () => {
  test('getPageLimit return value on existing limit', () => {
    expect(getPageLimit('60')).toEqual(PageLimit.L60);
    expect(getPageLimit('40')).toEqual(PageLimit.L40);
  });

  test('getPageLimit return default value on not correct limit', () => {
    expect(getPageLimit('0')).toEqual(PageLimit.L20);
    expect(getPageLimit('10')).toEqual(PageLimit.L20);
    expect(getPageLimit('30')).toEqual(PageLimit.L20);
    expect(getPageLimit('50')).toEqual(PageLimit.L20);
    expect(getPageLimit('70')).toEqual(PageLimit.L20);
    expect(getPageLimit('100')).toEqual(PageLimit.L20);
  });

  test('getLink return link', () => {
    const link = getLink({ query: {} });
    expect(getLink({ query: {} })).toEqual(link);
  });

  test('buildRequest return request', () => {
    const request = buildRequest({ query: {} });
    expect(buildRequest({ query: {} })).toEqual(request);
  });
});
