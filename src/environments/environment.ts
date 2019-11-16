// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCo0kKNvo3_ZPBrAeCR07ag1goej2w6TrM',
    authDomain: 'slang-com.firebaseapp.com',
    databaseURL: 'https://slang-com.firebaseio.com',
    projectId: 'slang-com',
    storageBucket: 'slang-com.appspot.com',
    messagingSenderId: '242522151316',
    appId: '1:242522151316:web:447165e2bb7b1d08525781'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error';  // Included with Angular CLI.
