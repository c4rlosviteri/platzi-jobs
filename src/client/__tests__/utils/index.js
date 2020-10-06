import { stripHtml, formatDate, pipe, filterOrSkip } from '../../utils'

describe('utils', () => {
  test('should strip html tags', () => {
    expect(
      stripHtml(
        '<p>Email me: <a href="mailto:carlos@gmail.com">carlos@gmail.com</a></p>',
      ),
    ).toMatch(/Email me: carlos@gmail.com/)
  })

  test('should avoid replacing normal text', () => {
    expect(
      stripHtml('My name is Carlos Viteri and I wanna work at Platzi'),
    ).toMatch(/My name is Carlos Viteri and I wanna work at Platzi/)
  })

  test('should formats a date correctly', () => {
    expect(formatDate('Mon Sep 07 19:38:15 UTC 2020')).toMatch(
      /Sep 7, 2020, 2:38 PM/,
    )
  })

  test('should pipe functions', () => {
    const addTwo = (number) => number + 2

    expect(pipe(addTwo, addTwo)(1)).toBe(5)
  })

  test('should skip filtering if conditional is falsy', () => {
    const array = [1, 2]

    expect(
      filterOrSkip(array, false, (arr) => arr.filter((num) => num !== 1)),
    ).toMatchObject([1, 2])
  })

  test('should filter if conditional is truthy', () => {
    const array = [1, 2]

    expect(
      filterOrSkip(array, true, (arr) => arr.filter((num) => num !== 1)),
    ).toMatchObject([2])
  })
})
