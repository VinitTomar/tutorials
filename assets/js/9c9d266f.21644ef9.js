"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[189],{2842:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>k,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var n=a(7462),o=a(7294),l=a(3905),i=a(814);function r(e){const{url:t,language:a,title:n,start:l,end:r}=e,[s,p]=(0,o.useState)("fetching...");return fetch(t).then((e=>e.text())).then((e=>{const t=e.split("\n"),a=l?l-1:-1,n=r?r-1:t.length;e=t.filter(((e,t)=>t>=a&&t<=n)).join("\n"),p(e)})),o.createElement(i.Z,{language:a,title:n,showLineNumbers:!0},s)}const s={title:"Setup",date:"2022-09-05 06:00:00 +0000",displayed_sidebar:"aws",sidebar_position:2},p=void 0,d={unversionedId:"aws-sam/setup-for-typescript",id:"aws-sam/setup-for-typescript",title:"Setup",description:"Install",source:"@site/docs/aws-sam/02-setup-for-typescript.mdx",sourceDirName:"aws-sam",slug:"/aws-sam/setup-for-typescript",permalink:"/tutorials/aws-sam/setup-for-typescript",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Setup",date:"2022-09-05 06:00:00 +0000",displayed_sidebar:"aws",sidebar_position:2},sidebar:"aws",previous:{title:"Introduction",permalink:"/tutorials/aws-sam/"},next:{title:"Todo app",permalink:"/tutorials/category/todo-app"}},u={},c=[{value:"Install",id:"install",level:2},{value:"Configure",id:"configure",level:2},{value:"Initialize",id:"initialize",level:2},{value:"Refactor",id:"refactor",level:2},{value:"Build",id:"build",level:2},{value:"Deploy",id:"deploy",level:2},{value:"Run",id:"run",level:2}],m={toc:c};function k(e){let{components:t,...o}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"install"},"Install"),(0,l.kt)("p",null,"Let's start gathering all tool required for our sam app. We will be using nodejs as lambda runtime language. Javascript does not provides typing support. To get typing support we will be writing our code in typescript and then compiling it into javascript."),(0,l.kt)("p",null,"Here is the list of tool we need for our app."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Python3")," is required to run AWS CLI and SAM CLI. Use ",(0,l.kt)("a",{parentName:"li",href:"https://www.python.org/downloads/"},"this")," link to install python. Run ",(0,l.kt)("inlineCode",{parentName:"li"},"python --version")," to check if python is installed properly on not."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"PIP")," is a python package manager. We will be using it to install SAM CLI. Use ",(0,l.kt)("a",{parentName:"li",href:"https://pip.pypa.io/en/stable/installation/"},"this")," link to install latest version of PIP. Run ",(0,l.kt)("inlineCode",{parentName:"li"},"pip --version")," to check if PIP is installed correctly or not."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"AWS CLI")," is required to run SAM CLI. SAM CLI will use AWS CLI at the time of deploying our application. Use ",(0,l.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"},"this")," link to install AWS CLI. Run ",(0,l.kt)("inlineCode",{parentName:"li"},"aws --version")," to check if AWS CLI is properly installed."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"SAM CLI")," will be used for initializing & deploying our application. It can be used for building our app, but we will be using webpack for that. Run below commands to install SAM CLI.",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pip install aws-sam-cli\nsam --version # To check if SAM CLI is installed properly\n")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"NodeJS")," will be used for the development of our application. We will be using develpment tools such as webpack, ts-loader, typescript etc. And to run these tools we need NodeJS & NPM(node package manager). You can download LTS(long term support) version of NodeJS from ",(0,l.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"this")," link. Run ",(0,l.kt)("inlineCode",{parentName:"li"},"node --version")," & ",(0,l.kt)("inlineCode",{parentName:"li"},"npm --version")," to check if NodeJS & NPM are installed properly.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"configure"},"Configure"),(0,l.kt)("p",null,"After installation, let us config our AWS credentials. Login to you AWS account and navigate to IAM service. Create an IAM user with admin access and keep ",(0,l.kt)("inlineCode",{parentName:"p"},"Access key ID")," & ",(0,l.kt)("inlineCode",{parentName:"p"},"Secret access key")," of this user at some safe place. Run below command to configure your credentials."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"aws configure\n")),(0,l.kt)("p",null,"To verify your credentials are configured correctly, run below command."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"aws sts get-caller-identity\n")),(0,l.kt)("p",null,"You should get a json output like this."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "UserId": "someuserid",\n  "Account": "someaccountid",\n  "Arn": "arn:aws:iam::somid:user/aws_cli"\n}\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"initialize"},"Initialize"),(0,l.kt)("p",null,"Now with the help of SAM CLI, we will initialize our app. Follow the below steps to generate a hello-world app."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Run cmd ",(0,l.kt)("inlineCode",{parentName:"li"},"sam init"),"."),(0,l.kt)("li",{parentName:"ol"},"Choose ",(0,l.kt)("inlineCode",{parentName:"li"},"Aws Quick Start Templates"),"."),(0,l.kt)("li",{parentName:"ol"},"Choose ",(0,l.kt)("inlineCode",{parentName:"li"},"Hello world Example")," template from the available options."),(0,l.kt)("li",{parentName:"ol"},"Choose your preferred NodeJS version with typescript."),(0,l.kt)("li",{parentName:"ol"},"Choose packaging mode as ",(0,l.kt)("inlineCode",{parentName:"li"},"zip"),".")),(0,l.kt)("admonition",{title:"Info ",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"After cloning, your folder structure should look like this."),(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("img",{alt:"folder-structure",src:a(3485).Z,width:"740",height:"860"}))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"refactor"},"Refactor"),(0,l.kt)("p",null,"In ",(0,l.kt)("inlineCode",{parentName:"p"},"Hello world")," template, our source code, package.json & tsconfig.json are inside a folder named hello-world. This folder structure is fine if we have ",(0,l.kt)("inlineCode",{parentName:"p"},"mono-repo"),", where a single repository hosts multiple apps and each app has its dependencies. However, we are going to build a simple CRUD app. Therefore we should reorganize our files. "),(0,l.kt)("p",null,"Following are the steps to reorganize our files:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Rename folder ",(0,l.kt)("inlineCode",{parentName:"li"},"hello-world")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"src"),"."),(0,l.kt)("li",{parentName:"ol"},"Move ",(0,l.kt)("inlineCode",{parentName:"li"},"package.json")," & ",(0,l.kt)("inlineCode",{parentName:"li"},"tsconfig.json")," from folder ",(0,l.kt)("inlineCode",{parentName:"li"},"src")," to root of project."),(0,l.kt)("li",{parentName:"ol"},"Add these scripts to the package.json.",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'showLineNumbers title="package.json"',showLineNumbers:!0,title:'"package.json"'},'"scripts": {\n "build": "npx webpack",\n "deploy": "sam deploy --stack-name prod --s3-bucket your-s3-bucket-name --capabilities CAPABILITY_IAM",\n},\n'))),(0,l.kt)("admonition",{parentName:"li",title:"Info",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Do not forget to replace ",(0,l.kt)("inlineCode",{parentName:"p"},"your-s3-bucket-name")," with your actual S3 bucket name in deploy script."))),(0,l.kt)("li",{parentName:"ol"},"Remove ",(0,l.kt)("inlineCode",{parentName:"li"},"noEmit: false")," from tsconfig.json."),(0,l.kt)("li",{parentName:"ol"},"Open ",(0,l.kt)("inlineCode",{parentName:"li"},"templat.yaml")," file and locate ",(0,l.kt)("inlineCode",{parentName:"li"},"HelloWorldFuction")," under resources. Update this resource with below code.",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)(r,{language:"yaml",title:"templat.yaml",url:"https://raw.githubusercontent.com/VinitTomar/todo-aws-sam/setup/template.yaml",start:"12",end:"26",mdxType:"CodeViewer"}))),(0,l.kt)("li",{parentName:"ol"},"Run following command to install ",(0,l.kt)("inlineCode",{parentName:"li"},"webpack"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"webpack-cli"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"typescript")," & ",(0,l.kt)("inlineCode",{parentName:"li"},"ts-loader")," as dev dependencies.",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -D webpack webpack-cli typescript ts-loader\n")))),(0,l.kt)("li",{parentName:"ol"},"Add ",(0,l.kt)("inlineCode",{parentName:"li"},"webpack.config.js")," to the root of your project and add below code.",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)(r,{language:"js",title:"webpack.config.js",url:"https://raw.githubusercontent.com/VinitTomar/todo-aws-sam/setup/webpack.config.js",mdxType:"CodeViewer"})))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"build"},"Build"),(0,l.kt)("p",null,"Our source code is written in ",(0,l.kt)("inlineCode",{parentName:"p"},"typescript"),". Therefore we need to compile it into ",(0,l.kt)("inlineCode",{parentName:"p"},"javascript"),". We are using webpack for compiling and bundling our typescript code. Webpack writes the compiled javascript into the ",(0,l.kt)("inlineCode",{parentName:"p"},"dist")," folder as per configuration in the ",(0,l.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," file. Run this command to build our code."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"SAM CLI support for typescript"),(0,l.kt)("div",null,"AWS SAM CLI has also started support for typescript. This feature is in beta. While working with this example I found that ",(0,l.kt)("code",null,"sam cli build")," cmd is very slow as compare to the webpack build. ",(0,l.kt)("code",null,"sam cli build")," copies the ",(0,l.kt)("code",null,"node_modules")," folder before building our app. This could be the reason for slow build of ",(0,l.kt)("code",null,"sam cli"),". If you want to more you can find it ",(0,l.kt)("a",{href:"https://aws.amazon.com/blogs/compute/building-typescript-projects-with-aws-sam-cli/",target:"_blank"},"here"),".")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"deploy"},"Deploy"),(0,l.kt)("p",null,"Run below command to deploy our app to AWS."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm run deploy\n")),(0,l.kt)("p",null,"Now log in to AWS cloud formation and you will creation of a stack in progress. If every thing goes right our app will be deployed successfully."),(0,l.kt)("admonition",{title:"Tip",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"If you want more control of deployment process you can run below command."),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sam deploy --guided\n"))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"run"},"Run"),(0,l.kt)("p",null,"After the deployment is completed, you will get an URL ending with ",(0,l.kt)("inlineCode",{parentName:"p"},"/Prod/Hello")," in the outputs. Open this URL in browser and you will get below response."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "message": "hello world"\n}\n')),(0,l.kt)("p",null,"Congratulations, your have completed the setup. Lets continue to build our CRUD app."))}k.isMDXComponent=!0},3485:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/folder-structure-a68635b08d0d31fa956afc1d03fcfca6.png"}}]);