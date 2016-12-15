# ![Angular 2 Example App](logo.png)

> ### Angular 2 codebase (CRUD, auth, advanced patterns, etc)

This codebase was created to demonstrate a fully fledged application built with Angular 2 that interacts with an actual backend server including CRUD operations, authentication, routing, pagination, and more. I've gone to great lengths to adhere to the [Angular 2 Styleguide](https://angular.io/styleguide) & best practices.


# Getting started

Make sure you have the [Angular CLI](https://github.com/angular/angular-cli#installation) installed globally, then run `npm install` to resolve all dependencies (might take a minute).

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Building the project
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.


## Functionality overview

The example application is a social Learning site called "Learning Spaces". It uses a custom API for all requests, including authentication. You can view a live demo over at https://learningspaces.mybluemix.net/

**General functionality:**

- Authenticate users via JWT (login/signup pages + logout button on settings page)
- CRU* users (sign up & settings page - no deleting required)
- CRUD Articles
- CR*D Comments on articles (no updating required)
- GET and display paginated lists of articles
- Favorite articles
- Follow other users

**The general page breakdown looks like this:**

- Home page (URL: /#/ )
    - List of tags
    - List of articles pulled from either Feed, Global, or by Tag
    - Pagination for list of articles
- Sign in/Sign up pages (URL: /#/login, /#/register )
    - Uses JWT (store the token in localStorage)
    - Authentication can be easily switched to session/cookie based
- Settings page (URL: /#/settings )
- Editor page to create/edit articles (URL: /#/editor, /#/editor/article-slug-here )
- Article page (URL: /#/article/article-slug-here )
    - Delete article button (only shown to article's author)
    - Render markdown from server client side
    - Comments section at bottom of page
    - Delete comment button (only shown to comment's author)
- Profile page (URL: /#/profile/:username, /#/profile/:username/favorites )
    - Show basic user info
    - List of articles populated from author's created articles or author's favorited articles
