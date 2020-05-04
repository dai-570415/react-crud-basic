```bash
$ git clone https://github.com/dai-570415/react-crud-basic.git

$ cd react-crud-basic

$ npm install

$ npm start
```

```js:Firebase.js
// Firebase.js

import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {

	// 各自の値を入れる
    apiKey: "Your_Key",
    authDomain: "Your_Key",
    databaseURL: "Your_Key",
    projectId: "Your_Key",
    storageBucket: "Your_Key",
    messagingSenderId: "Your_Key",
    appId: "Your_Key",
    measurementId: "Your_Key"

};

firebase.initializeApp(firebaseConfig);
export default firebase;
export const db = firebase.firestore();
```