# Project Title

A brief description of what this project does and who it's for\
\
To run the project:

- Clone the repository
- Console: npm install
- Console: npm run dev

## Technologies

This project uses Vite with React and scss.

### scss

There is a custom scss template in place. The template is built from Kevin Powells
[Beyond CSS](https://www.beyondcss.dev) course. Vite handles PurgeCSS to remove unused SCSS code. There's also a PostCSS module that makes the CSS file readable to most relevant browsers. Here's a short overview to the file structure:

#### abstracts

Handles variables, mixins and functions. Use this to make changes to the present design without creating new html or adjusting the present one.

#### base

Handles general, project-wide styles. You can find local fonts and css variables here as well.

#### components

Handles css for website components, such as buttons or cards. Use when creating new objects, that are (or most likely will be) reused throughout the website.

#### layout

Handles css for website layouts, such as grids or section. Use when creating new layouts, that are (or most likely will be) reused throughout the website.

#### utilities

Utility classes that you can add to your html without having to create new components or layouts. Use for one-off components/layouts or minor adjustments that wouldn't justify creating a new component/layout.

#### vendor

Folder for 3rd party libraries.

### Vite

The project uses Vite to create a React app. Currently Vite is just used to create the environment and for PurgeCSS and PostCSS.

### React

Not used for anything specific as of now. I will start learning and working with React later down the line, so I figured I might as well include it in my template.
