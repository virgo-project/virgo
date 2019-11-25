# Virgo Website

This is the directory for the Virgo website.

## Development
Make sure you have a recent version of `npm` installed on the command line. The following two commands will install all dependences and run a local server at `localhost:8080` with automatic reload so you can preview your the content and design changes.

```
npm install
npm run serve
```

## Deployment
To deploy this website run this command. Firstly, it will copy all of the Markdown files in the root project directory to `./src/`. The second command will build a static version of the website and place it in `./dist`. The `./dist` folder can be served via your web server of choice.

```
npm run build
```

## Notice

Do **not** edit the Markdown files generated in these locations:

```
./src/about
./src/finance
./src/research
```

These files are copied from the core Virgo documents located one directory level above. If you want to edit the content of the core Virgo files, please make a PR to edit those files. The website is just a view layer.
