const deleteEmployee = require('../../../src/application/use-cases/deleteEmployee');

describe('Delete Employee', () => {
  it('should delete employee by id', async () => {
    const employeeId = '1';
    const deletionResult = await deleteEmployee(employeeId);

    expect(deletionResult).toBeDefined();
    expect(deletionResult.message).toContain('deleted successfully');
  });

  it('should handle deletion of non-existing employee', async () => {
    const invalidEmployeeId = '999';
    const deletionResult = await deleteEmployee(invalidEmployeeId);

    expect(deletionResult).toBeDefined();
    expect(deletionResult.message).toContain('not found');
  });
});
