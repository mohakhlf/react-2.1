# react-2.1
Created with CodeSandbox

### To get fack data, click &darr;

[![dummyapi](https://dummyapi.io/images/icon.png)](https://dummyapi.io/data/api)


  > get your ***app-id***

#### Sampe code of api usage
```ts
import React from "react";
import data from './data.json'
import Contact from "./Contact/Contact";
import "./styles.css";

const contact = data.map( (item) =>
    <Contact
        key={item.id}
        first={item.firstname}
        last={item.lastname}
        image={item.image}
        online={Math.random() >= 0.5}
    />
)

export default function App() {


  return (
    <div className="App">
        {contact}
    </div>
  );
```
