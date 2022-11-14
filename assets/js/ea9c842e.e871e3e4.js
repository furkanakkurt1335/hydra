"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8911],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return d},MDXProvider:function(){return u},mdx:function(){return g},useMDXComponents:function(){return c},withMDXComponents:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),m=function(e){return function(t){var n=c(t.components);return a.createElement(e,i({},t,{components:n}))}},c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,f=m["".concat(o,".").concat(u)]||m[u]||p[u]||i;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},47416:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return m},default:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"default_composition_order",title:"Changes to default composition order"},s=void 0,d={unversionedId:"upgrades/1.0_to_1.1/default_composition_order",id:"version-1.1/upgrades/1.0_to_1.1/default_composition_order",title:"Changes to default composition order",description:"Default composition order is changing in Hydra 1.1.",source:"@site/versioned_docs/version-1.1/upgrades/1.0_to_1.1/changes_to_default_composition_order.md",sourceDirName:"upgrades/1.0_to_1.1",slug:"/upgrades/1.0_to_1.1/default_composition_order",permalink:"/docs/1.1/upgrades/1.0_to_1.1/default_composition_order",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/upgrades/1.0_to_1.1/changes_to_default_composition_order.md",tags:[],version:"1.1",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1668447283,formattedLastUpdatedAt:"11/14/2022",frontMatter:{id:"default_composition_order",title:"Changes to default composition order"},sidebar:"version-1.1/docs",previous:{title:"Changes to @hydra.main() and hydra.initialize()",permalink:"/docs/1.1/upgrades/1.0_to_1.1/changes_to_hydra_main_config_path"},next:{title:"Defaults List Overrides",permalink:"/docs/1.1/upgrades/1.0_to_1.1/defaults_list_override"}},m=[{value:"Migration",id:"migration",children:[{value:"Primary config is a YAML file",id:"primary-config-is-a-yaml-file",children:[],level:3},{value:"Primary config is a Structured Config",id:"primary-config-is-a-structured-config",children:[],level:3},{value:"Primary config is a config file with a Structured Config schema",id:"primary-config-is-a-config-file-with-a-structured-config-schema",children:[],level:3},{value:"Compatibility with both Hydra 1.0 and 1.1",id:"compatibility-with-both-hydra-10-and-11",children:[],level:3}],level:2}],c={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.mdx)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Default composition order is changing in Hydra 1.1."),(0,i.mdx)("p",null,"For this example, let's assume the following two configs:"),(0,i.mdx)("div",{className:"row"},(0,i.mdx)("div",{className:"col col--6"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"defaults:\n  - foo: bar\n\nfoo:\n  x: 10\n"))),(0,i.mdx)("div",{className:"col  col--6"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="foo/bar.yaml"',title:'"foo/bar.yaml"'},"# @package _group_\nx: 20\n\n\n\n")))),(0,i.mdx)("div",{className:"row"},(0,i.mdx)("div",{className:"col"},(0,i.mdx)("p",null,"In ",(0,i.mdx)("strong",{parentName:"p"},"Hydra 1.0"),", configs from the Defaults List are overriding ",(0,i.mdx)("em",{parentName:"p"},"config.yaml"),", resulting in the following output:")),(0,i.mdx)("div",{className:"col  col--4"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:"{2}","{2}":!0},"foo:\n  x: 20\n")))),(0,i.mdx)("div",{className:"row"},(0,i.mdx)("div",{className:"col"},(0,i.mdx)("p",null,"As of ",(0,i.mdx)("strong",{parentName:"p"},"Hydra 1.1"),", ",(0,i.mdx)("em",{parentName:"p"},"config.yaml")," is overriding configs from the Defaults List, resulting in the following output:")),(0,i.mdx)("div",{className:"col  col--4"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:"{2}","{2}":!0},"foo:\n  x: 10\n")))),(0,i.mdx)("h2",{id:"migration"},"Migration"),(0,i.mdx)("p",null,"If your application uses ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.main"),", the best way to verify that updating Hydra versions does not change your job configurations is to compare the output of ",(0,i.mdx)("inlineCode",{parentName:"p"},"python my_app.py --cfg job")," on both the new and old Hydra versions. If your application uses the Compose API, please make sure you have comprehensive unit tests on the composed configuration."),(0,i.mdx)("h3",{id:"primary-config-is-a-yaml-file"},"Primary config is a YAML file"),(0,i.mdx)("p",null,"To ensure this change is not missed by people migrating from Hydra 1.0, Hydra 1.1 issues a warning if the Defaults List in the primary config is missing ",(0,i.mdx)("inlineCode",{parentName:"p"},"_self_"),", and there are config values in addition to the Defaults List.",(0,i.mdx)("br",{parentName:"p"}),"\n","To address the warning, add ",(0,i.mdx)("inlineCode",{parentName:"p"},"_self_")," to the Defaults List of the primary config."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"If the new behavior works for your application, append ",(0,i.mdx)("inlineCode",{parentName:"li"},"_self_")," to the end of the Defaults List."),(0,i.mdx)("li",{parentName:"ul"},"If your application requires the previous behavior, insert ",(0,i.mdx)("inlineCode",{parentName:"li"},"_self_")," as the first item in your Defaults List.")),(0,i.mdx)("div",{className:"row"},(0,i.mdx)("div",{className:"col col--6"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml" {2}',title:'"config.yaml"',"{2}":!0},"defaults:\n  - _self_\n  - foo: bar\n\nfoo:\n  x: 10\n"))),(0,i.mdx)("div",{className:"col  col--6"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Output config"',title:'"Output','config"':!0},"foo:\n  x: 20\n\n\n\n\n")))),(0,i.mdx)("p",null,"The Defaults List is described ",(0,i.mdx)("a",{parentName:"p",href:"/docs/1.1/advanced/defaults_list"},"here"),"."),(0,i.mdx)("h3",{id:"primary-config-is-a-structured-config"},"Primary config is a Structured Config"),(0,i.mdx)("p",null,"Structured Configs used as primary config may see changes as well.\nYou should add ",(0,i.mdx)("inlineCode",{parentName:"p"},"_self_")," to the defaults list to indicate the composition order. In such cases you will typically want ",(0,i.mdx)("inlineCode",{parentName:"p"},"_self_")," to be the first item in the defaults list. "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python",metastring:"{3,14}","{3,14}":!0},'defaults = [\n    "_self_",\n    {"db": "mysql"}\n]\n\n@dataclass\nclass Config:\n    # this is unfortunately verbose due to @dataclass limitations\n    defaults: List[Any] = field(default_factory=lambda: defaults)\n\n    # Hydra will populate this field based on the defaults list\n    db: Any = MISSING\n')),(0,i.mdx)("h3",{id:"primary-config-is-a-config-file-with-a-structured-config-schema"},"Primary config is a config file with a Structured Config schema"),(0,i.mdx)("p",null,"If you use Structured Config as a schema for your primary config, be sure to add ",(0,i.mdx)("inlineCode",{parentName:"p"},"_self_")," after the schema in the Defaults List, otherwise the schema will override the config instead of the other way around."),(0,i.mdx)("div",{className:"row"},(0,i.mdx)("div",{className:"col col--4"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="my_app.py"',title:'"my_app.py"'},'@dataclass\nclass Config:\n  host: str = "localhost"\n  port: int = 8080\n\ncs.store(name="base_config", \n         node=Config)\n'))),(0,i.mdx)("div",{className:"col  col--4"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'{3,5} title="config.yaml"',"{3,5}":!0,title:'"config.yaml"'},"defaults:\n - base_config  # schema\n - _self_       # after schema\n\nport: 3306\n\n\n"))),(0,i.mdx)("div",{className:"col  col--4"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'{2} title="Output config"',"{2}":!0,title:'"Output','config"':!0},"host: localhost # schema\nport: 3306      # config.yaml\n\n\n\n\n\n")))),(0,i.mdx)("h3",{id:"compatibility-with-both-hydra-10-and-11"},"Compatibility with both Hydra 1.0 and 1.1"),(0,i.mdx)("p",null,"If your config must be compatible with both Hydra 1.0 and 1.1, Insert ",(0,i.mdx)("inlineCode",{parentName:"p"},"_self_")," as the first item in the Defaults List.\nHydra 1.0.7 (or newer releases in Hydra 1.0) ignores ",(0,i.mdx)("inlineCode",{parentName:"p"},"_self_")," in the Defaults List and Hydra 1.1 will compose the same config as Hydra 1.0 if ",(0,i.mdx)("inlineCode",{parentName:"p"},"_self_")," is the first item."))}u.isMDXComponent=!0}}]);