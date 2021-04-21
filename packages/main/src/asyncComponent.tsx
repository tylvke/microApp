import React, { useState, useEffect } from 'react'
import { loadScript } from './single-spa-config';

let subapp = null

window.registerSubapp = (app) => {
    subapp = app.default().routes();
}

const AsyncComponent = (props: any) => {
    const [asyncLoaded, setAsyncLoaded] = useState(false);
    const [Component, setComponent] = useState(null);
    useEffect(() => {
        const { history: { location: { pathname } } } = props;
        const project = pathname.split('/')[2];
        loadScript('http://localhost:9999/js/index.js').then(()=>{
            setAsyncLoaded(true);
            setComponent(subapp);
        })
    }, []);
    return asyncLoaded ? Component : null;
}

export default AsyncComponent;