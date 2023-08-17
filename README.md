<!-- Please update value in the {}  -->

<h1 align="center">My Unsplash</h1>

<div align="center">
   Solution for a challenge from  <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://magical-begonia-80b959.netlify.app/">
      Demo
    </a>
    <span> | </span>
    <a href="https://github.com/ReneAslanov/devChallenges-my-unsplash">
      Solution
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenges/rYyhwJAxMfES5jNQ9YsP">
      Challenge
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
  - [Built With](#built-with)
- [Features](#features)
- [How to use](#how-to-use)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

<!-- OVERVIEW -->

## Overview

![screenshot](https://github.com/ReneAslanov/devChallenges-my-unsplash/blob/main/project-screenshot.jpg)

<!-- Introduce your projects by taking a screenshot or a gif. Try to tell visitors a story about your project by answering:

- Where can I see your demo?
- What was your experience?
- What have you learned/improved?
- Your wisdom? :) -->

Building this project was indeed a little more demanding than previous challenges, however the most difficult problems were the animations for me. I have'nt really done fancy animations before specifically the one using a mask was tough to figure out so it is smooth.

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->
- [CSS](https://www.w3.org/Style/CSS/)
- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Node](https://nodejs.org/de)
- [Express](https://expressjs.com/)
- [Postgres](https://www.postgresql.org/)

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges) challenge. The [challenge](https://devchallenges.io/challenges/rYyhwJAxMfES5jNQ9YsP) was to build an application to complete the given user stories.

## How To Use

<!-- Example: -->

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) and [Postgres](https://www.postgresql.org/) installed on your computer.

You need to create a postgres database yourself, it only has one table which looks like this:

```sql
CREATE TABLE photos (id SERIAL PRIMARY KEY, uuid VARCHAR(255), label VARCHAR(255), url TEXT);
```

You also need to create a .env file inside the backend folder, the following properties are used

```
DB_HOST=your-host
DB_USER=your-user
DB_PASSWORD=your-password
DB_DATABASE=your-database
PORT=your-port

```

Furthermore you need to change the code a little, all fetches are currently done with an api that is being hosted, however if you want to run it locally you have to change those back to localhost, the files are:
    - AddPhotoModal.tsx, line 33
    - App.tsx, line 23
    - DeletePhotoModal.tsx, line 22

Inside the backend folder you need to change database.ts, I had to add an ssl certificate so it can be hosted, however you dont need it to run locally so just remove lines 17 - 21 and line 3 since you dont need it anymore.

From your command line:

```bash
# Clone this repository
$ git clone https://github.com/ReneAslanov/devChallenges-my-unsplash

# Install dependencies
$ npm install

# Install backend dependencies
$ cd backend
$ npm install

# Run backend
$ npm start

# Run the app
$ cd ..
$ npm start
```

## Acknowledgements

If you are having trouble finding a postgres Database to host your backend, i can recommend [Adaptable.io](https://adaptable.io/).

## Contact

- GitHub [@Rene Aslanov](https://github.com/ReneAslanov)