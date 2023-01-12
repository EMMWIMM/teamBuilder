const Employee = require('../lib/Employee.js');
const emp = new Employee('test name','test id','test email');

test('employee getRole should be Employee', () => {
    expect(emp.getRole()).toBe('Employee');
}); 

test('validate constructor worked', () => {
    expect(emp.name).toBe('test name');
    expect(emp.id).toBe('test id');
    expect(emp.email).toBe('test email');
});

test('getExtraStuff returns NOTHING for Employee', () => {
    expect(emp.getExtraStuff()).toBe(undefined)
});
test('validate getName', () => {expect(emp.getName()).toBe('test name')});
test('validate getid', () => {expect(emp.getId()).toBe('test id')});
test('validate getEmail', () => {expect(emp.getEmail()).toBe('test email')});
//test('', () => {expect().toBe()});