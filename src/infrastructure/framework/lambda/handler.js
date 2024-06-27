const createEmployee = require('../../../application/use-cases/createEmployee');
const getEmployee = require('../../../application/use-cases/getEmployee');
const updateEmployee = require('../../../application/use-cases/updateEmployee');
const deleteEmployee = require('../../../application/use-cases/deleteEmployee');

module.exports.create = async (event) => {
  const data = JSON.parse(event.body);

  try {
    const employee = await createEmployee(data);
    return {
      statusCode: 200,
      body: JSON.stringify(employee),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Could not create employee' }),
    };
  }
};

module.exports.get = async (event) => {
  const id = event.pathParameters.id;

  try {
    const employee = await getEmployee(id);
    if (employee) {
      return {
        statusCode: 200,
        body: JSON.stringify(employee),
      };
    } else {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'Employee not found' }),
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Could not fetch employee' }),
    };
  }
};

module.exports.update = async (event) => {
  const data = JSON.parse(event.body);

  try {
    const employee = await updateEmployee(data);
    return {
      statusCode: 200,
      body: JSON.stringify(employee),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Could not update employee' }),
    };
  }
};

module.exports.delete = async (event) => {
  const id = event.pathParameters.id;

  try {
    const result = await deleteEmployee(id);
    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Could not delete employee' }),
    };
  }
};
