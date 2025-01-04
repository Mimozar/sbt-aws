"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[779],{2785:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=t(4848),s=t(8453);const i={sidebar_position:3},a="Serverless SaaS - Reference Solution",o={id:"reference_architectures/serverless-saas-reference-architecture",title:"Serverless SaaS - Reference Solution",description:"The AWS SaaS Factory Serverless SaaS Reference Architecture is a comprehensive example of a working, multi-tenant SaaS application using serverless technologies on AWS. This architecture leverages a range of AWS services to optimize operational efficiency and scalability while minimizing the complexity of managing infrastructure. The architecture leverages SBT for its control plane and tenant deployments. Key components and concepts of this architecture include:",source:"@site/docs/reference_architectures/serverless-saas-reference-architecture.md",sourceDirName:"reference_architectures",slug:"/reference_architectures/serverless-saas-reference-architecture",permalink:"/sbt-aws/docs/reference_architectures/serverless-saas-reference-architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/awslabs/sbt-aws/blob/main/website/docs/reference_architectures/serverless-saas-reference-architecture.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"referenceArchitectures",previous:{title:"Amazon ECS SaaS - Reference Architecture",permalink:"/sbt-aws/docs/reference_architectures/ecs-reference-architecture"}},c={},l=[{value:"Key Components",id:"key-components",level:2},{value:"Architectural Strategies",id:"architectural-strategies",level:2}];function h(e){const n={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"serverless-saas---reference-solution",children:"Serverless SaaS - Reference Solution"})}),"\n",(0,r.jsx)(n.p,{children:"The AWS SaaS Factory Serverless SaaS Reference Architecture is a comprehensive example of a working, multi-tenant SaaS application using serverless technologies on AWS. This architecture leverages a range of AWS services to optimize operational efficiency and scalability while minimizing the complexity of managing infrastructure. The architecture leverages SBT for its control plane and tenant deployments. Key components and concepts of this architecture include:"}),"\n",(0,r.jsx)(n.h2,{id:"key-components",children:"Key Components"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Control Plane"}),": This is where tenant management and operational services reside. It includes components for registration, onboarding, and provisioning of tenants. The control plane is crucial for managing the lifecycle of tenants in a SaaS environment."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Application Plane"}),": This consists of the core application services that handle business logic and data processing. It typically involves AWS Lambda for compute, Amazon API Gateway for routing requests, and Amazon DynamoDB for data storage."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Identity and Access Management"}),": Amazon Cognito is used for user authentication and authorization, providing a secure way to manage user identities across different tenants."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"architectural-strategies",children:"Architectural Strategies"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Serverless Model"}),": By using serverless services like AWS Lambda, the architecture reduces operational overhead and allows automatic scaling based on demand. This model aligns resource consumption with tenant activity, optimizing cost efficiency."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Multi-Tenant Management"}),": The architecture supports both pooled and siloed deployment models, allowing flexibility in how resources are shared or isolated among tenants. This can be configured using AWS Lambda layers and API Gateway usage plans to manage tenant-specific configurations."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Deployment Automation"}),": The reference architecture includes automated deployment pipelines using AWS CodePipeline, enabling continuous integration and delivery of updates across all tenants."]}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"github-repository",children:"GitHub Repository"}),"\n",(0,r.jsxs)(n.p,{children:["For a complete implementation of the sample architecture for this pattern, see the ",(0,r.jsx)(n.a,{href:"https://github.com/aws-samples/aws-saas-factory-ref-solution-serverless-saas/tree/main",children:"GitHub repository"})]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var r=t(6540);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);