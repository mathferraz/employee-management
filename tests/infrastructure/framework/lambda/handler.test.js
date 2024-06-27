const { create, get, update, delete: deleteHandler } = require('../../../src/infrastructure/framework/lambda/handler');

describe('Lambda Handler', () => {
  const mockEvent = {
    body: JSON.stringify({
      id: '1',
      age: 30,
      name: 'John',
      position: 'Senior Developer',
    }),
    pathParameters: {
      id: '1',
    },
  };

  it('should handle create employee', async () => {
    const response = await create(mockEvent);
    const responseBody = JSON.parse(response.body);

    expect(response.statusCode).toBe(200);
    expect(responseBody.id).toBe('1');
    expect(responseBody.name).toBe('John');
  });

  it('should handle get employee', async () => {
    const response = await get(mockEvent);
    const responseBody = JSON.parse(response.body);

    expect(response.statusCode).toBe(200);
    expect(responseBody.id).toBe('1');
    expect(responseBody.name).toBe('John');
  });

  it('should handle update employee', async () => {
    const response = await update(mockEvent);
    const responseBody = JSON.parse(response.body);

    expect(response.statusCode).toBe(200);
    expect(responseBody.id).toBe('1');
    expect(responseBody.age).toBe(30);
  });

  it('should handle delete employee', async () => {
    const response = await deleteHandler(mockEvent);
    const responseBody = JSON.parse(response.body);

    expect(response.statusCode).toBe(200);
    expect(responseBody.message).toContain('deleted successfully');
  });
});
