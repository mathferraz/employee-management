const getEmployee = require('../../../src/application/use-cases/getEmployee');

describe('Get Employee', () => {
  it('should fetch employee details by id', async () => {
    const employeeId = '1';
    const employee = await getEmployee(employeeId);

    expect(employee).toBeDefined();
    expect(employee.id).toBe(employeeId);
    expect(employee.name).toBe('John');
    expect(employee.position).toBe('Senior Developer');
  });

  it('should handle employee not found', async () => {
    const invalidEmployeeId = '999';
    const employee = await getEmployee(invalidEmployeeId);

    expect(employee).toBeNull();
  });
});
