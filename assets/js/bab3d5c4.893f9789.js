"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4957],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return c},MDXProvider:function(){return m},mdx:function(){return y},useMDXComponents:function(){return s},withMDXComponents:function(){return l}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){return function(n){var t=s(n.components);return r.createElement(e,i({},n,{components:t}))}},s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},m=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),l=s(t),m=a,f=l["".concat(o,".").concat(m)]||l[m]||u[m]||i;return t?r.createElement(f,p(p({ref:n},c),{},{components:t})):r.createElement(f,p({ref:n},c))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var p={};for(var d in n)hasOwnProperty.call(n,d)&&(p[d]=n[d]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},76026:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return l},default:function(){return m}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],p={id:"ray_example",title:"Ray example",sidebar_label:"Ray example"},d=void 0,c={unversionedId:"advanced/ray_example",id:"version-0.11/advanced/ray_example",title:"Ray example",description:"Ray is a framework for building and running distributed applications.",source:"@site/versioned_docs/version-0.11/advanced/ray_example.md",sourceDirName:"advanced",slug:"/advanced/ray_example",permalink:"/docs/0.11/advanced/ray_example",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-0.11/advanced/ray_example.md",tags:[],version:"0.11",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1648591796,formattedLastUpdatedAt:"3/29/2022",frontMatter:{id:"ray_example",title:"Ray example",sidebar_label:"Ray example"},sidebar:"version-0.11/docs",previous:{title:"Experimental compose API",permalink:"/docs/0.11/advanced/compose_api"},next:{title:"Contributing",permalink:"/docs/0.11/development/contributing"}},l=[],s={toc:l};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.mdx)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://github.com/ray-project/ray"},"Ray")," is a framework for building and running distributed applications.\nHydra can be used with Ray to configure Ray itself as well as complex remote calls through the compose API.\nA future plugin will enable launching to Ray clusters directly from the command line."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'import hydra\nfrom hydra.experimental import compose\nimport ray\nimport time\nfrom omegaconf import OmegaConf\n\n@ray.remote\ndef train(overrides, cfg):\n    print(OmegaConf.to_yaml(cfg))\n    time.sleep(5)\n    return overrides, 0.9\n\n\n@hydra.main(config_path="conf/config.yaml")\ndef main(cfg):\n    ray.init(**cfg.ray.init)\n\n    results = []\n    for model in ["alexnet", "resnet"]:\n        for dataset in ["cifar10", "imagenet"]:\n            overrides = [f"dataset={dataset}", f"model={model}"]\n            run_cfg = compose(overrides=overrides)\n            ret = train.remote(overrides, run_cfg)\n            results.append(ret)\n\n    for overrides, score in ray.get(results):\n        print(f"Result from {overrides} : {score}")\n\n\nif __name__ == "__main__":\n    main()\n')),(0,i.mdx)("p",null,"Output:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"(pid=11571) dataset:\n(pid=11571)   name: cifar10\n(pid=11571)   path: /datasets/cifar10\n(pid=11571) model:\n(pid=11571)   num_layers: 7\n(pid=11571)   type: alexnet\n(pid=11571) \n(pid=11572) dataset:\n(pid=11572)   name: imagenet\n(pid=11572)   path: /datasets/imagenet\n(pid=11572) model:\n(pid=11572)   num_layers: 7\n(pid=11572)   type: alexnet\n(pid=11572) \n(pid=11573) dataset:\n(pid=11573)   name: cifar10\n(pid=11573)   path: /datasets/cifar10\n(pid=11573) model:\n(pid=11573)   num_layers: 50\n(pid=11573)   type: resnet\n(pid=11573)   width: 10\n(pid=11573) \n(pid=11574) dataset:\n(pid=11574)   name: imagenet\n(pid=11574)   path: /datasets/imagenet\n(pid=11574) model:\n(pid=11574)   num_layers: 50\n(pid=11574)   type: resnet\n(pid=11574)   width: 10\n(pid=11574) \nResult from ['dataset=cifar10', 'model=alexnet'] : 0.9\nResult from ['dataset=imagenet', 'model=alexnet'] : 0.9\nResult from ['dataset=cifar10', 'model=resnet'] : 0.9\nResult from ['dataset=imagenet', 'model=resnet'] : 0.9\n")))}m.isMDXComponent=!0}}]);