import { registerApplication, start } from "single-spa";
import Emitter from './util/emitter';
import sandbox from './util/sandbox';

window.__POWERED_BY_SINGLE_SPA__ = true;
window.singleEvent = new Emitter();

// window = sandbox;

console.log(window.__POWERED_BY_SINGLE_SPA__)
function loadScript(url, charset) {
  return new Promise((resolve,reject)=>{
    const head = document.getElementsByTagName('head')[0];
    var script = document.createElement("script");
    script.src = url;
    script.charset = charset || "utf-8";
    if (script.readyState) {
        script.onreadystatechange = function () {
            if (script.readyState === 'loaded' || script.readyState === 'complete') {
                resolve();
                head.removeChild(script)
            }
        }
    } else {
        script.onload = function () {
            resolve();
            head.removeChild(script)
        }
    }
    script.onerror=function(){
      reject();
    }
    head.appendChild(script);
  })
}
// 获取静态资源表
async function getAssets(appName,entry){
  await loadScript(entry)
  return window[`${appName}_assets`];
}
// 加载css
async function loadCss(appName,entrys){
  const list = [...entrys];
  while(list.length > 0){
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = list.shift();
    link.setAttribute('data-single-spa', appName);
    document.getElementsByTagName('head')[0].appendChild(link);
  }
  return true;
}
// 加载js
async function loadJs(appName,entrys){
  const list = [...entrys];
  while(list.length > 0){
    await loadScript(list.shift())
  }
  return window[appName]
}
// 规则匹配
function genActiveRule(routerPrefix) {
  return location => location.hash.startsWith(routerPrefix);
}
const microApps = [
  {
    name: "micro_react",
    entry: 'http://localhost:8888/micro_react_assets.js',
    activeRule: genActiveRule("#/react")
  },
  {
    name: "micro_vue",
    entry: 'http://localhost:8080/micro_vue_assets.js',
    activeRule: genActiveRule("#/vue")
  },
];

microApps.forEach(app => {
  const { name, entry, activeRule } = app;
  registerApplication(
    // Name of our single-spa application
    name,
    // Our loading function
    async ({ name: appName }) => {
      const {css, js} = await getAssets(appName,entry);
      const { bootstrap, mount, unmount } = await loadJs(appName,js);
      return{
        bootstrap:[
          async ()=>{
            console.log('bootstrap')
          },
          bootstrap,
        ],
        mount:[
          async()=>{
            const $root = document.createElement('div');
            $root.setAttribute('id', appName);
            document.body.appendChild($root);
            await loadCss(appName,css);
            console.log('mount')
          },
          mount,
        ],
        unmount:[
          unmount,
          async ()=>{
            console.log('unmount')
            const links = document.querySelectorAll(`[data-single-spa="${appName}"]`);
            links.forEach(link=>{
              document.getElementsByTagName('head')[0].removeChild(link);
            })
            document.body.removeChild(document.getElementById(appName))
          },
        ]
      }
    },
    // Our activity function
    activeRule,
  );
});

start();
