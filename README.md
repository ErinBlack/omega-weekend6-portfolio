# Erin Black Portfolio Site
## Start a Portfolio

## Objectives
- Angular practice with multiple views, controllers, and a service
- Front end styling
- Hosting without a database on Heroku

## Instructions

This landing page will contain coding examples and serve as a portfolio site for Erin Black.
The project is meant to be a simple site that doesn't hook up to a database. I used the GitHub API to retrieve coding examples, and utilized AngularJS to create the front end pages.

### Front End Task
- [ ] Creating two views.
  - A. The first view will be about me. This will contain some information from the Github Profile API call
  - B. The second view will be about my code. This will use the Github Repo API Call
- [ ] Use the `GithubAPI` service to interact with the GitHub API.
  - A. I need to generate a token assign it to the `oauthToken` variable.
  - B. Also assign the `username` variable to my GitHub username.
  - C. [Generated a GitHub Token](https://github.com/settings/tokens). Select only `public_repo` and `read:user`.
- [ ] Styled the front end of the site using CSS and HTML

### Back End
- [ ] As practice,I commented each line of code in the server. Make sure you know what each line does.
- [ ] Changed the port code to deploy to Heroku

## Hard Mode

### Deploy
- Deploy the app on Heroku. It doesn't have a database so you can follow the same steps as we did in lecture.
- Here is the repo from the deployment lecture: [https://github.com/devjanaprime/herokuDeploy_noDb
](https://github.com/devjanaprime/herokuDeploy_noDb)

## Submit
- The github url (where the code lives)
- If deployed: The Heroku url (url of the deployed site)
