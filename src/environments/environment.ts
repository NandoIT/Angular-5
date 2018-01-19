// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDePGOnMKP30UXfAUXJyXORl0RA-42D6Bo",
    authDomain: "angularasses.firebaseapp.com",
    databaseURL: "https://angularasses.firebaseio.com",
    projectId: "angularasses",
    storageBucket: "angularasses.appspot.com",
    messagingSenderId: "413795928826"
  }
};
