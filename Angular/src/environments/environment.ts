// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyDMTBrAZsGRWVU0KaLfIeqxBtGbNYMmtNs",
    authDomain: "expense-app-lurisan.firebaseapp.com",
    databaseURL: "https://expense-app-lurisan.firebaseio.com",
    projectId: "expense-app-lurisan",
    storageBucket: "expense-app-lurisan.appspot.com",
    messagingSenderId: "838268871936",
    appId: "1:838268871936:web:ca2cc04a15fd34ee"
  },
  user:"signup",
  expenseSheet:"expenseSheet"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
