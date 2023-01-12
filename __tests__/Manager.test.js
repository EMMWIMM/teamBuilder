const Manager = require("../lib/Manager")
const tName = 'test name';
const tId = 'test id';
const tEmail = 'test@email.com'
const tOffice = '101'
const tManager = new Manager(tName, tId, tEmail, tOffice);

test('validate constructor ', () => {
    expect(tManager.name).toBe(tName);
    expect(tManager.id).toBe(tId);
    expect(tManager.email).toBe(tEmail);
    expect(tManager.officeNumber).toBe(tOffice);
});

//test getters
test('validate getRole', () => {expect(tManager.getRole()).toBe('Manager')});
test('validate getOfficeNumber', () => {expect(tManager.getOfficeNumber()).toBe(tOffice)});
test('validate getExtraStuff', () => {
    expect(tManager.getExtraStuff()[0]).toBe('Office Number');
    expect(tManager.getExtraStuff()[1]).toBe(tOffice);
});

//test inherited getters?
test('validate inherited getName', () => {expect(tManager.getName()).toBe(tName)});
test('validate inherited getEmail', () => {expect(tManager.getEmail()).toBe(tEmail)});
test('validate inherited getId', () => {expect(tManager.getId()).toBe(tId)});
//test('', () => {expect().toBe()})
