<h1>:pizza: Acme's Pizza Shop :pizza:</h1>

> A menu page and shopping cart for a pizza shop.
> 
<div align="center"><a href="http://pizzashop.monae.me">:computer: Live demo :computer:</a></div> 

## :desktop_computer: Tech Stack 
### Frontend
* React
* Redux
* Typescript
* Styled Components
* React Testing Library
* Jest

### Backend
* NodeJS
* Express

## :hammer: Project Status
:white_check_mark: Add a loading spinner. <br />
:white_check_mark: Add error handling. <br />
:no_entry: Add the "order complete" page. <br />
    
## :thought_balloon: Reflection
This project initially was just a reason for me to use Redux. I wanted to take things a step beyond the plain ol' Context API and work with the big kid state management. I certainly learned a lot, and had fun too. Not only was my first introduction to Redux through this project, but this was also my first time using Typescript with React. :grin:

One of my biggest challenges was getting Redux to cooperate with TypeScript. But once things clicked, I was on a roll. Another big obstacle was getting the UI to look somewhat decent. I can be indecisive at times, so coming up with a design (and making everything responsive!) can be nerve wracking.

Oh yeah, and I, uh, discovered that you can use emojis in commit messages :eyes:. Looking through the commit history, you can see that once I discovered that, there was definitely no going back. But funny enough, through the discovery of that (and [gitmoji.dev](http://gitmoji.dev)), I feel like I've now become significantly more mindful of commits. I understand the importance of *separation of concerns* in commits and why I should **not** be piling 5 different features into one, pushing it to Github, and then calling it a day. I found myself looking up a lot of Git-related things and diving deeper into its concepts.

## :house: Local Setup
1. Clone this repo.
2. Navigate to the server folder and install the npm packages: <br />
    ````bash
    cd server && npm i
    ````
3. After the packages are done installing, it's time to fire up the server. Create a `` .env `` file or set up the environment variables in the command itself. A ``PORT`` variable is needed, so choose a port that you aren't using:
    ````bash
    PORT=5000 npm start
    ````
4. Open another terminal, navigate to the client folder, and install the npm packages:
    ````bash
    npm i
    ````
5. After the packages are done installing, fire it up. A ``REACT_APP_SERVER_DOMAIN`` variable is needed, which is the URL of the server you just started:
    ````bash
    REACT_APP_SERVER_DOMAIN=http://localhost:INSERT-SERVER-PORT npm start
    ````
6. Open up the website at ``http://localhost:3000``

## :balance_scale: License
![GitHub](https://img.shields.io/github/license/m0nae/writeon?logo=RTEsfdT&style=for-the-badge)
