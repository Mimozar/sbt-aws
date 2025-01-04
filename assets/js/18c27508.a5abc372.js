"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9939],{3794:e=>{e.exports=JSON.parse('{"version":{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"category","label":"SBT Tutorial - Basics","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Tutorial Intro","href":"/sbt-aws/docs/tutorials/tutorial-basics/intro","docId":"tutorials/tutorial-basics/intro","unlisted":false},{"type":"link","label":"Install the SaaS Builder Toolkit for AWS","href":"/sbt-aws/docs/tutorials/tutorial-basics/install-sbt","docId":"tutorials/tutorial-basics/install-sbt","unlisted":false},{"type":"link","label":"Create the control plane","href":"/sbt-aws/docs/tutorials/tutorial-basics/create-control-plane","docId":"tutorials/tutorial-basics/create-control-plane","unlisted":false},{"type":"link","label":"Build the control plane","href":"/sbt-aws/docs/tutorials/tutorial-basics/build-it","docId":"tutorials/tutorial-basics/build-it","unlisted":false},{"type":"link","label":"Create the application plane","href":"/sbt-aws/docs/tutorials/tutorial-basics/create-application-plane","docId":"tutorials/tutorial-basics/create-application-plane","unlisted":false},{"type":"link","label":"Application plane utilities","href":"/sbt-aws/docs/tutorials/tutorial-basics/app-plane-utils","docId":"tutorials/tutorial-basics/app-plane-utils","unlisted":false},{"type":"link","label":"Provisioning script breakdown","href":"/sbt-aws/docs/tutorials/tutorial-basics/provisioning-script-breakdown","docId":"tutorials/tutorial-basics/provisioning-script-breakdown","unlisted":false},{"type":"link","label":"Putting it all together","href":"/sbt-aws/docs/tutorials/tutorial-basics/putting-it-all-together","docId":"tutorials/tutorial-basics/putting-it-all-together","unlisted":false},{"type":"link","label":"Testing the deployment","href":"/sbt-aws/docs/tutorials/tutorial-basics/test-the-deployment","docId":"tutorials/tutorial-basics/test-the-deployment","unlisted":false},{"type":"link","label":"Congratulations!","href":"/sbt-aws/docs/tutorials/tutorial-basics/congratulations","docId":"tutorials/tutorial-basics/congratulations","unlisted":false}],"href":"/sbt-aws/docs/category/sbt-tutorial---basics"},{"type":"category","label":"SBT for AWS Workshop","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"SaaS Builder Toolkit for AWS Workshop","href":"/sbt-aws/docs/tutorials/sbt-workshop/workshop","docId":"tutorials/sbt-workshop/workshop","unlisted":false}],"href":"/sbt-aws/docs/category/sbt-for-aws-workshop"}],"partnerIntegrations":[{"type":"category","label":"ISV Partner Integrations","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Amberflo","href":"/sbt-aws/docs/partners/isv-integrations/amberflo","docId":"partners/isv-integrations/amberflo","unlisted":false},{"type":"link","label":"Descope","href":"/sbt-aws/docs/partners/isv-integrations/descope","docId":"partners/isv-integrations/descope","unlisted":false},{"type":"link","label":"Moesif","href":"/sbt-aws/docs/partners/isv-integrations/moesif","docId":"partners/isv-integrations/moesif","unlisted":false}],"href":"/sbt-aws/docs/category/isv-partner-integrations"}],"interfaces":[{"type":"category","label":"SBT Interfaces","collapsible":true,"items":[{"type":"link","label":"IAuth Interface","href":"/sbt-aws/docs/interfaces/auth-interface","docId":"interfaces/auth-interface","unlisted":false},{"type":"link","label":"IBilling Interface","href":"/sbt-aws/docs/interfaces/billing-interface","docId":"interfaces/billing-interface","unlisted":false},{"type":"link","label":"IMetering Interface","href":"/sbt-aws/docs/interfaces/metering-interface","docId":"interfaces/metering-interface","unlisted":false}],"collapsed":true,"href":"/sbt-aws/docs/interfaces"}],"referenceArchitectures":[{"type":"link","label":"Amazon EKS SaaS Reference Architecture","href":"/sbt-aws/docs/reference_architectures/eks-reference-architecture","docId":"reference_architectures/eks-reference-architecture","unlisted":false},{"type":"link","label":"Amazon ECS SaaS - Reference Architecture","href":"/sbt-aws/docs/reference_architectures/ecs-reference-architecture","docId":"reference_architectures/ecs-reference-architecture","unlisted":false},{"type":"link","label":"Serverless SaaS - Reference Solution","href":"/sbt-aws/docs/reference_architectures/serverless-saas-reference-architecture","docId":"reference_architectures/serverless-saas-reference-architecture","unlisted":false}]},"docs":{"interfaces/auth-interface":{"id":"interfaces/auth-interface","title":"IAuth Interface","description":"Overview","sidebar":"interfaces"},"interfaces/billing-interface":{"id":"interfaces/billing-interface","title":"IBilling Interface","description":"Overview","sidebar":"interfaces"},"interfaces/metering-interface":{"id":"interfaces/metering-interface","title":"IMetering Interface","description":"Overview","sidebar":"interfaces"},"interfaces/README":{"id":"interfaces/README","title":"SBT Interfaces","description":"This documentation covers the interfaces that form the backbone of SBT\'s authentication, billing, and metering functionalities. These interfaces provide a standardized and consistent approach to handling various operations, making it easier to manage and integrate different components across the system.","sidebar":"interfaces"},"partners/isv-integrations/amberflo":{"id":"partners/isv-integrations/amberflo","title":"Amberflo","description":"A cloud-native solution that integrates with SaaS products to enable real-time metering and usage-based billing for GenAI and SaaS applications.","sidebar":"partnerIntegrations"},"partners/isv-integrations/descope":{"id":"partners/isv-integrations/descope","title":"Descope","description":"Integrate Descope authentication and authorization capabilities into your AWS SaaS Builder Toolkit (SBT) applications.","sidebar":"partnerIntegrations"},"partners/isv-integrations/moesif":{"id":"partners/isv-integrations/moesif","title":"Moesif","description":"Provides usage-based billing support for SBT","sidebar":"partnerIntegrations"},"reference_architectures/ecs-reference-architecture":{"id":"reference_architectures/ecs-reference-architecture","title":"Amazon ECS SaaS - Reference Architecture","description":"The AWS SaaS Factory ECS SaaS Reference Architecture is a example architecture that illustrates how to build and manage multi-tenant Software-as-a-Service (SaaS) applications using Amazon Elastic Container Service (ECS). It serves as a guide for developers looking to implement best practices in building multi-tenant SaaS applications on AWS using ECS, offering a flexible and scalable solution tailored to various business needs. This architecture leverages SBT for both control plane and tenant deployments. Key components and considerations of this reference architecture include:","sidebar":"referenceArchitectures"},"reference_architectures/eks-reference-architecture":{"id":"reference_architectures/eks-reference-architecture","title":"Amazon EKS SaaS Reference Architecture","description":"The AWS SaaS Factory EKS SaaS Reference Architecture provides a working example of a multi-tenant SaaS solution using Amazon Elastic Kubernetes Service (EKS). This architecture, like all SaaS Factory reference architectures, are provided as examples from which to create scalable, secure, and efficient SaaS applications on AWS. This architecture leverages SBT for both control plane and tenant deployments. Key components and considerations of this reference architecture include:","sidebar":"referenceArchitectures"},"reference_architectures/serverless-saas-reference-architecture":{"id":"reference_architectures/serverless-saas-reference-architecture","title":"Serverless SaaS - Reference Solution","description":"The AWS SaaS Factory Serverless SaaS Reference Architecture is a comprehensive example of a working, multi-tenant SaaS application using serverless technologies on AWS. This architecture leverages a range of AWS services to optimize operational efficiency and scalability while minimizing the complexity of managing infrastructure. The architecture leverages SBT for its control plane and tenant deployments. Key components and concepts of this architecture include:","sidebar":"referenceArchitectures"},"tutorials/sbt-workshop/workshop":{"id":"tutorials/sbt-workshop/workshop","title":"SaaS Builder Toolkit for AWS Workshop","description":"For a detailed step by step walkthrough, click this link to follow along in a workshop.","sidebar":"tutorialSidebar"},"tutorials/tutorial-basics/app-plane-utils":{"id":"tutorials/tutorial-basics/app-plane-utils","title":"Application plane utilities","description":"Although entirely optional, SBT includes a utility that lets you define, and run arbitrary jobs upon receipt of a control plane message, called a ScriptJob. This mechanism is extended to produce two new helper constructs ProvisioningScriptJob and DeprovisioningScriptJob which are used for onboarding and off-boarding, respectively, in the reference architectures which were ported to SBT (see references at the end of this document). That tenant provisioning/deprovisioning process is depicted below:","sidebar":"tutorialSidebar"},"tutorials/tutorial-basics/build-it":{"id":"tutorials/tutorial-basics/build-it","title":"Build the control plane","description":"Now let\'s build and deploy this component. Before we do, we have to modify one other file. Open up the hello-cdk.ts file in the bin directory, and replace everything that\'s in there with the following contents:","sidebar":"tutorialSidebar"},"tutorials/tutorial-basics/congratulations":{"id":"tutorials/tutorial-basics/congratulations","title":"Congratulations!","description":"","sidebar":"tutorialSidebar"},"tutorials/tutorial-basics/create-application-plane":{"id":"tutorials/tutorial-basics/create-application-plane","title":"Create the application plane","description":"As mentioned before, SBT is unopinionated about the application in which it\'s deployed. As a result, we expect you to create the ApplicationPlane construct as just another part of the CDK constructs that you\'d use to define your application. Take this simple (non-functional) example:","sidebar":"tutorialSidebar"},"tutorials/tutorial-basics/create-control-plane":{"id":"tutorials/tutorial-basics/create-control-plane","title":"Create the control plane","description":"Now that we have SBT installed, let\'s create a new SBT control plane. Create a new file under /lib/control-plane.ts with the following contents.","sidebar":"tutorialSidebar"},"tutorials/tutorial-basics/install-sbt":{"id":"tutorials/tutorial-basics/install-sbt","title":"Install the SaaS Builder Toolkit for AWS","description":"Now that you\'ve initialized a new CDK app, let\'s install the SBT components. From within the hello-cdk directory, please run the following command:","sidebar":"tutorialSidebar"},"tutorials/tutorial-basics/intro":{"id":"tutorials/tutorial-basics/intro","title":"Tutorial Intro","description":"This tutorial will walk you through creating a basic multi-tenant application using SaaS","sidebar":"tutorialSidebar"},"tutorials/tutorial-basics/provisioning-script-breakdown":{"id":"tutorials/tutorial-basics/provisioning-script-breakdown","title":"Provisioning script breakdown","description":"Let\'s break this script down section by section.","sidebar":"tutorialSidebar"},"tutorials/tutorial-basics/putting-it-all-together":{"id":"tutorials/tutorial-basics/putting-it-all-together","title":"Putting it all together","description":"Now that we\'ve seen the various parts of the application plane in isolation, let\'s put it all together. Please create the following file in the /lib directory of your CDK app and name it app-plane.ts. Now open that file and paste the following contents into it:","sidebar":"tutorialSidebar"},"tutorials/tutorial-basics/test-the-deployment":{"id":"tutorials/tutorial-basics/test-the-deployment","title":"Testing the deployment","description":"Once deployed, let\'s run a few tests to see our basic control plane and application plane in action. When you deployed the control plane, you should\'ve received an email with temporary admin credentials. Let\'s use those credentials now to log in to that account. Please replace the placeholder (\'INSERT PASSWORD HERE\') with your temporary password in the script below. Once logged in, this script will onboard a new tenant, and retrieve its details. Note this script uses the jq JSON processor.","sidebar":"tutorialSidebar"}}}}')}}]);