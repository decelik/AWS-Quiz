export const questions = [
  {
    question: "A company plans to use an Amazon Snowball Edge device to transfer files to the AWS Cloud. Which activities related to a Snowball Edge device are available to the company at no cost?",
    answers: [
      { text: "Use of the Snowball Edge appliance for a 10-day period", correct: false },
      { text: "The transfer of data out of Amazon S3 and to the Snowball Edge appliance", correct: false },
      { text: "The transfer of data from the Snowball Edge appliance into Amazon S3", correct: true },
      { text: "Daily use of the Snowball Edge appliance after 10 days", correct: false },
    ],
    explanation: "The transfer of data from a Snowball Edge appliance into Amazon S3 is included at no extra cost. It's a beneficial feature that simplifies large data migrations by avoiding network charges typically associated with high-volume data transfer in the cloud. This allows cost-effective data handling while taking advantage of AWS's scalable storage solution.",
  },
  {
    question: "A company has deployed applications on Amazon EC2 instances. The company needs to assess application vulnerabilities and must identify infrastructure deployments that do not meet best practices. Which AWS service can the company use to meet these requirements?",
    answers: [
      { text: "AWS Trusted Advisor", correct: false },
      { text: "Amazon Inspector", correct: true },
      { text: "AWS Config", correct: false },
      { text: "Amazon GuardDuty", correct: false },
    ],
    explanation: "Amazon Inspector is a great choice for assessing vulnerabilities within AWS EC2 instances and verifying application configurations against established best practices. This service performs automated security assessments to help uncover potential security or compliance issues with AWS applications. It's particularly useful for identifying weaknesses before they can be exploited in a live environment. Remember, Inspector is focused specifically on security state assessment and compliance of AWS resources, which directly aligns with the company's needs described in the question.",
  },
  {
    question: "A company has a centralized group of users with large file storage requirements that have exceeded the space available on premises. The company wants to extend its file storage capabilities for this group while retaining the performance benefit of sharing content locally. What is the MOST operationally efficient AWS solution for this scenario?",
    answers: [
      { text: "Create an Amazon S3 bucket for each user. Mount each bucket by using an S3 file system mounting utility.", correct: false },
      { text: "Configure and deploy an AWS Storage Gateway file gateway. Connect each user's workstation to the file gateway.", correct: true },
      { text: "Move each user's working environment to Amazon WorkSpaces. Set up an Amazon WorkDocs account for each user.", correct: false },
      { text: "Deploy an Amazon EC2 instance and attach an Amazon Elastic Block Store (Amazon EBS) Provisioned IOPS volume. Share the EBS volume directly with the users.", correct: false },
    ],
    explanation: "AWS Storage Gateway, configured as a file gateway, provides an efficient hybrid storage solution that can extend on-premises file storage into the cloud while retaining local performance benefits for sharing content. This setup supports a seamless integration between on-site user environments and AWS's scalable cloud storage, making it the most operationally efficient choice for companies needing to expand their storage capabilities without sacrificing local access speeds.",
  },
  {
    question: "According to security best practices, how should an Amazon EC2 instance be given access to an Amazon S3 bucket?",
    answers: [
      { text: "Hard code an IAM user's secret key and access key directly in the application, and upload the file.", correct: false },
      { text: "Store the IAM user's secret key and access key in a text file on the EC2 instance, read the keys, then upload the file.", correct: false },
      { text: "Have the EC2 instance assume a role to obtain the privileges to upload the file.", correct: true },
      { text: "Modify the S3 bucket policy so that any service can upload to it at any time.", correct: false },
    ],
    explanation: "Getting your EC2 instance to assume a role for accessing an S3 bucket. This method leverages IAM roles, providing temporary permissions which are a safer bet than having any fixed access keys lying around. It keeps your setup tidy by adhering to the principle of least privilege—each part of your system only has the permissions necessary to function, nothing more. Plus, it nixes the risk of exposing sensitive long-term credentials. Remember, security isn't just a feature; it's a backbone for trust and integrity in your systems!",
  },
  {
    question: "Which option is a customer responsibility when using Amazon DynamoDB under the AWS Shared Responsibility Model?",
    answers: [
      { text: "Physical security of DynamoDB", correct: false },
      { text: "Patching of DynamoDB", correct: false },
      { text: "Access to DynamoDB tables", correct: true },
      { text: "Encryption of data at rest in DynamoDB", correct: false },
    ],
    explanation: "Absolutely spot on! Within the framework of the AWS Shared Responsibility Model, while AWS handles the grunt work around the physical aspects and security of the service itself such as encryption and patching, it's squarely on you, the user, to manage who gets to do what on your DynamoDB tables. So yep, managing access to those tables is your ballpark. Makes sense, right? You wouldn't want just anyone snooping through your data!",
  },
  {
    question: "Which option is a perspective that includes foundational capabilities of the AWS Cloud Adoption Framework (AWS CAF)?",
    answers: [
      { text: "Sustainability", correct: false },
      { text: "Performance efficiency", correct: false },
      { text: "Governance", correct: true },
      { text: "Reliability", correct: false },
    ],
    explanation: `The "Governance" perspective indeed remains a foundational component of the AWS Cloud Adoption Framework (CAF). While a few users suggested updates or referenced changes to AWS documentation, the governance aspect continues to primarily handle an organization's strategy and investment priorities, aligning IT resources and measuring their use within cloud environments effectively. It's crucial as a baseline for businesses to develop a structured approach toward cloud adoption, ensuring regulations, compliance, and risk management align with business outcomes.`,
  },
  {
    question: "A company is running and managing its own Docker environment on Amazon EC2 instances. The company wants an alternative to help manage cluster size, scheduling, and environment maintenance. Which AWS service meets these requirements?",
    answers: [
      { text: "AWS Lambda", correct: false },
      { text: "Amazon RDS", correct: false },
      { text: "AWS Fargate", correct: true },
      { text: "Amazon Athena", correct: false },
    ],
    explanation: "AWS Fargate is an optimal solution for companies looking to automate both cluster scaling and maintenance while focusing on their containerized applications. By utilizing this service, the need for manual management of EC2 instances, cluster configuration, and server scaling is significantly reduced. Fargate's serverless framework streamlines the deployment process and handles all the underlying infrastructure, allowing teams to concentrate solely on developing and deploying their applications. This service aligns perfectly with requirements for an easier management system for Docker environments on EC2.",
  },
  {
    question: "A company wants to run a NoSQL database on Amazon EC2 instances. Which task is the responsibility of AWS in this scenario?",
    answers: [
      { text: "Update the guest operating system of the EC2 instances", correct: false },
      { text: "Maintain high availability at the database layer.", correct: false },
      { text: "Patch the physical infrastructure that hosts the EC2 instances", correct: true },
      { text: "Configure the security group firewall", correct: false },
    ],
    explanation: "AWS assumes the responsibility of managing the underlying physical infrastructure for EC2 instances. This includes patching and maintaining the hardware and facilities that support the operation of your EC2 instances. Any adjustments or updates to the guest operating system, security configurations, or database-specific settings are the responsibility of the customer. This distinction is crucial in understanding the demarcation of roles in the cloud environment and ensures that while you manage your application's performance, AWS ensures the integrity and robustness of the physical resources.",
  },
  {
    question: "Which AWS services or tools can identify rightsizing opportunities for Amazon EC2 instances? (Choose two.)",
    answers: [
      { text: "AWS Cost Explorer", correct: false },
      { text: "AWS Billing Conductor", correct: true },
      { text: "Amazon CodeGuru", correct: false },
      { text: "Amazon SageMaker", correct: false },
      { text: "AWS Compute Optimizer", correct: true },
    ],
    explanation: "AWS Cost Explorer and AWS Compute Optimizer are specifically designed to assist in the management and optimization of AWS resources. AWS Cost Explorer gives a detailed view of your spending and usage, making it easier to spot where rightsizing could lead to cost efficiency. On the other hand, AWS Compute Optimizer directly provides tailored recommendations for rightsizing EC2 instances based on historical usage data, ensuring that resource allocation is optimized to meet actual workload demands efficiently. Both tools are essential for managing AWS cost efficiency through rightsizing strategies.",
  },
  {
    question: "Which of the following are benefits of using AWS Trusted Advisor? (Choose two.)",
    answers: [
      { text: "Providing high-performance container orchestration", correct: false },
      { text: "Creating and rotating encryption keys", correct: false },
      { text: "Detecting underutilized resources to save costs", correct: true },
      { text: "Improving security by proactively monitoring the AWS environment", correct: true },
      { text: "Implementing enforced tagging across AWS resources", correct: false },
    ],
    explanation: "AWS Trusted Advisor is an essential tool that assists in optimizing your AWS environment. It helps in identifying underutilized resources, which directly supports cost management by suggesting reductions or alternatives. Furthermore, it enhances security by proactively scanning for vulnerabilities and recommending best practices for a more secure setup. This dual capability of cost optimization and security enhancement ensures an efficient and robust AWS infrastructure.",
  },
  {
    question: "Which of the following is an advantage that users experience when they move on-premises workloads to the AWS Cloud?",
    answers: [
      { text: "Elimination of expenses for running and maintaining data centers", correct: true },
      { text: "Price discounts that are identical to discounts from hardware providers", correct: false },
      { text: "Distribution of all operational controls to AWS", correct: false },
      { text: "Elimination of operational expenses", correct: false },
    ],
    explanation: "which is the elimination of expenses for running and maintaining data centers, nails the advantage that users find when moving their on-premises workloads to the AWS Cloud. This transition not only frees organizations from the capital and operational expenditures associated with physical data centers but also grants them enhanced scalability and flexibility. This transformation harnesses AWS's robust infrastructure capabilities, enabling businesses to redirect resources more efficiently and adaptively towards innovation and growth. AWS's model is fundamentally about converting large fixed costs into significantly more manageable variable costs.",
  },
  {
    question: "A company wants to manage deployed IT services and govern its infrastructure as code (IaC) templates. Which AWS service will meet this requirement?",
    answers: [
      { text: "AWS Resource Explorer", correct: false },
      { text: "AWS Service Catalog", correct: true },
      { text: "AWS Organizations", correct: false },
      { text: "AWS Systems Manager", correct: false },
    ],
    explanation: "AWS Service Catalog is the go-to service for managing and governing infrastructure as code (IaC) templates. It provides a centralized platform where organizations can create, manage, and provision IT services based on predefined CloudFormation or Terraform templates. This helps in maintaining governance and compliance across resources, ensuring a streamlined and consistent deployment process for IT services according to organizational standards and policies.",
  },
  {
    question: "Which AWS service or tool helps users visualize, understand, and manage spending and usage over time?",
    answers: [
      { text: "AWS Organizations", correct: false },
      { text: "AWS Pricing Calculator", correct: false },
      { text: "AWS Cost Explorer", correct: true },
      { text: "AWS Service Catalog", correct: false },
    ],
    explanation: "AWS Cost Explorer is the right choice for understanding and managing AWS spending and usage over time. It features a user-friendly interface that allows for detailed visualization and analysis of costs. You can easily create custom reports to review and interpret cost and usage data, which helps in identifying trends, understanding cost drivers, and spotting anomalies. This tool is essential for effective cost management in AWS environments, offering capabilities for both high-level and in-depth financial analysis.",
  },
  {
    question: " company is using a central data platform to manage multiple types of data for its customers. The company wants to use AWS services to discover, transform, and visualize the data. Which combination of AWS services should the company use to meet these requirements? (Choose two.)",
    answers: [
      { text: "AWS Glue", correct: true },
      { text: "Amazon Elastic File System", correct: false },
      { text: "Amazon Redshift", correct: false },
      { text: "Amazon QuickSight", correct: false },
    ],
    explanation: "AWS Glue and Amazon QuickSight are the most effective services for the scenario described. AWS Glue handles the discovery and transformation phases by providing ETL capabilities that simplify the process of preparing data for analytics. On the other hand, Amazon QuickSight allows for the easy visualization of this data through its business intelligence tools, which support creating interactive dashboards and reports directly from data processed by AWS Glue. This combination addresses the full spectrum of needs from data manipulation to the final representation for decision-making.",
  },
  {
    question: "A global company wants to migrate its third-party applications to the AWS Cloud. The company wants help from a global team of experts to complete the migration faster and more reliably in accordance with AWS internal best practices. Which AWS service or resource will meet these requirements?",
    answers: [
      { text: "AWS Support", correct: false },
      { text: "AWS Professional Services", correct: true },
      { text: "AWS Launch Wizard", correct: false },
      { text: "AWS Managed Services", correct: false },
    ],
    explanation: "AWS Professional Services is perfectly suited for a global company looking to migrate third-party applications to the AWS Cloud with expert assistance. This team provides hands-on guidance and follows AWS best practices for planning, executing, and optimizing migrations. Their global presence ensures support across different geographies, matching the company's need for a wide-spanning team of specialists. AWS Professional Services distinguishes itself by focusing specifically on migration assistance rather than just technical support or operational management, making it the best choice for this scenario.",
  },
  {
    question: "An e-learning platform needs to run an application for 2 months each year. The application will be deployed on Amazon EC2 instances. Any application downtime during those 2 months must be avoided. Which EC2 purchasing option will meet these requirements MOST costeffectively?",
    answers: [
      { text: "Reserved Instances", correct: false },
      { text: "Dedicated Hosts", correct: false },
      { text: "Spot Instances", correct: false },
      { text: "On-Demand Instances", correct: true },
    ],
    explanation: "",
  },
  {
    question: "A developer wants to deploy an application quickly on AWS without manually creating the required resources. Which AWS service will meet these requirements?",
    answers: [
      { text: "Amazon EC2", correct: false },
      { text: "AWS Elastic Beanstalk", correct: true },
      { text: "AWS CodeBuild", correct: false },
      { text: "Amazon Personalize", correct: false },
    ],
    explanation: "",
  },
  {
    question: "A company is storing sensitive customer data in an Amazon S3 bucket. The company wants to protect the data from accidental deletion or overwriting. Which S3 feature should the company use to meet these requirements?",
    answers: [
      { text: "S3 Lifecycle rules", correct: false },
      { text: "S3 Versioning", correct: true },
      { text: "S3 bucket policies", correct: false },
      { text: "S3 server-side encryption", correct: false },
    ],
    explanation: "",
  },
  {
    question: "Which AWS service provides the ability to manage infrastructure as code?",
    answers: [
      { text: "AWS CodePipeline", correct: false },
      { text: "AWS CodeDeploy", correct: false },
      { text: "AWS Direct Connect", correct: false },
      { text: "AWS CloudFormation", correct: true },
    ],
    explanation: "",
  },
  {
    question: "An online gaming company needs to choose a purchasing option to run its Amazon EC2 instances for 1 year. The web traffic is consistent, and any increases in traffic are predictable. The EC2 instances must be online and available without any disruption. Which EC2 instance purchasing option will meet these requirements MOST costeffectively?",
    answers: [
      { text: "On-Demand Instances", correct: false },
      { text: "Reserved Instances", correct: true },
      { text: "Spot Instances", correct: false },
      { text: "Spot Fleet", correct: false },
    ],
    explanation: "",
  },
  {
    question: "Which AWS service or feature allows a user to establish a dedicated network connection between a company’s on-premises data center and the AWS Cloud?",
    answers: [
      { text: "AWS Direct Connect", correct: true },
      { text: "VPC peering", correct: false },
      { text: "AWS VPN", correct: false },
      { text: "Amazon Route 53", correct: false },
    ],
    explanation: "AWS Direct Connect is the correct answer because it provides a dedicated network connection from your on-premises data center to AWS. This service establishes a private connection, which can result in lower network costs, increased bandwidth throughput, and a more consistent network experience compared to internet-based connections. AWS Direct Connect is specifically designed for establishing private connectivity to AWS, making it the appropriate choice for a dedicated network connection.",
  },
  {
    question: "Which option is a physical location of the AWS global infrastructure?",
    answers: [
      { text: "AWS DataSync", correct: false },
      { text: "AWS Region", correct: true },
      { text: "Amazon Connect", correct: false },
      { text: "AWS Organizations", correct: false },
    ],
    explanation: "AWS has the concept of a Region, which is a physical location around the world where we cluster data centers. We call each group of logical data centers an Availability Zone. Each AWS Region consists of a minimum of three, isolated, and physically separate AZs within a geographic area. https://aws.amazon.com/aboutaws/ global-infrastructure/regions_az/",
  },
  {
    question: "A company wants to protect its AWS Cloud information, systems, and assets while performing risk assessment and mitigation tasks. Which pillar of the AWS Well-Architected Framework is supported by these goals?",
    answers: [
      { text: "Reliability", correct: false },
      { text: "Security", correct: true },
      { text: "Operational excellence", correct: false },
      { text: "Performance efficiency", correct: false },
    ],
    explanation: "protect its AWS Cloud information, systems, and assets while performing risk assessment and mitigation tasks",
  },
  {
    question: "What is the purpose of having an internet gateway within a VPC?",
    answers: [
      { text: "To create a VPN connection to the VPC", correct: false },
      { text: "To allow communication between the VPC and the internet", correct: true },
      { text: "To impose bandwidth constraints on internet traffic", correct: false },
      { text: "To load balance traffic from the internet across Amazon EC2 instances", correct: false },
    ],
    explanation: "An internet gateway is a horizontally scaled, redundant, and highly available VPC component that allows communication between your VPC and the internet.",
  },
  {
    question: "A company is running a monolithic on-premises application that does not scale and is difficult to maintain. The company has a plan to migrate the application to AWS and divide the application into microservices. Which best practice of the AWS Well-Architected Framework is the company following with this plan?",
    answers: [
      { text: "Integrate functional testing as part of AWS deployment", correct: false },
      { text: "Use automation to deploy changes", correct: false },
      { text: "Deploy the application to multiple locations", correct: false },
      { text: "Implement loosely coupled dependencies", correct: true },
    ],
    explanation: "Loose Coupling is main advantage of moving from monolithic to microservices.",
  },
  {
    question: "A company has an AWS account. The company wants to audit its password and access key rotation details for compliance purposes. Which AWS service or tool will meet this requirement?",
    answers: [
      { text: "IAM Access Analyzer", correct: false },
      { text: "AWS Artifact", correct: false },
      { text: "IAM credential report", correct: true },
      { text: "AWS Audit Manager", correct: false },
    ],
    explanation: `Key: "audit its password and access key rotation details for compliance purposes"`,
  },
  {
    question: "A company wants to receive a notification when a specific AWS cost threshold is reached. Which AWS services or tools can the company use to meet this requirement? (Choose two.)",
    answers: [
      { text: "Amazon Simple Queue Service", correct: false },
      { text: "AWS Budgets", correct: true },
      { text: "Cost Explorer", correct: false },
      { text: "Amazon CloudWatch", correct: true },
    ],
    explanation: "AWS Budgets: Allows the company to set custom cost and usage budgets that alert them when thresholds are exceeded. They can receive notifications via email or Amazon Simple Notification Service (Amazon SNS) when the budget thresholds are reached. <br><br>Amazon CloudWatch: Can be used to create custom alarms based on cost metrics. The company can set up alarms to trigger notifications when specific cost thresholds are met or exceeded. CloudWatch Alarms can notify through various channels, including Amazon SNS. <br><br>Amazon Simple Queue Service (Amazon SQS): SQS is a fully managed message queuing service.  <br><br>Cost Explorer: Cost Explorer is a tool for exploring and analyzing AWS costs but does not provide direct notifications for cost thresholds.",
  },
  {
    question: "Which AWS service or resource provides answers to the most frequently asked security-related questions that AWS receives from its users?",
    answers: [
      { text: "AWS Artifact", correct: false },
      { text: "Amazon Connect", correct: false },
      { text: "AWS Chatbot", correct: false },
      { text: "AWS Knowledge Center", correct: true },
    ],
    explanation: "Exploring both portals seems clear that AWS Knowledge Center provides answer to the most frequently asked security-related questions that AWS receives from its users.",
  },
  {
    question: "Which tasks are customer responsibilities, according to the AWS shared responsibility model? (Choose two.)",
    answers: [
      { text: "Configure the AWS provided security group firewall.", correct: true },
      { text: "Classify company assets in the AWS Cloud", correct: true },
      { text: "Determine which Availability Zones to use for Amazon S3 buckets", correct: false },
      { text: "Patch or upgrade Amazon DynamoDB.", correct: false },
    ],
    explanation: "Configure the AWS provided security group firewall: Customers are responsible for configuring and managing security group firewalls to control inbound and outbound traffic to their AWS resources. B. Classify company assets in the AWS Cloud: Asset classification is typically a customer responsibility as part of their data governance and security practices. The other options are not accurate in the context of customer responsibilities:",
  },
  {
    question: "Which AWS service or feature is used to send both text and email messages from distributed applications?",
    answers: [
      { text: "Amazon Simple Notification Service (Amazon SNS)", correct: true },
      { text: "Amazon Simple Email Service", correct: false },
      { text: "Amazon CloudWatch alerts", correct: false },
      { text: "Amazon Simple Queue Service", correct: false },
    ],
    explanation: "Amazon Simple Notification Service (Amazon SNS) sends notifications two ways, A2A and A2P. A2A provides high-throughput, push-based, many-to-many messaging between distributed systems, microservices, and event-driven serverless applications. These applications include Amazon Simple Queue Service (SQS), Amazon Kinesis Data Firehose, AWS Lambda, and other HTTPS endpoints. A2P functionality lets you send messages to your customers with SMS texts, push notifications, and email. https://aws.amazon.com/sns/",
  },
  {
    question: "A user needs programmatic access to AWS resources through the AWS CLI or the AWS API. Which option will provide the user with the appropriate access?",
    answers: [
      { text: "Amazon Inspector", correct: false },
      { text: "Access keys", correct: true },
      { text: "SSH public keys", correct: false },
      { text: "AWS Key Management Service", correct: false },
    ],
    explanation: "Access keys are long-term credentials for an IAM user or the AWS account root user. You can use access keys to sign programmatic requests to the AWS CLI or AWS API (directly or using the AWS SDK).",
  },
  {
    question: "A company runs thousands of simultaneous simulations using AWS Batch. Each simulation is stateless, is fault tolerant, and runs for up to 3 hours. Which pricing model enables the company to optimize costs and meet these requirements?",
    answers: [
        { text: "Reserved Instances", correct: false },
        { text: "Spot Instances", correct: true },
        { text: "On-Demand Instances", correct: false },
        { text: "Dedicated Instances", correct: false }
    ],
    explanation: "Spot Instances for stateless, fault-tolerant workloads that can handle interruptions and have short durations, using Spot Instances is a cost-effective option. Spot Instances allow you to bid for unused EC2 capacity at a potentially lower price than On-Demand Instances. However, Spot Instances can be terminated if the capacity is needed by On-Demand or Reserved Instances customers. Given the nature of the company's workload, where thousands of simulations are run simultaneously and each simulation is stateless, fault-tolerant, and runs for up to 3 hours, Spot Instances would be a suitable choice. This can help optimize costs by taking advantage of the lower pricing for unused capacity."
},
{
  question: "What does the concept of agility mean in AWS Cloud computing? (Choose two.)",
  answers: [
      { text: "The speed at which AWS resources are implemented", correct: true },
      { text: "The speed at which AWS resources are implemented", correct: true },
      { text: "The ability to experiment quickly", correct: true },
      { text: "The elimination of wasted capacity", correct: false }
  ],
  explanation: "In the context of AWS Cloud computing, the concept of agility refers to the ability to respond quickly to changing business requirements and to innovate rapidly. Two aspects of agility in AWS Cloud computing are: A. The speed at which AWS resources are implemented: Agility involves the rapid provisioning and deployment of AWS resources to meet the dynamic needs of applications and workloads. C. The ability to experiment quickly: Agility allows users to experiment and iterate quickly, enabling them to test ideas, features, and configurations with minimal barriers."
},
{
  question: "A company needs to block SQL injection attacks. Which AWS service or feature can meet this requirement?",
  answers: [
      { text: "AWS WAF", correct: true },
      { text: "AWS Shield", correct: false },
      { text: "Network ACLs", correct: false },
      { text: "Security groups", correct: false }
  ],
  explanation: "AWS WAF allows you to create custom rules to block SQL injection attempts. Create a WebACL: Go to AWS WAF dashboard and create a new WebACL. Add a Rule: Inside the WebACL, add a new rule. SQLi Filter: Choose the rule type to look for SQLi patterns. AWS WAF has built-in SQLi filters. Attach Resources: Attach the WebACL to a resource, such as an Application Load Balancer, Amazon CloudFront distribution, or an API Gateway. Deploy: Save and deploy the WebACL."
},
{
  question: "Which AWS service or feature identifies whether an Amazon S3 bucket or an IAM role has been shared with an external entity?",
  answers: [
      { text: "AWS Service Catalog", correct: false },
      { text: "AWS Systems Manager", correct: false },
      { text: "AWS IAM Access Analyzer", correct: true },
      { text: "AWS Organizations", correct: false }
  ],
  explanation: "IAM Access Analyzer helps identify resources in your organization and accounts that are shared with an external entity."
},
{
  question: "A cloud practitioner needs to obtain AWS compliance reports before migrating an environment to the AWS Cloud. How can these reports be generated?",
  answers: [
      { text: "Contact the AWS Compliance team.", correct: false },
      { text: "Download the reports from AWS Artifact", correct: true },
      { text: "Open a case with AWS Support", correct: false },
      { text: "Generate the reports with Amazon Macie", correct: false }
  ],
  explanation: "AWS Artifact is a portal that provides access to various compliance reports, including certifications, attestations, and other relevant documents. You can download these reports directly from AWS Artifact."
},
{
  question: "An ecommerce company has migrated its IT infrastructure from an on-premises data center to the AWS Cloud. Which cost is the company's direct responsibility?",
  answers: [
      { text: "Cost of application software licenses", correct: true },
      { text: "Cost of the hardware infrastructure on AWS", correct: false },
      { text: "Cost of power for the AWS servers", correct: false },
      { text: "Cost of physical security for the AWS data center", correct: false }
  ],
  explanation: "In the AWS Cloud, customers are responsible for the cost of application software licenses. This includes any software licenses required to run applications on AWS services. AWS provides the underlying infrastructure, and customers are responsible for licensing their application software."
},
{
  question: "A company is setting up AWS Identity and Access Management (IAM) on an AWS account. Which recommendation complies with IAM security best practices?",
  answers: [
      { text: "Use the account root user access keys for administrative tasks.", correct: false },
      { text: "Grant broad permissions so that all company employees can access the resources they need.", correct: false },
      { text: "Turn on multi-factor authentication (MFA) for added security during the login process", correct: true },
      { text: "Avoid rotating credentials to prevent issues in production applications", correct: false }
  ],
  explanation: "Best practices recommend enabling multi-factor authentication (MFA) for added security during the login process."
},
{
  question: "Elasticity in the AWS Cloud refers to which of the following? (Choose two.)",
  answers: [
      { text: "How quickly an Amazon EC2 instance can be restarted", correct: false },
      { text: "The ability to rightsize resources as demand shifts", correct: true },
      { text: "The maximum amount of RAM an Amazon EC2 instance can use", correct: false },
      { text: "How easily resources can be procured when they are needed", correct: true }
  ],
  explanation: "Elasticity is the ability to add and release resources as business needs change. It has nothing to do with pricing."
}
,
{
  question: "Which service enables customers to audit API calls in their AWS accounts?",
  answers: [
      { text: "AWS CloudTrail", correct: true },
      { text: "AWS Trusted Advisor", correct: false },
      { text: "Amazon Inspector", correct: false },
      { text: "AWS X-Ray", correct: false }
  ],
  explanation: "CloudTrail: Track API calls made by users within account."
},
{
  question: "What is a customer responsibility when using AWS Lambda according to the AWS shared responsibility model?",
  answers: [
      { text: "Managing the code within the Lambda function", correct: true },
      { text: "Confirming that the hardware is working in the data center", correct: false },
      { text: "Patching the operating system", correct: false },
      { text: "Shutting down Lambda functions when they are no longer in use", correct: false }
  ],
  explanation: "According to the AWS shared responsibility model, customers are responsible for managing the code within their Lambda functions."
},
{
  question: "A company has 5 TB of data stored in Amazon S3. The company plans to occasionally run queries on the data for analysis. Which AWS service should the company use to run these queries in the MOST cost-effective manner?",
  answers: [
      { text: "Amazon Redshift", correct: false },
      { text: "Amazon Athena", correct: true },
      { text: "Amazon Kinesis", correct: false },
      { text: "Amazon RDS", correct: false }
  ],
  explanation: "Amazon Athena is a cost-effective service for running queries directly on data stored in Amazon S3."
},
{
  question: "Which AWS service can be used at no additional cost?",
  answers: [
      { text: "Amazon SageMaker", correct: false },
      { text: "AWS Config", correct: false },
      { text: "AWS Organizations", correct: true },
      { text: "Amazon CloudWatch", correct: false }
  ],
  explanation: "AWS Organizations is a service that helps consolidate multiple AWS accounts into an organization at no additional cost."
},
{
  question: "Which AWS Cloud Adoption Framework (AWS CAF) capability belongs to the people perspective?",
  answers: [
      { text: "Data architecture", correct: false },
      { text: "Event management", correct: false },
      { text: "Cloud fluency", correct: true },
      { text: "Strategic partnership", correct: false }
  ],
  explanation: "Cloud fluency is part of the people perspective in the AWS Cloud Adoption Framework."
},
{
  question: "A company wants to make an upfront commitment for continued use of its production Amazon EC2 instances in exchange for a reduced overall cost. Which pricing options meet these requirements with the LOWEST cost? (Choose two.)",
  answers: [
      { text: "Spot Instances", correct: false },
      { text: "On-Demand Instances", correct: false },
      { text: "Reserved Instances", correct: true },
      { text: "Savings Plans", correct: true }
  ],
  explanation: "Making an upfront commitment through Reserved Instances or Savings Plans provides the lowest cost for continued use of production instances."
},
{
  question: "A company wants to migrate its on-premises relational databases to the AWS Cloud. The company wants to use infrastructure as close to its current geographical location as possible. Which AWS service or resource should the company use to select its Amazon RDS deployment area?",
  answers: [
      { text: "Amazon Connect", correct: false },
      { text: "AWS Wavelength", correct: false },
      { text: "AWS Regions", correct: true },
      { text: "AWS Direct Connect", correct: false }
  ],
  explanation: "AWS Regions allow the company to select the deployment area for Amazon RDS close to its geographical location."
},
{
  question: "A company is exploring the use of the AWS Cloud and needs to create a cost estimate for a project before the infrastructure is provisioned. Which AWS service or feature can be used to estimate costs before deployment?",
  answers: [
      { text: "AWS Free Tier", correct: false },
      { text: "AWS Pricing Calculator", correct: true },
      { text: "AWS Billing and Cost Management", correct: false },
      { text: "AWS Cost and Usage Report", correct: false }
  ],
  explanation: "AWS Pricing Calculator is a web-based tool to create cost estimates for AWS services."
},
{
  question: "A company is building an application that needs to deliver images and videos globally with minimal latency. Which approach can the company use to accomplish this in a cost-effective manner?",
  answers: [
      { text: "Deliver the content through Amazon CloudFront", correct: true },
      { text: "Store the content on Amazon S3 and enable S3 cross-region replication.", correct: false },
      { text: "Implement a VPN across multiple AWS Regions", correct: false },
      { text: "Deliver the content through AWS PrivateLink.", correct: false }
  ],
  explanation: "Using Amazon CloudFront allows for global delivery of content with minimal latency."
},
{
  question: "Which option is a benefit of the economies of scale based on the advantages of cloud computing?",
  answers: [
      { text: "The ability to trade variable expense for fixed expense", correct: false },
      { text: "Increased speed and agility", correct: false },
      { text: "Lower variable costs over fixed costs", correct: true },
      { text: "Increased operational costs across data centers", correct: false }
  ],
  explanation: "Cloud computing achieves lower variable costs through economies of scale as usage from many customers is aggregated."
},
{
  question: "Which of the following is a software development framework that a company can use to define cloud resources as code and provision the resources through AWS CloudFormation?",
  answers: [
      { text: "AWS CLI", correct: false },
      { text: "AWS Developer Center", correct: false },
      { text: "AWS Cloud Development Kit (AWS CDK)", correct: true },
      { text: "AWS CodeStar", correct: false }
  ],
  explanation: "AWS Cloud Development Kit (AWS CDK) allows developers to define infrastructure as code using familiar programming languages."
},
{
  question: "A company is developing an application that uses multiple AWS services. The application needs to use temporary, limited-privilege credentials for authentication with other AWS APIs. Which AWS service or feature should the company use to meet these authentication requirements?",
  answers: [
      { text: "Amazon API Gateway", correct: false },
      { text: "IAM users", correct: false },
      { text: "AWS Security Token Service (AWS STS)", correct: true },
      { text: "IAM instance profiles", correct: false }
  ],
  explanation: "AWS Security Token Service (AWS STS) provides temporary, limited-privilege credentials for AWS API authentication."
},
{
  question: "Which AWS service is a cloud security posture management (CSPM) service that aggregates alerts from various AWS services and partner products in a standardized format?",
  answers: [
      { text: "AWS Security Hub", correct: true },
      { text: "AWS Trusted Advisor", correct: false },
      { text: "Amazon EventBridge", correct: false },
      { text: "Amazon GuardDuty", correct: false }
  ],
  explanation: "AWS Security Hub aggregates security alerts and performs automated security checks against AWS resources."
},
{
  question: "Which AWS service is always provided at no charge?",
  answers: [
      { text: "Amazon S3", correct: false },
      { text: "AWS Identity and Access Management (IAM)", correct: true },
      { text: "Elastic Load Balancers", correct: false },
      { text: "AWS WAF", correct: false }
  ],
  explanation: "AWS Identity and Access Management (IAM) is always provided at no charge."
},
{
  question: "To reduce costs, a company is planning to migrate a NoSQL database to AWS. Which AWS service is fully managed and can automatically scale throughput capacity to meet database workload demands?",
  answers: [
      { text: "Amazon Redshift", correct: false },
      { text: "Amazon Aurora", correct: false },
      { text: "Amazon DynamoDB", correct: true },
      { text: "Amazon RDS", correct: false }
  ],
  explanation: "Amazon DynamoDB is a fully managed NoSQL database service that provides seamless scalability."
},
{
  question: "A company is using Amazon DynamoDB. Which task is the company’s responsibility, according to the AWS shared responsibility model?",
  answers: [
      { text: "Patch the operating system.", correct: false },
      { text: "Provision hosts.", correct: false },
      { text: "Manage database access permissions", correct: true },
      { text: "Secure the operating system", correct: false }
  ],
  explanation: "Managing database access permissions is the customer's responsibility in the AWS shared responsibility model."
},
{
  question: "A company has a test AWS environment. A company is planning on testing an application within AWS. The application testing can be interrupted and does not need to run continuously. Which Amazon EC2 purchasing option will meet these requirements MOST cost-effectively?",
  answers: [
      { text: "On-Demand Instances", correct: false },
      { text: "Dedicated Instances", correct: false },
      { text: "Spot Instances", correct: true },
      { text: "Reserved Instances", correct: false }
  ],
  explanation: "Spot Instances are cost-effective for stateless workloads that can be interrupted."
},
{
  question: "Which AWS service gives users the ability to discover and protect sensitive data that is stored in Amazon S3 buckets?",
  answers: [
      { text: "Amazon Macie", correct: true },
      { text: "Amazon Detective", correct: false },
      { text: "Amazon GuardDuty", correct: false },
      { text: "AWS IAM Access Analyzer", correct: false }
  ],
  explanation: "Amazon Macie is a managed service that helps discover and protect sensitive data in Amazon S3."
},
{
  question: "Which of the following services can be used to block network traffic to an instance? (Choose two.)",
  answers: [
      { text: "Security groups", correct: true },
      { text: "Amazon Virtual Private Cloud (Amazon VPC) flow logs", correct: false },
      { text: "Network ACLs", correct: true },
      { text: "Amazon CloudWatch", correct: false }
  ],
  explanation: "Security groups and Network ACLs are used to control network traffic to instances."
},
{
  question: "Which AWS service can identify when an Amazon EC2 instance was terminated?",
  answers: [
      { text: "AWS Identity and Access Management (IAM)", correct: false },
      { text: "AWS CloudTrail", correct: true },
      { text: "AWS Compute Optimizer", correct: false },
      { text: "Amazon EventBridge", correct: false }
  ],
  explanation: "AWS CloudTrail records API activity in your AWS account, including the termination of EC2 instances."
},
{
  question: "Which of the following is a fully managed MySQL-compatible database?",
  answers: [
      { text: "Amazon S3", correct: false },
      { text: "Amazon DynamoDB", correct: false },
      { text: "Amazon Redshift", correct: false },
      { text: "Amazon Aurora", correct: true }
  ],
  explanation: "Amazon Aurora is a fully managed relational database engine compatible with MySQL and PostgreSQL."
},
{
  question: "Which AWS service supports a hybrid architecture that gives users the ability to extend AWS infrastructure, AWS services, APIs, and tools to data centers, colocation environments, or on-premises facilities?",
  answers: [
      { text: "AWS Snowmobile", correct: false },
      { text: "AWS Local Zones", correct: false },
      { text: "AWS Outposts", correct: true },
      { text: "AWS Fargate", correct: false }
  ],
  explanation: "AWS Outposts enables you to run AWS infrastructure and services on premises while seamlessly connecting to the AWS cloud."
},
{
  question: "Which AWS service can run a managed PostgreSQL database that provides online transaction processing (OLTP)?",
  answers: [
      { text: "Amazon DynamoDB", correct: false },
      { text: "Amazon Athena", correct: false },
      { text: "Amazon RDS", correct: true },
      { text: "Amazon EMR", correct: false }
  ],
  explanation: "Amazon RDS supports various database engines, including PostgreSQL, and offers a managed database service suitable for OLTP workloads."
},
{
  question: "A company wants to provide managed Windows virtual desktops and applications to its remote employees over secure network connections. Which AWS services can the company use to meet these requirements? (Choose two.)",
  answers: [
      { text: "Amazon Connect", correct: false },
      { text: "Amazon AppStream 2.0", correct: true },
      { text: "Amazon WorkSpaces", correct: true },
      { text: "AWS Site-to-Site VPN", correct: false }
  ],
  explanation: "Amazon WorkSpaces satisfies the virtual desktops requirement, while Amazon AppStream 2.0 provides virtual applications."
},
{
  question: "A company wants to monitor for misconfigured security groups that are allowing unrestricted access to specific ports. Which AWS service will meet this requirement?",
  answers: [
      { text: "AWS Trusted Advisor", correct: true },
      { text: "Amazon CloudWatch", correct: false },
      { text: "Amazon GuardDuty", correct: false },
      { text: "AWS Health Dashboard", correct: false }
  ],
  explanation: "AWS Trusted Advisor helps monitor for security group configurations that allow unrestricted access."
},
{
  question: "Which AWS service is a key-value database that provides sub-millisecond latency on a large scale?",
  answers: [
      { text: "Amazon DynamoDB", correct: true },
      { text: "Amazon Aurora", correct: false },
      { text: "Amazon DocumentDB", correct: false },
      { text: "Amazon Neptune", correct: false }
  ],
  explanation: "Amazon DynamoDB is a fully managed NoSQL database with high performance and low latency."
},
{
  question: "A company is deploying a machine learning (ML) research project that will require a lot of compute power over several months. The ML processing jobs do not need to run at specific times. Which Amazon EC2 instance purchasing option will meet these requirements at the lowest cost?",
  answers: [
      { text: "On-Demand Instances", correct: true },
      { text: "Spot Instances", correct: false },
      { text: "Reserved Instances", correct: false },
      { text: "Dedicated Instances", correct: false }
  ],
  explanation: "On-Demand Instances allow for flexibility without upfront costs and are suitable for workloads that do not run continuously."
},
{
  question: "Which AWS services or features provide disaster recovery solutions for Amazon EC2 instances? (Choose two.)",
  answers: [
      { text: "EC2 Reserved Instances", correct: false },
      { text: "EC2 Amazon Machine Images (AMIs)", correct: true },
      { text: "Amazon Elastic Block Store (Amazon EBS) snapshots", correct: true },
      { text: "AWS Shield", correct: false }
  ],
  explanation: "Amazon Machine Images (AMIs) allow you to capture configurations for recovery, while EBS snapshots provide backup and recovery for volumes."
},
{
  question: "Which AWS service provides command line access to AWS tools and resources directly from a web browser?",
  answers: [
      { text: "AWS CloudHSM", correct: false },
      { text: "AWS CloudShell", correct: true },
      { text: "Amazon WorkSpaces", correct: false },
      { text: "AWS Cloud Map", correct: false }
  ],
  explanation: "AWS CloudShell provides a browser-based shell to access and manage AWS resources using the CLI."
},
{
  question: "A network engineer needs to build a hybrid cloud architecture connecting on-premises networks to the AWS Cloud using AWS Direct Connect. The company has a few VPCs in a single AWS Region and expects to increase the number of VPCs to hundreds over time. Which AWS service or feature should the engineer use to simplify and scale this connectivity as the VPCs increase in number?",
  answers: [
      { text: "VPC endpoints", correct: false },
      { text: "AWS Transit Gateway", correct: true },
      { text: "Amazon Route 53", correct: false },
      { text: "AWS Secrets Manager", correct: false }
  ],
  explanation: "AWS Transit Gateway allows for connecting multiple VPCs and on-premises networks through a single gateway."
},
{
  question: "A company wants to assess its operational readiness. It also wants to identify and mitigate any operational risks ahead of a new product launch. Which AWS Support plan offers guidance and support for this kind of event at no additional charge?",
  answers: [
      { text: "AWS Business Support", correct: false },
      { text: "AWS Basic Support", correct: false },
      { text: "AWS Developer Support", correct: false },
      { text: "AWS Enterprise Support", correct: true }
  ],
  explanation: "AWS Enterprise Support provides premium guidance and support for operational readiness and risk mitigation."
},
{
  question: "A company wants to establish a schedule for rotating database user credentials. Which AWS service will support this requirement with the LEAST amount of operational overhead?",
  answers: [
      { text: "AWS Systems Manager", correct: false },
      { text: "AWS Secrets Manager", correct: true },
      { text: "AWS License Manager", correct: false },
      { text: "AWS Managed Services", correct: false }
  ],
  explanation: "AWS Secrets Manager is designed specifically for managing and rotating sensitive information, including database credentials."
},
{
  question: "Which AWS service or feature can be used to create a private connection between an on-premises workload and an AWS Cloud workload?",
  answers: [
      { text: "Amazon Route 53", correct: false },
      { text: "Amazon Macie", correct: false },
      { text: "AWS Direct Connect", correct: false },
      { text: "AWS PrivateLink", correct: true }
  ],
  explanation: "AWS PrivateLink provides private connectivity to AWS services from on-premises environments."
},
{
  question: "Which AWS service is used to provide encryption for Amazon EBS?",
  answers: [
      { text: "AWS Certificate Manager", correct: false },
      { text: "AWS Systems Manager", correct: false },
      { text: "AWS KMS", correct: true },
      { text: "AWS Config", correct: false }
  ],
  explanation: "AWS Key Management Service (AWS KMS) manages encryption keys used to encrypt data, including that stored in EBS."
},
{
  question: "A company wants to manage its AWS Cloud resources through a web interface. Which AWS service will meet this requirement?",
  answers: [
      { text: "AWS Management Console", correct: true },
      { text: "AWS CLI", correct: false },
      { text: "AWS SDK", correct: false },
      { text: "AWS Cloud9", correct: false }
  ],
  explanation: "AWS Management Console is a web-based interface for managing AWS resources."
},
{
  question: "Which of the following are advantages of the AWS Cloud? (Choose two.)",
  answers: [
      { text: "Trade variable expenses for capital expenses", correct: false },
      { text: "High economies of scale", correct: true },
      { text: "Launch globally in minutes", correct: false },
      { text: "Focus on managing hardware infrastructure", correct: false }
  ],
  explanation: "AWS provides massive economies of scale and allows businesses to launch services globally in minutes."
},
{
  question: "Which AWS Cloud benefit is shown by an architecture’s ability to withstand failures with minimal downtime?",
  answers: [
      { text: "Agility", correct: false },
      { text: "Elasticity", correct: false },
      { text: "Scalability", correct: false },
      { text: "High availability", correct: true }
  ],
  explanation: "High availability indicates an architecture's resilience to failures."
},
{
  question: "A developer needs to maintain a development environment infrastructure and a production environment infrastructure in a repeatable fashion. Which AWS service should the developer use to meet these requirements?",
  answers: [
      { text: "AWS Ground Station", correct: false },
      { text: "AWS Shield", correct: false },
      { text: "AWS IoT Device Defender", correct: false },
      { text: "AWS CloudFormation", correct: true }
  ],
  explanation: "AWS CloudFormation allows infrastructure to be treated as code for repeatable deployment."
},
{
  question: "Which task is the customer’s responsibility, according to the AWS shared responsibility model?",
  answers: [
      { text: "Maintain the security of the AWS Cloud.", correct: false },
      { text: "Configure firewalls and networks", correct: true },
      { text: "Patch the operating system of Amazon RDS instances.", correct: false },
      { text: "Implement physical and environmental controls", correct: false }
  ],
  explanation: "Configuring firewalls and network settings is a customer responsibility."
},
{
  question: "Which AWS service helps deliver highly available applications with fast failover for multi-Region and Multi-AZ architectures?",
  answers: [
      { text: "AWS WAF", correct: false },
      { text: "AWS Global Accelerator", correct: true },
      { text: "AWS Shield", correct: false },
      { text: "AWS Direct Connect", correct: false }
  ],
  explanation: "AWS Global Accelerator optimizes routing for applications across multiple regions and availability zones."
},
{
  question: "A company has a set of ecommerce applications. The applications need to be able to send messages to each other. Which AWS service meets this requirement?",
  answers: [
      { text: "AWS Auto Scaling", correct: false },
      { text: "Elastic Load Balancing", correct: false },
      { text: "Amazon Simple Queue Service (Amazon SQS)", correct: true },
      { text: "Amazon Kinesis Data Streams", correct: false }
  ],
  explanation: "Amazon SQS enables decoupling of applications by providing a message queuing service."
},
{
  question: "What are the benefits of consolidated billing for AWS Cloud services? (Choose two.)",
  answers: [
      { text: "Volume discounts", correct: true },
      { text: "A minimal additional fee for use", correct: false },
      { text: "One bill for multiple accounts", correct: true },
      { text: "Installment payment options", correct: false }
  ],
  explanation: "Consolidated billing allows for volume discounts and one unified bill across accounts."
},
{
  question: "A user wants to review all Amazon S3 buckets with ACLs and S3 bucket policies in the S3 console. Which AWS service or resource will meet this requirement?",
  answers: [
      { text: "S3 Multi-Region Access Points", correct: false },
      { text: "S3 Storage Lens", correct: false },
      { text: "AWS IAM Identity Center (AWS Single Sign-On)", correct: false },
      { text: "Access Analyzer for S3", correct: true }
  ],
  explanation: "Access Analyzer for S3 allows for reviewing access policies and ACLs for S3 buckets."
},
{
  question: "What is the best resource for a user to find compliance-related information and reports about AWS?",
  answers: [
      { text: "AWS Artifact", correct: true },
      { text: "AWS Marketplace", correct: false },
      { text: "Amazon Inspector", correct: false },
      { text: "AWS Support", correct: false }
  ],
  explanation: "AWS Artifact provides on-demand access to compliance reports and certifications."
},
{
  question: "Which AWS service enables companies to deploy an application close to end users?",
  answers: [
      { text: "Amazon CloudFront", correct: true },
      { text: "AWS Auto Scaling", correct: false },
      { text: "AWS AppSync", correct: false },
      { text: "Amazon Route 53", correct: false }
  ],
  explanation: "Amazon CloudFront is a CDN that ensures low latency and high transfer speeds for applications."
},
{
  question: "Which AWS service or feature improves network performance by sending traffic through the AWS worldwide network infrastructure?",
  answers: [
      { text: "Route table", correct: false },
      { text: "AWS Transit Gateway", correct: false },
      { text: "AWS Global Accelerator", correct: true },
      { text: "Amazon VPC", correct: false }
  ],
  explanation: "AWS Global Accelerator uses the AWS global network to optimize traffic routing."
},
{
  question: "Which AWS service provides highly durable object storage?",
  answers: [
      { text: "Amazon S3", correct: true },
      { text: "Amazon Elastic File System", correct: false },
      { text: "Amazon Elastic Block Store", correct: false },
      { text: "Amazon FSx", correct: false }
  ],
  explanation: "Amazon S3 is designed for durability and allows storage and retrieval of any amount of data."
},
{
  question: "Which responsibility belongs to AWS when a company hosts its databases on Amazon EC2 instances?",
  answers: [
      { text: "Database backups", correct: false },
      { text: "Database software patches", correct: false },
      { text: "Operating system patches", correct: false },
      { text: "Operating system installations", correct: true }
  ],
  explanation: "AWS is responsible for providing and maintaining the infrastructure, including the operating system images."
},
{
  question: "Which of the following are advantages of moving to the AWS Cloud? (Choose two.)",
  answers: [
      { text: "The ability to turn over the responsibility for all security to AWS.", correct: false },
      { text: "The ability to use the pay-as-you-go model", correct: true },
      { text: "The ability to have full control over the physical infrastructure", correct: false },
      { text: "No longer having to guess what capacity will be required", correct: true }
  ],
  explanation: "The pay-as-you-go model and dynamic scalability are key advantages of using AWS."
},
{
  question: "Which AWS service is a hybrid cloud storage service that provides on-premises users access to virtually unlimited cloud storage?",
  answers: [
      { text: "AWS DataSync", correct: false },
      { text: "Amazon S3 Glacier", correct: false },
      { text: "AWS Storage Gateway", correct: true },
      { text: "Amazon Elastic Block Store", correct: false }
  ],
  explanation: "AWS Storage Gateway enables on-premises applications to access cloud-based storage seamlessly."
},
{
  question: "A company plans to migrate to AWS and wants to create cost estimates for its AWS use cases. Which AWS service or tool can the company use to meet these requirements?",
  answers: [
      { text: "AWS Pricing Calculator", correct: true },
      { text: "Amazon CloudWatch", correct: false },
      { text: "AWS Cost Explorer", correct: false },
      { text: "AWS Budgets", correct: false }
  ],
  explanation: "AWS Pricing Calculator is a web-based tool that allows users to estimate the cost of using AWS services based on usage patterns."
},
{
  question: "Which tool should a developer use to integrate AWS service features directly into an application?",
  answers: [
      { text: "AWS Software Development Kit", correct: true },
      { text: "AWS CodeDeploy", correct: false },
      { text: "AWS Lambda", correct: false },
      { text: "AWS Batch", correct: false }
  ],
  explanation: "AWS SDK provides libraries and tools that allow developers to interact with AWS services directly from their applications."
},
{
  question: "Which of the following is a recommended design principle of the AWS Well-Architected Framework?",
  answers: [
      { text: "Reduce downtime by making infrastructure changes infrequently and in large increments", correct: false },
      { text: "Invest the time to configure infrastructure manually", correct: false },
      { text: "Learn to improve from operational failures", correct: true },
      { text: "Use monolithic application design for centralization", correct: false }
  ],
  explanation: "Learning from operational failures is key to improving system resilience in the AWS Well-Architected Framework."
},
{
  question: "Using AWS Identity and Access Management (IAM) to grant access only to the resources needed to perform a task is a concept known as:",
  answers: [
      { text: "Restricted access", correct: false },
      { text: "As-needed access", correct: false },
      { text: "Least privilege access", correct: true },
      { text: "Token access", correct: false }
  ],
  explanation: "Least privilege access involves granting the minimum level of permissions required to perform tasks."
},
{
  question: "Which AWS service or tool can be used to set up a firewall to control traffic going into and coming out of an Amazon VPC subnet?",
  answers: [
      { text: "Security group", correct: false },
      { text: "AWS WAF", correct: false },
      { text: "AWS Firewall Manager", correct: true },
      { text: "Network ACL", correct: false }
  ],
  explanation: "AWS Firewall Manager helps manage firewall settings across AWS accounts and applications."
},
{
  question: "A company wants to operate a data warehouse to analyze data without managing the data warehouse infrastructure. Which AWS service will meet this requirement?",
  answers: [
      { text: "Amazon Aurora", correct: false },
      { text: "Amazon Redshift Serverless", correct: true },
      { text: "AWS Lambda", correct: false },
      { text: "Amazon RDS", correct: false }
  ],
  explanation: "Amazon Redshift Serverless allows running analytics workloads without managing data warehouse infrastructure."
},
{
  question: "How does AWS Cloud computing help businesses reduce costs? (Choose two.)",
  answers: [
      { text: "AWS charges the same prices for services in every AWS Region.", correct: false },
      { text: "AWS enables capacity to be adjusted on demand.", correct: true },
      { text: "AWS offers discounts for Amazon EC2 instances that remain idle for more than 1 week.", correct: false },
      { text: "AWS eliminates many of the costs of building and maintaining on-premises data centers", correct: true }
  ],
  explanation: "AWS enables on-demand capacity adjustment and reduces the costs of maintaining on-premises data centers."
},
{
  question: "A company wants to grant users in one AWS account access to resources in another AWS account. The users do not currently have permission to access the resources. Which AWS service will meet this requirement?",
  answers: [
      { text: "IAM group", correct: false },
      { text: "IAM role", correct: true },
      { text: "IAM tag", correct: false },
      { text: "IAM Access Analyzer", correct: false }
  ],
  explanation: "IAM roles allow delegation of access to users and applications across AWS accounts."
},
{
  question: "Which task is the responsibility of AWS when using AWS services?",
  answers: [
      { text: "Management of IAM user permissions", correct: false },
      { text: "Creation of security group rules for outbound access", correct: false },
      { text: "Maintenance of physical and environmental controls", correct: true },
      { text: "Application of Amazon EC2 operating system patches", correct: false }
  ],
  explanation: "AWS is responsible for maintaining physical and environmental controls in its data centers."
},
{
  question: "A company wants to automate infrastructure deployment by using infrastructure as code (IaC). The company wants to scale production stacks so the stacks can be deployed in multiple AWS Regions. Which AWS service will meet these requirements?",
  answers: [
      { text: "Amazon CloudWatch", correct: false },
      { text: "AWS Config", correct: false },
      { text: "AWS Trusted Advisor", correct: false },
      { text: "AWS CloudFormation", correct: true }
  ],
  explanation: "AWS CloudFormation allows you to model, provision, and manage AWS resources using code."
},
{
  question: "Which option is an AWS Cloud Adoption Framework (AWS CAF) platform perspective capability?",
  answers: [
      { text: "Data architecture", correct: true },
      { text: "Data protection", correct: false },
      { text: "Data governance", correct: false },
      { text: "Data science", correct: false }
  ],
  explanation: "Data architecture is a key capability in the AWS Cloud Adoption Framework platform perspective."
},
{
  question: "A company is running a workload in the AWS Cloud. Which AWS best practice ensures the MOST cost-effective architecture for the workload?",
  answers: [
      { text: "Loose coupling", correct: false },
      { text: "Rightsizing", correct: true },
      { text: "Caching", correct: false },
      { text: "Redundancy", correct: false }
  ],
  explanation: "Rightsizing involves selecting the appropriate size and type of resources to optimize costs."
},
{
  question: "A company is using a third-party service to back up 10 TB of data to a tape library. The on-premises backup server is running out of space. The company wants to use AWS services for the backups without changing its existing backup workflows. Which AWS service should the company use to meet these requirements?",
  answers: [
      { text: "Amazon Elastic Block Store", correct: false },
      { text: "AWS Storage Gateway", correct: true },
      { text: "Amazon Elastic Container Service", correct: false },
      { text: "AWS Lambda", correct: false }
  ],
  explanation: "AWS Storage Gateway integrates on-premises applications with cloud storage, allowing seamless backups to AWS."
},
{
  question: "Which AWS tool gives users the ability to plan their service usage, service costs, and instance reservations, and also allows them to set custom alerts when their costs or usage exceed established thresholds?",
  answers: [
      { text: "Cost Explorer", correct: false },
      { text: "AWS Budgets", correct: true },
      { text: "AWS Cost and Usage Report", correct: false },
      { text: "Reserved Instance reporting", correct: false }
  ],
  explanation: "AWS Budgets allows users to set custom budgets and receive alerts when their costs exceed established thresholds."
},
{
  question: "Which tasks are the customer’s responsibility, according to the AWS shared responsibility model? (Choose two.)",
  answers: [
      { text: "Establish the global infrastructure", correct: false },
      { text: "Perform client-side data encryption", correct: true },
      { text: "Configure IAM credentials", correct: true },
      { text: "Secure edge locations", correct: false }
  ],
  explanation: "Customers are responsible for client-side data encryption and managing IAM credentials."
},
{
  question: "A developer has been hired by a large company and needs AWS credentials. Which are security best practices that should be followed? (Choose two.)",
  answers: [
      { text: "Grant the developer access to only the AWS resources needed to perform the job", correct: true },
      { text: "Share the AWS account root user credentials with the developer", correct: false },
      { text: "Add the developer to the administrator’s group in AWS IAM.", correct: false },
      { text: "Ensure the account password policy requires a minimum length.", correct: true }
  ],
  explanation: "Best practices include limiting access to necessary resources and enforcing strong password policies."
},
{
  question: "A company has multiple AWS accounts that include compute workloads that cannot be interrupted. The company wants to obtain billing discounts that are based on the company’s use of AWS services. Which AWS feature or purchasing option will meet these requirements?",
  answers: [
      { text: "Resource tagging", correct: false },
      { text: "Consolidated billing", correct: true },
      { text: "Pay-as-you-go pricing", correct: false },
      { text: "Spot Instances", correct: false }
  ],
  explanation: "Consolidated billing combines multiple accounts for volume discounts and simplifies billing."
},
{
  question: "A user wants to allow applications running on an Amazon EC2 instance to make calls to other AWS services. The access granted must be secure. Which AWS service or feature should be used?",
  answers: [
      { text: "Security groups", correct: false },
      { text: "AWS Firewall Manager", correct: false },
      { text: "IAM roles", correct: true },
      { text: "IAM user SSH keys", correct: false }
  ],
  explanation: "IAM roles allow applications on an EC2 instance to securely access AWS services."
},
{
  question: "A company wants a fully managed Windows file server for its Windows-based applications. Which AWS service will meet this requirement?",
  answers: [
      { text: "Amazon FSx", correct: true },
      { text: "Amazon Elastic Kubernetes Service", correct: false },
      { text: "Amazon Elastic Container Service", correct: false },
      { text: "Amazon EMR", correct: false }
  ],
  explanation: "Amazon FSx is a fully managed file storage service compatible with Windows file servers."
},
{
  question: "A company wants to migrate its NFS on-premises workload to AWS. Which AWS Storage Gateway type should the company use to meet this requirement?",
  answers: [
      { text: "Tape Gateway", correct: false },
      { text: "Volume Gateway", correct: false },
      { text: "Amazon FSx File Gateway", correct: false },
      { text: "Amazon S3 File Gateway", correct: true }
  ],
  explanation: "Amazon S3 File Gateway allows integration of on-premises applications with Amazon S3 using NFS."
},
{
  question: "A company needs to track the activity in its AWS accounts, and needs to know when an API call is made against its AWS resources. Which AWS tool or service can be used to meet these requirements?",
  answers: [
      { text: "Amazon CloudWatch", correct: false },
      { text: "Amazon Inspector", correct: false },
      { text: "AWS CloudTrail", correct: true },
      { text: "AWS IAM", correct: false }
  ],
  explanation: "AWS CloudTrail logs user activity and API usage, enabling auditing and security monitoring."
},
{
  question: "A company has an uninterruptible application that runs on Amazon EC2 instances. The application constantly processes a backlog of files in an Amazon Simple Queue Service (Amazon SQS) queue. This usage is expected to continue to grow for years. What is the MOST cost-effective EC2 instance purchasing model to meet these requirements?",
  answers: [
      { text: "Spot Instances", correct: true },
      { text: "On-Demand Instances", correct: false },
      { text: "Savings Plans", correct: false },
      { text: "Dedicated Hosts", correct: false }
  ],
  explanation: "Spot Instances can provide significant savings for applications that are fault-tolerant."
},
{
  question: "A company wants an AWS service to provide product recommendations based on its customer data. Which AWS service will meet this requirement?",
  answers: [
      { text: "Amazon Polly", correct: false },
      { text: "Amazon Personalize", correct: true },
      { text: "Amazon Comprehend", correct: false },
      { text: "Amazon Rekognition", correct: false }
  ],
  explanation: "Amazon Personalize provides machine learning-based recommendations for applications."
},
{
  question: "A company is planning its migration to the AWS Cloud. The company is identifying its capability gaps by using the AWS Cloud Adoption Framework (AWS CAF) perspectives. Which phase of the cloud transformation journey includes these identification activities?",
  answers: [
      { text: "Envision", correct: false },
      { text: "Align", correct: true },
      { text: "Scale", correct: false },
      { text: "Launch", correct: false }
  ],
  explanation: "The Align phase focuses on identifying capability gaps across AWS CAF perspectives."
},
{
  question: "A social media company wants to protect its web application from common web exploits such as SQL injections and cross-site scripting. Which AWS service will meet these requirements?",
  answers: [
      { text: "Amazon Inspector", correct: false },
      { text: "AWS WAF", correct: true },
      { text: "Amazon GuardDuty", correct: false },
      { text: "Amazon CloudWatch", correct: false }
  ],
  explanation: "AWS WAF protects web applications by allowing configuration of rules to block common web exploits."
},
{
  question: "Which fully managed AWS service assists with the creation, testing, and management of custom Amazon EC2 images?",
  answers: [
      { text: "EC2 Image Builder", correct: true },
      { text: "Amazon Machine Image", correct: false },
      { text: "AWS Launch Wizard", correct: false },
      { text: "AWS Elastic Beanstalk", correct: false }
  ],
  explanation: "EC2 Image Builder automates the creation and management of customized server images."
},
{
  question: "A company wants an automated process to continuously scan its Amazon EC2 instances for software vulnerabilities. Which AWS service will meet these requirements?",
  answers: [
      { text: "Amazon GuardDuty", correct: false },
      { text: "Amazon Inspector", correct: true },
      { text: "Amazon Detective", correct: false },
      { text: "Amazon Cognito", correct: false }
  ],
  explanation: "Amazon Inspector continually scans for software vulnerabilities and network exposure."
},
{
  question: "A company needs to perform data processing once a week that typically takes about 5 hours to complete. Which AWS service should the company use for this workload?",
  answers: [
      { text: "AWS Lambda", correct: false },
      { text: "Amazon EC2", correct: true },
      { text: "AWS CodeDeploy", correct: false },
      { text: "AWS Wavelength", correct: false }
  ],
  explanation: "Amazon EC2 is suitable for workloads that require longer processing times and can be terminated afterward."
},
{
  question: "Which AWS service or feature provides log information of the inbound and outbound traffic on network interfaces in a VPC?",
  answers: [
      { text: "Amazon CloudWatch Logs", correct: false },
      { text: "AWS CloudTrail", correct: false },
      { text: "VPC Flow Logs", correct: true },
      { text: "AWS Identity and Access Management (IAM)", correct: false }
  ],
  explanation: "VPC Flow Logs capture IP traffic information to and from network interfaces in a VPC."
},
{
  question: "A company wants to design a centralized storage system to manage the configuration data and passwords for its critical business applications. Which AWS service or capability will meet these requirements MOST cost-effectively?",
  answers: [
      { text: "AWS Systems Manager Parameter Store", correct: true },
      { text: "AWS Secrets Manager", correct: false },
      { text: "AWS Config", correct: false },
      { text: "Amazon S3", correct: false }
  ],
  explanation: "AWS Systems Manager Parameter Store is cost-effective for managing configuration data and passwords."
},
{
  question: "A company plans to deploy containers on AWS. The company wants full control of the compute resources that host the containers. Which AWS service will meet these requirements?",
  answers: [
      { text: "Amazon Elastic Kubernetes Service", correct: false },
      { text: "AWS Fargate", correct: false },
      { text: "Amazon EC2", correct: true },
      { text: "Amazon Elastic Container Service (Amazon ECS)", correct: false }
  ],
  explanation: "Full control is the key word. ECS is a managed container service, which means the customer does not have control over the underlying compute resources."
},
{
  question: "Which AWS service or feature allows users to create new AWS accounts, group multiple accounts to organize workflows, and apply policies to groups of accounts?",
  answers: [
      { text: "AWS Identity and Access Management (IAM)", correct: false },
      { text: "AWS Trusted Advisor", correct: false },
      { text: "AWS CloudFormation", correct: false },
      { text: "AWS Organizations", correct: true }
  ],
  explanation: "AWS Organizations enables users to create and manage multiple AWS accounts, applying policies and organizing workflows across them."
},
{
  question: "A company wants to store and retrieve files in Amazon S3 for its existing on-premises applications by using industry-standard file system protocols. Which AWS service will meet these requirements?",
  answers: [
      { text: "AWS DataSync", correct: false },
      { text: "AWS Snowball Edge", correct: false },
      { text: "Amazon S3 File Gateway", correct: true },
      { text: "AWS Transfer Family", correct: false }
  ],
  explanation: "Amazon S3 File Gateway provides a file interface to store files as objects in S3 using standard file protocols."
},
{
  question: "A company wants to block SQL injection attacks. Which AWS service or feature should the company use to meet this requirement?",
  answers: [
      { text: "AWS WAF", correct: true },
      { text: "Network ACLs", correct: false },
      { text: "Security groups", correct: false },
      { text: "AWS Certificate Manager (ACM)", correct: false }
  ],
  explanation: "AWS WAF protects web applications from common exploits, including SQL injection and cross-site scripting."
},
{
  question: "A company wants a unified tool to provide a consistent method to interact with AWS services. Which AWS service or tool will meet this requirement?",
  answers: [
      { text: "AWS CLI", correct: true },
      { text: "Amazon Elastic Container Service (Amazon ECS)", correct: false },
      { text: "AWS Cloud9", correct: false },
      { text: "AWS Virtual Private Network (AWS VPN)", correct: false }
  ],
  explanation: "The AWS Command Line Interface (AWS CLI) is a unified tool to manage your AWS services through the command line."
},
{
  question: "A company needs to evaluate its AWS environment and provide best practice recommendations in five categories: cost, performance, service limits, fault tolerance and security. Which AWS service can the company use to meet these requirements?",
  answers: [
      { text: "AWS Shield", correct: false },
      { text: "AWS WAF", correct: false },
      { text: "AWS Trusted Advisor", correct: true },
      { text: "AWS Service Catalog", correct: false }
  ],
  explanation: "AWS Trusted Advisor provides recommendations across cost, performance, security, fault tolerance, and service limits."
},
{
  question: "Which perspective in the AWS Cloud Adoption Framework (AWS CAF) includes capabilities for configuration management and patch management?",
  answers: [
      { text: "Platform", correct: false },
      { text: "Operations", correct: true },
      { text: "Security", correct: false },
      { text: "Governance", correct: false }
  ],
  explanation: "The Operations perspective of AWS CAF includes capabilities such as configuration and patch management."
},
{
  question: "A company has a compute workload that is steady, predictable, and uninterruptible. Which Amazon EC2 instance purchasing options meet these requirements MOST cost-effectively? (Choose two.)",
  answers: [
      { text: "On-Demand Instances", correct: true },
      { text: "Reserved Instances", correct: true },
      { text: "Spot Instances", correct: false },
      { text: "Savings Plans", correct: false }
  ],
  explanation: "Reserved Instances provide cost savings for predictable workloads, while On-Demand Instances offer flexibility."
},
{
  question: "Which Amazon EC2 pricing model is the MOST cost efficient for an uninterruptible workload that runs once a year for 24 hours?",
  answers: [
      { text: "On-Demand Instances", correct: true },
      { text: "Reserved Instances", correct: false },
      { text: "Spot Instances", correct: false },
      { text: "Dedicated Instances", correct: false }
  ],
  explanation: "On-Demand Instances allow for pay-per-use without long-term commitments, suitable for a single yearly run."
},
{
  question: "Which option is a shared responsibility between AWS and its customers under the AWS shared responsibility model?",
  answers: [
      { text: "Configuration of Amazon EC2 instance operating systems", correct: true },
      { text: "Application file system server-side encryption", correct: false },
      { text: "Patch management", correct: false },
      { text: "Security of the physical infrastructure", correct: false }
  ],
  explanation: "Customers are responsible for configuring their operating systems, while AWS manages the physical infrastructure."
},
{
  question: "A company wants to migrate its on-premises workloads to the AWS Cloud. The company wants to separate workloads for chargeback to different departments. Which AWS services or features will meet these requirements? (Choose two.)",
  answers: [
      { text: "Placement groups", correct: false },
      { text: "Consolidated billing", correct: true },
      { text: "Edge locations", correct: false },
      { text: "Multiple AWS accounts", correct: true }
  ],
  explanation: "Consolidated billing and multiple AWS accounts help in separating workloads for financial tracking."
},
{
  question: "Which task is a responsibility of AWS, according to the AWS shared responsibility model?",
  answers: [
      { text: "Enable client-side encryption for objects that are stored in Amazon S3.", correct: false },
      { text: "Configure IAM security policies to comply with the principle of least privilege.", correct: false },
      { text: "Patch the guest operating system on an Amazon EC2 instance.", correct: false },
      { text: "Apply updates to the Nitro Hypervisor.", correct: true }
  ],
  explanation: "AWS is responsible for maintaining and updating the underlying infrastructure, including the Nitro Hypervisor."
},
{
  question: "Which option is a benefit of using AWS for cloud computing?",
  answers: [
      { text: "Trade variable expense for fixed expense", correct: false },
      { text: "Pay-as-you-go pricing", correct: true },
      { text: "Decreased speed and agility", correct: false },
      { text: "Spending money running and maintaining data centers", correct: false }
  ],
  explanation: "AWS enables customers to trade fixed costs for variable expenses with pay-as-you-go pricing."
},
{
  question: "Which option is an AWS Cloud Adoption Framework (AWS CAF) business perspective capability?",
  answers: [
      { text: "Culture evolution", correct: false },
      { text: "Event management", correct: false },
      { text: "Data monetization", correct: true },
      { text: "Platform architecture", correct: false }
  ],
  explanation: "Data monetization is a capability within the business perspective of AWS CAF."
},
{
  question: "A company is assessing its AWS Business Support plan to determine if the plan still meets the company’s needs. The company is considering switching to AWS Enterprise Support. Which additional benefit will the company receive with AWS Enterprise Support?",
  answers: [
      { text: "A full set of AWS Trusted Advisor checks", correct: false },
      { text: "Phone, email, and chat access to cloud support engineers 24 hours a day, 7 days a week", correct: false },
      { text: "A designated technical account manager (TAM) to assist in monitoring and optimization", correct: true },
      { text: "A consultative review and architecture guidance for the company’s applications", correct: false }
  ],
  explanation: "Enterprise Support provides a designated Technical Account Manager (TAM) for tailored guidance."
},
{
  question: "Which pricing model will interrupt a running Amazon EC2 instance if capacity becomes temporarily unavailable?",
  answers: [
      { text: "On-Demand Instances", correct: false },
      { text: "Standard Reserved Instances", correct: false },
      { text: "Spot Instances", correct: true },
      { text: "Convertible Reserved Instances", correct: false }
  ],
  explanation: "Spot Instances can be interrupted by AWS when the capacity is needed for other purposes."
},
{
  question: "Which options are AWS Cloud Adoption Framework (AWS CAF) security perspective capabilities? (Choose two.)",
  answers: [
      { text: "Observability", correct: false },
      { text: "Incident and problem management", correct: true },
      { text: "Incident response", correct: true },
      { text: "Infrastructure protection", correct: false }
  ],
  explanation: "Incident and problem management, along with incident response, are part of the security perspective."
},
{
  question: "A company wants to run its workload on Amazon EC2 instances for more than 1 year. This workload will run continuously. Which option offers a discounted hourly rate compared to the hourly rate of On-Demand Instances?",
  answers: [
      { text: "AWS Graviton processor", correct: false },
      { text: "Dedicated Hosts", correct: false },
      { text: "EC2 Instance Savings Plans", correct: true },
      { text: "Amazon EC2 Auto Scaling instances", correct: false }
  ],
  explanation: "EC2 Instance Savings Plans provide a cost-effective option for continuous workloads."
},
{
  question: "Which characteristic of the AWS Cloud helps users eliminate underutilized CPU capacity?",
  answers: [
      { text: "Agility", correct: false },
      { text: "Elasticity", correct: true },
      { text: "Reliability", correct: false },
      { text: "Durability", correct: false }
  ],
  explanation: "Elasticity allows users to scale computing resources up or down according to demand, minimizing waste."
},
{
  question: "Which AWS services can a company use to achieve a loosely coupled architecture? (Choose two.)",
  answers: [
      { text: "Amazon WorkSpaces", correct: false },
      { text: "Amazon Simple Queue Service (Amazon SQS)", correct: true },
      { text: "Amazon Connect", correct: false },
      { text: "AWS Step Functions", correct: true }
  ],
  explanation: "SQS and AWS Step Functions facilitate loosely coupled architecture by allowing decoupled communication and orchestration."
},
{
  question: "Which AWS Cloud service can send alerts to customers if custom spending thresholds are exceeded?",
  answers: [
      { text: "AWS Budgets", correct: true },
      { text: "AWS Cost Explorer", correct: false },
      { text: "AWS Cost Allocation Tags", correct: false },
      { text: "AWS Organizations", correct: false }
  ],
  explanation: "AWS Budgets allows users to set custom spending limits and receive alerts when those limits are reached."
},
{
  question: "A company plans to migrate to the AWS Cloud. The company wants to use the AWS Cloud Adoption Framework (AWS CAF) to define and track business outcomes as part of its cloud transformation journey. Which AWS CAF governance perspective capability will meet these requirements?",
  answers: [
      { text: "Benefits management", correct: true },
      { text: "Risk management", correct: false },
      { text: "Application portfolio management", correct: false },
      { text: "Cloud financial management", correct: false }
  ],
  explanation: "Benefits management is key for defining and tracking business outcomes during cloud transformation."
},
{
  question: "A company needs to quickly and securely move files over long distances between its client and an Amazon S3 bucket. Which S3 feature will meet this requirement?",
  answers: [
      { text: "S3 Versioning", correct: false },
      { text: "S3 Transfer Acceleration", correct: true },
      { text: "S3 ACLs", correct: false },
      { text: "S3 Intelligent-Tiering", correct: false }
  ],
  explanation: "S3 Transfer Acceleration speeds up file uploads by routing through AWS edge locations."
},
{
  question: "A company needs to continuously run an experimental workload on an Amazon EC2 instance and stop the instance after 12 hours. Which instance purchasing option will meet this requirement MOST cost-effectively?",
  answers: [
      { text: "On-Demand Instances", correct: true },
      { text: "Reserved Instances", correct: false },
      { text: "Spot Instances", correct: false },
      { text: "Dedicated Instances", correct: false }
  ],
  explanation: "On-Demand Instances allow for flexible pricing and are ideal for short-term workloads."
},
{
  question: "Which cloud transformation journey phase of the AWS Cloud Adoption Framework (AWS CAF) focuses on demonstrating how the cloud helps accelerate business outcomes?",
  answers: [
      { text: "Scale", correct: false },
      { text: "Envision", correct: true },
      { text: "Align", correct: false },
      { text: "Launch", correct: false }
  ],
  explanation: "The Envision phase focuses on identifying opportunities and demonstrating cloud value."
},
{
  question: "Which option is a customer responsibility under the AWS shared responsibility model?",
  answers: [
      { text: "Maintenance of underlying hardware of Amazon EC2 instances", correct: false },
      { text: "Application data security", correct: true },
      { text: "Physical security of data centers", correct: false },
      { text: "Maintenance of VPC components", correct: false }
  ],
  explanation: "Customers are responsible for securing their application data."
},
{
  question: "A company wants its Amazon EC2 instances to operate in a highly available environment, even if there is a natural disaster in a particular geographic area. Which approach will achieve this goal?",
  answers: [
      { text: "Use EC2 instances in multiple AWS Regions", correct: true },
      { text: "Use EC2 instances in multiple Amazon CloudFront locations", correct: false },
      { text: "Use EC2 instances in multiple edge locations", correct: false },
      { text: "Use EC2 instances in AWS Local Zones.", correct: false }
  ],
  explanation: "Deploying EC2 instances across multiple AWS Regions ensures high availability during geographic disruptions."
},
{
  question: "A company wants to modernize and convert a monolithic application into microservices. The company wants to move the application to AWS. Which migration strategy should the company use?",
  answers: [
      { text: "Rehost", correct: false },
      { text: "Replatform", correct: false },
      { text: "Repurchase", correct: false },
      { text: "Refactor", correct: true }
  ],
  explanation: "Refactoring involves modifying the application to better fit the cloud environment, which is necessary for microservices."
},
{
  question: "A systems administrator created a new IAM user for a developer and assigned the user an access key instead of a user name and password. What is the access key used for?",
  answers: [
      { text: "To access the AWS account as the AWS account root user", correct: false },
      { text: "To access the AWS account through the AWS Management Console", correct: false },
      { text: "To access the AWS account through a CLI", correct: true },
      { text: "To access all of a company’s AWS accounts", correct: false }
  ],
  explanation: "Access keys are used for programmatic access to AWS services via the CLI or SDK."
},
{
  question: "Which option is an environment that consists of one or more data centers?",
  answers: [
      { text: "Amazon CloudFront", correct: false },
      { text: "Availability Zone", correct: true },
      { text: "VPC", correct: false },
      { text: "AWS Outposts", correct: false }
  ],
  explanation: "An Availability Zone is made up of one or more discrete data centers with redundant infrastructure."
},
{
  question: "A company is moving an on-premises data center to the AWS Cloud. The company must migrate 50 petabytes of file storage data to AWS with the least possible operational overhead. Which AWS service or resource should the company use to meet these requirements?",
  answers: [
    { text: "AWS Snowmobile", correct: true },
    { text: "AWS Snowball Edge", correct: false },
    { text: "AWS Data Exchange", correct: false },
    { text: "AWS Database Migration Service (AWS DMS)", correct: false }
  ],
  explanation: "AWS Snowmobile is the appropriate choice for migrating 50 petabytes of file storage data to AWS with the least possible operational overhead. Snowmobile is a data transfer service that physically transports massive amounts of data to the AWS Cloud. It is a secure and efficient solution for extremely large data transfers."
},
{
  question: "A company has an application with robust hardware requirements. The application must be accessed by students who are using lightweight, low-cost laptops. Which AWS service will help the company deploy the application without investing in backend infrastructure or high-end client hardware?",
  answers: [
    { text: "Amazon AppStream 2.0", correct: true },
    { text: "AWS AppSync", correct: false },
    { text: "Amazon WorkLink", correct: false },
    { text: "AWS Elastic Beanstalk", correct: false }
  ],
  explanation: "Amazon AppStream 2.0 streams applications to lightweight laptops, ensuring that students can access applications with robust hardware requirements without needing high-end client hardware."
},
{
  question: "Which of the following is a recommended design principle for AWS Cloud architecture?",
  answers: [
    { text: "Design tightly coupled components", correct: false },
    { text: "Build a single application component that can handle all the application functionality", correct: false },
    { text: "Make large changes on fewer iterations to reduce chances of failure", correct: false },
    { text: "Avoid monolithic architecture by segmenting workloads.", correct: true }
  ],
  explanation: "Avoiding monolithic architecture by segmenting workloads allows for greater scalability, resilience, and flexibility in the cloud, aligning with best practices for modern cloud-native architectures."
},
{
  question: "Which AWS service helps users audit API activity across their AWS account?",
  answers: [
    { text: "AWS CloudTrail", correct: true },
    { text: "Amazon Inspector", correct: false },
    { text: "AWS WAF", correct: false },
    { text: "AWS Config", correct: false }
  ],
  explanation: "With AWS CloudTrail, you can monitor your AWS deployments by getting a history of AWS API calls, providing insights into user activity and resource access."
},
{
  question: "Which task is a customer’s responsibility, according to the AWS shared responsibility model?",
  answers: [
    { text: "Management of the guest operating systems", correct: true },
    { text: "Maintenance of the configuration of infrastructure devices", correct: false },
    { text: "Management of the host operating systems and virtualization", correct: false },
    { text: "Maintenance of the software that powers Availability Zones", correct: false }
  ],
  explanation: "According to the AWS shared responsibility model, customers are responsible for managing their own guest operating systems and associated applications."
},
{
  question: "A company wants to automatically add and remove Amazon EC2 instances. The company wants the EC2 instances to adjust to varying workloads dynamically. Which service or feature will meet these requirements?",
  answers: [
    { text: "Amazon DynamoDB", correct: false },
    { text: "Amazon EC2 Spot Instances", correct: false },
    { text: "AWS Snow Family", correct: false },
    { text: "Amazon EC2 Auto Scaling", correct: true }
  ],
  explanation: "Amazon EC2 Auto Scaling automatically adjusts the number of EC2 instances in response to changing workloads, helping maintain application performance."
},
{
  question: "A user wants to securely automate the management and rotation of credentials that are shared between applications, while spending the least amount of time on managing tasks. Which AWS service or feature can be used to accomplish this?",
  answers: [
    { text: "AWS CloudHSM", correct: false },
    { text: "AWS Key Management Service (AWS KMS)", correct: false },
    { text: "AWS Secrets Manager", correct: true },
    { text: "Server-side encryption", correct: false }
  ],
  explanation: "AWS Secrets Manager simplifies the process of rotating, managing, and retrieving credentials securely."
},
{
  question: "Which security service automatically recognizes and classifies sensitive data or intellectual property on AWS?",
  answers: [
    { text: "Amazon GuardDuty", correct: false },
    { text: "Amazon Macie", correct: true },
    { text: "Amazon Inspector", correct: false },
    { text: "AWS Shield", correct: false }
  ],
  explanation: "Amazon Macie discovers sensitive data using machine learning, providing visibility and automated protection against data security risks."
},
{
  question: "Which actions are best practices for an AWS account root user? (Choose two.)",
  answers: [
    { text: "Share root user credentials with team members", correct: false },
    { text: "Create multiple root users for the account, separated by environment.", correct: false },
    { text: "Enable multi-factor authentication (MFA) on the root user", correct: true },
    { text: "Create an IAM user with administrator privileges for daily administrative tasks, instead of using the root user", correct: true }
  ],
  explanation: "Best practices include enabling MFA for security and using IAM users for daily tasks to reduce reliance on the highly privileged root user account."
},
{
  question: "A company is running a critical workload on an Amazon RDS DB instance. The company needs the DB instance to be highly available with a recovery time of less than 5 minutes. Which solution will meet these requirements?",
  answers: [
    { text: "Create a read replica of the DB instance.", correct: false },
    { text: "Create a template of the DB instance by using AWS CloudFormation", correct: false },
    { text: "Take frequent snapshots of the DB instance. Store the snapshots in Amazon S3.", correct: false },
    { text: "Modify the DB instance to be a Multi-AZ deployment", correct: true }
  ],
  explanation: "Modifying the DB instance to be a Multi-AZ deployment ensures high availability and a quick recovery time in the event of a failure."
},
{
  question: "A company plans to migrate its application to AWS and run the application on Amazon EC2 instances. The application will have continuous usage for 1 year. Which EC2 instance purchasing option will meet these requirements MOST cost-effectively?",
  answers: [
    { text: "Reserved Instances", correct: true },
    { text: "Spot Instances", correct: false },
    { text: "On-Demand Instances", correct: false },
    { text: "Dedicated Hosts", correct: false }
  ],
  explanation: "Reserved Instances provide significant cost savings for applications with continuous usage over a long period."
},
{
  question: "A company needs to transfer data between an Amazon S3 bucket and an on-premises application. Who is responsible for the security of this data, according to the AWS shared responsibility model?",
  answers: [
    { text: "The company", correct: true },
    { text: "AWS", correct: false },
    { text: "Firewall vendor", correct: false },
    { text: "AWS Marketplace partner", correct: false }
  ],
  explanation: "According to the shared responsibility model, customers are responsible for securing their own data and managing access when transferring data to and from AWS services."
},
{
  question: "Which pillar of the AWS Well-Architected Framework refers to the ability of a system to recover from infrastructure or service disruptions and dynamically acquire computing resources to meet demand?",
  answers: [
    { text: "Security", correct: false },
    { text: "Reliability", correct: true },
    { text: "Performance efficiency", correct: false },
    { text: "Cost optimization", correct: false }
  ],
  explanation: "Reliability refers to the system's ability to recover from disruptions and dynamically adjust resources to meet demand."
},
{
  question: "A company wants to identify Amazon S3 buckets that are shared with another AWS account. Which AWS service or feature will meet these requirements?",
  answers: [
    { text: "AWS Lake Formation", correct: false },
    { text: "IAM credential report", correct: false },
    { text: "Amazon CloudWatch", correct: false },
    { text: "IAM Access Analyzer", correct: true }
  ],
  explanation: "IAM Access Analyzer helps identify resources that are shared with external entities, including S3 buckets."
},
{
  question: "Which AWS service gives users the ability to build interactive business intelligence dashboards that include machine learning insights?",
  answers: [
    { text: "Amazon Athena", correct: false },
    { text: "Amazon Kendra", correct: false },
    { text: "Amazon QuickSight", correct: true },
    { text: "Amazon Redshift", correct: false }
  ],
  explanation: "Amazon QuickSight allows users to create interactive dashboards with data visualization, including machine learning insights."
},
{
  question: "Which of the following is an AWS value proposition that describes a user’s ability to scale infrastructure based on demand?",
  answers: [
    { text: "Speed of innovation", correct: false },
    { text: "Resource elasticity", correct: true },
    { text: "Decoupled architecture", correct: false },
    { text: "Global deployment", correct: false }
  ],
  explanation: "Resource elasticity refers to the ability to automatically acquire and release resources based on current demand."
},
{
  question: "Which action is a security best practice for access to sensitive data that is stored in an Amazon S3 bucket?",
  answers: [
    { text: "Enable S3 Cross-Region Replication (CRR) on the S3 bucket", correct: false },
    { text: "Use IAM roles for applications that require access to the S3 bucket", correct: true },
    { text: "Configure AWS WAF to prevent unauthorized access to the S3 bucket.", correct: false },
    { text: "Configure Amazon GuardDuty to prevent unauthorized access to the S3 bucket", correct: false }
  ],
  explanation: "Using IAM roles provides secure permissions for applications to access S3 buckets, adhering to the principle of least privilege."
},
{
  question: "A company wants to know more about the benefits offered by cloud computing. The company wants to understand the operational advantage of agility. How does AWS provide agility for users?",
  answers: [
    { text: "The ability to ensure high availability by deploying workloads to multiple regions", correct: false },
    { text: "A pay-as-you-go model for many services and resources", correct: false },
    { text: "The ability to transfer infrastructure management to the AWS Cloud", correct: false },
    { text: "The ability to provision and deprovision resources quickly with minimal effort", correct: true }
  ],
  explanation: "AWS allows users to rapidly provision and deprovision resources, enhancing agility and responsiveness to changing business needs."
},
{
  question: "A company needs a central user portal so that users can log in to third-party business applications that support Security Assertion Markup Language (SAML) 2.0. Which AWS service will meet this requirement?",
  answers: [
    { text: "AWS Identity and Access Management (IAM)", correct: false },
    { text: "Amazon Cognito", correct: false },
    { text: "AWS IAM Identity Center (AWS Single Sign-On)", correct: true },
    { text: "AWS CLI", correct: false }
  ],
  explanation: "AWS IAM Identity Center provides single sign-on access to AWS and SAML 2.0 applications, streamlining user authentication."
},
{
  question: "Which AWS service should users use to learn about AWS service availability and operations?",
  answers: [
    { text: "Amazon EventBridge", correct: false },
    { text: "AWS Service Catalog", correct: false },
    { text: "AWS Control Tower", correct: false },
    { text: "AWS Health Dashboard", correct: true }
  ],
  explanation: "The AWS Health Dashboard offers real-time information about the health of AWS services and alerts users to maintenance and other important events."
},
{
  question: "Which AWS service or tool can be used to capture information about inbound and outbound traffic in an Amazon VPC?",
  answers: [
    { text: "VPC Flow Logs", correct: true },
    { text: "Amazon Inspector", correct: false },
    { text: "VPC endpoint services", correct: false },
    { text: "NAT gateway", correct: false }
  ],
  explanation: "VPC Flow Logs capture information about traffic in and out of a VPC, enabling monitoring and analysis of network traffic."
},
{
  question: "What is the customer ALWAYS responsible for managing, according to the AWS shared responsibility model?",
  answers: [
    { text: "Software licenses", correct: false },
    { text: "Networking", correct: false },
    { text: "Customer data", correct: true },
    { text: "Encryption keys", correct: false }
  ],
  explanation: "Customers are always responsible for managing their own customer data in the AWS shared responsibility model."
},
{
  question: "Which AWS service can be used to retrieve compliance reports on demand?",
  answers: [
    { text: "AWS Secrets Manager", correct: false },
    { text: "AWS Artifact", correct: true },
    { text: "AWS Security Hub", correct: false },
    { text: "AWS Certificate Manager", correct: false }
  ],
  explanation: "AWS Artifact provides on-demand access to compliance reports and other related documentation."
},
{
  question: "Which AWS service enables users to check for vulnerabilities on Amazon EC2 instances by using predefined assessment templates?",
  answers: [
    { text: "AWS WAF", correct: false },
    { text: "AWS Trusted Advisor", correct: false },
    { text: "Amazon Inspector", correct: true },
    { text: "AWS Shield", correct: false }
  ],
  explanation: "Amazon Inspector allows users to run assessments for vulnerabilities on EC2 instances using predefined templates."
},
{
  question: "A company plans to migrate to the AWS Cloud. The company is gathering information about its on-premises infrastructure and requires information such as the hostname, IP address, and MAC address. Which AWS service will meet these requirements?",
  answers: [
    { text: "AWS DataSync", correct: false },
    { text: "AWS Application Migration Service", correct: false },
    { text: "AWS Application Discovery Service", correct: true },
    { text: "AWS Database Migration Service (AWS DMS)", correct: false }
  ],
  explanation: "AWS Application Discovery Service collects configuration information about on-premises resources, including hostnames, IP addresses, and MAC addresses."
},
{
  question: "Which action will help increase security in the AWS Cloud?",
  answers: [
    { text: "Enable programmatic access for all IAM users.", correct: false },
    { text: "Use IAM users instead of IAM roles to delegate permissions", correct: false },
    { text: "Rotate access keys on a recurring basis", correct: true },
    { text: "Use inline policies instead of customer managed policies", correct: false }
  ],
  explanation: "Rotating access keys regularly is a best practice to enhance security by reducing the risk of unauthorized access."
},
{
  question: "A company is planning to migrate its application to the AWS Cloud. Which AWS tool or set of resources should the company use to analyze and assess its readiness for migration?",
  answers: [
    { text: "AWS Cloud Adoption Framework (AWS CAF)", correct: true },
    { text: "AWS Pricing Calculator", correct: false },
    { text: "AWS Well-Architected Framework", correct: false },
    { text: "AWS Budgets", correct: false }
  ],
  explanation: "AWS Cloud Adoption Framework (AWS CAF) helps organizations assess their readiness for migration and identify necessary steps."
},
{
  question: "Which of the following describes some of the core functionality of Amazon S3?",
  answers: [
    { text: "Amazon S3 is a high-performance block storage service that is designed for use with Amazon EC2.", correct: false },
    { text: "Amazon S3 is an object storage service that provides high-level performance, security, scalability, and data availability", correct: true },
    { text: "Amazon S3 is a fully managed, highly reliable, and scalable file storage system that is accessible over the industry-standard SMB protocol.", correct: false },
    { text: "Amazon S3 is a scalable, fully managed elastic NFS for use with AWS Cloud services and on-premises resources.", correct: false }
  ],
  explanation: "Amazon S3 is an object storage service designed for high performance, security, scalability, and data availability."
},
{
  question: "Which AWS benefit is demonstrated by on-demand technology services that enable companies to replace upfront fixed expenses with variable expenses?",
  answers: [
    { text: "High availability", correct: false },
    { text: "Economies of scale", correct: false },
    { text: "Pay-as-you-go pricing", correct: true },
    { text: "Global reach", correct: false }
  ],
  explanation: "Pay-as-you-go pricing allows users to pay only for the resources they consume, turning fixed expenses into variable expenses."
},
{
  question: "Which AWS services or features enable users to connect on-premises networks to a VPC? (Choose two.)",
  answers: [
    { text: "AWS VPN", correct: true },
    { text: "Elastic Load Balancing", correct: false },
    { text: "AWS Direct Connect", correct: true },
    { text: "VPC peering", correct: false }
  ],
  explanation: "AWS VPN and AWS Direct Connect are services that enable secure connections from on-premises networks to Amazon VPC."
},
{
  question: "A user needs to quickly deploy a nonrelational database on AWS. The user does not want to manage the underlying hardware or the database software. Which AWS service can be used to accomplish this?",
  answers: [
    { text: "Amazon RDS", correct: false },
    { text: "Amazon DynamoDB", correct: true },
    { text: "Amazon Aurora", correct: false },
    { text: "Amazon Redshift", correct: false }
  ],
  explanation: "Amazon DynamoDB is a fully managed NoSQL database service that handles the infrastructure, so users do not need to manage the underlying hardware or software."
},
{
  question: "Which actions are examples of a company’s effort to rightsize its AWS resources to control cloud costs? (Choose two.)",
  answers: [
    { text: "Switch from Amazon RDS to Amazon DynamoDB to accommodate NoSQL datasets", correct: true },
    { text: "Base the selection of Amazon EC2 instance types on past utilization patterns", correct: true },
    { text: "Use Amazon S3 Lifecycle policies to move objects that users access infrequently to lower-cost storage tiers", correct: false },
    { text: "Use Multi-AZ deployments for Amazon RDS", correct: false }
  ],
  explanation: "Both actions focus on optimizing resource use based on needs and past performance to control costs."
},
{
  question: "Which AWS service or feature can a company use to apply security rules to specific Amazon EC2 instances?",
  answers: [
    { text: "Network ACLs", correct: false },
    { text: "Security groups", correct: true },
    { text: "AWS Trusted Advisor", correct: false },
    { text: "AWS WAF", correct: false }
  ],
  explanation: "Security groups act as virtual firewalls for EC2 instances, allowing you to specify rules for inbound and outbound traffic."
},
{
  question: "Which design principles support the reliability pillar of the AWS Well-Architected Framework? (Choose two.)",
  answers: [
    { text: "Perform operations as code.", correct: false },
    { text: "Enable traceability.", correct: true },
    { text: "Automatically scale to meet demand", correct: true },
    { text: "Automatically recover from failure.", correct: true }
  ],
  explanation: "Both principles enhance system reliability by ensuring that failures can be identified and recovered from quickly."
},
{
  question: "A company that uses AWS needs to transfer 2 TB of data. Which type of transfer of that data would result in no cost for the company?",
  answers: [
    { text: "Inbound data transfer from the internet", correct: true },
    { text: "Outbound data transfer to the internet", correct: false },
    { text: "Data transfer between AWS Regions", correct: false },
    { text: "Data transfer between Availability Zones", correct: false }
  ],
  explanation: "AWS does not charge for data transferred into its services, while outbound transfers and transfers between regions incur costs."
},
{
  question: "A company wants to create templates that the company can reuse to deploy multiple AWS resources. Which AWS service or feature can the company use to meet this requirement?",
  answers: [
    { text: "AWS Marketplace", correct: false },
    { text: "Amazon Machine Image (AMI)", correct: false },
    { text: "AWS CloudFormation", correct: true },
    { text: "AWS OpsWorks", correct: false }
  ],
  explanation: "AWS CloudFormation enables you to use a template file to create and delete a collection of resources together as a single unit (a stack)."
},
{
  question: "A company is building an application that requires the ability to send, store, and receive messages between application components. The company has another requirement to process messages in first-in, first-out (FIFO) order. Which AWS service should the company use?",
  answers: [
    { text: "AWS Step Functions", correct: false },
    { text: "Amazon Simple Notification Service (Amazon SNS)", correct: false },
    { text: "Amazon Kinesis Data Streams", correct: false },
    { text: "Amazon Simple Queue Service (Amazon SQS)", correct: true }
  ],
  explanation: "Amazon SQS FIFO queues preserve the order in which messages are sent and received, ensuring FIFO processing."
},
{
  question: "A company is using a central data platform to manage multiple types of data for its customers. The company wants to use AWS services to discover, transform, and visualize the data. Which combination of AWS services should the company use to meet these requirements? (Choose two.)",
  answers: [
    { text: "AWS Glue", correct: true },
    { text: "Amazon Redshift", correct: false },
    { text: "Amazon QuickSight", correct: true },
    { text: "Amazon Quantum Ledger Database (Amazon QLDB)", correct: false }
  ],
  explanation: "AWS Glue can discover and transform data, while Amazon QuickSight is used for visualization."
},
{
  question: "A global company wants to migrate its third-party applications to the AWS Cloud. The company wants help from a global team of experts to complete the migration faster and more reliably in accordance with AWS internal best practices. Which AWS service or resource will meet these requirements?",
  answers: [
    { text: "AWS Support", correct: false },
    { text: "AWS Professional Services", correct: true },
    { text: "AWS Launch Wizard", correct: false },
    { text: "AWS Managed Services (AMS)", correct: false }
  ],
  explanation: "AWS Professional Services provide guidance and expertise for successful migrations."
},
{
  question: "An e-learning platform needs to run an application for 2 months each year. The application will be deployed on Amazon EC2 instances. Any application downtime during those 2 months must be avoided. Which EC2 purchasing option will meet these requirements MOST cost-effectively?",
  answers: [
    { text: "Reserved Instances", correct: false },
    { text: "Dedicated Hosts", correct: false },
    { text: "Spot Instances", correct: false },
    { text: "On-Demand Instances", correct: true }
  ],
  explanation: "On-Demand Instances provide flexibility for applications that do not run continuously, avoiding commitment."
},
{
  question: "An online gaming company needs to choose a purchasing option to run its Amazon EC2 instances for 1 year. The web traffic is consistent, and any increases in traffic are predictable. The EC2 instances must be online and available without any disruption. Which EC2 instance purchasing option will meet these requirements MOST cost-effectively?",
  answers: [
    { text: "On-Demand Instances", correct: false },
    { text: "Reserved Instances", correct: true },
    { text: "Spot Instances", correct: false },
    { text: "Spot Fleet", correct: false }
  ],
  explanation: "Reserved Instances provide a cost-effective solution for predictable workloads with consistent traffic."
},
{
  question: "Which of the following are pillars of the AWS Well-Architected Framework? (Choose two.)",
  answers: [
    { text: "Availability", correct: false },
    { text: "Reliability", correct: true },
    { text: "Scalability", correct: false },
    { text: "Operational excellence", correct: true }
  ],
  explanation: "Reliability and Operational excellence are two of the five pillars of the AWS Well-Architected Framework."
},
{
  question: "A network engineer needs to build a hybrid cloud architecture connecting on-premises networks to the AWS Cloud using AWS Direct Connect. The company has a few VPCs in a single AWS Region and expects to increase the number of VPCs to hundreds over time. Which AWS service or feature should the engineer use to simplify and scale this connectivity as the VPCs increase in number?",
  answers: [
    { text: "VPC endpoints", correct: false },
    { text: "AWS Transit Gateway", correct: true },
    { text: "Amazon Route 53", correct: false },
    { text: "AWS Secrets Manager", correct: false }
  ],
  explanation: "AWS Transit Gateway simplifies the management of multiple VPC connections."
},
{
  question: "A company wants to query its server logs to gain insights about its customers’ experiences. Which AWS service will store this data MOST cost-effectively?",
  answers: [
    { text: "Amazon Aurora", correct: false },
    { text: "Amazon Elastic File System (Amazon EFS)", correct: false },
    { text: "Amazon Elastic Block Store (Amazon EBS)", correct: false },
    { text: "Amazon S3", correct: true }
  ],
  explanation: "Amazon S3 is the most cost-effective option for storing large amounts of data such as logs."
},
{
  question: "Which AWS service or feature is a browser-based, pre-authenticated service that can be launched directly from the AWS Management Console?",
  answers: [
    { text: "AWS API", correct: false },
    { text: "AWS Lightsail", correct: false },
    { text: "AWS Cloud9", correct: false },
    { text: "AWS CloudShell", correct: true }
  ],
  explanation: "AWS CloudShell is a browser-based, pre-authenticated shell that you can launch directly from the AWS Management Console."
},
{
  question: "A company wants to migrate its database to a managed AWS service that is compatible with PostgreSQL. Which AWS services will meet these requirements? (Choose two.)",
  answers: [
    { text: "Amazon Athena", correct: false },
    { text: "Amazon RDS", correct: true },
    { text: "Amazon EC2", correct: false },
    { text: "Amazon Aurora", correct: true }
  ],
  explanation: "Amazon RDS and Amazon Aurora provide managed database services compatible with PostgreSQL."
},
{
  question: "A company has a fleet of cargo ships. The cargo ships have sensors that collect data at sea, where there is intermittent or no internet connectivity. The company needs to collect, format, and process the data at sea and move the data to AWS later. Which AWS service should the company use to meet these requirements?",
  answers: [
    { text: "AWS IoT Core", correct: false },
    { text: "Amazon Lightsail", correct: false },
    { text: "AWS Storage Gateway", correct: false },
    { text: "AWS Snowball Edge", correct: true }
  ],
  explanation: "AWS Snowball Edge allows data to be collected and processed at remote locations, then transferred to AWS."
},
{
  question: "A company hosts an application on multiple Amazon EC2 instances. The application uses Amazon Simple Notification Service (Amazon SNS) to send messages. Which AWS service or feature will give the application permission to access required AWS services?",
  answers: [
    { text: "AWS Certificate Manager (ACM)", correct: false },
    { text: "IAM roles", correct: true },
    { text: "AWS Security Hub", correct: false },
    { text: "Amazon GuardDuty", correct: false }
  ],
  explanation: "IAM roles provide fine-grained access control across AWS services."
},
{
  question: "A user has limited knowledge of AWS services, but wants to quickly deploy a scalable Node.js application in the AWS Cloud. Which service should be used to deploy the application?",
  answers: [
    { text: "AWS CloudFormation", correct: false },
    { text: "AWS Elastic Beanstalk", correct: true },
    { text: "Amazon EC2", correct: false },
    { text: "AWS OpsWorks", correct: false }
  ],
  explanation: "AWS Elastic Beanstalk is an easy-to-use service for deploying and scaling web applications."
},
{
  question: "A company needs a content delivery network that provides secure delivery of data, videos, applications, and APIs to users globally with low latency and high transfer speeds. Which AWS service meets these requirements?",
  answers: [
    { text: "Amazon CloudFront", correct: true },
    { text: "Elastic Load Balancing", correct: false },
    { text: "Amazon S3", correct: false },
    { text: "Amazon Elastic Transcoder", correct: false }
  ],
  explanation: "Amazon CloudFront is a content delivery network that delivers data with low latency and high transfer speeds."
},
{
  question: "A company needs to use third-party software for its workload on AWS. Which AWS service or feature can the company use to purchase the software?",
  answers: [
    { text: "AWS Resource Access Manager", correct: false },
    { text: "AWS Managed Services", correct: false },
    { text: "AWS License Manager", correct: false },
    { text: "AWS Marketplace", correct: true }
  ],
  explanation: "AWS Marketplace allows companies to purchase and deploy third-party software on AWS."
},
{
  question: "A company needs fully managed, highly reliable, and scalable file storage that is accessible over the Server Message Block (SMB) protocol. Which AWS service will meet these requirements?",
  answers: [
    { text: "Amazon S3", correct: false },
    { text: "Amazon Elastic File System (Amazon EFS)", correct: false },
    { text: "Amazon FSx for Windows File Server", correct: true },
    { text: "Amazon Elastic Block Store (Amazon EBS)", correct: false }
  ],
  explanation: "Amazon FSx for Windows File Server provides fully managed, highly reliable, and scalable file storage that is accessible over the industry-standard Server Message Block (SMB) protocol."
},
{
  question: "A company needs to centrally configure and manage Amazon VPC security groups across multiple AWS accounts within an organization in AWS Organizations. Which AWS service should the company use to meet these requirements?",
  answers: [
    { text: "AWS Firewall Manager", correct: true },
    { text: "Amazon GuardDuty", correct: false },
    { text: "Amazon Detective", correct: false },
    { text: "AWS WAF", correct: false }
  ],
  explanation: "AWS Firewall Manager helps you manage and configure VPC security groups centrally across multiple accounts."
},
{
  question: "Which task is a responsibility of AWS, according to the AWS shared responsibility model?",
  answers: [
    { text: "Configure identity and access management for applications", correct: false },
    { text: "Manage encryption options for data that is stored on AWS", correct: false },
    { text: "Configure security groups for Amazon EC2 instances", correct: false },
    { text: "Maintain the physical hardware of the infrastructure", correct: true }
  ],
  explanation: "AWS is responsible for maintaining the physical hardware that supports its cloud services."
},
{
  question: "A company has an Amazon EC2 instance in a private subnet. The company wants to initiate a connection to the internet to pull operating system updates while preventing traffic from the internet from accessing the EC2 instance. Which AWS managed service allows this?",
  answers: [
    { text: "VPC endpoint", correct: false },
    { text: "NAT gateway", correct: true },
    { text: "Amazon PrivateLink", correct: false },
    { text: "VPC peering", correct: false }
  ],
  explanation: "The NAT gateway allows instances in private subnets to connect to the internet for updates while blocking inbound traffic."
},
{
  question: "Which actions are the responsibility of AWS, according to the AWS shared responsibility model? (Choose two.)",
  answers: [
    { text: "Securing the virtualization layer", correct: true },
    { text: "Patching the operating system on Amazon EC2 instances", correct: false },
    { text: "Enforcing a strict password policy for IAM users", correct: false },
    { text: "Patching the operating system on Amazon RDS instances", correct: true }
  ],
  explanation: "AWS is responsible for securing the virtualization layer and patching managed services like Amazon RDS."
},
{
  question: "A company is storing data that will not be frequently accessed in the AWS Cloud. If the company needs to access the data, the data needs to be retrieved within 12 hours. The company wants a solution that is cost-effective for storage costs for each gigabyte. Which Amazon S3 storage class will meet these requirements?",
  answers: [
    { text: "S3 Standard", correct: false },
    { text: "S3 Glacier Flexible Retrieval", correct: true },
    { text: "S3 One Zone-Infrequent Access (S3 One Zone-IA)", correct: false },
    { text: "S3 Standard-Infrequent Access (S3 Standard-IA)", correct: false }
  ],
  explanation: "S3 Glacier Flexible Retrieval is cost-effective for infrequently accessed data with retrieval times that can be up to 12 hours."
},
{
  question: "Which AWS service or resource can be used to identify services that have been used by a user within a specified date range?",
  answers: [
    { text: "Amazon S3 access control lists (ACLs)", correct: false },
    { text: "AWS Certificate Manager (ACM)", correct: false },
    { text: "Network Access Analyzer", correct: false },
    { text: "AWS Identity and Access Management Access Analyzer", correct: true }
  ],
  explanation: "IAM Access Analyzer helps identify AWS services used by a user, leveraging AWS CloudTrail logs."
},
{
  question: "A company needs to engage third-party consultants to help maintain and support its AWS environment and the company’s business needs. Which AWS service or resource will meet these requirements?",
  answers: [
    { text: "AWS Support", correct: false },
    { text: "AWS Organizations", correct: false },
    { text: "AWS Service Catalog", correct: false },
    { text: "AWS Partner Network (APN)", correct: true }
  ],
  explanation: "The AWS Partner Network (APN) connects companies with qualified third-party consultants and service providers."
},
{
  question: "A company wants to create Amazon QuickSight dashboards every week by using its billing data. Which AWS feature or tool can the company use to meet these requirements?",
  answers: [
    { text: "AWS Budgets", correct: false },
    { text: "AWS Cost Explorer", correct: false },
    { text: "AWS Cost and Usage Report", correct: true },
    { text: "AWS Cost Anomaly Detection", correct: false }
  ],
  explanation: "The AWS Cost and Usage Report provides detailed billing data that can be used to create QuickSight dashboards."
},
{
  question: "A company is planning to move data backups to the AWS Cloud. The company needs to replace on-premises storage with storage that is cloud-based but locally cached. Which AWS service meets these requirements?",
  answers: [
    { text: "AWS Storage Gateway", correct: true },
    { text: "AWS Snowcone", correct: false },
    { text: "AWS Backup", correct: false },
    { text: "Amazon Elastic File System (Amazon EFS)", correct: false }
  ],
  explanation: "AWS Storage Gateway provides cloud-based storage solutions with local caching options."
},
{
  question: "A company needs to organize its resources and track AWS costs on a detailed level. The company needs to categorize costs by business department, environment, and application. Which solution will meet these requirements?",
  answers: [
    { text: "Access the AWS Cost Management console to organize resources, set an AWS budget, and receive notifications of unintentional usage.", correct: false },
    { text: "Use tags to organize the resources. Activate cost allocation tags to track AWS costs on a detailed level.", correct: true },
    { text: "Create Amazon CloudWatch dashboards to visually organize and track costs individually.", correct: false },
    { text: "Access the AWS Billing and Cost Management dashboard to organize and track resource consumption on a detailed level.", correct: false }
  ],
  explanation: "Using tags and activating cost allocation tags allows for detailed tracking of AWS costs by various categories."
},
{
  question: "A company needs to plan, schedule, and run hundreds of thousands of computing jobs on AWS. Which AWS service can the company use to meet this requirement?",
  answers: [
    { text: "AWS Step Functions", correct: false },
    { text: "AWS Service Catalog", correct: false },
    { text: "Amazon Simple Queue Service (Amazon SQS)", correct: false },
    { text: "AWS Batch", correct: true }
  ],
  explanation: "AWS Batch is designed for managing and executing batch jobs at any scale."
},
{
  question: "Which AWS services or features provide high availability and low latency by enabling failover across different AWS Regions? (Choose two.)",
  answers: [
    { text: "Amazon Route 53", correct: true },
    { text: "Network Load Balancer", correct: false },
    { text: "Amazon S3 Transfer Acceleration", correct: false },
    { text: "AWS Global Accelerator", correct: true }
  ],
  explanation: "Amazon Route 53 and AWS Global Accelerator help provide low-latency routing and high availability across AWS Regions."
},
{
  question: "Which of the following is a way to use Amazon EC2 Auto Scaling groups to scale capacity in the AWS Cloud?",
  answers: [
    { text: "Scale the number of EC2 instances in or out automatically, based on demand", correct: true },
    { text: "Use serverless EC2 instances", correct: false },
    { text: "Scale the size of EC2 instances up or down automatically, based on demand", correct: false },
    { text: "Transfer unused CPU resources between EC2 instances", correct: false }
  ],
  explanation: "Amazon EC2 Auto Scaling groups can automatically adjust the number of instances based on demand."
},
{
  question: "Which abilities are benefits of the AWS Cloud? (Choose two.)",
  answers: [
    { text: "Trade variable expenses for capital expenses.", correct: false },
    { text: "Deploy globally in minutes", correct: true },
    { text: "Plan capacity in advance of deployments", correct: false },
    { text: "Take advantage of economies of scale", correct: true }
  ],
  explanation: "AWS Cloud provides the ability to deploy globally quickly and benefit from economies of scale."
},
{
  question: "Which AWS security service protects applications from distributed denial of service attacks with always-on detection and automatic inline mitigations?",
  answers: [
    { text: "Amazon Inspector", correct: false },
    { text: "AWS Web Application Firewall (AWS WAF)", correct: false },
    { text: "Elastic Load Balancing (ELB)", correct: false },
    { text: "AWS Shield", correct: true }
  ],
  explanation: "AWS Shield offers managed DDoS protection with always-on detection and mitigation."
},
{
  question: "Which AWS service allows users to model and provision AWS resources using common programming languages?",
  answers: [
    { text: "AWS CloudFormation", correct: false },
    { text: "AWS CodePipeline", correct: false },
    { text: "AWS Cloud Development Kit (AWS CDK)", correct: true },
    { text: "AWS Systems Manager", correct: false }
  ],
  explanation: "AWS CDK allows users to model cloud application resources using familiar programming languages and provision infrastructure."
},
{
  question: "Which Amazon EC2 instance pricing model can provide discounts of up to 90%?",
  answers: [
    { text: "Reserved Instances", correct: false },
    { text: "On-Demand", correct: false },
    { text: "Dedicated Hosts", correct: false },
    { text: "Spot Instances", correct: true }
  ],
  explanation: "Spot Instances allow users to utilize unused EC2 capacity at discounts of up to 90% compared to On-Demand prices."
},
{
  question: "Which of the following acts as an instance-level firewall to control inbound and outbound access?",
  answers: [
    { text: "Network access control list", correct: false },
    { text: "Security groups", correct: true },
    { text: "AWS Trusted Advisor", correct: false },
    { text: "Virtual private gateways", correct: false }
  ],
  explanation: "Security groups act as a virtual firewall for your Amazon EC2 instances, controlling inbound and outbound traffic."
},
{
  question: "A company must be able to develop, test, and launch an application in the AWS Cloud quickly. Which advantage of cloud computing will meet these requirements?",
  answers: [
    { text: "Stop guessing capacity", correct: false },
    { text: "Trade fixed expense for variable expense", correct: false },
    { text: "Achieve economies of scale", correct: false },
    { text: "Increase speed and agility", correct: true }
  ],
  explanation: "The cloud enables quick development and deployment, which enhances speed and agility."
},
{
  question: "A company has teams that have different job roles and responsibilities. The company’s employees often change teams. The company needs to manage permissions for the employees so that the permissions are appropriate for the job responsibilities. Which IAM resource should the company use to meet this requirement with the LEAST operational overhead?",
  answers: [
    { text: "IAM user groups", correct: false },
    { text: "IAM roles", correct: true },
    { text: "IAM instance profiles", correct: false },
    { text: "IAM policies for individual users", correct: false }
  ],
  explanation: "IAM roles allow for flexible permission management with minimal operational overhead."
},
{
  question: "Which AWS service can a company use to securely store and encrypt passwords for a database?",
  answers: [
    { text: "AWS Shield", correct: false },
    { text: "AWS Secrets Manager", correct: true },
    { text: "AWS Identity and Access Management (IAM)", correct: false },
    { text: "Amazon Cognito", correct: false }
  ],
  explanation: "AWS Secrets Manager is designed to securely store and manage sensitive information like database passwords."
},
{
  question: "What can a cloud practitioner use to retrieve AWS security and compliance documents and submit them as evidence to an auditor or regulator?",
  answers: [
    { text: "AWS Certificate Manager", correct: false },
    { text: "AWS Systems Manager", correct: false },
    { text: "AWS Artifact", correct: true },
    { text: "Amazon Inspector", correct: false }
  ],
  explanation: "AWS Artifact provides access to AWS security and compliance documents needed for audits."
},
{
  question: "Which encryption types can be used to protect objects at rest in Amazon S3? (Choose two.)",
  answers: [
    { text: "Server-side encryption with Amazon S3 managed encryption keys (SSE-S3)", correct: true },
    { text: "Server-side encryption with AWS KMS managed keys (SSE-KMS)", correct: true },
    { text: "TLS", correct: false },
    { text: "SSL", correct: false }
  ],
  explanation: "SSE-S3 and SSE-KMS are the two encryption options for protecting data at rest in Amazon S3."
},
{
  question: "A company wants to integrate its online shopping website with social media login credentials. Which AWS service can the company use to make this integration?",
  answers: [
    { text: "AWS Directory Service", correct: false },
    { text: "AWS Identity and Access Management (IAM)", correct: false },
    { text: "Amazon Cognito", correct: true },
    { text: "AWS IAM Identity Center (AWS Single Sign-On)", correct: false }
  ],
  explanation: "Amazon Cognito supports integration with social identity providers for authentication."
},
{
  question: "Which AWS service is used to track, record, and audit configuration changes made to AWS resources?",
  answers: [
    { text: "AWS Shield", correct: false },
    { text: "AWS Config", correct: true },
    { text: "AWS IAM", correct: false },
    { text: "Amazon Inspector", correct: false }
  ],
  explanation: "AWS Config tracks configuration changes and provides visibility into resource configurations over time."
},
{
  question: "A customer runs an On-Demand Amazon Linux EC2 instance for 3 hours, 5 minutes, and 6 seconds. For how much time will the customer be billed?",
  answers: [
    { text: "3 hours, 5 minutes", correct: false },
    { text: "3 hours, 5 minutes, and 6 seconds", correct: false },
    { text: "3 hours, 6 minutes", correct: true },
    { text: "4 hours", correct: false }
  ],
  explanation: "AWS bills in full minutes, rounding up any partial minutes. Thus, this instance will be billed for 3 hours and 6 minutes."
},
{
  question: "A company website is experiencing DDoS attacks. Which AWS service can help protect the company website against these attacks?",
  answers: [
    { text: "AWS Resource Access Manager", correct: false },
    { text: "AWS Amplify", correct: false },
    { text: "AWS Shield", correct: true },
    { text: "Amazon GuardDuty", correct: false }
  ],
  explanation: "AWS Shield provides managed DDoS protection to help secure applications from attacks."
},
{
  question: "A company wants a customized assessment of its current on-premises environment. The company wants to understand its projected running costs in the AWS Cloud. Which AWS service or tool will meet these requirements?",
  answers: [
    { text: "AWS Trusted Advisor", correct: false },
    { text: "Amazon Inspector", correct: false },
    { text: "AWS Control Tower", correct: false },
    { text: "Migration Evaluator", correct: true }
  ],
  explanation: "Migration Evaluator provides assessments and cost projections for migrating to AWS."
},
{
  question: "A company that has multiple business units wants to centrally manage and govern its AWS Cloud environments. The company wants to automate the creation of AWS accounts, apply service control policies (SCPs), and simplify billing processes. Which AWS service or tool should the company use to meet these requirements?",
  answers: [
    { text: "AWS Organizations", correct: true },
    { text: "Cost Explorer", correct: false },
    { text: "AWS Budgets", correct: false },
    { text: "AWS Trusted Advisor", correct: false }
  ],
  explanation: "AWS Organizations allows you to centrally manage multiple AWS accounts, apply SCPs, and streamline billing."
},
{
  question: "A company is hosting an application in the AWS Cloud. The company wants to verify that underlying AWS services and general AWS infrastructure are operating normally. Which combination of AWS services can the company use to gather the required information? (Choose two.)",
  answers: [
    { text: "AWS Personal Health Dashboard", correct: true },
    { text: "AWS Systems Manager", correct: false },
    { text: "AWS Trusted Advisor", correct: false },
    { text: "AWS Service Health Dashboard", correct: true }
  ],
  explanation: "AWS Personal Health Dashboard provides personalized status notifications, while AWS Service Health Dashboard gives an overview of service health."
},
{
  question: "A company needs to migrate a PostgreSQL database from on-premises to Amazon RDS. Which AWS service or tool should the company use to meet this requirement?",
  answers: [
    { text: "Cloud Adoption Readiness Tool", correct: false },
    { text: "AWS Migration Hub", correct: false },
    { text: "AWS Database Migration Service (AWS DMS)", correct: true },
    { text: "AWS Application Migration Service", correct: false }
  ],
  explanation: "AWS Database Migration Service (AWS DMS) facilitates the migration of databases to AWS easily."
},
{
  question: "Which cloud concept is demonstrated by using AWS Compute Optimizer?",
  answers: [
    { text: "Security validation", correct: false },
    { text: "Rightsizing", correct: true },
    { text: "Elasticity", correct: false },
    { text: "Global reach", correct: false }
  ],
  explanation: "AWS Compute Optimizer provides recommendations for rightsizing your resources."
},
{
  question: "A company hosts a large amount of data in AWS. The company wants to identify if any of the data should be considered sensitive. Which AWS service will meet the requirement?",
  answers: [
    { text: "Amazon Inspector", correct: false },
    { text: "Amazon Macie", correct: true },
    { text: "AWS Identity and Access Management (IAM)", correct: false },
    { text: "Amazon CloudWatch", correct: false }
  ],
  explanation: "Amazon Macie helps discover and classify sensitive data stored in AWS."
},
{
  question: "A user has a stateful workload that will run on Amazon EC2 for the next 3 years. What is the MOST cost-effective pricing model for this workload?",
  answers: [
    { text: "On-Demand Instances", correct: false },
    { text: "Reserved Instances", correct: true },
    { text: "Dedicated Instances", correct: false },
    { text: "Spot Instances", correct: false }
  ],
  explanation: "Reserved Instances offer significant discounts compared to On-Demand pricing for long-term workloads."
},
{
  question: "Who enables encryption of data at rest for Amazon Elastic Block Store (Amazon EBS)?",
  answers: [
    { text: "AWS Support", correct: false },
    { text: "AWS customers", correct: true },
    { text: "AWS Key Management Service (AWS KMS)", correct: false },
    { text: "AWS Trusted Advisor", correct: false }
  ],
  explanation: "Customers must enable encryption for their EBS volumes using AWS KMS."
},
{
  question: "What can a user accomplish using AWS CloudTrail?",
  answers: [
    { text: "Generate an IAM user credentials report", correct: false },
    { text: "Record API calls made to AWS services", correct: true },
    { text: "Assess the compliance of AWS resource configurations with policies and guidelines", correct: false },
    { text: "Ensure that Amazon EC2 instances are patched with the latest security updates", correct: false }
  ],
  explanation: "AWS CloudTrail records API calls made to AWS services for governance and auditing."
},
{
  question: "A company is planning to host its workloads on AWS. Which AWS service requires the company to update and patch the guest operating system?",
  answers: [
    { text: "Amazon DynamoDB", correct: false },
    { text: "Amazon S3", correct: false },
    { text: "Amazon EC2", correct: true },
    { text: "Amazon Aurora", correct: false }
  ],
  explanation: "Amazon EC2 users are responsible for managing and patching their guest operating systems."
},
{
  question: "Which AWS service or feature will search for and identify AWS resources that are shared externally?",
  answers: [
    { text: "Amazon OpenSearch Service", correct: false },
    { text: "AWS Control Tower", correct: false },
    { text: "AWS IAM Access Analyzer", correct: true },
    { text: "AWS Fargate", correct: false }
  ],
  explanation: "AWS IAM Access Analyzer identifies resources that have policies allowing external access."
},
{
  question: "A company is migrating its workloads to the AWS Cloud. The company must retain full control of patch management for the guest operating systems that host its applications. Which AWS service should the company use to meet these requirements?",
  answers: [
    { text: "Amazon DynamoDB", correct: false },
    { text: "Amazon EC2", correct: true },
    { text: "AWS Lambda", correct: false },
    { text: "Amazon RDS", correct: false }
  ],
  explanation: "Using Amazon EC2 gives customers control over the operating system and patch management."
},
{
  question: "At what support level do users receive access to a support concierge?",
  answers: [
    { text: "Basic Support", correct: false },
    { text: "Developer Support", correct: false },
    { text: "Business Support", correct: false },
    { text: "Enterprise Support", correct: true }
  ],
  explanation: "Enterprise Support includes access to a support concierge for assistance."
},
{
  question: "Which AWS service can a company use to visually design and build serverless applications?",
  answers: [
    { text: "AWS Lambda", correct: false },
    { text: "AWS Batch", correct: false },
    { text: "AWS Application Composer", correct: true },
    { text: "AWS App Runner", correct: false }
  ],
  explanation: "AWS Application Composer helps design and build serverless applications visually."
},
{
  question: "A company wants to migrate to AWS and use the same security software it uses on-premises. The security software vendor offers its security software as a service on AWS. Where can the company purchase the security solution?",
  answers: [
    { text: "AWS Partner Solutions Finder", correct: false },
    { text: "AWS Support Center", correct: false },
    { text: "AWS Management Console", correct: false },
    { text: "AWS Marketplace", correct: true }
  ],
  explanation: "AWS Marketplace is where customers can purchase third-party software solutions offered on AWS."
},
{
  question: "A company has deployed an Amazon EC2 instance. Which option is an AWS responsibility under the AWS shared responsibility model?",
  answers: [
    { text: "Managing and encrypting application data", correct: false },
    { text: "Installing updates and security patches of guest operating system", correct: false },
    { text: "Configuration of infrastructure devices", correct: true },
    { text: "Configuration of security groups on each instance", correct: false }
  ],
  explanation: "AWS is responsible for the security of the underlying infrastructure, including configuration."
},
{
  question: "A company wants to migrate its PostgreSQL database to AWS. The company does not use the database frequently. Which AWS service or resource will meet these requirements with the LEAST management overhead?",
  answers: [
    { text: "PostgreSQL on Amazon EC2", correct: false },
    { text: "Amazon RDS for PostgreSQL", correct: false },
    { text: "Amazon Aurora PostgreSQL-Compatible Edition", correct: false },
    { text: "Amazon Aurora Serverless", correct: true }
  ],
  explanation: "Amazon Aurora Serverless offers the least management overhead with automatic scaling."
},
{
  question: "A company is using Amazon DynamoDB for its application database. Which tasks are the responsibility of AWS, according to the AWS shared responsibility model? (Choose two.)",
  answers: [
    { text: "Classify data", correct: false },
    { text: "Configure access permissions", correct: false },
    { text: "Provide public endpoints to store and retrieve data", correct: true },
    { text: "Manage the infrastructure layer and the operating system", correct: true }
  ],
  explanation: "AWS manages the infrastructure and provides endpoints for DynamoDB, while customers manage their data."
},
{
  question: "A company wants to create a globally accessible e-commerce platform for its customers. The company wants to use a highly available and scalable DNS web service to connect users to the platform. Which AWS service will meet these requirements?",
  answers: [
    { text: "Amazon EC2", correct: false },
    { text: "Amazon VPC", correct: false },
    { text: "Amazon Route 53", correct: true },
    { text: "Amazon RDS", correct: false }
  ],
  explanation: "Amazon Route 53 is a scalable DNS service suitable for globally accessible platforms."
},
{
  question: "Which maintenance task is the customer’s responsibility, according to the AWS shared responsibility model?",
  answers: [
    { text: "Physical connectivity among Availability Zones", correct: false },
    { text: "Network switch maintenance", correct: false },
    { text: "Hardware updates and firmware patches", correct: false },
    { text: "Amazon EC2 updates and security patches", correct: true }
  ],
  explanation: "Customers are responsible for managing updates and security patches for their EC2 instances."
},
{
  question: "A company wants to improve its security posture by reviewing user activity through API calls. Which AWS service will meet this requirement?",
  answers: [
    { text: "AWS WAF", correct: false },
    { text: "Amazon Detective", correct: false },
    { text: "Amazon CloudWatch", correct: false },
    { text: "AWS CloudTrail", correct: true }
  ],
  explanation: "AWS CloudTrail logs API activity, allowing users to review actions taken in their AWS account."
},
{
  question: "A company is migrating to the AWS Cloud and plans to run experimental workloads for 3 to 6 months on AWS. Which pricing model will meet these requirements?",
  answers: [
    { text: "Use Savings Plans for a 3-year term.", correct: false },
    { text: "Use Dedicated Hosts", correct: false },
    { text: "Buy Reserved Instances", correct: false },
    { text: "Use On-Demand Instances", correct: true }
  ],
  explanation: "On-Demand Instances are ideal for short-term experimental workloads with flexibility."
},
{
  question: "A company that has AWS Enterprise Support is launching a new version of a popular product in 2 months. The company expects a large increase in traffic to its website. The website is hosted on Amazon EC2 instances. Which action should the company take to assess its readiness to scale for this launch?",
  answers: [
    { text: "Replace the EC2 instances with AWS Lambda functions.", correct: false },
    { text: "Use AWS Infrastructure Event Management (IEM) support", correct: true },
    { text: "Submit a request on AWS Marketplace to monitor the event.", correct: false },
    { text: "Review the coverage reports in the AWS Cost Management console", correct: false }
  ],
  explanation: "AWS IEM provides guidance on scaling and operational support during significant events."
},
{
  question: "A company that has AWS Enterprise Support is launching a new version of a popular product in 2 months. The company expects a large increase in traffic to its website. The website is hosted on Amazon EC2 instances. Which action should the company take to assess its readiness to scale for this launch?",
  answers: [
    { text: "Replace the EC2 instances with AWS Lambda functions", correct: false },
    { text: "Use AWS Infrastructure Event Management (IEM) support", correct: true },
    { text: "Submit a request on AWS Marketplace to monitor the event", correct: false },
    { text: "Review the coverage reports in the AWS Cost Management console", correct: false }
  ],
  explanation: "Using AWS IEM will help assess scaling readiness for the expected traffic increase."
},
{
  question: "A company wants to launch multiple workloads on AWS. Each workload is related to a different business unit. The company wants to separate and track costs for each business unit. Which solution will meet these requirements with the LEAST operational overhead?",
  answers: [
    { text: "Use AWS Organizations and create one account for each business unit.", correct: true },
    { text: "Use a spreadsheet to control the owners and cost of each resource", correct: false },
    { text: "Use an Amazon DynamoDB table to record costs for each business unit", correct: false },
    { text: "Use the AWS Billing console to assign owners to resources and track costs", correct: false }
  ],
  explanation: "Using AWS Organizations allows for centralized management and tracking of costs with minimal overhead."
},
{
  question: "A company wants to launch multiple workloads on AWS. Each workload is related to a different business unit. The company wants to separate and track costs for each business unit. Which solution will meet these requirements with the LEAST operational overhead?",
  answers: [
    { text: "Use AWS Organizations and create one account for each business unit", correct: true },
    { text: "Use a spreadsheet to control the owners and cost of each resource", correct: false },
    { text: "Use an Amazon DynamoDB table to record costs for each business unit", correct: false },
    { text: "Use the AWS Billing console to assign owners to resources and track costs", correct: false }
  ],
  explanation: "AWS Organizations allows for easy cost separation and tracking with low operational overhead."
},
{
  question: "A company wants a time-series database service that makes it easier to store and analyze trillions of events each day. Which AWS service will meet this requirement?",
  answers: [
    { text: "Amazon Neptune", correct: false },
    { text: "Amazon Timestream", correct: true },
    { text: "Amazon Forecast", correct: false },
    { text: "Amazon DocumentDB (with MongoDB compatibility)", correct: false }
  ],
  explanation: "Amazon Timestream is designed for time-series data, allowing for efficient storage and analysis."
},
{
  question: "Which option is a shared control between AWS and the customer, according to the AWS shared responsibility model?",
  answers: [
    { text: "Configuration management", correct: true },
    { text: "Physical and environmental controls", correct: false },
    { text: "Data integrity authentication", correct: false },
    { text: "Identity and access management", correct: false }
  ],
  explanation: "Configuration management is a shared control where AWS manages infrastructure and customers manage their configurations."
},
{
  question: "A company often does not use all of its current Amazon EC2 capacity to run stateless workloads. The company wants to optimize its EC2 costs. Which EC2 instance type will meet these requirements?",
  answers: [
    { text: "Spot Instances", correct: true },
    { text: "Dedicated Instances", correct: false },
    { text: "Reserved Instances", correct: false },
    { text: "On-Demand Instances", correct: false }
  ],
  explanation: "Spot Instances are cost-effective for workloads that can tolerate interruptions."
},
{
  question: "A company wants to store data in Amazon S3. The company rarely access the data, and the data can be regenerated if necessary. The company wants to store the data in the most cost-effective storage class. Which S3 storage class will meet this requirement?",
  answers: [
    { text: "S3 Standard", correct: false },
    { text: "S3 Intelligent-Tiering", correct: false },
    { text: "S3 Standard-Infrequent Access (S3 Standard-IA)", correct: false },
    { text: "S3 One Zone-Infrequent Access (S3 One Zone-IA)", correct: true }
  ],
  explanation: "S3 One Zone-IA is a low-cost option for infrequently accessed data that can be regenerated."
},
{
  question: "A company has migrated its workloads to AWS. The company wants to adopt AWS at scale and operate more efficiently and securely. Which AWS service or framework should the company use for operational support?",
  answers: [
    { text: "AWS Support", correct: false },
    { text: "AWS Cloud Adoption Framework (AWS CAF)", correct: false },
    { text: "AWS Managed Services (AMS)", correct: false },
    { text: "AWS Well-Architected Framework", correct: true }
  ],
  explanation: "The AWS Well-Architected Framework helps organizations operate efficiently and securely in the cloud."
},
{
  question: "A company wants to provision and manage its AWS infrastructure by using the common programming languages Typescript, Python, Java, and .NET. Which AWS service will meet this requirement?",
  answers: [
    { text: "AWS CodeBuild", correct: false },
    { text: "AWS CloudFormation", correct: false },
    { text: "AWS CLI", correct: false },
    { text: "AWS Cloud Development Kit (AWS CDK)", correct: true }
  ],
  explanation: "AWS CDK allows developers to define their cloud resources using familiar programming languages."
},
{
  question: "Which Amazon EC2 pricing model provides the MOST cost savings for an always-up, right-sized database server running for a project that will last 1 year?",
  answers: [
    { text: "On-Demand Instances", correct: false },
    { text: "Convertible Reserved Instances", correct: true },
    { text: "Spot Instances", correct: false },
    { text: "Standard Reserved Instances", correct: false }
  ],
  explanation: "Convertible Reserved Instances provide significant savings for long-term commitments like a year."
},
{
  question: "A company has a physical tape library to store data backups. The tape library is running out of space. The company needs to extend the tape library's capacity to the AWS Cloud. Which AWS service should the company use to meet this requirement?",
  answers: [
    { text: "Amazon Elastic File System (Amazon EFS)", correct: false },
    { text: "Amazon Elastic Block Store (Amazon EBS)", correct: false },
    { text: "Amazon S3", correct: false },
    { text: "AWS Storage Gateway", correct: true }
  ],
  explanation: "AWS Storage Gateway integrates on-premises environments with cloud storage, allowing for scalable backup solutions."
},
{
  question: "A company is using the AWS Free Tier for several AWS services for an application. What will happen if the Free Tier usage period expires or if the application use exceeds the Free Tier usage limits?",
  answers: [
    { text: "The company will be charged the standard pay-as-you-go service rates for the usage that exceeds the Free Tier usage", correct: true },
    { text: "AWS Support will contact the company to set up standard service charges", correct: false },
    { text: "The company will be charged for the services it consumed during the Free Tier period, plus additional charges for service consumption after the Free Tier period", correct: false },
    { text: "The company's AWS account will be frozen and can be restarted after a payment plan is established.", correct: false }
  ],
  explanation: "Once the Free Tier expires or limits are exceeded, standard pay-as-you-go rates apply."
},
{
  question: "A company wants to monitor its workload performance. The company wants to ensure that the cloud services are delivered at a level that meets its business needs. Which AWS Cloud Adoption Framework (AWS CAF) perspective will meet these requirements?",
  answers: [
    { text: "Business", correct: true },
    { text: "Governance", correct: false },
    { text: "Platform", correct: false },
    { text: "Operations", correct: false }
  ],
  explanation: "The Business perspective in AWS CAF focuses on ensuring services meet business needs."
},
{
  question: "A company wants to migrate its applications to the AWS Cloud. The company plans to identify and prioritize any business transformation opportunities and evaluate its AWS Cloud readiness. Which AWS service or tool should the company use to meet these requirements?",
  answers: [
    { text: "AWS Cloud Adoption Framework (AWS CAF)", correct: true },
    { text: "AWS Managed Services (AMS)", correct: false },
    { text: "AWS Well-Architected Framework", correct: false },
    { text: "AWS Migration Hub", correct: false }
  ],
  explanation: "The AWS CAF helps organizations identify transformation opportunities and assess cloud readiness."
},
{
  question: "A company needs an AWS service that provides a clear baseline of what the company runs in its on-premises data centers. The company needs the projected cost to run its on-premises workloads in the AWS Cloud. What AWS service or tool will meet these requirements?",
  answers: [
    { text: "AWS Compute Optimizer", correct: false },
    { text: "AWS Cost Explorer", correct: false },
    { text: "AWS Systems Manager Agent (SSM Agent)", correct: false },
    { text: "Migration Evaluator", correct: true }
  ],
  explanation: "Migration Evaluator provides insights into on-premises workloads and their projected AWS costs."
},
{
  question: "A company acquired another corporation. The company now has two AWS accounts. Which AWS service or tool can the company use to consolidate the billing for these two accounts?",
  answers: [
    { text: "AWS Systems Manager", correct: false },
    { text: "AWS Organizations", correct: true },
    { text: "AWS License Manager", correct: false },
    { text: "Cost Explorer", correct: false }
  ],
  explanation: "AWS Organizations allows you to consolidate billing across multiple AWS accounts."
},
{
  question: "A company wants to set up its workloads to perform their intended functions and recover quickly from failure. Which pillar of the AWS Well-Architected Framework aligns with these goals?",
  answers: [
    { text: "Performance efficiency", correct: false },
    { text: "Sustainability", correct: false },
    { text: "Reliability", correct: true },
    { text: "Security", correct: false }
  ],
  explanation: "The reliability pillar focuses on ensuring workloads function as intended and can recover from failures."
},
{
  question: "Which of the following is a managed AWS service that is used specifically for extract, transform, and load (ETL) data?",
  answers: [
    { text: "Amazon Athena", correct: false },
    { text: "AWS Glue", correct: true },
    { text: "Amazon S3", correct: false },
    { text: "AWS Snowball Edge", correct: false }
  ],
  explanation: "AWS Glue is a fully managed ETL service designed for data transformation."
},
{
  question: "A company wants to migrate petabytes of data from its on-premises data center to AWS. The company does not want to use an internet connection to perform the migration. Which AWS service will meet these requirements?",
  answers: [
    { text: "AWS DataSync", correct: false },
    { text: "Amazon Connect", correct: false },
    { text: "AWS Snowmobile", correct: true },
    { text: "AWS Direct Connect", correct: false }
  ],
  explanation: "AWS Snowmobile is designed for exabyte-scale data transfer, ideal for large migrations without internet."
},
{
  question: "A company wants to receive alerts to monitor its overall operating costs for its AWS public cloud infrastructure. Which AWS offering will meet these requirements?",
  answers: [
    { text: "Amazon EventBridge", correct: false },
    { text: "Compute Savings Plans", correct: false },
    { text: "AWS Budgets", correct: true },
    { text: "Migration Evaluator", correct: false }
  ],
  explanation: "AWS Budgets allows you to set custom cost and usage budgets with alerts."
},
{
  question: "How does the AWS Enterprise Support Concierge team help users?",
  answers: [
    { text: "Supporting application development", correct: false },
    { text: "Providing architecture guidance", correct: false },
    { text: "Answering billing and account inquiries", correct: true },
    { text: "Answering questions regarding technical support cases", correct: false }
  ],
  explanation: "The Enterprise Support Concierge specializes in billing and account-related inquiries."
},
{
  question: "A company wants to run a simulation for 3 years without interruptions. Which Amazon EC2 instance purchasing option will meet these requirements MOST cost-effectively?",
  answers: [
    { text: "Spot Instances", correct: false },
    { text: "Reserved Instances", correct: true },
    { text: "Dedicated Hosts", correct: false },
    { text: "On-Demand Instances", correct: false }
  ],
  explanation: "Reserved Instances provide cost savings for long-term commitments like a 3-year simulation."
},
{
  question: "Which AWS service or resource can provide discounts on some AWS service costs in exchange for a spending commitment?",
  answers: [
    { text: "Amazon Detective", correct: false },
    { text: "AWS Pricing Calculator", correct: false },
    { text: "Savings Plans", correct: true },
    { text: "Basic Support", correct: false }
  ],
  explanation: "Savings Plans offer savings in exchange for a commitment to a certain level of usage."
},
{
  question: "Which of the following are pillars of the AWS Well-Architected Framework? (Choose two.)",
  answers: [
    { text: "High availability", correct: false },
    { text: "Performance efficiency", correct: true },
    { text: "Cost optimization", correct: true },
    { text: "Going global in minutes", correct: false }
  ],
  explanation: "Performance efficiency and cost optimization are key pillars of the AWS Well-Architected Framework."
},
{
  question: "A company wants to use Amazon EC2 instances to provide a static website to users all over the world. The company needs to minimize latency for the users. Which solution meets these requirements?",
  answers: [
    { text: "Use EC2 instances in multiple edge locations.", correct: false },
    { text: "Use EC2 instances in the same Availability Zone but in different AWS Regions", correct: false },
    { text: "Use Amazon CloudFront with the EC2 instances configured as the source", correct: true },
    { text: "Use EC2 instances in the same Availability Zone but in different AWS accounts", correct: false }
  ],
  explanation: "Amazon CloudFront reduces latency by caching content closer to users globally."
},
{
  question: "A team of researchers is going to collect data at remote locations around the world. Many locations do not have internet connectivity. The team needs to capture the data in the field, and transfer it to the AWS Cloud later. Which AWS service will support these requirements?",
  answers: [
    { text: "AWS Outposts", correct: false },
    { text: "AWS Transfer Family", correct: false },
    { text: "AWS Snow Family", correct: true },
    { text: "AWS Migration Hub", correct: false }
  ],
  explanation: "AWS Snow Family devices are designed to collect and transfer data when internet connectivity is unavailable."
},
{
  question: "Which of the following are benefits that a company receives when it moves an on-premises production workload to AWS? (Choose two.)",
  answers: [
    { text: "AWS trains the company's staff on the use of all the AWS services", correct: false },
    { text: "AWS manages all security in the cloud", correct: false },
    { text: "AWS offers free support from technical account managers (TAMs).", correct: true },
    { text: "AWS provides economies of scale", correct: true }
  ],
  explanation: "Companies benefit from economies of scale and support when moving workloads to AWS."
},
{
  question: "A company has decided to adopt Amazon EC2 infrastructure and wants to scale various stateless services for short-term usage. Which EC2 pricing model is MOST cost-efficient to meet these requirements?",
  answers: [
    { text: "Spot Instances", correct: true },
    { text: "On-Demand Instances", correct: false },
    { text: "Reserved Instances", correct: false },
    { text: "Dedicated Hosts", correct: false }
  ],
  explanation: "Spot Instances offer the best cost efficiency for short-term, variable workloads."
},
{
  question: "Which of the following are benefits of AWS Trusted Advisor? (Choose two.)",
  answers: [
    { text: "Access to Amazon Simple Queue Service (Amazon SQS)", correct: false },
    { text: "Cost optimization recommendations", correct: true },
    { text: "Hourly refresh of the service limit checks", correct: true },
    { text: "Security checks", correct: false }
  ],
  explanation: "AWS Trusted Advisor provides cost optimization and service limit checks to improve resource management."
},
{
  question: "A company wants to save costs by archiving data that is no longer frequently accessed by end users. Which Amazon S3 feature will meet this requirement?",
  answers: [
    { text: "S3 Versioning", correct: false },
    { text: "S3 Lifecycle", correct: true },
    { text: "S3 Object Lock", correct: false },
    { text: "S3 Inventory", correct: false }
  ],
  explanation: "S3 Lifecycle policies enable automatic transition of objects to lower-cost storage classes."
},
{
  question: "Which cloud computing advantage is a company applying when it uses AWS Regions to increase application availability to users in different countries?",
  answers: [
    { text: "Pay-as-you-go pricing", correct: false },
    { text: "Capacity forecasting", correct: false },
    { text: "Economies of scale", correct: false },
    { text: "Global reach", correct: true }
  ],
  explanation: "Using AWS Regions enhances global reach, providing availability to users across different geographical locations."
},
{
  question: "A company wants an AWS service to collect and process 10 TB of data locally and transfer the data to AWS. The company has intermittent connectivity. Which AWS service will meet these requirements?",
  answers: [
    { text: "AWS Database Migration Service (AWS DMS)", correct: false },
    { text: "AWS DataSync", correct: false },
    { text: "AWS Backup", correct: false },
    { text: "AWS Snowball Edge", correct: true }
  ],
  explanation: "AWS Snowball Edge allows data collection and transfer even with intermittent connectivity."
},
{
  question: "Which of the following is an AWS Well-Architected Framework design principle for operational excellence in the AWS Cloud?",
  answers: [
    { text: "Go global in minutes", correct: false },
    { text: "Make frequent, small, reversible changes", correct: true },
    { text: "Implement a strong foundation of identity and access management", correct: false },
    { text: "Stop spending money on hardware infrastructure for data center operations", correct: false }
  ],
  explanation: "Making frequent, small, reversible changes is a principle that supports operational excellence in the cloud."
},
{
  question: "What is a benefit of using AWS serverless computing?",
  answers: [
    { text: "Application deployment and management are not required", correct: false },
    { text: "Application security will be fully managed by AWS.", correct: false },
    { text: "Monitoring and logging are not needed", correct: false },
    { text: "Management of infrastructure is offloaded to AWS", correct: true }
  ],
  explanation: "Serverless computing offloads infrastructure management to AWS, allowing developers to focus on code."
},
{
  question: "A developer wants AWS users to access AWS services by using temporary security credentials. Which AWS service or feature should the developer use to provide these credentials?",
  answers: [
    { text: "IAM policies", correct: false },
    { text: "IAM user groups", correct: false },
    { text: "AWS Security Token Service (AWS STS)", correct: true },
    { text: "AWS IAM Identity Center (AWS Single Sign-On)", correct: false }
  ],
  explanation: "AWS STS allows for the generation of temporary, limited-privilege security credentials."
},
{
  question: "A global company wants to use a managed security service for protection from SQL injection attacks. The service also must provide detailed logging information about access to the company's ecommerce applications. Which AWS service will meet these requirements?",
  answers: [
    { text: "AWS Network Firewall", correct: false },
    { text: "Amazon RDS for SQL Server", correct: false },
    { text: "Amazon GuardDuty", correct: false },
    { text: "AWS WAF", correct: true }
  ],
  explanation: "With AWS WAF, you can create security rules that control bot traffic and block common attack patterns such as SQL injection or cross-site scripting (XSS)."
},
{
  question: "A company is migrating its on-premises server to an Amazon EC2 instance. The server must stay active at all times for the next 12 months. Which EC2 pricing option is the MOST cost-effective for the company's workload?",
  answers: [
    { text: "On-Demand", correct: false },
    { text: "Dedicated Hosts", correct: false },
    { text: "Spot Instances", correct: false },
    { text: "Reserved Instances", correct: true }
  ],
  explanation: ""
},
{
  question: "Which of the following is the customer's responsibility under the AWS shared responsibility model? (Choose two.)",
  answers: [
    { text: "Maintain the configuration of infrastructure devices", correct: false },
    { text: "Maintain patching and updates within the hardware infrastructure", correct: false },
    { text: "Maintain the configuration of guest operating systems and applications", correct: true },
    { text: "Manage decisions involving encryption options", correct: true }
  ],
  explanation: ""
},
{
  question: "A company wants to verify if multi-factor authentication (MFA) is enabled for all users within its AWS accounts. Which AWS service or resource will meet this requirement?",
  answers: [
    { text: "AWS Cost and Usage Report", correct: false },
    { text: "IAM credential reports", correct: true },
    { text: "AWS Artifact", correct: false },
    { text: "Amazon CloudFront reports", correct: false }
  ],
  explanation: "IAM credential reports provide a way to audit the status of all your IAM credentials, including the status of MFA devices."
},
{
  question: "A company uses AWS security services and tools. The company needs a service to help manage the security alerts and must organize the alerts into a single dashboard. Which AWS service should the company use to meet these requirements?",
  answers: [
    { text: "Amazon GuardDuty", correct: false },
    { text: "Amazon Inspector", correct: false },
    { text: "Amazon Macie", correct: false },
    { text: "AWS Security Hub", correct: true }
  ],
  explanation: "AWS Security Hub is a cloud security posture management service that automates best practice checks, aggregates alerts, and supports automated remediation."
},
{
  question: "A company wants to run its workloads in the AWS Cloud effectively, reduce management overhead, and improve processes. Which AWS Well-Architected Framework pillar represents these requirements?",
  answers: [
    { text: "Reliability", correct: false },
    { text: "Operational excellence", correct: true },
    { text: "Performance efficiency", correct: false },
    { text: "Cost optimization", correct: false }
  ],
  explanation: "The Operational Excellence pillar includes the ability to support development and run workloads effectively, gain insight into their operations, and to continuously improve supporting processes and procedures to deliver business value."
},
{
  question: "A company uses Amazon S3 to store records that can contain personally identifiable information (PII). The company wants a solution that can monitor all S3 buckets for PII and immediately alert staff about vulnerabilities. Which AWS service will meet these requirements?",
  answers: [
    { text: "Amazon GuardDuty", correct: false },
    { text: "Amazon Detective", correct: false },
    { text: "Amazon Macie", correct: true },
    { text: "AWS Shield", correct: false }
  ],
  explanation: "GuardDuty is more for logs, while Macie is more for PII."
},
{
  question: "Which AWS service allows users to download security and compliance reports about the AWS infrastructure on demand?",
  answers: [
    { text: "Amazon GuardDuty", correct: false },
    { text: "AWS Security Hub", correct: false },
    { text: "AWS Artifact", correct: true },
    { text: "AWS Shield", correct: false }
  ],
  explanation: ""
},
{
  question: "An external auditor has requested that a company provide a list of all its IAM users, including the status of users' credentials and access keys. What is the SIMPLEST way to provide this information?",
  answers: [
    { text: "Create an IAM user account for the auditor, granting the auditor administrator permissions", correct: false },
    { text: "Take a screenshot of each user's page in the AWS Management Console, then provide the screenshots to the auditor", correct: false },
    { text: "Download the IAM credential report, then provide the report to the auditor", correct: true },
    { text: "Download the AWS Trusted Advisor report, then provide the report to the auditor", correct: false }
  ],
  explanation: "The IAM credential report is a feature within AWS Identity and Access Management (IAM) that provides a way to audit the status of credentials for all IAM users in an AWS account."
},
{
  question: "Which task can a company perform by using security groups in the AWS Cloud?",
  answers: [
    { text: "Allow access to an Amazon EC2 instance through only a specific port.", correct: true },
    { text: "Deny access to malicious IP addresses at a subnet level", correct: false },
    { text: "Protect data that is cached by Amazon CloudFront.", correct: false },
    { text: "Apply a stateless firewall to an Amazon EC2 instance", correct: false }
  ],
  explanation: "Security groups in AWS are used to control inbound and outbound traffic to and from Amazon EC2 instances."
},
{
  question: "A company plans to run a compute-intensive workload that uses graphics processing units (GPUs). Which Amazon EC2 instance type should the company use?",
  answers: [
    { text: "Accelerated computing", correct: true },
    { text: "Compute optimized", correct: false },
    { text: "Storage optimized", correct: false },
    { text: "General purpose", correct: false }
  ],
  explanation: "Accelerated computing instances are made to work with graphic intensive workloads."
},
{
  question: "Which of the following are features of network ACLs as they are used in the AWS Cloud? (Choose two.)",
  answers: [
    { text: "They are stateless", correct: true },
    { text: "They are stateful", correct: false },
    { text: "They evaluate all rules before allowing traffic.", correct: false },
    { text: "They process rules in order, starting with the lowest numbered rule, when deciding whether to allow traffic", correct: true }
  ],
  explanation: "NACLs are stateless, which means that information about previously sent or received traffic is not saved."
},
{
  question: "Which capabilities are in the platform perspective of the AWS Cloud Adoption Framework (AWS CAF)? (Choose two.)",
  answers: [
    { text: "Performance and capacity management", correct: false },
    { text: "Data engineering", correct: true },
    { text: "Continuous integration and continuous delivery (CI/CD)", correct: true },
    { text: "Infrastructure protection", correct: false }
  ],
  explanation: ""
},
{
  question: "According to the AWS shared responsibility model, the customer is responsible for applying the latest security updates and patches for which of the following?",
  answers: [
    { text: "Amazon DynamoDB", correct: false },
    { text: "Amazon EC2 instances", correct: true },
    { text: "Amazon RDS instances", correct: false },
    { text: "Amazon S3", correct: false }
  ],
  explanation: ""
},
{
  question: "Which Amazon S3 storage class is MOST cost-effective for unknown access patterns?",
  answers: [
    { text: "S3 Standard", correct: false },
    { text: "S3 Standard-Infrequent Access (S3 Standard-IA)", correct: false },
    { text: "S3 One Zone-Infrequent Access (S3 One Zone-IA)", correct: false },
    { text: "S3 Intelligent-Tiering", correct: true }
  ],
  explanation: "S3 Intelligent-Tiering is the ideal storage class for data with unknown, changing, or unpredictable access patterns."
},
{
  question: "A company has a managed IAM policy that does not grant the necessary permissions for users to accomplish required tasks. How can this be resolved?",
  answers: [
    { text: "Enable AWS Shield Advanced", correct: false },
    { text: "Create a custom IAM policy", correct: true },
    { text: "Use a third-party web application firewall (WAF) managed rule from the AWS Marketplace", correct: false },
    { text: "Use AWS Key Management Service (AWS KMS) to create a customer-managed key", correct: false }
  ],
  explanation: "Creating a custom IAM policy allows you to define and specify the exact permissions and access controls needed by your users."
},
{
  question: "Who is responsible for managing IAM user access and secret keys according to the AWS shared responsibility model?",
  answers: [
    { text: "IAM access and secret keys are static, so there is no need to rotate them", correct: false },
    { text: "The customer is responsible for rotating keys", correct: true },
    { text: "AWS will rotate the keys whenever required", correct: false },
    { text: "The AWS Support team will rotate keys when requested by the customer", correct: false }
  ],
  explanation: "The customer is responsible for rotating their keys."
},
{
  question: "A company needs to run a pre-installed third-party firewall on an Amazon EC2 instance. Which AWS service or feature can provide this solution?",
  answers: [
    { text: "Network ACLs", correct: false },
    { text: "Security groups", correct: false },
    { text: "AWS Marketplace", correct: true },
    { text: "AWS Trusted Advisor", correct: false }
  ],
  explanation: "AWS Marketplace is a digital catalog that includes thousands of software listings from independent software vendors."
},
{
  question: "Which AWS Cloud benefit gives a company the ability to quickly deploy cloud resources to access compute, storage, and database infrastructures in a matter of minutes?",
  answers: [
    { text: "Elasticity", correct: false },
    { text: "Cost savings", correct: false },
    { text: "Agility", correct: true },
    { text: "Reliability", correct: false }
  ],
  explanation: "Agility in cloud computing refers to the ability to quickly develop, test, and launch applications."
},
{
  question: "Which of the following is entirely the responsibility of AWS, according to the AWS shared responsibility model?",
  answers: [
    { text: "Security awareness and training", correct: false },
    { text: "Development of an IAM password policy", correct: false },
    { text: "Patching of the guest operating system", correct: false },
    { text: "Physical and environmental controls", correct: true }
  ],
  explanation: "AWS is responsible for the protection of the physical infrastructure and environment of its data centers."
},
{
  question: "Which of the following is a characteristic of the AWS account root user?",
  answers: [
    { text: "The root user is the only user that can be configured with multi-factor authentication (MFA).", correct: false },
    { text: "The root user is the only user that can access the AWS Management Console", correct: false },
    { text: "The root user is the first sign-in identity that is available when an AWS account is created", correct: true },
    { text: "The root user has a password that cannot be changed", correct: false }
  ],
  explanation: "The root user is the first sign-in identity that is available when an AWS account is created."
},
{
  question: "An Amazon EC2 instance previously used for development is inaccessible and no longer appears in the AWS Management Console. Which AWS service should be used to determine what action made this EC2 instance inaccessible?",
  answers: [
    { text: "Amazon CloudWatch Logs", correct: false },
    { text: "AWS Security Hub", correct: false },
    { text: "Amazon Inspector", correct: false },
    { text: "AWS CloudTrail", correct: true }
  ],
  explanation: "AWS CloudTrail is the service that records API calls and related events made on your AWS account."
},
{
  question: "A company's application developers need to quickly provision and manage AWS services by using scripts. Which AWS offering should the developers use to meet these requirements?",
  answers: [
    { text: "AWS CLI", correct: true },
    { text: "AWS CodeBuild", correct: false },
    { text: "AWS Cloud Adoption Framework (AWS CAF)", correct: false },
    { text: "AWS Systems Manager Session Manager", correct: false }
  ],
  explanation: "The AWS CLI is a command-line tool provided by AWS that allows developers and administrators to interact with AWS services directly from the command line."
},
{
  question: "A company wants to migrate unstructured data to AWS. The data needs to be securely moved with inflight encryption and end-to-end data validation. Which AWS service will meet these requirements?",
  answers: [
    { text: "AWS Application Migration Service", correct: false },
    { text: "Amazon Elastic File System (Amazon EFS)", correct: false },
    { text: "AWS DataSync", correct: true },
    { text: "AWS Migration Hub", correct: false }
  ],
  explanation: "AWS DataSync is designed for securely transferring large amounts of data between on-premises storage and AWS."
},
{
  question: "A development team wants to deploy multiple test environments for an application in a fast, repeatable manner. Which AWS service should the team use?",
  answers: [
    { text: "Amazon EC2", correct: false },
    { text: "AWS CloudFormation", correct: true },
    { text: "Amazon QuickSight", correct: false },
    { text: "Amazon Elastic Container Service (Amazon ECS)", correct: false }
  ],
  explanation: "CloudFormation will allow you to use infrastructure as code and enable fast, repeatable deployments."
},
{
  question: "A company wants to quickly implement a continuous integration/continuous delivery (CI/CD) pipeline. Which AWS service will meet this requirement?",
  answers: [
    { text: "AWS Config", correct: false },
    { text: "Amazon Cognito", correct: false },
    { text: "AWS DataSync", correct: false },
    { text: "AWS CodeStar", correct: true }
  ],
  explanation: "AWS CodeStar is a fully managed service that makes it easy to develop, build, and deploy applications on AWS."
},
{
  question: "Which AWS Cloud deployment model uses AWS Outposts as part of the application deployment infrastructure?",
  answers: [
    { text: "On-premises", correct: false },
    { text: "Serverless", correct: false },
    { text: "Cloud-native", correct: false },
    { text: "Hybrid", correct: true }
  ],
  explanation: "A hybrid cloud environment blends on-premises infrastructure with cloud resources."
},
{
  question: "Which of the following is a fully managed graph database service on AWS?",
  answers: [
    { text: "Amazon Aurora", correct: false },
    { text: "Amazon FSx", correct: false },
    { text: "Amazon DynamoDB", correct: false },
    { text: "Amazon Neptune", correct: true }
  ],
  explanation: "Amazon Neptune is a fast, reliable, fully managed graph database service."
},
{
  question: "Which AWS service could an administrator use to provide desktop environments for several employees?",
  answers: [
    { text: "AWS Organizations", correct: false },
    { text: "AWS Fargate", correct: false },
    { text: "AWS WAF", correct: false },
    { text: "AWS WorkSpaces", correct: true }
  ],
  explanation: "AWS WorkSpaces is a fully managed desktop computing service in the cloud. It allows administrators to provision and manage desktop environments for users, providing them with a secure and scalable solution for accessing their desktops from various devices."
},
{
  question: "Which AWS service or feature gives users the ability to capture information about network traffic in a VPC?",
  answers: [
    { text: "VPC Flow Logs", correct: true },
    { text: "Amazon Inspector", correct: false },
    { text: "VPC route tables", correct: false },
    { text: "AWS CloudTrail", correct: false }
  ],
  explanation: "VPC Flow Logs is a feature that enables you to capture information about the IP traffic going to and from network interfaces in your VPC."
},
{
  question: "Which type of AWS storage is ephemeral and is deleted when an Amazon EC2 instance is stopped or terminated?",
  answers: [
    { text: "Amazon Elastic Block Store (Amazon EBS)", correct: false },
    { text: "Amazon EC2 instance store", correct: true },
    { text: "Amazon Elastic File System (Amazon EFS)", correct: false },
    { text: "Amazon S3", correct: false }
  ],
  explanation: "Amazon EC2 instance store provides temporary block-level storage that is directly attached to the Amazon EC2 instance. It is referred to as 'ephemeral' because the data stored in the instance store volumes is not persistent and is deleted when the EC2 instance is stopped or terminated."
},
{
  question: "A company wants to provide access to Windows file shares in AWS from its on-premises workloads. The company does not want to provision any additional infrastructure or applications in its data center. Which AWS service will meet these requirements?",
  answers: [
    { text: "Amazon FSx File Gateway", correct: true },
    { text: "AWS DataSync", correct: false },
    { text: "Amazon S3", correct: false },
    { text: "AWS Snow Family", correct: false }
  ],
  explanation: "Amazon FSx File Gateway is a service that enables on-premises access to file data stored in Amazon FSx for Windows File Server, allowing access without provisioning additional infrastructure."
},
{
  question: "A company wants durable storage for static content and infinitely scalable data storage infrastructure at the lowest cost. Which AWS service should the company choose?",
  answers: [
    { text: "Amazon Elastic Block Store (Amazon EBS)", correct: false },
    { text: "Amazon S3", correct: true },
    { text: "AWS Storage Gateway", correct: false },
    { text: "Amazon Elastic File System (Amazon EFS)", correct: false }
  ],
  explanation: "Amazon S3 (Simple Storage Service) is a fully managed object storage service that provides durable storage for static content, designed for scalability and low-latency access."
},
{
  question: "An ecommerce company wants to use Amazon EC2 Auto Scaling to add and remove EC2 instances based on CPU utilization. Which AWS service or feature can initiate an Amazon EC2 Auto Scaling action to achieve this goal?",
  answers: [
    { text: "Amazon Simple Queue Service (Amazon SQS)", correct: false },
    { text: "Amazon Simple Notification Service (Amazon SNS)", correct: false },
    { text: "AWS Systems Manager", correct: false },
    { text: "Amazon CloudWatch alarm", correct: true }
  ],
  explanation: "Amazon CloudWatch alarms can monitor CPU utilization and trigger Auto Scaling actions to add or remove EC2 instances based on defined thresholds."
},
{
  question: "A company wants to transform its workforce by attracting and developing a digitally fluent high-performance workforce. Which AWS Cloud Adoption Framework (AWS CAF) perspective will meet these requirements?",
  answers: [
    { text: "Business", correct: false },
    { text: "People", correct: true },
    { text: "Platform", correct: false },
    { text: "Operations", correct: false }
  ],
  explanation: "The 'People' perspective in AWS CAF focuses on workforce transformation, including attracting and developing a diverse and inclusive workforce with the right mix of skills."
},
{
  question: "A company wants to move its on-premises databases to managed cloud database services by using a simplified migration process. Which AWS service or tool can help the company meet this requirement?",
  answers: [
    { text: "AWS Storage Gateway", correct: false },
    { text: "AWS Application Migration Service", correct: false },
    { text: "AWS DataSync", correct: false },
    { text: "AWS Database Migration Service (AWS DMS)", correct: true }
  ],
  explanation: "AWS Database Migration Service (DMS) is designed to help migrate on-premises databases to managed cloud database services in a simplified manner."
},
{
  question: "A company needs a fully managed file server that natively supports Microsoft workloads and file systems. Which AWS service should the company use to meet these requirements?",
  answers: [
    { text: "Amazon Elastic File System (Amazon EFS)", correct: false },
    { text: "Amazon FSx for Lustre", correct: false },
    { text: "Amazon FSx for Windows File Server", correct: true },
    { text: "Amazon Elastic Block Store (Amazon EBS)", correct: false }
  ],
  explanation: "Amazon FSx for Windows File Server provides a fully managed file server that supports Microsoft workloads and the SMB protocol."
},
{
  question: "A company has been storing monthly reports in an Amazon S3 bucket. The company exports the report data into comma-separated values (.csv) files. A developer wants to write a simple query that can read all of these files and generate a summary report. Which AWS service or feature should the developer use to meet these requirements with the LEAST amount of operational overhead?",
  answers: [
    { text: "Amazon S3 Select", correct: false },
    { text: "Amazon Athena", correct: true },
    { text: "Amazon Redshift", correct: false },
    { text: "Amazon EC2", correct: false }
  ],
  explanation: "Amazon Athena is a serverless query service that allows you to analyze data directly in Amazon S3 using standard SQL without managing infrastructure."
},
{
  question: "Which AWS feature provides a no-cost platform for AWS users to join community groups, ask questions, find answers, and read community-generated articles about best practices?",
  answers: [
    { text: "AWS Knowledge Center", correct: false },
    { text: "AWS re:Post", correct: true },
    { text: "AWS IQ", correct: false },
    { text: "AWS Enterprise Support", correct: false }
  ],
  explanation: "AWS re:Post is a no-cost platform for AWS users to engage with the community, ask questions, and share best practices."
},
{
  question: "A company needs to search for text in documents that are stored in Amazon S3. Which AWS service will meet these requirements?",
  answers: [
    { text: "Amazon Kendra", correct: true },
    { text: "Amazon Rekognition", correct: false },
    { text: "Amazon Polly", correct: false },
    { text: "Amazon Lex", correct: false }
  ],
  explanation: "Amazon Kendra is designed for intelligent search capabilities and allows searching for text in documents stored in Amazon S3."
},
{
  question: "Which AWS services make use of global edge locations? (Choose two.)",
  answers: [
    { text: "AWS Fargate", correct: false },
    { text: "Amazon CloudFront", correct: true },
    { text: "AWS Global Accelerator", correct: true },
    { text: "AWS Wavelength", correct: false }
  ],
  explanation: "Amazon CloudFront and AWS Global Accelerator utilize global edge locations to optimize performance and reduce latency."
},
{
  question: "A user needs a relational database but does not have the resources to manage the hardware, resiliency, and replication. Which AWS service option meets the user's requirements?",
  answers: [
    { text: "Run MySQL on Amazon Elastic Container Service (Amazon ECS).", correct: false },
    { text: "Run MySQL on Amazon EC2", correct: false },
    { text: "Choose Amazon RDS for MySQL", correct: true },
    { text: "Choose Amazon ElastiCache for Redis", correct: false }
  ],
  explanation: "Amazon RDS for MySQL is a fully managed service that handles database management tasks such as provisioning, setup, patching, and backups."
},
{
  question: "A company needs to deploy applications in the AWS Cloud as quickly as possible. The company also needs to minimize the complexity that is related to the management of AWS resources. Which AWS service should the company use to meet these requirements?",
  answers: [
    { text: "AWS Config", correct: false },
    { text: "AWS Elastic Beanstalk", correct: true },
    { text: "Amazon EC2", correct: false },
    { text: "Amazon Personalize", correct: false }
  ],
  explanation: "AWS Elastic Beanstalk is a fully managed service that simplifies application deployment and management on AWS."
},
{
  question: "Which mechanism allows developers to access AWS services from application code?",
  answers: [
    { text: "AWS Software Development Kit", correct: true },
    { text: "AWS Management Console", correct: false },
    { text: "AWS CodePipeline", correct: false },
    { text: "AWS Config", correct: false }
  ],
  explanation: "The AWS Software Development Kit (SDK) allows developers to programmatically access AWS services from application code."
},
{
  question: "A company is migrating to the AWS Cloud. The company wants to understand and identify potential security misconfigurations or unexpected behaviors. Which AWS Cloud Adoption Framework (AWS CAF) security perspective capability will meet these requirements?",
  answers: [
    { text: "Identity and access management", correct: false },
    { text: "Threat detection", correct: true },
    { text: "Platform engineering", correct: false },
    { text: "Availability and continuity management", correct: false }
  ],
  explanation: "The 'Threat detection' capability focuses on understanding potential security misconfigurations and unexpected behaviors."
},
{
  question: "A company wants to establish a private network connection between AWS and its corporate network. Which AWS service or feature will meet this requirement?",
  answers: [
    { text: "Amazon Connect", correct: false },
    { text: "Amazon Route 53", correct: false },
    { text: "AWS Direct Connect", correct: true },
    { text: "VPC peering", correct: false }
  ],
  explanation: "AWS Direct Connect allows for a dedicated network connection between a corporate network and an Amazon VPC."
},
{
  question: "Which AWS services or features give users the ability to create a network connection between two VPCs? (Choose two.)",
  answers: [
    { text: "VPC endpoints", correct: false },
    { text: "Amazon Route 53", correct: false },
    { text: "VPC peering", correct: true },
    { text: "AWS Transit Gateway", correct: true }
  ],
  explanation: "VPC peering and AWS Transit Gateway allow for creating network connections between two VPCs."
},
{
  question: "Which AWS service converts text to lifelike voices?",
  answers: [
    { text: "Amazon Transcribe", correct: false },
    { text: "Amazon Rekognition", correct: false },
    { text: "Amazon Polly", correct: true },
    { text: "Amazon Textract", correct: false }
  ],
  explanation: "Amazon Polly is the service that converts text to speech, providing lifelike voices for applications."
},
{
  question: "A company wants to use application stacks to run a workload in the AWS Cloud. The company wants to use pre-configured instances. Which AWS service will meet these requirements?",
  answers: [
    { text: "Amazon Lightsail", correct: true },
    { text: "Amazon Athena", correct: false },
    { text: "AWS Outposts", correct: false },
    { text: "Amazon EC2", correct: false }
  ],
  explanation: "Amazon Lightsail provides pre-configured instances to deploy application stacks, such as LAMP, easily."
},
{
  question: "Which AWS services are supported by Savings Plans? (Choose two.)",
  answers: [
    { text: "Amazon EC2", correct: true },
    { text: "Amazon RDS", correct: false },
    { text: "Amazon SageMaker", correct: true },
    { text: "Amazon Redshift", correct: false }
  ],
  explanation: "Savings Plans support various compute services, including Amazon EC2 and Amazon SageMaker."
},
{
  question: "Which AWS service or tool can provide rightsizing recommendations for Amazon EC2 resources at no additional cost?",
  answers: [
    { text: "AWS Well-Architected Tool", correct: false },
    { text: "Amazon CloudWatch", correct: false },
    { text: "AWS Cost Explorer", correct: true },
    { text: "Amazon S3 analytics", correct: false }
  ],
  explanation: "AWS Cost Explorer can provide insights and rightsizing recommendations for EC2 resources."
},
{
  question: "A company operates a petabyte-scale data warehouse to analyze its data. The company wants a solution that will not require manual hardware and software management. Which AWS service will meet these requirements?",
  answers: [
    { text: "Amazon DocumentDB (with MongoDB compatibility)", correct: false },
    { text: "Amazon Redshift", correct: true },
    { text: "Amazon Neptune", correct: false },
    { text: "Amazon ElastiCache", correct: false }
  ],
  explanation: "Amazon Redshift is a fully managed petabyte-scale data warehouse, handling all hardware and software management."
},
{
  question: "A library wants to automate the classification of electronic books based on the contents of the books. Which AWS service should the library use to meet this requirement?",
  answers: [
    { text: "Amazon Redshift", correct: false },
    { text: "Amazon CloudSearch", correct: false },
    { text: "Amazon Comprehend", correct: true },
    { text: "Amazon Aurora", correct: false }
  ],
  explanation: "Amazon Comprehend provides natural language processing capabilities for text classification and analysis."
},
{
  question: "Which task is a responsibility of AWS, according to the AWS shared responsibility model?",
  answers: [
    { text: "Encryption of application data", correct: false },
    { text: "Authentication of application users", correct: false },
    { text: "Protection of physical network infrastructure", correct: true },
    { text: "Configuration of firewalls", correct: false }
  ],
  explanation: "AWS is responsible for the security of the cloud, including the protection of the physical network infrastructure."
},
{
  question: "Which options are AWS Cloud Adoption Framework (AWS CAF) cloud transformation journey recommendations? (Choose two.)",
  answers: [
    { text: "Envision phase", correct: true },
    { text: "Align phase", correct: true },
    { text: "Assess phase", correct: false },
    { text: "Mobilize phase", correct: false }
  ],
  explanation: "The Envision and Align phases are key recommendations in the AWS Cloud Adoption Framework."
},
{
  question: "A company wants to generate a list of IAM users. The company also wants to view the status of various credentials that are associated with the users, such as password, access keys, and multi-factor authentication (MFA) devices. Which AWS service or feature will meet these requirements?",
  answers: [
    { text: "IAM credential report", correct: true },
    { text: "AWS IAM Identity Center (AWS Single Sign-On)", correct: false },
    { text: "AWS Identity and Access Management Access Analyzer", correct: false },
    { text: "AWS Cost and Usage Report", correct: false }
  ],
  explanation: "The IAM credential report provides a list of users and their associated credential statuses."
},
{
  question: "A company is designing its AWS workloads so that components can be updated regularly and so that changes can be made in small, reversible increments. Which pillar of the AWS Well-Architected Framework does this design support?",
  answers: [
    { text: "Security", correct: false },
    { text: "Performance efficiency", correct: false },
    { text: "Operational excellence", correct: true },
    { text: "Reliability", correct: false }
  ],
  explanation: "This design supports the Operational Excellence pillar, focusing on improving processes and procedures."
},
{
  question: "A company wants to track tags, buckets, and prefixes for its Amazon S3 objects. Which S3 feature will meet this requirement?",
  answers: [
    { text: "S3 Inventory report", correct: true },
    { text: "S3 Lifecycle", correct: false },
    { text: "S3 Versioning", correct: false },
    { text: "S3 ACLs", correct: false }
  ],
  explanation: "The S3 Inventory report helps keep track of objects and their respective tags, buckets, and prefixes."
},
{
  question: "A company wants to allow users to authenticate and authorize multiple AWS accounts by using a single set of credentials. Which AWS service or resource will meet this requirement?",
  answers: [
    { text: "AWS Organizations", correct: false },
    { text: "IAM user", correct: false },
    { text: "AWS IAM Identity Center (AWS Single Sign-On)", correct: true },
    { text: "AWS Control Tower", correct: false }
  ],
  explanation: "AWS IAM Identity Center (SSO) provides centralized authentication across multiple AWS accounts."
},
{
  question: "A company created an Amazon EC2 instance. The company wants to control the incoming and outgoing network traffic at the instance level. Which AWS resource or service will meet this requirement?",
  answers: [
    { text: "AWS Shield", correct: false },
    { text: "Security groups", correct: true },
    { text: "Network Access Analyzer", correct: false },
    { text: "VPC endpoints", correct: false }
  ],
  explanation: "Security Groups are used to control inbound and outbound traffic at the instance level."
},
{
  question: "A company wants to use the AWS Cloud to deploy an application globally. Which architecture deployment model should the company use to meet this requirement?",
  answers: [
    { text: "Multi-Region", correct: true },
    { text: "Single-Region", correct: false },
    { text: "Multi-AZ", correct: false },
    { text: "Single-AZ", correct: false }
  ],
  explanation: "A Multi-Region deployment model distributes the application across different AWS regions for global availability."
},
{
  question: "A company wants a web application to interact with various AWS services. Which AWS service or resource will meet this requirement?",
  answers: [
    { text: "AWS CloudShell", correct: false },
    { text: "AWS Marketplace", correct: false },
    { text: "AWS Management Console", correct: false },
    { text: "AWS CLI", correct: true }
  ],
  explanation: "The AWS CLI allows you to interact with AWS services programmatically from the command line."
},
{
  question: "A company is migrating its applications from on-premises to the AWS Cloud. The company wants to ensure that the applications are assigned only the minimum permissions that are needed to perform all operations. Which AWS service will meet these requirements?",
  answers: [
    { text: "AWS Identity and Access Management (IAM)", correct: true },
    { text: "Amazon CloudWatch", correct: false },
    { text: "Amazon Macie", correct: false },
    { text: "Amazon GuardDuty", correct: false }
  ],
  explanation: "AWS IAM enables the management of permissions and ensures that applications follow the principle of least privilege."
},
{
  question: "Which options are AWS Cloud Adoption Framework (AWS CAF) governance perspective capabilities? (Choose two.)",
  answers: [
    { text: "Identity and access management", correct: false },
    { text: "Cloud financial management", correct: true },
    { text: "Application portfolio management", correct: true },
    { text: "Innovation management", correct: false }
  ],
  explanation: "Cloud Financial Management and Application Portfolio Management are key capabilities in the Governance perspective of AWS CAF."
},
{
  question: "Which AWS service provides a single location to track the progress of application migrations?",
  answers: [
    { text: "AWS Application Discovery Service", correct: false },
    { text: "AWS Application Migration Service", correct: false },
    { text: "AWS Service Catalog", correct: false },
    { text: "AWS Migration Hub", correct: true }
  ],
  explanation: "AWS Migration Hub provides a central place to monitor the progress of application migrations."
},
{
  question: "A company launched an Amazon EC2 instance with the latest Amazon Linux 2 Amazon Machine Image (AMI). Which actions can a system administrator take to connect to the EC2 instance? (Choose two.)",
  answers: [
    { text: "Use Amazon EC2 Instance Connect", correct: true },
    { text: "Use a Remote Desktop Protocol (RDP) connection", correct: false },
    { text: "Use AWS Batch", correct: false },
    { text: "Use AWS Systems Manager Session Manager", correct: true }
  ],
  explanation: "You can connect to an EC2 instance using Amazon EC2 Instance Connect or AWS Systems Manager Session Manager."
},
{
  question: "Which architecture concept describes the ability to deploy resources on demand and release resources when they are no longer needed?",
  answers: [
    { text: "High availability", correct: false },
    { text: "Decoupled architecture", correct: false },
    { text: "Resilience", correct: false },
    { text: "Elasticity", correct: true }
  ],
  explanation: "Elasticity refers to the ability to automatically adjust resources based on demand."
},
{
  question: "Which task requires a user to sign in as the AWS account root user?",
  answers: [
    { text: "The deletion of IAM users", correct: false },
    { text: "The deletion of an AWS account", correct: true },
    { text: "The creation of an organization in AWS Organizations", correct: false },
    { text: "The deletion of Amazon EC2 instances", correct: false }
  ],
  explanation: "Only the root user can delete an AWS account."
},
{
  question: "What does the Amazon S3 Intelligent-Tiering storage class offer?",
  answers: [
    { text: "Payment flexibility by reserving storage capacity", correct: false },
    { text: "Long-term retention of data by copying the data to an encrypted Amazon Elastic Block Store (Amazon EBS) volume", correct: false },
    { text: "Automatic cost savings by moving objects between tiers based on access pattern changes", correct: true },
    { text: "Secure, durable, and lowest cost storage for data archival", correct: false }
  ],
  explanation: "S3 Intelligent-Tiering automatically saves costs by moving objects between access tiers as needed."
},
{
  question: "A company needs Amazon EC2 instances for a workload that can tolerate interruptions. Which EC2 instance purchasing option meets this requirement with the LARGEST discount compared to On-Demand prices?",
  answers: [
    { text: "Spot Instances", correct: true },
    { text: "Convertible Reserved Instances", correct: false },
    { text: "Standard Reserved Instances", correct: false },
    { text: "Dedicated Hosts", correct: false }
  ],
  explanation: "Spot Instances offer the largest discount compared to On-Demand prices for interruptible workloads."
},
{
  question: "A company is planning to migrate to the AWS Cloud. The company wants to identify measurable business outcomes that will explain the value of the company's decision to migrate. Which phase of the cloud transformation journey includes these activities?",
  answers: [
    { text: "Envision", correct: true },
    { text: "Align", correct: false },
    { text: "Scale", correct: false },
    { text: "Launch", correct: false }
  ],
  explanation: "The Envision phase focuses on identifying transformation opportunities and measurable business outcomes."
},
{
  question: "Which AWS service or component allows inbound traffic from the internet to access a VPC?",
  answers: [
    { text: "Internet gateway", correct: true },
    { text: "NAT gateway", correct: false },
    { text: "AWS WAF", correct: false },
    { text: "VPC peering", correct: false }
  ],
  explanation: "An Internet gateway enables inbound internet traffic to reach resources in a VPC."
},
{
  question: "Which AWS service can companies use to create infrastructure from code?",
  answers: [
    { text: "Amazon Elastic Kubernetes Service (Amazon EKS)", correct: false },
    { text: "AWS Outposts", correct: false },
    { text: "AWS CodePipeline", correct: false },
    { text: "AWS CloudFormation", correct: true }
  ],
  explanation: "AWS CloudFormation allows users to define and provision AWS infrastructure as code."
},
{
  question: "Which guideline is a well-architected design principle for building cloud applications?",
  answers: [
    { text: "Keep static data closer to compute resources", correct: false },
    { text: "Provision resources for peak capacity", correct: false },
    { text: "Design for automated recovery from failure", correct: true },
    { text: "Use tightly coupled components", correct: false }
  ],
  explanation: "Designing for automated recovery from failure is a key principle for resilient cloud architectures."
},
{
  question: "A company needs to move 75 petabytes of data from its on-premises data centers to AWS. Which AWS service should the company use to meet these requirements MOST cost-effectively?",
  answers: [
    { text: "AWS Snowball Edge Storage Optimized", correct: false },
    { text: "AWS Snowmobile", correct: true },
    { text: "AWS Direct Connect", correct: false },
    { text: "AWS Storage Gateway", correct: false }
  ],
  explanation: "AWS Snowmobile is designed for large-scale data transfers, making it the most cost-effective solution."
},
{
  question: "Which of the following are pillars of the AWS Well-Architected Framework? (Choose two.)",
  answers: [
    { text: "Resource scalability", correct: false },
    { text: "Performance efficiency", correct: true },
    { text: "System elasticity", correct: false },
    { text: "Operational excellence", correct: true }
  ],
  explanation: "Performance Efficiency and Operational Excellence are two of the six pillars of the AWS Well-Architected Framework."
},
{
  question: "A company needs to connect its on-premises data center to the AWS Cloud. The company needs a dedicated, low-latency connection with consistent network performance. Which AWS service will meet these requirements?",
  answers: [
    { text: "AWS Global Accelerator", correct: false },
    { text: "Amazon CloudFront", correct: false },
    { text: "AWS Direct Connect", correct: true },
    { text: "AWS Managed VPN", correct: false }
  ],
  explanation: "AWS Direct Connect provides a dedicated, low-latency connection to AWS from an on-premises environment."
},
{
  question: "Which design principles should a company apply to AWS Cloud workloads to maximize sustainability and minimize environmental impact? (Choose two.)",
  answers: [
    { text: "Maximize utilization of Amazon EC2 instances", correct: true },
    { text: "Minimize utilization of Amazon EC2 instances", correct: false },
    { text: "Minimize usage of managed services.", correct: false },
    { text: "Reduce the need for users to reinstall applications.", correct: true }
  ],
  explanation: "Maximizing resource utilization and reducing unnecessary reinstallation are principles for sustainability in the cloud."
},
{
  question: "In which ways does the AWS Cloud offer lower total cost of ownership (TCO) of computing resources than on-premises data centers? (Choose two.)",
  answers: [
    { text: "AWS replaces upfront capital expenditures with pay-as-you-go costs", correct: true },
    { text: "AWS is designed for high availability, which eliminates user downtime", correct: false },
    { text: "AWS eliminates the need for on-premises IT staff", correct: false },
    { text: "AWS uses economies of scale to continually reduce prices.", correct: true }
  ],
  explanation: "AWS reduces TCO through pay-as-you-go pricing and economies of scale, lowering costs over time."
},
{
  question: "A company wants to deploy some of its resources in the AWS Cloud. To meet regulatory requirements, the data must remain local and on premises. There must be low latency between AWS and the company resources. Which AWS service or feature can be used to meet these requirements?",
  answers: [
    { text: "AWS Local Zones", correct: false },
    { text: "Availability Zones", correct: false },
    { text: "AWS Outposts", correct: true },
    { text: "AWS Wavelength Zones", correct: false }
  ],
  explanation: "AWS Outposts provide a hybrid solution that meets regulatory requirements while ensuring low latency."
},
{
  question: "Which of the following AWS services are serverless? (Choose two.)",
  answers: [
    { text: "AWS Outposts", correct: false },
    { text: "Amazon EC2", correct: false },
    { text: "AWS Fargate", correct: true },
    { text: "AWS Lambda", correct: true }
  ],
  explanation: "AWS Fargate and AWS Lambda are serverless services that allow you to run applications without managing servers."
},
{
  question: "When a user wants to utilize their existing per-socket, per-core, or per-virtual machine software licenses for a Microsoft Windows server running on AWS, which Amazon EC2 instance type is required?",
  answers: [
    { text: "Spot Instances", correct: false },
    { text: "Dedicated Instances", correct: false },
    { text: "Dedicated Hosts", correct: true },
    { text: "Reserved Instances", correct: false }
  ],
  explanation: "Dedicated Hosts allow users to use existing software licenses for Windows servers on AWS."
},
{
  question: "A solutions architect needs to maintain a fleet of Amazon EC2 instances so that any impaired instances are replaced with new ones. Which AWS service should the solutions architect use?",
  answers: [
    { text: "Amazon Elastic Container Service (Amazon ECS)", correct: false },
    { text: "Amazon GuardDuty", correct: false },
    { text: "AWS Shield", correct: false },
    { text: "AWS Auto Scaling", correct: true }
  ],
  explanation: "AWS Auto Scaling automatically replaces impaired EC2 instances to maintain the desired fleet size."
},
{
  question: "Which AWS service provides on-premises applications with low-latency access to data that is stored in the AWS Cloud?",
  answers: [
    { text: "Amazon CloudFront", correct: false },
    { text: "AWS Storage Gateway", correct: true },
    { text: "AWS Backup", correct: false },
    { text: "AWS DataSync", correct: false }
  ],
  explanation: "AWS Storage Gateway allows on-premises applications to access AWS Cloud storage with low latency."
},
{
  question: "What does Amazon CloudFront provide?",
  answers: [
    { text: "Automatic scaling for all resources to power an application from a single unified interface", correct: false },
    { text: "Secure delivery of data, videos, applications, and APIs to users globally with low latency", correct: true },
    { text: "Ability to directly manage traffic globally through a variety of routing types, including latency-based routing, geo DNS, geoproximity, and weighted round robin", correct: false },
    { text: "Automatic distribution of incoming application traffic across multiple targets, such as Amazon EC2 instances, containers, IP addresses, and AWS Lambda functions", correct: false }
  ],
  explanation: "Amazon CloudFront is a content delivery network (CDN) that provides secure, low-latency delivery of content."
},
{
  question: "Which AWS service supports the deployment and management of applications in the AWS Cloud?",
  answers: [
    { text: "Amazon CodeGuru", correct: false },
    { text: "AWS Fargate", correct: false },
    { text: "AWS CodeCommit", correct: false },
    { text: "AWS Elastic Beanstalk", correct: true }
  ],
  explanation: "AWS Elastic Beanstalk enables easy deployment and management of applications in the AWS Cloud."
},
{
  question: "A company wants to integrate natural language processing (NLP) into business intelligence (BI) dashboards. The company wants to ask questions and receive answers with relevant visualizations. Which AWS service or tool will meet these requirements?",
  answers: [
    { text: "Amazon Macie", correct: false },
    { text: "Amazon Rekognition", correct: false },
    { text: "Amazon QuickSight Q", correct: true },
    { text: "Amazon Lex", correct: false }
  ],
  explanation: "Amazon QuickSight Q allows users to query data using natural language and receive visualizations."
},
{
  question: "Which Amazon S3 feature or storage class uses the AWS backbone network and edge locations to reduce latencies from the end user to Amazon S3?",
  answers: [
    { text: "S3 Cross-Region Replication", correct: false },
    { text: "S3 Transfer Acceleration", correct: true },
    { text: "S3 Event Notifications", correct: false },
    { text: "S3 Standard-Infrequent Access (S3 Standard-IA)", correct: false }
  ],
  explanation: "S3 Transfer Acceleration speeds up transfers by routing through AWS's global network."
},
{
  question: "Which AWS service provides the ability to host a NoSQL database in the AWS Cloud?",
  answers: [
    { text: "Amazon Aurora", correct: false },
    { text: "Amazon DynamoDB", correct: true },
    { text: "Amazon RDS", correct: false },
    { text: "Amazon Redshift", correct: false }
  ],
  explanation: "Amazon DynamoDB is a fully managed NoSQL database service provided by AWS."
},
{
  question: "Which AWS service is a relational database compatible with MySQL and PostgreSQL?",
  answers: [
    { text: "Amazon Redshift", correct: false },
    { text: "Amazon DynamoDB", correct: false },
    { text: "Amazon Aurora", correct: true },
    { text: "Amazon Neptune", correct: false }
  ],
  explanation: "Amazon Aurora is compatible with MySQL and PostgreSQL and offers enhanced performance."
},
{
  question: "Which architecture design principle describes the need to isolate failures between dependent components in the AWS Cloud?",
  answers: [
    { text: "Use a monolithic design", correct: false },
    { text: "Design for automation", correct: false },
    { text: "Design for single points of failure", correct: false },
    { text: "Loosely couple components", correct: true }
  ],
  explanation: "Loosely coupling components helps isolate failures in microservices architectures."
},
{
  question: "Which benefit of cloud computing gives a company the ability to deploy applications to users all over the world through a network of AWS Regions, Availability Zones, and edge locations?",
  answers: [
    { text: "Economy of scale", correct: false },
    { text: "Global reach", correct: true },
    { text: "Agility", correct: false },
    { text: "High availability", correct: false }
  ],
  explanation: "Global reach allows companies to deploy applications closer to users for reduced latency."
},
{
  question: "Which AWS service makes it easier to monitor and troubleshoot application logs and cloud resources?",
  answers: [
    { text: "Amazon EC2", correct: false },
    { text: "AWS Identity and Access Management (IAM)", correct: false },
    { text: "Amazon CloudWatch", correct: true },
    { text: "AWS CloudTrail", correct: false }
  ],
  explanation: "Amazon CloudWatch provides monitoring for AWS resources and applications."
},
{
  question: "Which AWS service uses AWS Compute Optimizer to provide sizing recommendations based on workload metrics?",
  answers: [
    { text: "Amazon EC2", correct: true },
    { text: "Amazon RDS", correct: false },
    { text: "Amazon Lightsail", correct: false },
    { text: "AWS Step Functions", correct: false }
  ],
  explanation: "AWS Compute Optimizer gives recommendations for EC2 instance types based on usage metrics."
},
{
  question: "Which AWS service will help a company plan a migration to AWS by collecting the configuration, usage, and behavior data of on-premises data centers?",
  answers: [
    { text: "AWS Resource Groups", correct: false },
    { text: "AWS Application Discovery Service", correct: true },
    { text: "AWS Service Catalog", correct: false },
    { text: "AWS Systems Manager", correct: false }
  ],
  explanation: "AWS Application Discovery Service collects data to aid in migration planning."
},
{
  question: "Which AWS service uses a combination of publishers and subscribers?",
  answers: [
    { text: "AWS Lambda", correct: false },
    { text: "Amazon Simple Notification Service (Amazon SNS)", correct: true },
    { text: "Amazon CloudWatch", correct: false },
    { text: "AWS CloudFormation", correct: false }
  ],
  explanation: "Amazon SNS enables pub/sub messaging for application integration."
},
{
  question: "A company is in the early stages of planning a migration to AWS. The company wants to obtain the monthly predicted total AWS cost of ownership for future Amazon EC2 instances and associated storage. Which AWS service or tool should the company use to meet these requirements?",
  answers: [
    { text: "AWS Pricing Calculator", correct: true },
    { text: "AWS Compute Optimizer", correct: false },
    { text: "AWS Trusted Advisor", correct: false },
    { text: "AWS Application Migration Service", correct: false }
  ],
  explanation: "AWS Pricing Calculator helps estimate the total cost of AWS resources based on expected usage."
},
{
  question: "Which AWS service or tool will monitor AWS resources and applications in real time?",
  answers: [
    { text: "AWS Trusted Advisor", correct: false },
    { text: "Amazon CloudWatch", correct: true },
    { text: "AWS CloudTrail", correct: false },
    { text: "AWS Cost Explorer", correct: false }
  ],
  explanation: "Amazon CloudWatch monitors AWS resources and applications in real time."
},
{
  question: "Which AWS Cloud Adoption Framework (AWS CAF) capability belongs to the business perspective?",
  answers: [
    { text: "Program and project management", correct: true },
    { text: "Data science", correct: false },
    { text: "Observability", correct: false },
    { text: "Change and release management", correct: false }
  ],
  explanation: "Program and project management is a key capability under the business perspective of AWS CAF."
},
{
  question: "Which AWS resource can help a company reduce its costs in exchange for a usage commitment when using Amazon EC2 instances?",
  answers: [
    { text: "Compute Savings Plans", correct: true },
    { text: "Auto Scaling group", correct: false },
    { text: "On-Demand Instance", correct: false },
    { text: "EC2 instance store", correct: false }
  ],
  explanation: "Compute Savings Plans offer cost reductions for committing to usage over a specified term."
},
{
  question: "Which perspective in the AWS Cloud Adoption Framework (AWS CAF) includes a capability for well-designed data and analytics architecture?",
  answers: [
    { text: "Security", correct: false },
    { text: "Governance", correct: false },
    { text: "Operations", correct: false },
    { text: "Platform", correct: true }
  ],
  explanation: "The Platform perspective of AWS CAF emphasizes data and analytics architecture."
},
{
  question: "Which options are AWS Cloud Adoption Framework (AWS CAF) people perspective capabilities? (Choose two.)",
  answers: [
    { text: "Organizational alignment", correct: true },
    { text: "Portfolio management", correct: false },
    { text: "Organization design", correct: true },
    { text: "Risk management", correct: false }
  ],
  explanation: "Organizational alignment and organization design are capabilities within the people perspective."
},
{
  question: "A company needs a bridge between technology and business to help evolve to a culture of continuous growth and learning. Which perspective in the AWS Cloud Adoption Framework (AWS CAF) serves as this bridge?",
  answers: [
    { text: "People", correct: true },
    { text: "Governance", correct: false },
    { text: "Operations", correct: false },
    { text: "Security", correct: false }
  ],
  explanation: "The People perspective acts as a bridge for cultural transformation in organizations."
},
{
  question: "Which option is a responsibility of AWS under the AWS shared responsibility model?",
  answers: [
    { text: "Application data security", correct: false },
    { text: "Patch management for applications that run on Amazon EC2 instances", correct: false },
    { text: "Patch management of the underlying infrastructure for managed services", correct: true },
    { text: "Application identity and access management", correct: false }
  ],
  explanation: "AWS is responsible for patch management of the underlying infrastructure for managed services."
},
{
  question: "Which AWS service or resource can identify and provide reports on IAM resources in one AWS account that is shared with another AWS account?",
  answers: [
    { text: "IAM credential report", correct: false },
    { text: "AWS IAM Identity Center (AWS Single Sign-On)", correct: false },
    { text: "AWS Identity and Access Management Access Analyzer", correct: true },
    { text: "Amazon Cognito user pool", correct: false }
  ],
  explanation: "AWS IAM Access Analyzer helps identify shared IAM resources across accounts."
},
{
  question: "Which AWS Well-Architected Framework pillar focuses on structured and streamlined allocation of computing resources?",
  answers: [
    { text: "Reliability", correct: false },
    { text: "Operational excellence", correct: false },
    { text: "Performance efficiency", correct: true },
    { text: "Sustainability", correct: false }
  ],
  explanation: "The Performance Efficiency pillar focuses on the optimal allocation and management of computing resources."
},
{
  question: "Which AWS Cloud Adoption Framework (AWS CAF) capabilities belong to the governance perspective? (Choose two.)",
  answers: [
    { text: "Program and project management", correct: true },
    { text: "Product management", correct: false },
    { text: "Portfolio management", correct: true },
    { text: "Risk management", correct: true }
  ],
  explanation: "The governance perspective includes capabilities like program and project management and portfolio management."
},
{
  question: "A company wants to use AWS Managed Services (AMS) for operational support and wants to understand the scope of AMS. Which AMS feature will meet these requirements?",
  answers: [
    { text: "Landing zone and network management", correct: true },
    { text: "Customer application development", correct: false },
    { text: "DevSecOps pipeline configuration", correct: false },
    { text: "Application log monitoring", correct: false }
  ],
  explanation: "Landing zone and network management is a key feature of AWS Managed Services."
},
{
  question: "A company wants to migrate its on-premises NoSQL workload to Amazon DynamoDB. Which AWS service will meet this requirement?",
  answers: [
    { text: "AWS Migration Hub", correct: false },
    { text: "AWS Database Migration Service (AWS DMS)", correct: true },
    { text: "Migration Evaluator", correct: false },
    { text: "AWS Application Migration Service", correct: false }
  ],
  explanation: "AWS Database Migration Service (AWS DMS) is designed for migrating databases, including NoSQL workloads."
},
{
  question: "A company is in the process of finding correct Amazon EC2 instance types and sizes to meet its performance and capacity requirements. The company wants to find the lowest possible cost. Which option accurately characterizes the company's actions?",
  answers: [
    { text: "Auto Scaling", correct: false },
    { text: "Storage tiering", correct: false },
    { text: "Rightsizing", correct: true },
    { text: "Instance scheduling", correct: false }
  ],
  explanation: "Rightsizing involves optimizing resource allocation to ensure cost-effectiveness while meeting performance needs."
},
{
  question: "A company wants to manage sign-in security for workforce users. The company needs to create workforce users and centrally manage their access across all the company's AWS accounts and applications. Which AWS service will meet these requirements?",
  answers: [
    { text: "AWS Audit Manager", correct: false },
    { text: "Amazon Cognito", correct: false },
    { text: "AWS Security Hub", correct: false },
    { text: "AWS IAM Identity Center (AWS Single Sign-On)", correct: true }
  ],
  explanation: "AWS IAM Identity Center allows for centralized identity and access management across multiple AWS accounts."
},
{
  question: "A company wants a report that lists the status of multi-factor authentication (MFA) devices that all users in the company's AWS account use. Which AWS feature or service will meet this requirement?",
  answers: [
    { text: "AWS Cost and Usage Reports", correct: false },
    { text: "IAM credential reports", correct: true },
    { text: "Detailed Billing Reports", correct: false },
    { text: "AWS Cost Explorer reports", correct: false }
  ],
  explanation: "IAM credential reports provide a detailed overview of MFA device statuses for users in an AWS account."
},
{
  question: "A company wants to use machine learning capabilities to analyze log data from its Amazon EC2 instances and efficiently conduct security investigations. Which AWS service will meet these requirements?",
  answers: [
    { text: "Amazon Inspector", correct: false },
    { text: "Amazon QuickSight", correct: false },
    { text: "Amazon Detective", correct: true },
    { text: "Amazon GuardDuty", correct: false }
  ],
  explanation: "Amazon Detective is designed for analyzing and investigating security data, making it suitable for this use case."
},
{
  question: "A company is launching a mobile app in the AWS Cloud. The company wants the app's users to sign in through social media identity providers (IdPs). Which AWS service will meet this requirement?",
  answers: [
    { text: "AWS Lambda", correct: false },
    { text: "Amazon Cognito", correct: true },
    { text: "AWS Secrets Manager", correct: false },
    { text: "Amazon CloudFront", correct: false }
  ],
  explanation: "Amazon Cognito enables user authentication through social media identity providers."
},
{
  question: "Which complimentary AWS service or tool creates data-driven business cases for cloud planning?",
  answers: [
    { text: "Migration Evaluator", correct: true },
    { text: "AWS Billing Conductor", correct: false },
    { text: "AWS Billing Console", correct: false },
    { text: "Amazon Forecast", correct: false }
  ],
  explanation: "Migration Evaluator helps create business cases for cloud migrations based on data analysis."
},
{
  question: "Which cloud concept is demonstrated by using AWS Cost Explorer?",
  answers: [
    { text: "Rightsizing", correct: true },
    { text: "Reliability", correct: false },
    { text: "Resilience", correct: false },
    { text: "Modernization", correct: false }
  ],
  explanation: "AWS Cost Explorer helps users analyze and optimize costs, reflecting the rightsizing concept."
},
{
  question: "A company wants to deploy a non-containerized Java-based web application on AWS. The company wants to use a managed service to quickly deploy the application. The company wants the service to automatically provision capacity, load balance, scale, and monitor application health. Which AWS service will meet these requirements?",
  answers: [
    { text: "Amazon Elastic Container Service (Amazon ECS)", correct: false },
    { text: "AWS Lambda", correct: false },
    { text: "Amazon Elastic Kubernetes Service (Amazon EKS)", correct: false },
    { text: "AWS Elastic Beanstalk", correct: true }
  ],
  explanation: "AWS Elastic Beanstalk automates the deployment and management of web applications, including Java-based apps."
},
{
  question: "Which AWS service or tool gives users the ability to connect with AWS and deploy resources programmatically?",
  answers: [
    { text: "Amazon QuickSight", correct: false },
    { text: "AWS PrivateLink", correct: false },
    { text: "AWS Direct Connect", correct: false },
    { text: "AWS SDKs", correct: true }
  ],
  explanation: "AWS SDKs provide the tools needed to connect to AWS services and manage resources programmatically."
},
{
  question: "A company has deployed a web application to Amazon EC2 instances. The EC2 instances have low usage. Which AWS service or feature should the company use to rightsize the EC2 instances?",
  answers: [
    { text: "AWS Config", correct: false },
    { text: "AWS Cost Anomaly Detection", correct: false },
    { text: "AWS Budgets", correct: false },
    { text: "AWS Compute Optimizer", correct: true }
  ],
  explanation: "AWS Compute Optimizer analyzes resource utilization and provides recommendations for rightsizing EC2 instances."
},
{
  question: "A company wants to define a central data protection policy that works across AWS services for compute, storage, and database resources. Which AWS service will meet this requirement?",
  answers: [
    { text: "AWS Batch", correct: false },
    { text: "AWS Elastic Disaster Recovery", correct: false },
    { text: "AWS Backup", correct: true },
    { text: "Amazon FSx", correct: false }
  ],
  explanation: "AWS Backup provides a centralized way to manage data protection across various AWS services."
},
{
  question: "A company needs to categorize and track AWS usage cost based on business categories. Which AWS service or feature should the company use to meet these requirements?",
  answers: [
    { text: "Cost allocation tags", correct: true },
    { text: "AWS Organizations", correct: false },
    { text: "AWS Security Hub", correct: false },
    { text: "AWS Cost and Usage Report", correct: false }
  ],
  explanation: "Cost allocation tags enable users to categorize and track AWS costs based on defined categories."
},
{
  question: "Which AWS service can migrate data between AWS storage services?",
  answers: [
    { text: "AWS DataSync", correct: true },
    { text: "AWS Direct Connect", correct: false },
    { text: "AWS Lake Formation", correct: false },
    { text: "Amazon S3", correct: false }
  ],
  explanation: "AWS DataSync simplifies data transfer between AWS storage services."
},
{
  question: "Which statements represent the cost-effectiveness of the AWS Cloud? (Choose two.)",
  answers: [
    { text: "Users can trade fixed expenses for variable expenses", correct: true },
    { text: "Users can deploy all over the world in minutes", correct: false },
    { text: "AWS offers increased speed and agility", correct: false },
    { text: "Users benefit from economies of scale", correct: true }
  ],
  explanation: "Users can convert fixed costs to variable costs and benefit from economies of scale in AWS."
},
{
  question: "A company wants to design its cloud architecture so that it can support development innovations, and continuously improve processes and procedures. This is an example of which pillar of the AWS Well-Architected Framework?",
  answers: [
    { text: "Security", correct: false },
    { text: "Performance efficiency", correct: false },
    { text: "Operational excellence", correct: true },
    { text: "Reliability", correct: false }
  ],
  explanation: "Operational excellence focuses on supporting continuous improvement and innovation."
},
{
  question: "A company needs to consolidate the billing for multiple AWS accounts. The company needs to use one account to pay on behalf of all the other accounts. Which AWS service or tool should the company use to meet this requirement?",
  answers: [
    { text: "AWS Trusted Advisor", correct: false },
    { text: "AWS Organizations", correct: true },
    { text: "AWS Budgets", correct: false },
    { text: "AWS Service Catalog", correct: false }
  ],
  explanation: "AWS Organizations allows for consolidated billing across multiple accounts."
},
{
  question: "A company is moving some of its on-premises IT services to the AWS Cloud. The finance department wants to see the entire bill so it can forecast spending limits. Which AWS service can the company use to set spending limits and receive notifications if those limits are exceeded?",
  answers: [
    { text: "AWS Cost and Usage Reports", correct: false },
    { text: "AWS Budgets", correct: true },
    { text: "AWS Organizations consolidated billing", correct: false },
    { text: "Cost Explorer", correct: false }
  ],
  explanation: "AWS Budgets allows users to set spending limits and receive alerts when those limits are approached or exceeded."
},
{
  question: "Which AWS Support plans provide access to an AWS technical account manager (TAM)? (Choose two.)",
  answers: [
    { text: "AWS Basic Support", correct: false },
    { text: "AWS Developer Support", correct: false },
    { text: "AWS Enterprise On-Ramp Support", correct: true },
    { text: "AWS Enterprise Support", correct: true }
  ],
  explanation: "AWS Enterprise On-Ramp and Enterprise Support plans provide access to a technical account manager."
},
{
  question: "Where can users find examples of AWS Cloud solution designs?",
  answers: [
    { text: "AWS Marketplace", correct: false },
    { text: "AWS Service Catalog", correct: false },
    { text: "AWS Architecture Center", correct: true },
    { text: "AWS Trusted Advisor", correct: false }
  ],
  explanation: "The AWS Architecture Center provides numerous examples of cloud solution designs."
},
{
  question: "Which task is the responsibility of a company that is using Amazon RDS?",
  answers: [
    { text: "Provision the underlying infrastructure", correct: false },
    { text: "Create IAM policies to control administrative access to the service", correct: true },
    { text: "Install the cables to connect the hardware for compute and storage", correct: false },
    { text: "Install and patch the RDS operating system", correct: false }
  ],
  explanation: "Creating IAM policies for managing access is a responsibility of the company using Amazon RDS."
},
{
  question: "Which of the following is an advantage that the AWS Cloud provides to users?",
  answers: [
    { text: "Users eliminate the need to guess about infrastructure capacity requirements", correct: true },
    { text: "Users decrease their variable costs by maintaining sole ownership of IT hardware.", correct: false },
    { text: "Users maintain control of underlying IT infrastructure hardware.", correct: false },
    { text: "Users maintain control of operating systems for managed services.", correct: false }
  ],
  explanation: "AWS Cloud allows users to avoid the uncertainties of capacity planning."
},
{
  question: "Which feature of Amazon RDS provides the ability to automatically create a primary database instance and to synchronously replicate data to an instance in another Availability Zone?",
  answers: [
    { text: "Read replicas", correct: false },
    { text: "Blue/green deployment", correct: false },
    { text: "Multi-AZ deployment", correct: true },
    { text: "Reserved Instances", correct: false }
  ],
  explanation: "Multi-AZ deployment ensures high availability and disaster recovery by synchronously replicating data."
},
{
  question: "A company needs to check for IAM access keys that have not been rotated recently. Which AWS service should the company use to meet this requirement?",
  answers: [
    { text: "AWS WAF", correct: false },
    { text: "AWS Shield", correct: false },
    { text: "Amazon Cognito", correct: false },
    { text: "AWS Trusted Advisor", correct: true }
  ],
  explanation: "AWS Trusted Advisor provides insights on IAM access keys, including their rotation status."
},
{
  question: "A company runs many Amazon EC2 instances in its VPC. The company wants to use a native AWS security resource to control network traffic between certain EC2 instances. Which AWS service or feature will meet this requirement?",
  answers: [
    { text: "Network ACLs", correct: false },
    { text: "AWS WAF", correct: false },
    { text: "Amazon GuardDuty", correct: false },
    { text: "Security groups", correct: true }
  ],
  explanation: "Security groups act as virtual firewalls to control network traffic to and from EC2 instances."
},
{
  question: "Which of the following can be components of a VPC in the AWS Cloud? (Choose two.)",
  answers: [
    { text: "Amazon API Gateway", correct: false },
    { text: "Amazon S3 buckets and objects", correct: false },
    { text: "Subnet", correct: true },
    { text: "Internet gateway", correct: true }
  ],
  explanation: "Subnets and internet gateways are essential components of a VPC in AWS."
},
{
  question: "A company is building a new application on AWS. The company needs the application to remain available if an individual application component fails. Which design principle should the company use to meet this requirement?",
  answers: [
    { text: "Disposable resources", correct: false },
    { text: "Automation", correct: false },
    { text: "Rightsizing", correct: false },
    { text: "Loose coupling", correct: true }
  ],
  explanation: "Loose coupling allows application components to fail independently without affecting the overall application availability."
},























,
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
];
