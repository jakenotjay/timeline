# Timeline
## By Jake W & Seb G

A simple react-based project-manager.

# Seb Tutorial

## Programs to install

1. First install [git](https://git-scm.com/downloads) - this allows to access our source code and make edits without breaking everyone elses code.
2. Then install [VSCode](https://code.visualstudio.com/download) - this is a simple code editor, it has a lot of support for everything. 
3. Install the [NodeJS](https://nodejs.org/en/download/) - this is serverside javascript, it runs our code and also installs Node Package Manager - this manages packages that we use, this is essentially JavaScript libraries which help us do things - an example is [MaterialUI](https://material-ui.com)

## Setting up Git and downloading the project

1. Follow [this tutorial](https://confluence.atlassian.com/bitbucket/set-up-an-ssh-key-728138079.html) to make an ssh-key to connect to the repository, make sure to complete it all within the git bash not the normal command line
2. Using the command line, go to where you want to store the project, do this by the following: ``` cd - the cd command opens a folder mkdir - this creates a folder ``` I'd recommend the documents folders, you don't need to create a folder for the specific project, just the projects folder itself
3. Now clone the repo doing the following:
    * Navigate to the [timeline repo](https://bitbucket.org/bustyboysbongos/timeline/src/master/)
    * Click clone and change from https to ssh
    * Copy the url into your git bash, making sure you're in your projects folder
4. After cloning now cd into the directory and write the command git status to make sure you're code has downloaded
5. Now open VSCode and add a project folder of timeline

## Setting up VSCode
Go to the extensions tab and download the following
* Debugger for Chrome
* ESLint
* GitLens - Git Supercharged
* vscode-icons

## Standing up project folder
1. Open NodeJs command line
2. CD into your timeline directory
3. Enter the following commands
    * ``` npm install ``` This installs all the third-party packages we've used
    * ``` npm run ``` This starts the build server and you should see the website pop up now
    * Press ctrl + c to stop the server

## Now learn!
Now you need to learn HTML, CSS, JavaScript and React!
1. [HTML](https://codecademy.com/learn/learn-html) - Super simple tagging system that shows you the basics of how all website are made!
2. [CSS](https://codecademy.com/learn/learn-css) - Cascading Style Sheets, this is how we design the looks of our websites
3. [JavaScript](https://codecademy.com/catalog/language/javascript) - Start with the introduction, then start dabbling in seeing if you can understand how my code works. Other good courses [EloquentJS](https://eloquentjavascript.net) and [JavaScript30](https://javascript30.com)