Agenda:

CodeCast Link https://www.codecast.io/play_cast/DKPjp79GLw2A

ExpressJS
1) Setting up Express Server
2) Installing and Configuring KnexJS
3) BlogPost Migration
4) CRUD BlogPost and Refactoring Routers
5) Authentication With Cookies
6) Adding User to BlogPost

JS Review -
1) Constructors And Prototypes
2) Consuming Promises

# Setting Up Express Server

- Create a directory called `blog_on_express` -> Express Docs https://expressjs.com/en/starter/installing.html
- Run `npm init`
- The `package-lock.json` file will make sure dependencies installed are locked at a particular version
- cd into `blog_on_express` and run `npm install express`
- Add gitignore `curl https://www.gitignore.io/api/node,linux,macos,windows >> .gitignore`
- the "main" key in package.json should match your main javascript file (root javascript file)

# Install nodemon

- run `npm install --save-dev nodemon`