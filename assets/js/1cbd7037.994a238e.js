"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7274],{93:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var i=r(4848),n=r(8453);const s={sidebar_position:2},a="Amazon ECS SaaS - Reference Architecture",c={id:"reference_architectures/ecs-reference-architecture",title:"Amazon ECS SaaS - Reference Architecture",description:"The AWS SaaS Factory ECS SaaS Reference Architecture is a example architecture that illustrates how to build and manage multi-tenant Software-as-a-Service (SaaS) applications using Amazon Elastic Container Service (ECS). It serves as a guide for developers looking to implement best practices in building multi-tenant SaaS applications on AWS using ECS, offering a flexible and scalable solution tailored to various business needs. This architecture leverages SBT for both control plane and tenant deployments. Key components and considerations of this reference architecture include:",source:"@site/docs/reference_architectures/ecs-reference-architecture.md",sourceDirName:"reference_architectures",slug:"/reference_architectures/ecs-reference-architecture",permalink:"/sbt-aws/docs/reference_architectures/ecs-reference-architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/awslabs/sbt-aws/blob/main/website/docs/reference_architectures/ecs-reference-architecture.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"referenceArchitectures",previous:{title:"Amazon EKS SaaS Reference Architecture",permalink:"/sbt-aws/docs/reference_architectures/eks-reference-architecture"},next:{title:"Serverless SaaS - Reference Solution",permalink:"/sbt-aws/docs/reference_architectures/serverless-saas-reference-architecture"}},o={},l=[{value:"Key Features",id:"key-features",level:2},{value:"Architectural Tiers",id:"architectural-tiers",level:2},{value:"GitHub Repository",id:"github-repository",level:2}];function u(e){const t={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"amazon-ecs-saas---reference-architecture",children:"Amazon ECS SaaS - Reference Architecture"})}),"\n",(0,i.jsx)(t.p,{children:"The AWS SaaS Factory ECS SaaS Reference Architecture is a example architecture that illustrates how to build and manage multi-tenant Software-as-a-Service (SaaS) applications using Amazon Elastic Container Service (ECS). It serves as a guide for developers looking to implement best practices in building multi-tenant SaaS applications on AWS using ECS, offering a flexible and scalable solution tailored to various business needs. This architecture leverages SBT for both control plane and tenant deployments. Key components and considerations of this reference architecture include:"}),"\n",(0,i.jsx)(t.h2,{id:"key-features",children:"Key Features"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Multi-Tenant Architecture"}),": The architecture supports different tenant isolation strategies, including pooled and silo models, across three tiers: Basic, Advanced, and Premium. These tiers offer varying levels of resource sharing and isolation to meet different tenant needs."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"AWS Integration"}),": The solution leverages native AWS services for routing, observability, and service discovery. It uses AWS CloudFormation, AWS CDK, and ECS Service Connect for seamless integration and management of services."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"AWS SaaS Builder Toolkit (SBT)"}),": This toolkit extends the SaaS control plane with functionalities like tenant onboarding, user management, and billing. It also integrates with the ECS application plane for bi-directional communication necessary for SaaS operations."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"architectural-tiers",children:"Architectural Tiers"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Basic Tier"}),": Utilizes shared ECS services across all tenants in a pooled model. This tier is preloaded in the baseline architecture and shares resources like product and order microservices."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Advanced Tier"}),": Features a shared ECS cluster with dedicated ECS services per tenant, following a silo model. This setup provides more isolation compared to the Basic tier."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Premium Tier"}),": Offers dedicated ECS clusters per tenant, providing the highest level of isolation and customization for each tenant."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"github-repository",children:"GitHub Repository"}),"\n",(0,i.jsxs)(t.p,{children:["For a complete implementation of the sample architecture for this pattern, see the ",(0,i.jsx)(t.a,{href:"https://github.com/aws-samples/saas-reference-architecture-ecs",children:"GitHub repository"})]})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>c});var i=r(6540);const n={},s=i.createContext(n);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);