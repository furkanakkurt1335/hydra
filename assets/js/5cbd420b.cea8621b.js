"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2089],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return p},MDXProvider:function(){return m},mdx:function(){return y},useMDXComponents:function(){return u},withMDXComponents:function(){return s}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){return function(t){var n=u(t.components);return r.createElement(e,a({},t,{components:n}))}},u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),m=o,d=s["".concat(i,".").concat(m)]||s[m]||f[m]||a;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93899:function(e,t,n){n.d(t,{Z:function(){return c},T:function(){return p}});var r=n(87462),o=n(67294),a=n(39960),i=n(52263),l=n(80907);function c(e){return o.createElement(a.default,(0,r.Z)({},e,{to:(t=e.to,c=(0,l.useActiveVersion)(),(0,i.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(n=null==c?void 0:c.name)?n:"current"]+t),target:"_blank"}));var t,n,c}function p(e){var t,n=null!=(t=e.text)?t:"Example (Click Here)";return o.createElement(c,e,o.createElement("span",null,"\xa0"),o.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example (Click Here)"}))}},58535:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=n(93899),l=["components"],c={id:"config_file",title:"Specifying a config file"},p=void 0,s={unversionedId:"tutorials/basic/your_first_app/config_file",id:"version-1.0/tutorials/basic/your_first_app/config_file",title:"Specifying a config file",description:"It can get tedious to type all those command line arguments.",source:"@site/versioned_docs/version-1.0/tutorials/basic/your_first_app/2_config_file.md",sourceDirName:"tutorials/basic/your_first_app",slug:"/tutorials/basic/your_first_app/config_file",permalink:"/docs/1.0/tutorials/basic/your_first_app/config_file",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/tutorials/basic/your_first_app/2_config_file.md",tags:[],version:"1.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1668447283,formattedLastUpdatedAt:"11/14/2022",sidebarPosition:2,frontMatter:{id:"config_file",title:"Specifying a config file"},sidebar:"version-1.0/docs",previous:{title:"A simple command-line application",permalink:"/docs/1.0/tutorials/basic/your_first_app/simple_cli"},next:{title:"Using the config object",permalink:"/docs/1.0/tutorials/basic/your_first_app/using_config"}},u=[],m={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.mdx)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(i.T,{to:"examples/tutorials/basic/your_first_hydra_app/2_config_file",mdxType:"ExampleGithubLink"}),(0,a.mdx)("p",null,"It can get tedious to type all those command line arguments.\nYou can solve it by creating a configuration file next to my_app.py.\nHydra configuration files are yaml files and should have the .yaml file extension."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"db: \n  driver: mysql\n  user: omry\n  password: secret\n")),(0,a.mdx)("p",null,"Specify the config name by passing a ",(0,a.mdx)("inlineCode",{parentName:"p"},"config_name")," parameter to the ",(0,a.mdx)("inlineCode",{parentName:"p"},"@hydra.main()")," decorator.\nNote that you should omit the ",(0,a.mdx)("inlineCode",{parentName:"p"},".yaml")," extension."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="my_app.py" {1}',title:'"my_app.py"',"{1}":!0},"@hydra.main(config_name='config')\ndef my_app(cfg):\n    print(OmegaConf.to_yaml(cfg))\n")),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"config.yaml")," is loaded automatically when you run your application."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py\ndb:\n  driver: mysql\n  user: omry\n  password: secret\n")),(0,a.mdx)("p",null,"You can override values in the loaded config from the command line.",(0,a.mdx)("br",{parentName:"p"}),"\n","Note the lack of the ",(0,a.mdx)("inlineCode",{parentName:"p"},"+")," prefix."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:"{4-5}","{4-5}":!0},"$ python my_app.py db.user=root db.password=1234\ndb:\n  driver: mysql\n  user: root\n  password: 1234\n")),(0,a.mdx)("p",null,"You can enable ",(0,a.mdx)("a",{parentName:"p",href:"/docs/1.0/tutorials/basic/running_your_app/tab_completion"},"tab completion")," for your Hydra applications."))}f.isMDXComponent=!0}}]);