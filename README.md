# Banno-AI

**Banno-AI** is a cutting-edge tool powered by Generative AI, designed to bring the magic of traditional Indian clothing into the digital realm. Whether you're exploring the vibrant world of sarees, salwar suits, or lehengas, Banno-AI lets you virtually try them on with unprecedented realism.

## Requirements

### Backend
- [`fastapi`](https://pypi.org/project/fastapi/)
- [`uvicorn`](https://pypi.org/project/uvicorn/)
- [python-dotenv](https://pypi.org/project/python-dotenv/)

### Frontend
- [`npm`](https://www.npmjs.com)
- [`react`](https://www.npmjs.com/package/react)
- [`axios`](https://www.npmjs.com)


## Installation

### Dependency Management
We are utilizing poetry, a dependency management toolkit for python. It is a powerful toolkit which eliminates dependency management and versioning errors for python projects. Inorder to avoid installing each dependency one at a time, poetry allows user to install all the required python dependencies with version control. To get started use the following commands:

```
$ pip install poetry
```
Once poetry is installed, navigate to the root directory of this project. Note that the project file already consist of the pyproject.toml file which indicates all the required dependencies and their version constraints. Next,

```
$ poetry install
```
Initially the above command will create a virtual environment and install all the mentioned python and backend dependencies within the virtual environment. Once installed, to load into the virtual environment use command

```
$ poetry shell
```

### Hosting the backend server

Once all the required python and backend dependencies exist, we can navigate to the folder localhost within the project, and use the following command to host our backend server

```
$ uvicorn main:app --reload
```

To verify that the backend server is up and running with necessary endpoints, uding any browser load https://localhost:8000/docs which should be a swagger page and documentation about the expected input and outputs for each backend end point

### Starting the frontend

Install the required frontend dependencies by first navigating to the frontend folder, and installing the required frontend dependencies using

```
$ npm install
```

Next inorder to start the frontend web application, use the command

```
$ npm start
```

This should load up a web application at https://localhost:3000.

This is a barebones webapp which is just a proof of concept implementation for defining, reiterating and automating the workflow for consitent results
