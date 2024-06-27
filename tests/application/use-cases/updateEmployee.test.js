const updateEmployee = require('../../../src/application/use-cases/updateEmployee');

describe('Update Employee', () => {
  it('should update employee details', async () => {
    const employeeData = {
      id: '1',
      age: 32,
      name: 'John Doe',
      position: 'Lead Developer',
    };

    const updatedEmployee = await updateEmployee(employeeData);

    expect(updatedEmployee).toBeDefined();
    expect(updatedEmployee.id).toBe(employeeData.id);
    expect(updatedEmployee.age).toBe(employeeData.age);
    expect(updatedEmployee.name).toBe(employeeData.name);
    expect(updatedEmployee.position).toBe(employeeData.position);
  });

  it('should handle invalid employee data', async () => {
    const invalidEmployeeData = {
      id: '2',
      age: 'Invalid',
      name: 'Jane',
      position: 'Junior Developer',
    };

    await expect(updateEmployee(invalidEmployeeData)).rejects.toThrow();
  });
});
