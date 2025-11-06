const timesTwo = require('./timesTwo')

test('return the number', ()=> {
    expect(timesTwo(3)).toBe(7);
})