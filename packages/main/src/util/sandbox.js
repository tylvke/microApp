export function getSandbox(appName){
    const addProps = new Map();
    const modifyProps = new Map();
    const rawWindow = window;
    const fakeWindow = Object.create(null);
    const sandbox = new Proxy(fakeWindow,{
        set(target, prop, value){
            if(!rawWindow.hasOwnProperty(prop)){
                addProps.set(prop, value)
            } else if (!modifyProps.has(prop)){
                const originValue = rawWindow[prop];
                modifyProps.set(prop,originValue)
            }
            rawWindow[prop] = value;
            return true;
        },
        get(target, prop){
            const value = rawWindow[prop];
            return value;
        },
        has(target, prop){
            return prop in rawWindow;
        }
    })
    return sandbox;
}