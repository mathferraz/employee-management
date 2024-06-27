const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = async (id) => {
  const params = {
    TableName: 'Employees',
    Key: {
      id: id,
    },
  };

  await dynamoDb.delete(params).promise();
  return { message: 'Employee deleted successfully' };
};
