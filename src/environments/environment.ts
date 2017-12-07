// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
  	apiKey: "AIzaSyA8YYNuevAQmK7dUZpvvMLWLamhqTpl7FY",
    authDomain: "chat-demo-4a977.firebaseapp.com",
    databaseURL: "https://chat-demo-4a977.firebaseio.com",
    projectId: "chat-demo-4a977",
    storageBucket: "chat-demo-4a977.appspot.com",
    messagingSenderId: "566941434833"
  }
};
