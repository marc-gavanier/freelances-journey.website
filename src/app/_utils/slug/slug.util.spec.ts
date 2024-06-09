import { describe, expect, it } from 'vitest';
import { bySlug, slugify } from './slug.util';

describe('slug', (): void => {
  it('should find item by slug', (): void => {
    expect(bySlug('test')({ slug: 'test' })).toBe(true);
  });

  it('should not find item by slug', (): void => {
    expect(bySlug('test')({ slug: 'hello' })).toBe(false);
  });

  it('should slugify simple string', (): void => {
    expect(slugify('test')).toBe('test');
  });

  it('should slugify string with space', (): void => {
    expect(slugify('hello test')).toBe('hello-test');
  });

  it('should slugify string with multiple dashes', (): void => {
    expect(slugify('hello--test')).toBe('hello-test');
  });

  it('should slugify string with special chars', (): void => {
    expect(slugify('hello@test')).toBe('hellotest');
  });

  it('should slugify string with upper case chars', (): void => {
    expect(slugify('HelloTest')).toBe('hellotest');
  });

  it('should slugify string starting and ending with spaces', (): void => {
    expect(slugify(' hello test ')).toBe('hello-test');
  });

  it('should slugify string with accented chars', (): void => {
    expect(slugify(' testé ')).toBe('teste');
  });

  it('should slugify ending question mark', (): void => {
    expect(slugify('Hello ?')).toBe('hello');
  });

  it('should slugify apostrophe', (): void => {
    expect(slugify("I'm back")).toBe('i-m-back');
  });
});
