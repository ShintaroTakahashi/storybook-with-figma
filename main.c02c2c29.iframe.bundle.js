(self.webpackChunklink_storybook_with_figma=self.webpackChunklink_storybook_with_figma||[]).push([[179],{"./.storybook/preview.js-generated-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{__namedExportsOrder:()=>__namedExportsOrder,parameters:()=>parameters});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},viewport:{viewports:__webpack_require__("./node_modules/@storybook/addon-viewport/dist/esm/preview.js").p,defaultViewport:"iphone12"}},__namedExportsOrder=["parameters"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return(0,ClientApi.uc)(value);case"argTypes":return(0,ClientApi.v9)(value);case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./components/templates/TestPage/atoms/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>Button});var Button=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.button.withConfig({displayName:"Button",componentId:"sc-82qr1b-0"})(["border-radius:34px;border:3px solid transparent;background-image:linear-gradient(#ffffff 0 100%),linear-gradient(93.15deg,#ffe679 0,#ff3333 100%);background-origin:border-box;background-clip:padding-box,border-box;box-shadow:2px 4px 8px rgb(238,153,67,0.3);color:#353535;font-size:16px;font-weight:700;overflow-wrap:break-word;padding:0.8rem 30px;width:200px;&:disabled{background-image:linear-gradient(#ffffff 0 100%),linear-gradient(93.15deg,#bdbdbd 0,#949494 100%);opacity:0.45;pointer-events:none;}"]);try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/templates/TestPage/atoms/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"components/templates/TestPage/atoms/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./components/templates/TestPage/atoms/Title/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>Title});var Title=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.h1.withConfig({displayName:"Title",componentId:"sc-1dcuy0h-0"})(["font-size:",";"],(function(_ref){return"large"===_ref.size?"20px":"16px"}));try{Title.displayName="Title",Title.__docgenInfo={description:"",displayName:"Title",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLHeadingElement | null) => void) | RefObject<HTMLHeadingElement> | null"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/templates/TestPage/atoms/Title/index.tsx#Title"]={docgenInfo:Title.__docgenInfo,name:"Title",path:"components/templates/TestPage/atoms/Title/index.tsx#Title"})}catch(__react_docgen_typescript_loader_error){}},"./components/templates/TestPage/molecules/Header/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>Header});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_atoms_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/templates/TestPage/atoms/Button/index.tsx"),_atoms_Title__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/templates/TestPage/atoms/Title/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Header=(react__WEBPACK_IMPORTED_MODULE_0__.createElement,function Header(_ref){var isLogin=_ref.isLogin,onClickLogin=_ref.onClickLogin,onClickLogout=_ref.onClickLogout;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(StyledHeader,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_atoms_Title__WEBPACK_IMPORTED_MODULE_2__.D,{size:"large",children:"This is Header "}),isLogin?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{children:"Welcome!"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_atoms_Button__WEBPACK_IMPORTED_MODULE_1__.z,{onClick:onClickLogout,ghost:!0,children:"Logout"})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_atoms_Button__WEBPACK_IMPORTED_MODULE_1__.z,{onClick:onClickLogin,children:"Login"})]})});Header.displayName="Header";var StyledHeader=styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.header.withConfig({displayName:"Header__StyledHeader",componentId:"sc-1ffzv7t-0"})(["display:flex;justify-content:space-between;align-items:center;padding:12px;background-color:#ebebeb;"]);try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{isLogin:{defaultValue:null,description:"",name:"isLogin",required:!0,type:{name:"boolean"}},onClickLogin:{defaultValue:null,description:"",name:"onClickLogin",required:!0,type:{name:"() => void"}},onClickLogout:{defaultValue:null,description:"",name:"onClickLogout",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/templates/TestPage/molecules/Header/index.tsx#Header"]={docgenInfo:Header.__docgenInfo,name:"Header",path:"components/templates/TestPage/molecules/Header/index.tsx#Header"})}catch(__react_docgen_typescript_loader_error){}},"./stories/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={component:__webpack_require__("./components/templates/TestPage/atoms/Button/index.tsx").z};var Default={parameters:{design:{type:"figma",url:"https://www.figma.com/file/sT1HORnfRSDHOjG2FMi0HA/TestPage?node-id=217%3A2"}},args:{children:"Button"}},Disabled={parameters:{design:{type:"figma",url:"https://www.figma.com/file/sT1HORnfRSDHOjG2FMi0HA/TestPage?node-id=217%3A37"}},args:{disabled:!0,children:"Button"}},__namedExportsOrder=["Default","Disabled"]},"./stories/Header.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LoggedIn:()=>LoggedIn,LoggedOut:()=>LoggedOut,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={component:__webpack_require__("./components/templates/TestPage/molecules/Header/index.tsx").h};var LoggedIn={parameters:{design:{type:"figma",url:"https://www.figma.com/file/sT1HORnfRSDHOjG2FMi0HA/TestPage?node-id=34%3A25"}},args:{isLogin:!0}},LoggedOut={parameters:{design:{type:"figma",url:"https://www.figma.com/file/sT1HORnfRSDHOjG2FMi0HA/TestPage?node-id=52%3A45"}},args:{}},__namedExportsOrder=["LoggedIn","LoggedOut"]},"./stories/TestPage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LoggedIn:()=>LoggedIn,LoggedOut:()=>LoggedOut,PagePattern:()=>PagePattern,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TestPage_stories});var react=__webpack_require__("./node_modules/react/index.js"),Title=__webpack_require__("./components/templates/TestPage/atoms/Title/index.tsx"),Header=__webpack_require__("./components/templates/TestPage/molecules/Header/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),DummyContents=(react.createElement,function DummyContents(){return(0,jsx_runtime.jsxs)("ul",{children:[(0,jsx_runtime.jsx)("li",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),(0,jsx_runtime.jsx)("li",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),(0,jsx_runtime.jsx)("li",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),(0,jsx_runtime.jsx)("li",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})});DummyContents.displayName="DummyContents";var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),TestPage=(react.createElement,function TestPage(_ref){var isLogin=_ref.isLogin,onClickLogin=_ref.onClickLogin,onClickLogout=_ref.onClickLogout;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Header.h,{isLogin,onClickLogin,onClickLogout}),(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(Title.D,{children:"Dummy list"}),(0,jsx_runtime.jsx)(DummyContents,{})]})]})}),Container=styled_components_browser_esm.ZP.div.withConfig({displayName:"TestPage__Container",componentId:"sc-1pd3vyy-0"})(["width:90%;margin:20px auto 0;"]);try{TestPage.displayName="TestPage",TestPage.__docgenInfo={description:"",displayName:"TestPage",props:{isLogin:{defaultValue:null,description:"",name:"isLogin",required:!0,type:{name:"boolean"}},onClickLogin:{defaultValue:null,description:"",name:"onClickLogin",required:!0,type:{name:"() => void"}},onClickLogout:{defaultValue:null,description:"",name:"onClickLogout",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/templates/TestPage/index.tsx#TestPage"]={docgenInfo:TestPage.__docgenInfo,name:"TestPage",path:"components/templates/TestPage/index.tsx#TestPage"})}catch(__react_docgen_typescript_loader_error){}const TestPage_stories={component:TestPage};var LoggedIn={parameters:{design:{type:"figma",url:"https://www.figma.com/file/sT1HORnfRSDHOjG2FMi0HA/TestPage?node-id=34%3A13"}},args:{isLogin:!0}},LoggedOut={parameters:{design:{type:"figma",url:"https://www.figma.com/file/sT1HORnfRSDHOjG2FMi0HA/TestPage?node-id=29%3A2"}},args:{isLogin:!1}},PagePattern={parameters:{design:{type:"figma",url:"https://www.figma.com/file/sT1HORnfRSDHOjG2FMi0HA/TestPage?node-id=0%3A1"}},args:{isLogin:!1}},__namedExportsOrder=["LoggedIn","LoggedOut","PagePattern"]},"./stories/Title.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Large:()=>Large,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={component:__webpack_require__("./components/templates/TestPage/atoms/Title/index.tsx").D};var Default={parameters:{design:{type:"figma",url:"https://www.figma.com/file/sT1HORnfRSDHOjG2FMi0HA/TestPage?node-id=52%3A48"}},args:{children:"Dummy list"}},Large={parameters:{design:{type:"figma",url:"https://www.figma.com/file/sT1HORnfRSDHOjG2FMi0HA/TestPage?node-id=52%3A54"}},args:{size:"large",children:"This is Header"}},__namedExportsOrder=["Default","Large"]},"./storybook-init-framework-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"./stories sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./Button.stories.tsx":"./stories/Button.stories.tsx","./Header.stories.tsx":"./stories/Header.stories.tsx","./TestPage.stories.tsx":"./stories/TestPage.stories.tsx","./Title.stories.tsx":"./stories/Title.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./stories sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./stories sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./stories sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$",module.exports=webpackEmptyContext},"?4f7e":()=>{},"./generated-stories-entry.cjs":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./stories sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./stories sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[310],(()=>(__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.cjs"))));__webpack_require__.O()}]);