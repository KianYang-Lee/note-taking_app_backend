Deployed using Heroku. The steps are as follows:

1. At root folder, create `Procfile` with following directive:

```
web: npm start
```

2. Change port definition of application to in `index.js` file to the following:

```
process.env.PORT || 3001
```

3. Turn the project into a Git repository and adding `node_modules` into `.gitignore` file.

4. Create a Heroku application using command:

```heroku create```

5. Commit code to repo and move it to Heroku using:

```git push heroku main```

