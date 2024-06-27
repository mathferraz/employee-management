const createEmployee = require('../../../src/application/use-cases/createEmployee');

class MockEmployee {
  constructor(id, age, name, position) {
    this.id = id;
    this.age = age;
    this.name = name;
    this.position = position;
  }
}

describe('Create Employee', () => {
  it('should create a new employee', async () => {
    const employeeData = {
      id: '1',
      age: 30,
      name: 'John',
      position: 'Senior Developer',
    };

    const employee = await createEmployee(employeeData);

    expect(employee).toBeInstanceOf(MockEmployee);
    expect(employee.id).toBe('1');
    expect(employee.age).toBe(30);
    expect(employee.name).toBe('John');
    expect(employee.position).toBe('Senior Developer');
  });

  it('should handle invalid input', async () => {
    const invalidEmployeeData = {
      id: '2',
      age: 'Invalid',
      name: 'Jane',
      position: 'Junior Developer',
    };

    await expect(createEmployee(invalidEmployeeData)).rejects.toThrow();
  });
});
