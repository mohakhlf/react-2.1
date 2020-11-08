# react-2.1
Created with CodeSandbox

### To get fack data, click &darr;:

[![dummyapi](https://dummyapi.io/images/icon.png)](https://dummyapi.io/data/api)


  > get your ***app-id***

#### Sampe code of api usage
```ts
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '{APP_ID}';

const App = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios.get(`${BASE_URL}/user`, { headers: { 'app-id': APP_ID } })
            .then(({ data }) => setData(data))
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    return (
        <div>
           {loading && "Loading..."}
           {JSON.stringify(data)}
        </div>
    );
};

export { App };
```
