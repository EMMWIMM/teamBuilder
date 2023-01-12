const index = require('../src/generateMarkedown.js');

test('validate renderTitleIcon', () => {
    expect(renderTitleIcon("Manager")).toBe('&#xF4C8;');
    expect(renderTitleIcon("Engineer")).toBe('&#xF6A5;');
    expect(renderTitleIcon("Intern")).toBe('&#xF6FD;');
    expect(renderTitleIcon("CEO")).toBe(' ');
});
//test('', () => {expect().toBe()});
//test('', () => {expect().toBe()});