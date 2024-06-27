const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const Employee = require('../../domain/entities/Employee')

module.exports = async (data) => {
  const employee = new Employee(data.id, data.idade, data.nome, data.cargo);

  const params = {
    TableName: 'Employees',
    Item: {
      id: employee.id,
      idade: employee.idade,
      nome: employee.nome,
      cargo: employee.cargo,
    },
  };

  await dynamoDb.put(params).promise();

  return employee;
};
