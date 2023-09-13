# Person API

This is a RESTful API that allows you to manage a list of persons with basic information such as name, email, age, country, and mobile number. It supports CRUD (Create, Read, Update, Delete) operations for managing person records.
## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
  - [Endpoints](#endpoints)
  - [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create a new person with name, email, age, country, and mobile number.
- Retrieve a list of all persons.
- Retrieve a single person by ID.
- Update an existing person's information.
- Delete a person record.

## Getting Started

Follow these instructions to set up and run the Person API on your local machine or deploy it to a server.

### Prerequisites

To run this API, you need to have the following installed on your machine:

- Node.js
- npm (Node Package Manager)
- MongoDB (Make sure MongoDB is running)

## Usage
### Endpoints
The API exposes the following endpoints:

POST
Create Person
https://stage2-cj9c.onrender.com/api/
﻿

Body
raw (json)
json
{
    "email" : "JosephIsrael206@gmail.com",
    "name" : "Joseph Israel",
    "mobile": "09069569860",
    "age": 21,
    "country" : "Nigeria"
}
GET
Get Person
https://stage2-cj9c.onrender.com/api/6500786907d933945dc28f33
﻿

DELETE
Delete person
https://stage2-cj9c.onrender.com/api/6500786907d933945dc28f33
﻿

PATCH
Update User
https://stage2-cj9c.onrender.com/api/65007f10d6e99c61c733ac0a
﻿

Body
raw (json)
json
{
    "mobile": "09069569806",
    "age": 21,
    "country" : "Nigeria"
}

POST /api/: Create a new person.
GET /api/:id: Get a single person by ID.
PATCH /api/:id: Update an existing person's information.
DELETE /api/:id: Delete a person record by ID.
## Documentation and Testing
For detailed documentation and request/response details, please refer to https://stage2-cj9c.onrender.com
## UML Diagram -class 
![Person class Diagram](https://github.com/lordisrael/Stage3/blob/main/personClassDiagram.drawio.png)
## UML Diagram -usecase
![Person usecase Diagram](https://github.com/lordisrael/Stage3/blob/main/PersonUseCaseDiagram.drawio.png)
## Deployment
The API has been deployed to https://stage2-cj9c.onrender.com.

## Contributing
Feel free to contribute to this project by opening issues or creating pull requests. Please follow the Contributing Guidelines.

## License
This project is licensed under the MIT License.

