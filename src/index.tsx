import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




let a = 5;
a = 123;
let users = [{
  name: "Valek",
  age: 12,
  address: {
    city: "Perm",
    country: "Russia"
  }
},
{
  name: "Pet",
  age: 15,
  address: {
    city: "Msk",
    country: "Russia"
  }
}
];

console.log(users[0].address.city);

let b: Array<string | number>;
b = ["asd", "asd", 2, 5, 345];
let c;
c = 1;
c = "asd";
c = true;
let d: Array<number>;
d = [1, 2, 3, 4, 5];
d = [];
console.log(d);
