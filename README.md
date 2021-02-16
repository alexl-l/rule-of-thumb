# rule-of-thumb
Zemoga challenge


# ALERT
The [front-end](https://rule-of-thumb.mybluemix.net/) was deployed on the IBM Cloud. The new URL is this: https://rule-of-thumb.mybluemix.net/
# Zemoga Challenge

<p align="center"><img src="https://2.bp.blogspot.com/-MH_LCXgczh0/XLVFq8MySbI/AAAAAAAABiA/qo0UeEym1xQPdOoxUqH9t5rMcxNgXscXgCEwYBhgL/s1600/zemoga-logo-grey.png" width="200"></p>

## Description

**API Restfull** that allows adding new people for voting, as well as adding votes, and consulting the people with their respective votes.
URL: https://rule.mybluemix.net/api/v1/rulings (GET)
URL: https://rule.mybluemix.net/api/v1/rulings (POST)
URL: https://rule.mybluemix.net/api/v1/rulings/:id (GET)
URL: https://rule.mybluemix.net/api/v1/rulings/:id (PUT)

**Fron-end** Allows you to view and get all the people for future voting
URL: https://rule-of-thumb.mybluemix.net/

## Technical specifications

<p align="center"><img src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg" width="200"></p>
<p align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png" width="200"></p>

**BACK-END**

- **Programming language:** JavaScript
- **Framework:** Nodejs
- **Version manager - Fonts:** Git
- **Methodology:** Agile - Scrum (Carriles estándar).
- **API documentation tool:** Postman
- **Cloud deployment:** IBM Cloud
- **API Endpoint:** https://rule.mybluemix.net/api/v1/rulings 

**FRONT-END**

- **Programming language:** TypeScript
- **Framework:** Angular 11
- **Version manager - Fonts:** Git
- **Methodology:** Agile - Scrum (Carriles estándar).
- **Cloud deployment:** IBM CLOUD
- **Endpoint:** https://rule-of-thumb.mybluemix.net/

## List of exposed REST resources:

[Postman collection with prison set up.](https://github.com/alexl-l/rule-of-thumb/tree/main/postman%20collection)

[You can visit this website to see all documentation about the API.](https://documenter.getpostman.com/view/7275835/TWDTMykU)

## Steps to install and run the API

1. Install [NodeJs](https://nodejs.org/es/download/).
2. Clone the protector: `git clone https://github.com/alexl-l/rule-of-thumb.git`
3. Install Angular dependencies: `npm i`
4. Run Angular application: `npm start`
5. Test resources: `http://localhost:5000/`

## Application layers

- **models:** In this package the models of each object to be handled are housed
- **routes:** This package houses the Rest Controllers, responsible for exposing the REST resources
- **config:** Configuration file with constant values of the application
- **controller:** Logic to determine the message and the position of the ship
- **middleware:** Utility functions used by the controller,

## Steps to install and run the Angular

1. Install [NodeJs](https://nodejs.org/es/download/).
1. Install [Angular](https://cli.angular.io/).
2. Clone the protector: `git clone https://github.com/alexl-l/rule-of-thumb.git`
3. Install Angular dependencies: `npm i`
4. Run Angular application: `ng serve`
5. Test resources: `http://localhost:4200/home`

## Application layers

- **models:** In this package the models of each object to be handled are housed
- **components:** View of the application
- **services:** Application logic
- **assets:** Application resources


**ALL THE CODE IS DOCUMENTED, WITH DIFFERENT KINDS OF COMMENTS, WHICH FACILITATE THE DEVELOPMENT AND UNDERSTANDING OF THE CODE.**

## Thanks

To Zemoga for having given me the opportunity to present this evaluation, with the aim of advancing in the selection process and thus getting into the company's work team.
