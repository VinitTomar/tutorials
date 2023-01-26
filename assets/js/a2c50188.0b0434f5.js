"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[862],{3905:(e,t,n)=>{n.d(t,{Zo:()=>y,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},y=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,y=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,k=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(k,o(o({ref:t},y),{},{components:n})):a.createElement(k,o({ref:t},y))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},549:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={title:"Primary Key",displayed_sidebar:"dynamodb"},o=void 0,s={unversionedId:"dynamo-db/primary-key",id:"dynamo-db/primary-key",title:"Primary Key",description:"Like in sql databases, dynamodb also requires a key primary key to uniquely identify each item in a table. While creating a table it is required to specify a primary key. There are two types of primary key dynamodb support.",source:"@site/docs/dynamo-db/04-primary-key.md",sourceDirName:"dynamo-db",slug:"/dynamo-db/primary-key",permalink:"/tutorials/dynamo-db/primary-key",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Primary Key",displayed_sidebar:"dynamodb"},sidebar:"dynamodb",previous:{title:"Tables",permalink:"/tutorials/dynamo-db/table"},next:{title:"Data types",permalink:"/tutorials/dynamo-db/data-types"}},p={},l=[{value:"Partition key",id:"partition-key",level:2},{value:"Partition &amp; sort key",id:"partition--sort-key",level:2},{value:"Read/Write operations",id:"readwrite-operations",level:2}],y={toc:l};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Like in sql databases, dynamodb also requires a key ",(0,r.kt)("strong",{parentName:"p"},"primary key")," to uniquely identify each item in a table. While creating a table it is required to specify a primary key. There are two types of primary key dynamodb support."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Partition key"),(0,r.kt)("li",{parentName:"ol"},"Partition key & sort key (AKA composite key)")),(0,r.kt)("p",null,"For key primary key attributes only scalar data types are supported such as string, number or binary."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"partition-key"},"Partition key"),(0,r.kt)("p",null,"Dynamodb db uses partition to store a table's data. While creating a table dynamodb allocates a nubmer of partitions sufficient for the read/write throughput requirement. While storing an item, dynamodb uses partition key to calculate ",(0,r.kt)("strong",{parentName:"p"},"HASH")," so that a partition can be selected for storing that item."),(0,r.kt)("p",null,"As you have seen the ",(0,r.kt)("inlineCode",{parentName:"p"},"KeySchema")," while creating table, we have specified an attribute whose ",(0,r.kt)("inlineCode",{parentName:"p"},"KeyType")," set to ",(0,r.kt)("inlineCode",{parentName:"p"},"HASH"),". This is the attribute which will be used as partition key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'showLineNumbers title="Partition key example"',showLineNumbers:!0,title:'"Partition',key:!0,'example"':!0},"KeySchema: [\n  {\n    AttributeName: 'Username',\n    KeyType: 'HASH'\n  },\n],\n")),(0,r.kt)("p",null,"No two elements can have same paritition key when we are only using partition key as in the ",(0,r.kt)("strong",{parentName:"p"},"primary key"),"."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"partition--sort-key"},"Partition & sort key"),(0,r.kt)("p",null,"With partition key we can also specify a ",(0,r.kt)("strong",{parentName:"p"},"sort key"),". Sort key gives us flexibiliy to apply operations such as ",(0,r.kt)("inlineCode",{parentName:"p"},"begins_with"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"between"),", ",(0,r.kt)("inlineCode",{parentName:"p"},">"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<")," & so on, while quering a table. When we are using both partition key & sort key for primary key then it can be called a ",(0,r.kt)("strong",{parentName:"p"},"composit key"),"."),(0,r.kt)("p",null,"While specifying ",(0,r.kt)("inlineCode",{parentName:"p"},"KeySchema")," for composite keys, one attribute's ",(0,r.kt)("inlineCode",{parentName:"p"},"KeyType")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"HASH")," and another attribute's ",(0,r.kt)("inlineCode",{parentName:"p"},"KeyType")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"RANGE"),". Here ",(0,r.kt)("inlineCode",{parentName:"p"},"RANGE")," is used for sort key and ",(0,r.kt)("inlineCode",{parentName:"p"},"HASH")," is used for partition key."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'showLineNumbers title="Partition & sort key example"',showLineNumbers:!0,title:'"Partition',"&":!0,sort:!0,key:!0,'example"':!0},"KeySchema: [\n  {\n    AttributeName: 'Username',\n    KeyType: 'HASH'\n  },\n  {\n    AttributeName: 'State',\n    KeyType: 'RANGE'\n  }\n],\n")),(0,r.kt)("p",null,"For those tables who have composite key, more than one elements can have same partition key or same sort key however both partition key and sort key combine together should be unique."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"readwrite-operations"},"Read/Write operations"),(0,r.kt)("p",null,"In case of a table who has only ",(0,r.kt)("strong",{parentName:"p"},"partition key")," key for primary key, in that case dynamodb uses an internal ",(0,r.kt)("strong",{parentName:"p"},"hash")," function to find out the partition where our item is going to write or read from. Once the partition is selected then:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"dynamodb uses partition key to search the item for the specified table in that partition, in case of read."),(0,r.kt)("li",{parentName:"ul"},"dynamodb inserts our item in the table inside that partition and updates indexes if required incase of write.")),(0,r.kt)("p",null,"If we are using ",(0,r.kt)("strong",{parentName:"p"},"partition & sort kye")," for primary key, than things changes slightly. Dynamodb still uses ",(0,r.kt)("strong",{parentName:"p"},"parition key")," for finding the partition. Once parition is located then dyanmodb"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"list all the items matching the specified parition key, then applies the specified operation, such as ",(0,r.kt)("inlineCode",{parentName:"li"},"begins_with"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"between"),", ",(0,r.kt)("inlineCode",{parentName:"li"},">"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"<")," etc., on ",(0,r.kt)("strong",{parentName:"li"},"sort key")," if we are quering data. If we are performing get opertion then dynamodb performs ",(0,r.kt)("inlineCode",{parentName:"li"},"=")," operation on ",(0,r.kt)("strong",{parentName:"li"},"sort key"),"."),(0,r.kt)("li",{parentName:"ul"},"find the location of items with the same ",(0,r.kt)("strong",{parentName:"li"},"partition key")," and add new element to the list in a sorted order. If no item is found then dynamodb creates a new entry for the item. At least dynamodb updates the indexes if required in case of write.")))}m.isMDXComponent=!0}}]);