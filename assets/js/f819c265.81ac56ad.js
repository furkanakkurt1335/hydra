"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5715],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return d},MDXProvider:function(){return p},mdx:function(){return g},useMDXComponents:function(){return u},withMDXComponents:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),m=function(e){return function(n){var t=u(n.components);return a.createElement(e,i({},n,{components:t}))}},u=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=u(t),p=r,f=m["".concat(o,".").concat(p)]||m[p]||c[p]||i;return t?a.createElement(f,l(l({ref:n},d),{},{components:t})):a.createElement(f,l({ref:n},d))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},93899:function(e,n,t){t.d(n,{Z:function(){return s},T:function(){return d}});var a=t(87462),r=t(67294),i=t(39960),o=t(52263),l=t(80907);function s(e){return r.createElement(i.default,(0,a.Z)({},e,{to:(n=e.to,s=(0,l.useActiveVersion)(),(0,o.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(t=null==s?void 0:s.name)?t:"current"]+n),target:"_blank"}));var n,t,s}function d(e){var n,t=null!=(n=e.text)?n:"Example (Click Here)";return r.createElement(s,e,r.createElement("span",null,"\xa0"),r.createElement("img",{src:"https://img.shields.io/badge/-"+t+"-informational",alt:"Example (Click Here)"}))}},75236:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return u},default:function(){return c}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),o=t(93899),l=["components"],s={id:"defaults",title:"Selecting default configs"},d=void 0,m={unversionedId:"tutorials/basic/your_first_app/defaults",id:"version-1.1/tutorials/basic/your_first_app/defaults",title:"Selecting default configs",description:"After office politics, you decide that you want to use MySQL by default.",source:"@site/versioned_docs/version-1.1/tutorials/basic/your_first_app/5_defaults.md",sourceDirName:"tutorials/basic/your_first_app",slug:"/tutorials/basic/your_first_app/defaults",permalink:"/docs/1.1/tutorials/basic/your_first_app/defaults",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/tutorials/basic/your_first_app/5_defaults.md",tags:[],version:"1.1",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1668447283,formattedLastUpdatedAt:"11/14/2022",sidebarPosition:5,frontMatter:{id:"defaults",title:"Selecting default configs"},sidebar:"version-1.1/docs",previous:{title:"Grouping config files",permalink:"/docs/1.1/tutorials/basic/your_first_app/config_groups"},next:{title:"Putting it all together",permalink:"/docs/1.1/tutorials/basic/your_first_app/composition"}},u=[{value:"Config group defaults",id:"config-group-defaults",children:[{value:"Overriding a config group default",id:"overriding-a-config-group-default",children:[],level:4}],level:3},{value:"Composition order of primary config",id:"composition-order-of-primary-config",children:[],level:3},{value:"Non-config group defaults",id:"non-config-group-defaults",children:[],level:3}],p={toc:u};function c(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.mdx)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)(o.T,{to:"examples/tutorials/basic/your_first_hydra_app/5_defaults",mdxType:"ExampleGithubLink"}),(0,i.mdx)("p",null,"After office politics, you decide that you want to use MySQL by default.\nYou no longer want to type ",(0,i.mdx)("inlineCode",{parentName:"p"},"+db=mysql")," every time you run your application."),(0,i.mdx)("p",null,"You can add a ",(0,i.mdx)("strong",{parentName:"p"},"Default List")," to your config file.\nA ",(0,i.mdx)("strong",{parentName:"p"},"Defaults List")," is a list telling Hydra how to compose the final config object.\nBy convention, it is the first item in the config."),(0,i.mdx)("h3",{id:"config-group-defaults"},"Config group defaults"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"defaults:\n  - db: mysql\n")),(0,i.mdx)("p",null,"Remember to specify the ",(0,i.mdx)("inlineCode",{parentName:"p"},"config_name"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'@hydra.main(config_path="conf", config_name="config")\ndef my_app(cfg: DictConfig) -> None:\n    print(OmegaConf.to_yaml(cfg))\n')),(0,i.mdx)("p",null,"When you run the updated application, MySQL is loaded by default."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py\ndb:\n  driver: mysql\n  pass: secret\n  user: omry\n")),(0,i.mdx)("p",null,"You can have multiple items in the defaults list, e.g."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n - db: mysql\n - db/mysql/engine: innodb\n")),(0,i.mdx)("p",null,"The defaults are ordered:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"If multiple configs define the same value, the last one wins. "),(0,i.mdx)("li",{parentName:"ul"},"If multiple configs contribute to the same dictionary, the result is the combined dictionary.")),(0,i.mdx)("h4",{id:"overriding-a-config-group-default"},"Overriding a config group default"),(0,i.mdx)("p",null,"You can still load PostgreSQL, and override individual values."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py db=postgresql db.timeout=20\ndb:\n  driver: postgresql\n  pass: drowssap\n  timeout: 20\n  user: postgres_user\n")),(0,i.mdx)("p",null,"You can remove a default entry from the defaults list by prefixing it with ~:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py ~db\n{}\n")),(0,i.mdx)("h3",{id:"composition-order-of-primary-config"},"Composition order of primary config"),(0,i.mdx)("p",null,"Your primary config can contain both config values and a Defaults List.\nIn such cases, you should add the ",(0,i.mdx)("inlineCode",{parentName:"p"},"_self_")," keyword to your defaults list to specify the composition order of the config file relative to the items in the defaults list."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"If you want your primary config to override the values of configs from the Defaults List, append ",(0,i.mdx)("inlineCode",{parentName:"li"},"_self_")," to the end of the Defaults List."),(0,i.mdx)("li",{parentName:"ul"},"If you want the configs from the Defaults List to override the values in your primary config, insert ",(0,i.mdx)("inlineCode",{parentName:"li"},"_self_")," as the first item in your Defaults List.")),(0,i.mdx)("div",{className:"row"},(0,i.mdx)("div",{className:"col col--6"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml" {3}',title:'"config.yaml"',"{3}":!0},"defaults:\n  - db: mysql\n  - _self_\n\ndb:\n  user: root\n"))),(0,i.mdx)("div",{className:"col  col--6"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Result config: db.user from config.yaml" {4}',title:'"Result',"config:":!0,"db.user":!0,from:!0,'config.yaml"':!0,"{4}":!0},"db:\n  driver: mysql  # db/mysql.yaml\n  pass: secret   # db/mysql.yaml \n  user: root     # config.yaml\n\n\n"))),(0,i.mdx)("div",{className:"col col--6"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml" {2}',title:'"config.yaml"',"{2}":!0},"defaults:\n  - _self_\n  - db: mysql\n\ndb:\n  user: root\n"))),(0,i.mdx)("div",{className:"col  col--6"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Result config: All values from db/mysql" {4}',title:'"Result',"config:":!0,All:!0,values:!0,from:!0,'db/mysql"':!0,"{4}":!0},"db:\n  driver: mysql # db/mysql.yaml\n  pass: secret  # db/mysql.yaml\n  user: omry    # db/mysql.yaml\n\n\n")))),(0,i.mdx)("p",null,"See ",(0,i.mdx)("a",{parentName:"p",href:"/docs/1.1/advanced/defaults_list#composition-order"},"Compositon Order")," for more information."),(0,i.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"The default composition order changed between Hydra 1.0 and Hydra 1.1."),(0,i.mdx)("ul",{parentName:"div"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Hydra 1.0"),": Configs from the defaults list are overriding the primary config"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Hydra 1.1"),": A config is overriding the configs from the defaults list.")),(0,i.mdx)("p",{parentName:"div"},"To mitigate confusion, Hydra 1.1 issue a warning if the primary config contains both Default List and Config values, and ",(0,i.mdx)("inlineCode",{parentName:"p"},"_self_")," is not specified in the Defaults List.",(0,i.mdx)("br",{parentName:"p"}),"\n","The warning will disappear if you add ",(0,i.mdx)("inlineCode",{parentName:"p"},"_self_")," to the Defaults List based on the desired behavior."))),(0,i.mdx)("h3",{id:"non-config-group-defaults"},"Non-config group defaults"),(0,i.mdx)("p",null,"Sometimes a config file does not belong in any config group.\nYou can still load it by default. Here is an example for ",(0,i.mdx)("inlineCode",{parentName:"p"},"some_file.yaml"),"."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - some_file\n")),(0,i.mdx)("p",null,"Config files that are not part of a config group will always be loaded. They cannot be overridden.",(0,i.mdx)("br",{parentName:"p"}),"\n","Prefer using a config group."),(0,i.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"For more information about the Defaults List see ",(0,i.mdx)("a",{parentName:"p",href:"/docs/1.1/advanced/defaults_list"},"Reference Manual/The Defaults List"),"."))))}c.isMDXComponent=!0}}]);