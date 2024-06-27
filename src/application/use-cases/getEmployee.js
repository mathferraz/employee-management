const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = async (id) => {
  const params = {
    TableName: 'Employees',
    Key: {
      id: id,
    },
  };

  const result = await dynamoDb.get(params).promise();
  return result.Item;
};
