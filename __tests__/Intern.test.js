const Intern = require("../lib/Intern")
const tName = 'test name';
const tId = 'test id';
const tEmail = 'test@email.com'
const tSchool = 'test University'
const tIntern = new Intern(tName, tId, tEmail, tSchool);

test('validate constructor ', () => {
    expect(tIntern.name).toBe(tName);
    expect(tIntern.id).toBe(tId);
    expect(tIntern.email).toBe(tEmail);
    expect(tIntern.school).toBe(tSchool);
});

//test getters
test('validate getRole', () => {expect(tIntern.getRole()).toBe('Intern')});
test('validate getSchool', () => {expect(tIntern.getSchool()).toBe(tSchool)});
test('validate getExtraStuff', () => {
    expect(tIntern.getExtraStuff()[0]).toBe('School');
    expect(tIntern.getExtraStuff()[1]).toBe(tSchool);
});

//test inherited getters?
test('validate inherited getName', () => {expect(tIntern.getName()).toBe(tName)});
test('validate inherited getEmail', () => {expect(tIntern.getEmail()).toBe(tEmail)});
test('validate inherited getId', () => {expect(tIntern.getId()).toBe(tId)});
//test('', () => {expect().toBe()});
