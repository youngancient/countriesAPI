<h1 align="center">
  countriesAPI
</h1>

<p align="center">
  <a href="https://lookupcountries.netlify.app/">
    Live Preview
  </a>
</p>


## Folder Structure
```
countriesAPI
  ├── node_modules
  ├── public
  │   ├── favicon.svg
  │   └── assets
        ├── images,svgs
  └── src
      ├── Components
         ├── All-components
      ├── Pages
          ├── all pages
      ├── Utils
          ├── Data-utils
      ├── App.css
      ├── App.jsx
      ├── index.css
      ├── index.jsx
  ├── .gitignore
  ├── index.html
  ├── package.json
  ├── README.md
  ├── vite.config.js
```

## Development

To get a local copy of the code, clone it using git:

```
git clone https://github.com/youngancient/countriesAPI.git
cd countriesAPI
```

Install dependencies: You can use npm, but I am a fan of yarn!

```
yarn
```

Now, you can start a local web server by running:

```
yarn dev
```

And then open http://localhost:5173/ to view it in the browser.

#### Available Scripts

In this project, you can run the following scripts:

| Script        | Description                                         |
| ------------- | --------------------------------------------------- |
| yarn dev   | Runs the app in the development mode.               |
| yarn run build | Builds the app for production to the `dist` folder. |
| yarn run preview | Serves the production build from the `dist` folder. |
