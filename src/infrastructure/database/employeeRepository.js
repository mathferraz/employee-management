const dbClient = require('./dbClient');

const TABLE_NAME = 'Employees';

module.exports = {
  create: async (employee) => {
    const params = {
      TableName: TABLE_NAME,
      Item: employee
    };
    await dbClient.put(params).promise();
    return employee;
  },
  getById: async (id) => {
    const params = {
      TableName: TABLE_NAME,
      Key: { id }
    };
    const result = await dbClient.get(params).promise();
    return result.Item;
  },
  update: async (employee) => {
    const params = {
      TableName: TABLE_NAME,
      Item: employee
    };
    await dbClient.put(params).promise();
    return employee;
  },
  delete: async (id) => {
    const params = {
      TableName: TABLE_NAME,
      Key: { id }
    };
    await dbClient.delete(params).promise();
    return id;
  }
};