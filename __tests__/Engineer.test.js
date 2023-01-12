const Engineer = require("../lib/Engineer")
const tName = 'test name';
const tId = 'test id';
const tEmail = 'test@email.com'
const tGithub = 'emmwimm'
const tEngineer = new Engineer(tName, tId, tEmail, tGithub);

test('validate constructor ', () => {
    expect(tEngineer.name).toBe(tName);
    expect(tEngineer.id).toBe(tId);
    expect(tEngineer.email).toBe(tEmail);
    expect(tEngineer.github).toBe(tGithub);
});

//test getters
test('validate getRole', () => {expect(tEngineer.getRole()).toBe('Engineer')});
test('validate getGithub', () => {expect(tEngineer.getGithub()).toBe(tGithub)});
test('validate getGithubLink', () => {expect(tEngineer.getGithubLink()).toBe("<a href='https://github.com/"+tEngineer.github+"'>"+tEngineer.github+"</a>")});
test('validate getExtraStuff', () => {
    expect(tEngineer.getExtraStuff()[0]).toBe('Github');
    expect(tEngineer.getExtraStuff()[1]).toBe("<a href='https://github.com/emmwimm'>emmwimm</a>");
});

//test inherited getters?
test('validate inherited getName', () => {expect(tEngineer.getName()).toBe(tName)});
test('validate inherited getEmail', () => {expect(tEngineer.getEmail()).toBe(tEmail)});
test('validate inherited getId', () => {expect(tEngineer.getId()).toBe(tId)});
//test('', () => {expect().toBe()});