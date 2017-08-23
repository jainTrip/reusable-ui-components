# reusable-ui-components

# Table of Contents
1. [Application Summary](#application-summary)
2. [Blueprints](#blueprint-and-code-packages)
3. [Installation](#installation)
4. [Configuration](#configuration)
	* [Authentication](#authentication)
	* [Heroku App URLs](#heroku-app-urls)
	* [Folder Structure](#folder-structure)
5. [Notes](#notes)

<a name="application-summary"></a>
## Application Summary

**Application Name:** Reusable UI Components

**Author:**

	| Name  |  Contact Email |
	|---|---|
	|  Tripti Jain   | tripti.jain1@tcs.com |
	

**Area:** UI UX Structures

**Application Description:** 

<a name="blueprint-and-code-packages"></a>
## Blueprint and Code Packages

**Blueprint:** Simple Website

	Development Language(s): Node.js, Express.js, Handlebars, NPM , Materialize
	Development Framework(s):
	Authentication: Basic Authentication
	
	
<a name="installation"></a>
## Installation:

1. Clone the repository by command 'git clone https://github.com/jainTrip/reusable-ui-components.git'

2. Install node and npm in your local system, if not already installed. [Please visit Node.js home page to download and install Node.js](http://nodejs.org/download/)

3. Create a file with name .env and copy variables from .env-sample file.

4. Update .env file with the desired environment variables.

5. Run npm install from the project root to install required node modules.

6. Run the application by command 'npm start'

7. The application will be available on http://localhost:3000

<a name="configuration"></a>
## Configuration

<a name="authentication"></a>
#### Authentication:
[Please see the basic-auth module used for authentication for this application](https://www.npmjs.com/package/basic-auth)

<a name="heroku-app-urls"></a>
#### Heroku App URLs
	Heroku App Dev URL: https://reusable-ui-components.herokuapp.com/
	

<a name="folder-structure"></a>
#### Folder Structure:
- **bin** :: This folder contains the file which starts the node server [DO NOT CHANGE THIS FILE]

- **public** :: This folder contains all the front end scss, javascript, fonts and images

		- **stylesheets** :: CSS files

		- **images** :: All Images

		- **js** :: All Client-Side JavaScript files. 

- **routes** :: All the Express Routes used in the application are described here.

- **views** :: Contains all the handlebars views

<a name="notes"></a>
## Notes:
None