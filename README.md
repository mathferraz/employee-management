# Employee Management API

This project implements an API for managing employees using Clean Architecture, Node.js, AWS Lambda, DynamoDB, and the Serverless Framework.


## Project Structure

employee-management/
|-- src/
|   |-- application/
|   |   |-- use-cases/
|   |   |   |-- createEmployee.js
|   |   |   |-- getEmployee.js
|   |   |   |-- updateEmployee.js
|   |   |   |-- deleteEmployee.js
|   |   |-- entities/
|   |   |   |-- Employee.js
|   |-- infrastructure/
|   |   |-- framework/
|   |   |   |-- lambda/
|   |   |   |   |-- handler.js
|-- serverless.yml
|-- package.json


## Prerequisites

- Node.js (version 14 or higher)
- AWS CLI configured
- Serverless Framework installed globally (`npm install -g serverless`)

**Note**: The `node_modules` folder is not included in this repository. After cloning, run the following command to create it and install dependencies:
  `npm install`


## Installation

1. Clone the repository:

  `git clone https://github.com/mathferraz/employee-management`
  `cd employee-management`

2. Install dependencies if not already installed:
  `npm install`


## Configuration

# Configure AWS CLI

Ensure your AWS credentials are correctly configured. You can set this up using:
  `aws configure`


# Configure Serverless Framework

The serverless.yml file is configured to deploy Lambda functions and DynamoDB in the us-east-1 region. Adjust the region or other settings as needed.

# Running Locally

To run the project locally, use the serverless-offline plugin:
    `npx serverless offline`

The API will be available at http://localhost:3000/dev

# Deployment

To deploy the project to AWS, run:
    `npx serverless deploy`

## API Endpoints

# Create Employee
- **URL**: `/dev/employees`
- **Method**: `POST`
- **Body (JSON)**:

```json
{
    "id": "1",
    "age": 30,
    "name": "John",
    "position": "Senior Developer"
}
```

# Get Employee

- **URL**: `/dev/employees/{id}`
- **Method**: `GET`

```json
{
    "id": "1",
    "age": 30,
    "name": "John",
    "position": "Senior Developer"
}
```

# Update Employee

- **URL**: `/dev/employees`
- **Method**: `PUT`

```json
{
    "id": "1",
    "age": 32,
    "name": "John",
    "position": "Senior Developer"
}
```

# Delete Employee

- **URL**: `/dev/employees/{id}`
- **Method**: `DELETE`

```json
{
    "id": "1"
}
```


## Code Structure

#Employee Entity

File: src/application/entities/Employee.js

```javascript
class Employee {
  constructor(id, age, name, position) {
    this.id = id;
    this.age = age;
    this.name = name;
    this.position = position;
  }
}

module.exports = Employee;
```

# Use Cases

```javascript
Create Employee: src/application/use-cases/createEmployee.js
Get Employee: src/application/use-cases/getEmployee.js
Update Employee: src/application/use-cases/updateEmployee.js
Delete Employee: src/application/use-cases/deleteEmployee.js
```

# Lambda Handlers

File: src/infrastructure/framework/lambda/handler.js

```javascript
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
```


## Testing

To run the unit tests, ensure you have Node.js and npm installed on your development environment. Before running the tests, make sure all project dependencies are installed. If not already installed, run the following command in the project root:

`npm install`

# Running Tests

To execute the unit tests, use the following command:

`npm test`

This command runs the tests using Jest, a JavaScript testing framework. The tests are located in the tests/ folder and cover core use cases of the project.

# Dependencies

No additional dependencies are required beyond those listed in package.json for running the tests.

# Explanation:

- **npm install**: Installs all project dependencies, including Jest and other development dependencies listed in `package.json`.
- **npm test**: Runs the unit tests using Jest. This command automatically searches for test files in the `tests/` folder and executes the defined tests.

Feel free to adjust paths and details according to your actual project structure. These instructions provide a straightforward way for users to run unit tests without needing to delve into the specifics of each test case in the `README.md`.


## License

Developed by [Matheus Ferraz da Silveira](https://github.com/mathferraz/).
