# BobsList
[![Build Status](http://img.shields.io/travis/nhausmna/BobsList.svg?style=flat-square)](https://travis-ci.org/nhausmna/BobsList)

## Table of contents
* [General Info](#general-info)
* [UI Prototype](#ui-prototype)
* [Use Case and Class Diagrams](use-case-and-class-diagrams)
* [Frontend](#frontend)
* [Backend](#backend)
* [Code Styling](#code-styling)

## General Info
This is a Cal Poly CSC 307 group project for a "selling stuff" web application. We are
using React for the frontend, Flask for the backend, and MongoDB Atlas for the 
database. Users of this web application are able to post items for sale with a title, description,
price, location, and photo and view items for sale posted by other users. Users are also able to 
send messages to the seller of an item and view messages sent to them from prospective buyers. 

## UI Prototype
- <a href="https://www.figma.com/file/GQyePeTt7Uxjw3iHWr7PDA/Bob's-List?node-id=106%3A36&frame-preset-name=Desktop" target="_blank">Prototype</a>

## Use Case and Class Diagrams
- <a href="https://github.com/nhausmna/BobsList/wiki/Use-Case-Diagram" target="_blank">Use Cases</a>

- <a href="https://github.com/nhausmna/BobsList/wiki/Class-Diagram" target="_blank">Class Diagram</a>

## Frontend
To run, install dependencies then start on localhost:

```
$ npm i
$ npm start
```

The visuals are adapted from the 
<a href="https://www.wrappixel.com/templates/materialpro-react-admin-lite/" target="_blank">MaterialPRO React template</a>.


## Backend
To run the backend, set environment variables and start flask:
```
$ export FLASK_ENV="development"
$ export FLASK_APP=back_end.py
$ python -m flask run
```


## Code Styling

For this project, Pycodestyle for checking the official Python style guide and Prettier for JavaScript/React code are being used
for styling. 

**To configure in VSCode:**
- <a href="https://medium.com/how-to-react/config-eslint-and-prettier-in-visual-studio-code-for-react-js-development-97bb2236b31a" target="_blank">Prettier</a>

- <a href="https://code.visualstudio.com/docs/python/linting" target="_blank">Pycodestyle</a>
