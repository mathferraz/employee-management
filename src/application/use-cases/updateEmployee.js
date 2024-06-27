const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = async (data) => {
  const params = {
    TableName: 'Employees',
    Key: {
      id: data.id,
    },
    UpdateExpression: 'set idade = :idade, nome = :nome, cargo = :cargo',
    ExpressionAttributeValues: {
      ':idade': data.idade,
      ':nome': data.nome,
      ':cargo': data.cargo,
    },
    ReturnValues: 'ALL_NEW',
  };

  const result = await dynamoDb.update(params).promise();
  return result.Attributes;
};
