export const questions = [
  {
    question:
      "A company plans to use an Amazon Snowball Edge device to transfer files to the AWS Cloud. Which activities related to a Snowball Edge device are available to the company at no cost?",
    answers: [
      {
        text: "Use of the Snowball Edge appliance for a 10-day period",
        correct: false,
      },
      {
        text: "The transfer of data out of Amazon S3 and to the Snowball Edge appliance",
        correct: false,
      },
      {
        text: "The transfer of data from the Snowball Edge appliance into Amazon S3",
        correct: true,
      },
      {
        text: "Daily use of the Snowball Edge appliance after 10 days",
        correct: false,
      },
    ],
    explanation:
      "The transfer of data from a Snowball Edge appliance into Amazon S3 is included at no extra cost. It's a beneficial feature that simplifies large data migrations by avoiding network charges typically associated with high-volume data transfer in the cloud. This allows cost-effective data handling while taking advantage of AWS's scalable storage solution.",
  },
  {
    question:
      "A company has deployed applications on Amazon EC2 instances. The company needs to assess application vulnerabilities and must identify infrastructure deployments that do not meet best practices. Which AWS service can the company use to meet these requirements?",
    answers: [
      { text: "AWS Trusted Advisor", correct: false },
      { text: "Amazon Inspector", correct: true },
      { text: "AWS Config", correct: false },
      { text: "Amazon GuardDuty", correct: false },
    ],
    explanation:
      "Amazon Inspector is a great choice for assessing vulnerabilities within AWS EC2 instances and verifying application configurations against established best practices. This service performs automated security assessments to help uncover potential security or compliance issues with AWS applications. It's particularly useful for identifying weaknesses before they can be exploited in a live environment. Remember, Inspector is focused specifically on security state assessment and compliance of AWS resources, which directly aligns with the company's needs described in the question.",
  },
  {
    question:
      "A company has a centralized group of users with large file storage requirements that have exceeded the space available on premises. The company wants to extend its file storage capabilities for this group while retaining the performance benefit of sharing content locally. What is the MOST operationally efficient AWS solution for this scenario?",
    answers: [
      {
        text: "Create an Amazon S3 bucket for each user. Mount each bucket by using an S3 file system mounting utility.",
        correct: false,
      },
      {
        text: "Configure and deploy an AWS Storage Gateway file gateway. Connect each user's workstation to the file gateway.",
        correct: true,
      },
      {
        text: "Move each user's working environment to Amazon WorkSpaces. Set up an Amazon WorkDocs account for each user.",
        correct: false,
      },
      {
        text: "Deploy an Amazon EC2 instance and attach an Amazon Elastic Block Store (Amazon EBS) Provisioned IOPS volume. Share the EBS volume directly with the users.",
        correct: false,
      },
    ],
    explanation:
      "AWS Storage Gateway, configured as a file gateway, provides an efficient hybrid storage solution that can extend on-premises file storage into the cloud while retaining local performance benefits for sharing content. This setup supports a seamless integration between on-site user environments and AWS's scalable cloud storage, making it the most operationally efficient choice for companies needing to expand their storage capabilities without sacrificing local access speeds.",
  },
  {
    question:
      "According to security best practices, how should an Amazon EC2 instance be given access to an Amazon S3 bucket?",
    answers: [
      {
        text: "Hard code an IAM user's secret key and access key directly in the application, and upload the file.",
        correct: false,
      },
      {
        text: "Store the IAM user's secret key and access key in a text file on the EC2 instance, read the keys, then upload the file.",
        correct: false,
      },
      {
        text: "Have the EC2 instance assume a role to obtain the privileges to upload the file.",
        correct: true,
      },
      {
        text: "Modify the S3 bucket policy so that any service can upload to it at any time.",
        correct: false,
      },
    ],
    explanation:
      "Getting your EC2 instance to assume a role for accessing an S3 bucket. This method leverages IAM roles, providing temporary permissions which are a safer bet than having any fixed access keys lying around. It keeps your setup tidy by adhering to the principle of least privilege—each part of your system only has the permissions necessary to function, nothing more. Plus, it nixes the risk of exposing sensitive long-term credentials. Remember, security isn't just a feature; it's a backbone for trust and integrity in your systems!",
  },
  {
    question:
      "Which option is a customer responsibility when using Amazon DynamoDB under the AWS Shared Responsibility Model?",
    answers: [
      { text: "Physical security of DynamoDB", correct: false },
      { text: "Patching of DynamoDB", correct: false },
      { text: "Access to DynamoDB tables", correct: true },
      { text: "Encryption of data at rest in DynamoDB", correct: false },
    ],
    explanation:
      "Absolutely spot on! Within the framework of the AWS Shared Responsibility Model, while AWS handles the grunt work around the physical aspects and security of the service itself such as encryption and patching, it's squarely on you, the user, to manage who gets to do what on your DynamoDB tables. So yep, managing access to those tables is your ballpark. Makes sense, right? You wouldn't want just anyone snooping through your data!",
  },
  {
    question:
      "Which option is a perspective that includes foundational capabilities of the AWS Cloud Adoption Framework (AWS CAF)?",
    answers: [
      { text: "Sustainability", correct: false },
      { text: "Performance efficiency", correct: false },
      { text: "Governance", correct: true },
      { text: "Reliability", correct: false },
    ],
    explanation: `The "Governance" perspective indeed remains a foundational component of the AWS Cloud Adoption Framework (CAF). While a few users suggested updates or referenced changes to AWS documentation, the governance aspect continues to primarily handle an organization's strategy and investment priorities, aligning IT resources and measuring their use within cloud environments effectively. It's crucial as a baseline for businesses to develop a structured approach toward cloud adoption, ensuring regulations, compliance, and risk management align with business outcomes.`,
  },
  {
    question:
      "A company is running and managing its own Docker environment on Amazon EC2 instances. The company wants an alternative to help manage cluster size, scheduling, and environment maintenance. Which AWS service meets these requirements?",
    answers: [
      { text: "AWS Lambda", correct: false },
      { text: "Amazon RDS", correct: false },
      { text: "AWS Fargate", correct: true },
      { text: "Amazon Athena", correct: false },
    ],
    explanation:
      "AWS Fargate is an optimal solution for companies looking to automate both cluster scaling and maintenance while focusing on their containerized applications. By utilizing this service, the need for manual management of EC2 instances, cluster configuration, and server scaling is significantly reduced. Fargate's serverless framework streamlines the deployment process and handles all the underlying infrastructure, allowing teams to concentrate solely on developing and deploying their applications. This service aligns perfectly with requirements for an easier management system for Docker environments on EC2.",
  },
  {
    question:
      "A company wants to run a NoSQL database on Amazon EC2 instances. Which task is the responsibility of AWS in this scenario?",
    answers: [
      {
        text: "Update the guest operating system of the EC2 instances",
        correct: false,
      },
      {
        text: "Maintain high availability at the database layer.",
        correct: false,
      },
      {
        text: "Patch the physical infrastructure that hosts the EC2 instances",
        correct: true,
      },
      { text: "Configure the security group firewall", correct: false },
    ],
    explanation:
      "AWS assumes the responsibility of managing the underlying physical infrastructure for EC2 instances. This includes patching and maintaining the hardware and facilities that support the operation of your EC2 instances. Any adjustments or updates to the guest operating system, security configurations, or database-specific settings are the responsibility of the customer. This distinction is crucial in understanding the demarcation of roles in the cloud environment and ensures that while you manage your application's performance, AWS ensures the integrity and robustness of the physical resources.",
  },
  {
    question:
      "Which AWS services or tools can identify rightsizing opportunities for Amazon EC2 instances? (Choose two.)",
    answers: [
      { text: "AWS Cost Explorer", correct: false },
      { text: "AWS Billing Conductor", correct: true },
      { text: "Amazon CodeGuru", correct: false },
      { text: "Amazon SageMaker", correct: false },
      { text: "AWS Compute Optimizer", correct: true },
    ],
    explanation:
      "AWS Cost Explorer and AWS Compute Optimizer are specifically designed to assist in the management and optimization of AWS resources. AWS Cost Explorer gives a detailed view of your spending and usage, making it easier to spot where rightsizing could lead to cost efficiency. On the other hand, AWS Compute Optimizer directly provides tailored recommendations for rightsizing EC2 instances based on historical usage data, ensuring that resource allocation is optimized to meet actual workload demands efficiently. Both tools are essential for managing AWS cost efficiency through rightsizing strategies.",
  },
  {
    question:
      "Which of the following are benefits of using AWS Trusted Advisor? (Choose two.)",
    answers: [
      {
        text: "Providing high-performance container orchestration",
        correct: false,
      },
      { text: "Creating and rotating encryption keys", correct: false },
      {
        text: "Detecting underutilized resources to save costs",
        correct: true,
      },
      {
        text: "Improving security by proactively monitoring the AWS environment",
        correct: true,
      },
      {
        text: "Implementing enforced tagging across AWS resources",
        correct: false,
      },
    ],
    explanation:
      "AWS Trusted Advisor is an essential tool that assists in optimizing your AWS environment. It helps in identifying underutilized resources, which directly supports cost management by suggesting reductions or alternatives. Furthermore, it enhances security by proactively scanning for vulnerabilities and recommending best practices for a more secure setup. This dual capability of cost optimization and security enhancement ensures an efficient and robust AWS infrastructure.",
  },
  {
    question:
      "Which of the following is an advantage that users experience when they move on-premises workloads to the AWS Cloud?",
    answers: [
      {
        text: "Elimination of expenses for running and maintaining data centers",
        correct: true,
      },
      {
        text: "Price discounts that are identical to discounts from hardware providers",
        correct: false,
      },
      {
        text: "Distribution of all operational controls to AWS",
        correct: false,
      },
      { text: "Elimination of operational expenses", correct: false },
    ],
    explanation:
      "which is the elimination of expenses for running and maintaining data centers, nails the advantage that users find when moving their on-premises workloads to the AWS Cloud. This transition not only frees organizations from the capital and operational expenditures associated with physical data centers but also grants them enhanced scalability and flexibility. This transformation harnesses AWS's robust infrastructure capabilities, enabling businesses to redirect resources more efficiently and adaptively towards innovation and growth. AWS's model is fundamentally about converting large fixed costs into significantly more manageable variable costs.",
  },
  {
    question:
      "A company wants to manage deployed IT services and govern its infrastructure as code (IaC) templates. Which AWS service will meet this requirement?",
    answers: [
      { text: "AWS Resource Explorer", correct: false },
      { text: "AWS Service Catalog", correct: true },
      { text: "AWS Organizations", correct: false },
      { text: "AWS Systems Manager", correct: false },
    ],
    explanation:
      "AWS Service Catalog is the go-to service for managing and governing infrastructure as code (IaC) templates. It provides a centralized platform where organizations can create, manage, and provision IT services based on predefined CloudFormation or Terraform templates. This helps in maintaining governance and compliance across resources, ensuring a streamlined and consistent deployment process for IT services according to organizational standards and policies.",
  },
  {
    question:
      "Which AWS service or tool helps users visualize, understand, and manage spending and usage over time?",
    answers: [
      { text: "AWS Organizations", correct: false },
      { text: "AWS Pricing Calculator", correct: false },
      { text: "AWS Cost Explorer", correct: true },
      { text: "AWS Service Catalog", correct: false },
    ],
    explanation:
      "AWS Cost Explorer is the right choice for understanding and managing AWS spending and usage over time. It features a user-friendly interface that allows for detailed visualization and analysis of costs. You can easily create custom reports to review and interpret cost and usage data, which helps in identifying trends, understanding cost drivers, and spotting anomalies. This tool is essential for effective cost management in AWS environments, offering capabilities for both high-level and in-depth financial analysis.",
  },
  {
    question:
      " company is using a central data platform to manage multiple types of data for its customers. The company wants to use AWS services to discover, transform, and visualize the data. Which combination of AWS services should the company use to meet these requirements? (Choose two.)",
    answers: [
      { text: "AWS Glue", correct: true },
      { text: "Amazon Elastic File System", correct: false },
      { text: "Amazon Redshift", correct: false },
      { text: "Amazon QuickSight", correct: false },
    ],
    explanation:
      "AWS Glue and Amazon QuickSight are the most effective services for the scenario described. AWS Glue handles the discovery and transformation phases by providing ETL capabilities that simplify the process of preparing data for analytics. On the other hand, Amazon QuickSight allows for the easy visualization of this data through its business intelligence tools, which support creating interactive dashboards and reports directly from data processed by AWS Glue. This combination addresses the full spectrum of needs from data manipulation to the final representation for decision-making.",
  },
  {
    question:
      "A global company wants to migrate its third-party applications to the AWS Cloud. The company wants help from a global team of experts to complete the migration faster and more reliably in accordance with AWS internal best practices. Which AWS service or resource will meet these requirements?",
    answers: [
      { text: "AWS Support", correct: false },
      { text: "AWS Professional Services", correct: true },
      { text: "AWS Launch Wizard", correct: false },
      { text: "AWS Managed Services", correct: false },
    ],
    explanation:
      "AWS Professional Services is perfectly suited for a global company looking to migrate third-party applications to the AWS Cloud with expert assistance. This team provides hands-on guidance and follows AWS best practices for planning, executing, and optimizing migrations. Their global presence ensures support across different geographies, matching the company's need for a wide-spanning team of specialists. AWS Professional Services distinguishes itself by focusing specifically on migration assistance rather than just technical support or operational management, making it the best choice for this scenario.",
  },
  {
    question:
      "An e-learning platform needs to run an application for 2 months each year. The application will be deployed on Amazon EC2 instances. Any application downtime during those 2 months must be avoided. Which EC2 purchasing option will meet these requirements MOST costeffectively?",
    answers: [
      { text: "Reserved Instances", correct: false },
      { text: "Dedicated Hosts", correct: false },
      { text: "Spot Instances", correct: false },
      { text: "On-Demand Instances", correct: true },
    ],
    explanation: "",
  },
  {
    question:
      "A developer wants to deploy an application quickly on AWS without manually creating the required resources. Which AWS service will meet these requirements?",
    answers: [
      { text: "Amazon EC2", correct: false },
      { text: "AWS Elastic Beanstalk", correct: true },
      { text: "AWS CodeBuild", correct: false },
      { text: "Amazon Personalize", correct: false },
    ],
    explanation: "",
  },
  {
    question:
      "A company is storing sensitive customer data in an Amazon S3 bucket. The company wants to protect the data from accidental deletion or overwriting. Which S3 feature should the company use to meet these requirements?",
    answers: [
      { text: "S3 Lifecycle rules", correct: false },
      { text: "S3 Versioning", correct: true },
      { text: "S3 bucket policies", correct: false },
      { text: "S3 server-side encryption", correct: false },
    ],
    explanation: "",
  },
  {
    question:
      "Which AWS service provides the ability to manage infrastructure as code?",
    answers: [
      { text: "AWS CodePipeline", correct: false },
      { text: "AWS CodeDeploy", correct: false },
      { text: "AWS Direct Connect", correct: false },
      { text: "AWS CloudFormation", correct: true },
    ],
    explanation: "",
  },
  {
    question:
      "An online gaming company needs to choose a purchasing option to run its Amazon EC2 instances for 1 year. The web traffic is consistent, and any increases in traffic are predictable. The EC2 instances must be online and available without any disruption. Which EC2 instance purchasing option will meet these requirements MOST costeffectively?",
    answers: [
      { text: "On-Demand Instances", correct: false },
      { text: "Reserved Instances", correct: true },
      { text: "Spot Instances", correct: false },
      { text: "Spot Fleet", correct: false },
    ],
    explanation: "",
  },
  {
    question:
      "Which AWS service or feature allows a user to establish a dedicated network connection between a company’s on-premises data center and the AWS Cloud?",
    answers: [
      { text: "AWS Direct Connect", correct: true },
      { text: "VPC peering", correct: false },
      { text: "AWS VPN", correct: false },
      { text: "Amazon Route 53", correct: false },
    ],
    explanation:
      "AWS Direct Connect is the correct answer because it provides a dedicated network connection from your on-premises data center to AWS. This service establishes a private connection, which can result in lower network costs, increased bandwidth throughput, and a more consistent network experience compared to internet-based connections. AWS Direct Connect is specifically designed for establishing private connectivity to AWS, making it the appropriate choice for a dedicated network connection.",
  },
  {
    question:
      "Which option is a physical location of the AWS global infrastructure?",
    answers: [
      { text: "AWS DataSync", correct: false },
      { text: "AWS Region", correct: true },
      { text: "Amazon Connect", correct: false },
      { text: "AWS Organizations", correct: false },
    ],
    explanation:
      "AWS has the concept of a Region, which is a physical location around the world where we cluster data centers. We call each group of logical data centers an Availability Zone. Each AWS Region consists of a minimum of three, isolated, and physically separate AZs within a geographic area. https://aws.amazon.com/aboutaws/ global-infrastructure/regions_az/",
  },
  {
    question:
      "A company wants to protect its AWS Cloud information, systems, and assets while performing risk assessment and mitigation tasks. Which pillar of the AWS Well-Architected Framework is supported by these goals?",
    answers: [
      { text: "Reliability", correct: false },
      { text: "Security", correct: true },
      { text: "Operational excellence", correct: false },
      { text: "Performance efficiency", correct: false },
    ],
    explanation:
      "protect its AWS Cloud information, systems, and assets while performing risk assessment and mitigation tasks",
  },
  {
    question: "What is the purpose of having an internet gateway within a VPC?",
    answers: [
      { text: "To create a VPN connection to the VPC", correct: false },
      {
        text: "To allow communication between the VPC and the internet",
        correct: true,
      },
      {
        text: "To impose bandwidth constraints on internet traffic",
        correct: false,
      },
      {
        text: "To load balance traffic from the internet across Amazon EC2 instances",
        correct: false,
      },
    ],
    explanation:
      "An internet gateway is a horizontally scaled, redundant, and highly available VPC component that allows communication between your VPC and the internet.",
  },
  {
    question:
      "A company is running a monolithic on-premises application that does not scale and is difficult to maintain. The company has a plan to migrate the application to AWS and divide the application into microservices. Which best practice of the AWS Well-Architected Framework is the company following with this plan?",
    answers: [
      {
        text: "Integrate functional testing as part of AWS deployment",
        correct: false,
      },
      { text: "Use automation to deploy changes", correct: false },
      { text: "Deploy the application to multiple locations", correct: false },
      { text: "Implement loosely coupled dependencies", correct: true },
    ],
    explanation:
      "Loose Coupling is main advantage of moving from monolithic to microservices.",
  },
  {
    question:
      "A company has an AWS account. The company wants to audit its password and access key rotation details for compliance purposes. Which AWS service or tool will meet this requirement?",
    answers: [
      { text: "IAM Access Analyzer", correct: false },
      { text: "AWS Artifact", correct: false },
      { text: "IAM credential report", correct: true },
      { text: "AWS Audit Manager", correct: false },
    ],
    explanation: `Key: "audit its password and access key rotation details for compliance purposes"`,
  },
  {
    question:
      "A company wants to receive a notification when a specific AWS cost threshold is reached. Which AWS services or tools can the company use to meet this requirement? (Choose two.)",
    answers: [
      { text: "Amazon Simple Queue Service", correct: false },
      { text: "AWS Budgets", correct: true },
      { text: "Cost Explorer", correct: false },
      { text: "Amazon CloudWatch", correct: true },
    ],
    explanation:
      "AWS Budgets: Allows the company to set custom cost and usage budgets that alert them when thresholds are exceeded. They can receive notifications via email or Amazon Simple Notification Service (Amazon SNS) when the budget thresholds are reached. <br><br>Amazon CloudWatch: Can be used to create custom alarms based on cost metrics. The company can set up alarms to trigger notifications when specific cost thresholds are met or exceeded. CloudWatch Alarms can notify through various channels, including Amazon SNS. <br><br>Amazon Simple Queue Service (Amazon SQS): SQS is a fully managed message queuing service.  <br><br>Cost Explorer: Cost Explorer is a tool for exploring and analyzing AWS costs but does not provide direct notifications for cost thresholds.",
  },
  {
    question:
      "Which AWS service or resource provides answers to the most frequently asked security-related questions that AWS receives from its users?",
    answers: [
      { text: "AWS Artifact", correct: false },
      { text: "Amazon Connect", correct: false },
      { text: "AWS Chatbot", correct: false },
      { text: "AWS Knowledge Center", correct: true },
    ],
    explanation:
      "Exploring both portals seems clear that AWS Knowledge Center provides answer to the most frequently asked security-related questions that AWS receives from its users.",
  },
  {
    question:
      "Which tasks are customer responsibilities, according to the AWS shared responsibility model? (Choose two.)",
    answers: [
      {
        text: "Configure the AWS provided security group firewall.",
        correct: true,
      },
      { text: "Classify company assets in the AWS Cloud", correct: true },
      {
        text: "Determine which Availability Zones to use for Amazon S3 buckets",
        correct: false,
      },
      { text: "Patch or upgrade Amazon DynamoDB.", correct: false },
    ],
    explanation:
      "Configure the AWS provided security group firewall: Customers are responsible for configuring and managing security group firewalls to control inbound and outbound traffic to their AWS resources. B. Classify company assets in the AWS Cloud: Asset classification is typically a customer responsibility as part of their data governance and security practices. The other options are not accurate in the context of customer responsibilities:",
  },
  {
    question:
      "Which AWS service or feature is used to send both text and email messages from distributed applications?",
    answers: [
      {
        text: "Amazon Simple Notification Service (Amazon SNS)",
        correct: true,
      },
      { text: "Amazon Simple Email Service", correct: false },
      { text: "Amazon CloudWatch alerts", correct: false },
      { text: "Amazon Simple Queue Service", correct: false },
    ],
    explanation:
      "Amazon Simple Notification Service (Amazon SNS) sends notifications two ways, A2A and A2P. A2A provides high-throughput, push-based, many-to-many messaging between distributed systems, microservices, and event-driven serverless applications. These applications include Amazon Simple Queue Service (SQS), Amazon Kinesis Data Firehose, AWS Lambda, and other HTTPS endpoints. A2P functionality lets you send messages to your customers with SMS texts, push notifications, and email. https://aws.amazon.com/sns/",
  },
  {
    question:
      "A user needs programmatic access to AWS resources through the AWS CLI or the AWS API. Which option will provide the user with the appropriate access?",
    answers: [
      { text: "Amazon Inspector", correct: false },
      { text: "Access keys", correct: true },
      { text: "SSH public keys", correct: false },
      { text: "AWS Key Management Service", correct: false },
    ],
    explanation:
      "Access keys are long-term credentials for an IAM user or the AWS account root user. You can use access keys to sign programmatic requests to the AWS CLI or AWS API (directly or using the AWS SDK).",
  },
  {
    question:
      "A company runs thousands of simultaneous simulations using AWS Batch. Each simulation is stateless, is fault tolerant, and runs for up to 3 hours. Which pricing model enables the company to optimize costs and meet these requirements?",
    answers: [
      { text: "Reserved Instances", correct: false },
      { text: "Spot Instances", correct: true },
      { text: "On-Demand Instances", correct: false },
      { text: "Dedicated Instances", correct: false },
    ],
    explanation:
      "Spot Instances for stateless, fault-tolerant workloads that can handle interruptions and have short durations, using Spot Instances is a cost-effective option. Spot Instances allow you to bid for unused EC2 capacity at a potentially lower price than On-Demand Instances. However, Spot Instances can be terminated if the capacity is needed by On-Demand or Reserved Instances customers. Given the nature of the company's workload, where thousands of simulations are run simultaneously and each simulation is stateless, fault-tolerant, and runs for up to 3 hours, Spot Instances would be a suitable choice. This can help optimize costs by taking advantage of the lower pricing for unused capacity.",
  },
  {
    question:
      "What does the concept of agility mean in AWS Cloud computing? (Choose two.)",
    answers: [
      {
        text: "The speed at which AWS resources are implemented",
        correct: true,
      },
      {
        text: "The speed at which AWS resources are implemented",
        correct: true,
      },
      { text: "The ability to experiment quickly", correct: true },
      { text: "The elimination of wasted capacity", correct: false },
    ],
    explanation:
      "In the context of AWS Cloud computing, the concept of agility refers to the ability to respond quickly to changing business requirements and to innovate rapidly. Two aspects of agility in AWS Cloud computing are: A. The speed at which AWS resources are implemented: Agility involves the rapid provisioning and deployment of AWS resources to meet the dynamic needs of applications and workloads. C. The ability to experiment quickly: Agility allows users to experiment and iterate quickly, enabling them to test ideas, features, and configurations with minimal barriers.",
  },
  {
    question:
      "A company needs to block SQL injection attacks. Which AWS service or feature can meet this requirement?",
    answers: [
      { text: "AWS WAF", correct: true },
      { text: "AWS Shield", correct: false },
      { text: "Network ACLs", correct: false },
      { text: "Security groups", correct: false },
    ],
    explanation:
      "AWS WAF allows you to create custom rules to block SQL injection attempts. Create a WebACL: Go to AWS WAF dashboard and create a new WebACL. Add a Rule: Inside the WebACL, add a new rule. SQLi Filter: Choose the rule type to look for SQLi patterns. AWS WAF has built-in SQLi filters. Attach Resources: Attach the WebACL to a resource, such as an Application Load Balancer, Amazon CloudFront distribution, or an API Gateway. Deploy: Save and deploy the WebACL.",
  },
  {
    question:
      "Which AWS service or feature identifies whether an Amazon S3 bucket or an IAM role has been shared with an external entity?",
    answers: [
      { text: "AWS Service Catalog", correct: false },
      { text: "AWS Systems Manager", correct: false },
      { text: "AWS IAM Access Analyzer", correct: true },
      { text: "AWS Organizations", correct: false },
    ],
    explanation:
      "IAM Access Analyzer helps identify resources in your organization and accounts that are shared with an external entity.",
  },
  {
    question:
      "A cloud practitioner needs to obtain AWS compliance reports before migrating an environment to the AWS Cloud. How can these reports be generated?",
    answers: [
      { text: "Contact the AWS Compliance team.", correct: false },
      { text: "Download the reports from AWS Artifact", correct: true },
      { text: "Open a case with AWS Support", correct: false },
      { text: "Generate the reports with Amazon Macie", correct: false },
    ],
    explanation:
      "AWS Artifact is a portal that provides access to various compliance reports, including certifications, attestations, and other relevant documents. You can download these reports directly from AWS Artifact.",
  },
  {
    question:
      "An ecommerce company has migrated its IT infrastructure from an on-premises data center to the AWS Cloud. Which cost is the company's direct responsibility?",
    answers: [
      { text: "Cost of application software licenses", correct: true },
      { text: "Cost of the hardware infrastructure on AWS", correct: false },
      { text: "Cost of power for the AWS servers", correct: false },
      {
        text: "Cost of physical security for the AWS data center",
        correct: false,
      },
    ],
    explanation:
      "In the AWS Cloud, customers are responsible for the cost of application software licenses. This includes any software licenses required to run applications on AWS services. AWS provides the underlying infrastructure, and customers are responsible for licensing their application software.",
  },
  {
    question:
      "A company is setting up AWS Identity and Access Management (IAM) on an AWS account. Which recommendation complies with IAM security best practices?",
    answers: [
      {
        text: "Use the account root user access keys for administrative tasks.",
        correct: false,
      },
      {
        text: "Grant broad permissions so that all company employees can access the resources they need.",
        correct: false,
      },
      {
        text: "Turn on multi-factor authentication (MFA) for added security during the login process",
        correct: true,
      },
      {
        text: "Avoid rotating credentials to prevent issues in production applications",
        correct: false,
      },
    ],
    explanation:
      "Best practices recommend enabling multi-factor authentication (MFA) for added security during the login process.",
  },
  {
    question:
      "Elasticity in the AWS Cloud refers to which of the following? (Choose two.)",
    answers: [
      {
        text: "How quickly an Amazon EC2 instance can be restarted",
        correct: false,
      },
      {
        text: "The ability to rightsize resources as demand shifts",
        correct: true,
      },
      {
        text: "The maximum amount of RAM an Amazon EC2 instance can use",
        correct: false,
      },
      {
        text: "How easily resources can be procured when they are needed",
        correct: true,
      },
    ],
    explanation:
      "Elasticity is the ability to add and release resources as business needs change. It has nothing to do with pricing.",
  },
  {
    question:
      "Which service enables customers to audit API calls in their AWS accounts?",
    answers: [
      { text: "AWS CloudTrail", correct: true },
      { text: "AWS Trusted Advisor", correct: false },
      { text: "Amazon Inspector", correct: false },
      { text: "AWS X-Ray", correct: false },
    ],
    explanation: "CloudTrail: Track API calls made by users within account.",
  },
  {
    question:
      "What is a customer responsibility when using AWS Lambda according to the AWS shared responsibility model?",
    answers: [
      { text: "Managing the code within the Lambda function", correct: true },
      {
        text: "Confirming that the hardware is working in the data center",
        correct: false,
      },
      { text: "Patching the operating system", correct: false },
      {
        text: "Shutting down Lambda functions when they are no longer in use",
        correct: false,
      },
    ],
    explanation:
      "According to the AWS shared responsibility model, customers are responsible for managing the code within their Lambda functions.",
  },
  {
    question:
      "A company has 5 TB of data stored in Amazon S3. The company plans to occasionally run queries on the data for analysis. Which AWS service should the company use to run these queries in the MOST cost-effective manner?",
    answers: [
      { text: "Amazon Redshift", correct: false },
      { text: "Amazon Athena", correct: true },
      { text: "Amazon Kinesis", correct: false },
      { text: "Amazon RDS", correct: false },
    ],
    explanation:
      "Amazon Athena is a cost-effective service for running queries directly on data stored in Amazon S3.",
  },
  {
    question: "Which AWS service can be used at no additional cost?",
    answers: [
      { text: "Amazon SageMaker", correct: false },
      { text: "AWS Config", correct: false },
      { text: "AWS Organizations", correct: true },
      { text: "Amazon CloudWatch", correct: false },
    ],
    explanation:
      "AWS Organizations is a service that helps consolidate multiple AWS accounts into an organization at no additional cost.",
  },
  {
    question:
      "Which AWS Cloud Adoption Framework (AWS CAF) capability belongs to the people perspective?",
    answers: [
      { text: "Data architecture", correct: false },
      { text: "Event management", correct: false },
      { text: "Cloud fluency", correct: true },
      { text: "Strategic partnership", correct: false },
    ],
    explanation:
      "Cloud fluency is part of the people perspective in the AWS Cloud Adoption Framework.",
  },
  {
    question:
      "A company wants to make an upfront commitment for continued use of its production Amazon EC2 instances in exchange for a reduced overall cost. Which pricing options meet these requirements with the LOWEST cost? (Choose two.)",
    answers: [
      { text: "Spot Instances", correct: false },
      { text: "On-Demand Instances", correct: false },
      { text: "Reserved Instances", correct: true },
      { text: "Savings Plans", correct: true },
    ],
    explanation:
      "Making an upfront commitment through Reserved Instances or Savings Plans provides the lowest cost for continued use of production instances.",
  },
  {
    question:
      "A company wants to migrate its on-premises relational databases to the AWS Cloud. The company wants to use infrastructure as close to its current geographical location as possible. Which AWS service or resource should the company use to select its Amazon RDS deployment area?",
    answers: [
      { text: "Amazon Connect", correct: false },
      { text: "AWS Wavelength", correct: false },
      { text: "AWS Regions", correct: true },
      { text: "AWS Direct Connect", correct: false },
    ],
    explanation:
      "AWS Regions allow the company to select the deployment area for Amazon RDS close to its geographical location.",
  },
  {
    question:
      "A company is exploring the use of the AWS Cloud and needs to create a cost estimate for a project before the infrastructure is provisioned. Which AWS service or feature can be used to estimate costs before deployment?",
    answers: [
      { text: "AWS Free Tier", correct: false },
      { text: "AWS Pricing Calculator", correct: true },
      { text: "AWS Billing and Cost Management", correct: false },
      { text: "AWS Cost and Usage Report", correct: false },
    ],
    explanation:
      "AWS Pricing Calculator is a web-based tool to create cost estimates for AWS services.",
  },
  {
    question:
      "A company is building an application that needs to deliver images and videos globally with minimal latency. Which approach can the company use to accomplish this in a cost-effective manner?",
    answers: [
      { text: "Deliver the content through Amazon CloudFront", correct: true },
      {
        text: "Store the content on Amazon S3 and enable S3 cross-region replication.",
        correct: false,
      },
      { text: "Implement a VPN across multiple AWS Regions", correct: false },
      { text: "Deliver the content through AWS PrivateLink.", correct: false },
    ],
    explanation:
      "Using Amazon CloudFront allows for global delivery of content with minimal latency.",
  },
  {
    question:
      "Which option is a benefit of the economies of scale based on the advantages of cloud computing?",
    answers: [
      {
        text: "The ability to trade variable expense for fixed expense",
        correct: false,
      },
      { text: "Increased speed and agility", correct: false },
      { text: "Lower variable costs over fixed costs", correct: true },
      {
        text: "Increased operational costs across data centers",
        correct: false,
      },
    ],
    explanation:
      "Cloud computing achieves lower variable costs through economies of scale as usage from many customers is aggregated.",
  },
  {
    question:
      "Which of the following is a software development framework that a company can use to define cloud resources as code and provision the resources through AWS CloudFormation?",
    answers: [
      { text: "AWS CLI", correct: false },
      { text: "AWS Developer Center", correct: false },
      { text: "AWS Cloud Development Kit (AWS CDK)", correct: true },
      { text: "AWS CodeStar", correct: false },
    ],
    explanation:
      "AWS Cloud Development Kit (AWS CDK) allows developers to define infrastructure as code using familiar programming languages.",
  },
  {
    question:
      "A company is developing an application that uses multiple AWS services. The application needs to use temporary, limited-privilege credentials for authentication with other AWS APIs. Which AWS service or feature should the company use to meet these authentication requirements?",
    answers: [
      { text: "Amazon API Gateway", correct: false },
      { text: "IAM users", correct: false },
      { text: "AWS Security Token Service (AWS STS)", correct: true },
      { text: "IAM instance profiles", correct: false },
    ],
    explanation:
      "AWS Security Token Service (AWS STS) provides temporary, limited-privilege credentials for AWS API authentication.",
  },
  {
    question:
      "Which AWS service is a cloud security posture management (CSPM) service that aggregates alerts from various AWS services and partner products in a standardized format?",
    answers: [
      { text: "AWS Security Hub", correct: true },
      { text: "AWS Trusted Advisor", correct: false },
      { text: "Amazon EventBridge", correct: false },
      { text: "Amazon GuardDuty", correct: false },
    ],
    explanation:
      "AWS Security Hub aggregates security alerts and performs automated security checks against AWS resources.",
  },
  {
    question: "Which AWS service is always provided at no charge?",
    answers: [
      { text: "Amazon S3", correct: false },
      { text: "AWS Identity and Access Management (IAM)", correct: true },
      { text: "Elastic Load Balancers", correct: false },
      { text: "AWS WAF", correct: false },
    ],
    explanation:
      "AWS Identity and Access Management (IAM) is always provided at no charge.",
  },
  {
    question:
      "To reduce costs, a company is planning to migrate a NoSQL database to AWS. Which AWS service is fully managed and can automatically scale throughput capacity to meet database workload demands?",
    answers: [
      { text: "Amazon Redshift", correct: false },
      { text: "Amazon Aurora", correct: false },
      { text: "Amazon DynamoDB", correct: true },
      { text: "Amazon RDS", correct: false },
    ],
    explanation:
      "Amazon DynamoDB is a fully managed NoSQL database service that provides seamless scalability.",
  },
  {
    question:
      "A company is using Amazon DynamoDB. Which task is the company’s responsibility, according to the AWS shared responsibility model?",
    answers: [
      { text: "Patch the operating system.", correct: false },
      { text: "Provision hosts.", correct: false },
      { text: "Manage database access permissions", correct: true },
      { text: "Secure the operating system", correct: false },
    ],
    explanation:
      "Managing database access permissions is the customer's responsibility in the AWS shared responsibility model.",
  },
  {
    question:
      "A company has a test AWS environment. A company is planning on testing an application within AWS. The application testing can be interrupted and does not need to run continuously. Which Amazon EC2 purchasing option will meet these requirements MOST cost-effectively?",
    answers: [
      { text: "On-Demand Instances", correct: false },
      { text: "Dedicated Instances", correct: false },
      { text: "Spot Instances", correct: true },
      { text: "Reserved Instances", correct: false },
    ],
    explanation:
      "Spot Instances are cost-effective for stateless workloads that can be interrupted.",
  },
  {
    question:
      "Which AWS service gives users the ability to discover and protect sensitive data that is stored in Amazon S3 buckets?",
    answers: [
      { text: "Amazon Macie", correct: true },
      { text: "Amazon Detective", correct: false },
      { text: "Amazon GuardDuty", correct: false },
      { text: "AWS IAM Access Analyzer", correct: false },
    ],
    explanation:
      "Amazon Macie is a managed service that helps discover and protect sensitive data in Amazon S3.",
  },
  {
    question:
      "Which of the following services can be used to block network traffic to an instance? (Choose two.)",
    answers: [
      { text: "Security groups", correct: true },
      {
        text: "Amazon Virtual Private Cloud (Amazon VPC) flow logs",
        correct: false,
      },
      { text: "Network ACLs", correct: true },
      { text: "Amazon CloudWatch", correct: false },
    ],
    explanation:
      "Security groups and Network ACLs are used to control network traffic to instances.",
  },
  {
    question:
      "Which AWS service can identify when an Amazon EC2 instance was terminated?",
    answers: [
      { text: "AWS Identity and Access Management (IAM)", correct: false },
      { text: "AWS CloudTrail", correct: true },
      { text: "AWS Compute Optimizer", correct: false },
      { text: "Amazon EventBridge", correct: false },
    ],
    explanation:
      "AWS CloudTrail records API activity in your AWS account, including the termination of EC2 instances.",
  },
  {
    question:
      "Which of the following is a fully managed MySQL-compatible database?",
    answers: [
      { text: "Amazon S3", correct: false },
      { text: "Amazon DynamoDB", correct: false },
      { text: "Amazon Redshift", correct: false },
      { text: "Amazon Aurora", correct: true },
    ],
    explanation:
      "Amazon Aurora is a fully managed relational database engine compatible with MySQL and PostgreSQL.",
  },
  {
    question:
      "Which AWS service supports a hybrid architecture that gives users the ability to extend AWS infrastructure, AWS services, APIs, and tools to data centers, colocation environments, or on-premises facilities?",
    answers: [
      { text: "AWS Snowmobile", correct: false },
      { text: "AWS Local Zones", correct: false },
      { text: "AWS Outposts", correct: true },
      { text: "AWS Fargate", correct: false },
    ],
    explanation:
      "AWS Outposts enables you to run AWS infrastructure and services on premises while seamlessly connecting to the AWS cloud.",
  },
  {
    question:
      "Which AWS service can run a managed PostgreSQL database that provides online transaction processing (OLTP)?",
    answers: [
      { text: "Amazon DynamoDB", correct: false },
      { text: "Amazon Athena", correct: false },
      { text: "Amazon RDS", correct: true },
      { text: "Amazon EMR", correct: false },
    ],
    explanation:
      "Amazon RDS supports various database engines, including PostgreSQL, and offers a managed database service suitable for OLTP workloads.",
  },
  {
    question:
      "A company wants to provide managed Windows virtual desktops and applications to its remote employees over secure network connections. Which AWS services can the company use to meet these requirements? (Choose two.)",
    answers: [
      { text: "Amazon Connect", correct: false },
      { text: "Amazon AppStream 2.0", correct: true },
      { text: "Amazon WorkSpaces", correct: true },
      { text: "AWS Site-to-Site VPN", correct: false },
    ],
    explanation:
      "Amazon WorkSpaces satisfies the virtual desktops requirement, while Amazon AppStream 2.0 provides virtual applications.",
  },
  {
    question:
      "A company wants to monitor for misconfigured security groups that are allowing unrestricted access to specific ports. Which AWS service will meet this requirement?",
    answers: [
      { text: "AWS Trusted Advisor", correct: true },
      { text: "Amazon CloudWatch", correct: false },
      { text: "Amazon GuardDuty", correct: false },
      { text: "AWS Health Dashboard", correct: false },
    ],
    explanation:
      "AWS Trusted Advisor helps monitor for security group configurations that allow unrestricted access.",
  },
  {
    question:
      "Which AWS service is a key-value database that provides sub-millisecond latency on a large scale?",
    answers: [
      { text: "Amazon DynamoDB", correct: true },
      { text: "Amazon Aurora", correct: false },
      { text: "Amazon DocumentDB", correct: false },
      { text: "Amazon Neptune", correct: false },
    ],
    explanation:
      "Amazon DynamoDB is a fully managed NoSQL database with high performance and low latency.",
  },
  {
    question:
      "A company is deploying a machine learning (ML) research project that will require a lot of compute power over several months. The ML processing jobs do not need to run at specific times. Which Amazon EC2 instance purchasing option will meet these requirements at the lowest cost?",
    answers: [
      { text: "On-Demand Instances", correct: true },
      { text: "Spot Instances", correct: false },
      { text: "Reserved Instances", correct: false },
      { text: "Dedicated Instances", correct: false },
    ],
    explanation:
      "On-Demand Instances allow for flexibility without upfront costs and are suitable for workloads that do not run continuously.",
  },
  {
    question:
      "Which AWS services or features provide disaster recovery solutions for Amazon EC2 instances? (Choose two.)",
    answers: [
      { text: "EC2 Reserved Instances", correct: false },
      { text: "EC2 Amazon Machine Images (AMIs)", correct: true },
      {
        text: "Amazon Elastic Block Store (Amazon EBS) snapshots",
        correct: true,
      },
      { text: "AWS Shield", correct: false },
    ],
    explanation:
      "Amazon Machine Images (AMIs) allow you to capture configurations for recovery, while EBS snapshots provide backup and recovery for volumes.",
  },
  {
    question:
      "Which AWS service provides command line access to AWS tools and resources directly from a web browser?",
    answers: [
      { text: "AWS CloudHSM", correct: false },
      { text: "AWS CloudShell", correct: true },
      { text: "Amazon WorkSpaces", correct: false },
      { text: "AWS Cloud Map", correct: false },
    ],
    explanation:
      "AWS CloudShell provides a browser-based shell to access and manage AWS resources using the CLI.",
  },
  {
    question:
      "A network engineer needs to build a hybrid cloud architecture connecting on-premises networks to the AWS Cloud using AWS Direct Connect. The company has a few VPCs in a single AWS Region and expects to increase the number of VPCs to hundreds over time. Which AWS service or feature should the engineer use to simplify and scale this connectivity as the VPCs increase in number?",
    answers: [
      { text: "VPC endpoints", correct: false },
      { text: "AWS Transit Gateway", correct: true },
      { text: "Amazon Route 53", correct: false },
      { text: "AWS Secrets Manager", correct: false },
    ],
    explanation:
      "AWS Transit Gateway allows for connecting multiple VPCs and on-premises networks through a single gateway.",
  },
  {
    question:
      "A company wants to assess its operational readiness. It also wants to identify and mitigate any operational risks ahead of a new product launch. Which AWS Support plan offers guidance and support for this kind of event at no additional charge?",
    answers: [
      { text: "AWS Business Support", correct: false },
      { text: "AWS Basic Support", correct: false },
      { text: "AWS Developer Support", correct: false },
      { text: "AWS Enterprise Support", correct: true },
    ],
    explanation:
      "AWS Enterprise Support provides premium guidance and support for operational readiness and risk mitigation.",
  },
  {
    question:
      "A company wants to establish a schedule for rotating database user credentials. Which AWS service will support this requirement with the LEAST amount of operational overhead?",
    answers: [
      { text: "AWS Systems Manager", correct: false },
      { text: "AWS Secrets Manager", correct: true },
      { text: "AWS License Manager", correct: false },
      { text: "AWS Managed Services", correct: false },
    ],
    explanation:
      "AWS Secrets Manager is designed specifically for managing and rotating sensitive information, including database credentials.",
  },
  {
    question:
      "Which AWS service or feature can be used to create a private connection between an on-premises workload and an AWS Cloud workload?",
    answers: [
      { text: "Amazon Route 53", correct: false },
      { text: "Amazon Macie", correct: false },
      { text: "AWS Direct Connect", correct: false },
      { text: "AWS PrivateLink", correct: true },
    ],
    explanation:
      "AWS PrivateLink provides private connectivity to AWS services from on-premises environments.",
  },
  {
    question: "Which AWS service is used to provide encryption for Amazon EBS?",
    answers: [
      { text: "AWS Certificate Manager", correct: false },
      { text: "AWS Systems Manager", correct: false },
      { text: "AWS KMS", correct: true },
      { text: "AWS Config", correct: false },
    ],
    explanation:
      "AWS Key Management Service (AWS KMS) manages encryption keys used to encrypt data, including that stored in EBS.",
  },
  {
    question:
      "A company wants to manage its AWS Cloud resources through a web interface. Which AWS service will meet this requirement?",
    answers: [
      { text: "AWS Management Console", correct: true },
      { text: "AWS CLI", correct: false },
      { text: "AWS SDK", correct: false },
      { text: "AWS Cloud9", correct: false },
    ],
    explanation:
      "AWS Management Console is a web-based interface for managing AWS resources.",
  },
  {
    question:
      "Which of the following are advantages of the AWS Cloud? (Choose two.)",
    answers: [
      { text: "Trade variable expenses for capital expenses", correct: false },
      { text: "High economies of scale", correct: true },
      { text: "Launch globally in minutes", correct: false },
      { text: "Focus on managing hardware infrastructure", correct: false },
    ],
    explanation:
      "AWS provides massive economies of scale and allows businesses to launch services globally in minutes.",
  },
  {
    question:
      "Which AWS Cloud benefit is shown by an architecture’s ability to withstand failures with minimal downtime?",
    answers: [
      { text: "Agility", correct: false },
      { text: "Elasticity", correct: false },
      { text: "Scalability", correct: false },
      { text: "High availability", correct: true },
    ],
    explanation:
      "High availability indicates an architecture's resilience to failures.",
  },
  {
    question:
      "A developer needs to maintain a development environment infrastructure and a production environment infrastructure in a repeatable fashion. Which AWS service should the developer use to meet these requirements?",
    answers: [
      { text: "AWS Ground Station", correct: false },
      { text: "AWS Shield", correct: false },
      { text: "AWS IoT Device Defender", correct: false },
      { text: "AWS CloudFormation", correct: true },
    ],
    explanation:
      "AWS CloudFormation allows infrastructure to be treated as code for repeatable deployment.",
  },
  {
    question:
      "Which task is the customer’s responsibility, according to the AWS shared responsibility model?",
    answers: [
      { text: "Maintain the security of the AWS Cloud.", correct: false },
      { text: "Configure firewalls and networks", correct: true },
      {
        text: "Patch the operating system of Amazon RDS instances.",
        correct: false,
      },
      { text: "Implement physical and environmental controls", correct: false },
    ],
    explanation:
      "Configuring firewalls and network settings is a customer responsibility.",
  },
  {
    question:
      "Which AWS service helps deliver highly available applications with fast failover for multi-Region and Multi-AZ architectures?",
    answers: [
      { text: "AWS WAF", correct: false },
      { text: "AWS Global Accelerator", correct: true },
      { text: "AWS Shield", correct: false },
      { text: "AWS Direct Connect", correct: false },
    ],
    explanation:
      "AWS Global Accelerator optimizes routing for applications across multiple regions and availability zones.",
  },
  {
    question:
      "A company has a set of ecommerce applications. The applications need to be able to send messages to each other. Which AWS service meets this requirement?",
    answers: [
      { text: "AWS Auto Scaling", correct: false },
      { text: "Elastic Load Balancing", correct: false },
      { text: "Amazon Simple Queue Service (Amazon SQS)", correct: true },
      { text: "Amazon Kinesis Data Streams", correct: false },
    ],
    explanation:
      "Amazon SQS enables decoupling of applications by providing a message queuing service.",
  },
  {
    question:
      "What are the benefits of consolidated billing for AWS Cloud services? (Choose two.)",
    answers: [
      { text: "Volume discounts", correct: true },
      { text: "A minimal additional fee for use", correct: false },
      { text: "One bill for multiple accounts", correct: true },
      { text: "Installment payment options", correct: false },
    ],
    explanation:
      "Consolidated billing allows for volume discounts and one unified bill across accounts.",
  },
  {
    question:
      "A user wants to review all Amazon S3 buckets with ACLs and S3 bucket policies in the S3 console. Which AWS service or resource will meet this requirement?",
    answers: [
      { text: "S3 Multi-Region Access Points", correct: false },
      { text: "S3 Storage Lens", correct: false },
      { text: "AWS IAM Identity Center (AWS Single Sign-On)", correct: false },
      { text: "Access Analyzer for S3", correct: true },
    ],
    explanation:
      "Access Analyzer for S3 allows for reviewing access policies and ACLs for S3 buckets.",
  },
  {
    question:
      "What is the best resource for a user to find compliance-related information and reports about AWS?",
    answers: [
      { text: "AWS Artifact", correct: true },
      { text: "AWS Marketplace", correct: false },
      { text: "Amazon Inspector", correct: false },
      { text: "AWS Support", correct: false },
    ],
    explanation:
      "AWS Artifact provides on-demand access to compliance reports and certifications.",
  },
  {
    question:
      "Which AWS service enables companies to deploy an application close to end users?",
    answers: [
      { text: "Amazon CloudFront", correct: true },
      { text: "AWS Auto Scaling", correct: false },
      { text: "AWS AppSync", correct: false },
      { text: "Amazon Route 53", correct: false },
    ],
    explanation:
      "Amazon CloudFront is a CDN that ensures low latency and high transfer speeds for applications.",
  },
  {
    question:
      "Which AWS service or feature improves network performance by sending traffic through the AWS worldwide network infrastructure?",
    answers: [
      { text: "Route table", correct: false },
      { text: "AWS Transit Gateway", correct: false },
      { text: "AWS Global Accelerator", correct: true },
      { text: "Amazon VPC", correct: false },
    ],
    explanation:
      "AWS Global Accelerator uses the AWS global network to optimize traffic routing.",
  },
  {
    question: "Which AWS service provides highly durable object storage?",
    answers: [
      { text: "Amazon S3", correct: true },
      { text: "Amazon Elastic File System", correct: false },
      { text: "Amazon Elastic Block Store", correct: false },
      { text: "Amazon FSx", correct: false },
    ],
    explanation:
      "Amazon S3 is designed for durability and allows storage and retrieval of any amount of data.",
  },
  {
    question:
      "Which responsibility belongs to AWS when a company hosts its databases on Amazon EC2 instances?",
    answers: [
      { text: "Database backups", correct: false },
      { text: "Database software patches", correct: false },
      { text: "Operating system patches", correct: false },
      { text: "Operating system installations", correct: true },
    ],
    explanation:
      "AWS is responsible for providing and maintaining the infrastructure, including the operating system images.",
  },
  {
    question:
      "Which of the following are advantages of moving to the AWS Cloud? (Choose two.)",
    answers: [
      {
        text: "The ability to turn over the responsibility for all security to AWS.",
        correct: false,
      },
      { text: "The ability to use the pay-as-you-go model", correct: true },
      {
        text: "The ability to have full control over the physical infrastructure",
        correct: false,
      },
      {
        text: "No longer having to guess what capacity will be required",
        correct: true,
      },
    ],
    explanation:
      "The pay-as-you-go model and dynamic scalability are key advantages of using AWS.",
  },
  {
    question:
      "Which AWS service is a hybrid cloud storage service that provides on-premises users access to virtually unlimited cloud storage?",
    answers: [
      { text: "AWS DataSync", correct: false },
      { text: "Amazon S3 Glacier", correct: false },
      { text: "AWS Storage Gateway", correct: true },
      { text: "Amazon Elastic Block Store", correct: false },
    ],
    explanation:
      "AWS Storage Gateway enables on-premises applications to access cloud-based storage seamlessly.",
  },
  {
    question:
      "A company plans to migrate to AWS and wants to create cost estimates for its AWS use cases. Which AWS service or tool can the company use to meet these requirements?",
    answers: [
      { text: "AWS Pricing Calculator", correct: true },
      { text: "Amazon CloudWatch", correct: false },
      { text: "AWS Cost Explorer", correct: false },
      { text: "AWS Budgets", correct: false },
    ],
    explanation:
      "AWS Pricing Calculator is a web-based tool that allows users to estimate the cost of using AWS services based on usage patterns.",
  },
  {
    question:
      "Which tool should a developer use to integrate AWS service features directly into an application?",
    answers: [
      { text: "AWS Software Development Kit", correct: true },
      { text: "AWS CodeDeploy", correct: false },
      { text: "AWS Lambda", correct: false },
      { text: "AWS Batch", correct: false },
    ],
    explanation:
      "AWS SDK provides libraries and tools that allow developers to interact with AWS services directly from their applications.",
  },
  {
    question:
      "Which of the following is a recommended design principle of the AWS Well-Architected Framework?",
    answers: [
      {
        text: "Reduce downtime by making infrastructure changes infrequently and in large increments",
        correct: false,
      },
      {
        text: "Invest the time to configure infrastructure manually",
        correct: false,
      },
      { text: "Learn to improve from operational failures", correct: true },
      {
        text: "Use monolithic application design for centralization",
        correct: false,
      },
    ],
    explanation:
      "Learning from operational failures is key to improving system resilience in the AWS Well-Architected Framework.",
  },
  {
    question:
      "Using AWS Identity and Access Management (IAM) to grant access only to the resources needed to perform a task is a concept known as:",
    answers: [
      { text: "Restricted access", correct: false },
      { text: "As-needed access", correct: false },
      { text: "Least privilege access", correct: true },
      { text: "Token access", correct: false },
    ],
    explanation:
      "Least privilege access involves granting the minimum level of permissions required to perform tasks.",
  },
  {
    question:
      "Which AWS service or tool can be used to set up a firewall to control traffic going into and coming out of an Amazon VPC subnet?",
    answers: [
      { text: "Security group", correct: false },
      { text: "AWS WAF", correct: false },
      { text: "AWS Firewall Manager", correct: true },
      { text: "Network ACL", correct: false },
    ],
    explanation:
      "AWS Firewall Manager helps manage firewall settings across AWS accounts and applications.",
  },
  {
    question:
      "A company wants to operate a data warehouse to analyze data without managing the data warehouse infrastructure. Which AWS service will meet this requirement?",
    answers: [
      { text: "Amazon Aurora", correct: false },
      { text: "Amazon Redshift Serverless", correct: true },
      { text: "AWS Lambda", correct: false },
      { text: "Amazon RDS", correct: false },
    ],
    explanation:
      "Amazon Redshift Serverless allows running analytics workloads without managing data warehouse infrastructure.",
  },
  {
    question:
      "How does AWS Cloud computing help businesses reduce costs? (Choose two.)",
    answers: [
      {
        text: "AWS charges the same prices for services in every AWS Region.",
        correct: false,
      },
      { text: "AWS enables capacity to be adjusted on demand.", correct: true },
      {
        text: "AWS offers discounts for Amazon EC2 instances that remain idle for more than 1 week.",
        correct: false,
      },
      {
        text: "AWS eliminates many of the costs of building and maintaining on-premises data centers",
        correct: true,
      },
    ],
    explanation:
      "AWS enables on-demand capacity adjustment and reduces the costs of maintaining on-premises data centers.",
  },
  {
    question:
      "A company wants to grant users in one AWS account access to resources in another AWS account. The users do not currently have permission to access the resources. Which AWS service will meet this requirement?",
    answers: [
      { text: "IAM group", correct: false },
      { text: "IAM role", correct: true },
      { text: "IAM tag", correct: false },
      { text: "IAM Access Analyzer", correct: false },
    ],
    explanation:
      "IAM roles allow delegation of access to users and applications across AWS accounts.",
  },
  {
    question:
      "Which task is the responsibility of AWS when using AWS services?",
    answers: [
      { text: "Management of IAM user permissions", correct: false },
      {
        text: "Creation of security group rules for outbound access",
        correct: false,
      },
      {
        text: "Maintenance of physical and environmental controls",
        correct: true,
      },
      {
        text: "Application of Amazon EC2 operating system patches",
        correct: false,
      },
    ],
    explanation:
      "AWS is responsible for maintaining physical and environmental controls in its data centers.",
  },
  {
    question:
      "A company wants to automate infrastructure deployment by using infrastructure as code (IaC). The company wants to scale production stacks so the stacks can be deployed in multiple AWS Regions. Which AWS service will meet these requirements?",
    answers: [
      { text: "Amazon CloudWatch", correct: false },
      { text: "AWS Config", correct: false },
      { text: "AWS Trusted Advisor", correct: false },
      { text: "AWS CloudFormation", correct: true },
    ],
    explanation:
      "AWS CloudFormation allows you to model, provision, and manage AWS resources using code.",
  },
  {
    question:
      "Which option is an AWS Cloud Adoption Framework (AWS CAF) platform perspective capability?",
    answers: [
      { text: "Data architecture", correct: true },
      { text: "Data protection", correct: false },
      { text: "Data governance", correct: false },
      { text: "Data science", correct: false },
    ],
    explanation:
      "Data architecture is a key capability in the AWS Cloud Adoption Framework platform perspective.",
  },
  {
    question:
      "A company is running a workload in the AWS Cloud. Which AWS best practice ensures the MOST cost-effective architecture for the workload?",
    answers: [
      { text: "Loose coupling", correct: false },
      { text: "Rightsizing", correct: true },
      { text: "Caching", correct: false },
      { text: "Redundancy", correct: false },
    ],
    explanation:
      "Rightsizing involves selecting the appropriate size and type of resources to optimize costs.",
  },
  {
    question:
      "A company is using a third-party service to back up 10 TB of data to a tape library. The on-premises backup server is running out of space. The company wants to use AWS services for the backups without changing its existing backup workflows. Which AWS service should the company use to meet these requirements?",
    answers: [
      { text: "Amazon Elastic Block Store", correct: false },
      { text: "AWS Storage Gateway", correct: true },
      { text: "Amazon Elastic Container Service", correct: false },
      { text: "AWS Lambda", correct: false },
    ],
    explanation:
      "AWS Storage Gateway integrates on-premises applications with cloud storage, allowing seamless backups to AWS.",
  },
  {
    question:
      "Which AWS tool gives users the ability to plan their service usage, service costs, and instance reservations, and also allows them to set custom alerts when their costs or usage exceed established thresholds?",
    answers: [
      { text: "Cost Explorer", correct: false },
      { text: "AWS Budgets", correct: true },
      { text: "AWS Cost and Usage Report", correct: false },
      { text: "Reserved Instance reporting", correct: false },
    ],
    explanation:
      "AWS Budgets allows users to set custom budgets and receive alerts when their costs exceed established thresholds.",
  },
  {
    question:
      "Which tasks are the customer’s responsibility, according to the AWS shared responsibility model? (Choose two.)",
    answers: [
      { text: "Establish the global infrastructure", correct: false },
      { text: "Perform client-side data encryption", correct: true },
      { text: "Configure IAM credentials", correct: true },
      { text: "Secure edge locations", correct: false },
    ],
    explanation:
      "Customers are responsible for client-side data encryption and managing IAM credentials.",
  },
  {
    question:
      "A developer has been hired by a large company and needs AWS credentials. Which are security best practices that should be followed? (Choose two.)",
    answers: [
      {
        text: "Grant the developer access to only the AWS resources needed to perform the job",
        correct: true,
      },
      {
        text: "Share the AWS account root user credentials with the developer",
        correct: false,
      },
      {
        text: "Add the developer to the administrator’s group in AWS IAM.",
        correct: false,
      },
      {
        text: "Ensure the account password policy requires a minimum length.",
        correct: true,
      },
    ],
    explanation:
      "Best practices include limiting access to necessary resources and enforcing strong password policies.",
  },
  {
    question:
      "A company has multiple AWS accounts that include compute workloads that cannot be interrupted. The company wants to obtain billing discounts that are based on the company’s use of AWS services. Which AWS feature or purchasing option will meet these requirements?",
    answers: [
      { text: "Resource tagging", correct: false },
      { text: "Consolidated billing", correct: true },
      { text: "Pay-as-you-go pricing", correct: false },
      { text: "Spot Instances", correct: false },
    ],
    explanation:
      "Consolidated billing combines multiple accounts for volume discounts and simplifies billing.",
  },
  {
    question:
      "A user wants to allow applications running on an Amazon EC2 instance to make calls to other AWS services. The access granted must be secure. Which AWS service or feature should be used?",
    answers: [
      { text: "Security groups", correct: false },
      { text: "AWS Firewall Manager", correct: false },
      { text: "IAM roles", correct: true },
      { text: "IAM user SSH keys", correct: false },
    ],
    explanation:
      "IAM roles allow applications on an EC2 instance to securely access AWS services.",
  },
  {
    question:
      "A company wants a fully managed Windows file server for its Windows-based applications. Which AWS service will meet this requirement?",
    answers: [
      { text: "Amazon FSx", correct: true },
      { text: "Amazon Elastic Kubernetes Service", correct: false },
      { text: "Amazon Elastic Container Service", correct: false },
      { text: "Amazon EMR", correct: false },
    ],
    explanation:
      "Amazon FSx is a fully managed file storage service compatible with Windows file servers.",
  },
  {
    question:
      "A company wants to migrate its NFS on-premises workload to AWS. Which AWS Storage Gateway type should the company use to meet this requirement?",
    answers: [
      { text: "Tape Gateway", correct: false },
      { text: "Volume Gateway", correct: false },
      { text: "Amazon FSx File Gateway", correct: false },
      { text: "Amazon S3 File Gateway", correct: true },
    ],
    explanation:
      "Amazon S3 File Gateway allows integration of on-premises applications with Amazon S3 using NFS.",
  },
  {
    question:
      "A company needs to track the activity in its AWS accounts, and needs to know when an API call is made against its AWS resources. Which AWS tool or service can be used to meet these requirements?",
    answers: [
      { text: "Amazon CloudWatch", correct: false },
      { text: "Amazon Inspector", correct: false },
      { text: "AWS CloudTrail", correct: true },
      { text: "AWS IAM", correct: false },
    ],
    explanation:
      "AWS CloudTrail logs user activity and API usage, enabling auditing and security monitoring.",
  },
  {
    question:
      "A company has an uninterruptible application that runs on Amazon EC2 instances. The application constantly processes a backlog of files in an Amazon Simple Queue Service (Amazon SQS) queue. This usage is expected to continue to grow for years. What is the MOST cost-effective EC2 instance purchasing model to meet these requirements?",
    answers: [
      { text: "Spot Instances", correct: true },
      { text: "On-Demand Instances", correct: false },
      { text: "Savings Plans", correct: false },
      { text: "Dedicated Hosts", correct: false },
    ],
    explanation:
      "Spot Instances can provide significant savings for applications that are fault-tolerant.",
  },
  {
    question:
      "A company wants an AWS service to provide product recommendations based on its customer data. Which AWS service will meet this requirement?",
    answers: [
      { text: "Amazon Polly", correct: false },
      { text: "Amazon Personalize", correct: true },
      { text: "Amazon Comprehend", correct: false },
      { text: "Amazon Rekognition", correct: false },
    ],
    explanation:
      "Amazon Personalize provides machine learning-based recommendations for applications.",
  },
  {
    question:
      "A company is planning its migration to the AWS Cloud. The company is identifying its capability gaps by using the AWS Cloud Adoption Framework (AWS CAF) perspectives. Which phase of the cloud transformation journey includes these identification activities?",
    answers: [
      { text: "Envision", correct: false },
      { text: "Align", correct: true },
      { text: "Scale", correct: false },
      { text: "Launch", correct: false },
    ],
    explanation:
      "The Align phase focuses on identifying capability gaps across AWS CAF perspectives.",
  },
  {
    question:
      "A social media company wants to protect its web application from common web exploits such as SQL injections and cross-site scripting. Which AWS service will meet these requirements?",
    answers: [
      { text: "Amazon Inspector", correct: false },
      { text: "AWS WAF", correct: true },
      { text: "Amazon GuardDuty", correct: false },
      { text: "Amazon CloudWatch", correct: false },
    ],
    explanation:
      "AWS WAF protects web applications by allowing configuration of rules to block common web exploits.",
  },
  {
    question:
      "Which fully managed AWS service assists with the creation, testing, and management of custom Amazon EC2 images?",
    answers: [
      { text: "EC2 Image Builder", correct: true },
      { text: "Amazon Machine Image", correct: false },
      { text: "AWS Launch Wizard", correct: false },
      { text: "AWS Elastic Beanstalk", correct: false },
    ],
    explanation:
      "EC2 Image Builder automates the creation and management of customized server images.",
  },
  {
    question:
      "A company wants an automated process to continuously scan its Amazon EC2 instances for software vulnerabilities. Which AWS service will meet these requirements?",
    answers: [
      { text: "Amazon GuardDuty", correct: false },
      { text: "Amazon Inspector", correct: true },
      { text: "Amazon Detective", correct: false },
      { text: "Amazon Cognito", correct: false },
    ],
    explanation:
      "Amazon Inspector continually scans for software vulnerabilities and network exposure.",
  },
  {
    question:
      "A company needs to perform data processing once a week that typically takes about 5 hours to complete. Which AWS service should the company use for this workload?",
    answers: [
      { text: "AWS Lambda", correct: false },
      { text: "Amazon EC2", correct: true },
      { text: "AWS CodeDeploy", correct: false },
      { text: "AWS Wavelength", correct: false },
    ],
    explanation:
      "Amazon EC2 is suitable for workloads that require longer processing times and can be terminated afterward.",
  },
  {
    question:
      "Which AWS service or feature provides log information of the inbound and outbound traffic on network interfaces in a VPC?",
    answers: [
      { text: "Amazon CloudWatch Logs", correct: false },
      { text: "AWS CloudTrail", correct: false },
      { text: "VPC Flow Logs", correct: true },
      { text: "AWS Identity and Access Management (IAM)", correct: false },
    ],
    explanation:
      "VPC Flow Logs capture IP traffic information to and from network interfaces in a VPC.",
  },
  {
    question:
      "A company wants to design a centralized storage system to manage the configuration data and passwords for its critical business applications. Which AWS service or capability will meet these requirements MOST cost-effectively?",
    answers: [
      { text: "AWS Systems Manager Parameter Store", correct: true },
      { text: "AWS Secrets Manager", correct: false },
      { text: "AWS Config", correct: false },
      { text: "Amazon S3", correct: false },
    ],
    explanation:
      "AWS Systems Manager Parameter Store is cost-effective for managing configuration data and passwords.",
  },
  {
    question:
      "A company plans to deploy containers on AWS. The company wants full control of the compute resources that host the containers. Which AWS service will meet these requirements?",
    answers: [
      { text: "Amazon Elastic Kubernetes Service", correct: false },
      { text: "AWS Fargate", correct: false },
      { text: "Amazon EC2", correct: true },
      { text: "Amazon Elastic Container Service (Amazon ECS)", correct: false },
    ],
    explanation:
      "Full control is the key word. ECS is a managed container service, which means the customer does not have control over the underlying compute resources.",
  },
  {
    question:
      "Which AWS service or feature allows users to create new AWS accounts, group multiple accounts to organize workflows, and apply policies to groups of accounts?",
    answers: [
      { text: "AWS Identity and Access Management (IAM)", correct: false },
      { text: "AWS Trusted Advisor", correct: false },
      { text: "AWS CloudFormation", correct: false },
      { text: "AWS Organizations", correct: true },
    ],
    explanation:
      "AWS Organizations enables users to create and manage multiple AWS accounts, applying policies and organizing workflows across them.",
  },
  {
    question:
      "A company wants to store and retrieve files in Amazon S3 for its existing on-premises applications by using industry-standard file system protocols. Which AWS service will meet these requirements?",
    answers: [
      { text: "AWS DataSync", correct: false },
      { text: "AWS Snowball Edge", correct: false },
      { text: "Amazon S3 File Gateway", correct: true },
      { text: "AWS Transfer Family", correct: false },
    ],
    explanation:
      "Amazon S3 File Gateway provides a file interface to store files as objects in S3 using standard file protocols.",
  },
  {
    question:
      "A company wants to block SQL injection attacks. Which AWS service or feature should the company use to meet this requirement?",
    answers: [
      { text: "AWS WAF", correct: true },
      { text: "Network ACLs", correct: false },
      { text: "Security groups", correct: false },
      { text: "AWS Certificate Manager (ACM)", correct: false },
    ],
    explanation:
      "AWS WAF protects web applications from common exploits, including SQL injection and cross-site scripting.",
  },
  {
    question:
      "A company wants a unified tool to provide a consistent method to interact with AWS services. Which AWS service or tool will meet this requirement?",
    answers: [
      { text: "AWS CLI", correct: true },
      { text: "Amazon Elastic Container Service (Amazon ECS)", correct: false },
      { text: "AWS Cloud9", correct: false },
      { text: "AWS Virtual Private Network (AWS VPN)", correct: false },
    ],
    explanation:
      "The AWS Command Line Interface (AWS CLI) is a unified tool to manage your AWS services through the command line.",
  },
  {
    question:
      "A company needs to evaluate its AWS environment and provide best practice recommendations in five categories: cost, performance, service limits, fault tolerance and security. Which AWS service can the company use to meet these requirements?",
    answers: [
      { text: "AWS Shield", correct: false },
      { text: "AWS WAF", correct: false },
      { text: "AWS Trusted Advisor", correct: true },
      { text: "AWS Service Catalog", correct: false },
    ],
    explanation:
      "AWS Trusted Advisor provides recommendations across cost, performance, security, fault tolerance, and service limits.",
  },
  {
    question:
      "Which perspective in the AWS Cloud Adoption Framework (AWS CAF) includes capabilities for configuration management and patch management?",
    answers: [
      { text: "Platform", correct: false },
      { text: "Operations", correct: true },
      { text: "Security", correct: false },
      { text: "Governance", correct: false },
    ],
    explanation:
      "The Operations perspective of AWS CAF includes capabilities such as configuration and patch management.",
  },
  {
    question:
      "A company has a compute workload that is steady, predictable, and uninterruptible. Which Amazon EC2 instance purchasing options meet these requirements MOST cost-effectively? (Choose two.)",
    answers: [
      { text: "On-Demand Instances", correct: true },
      { text: "Reserved Instances", correct: true },
      { text: "Spot Instances", correct: false },
      { text: "Savings Plans", correct: false },
    ],
    explanation:
      "Reserved Instances provide cost savings for predictable workloads, while On-Demand Instances offer flexibility.",
  },
  {
    question:
      "Which Amazon EC2 pricing model is the MOST cost efficient for an uninterruptible workload that runs once a year for 24 hours?",
    answers: [
      { text: "On-Demand Instances", correct: true },
      { text: "Reserved Instances", correct: false },
      { text: "Spot Instances", correct: false },
      { text: "Dedicated Instances", correct: false },
    ],
    explanation:
      "On-Demand Instances allow for pay-per-use without long-term commitments, suitable for a single yearly run.",
  },
  {
    question:
      "Which option is a shared responsibility between AWS and its customers under the AWS shared responsibility model?",
    answers: [
      {
        text: "Configuration of Amazon EC2 instance operating systems",
        correct: true,
      },
      {
        text: "Application file system server-side encryption",
        correct: false,
      },
      { text: "Patch management", correct: false },
      { text: "Security of the physical infrastructure", correct: false },
    ],
    explanation:
      "Customers are responsible for configuring their operating systems, while AWS manages the physical infrastructure.",
  },
  {
    question:
      "A company wants to migrate its on-premises workloads to the AWS Cloud. The company wants to separate workloads for chargeback to different departments. Which AWS services or features will meet these requirements? (Choose two.)",
    answers: [
      { text: "Placement groups", correct: false },
      { text: "Consolidated billing", correct: true },
      { text: "Edge locations", correct: false },
      { text: "Multiple AWS accounts", correct: true },
    ],
    explanation:
      "Consolidated billing and multiple AWS accounts help in separating workloads for financial tracking.",
  },
  {
    question:
      "Which task is a responsibility of AWS, according to the AWS shared responsibility model?",
    answers: [
      {
        text: "Enable client-side encryption for objects that are stored in Amazon S3.",
        correct: false,
      },
      {
        text: "Configure IAM security policies to comply with the principle of least privilege.",
        correct: false,
      },
      {
        text: "Patch the guest operating system on an Amazon EC2 instance.",
        correct: false,
      },
      { text: "Apply updates to the Nitro Hypervisor.", correct: true },
    ],
    explanation:
      "AWS is responsible for maintaining and updating the underlying infrastructure, including the Nitro Hypervisor.",
  },
  {
    question: "Which option is a benefit of using AWS for cloud computing?",
    answers: [
      { text: "Trade variable expense for fixed expense", correct: false },
      { text: "Pay-as-you-go pricing", correct: true },
      { text: "Decreased speed and agility", correct: false },
      {
        text: "Spending money running and maintaining data centers",
        correct: false,
      },
    ],
    explanation:
      "AWS enables customers to trade fixed costs for variable expenses with pay-as-you-go pricing.",
  },
  {
    question:
      "Which option is an AWS Cloud Adoption Framework (AWS CAF) business perspective capability?",
    answers: [
      { text: "Culture evolution", correct: false },
      { text: "Event management", correct: false },
      { text: "Data monetization", correct: true },
      { text: "Platform architecture", correct: false },
    ],
    explanation:
      "Data monetization is a capability within the business perspective of AWS CAF.",
  },
  {
    question:
      "A company is assessing its AWS Business Support plan to determine if the plan still meets the company’s needs. The company is considering switching to AWS Enterprise Support. Which additional benefit will the company receive with AWS Enterprise Support?",
    answers: [
      { text: "A full set of AWS Trusted Advisor checks", correct: false },
      {
        text: "Phone, email, and chat access to cloud support engineers 24 hours a day, 7 days a week",
        correct: false,
      },
      {
        text: "A designated technical account manager (TAM) to assist in monitoring and optimization",
        correct: true,
      },
      {
        text: "A consultative review and architecture guidance for the company’s applications",
        correct: false,
      },
    ],
    explanation:
      "Enterprise Support provides a designated Technical Account Manager (TAM) for tailored guidance.",
  },
  {
    question:
      "Which pricing model will interrupt a running Amazon EC2 instance if capacity becomes temporarily unavailable?",
    answers: [
      { text: "On-Demand Instances", correct: false },
      { text: "Standard Reserved Instances", correct: false },
      { text: "Spot Instances", correct: true },
      { text: "Convertible Reserved Instances", correct: false },
    ],
    explanation:
      "Spot Instances can be interrupted by AWS when the capacity is needed for other purposes.",
  },
  {
    question:
      "Which options are AWS Cloud Adoption Framework (AWS CAF) security perspective capabilities? (Choose two.)",
    answers: [
      { text: "Observability", correct: false },
      { text: "Incident and problem management", correct: true },
      { text: "Incident response", correct: true },
      { text: "Infrastructure protection", correct: false },
    ],
    explanation:
      "Incident and problem management, along with incident response, are part of the security perspective.",
  },
  {
    question:
      "A company wants to run its workload on Amazon EC2 instances for more than 1 year. This workload will run continuously. Which option offers a discounted hourly rate compared to the hourly rate of On-Demand Instances?",
    answers: [
      { text: "AWS Graviton processor", correct: false },
      { text: "Dedicated Hosts", correct: false },
      { text: "EC2 Instance Savings Plans", correct: true },
      { text: "Amazon EC2 Auto Scaling instances", correct: false },
    ],
    explanation:
      "EC2 Instance Savings Plans provide a cost-effective option for continuous workloads.",
  },
  {
    question:
      "Which characteristic of the AWS Cloud helps users eliminate underutilized CPU capacity?",
    answers: [
      { text: "Agility", correct: false },
      { text: "Elasticity", correct: true },
      { text: "Reliability", correct: false },
      { text: "Durability", correct: false },
    ],
    explanation:
      "Elasticity allows users to scale computing resources up or down according to demand, minimizing waste.",
  },
  {
    question:
      "Which AWS services can a company use to achieve a loosely coupled architecture? (Choose two.)",
    answers: [
      { text: "Amazon WorkSpaces", correct: false },
      { text: "Amazon Simple Queue Service (Amazon SQS)", correct: true },
      { text: "Amazon Connect", correct: false },
      { text: "AWS Step Functions", correct: true },
    ],
    explanation:
      "SQS and AWS Step Functions facilitate loosely coupled architecture by allowing decoupled communication and orchestration.",
  },
  {
    question:
      "Which AWS Cloud service can send alerts to customers if custom spending thresholds are exceeded?",
    answers: [
      { text: "AWS Budgets", correct: true },
      { text: "AWS Cost Explorer", correct: false },
      { text: "AWS Cost Allocation Tags", correct: false },
      { text: "AWS Organizations", correct: false },
    ],
    explanation:
      "AWS Budgets allows users to set custom spending limits and receive alerts when those limits are reached.",
  },
  {
    question:
      "A company plans to migrate to the AWS Cloud. The company wants to use the AWS Cloud Adoption Framework (AWS CAF) to define and track business outcomes as part of its cloud transformation journey. Which AWS CAF governance perspective capability will meet these requirements?",
    answers: [
      { text: "Benefits management", correct: true },
      { text: "Risk management", correct: false },
      { text: "Application portfolio management", correct: false },
      { text: "Cloud financial management", correct: false },
    ],
    explanation:
      "Benefits management is key for defining and tracking business outcomes during cloud transformation.",
  },
  {
    question:
      "A company needs to quickly and securely move files over long distances between its client and an Amazon S3 bucket. Which S3 feature will meet this requirement?",
    answers: [
      { text: "S3 Versioning", correct: false },
      { text: "S3 Transfer Acceleration", correct: true },
      { text: "S3 ACLs", correct: false },
      { text: "S3 Intelligent-Tiering", correct: false },
    ],
    explanation:
      "S3 Transfer Acceleration speeds up file uploads by routing through AWS edge locations.",
  },
  {
    question:
      "A company needs to continuously run an experimental workload on an Amazon EC2 instance and stop the instance after 12 hours. Which instance purchasing option will meet this requirement MOST cost-effectively?",
    answers: [
      { text: "On-Demand Instances", correct: true },
      { text: "Reserved Instances", correct: false },
      { text: "Spot Instances", correct: false },
      { text: "Dedicated Instances", correct: false },
    ],
    explanation:
      "On-Demand Instances allow for flexible pricing and are ideal for short-term workloads.",
  },
  {
    question:
      "Which cloud transformation journey phase of the AWS Cloud Adoption Framework (AWS CAF) focuses on demonstrating how the cloud helps accelerate business outcomes?",
    answers: [
      { text: "Scale", correct: false },
      { text: "Envision", correct: true },
      { text: "Align", correct: false },
      { text: "Launch", correct: false },
    ],
    explanation:
      "The Envision phase focuses on identifying opportunities and demonstrating cloud value.",
  },
  {
    question:
      "Which option is a customer responsibility under the AWS shared responsibility model?",
    answers: [
      {
        text: "Maintenance of underlying hardware of Amazon EC2 instances",
        correct: false,
      },
      { text: "Application data security", correct: true },
      { text: "Physical security of data centers", correct: false },
      { text: "Maintenance of VPC components", correct: false },
    ],
    explanation:
      "Customers are responsible for securing their application data.",
  },
  {
    question:
      "A company wants its Amazon EC2 instances to operate in a highly available environment, even if there is a natural disaster in a particular geographic area. Which approach will achieve this goal?",
    answers: [
      { text: "Use EC2 instances in multiple AWS Regions", correct: true },
      {
        text: "Use EC2 instances in multiple Amazon CloudFront locations",
        correct: false,
      },
      { text: "Use EC2 instances in multiple edge locations", correct: false },
      { text: "Use EC2 instances in AWS Local Zones.", correct: false },
    ],
    explanation:
      "Deploying EC2 instances across multiple AWS Regions ensures high availability during geographic disruptions.",
  },
  {
    question:
      "A company wants to modernize and convert a monolithic application into microservices. The company wants to move the application to AWS. Which migration strategy should the company use?",
    answers: [
      { text: "Rehost", correct: false },
      { text: "Replatform", correct: false },
      { text: "Repurchase", correct: false },
      { text: "Refactor", correct: true },
    ],
    explanation:
      "Refactoring involves modifying the application to better fit the cloud environment, which is necessary for microservices.",
  },
  {
    question:
      "A systems administrator created a new IAM user for a developer and assigned the user an access key instead of a user name and password. What is the access key used for?",
    answers: [
      {
        text: "To access the AWS account as the AWS account root user",
        correct: false,
      },
      {
        text: "To access the AWS account through the AWS Management Console",
        correct: false,
      },
      { text: "To access the AWS account through a CLI", correct: true },
      { text: "To access all of a company’s AWS accounts", correct: false },
    ],
    explanation:
      "Access keys are used for programmatic access to AWS services via the CLI or SDK.",
  },
  {
    question:
      "Which option is an environment that consists of one or more data centers?",
    answers: [
      { text: "Amazon CloudFront", correct: false },
      { text: "Availability Zone", correct: true },
      { text: "VPC", correct: false },
      { text: "AWS Outposts", correct: false },
    ],
    explanation:
      "An Availability Zone is made up of one or more discrete data centers with redundant infrastructure.",
  },
  {
    question:
      "A company is moving an on-premises data center to the AWS Cloud. The company must migrate 50 petabytes of file storage data to AWS with the least possible operational overhead. Which AWS service or resource should the company use to meet these requirements?",
    answers: [
      { text: "AWS Snowmobile", correct: true },
      { text: "AWS Snowball Edge", correct: false },
      { text: "AWS Data Exchange", correct: false },
      { text: "AWS Database Migration Service (AWS DMS)", correct: false },
    ],
    explanation:
      "AWS Snowmobile is the appropriate choice for migrating 50 petabytes of file storage data to AWS with the least possible operational overhead. Snowmobile is a data transfer service that physically transports massive amounts of data to the AWS Cloud. It is a secure and efficient solution for extremely large data transfers.",
  },
  {
    question:
      "A company has an application with robust hardware requirements. The application must be accessed by students who are using lightweight, low-cost laptops. Which AWS service will help the company deploy the application without investing in backend infrastructure or high-end client hardware?",
    answers: [
      { text: "Amazon AppStream 2.0", correct: true },
      { text: "AWS AppSync", correct: false },
      { text: "Amazon WorkLink", correct: false },
      { text: "AWS Elastic Beanstalk", correct: false },
    ],
    explanation:
      "Amazon AppStream 2.0 streams applications to lightweight laptops, ensuring that students can access applications with robust hardware requirements without needing high-end client hardware.",
  },
  {
    question:
      "Which of the following is a recommended design principle for AWS Cloud architecture?",
    answers: [
      { text: "Design tightly coupled components", correct: false },
      {
        text: "Build a single application component that can handle all the application functionality",
        correct: false,
      },
      {
        text: "Make large changes on fewer iterations to reduce chances of failure",
        correct: false,
      },
      {
        text: "Avoid monolithic architecture by segmenting workloads.",
        correct: true,
      },
    ],
    explanation:
      "Avoiding monolithic architecture by segmenting workloads allows for greater scalability, resilience, and flexibility in the cloud, aligning with best practices for modern cloud-native architectures.",
  },
  {
    question:
      "Which AWS service helps users audit API activity across their AWS account?",
    answers: [
      { text: "AWS CloudTrail", correct: true },
      { text: "Amazon Inspector", correct: false },
      { text: "AWS WAF", correct: false },
      { text: "AWS Config", correct: false },
    ],
    explanation:
      "With AWS CloudTrail, you can monitor your AWS deployments by getting a history of AWS API calls, providing insights into user activity and resource access.",
  },
  {
    question:
      "Which task is a customer’s responsibility, according to the AWS shared responsibility model?",
    answers: [
      { text: "Management of the guest operating systems", correct: true },
      {
        text: "Maintenance of the configuration of infrastructure devices",
        correct: false,
      },
      {
        text: "Management of the host operating systems and virtualization",
        correct: false,
      },
      {
        text: "Maintenance of the software that powers Availability Zones",
        correct: false,
      },
    ],
    explanation:
      "According to the AWS shared responsibility model, customers are responsible for managing their own guest operating systems and associated applications.",
  },
  {
    question:
      "A company wants to automatically add and remove Amazon EC2 instances. The company wants the EC2 instances to adjust to varying workloads dynamically. Which service or feature will meet these requirements?",
    answers: [
      { text: "Amazon DynamoDB", correct: false },
      { text: "Amazon EC2 Spot Instances", correct: false },
      { text: "AWS Snow Family", correct: false },
      { text: "Amazon EC2 Auto Scaling", correct: true },
    ],
    explanation:
      "Amazon EC2 Auto Scaling automatically adjusts the number of EC2 instances in response to changing workloads, helping maintain application performance.",
  },
  {
    question:
      "A user wants to securely automate the management and rotation of credentials that are shared between applications, while spending the least amount of time on managing tasks. Which AWS service or feature can be used to accomplish this?",
    answers: [
      { text: "AWS CloudHSM", correct: false },
      { text: "AWS Key Management Service (AWS KMS)", correct: false },
      { text: "AWS Secrets Manager", correct: true },
      { text: "Server-side encryption", correct: false },
    ],
    explanation:
      "AWS Secrets Manager simplifies the process of rotating, managing, and retrieving credentials securely.",
  },
  {
    question:
      "Which security service automatically recognizes and classifies sensitive data or intellectual property on AWS?",
    answers: [
      { text: "Amazon GuardDuty", correct: false },
      { text: "Amazon Macie", correct: true },
      { text: "Amazon Inspector", correct: false },
      { text: "AWS Shield", correct: false },
    ],
    explanation:
      "Amazon Macie discovers sensitive data using machine learning, providing visibility and automated protection against data security risks.",
  },
  {
    question:
      "Which actions are best practices for an AWS account root user? (Choose two.)",
    answers: [
      { text: "Share root user credentials with team members", correct: false },
      {
        text: "Create multiple root users for the account, separated by environment.",
        correct: false,
      },
      {
        text: "Enable multi-factor authentication (MFA) on the root user",
        correct: true,
      },
      {
        text: "Create an IAM user with administrator privileges for daily administrative tasks, instead of using the root user",
        correct: true,
      },
    ],
    explanation:
      "Best practices include enabling MFA for security and using IAM users for daily tasks to reduce reliance on the highly privileged root user account.",
  },
  {
    question:
      "A company is running a critical workload on an Amazon RDS DB instance. The company needs the DB instance to be highly available with a recovery time of less than 5 minutes. Which solution will meet these requirements?",
    answers: [
      { text: "Create a read replica of the DB instance.", correct: false },
      {
        text: "Create a template of the DB instance by using AWS CloudFormation",
        correct: false,
      },
      {
        text: "Take frequent snapshots of the DB instance. Store the snapshots in Amazon S3.",
        correct: false,
      },
      {
        text: "Modify the DB instance to be a Multi-AZ deployment",
        correct: true,
      },
    ],
    explanation:
      "Modifying the DB instance to be a Multi-AZ deployment ensures high availability and a quick recovery time in the event of a failure.",
  },
  {
    question:
      "A company plans to migrate its application to AWS and run the application on Amazon EC2 instances. The application will have continuous usage for 1 year. Which EC2 instance purchasing option will meet these requirements MOST cost-effectively?",
    answers: [
      { text: "Reserved Instances", correct: true },
      { text: "Spot Instances", correct: false },
      { text: "On-Demand Instances", correct: false },
      { text: "Dedicated Hosts", correct: false },
    ],
    explanation:
      "Reserved Instances provide significant cost savings for applications with continuous usage over a long period.",
  },
  {
    question:
      "A company needs to transfer data between an Amazon S3 bucket and an on-premises application. Who is responsible for the security of this data, according to the AWS shared responsibility model?",
    answers: [
      { text: "The company", correct: true },
      { text: "AWS", correct: false },
      { text: "Firewall vendor", correct: false },
      { text: "AWS Marketplace partner", correct: false },
    ],
    explanation:
      "According to the shared responsibility model, customers are responsible for securing their own data and managing access when transferring data to and from AWS services.",
  },
  {
    question:
      "Which pillar of the AWS Well-Architected Framework refers to the ability of a system to recover from infrastructure or service disruptions and dynamically acquire computing resources to meet demand?",
    answers: [
      { text: "Security", correct: false },
      { text: "Reliability", correct: true },
      { text: "Performance efficiency", correct: false },
      { text: "Cost optimization", correct: false },
    ],
    explanation:
      "Reliability refers to the system's ability to recover from disruptions and dynamically adjust resources to meet demand.",
  },
  {
    question:
      "A company wants to identify Amazon S3 buckets that are shared with another AWS account. Which AWS service or feature will meet these requirements?",
    answers: [
      { text: "AWS Lake Formation", correct: false },
      { text: "IAM credential report", correct: false },
      { text: "Amazon CloudWatch", correct: false },
      { text: "IAM Access Analyzer", correct: true },
    ],
    explanation:
      "IAM Access Analyzer helps identify resources that are shared with external entities, including S3 buckets.",
  },
  {
    question:
      "Which AWS service gives users the ability to build interactive business intelligence dashboards that include machine learning insights?",
    answers: [
      { text: "Amazon Athena", correct: false },
      { text: "Amazon Kendra", correct: false },
      { text: "Amazon QuickSight", correct: true },
      { text: "Amazon Redshift", correct: false },
    ],
    explanation:
      "Amazon QuickSight allows users to create interactive dashboards with data visualization, including machine learning insights.",
  },
  {
    question:
      "Which of the following is an AWS value proposition that describes a user’s ability to scale infrastructure based on demand?",
    answers: [
      { text: "Speed of innovation", correct: false },
      { text: "Resource elasticity", correct: true },
      { text: "Decoupled architecture", correct: false },
      { text: "Global deployment", correct: false },
    ],
    explanation:
      "Resource elasticity refers to the ability to automatically acquire and release resources based on current demand.",
  },
  {
    question:
      "Which action is a security best practice for access to sensitive data that is stored in an Amazon S3 bucket?",
    answers: [
      {
        text: "Enable S3 Cross-Region Replication (CRR) on the S3 bucket",
        correct: false,
      },
      {
        text: "Use IAM roles for applications that require access to the S3 bucket",
        correct: true,
      },
      {
        text: "Configure AWS WAF to prevent unauthorized access to the S3 bucket.",
        correct: false,
      },
      {
        text: "Configure Amazon GuardDuty to prevent unauthorized access to the S3 bucket",
        correct: false,
      },
    ],
    explanation:
      "Using IAM roles provides secure permissions for applications to access S3 buckets, adhering to the principle of least privilege.",
  },
  {
    question:
      "A company wants to know more about the benefits offered by cloud computing. The company wants to understand the operational advantage of agility. How does AWS provide agility for users?",
    answers: [
      {
        text: "The ability to ensure high availability by deploying workloads to multiple regions",
        correct: false,
      },
      {
        text: "A pay-as-you-go model for many services and resources",
        correct: false,
      },
      {
        text: "The ability to transfer infrastructure management to the AWS Cloud",
        correct: false,
      },
      {
        text: "The ability to provision and deprovision resources quickly with minimal effort",
        correct: true,
      },
    ],
    explanation:
      "AWS allows users to rapidly provision and deprovision resources, enhancing agility and responsiveness to changing business needs.",
  },
  {
    question:
      "A company needs a central user portal so that users can log in to third-party business applications that support Security Assertion Markup Language (SAML) 2.0. Which AWS service will meet this requirement?",
    answers: [
      { text: "AWS Identity and Access Management (IAM)", correct: false },
      { text: "Amazon Cognito", correct: false },
      { text: "AWS IAM Identity Center (AWS Single Sign-On)", correct: true },
      { text: "AWS CLI", correct: false },
    ],
    explanation:
      "AWS IAM Identity Center provides single sign-on access to AWS and SAML 2.0 applications, streamlining user authentication.",
  },
  {
    question:
      "Which AWS service should users use to learn about AWS service availability and operations?",
    answers: [
      { text: "Amazon EventBridge", correct: false },
      { text: "AWS Service Catalog", correct: false },
      { text: "AWS Control Tower", correct: false },
      { text: "AWS Health Dashboard", correct: true },
    ],
    explanation:
      "The AWS Health Dashboard offers real-time information about the health of AWS services and alerts users to maintenance and other important events.",
  },
  {
    question:
      "Which AWS service or tool can be used to capture information about inbound and outbound traffic in an Amazon VPC?",
    answers: [
      { text: "VPC Flow Logs", correct: true },
      { text: "Amazon Inspector", correct: false },
      { text: "VPC endpoint services", correct: false },
      { text: "NAT gateway", correct: false },
    ],
    explanation:
      "VPC Flow Logs capture information about traffic in and out of a VPC, enabling monitoring and analysis of network traffic.",
  },
  {
    question:
      "What is the customer ALWAYS responsible for managing, according to the AWS shared responsibility model?",
    answers: [
      { text: "Software licenses", correct: false },
      { text: "Networking", correct: false },
      { text: "Customer data", correct: true },
      { text: "Encryption keys", correct: false },
    ],
    explanation:
      "Customers are always responsible for managing their own customer data in the AWS shared responsibility model.",
  },
  {
    question:
      "Which AWS service can be used to retrieve compliance reports on demand?",
    answers: [
      { text: "AWS Secrets Manager", correct: false },
      { text: "AWS Artifact", correct: true },
      { text: "AWS Security Hub", correct: false },
      { text: "AWS Certificate Manager", correct: false },
    ],
    explanation:
      "AWS Artifact provides on-demand access to compliance reports and other related documentation.",
  },
  {
    question:
      "Which AWS service enables users to check for vulnerabilities on Amazon EC2 instances by using predefined assessment templates?",
    answers: [
      { text: "AWS WAF", correct: false },
      { text: "AWS Trusted Advisor", correct: false },
      { text: "Amazon Inspector", correct: true },
      { text: "AWS Shield", correct: false },
    ],
    explanation:
      "Amazon Inspector allows users to run assessments for vulnerabilities on EC2 instances using predefined templates.",
  },
  {
    question:
      "A company plans to migrate to the AWS Cloud. The company is gathering information about its on-premises infrastructure and requires information such as the hostname, IP address, and MAC address. Which AWS service will meet these requirements?",
    answers: [
      { text: "AWS DataSync", correct: false },
      { text: "AWS Application Migration Service", correct: false },
      { text: "AWS Application Discovery Service", correct: true },
      { text: "AWS Database Migration Service (AWS DMS)", correct: false },
    ],
    explanation:
      "AWS Application Discovery Service collects configuration information about on-premises resources, including hostnames, IP addresses, and MAC addresses.",
  },
  {
    question: "Which action will help increase security in the AWS Cloud?",
    answers: [
      { text: "Enable programmatic access for all IAM users.", correct: false },
      {
        text: "Use IAM users instead of IAM roles to delegate permissions",
        correct: false,
      },
      { text: "Rotate access keys on a recurring basis", correct: true },
      {
        text: "Use inline policies instead of customer managed policies",
        correct: false,
      },
    ],
    explanation:
      "Rotating access keys regularly is a best practice to enhance security by reducing the risk of unauthorized access.",
  },
  {
    question:
      "A company is planning to migrate its application to the AWS Cloud. Which AWS tool or set of resources should the company use to analyze and assess its readiness for migration?",
    answers: [
      { text: "AWS Cloud Adoption Framework (AWS CAF)", correct: true },
      { text: "AWS Pricing Calculator", correct: false },
      { text: "AWS Well-Architected Framework", correct: false },
      { text: "AWS Budgets", correct: false },
    ],
    explanation:
      "AWS Cloud Adoption Framework (AWS CAF) helps organizations assess their readiness for migration and identify necessary steps.",
  },
  {
    question:
      "Which of the following describes some of the core functionality of Amazon S3?",
    answers: [
      {
        text: "Amazon S3 is a high-performance block storage service that is designed for use with Amazon EC2.",
        correct: false,
      },
      {
        text: "Amazon S3 is an object storage service that provides high-level performance, security, scalability, and data availability",
        correct: true,
      },
      {
        text: "Amazon S3 is a fully managed, highly reliable, and scalable file storage system that is accessible over the industry-standard SMB protocol.",
        correct: false,
      },
      {
        text: "Amazon S3 is a scalable, fully managed elastic NFS for use with AWS Cloud services and on-premises resources.",
        correct: false,
      },
    ],
    explanation:
      "Amazon S3 is an object storage service designed for high performance, security, scalability, and data availability.",
  },
  {
    question:
      "Which AWS benefit is demonstrated by on-demand technology services that enable companies to replace upfront fixed expenses with variable expenses?",
    answers: [
      { text: "High availability", correct: false },
      { text: "Economies of scale", correct: false },
      { text: "Pay-as-you-go pricing", correct: true },
      { text: "Global reach", correct: false },
    ],
    explanation:
      "Pay-as-you-go pricing allows users to pay only for the resources they consume, turning fixed expenses into variable expenses.",
  },
  {
    question:
      "Which AWS services or features enable users to connect on-premises networks to a VPC? (Choose two.)",
    answers: [
      { text: "AWS VPN", correct: true },
      { text: "Elastic Load Balancing", correct: false },
      { text: "AWS Direct Connect", correct: true },
      { text: "VPC peering", correct: false },
    ],
    explanation:
      "AWS VPN and AWS Direct Connect are services that enable secure connections from on-premises networks to Amazon VPC.",
  },
  {
    question:
      "A user needs to quickly deploy a nonrelational database on AWS. The user does not want to manage the underlying hardware or the database software. Which AWS service can be used to accomplish this?",
    answers: [
      { text: "Amazon RDS", correct: false },
      { text: "Amazon DynamoDB", correct: true },
      { text: "Amazon Aurora", correct: false },
      { text: "Amazon Redshift", correct: false },
    ],
    explanation:
      "Amazon DynamoDB is a fully managed NoSQL database service that handles the infrastructure, so users do not need to manage the underlying hardware or software.",
  },
  {
    question:
      "Which actions are examples of a company’s effort to rightsize its AWS resources to control cloud costs? (Choose two.)",
    answers: [
      {
        text: "Switch from Amazon RDS to Amazon DynamoDB to accommodate NoSQL datasets",
        correct: true,
      },
      {
        text: "Base the selection of Amazon EC2 instance types on past utilization patterns",
        correct: true,
      },
      {
        text: "Use Amazon S3 Lifecycle policies to move objects that users access infrequently to lower-cost storage tiers",
        correct: false,
      },
      { text: "Use Multi-AZ deployments for Amazon RDS", correct: false },
    ],
    explanation:
      "Both actions focus on optimizing resource use based on needs and past performance to control costs.",
  },
  {
    question:
      "Which AWS service or feature can a company use to apply security rules to specific Amazon EC2 instances?",
    answers: [
      { text: "Network ACLs", correct: false },
      { text: "Security groups", correct: true },
      { text: "AWS Trusted Advisor", correct: false },
      { text: "AWS WAF", correct: false },
    ],
    explanation:
      "Security groups act as virtual firewalls for EC2 instances, allowing you to specify rules for inbound and outbound traffic.",
  },
  {
    question:
      "Which design principles support the reliability pillar of the AWS Well-Architected Framework? (Choose two.)",
    answers: [
      { text: "Perform operations as code.", correct: false },
      { text: "Enable traceability.", correct: true },
      { text: "Automatically scale to meet demand", correct: true },
      { text: "Automatically recover from failure.", correct: true },
    ],
    explanation:
      "Both principles enhance system reliability by ensuring that failures can be identified and recovered from quickly.",
  },
  {
    question:
      "A company that uses AWS needs to transfer 2 TB of data. Which type of transfer of that data would result in no cost for the company?",
    answers: [
      { text: "Inbound data transfer from the internet", correct: true },
      { text: "Outbound data transfer to the internet", correct: false },
      { text: "Data transfer between AWS Regions", correct: false },
      { text: "Data transfer between Availability Zones", correct: false },
    ],
    explanation:
      "AWS does not charge for data transferred into its services, while outbound transfers and transfers between regions incur costs.",
  },
  {
    question:
      "A company wants to create templates that the company can reuse to deploy multiple AWS resources. Which AWS service or feature can the company use to meet this requirement?",
    answers: [
      { text: "AWS Marketplace", correct: false },
      { text: "Amazon Machine Image (AMI)", correct: false },
      { text: "AWS CloudFormation", correct: true },
      { text: "AWS OpsWorks", correct: false },
    ],
    explanation:
      "AWS CloudFormation enables you to use a template file to create and delete a collection of resources together as a single unit (a stack).",
  },
  {
    question:
      "A company is building an application that requires the ability to send, store, and receive messages between application components. The company has another requirement to process messages in first-in, first-out (FIFO) order. Which AWS service should the company use?",
    answers: [
      { text: "AWS Step Functions", correct: false },
      {
        text: "Amazon Simple Notification Service (Amazon SNS)",
        correct: false,
      },
      { text: "Amazon Kinesis Data Streams", correct: false },
      { text: "Amazon Simple Queue Service (Amazon SQS)", correct: true },
    ],
    explanation:
      "Amazon SQS FIFO queues preserve the order in which messages are sent and received, ensuring FIFO processing.",
  },
  {
    question:
      "A company is using a central data platform to manage multiple types of data for its customers. The company wants to use AWS services to discover, transform, and visualize the data. Which combination of AWS services should the company use to meet these requirements? (Choose two.)",
    answers: [
      { text: "AWS Glue", correct: true },
      { text: "Amazon Redshift", correct: false },
      { text: "Amazon QuickSight", correct: true },
      { text: "Amazon Quantum Ledger Database (Amazon QLDB)", correct: false },
    ],
    explanation:
      "AWS Glue can discover and transform data, while Amazon QuickSight is used for visualization.",
  },
  {
    question:
      "A global company wants to migrate its third-party applications to the AWS Cloud. The company wants help from a global team of experts to complete the migration faster and more reliably in accordance with AWS internal best practices. Which AWS service or resource will meet these requirements?",
    answers: [
      { text: "AWS Support", correct: false },
      { text: "AWS Professional Services", correct: true },
      { text: "AWS Launch Wizard", correct: false },
      { text: "AWS Managed Services (AMS)", correct: false },
    ],
    explanation:
      "AWS Professional Services provide guidance and expertise for successful migrations.",
  },
  {
    question:
      "An e-learning platform needs to run an application for 2 months each year. The application will be deployed on Amazon EC2 instances. Any application downtime during those 2 months must be avoided. Which EC2 purchasing option will meet these requirements MOST cost-effectively?",
    answers: [
      { text: "Reserved Instances", correct: false },
      { text: "Dedicated Hosts", correct: false },
      { text: "Spot Instances", correct: false },
      { text: "On-Demand Instances", correct: true },
    ],
    explanation:
      "On-Demand Instances provide flexibility for applications that do not run continuously, avoiding commitment.",
  },
  {
    question:
      "An online gaming company needs to choose a purchasing option to run its Amazon EC2 instances for 1 year. The web traffic is consistent, and any increases in traffic are predictable. The EC2 instances must be online and available without any disruption. Which EC2 instance purchasing option will meet these requirements MOST cost-effectively?",
    answers: [
      { text: "On-Demand Instances", correct: false },
      { text: "Reserved Instances", correct: true },
      { text: "Spot Instances", correct: false },
      { text: "Spot Fleet", correct: false },
    ],
    explanation:
      "Reserved Instances provide a cost-effective solution for predictable workloads with consistent traffic.",
  },
  {
    question:
      "Which of the following are pillars of the AWS Well-Architected Framework? (Choose two.)",
    answers: [
      { text: "Availability", correct: false },
      { text: "Reliability", correct: true },
      { text: "Scalability", correct: false },
      { text: "Operational excellence", correct: true },
    ],
    explanation:
      "Reliability and Operational excellence are two of the five pillars of the AWS Well-Architected Framework.",
  },
  {
    question:
      "A network engineer needs to build a hybrid cloud architecture connecting on-premises networks to the AWS Cloud using AWS Direct Connect. The company has a few VPCs in a single AWS Region and expects to increase the number of VPCs to hundreds over time. Which AWS service or feature should the engineer use to simplify and scale this connectivity as the VPCs increase in number?",
    answers: [
      { text: "VPC endpoints", correct: false },
      { text: "AWS Transit Gateway", correct: true },
      { text: "Amazon Route 53", correct: false },
      { text: "AWS Secrets Manager", correct: false },
    ],
    explanation:
      "AWS Transit Gateway simplifies the management of multiple VPC connections.",
  },
  {
    question:
      "A company wants to query its server logs to gain insights about its customers’ experiences. Which AWS service will store this data MOST cost-effectively?",
    answers: [
      { text: "Amazon Aurora", correct: false },
      { text: "Amazon Elastic File System (Amazon EFS)", correct: false },
      { text: "Amazon Elastic Block Store (Amazon EBS)", correct: false },
      { text: "Amazon S3", correct: true },
    ],
    explanation:
      "Amazon S3 is the most cost-effective option for storing large amounts of data such as logs.",
  },
  {
    question:
      "Which AWS service or feature is a browser-based, pre-authenticated service that can be launched directly from the AWS Management Console?",
    answers: [
      { text: "AWS API", correct: false },
      { text: "AWS Lightsail", correct: false },
      { text: "AWS Cloud9", correct: false },
      { text: "AWS CloudShell", correct: true },
    ],
    explanation:
      "AWS CloudShell is a browser-based, pre-authenticated shell that you can launch directly from the AWS Management Console.",
  },
  {
    question:
      "A company wants to migrate its database to a managed AWS service that is compatible with PostgreSQL. Which AWS services will meet these requirements? (Choose two.)",
    answers: [
      { text: "Amazon Athena", correct: false },
      { text: "Amazon RDS", correct: true },
      { text: "Amazon EC2", correct: false },
      { text: "Amazon Aurora", correct: true },
    ],
    explanation:
      "Amazon RDS and Amazon Aurora provide managed database services compatible with PostgreSQL.",
  },
  {
    question:
      "A company has a fleet of cargo ships. The cargo ships have sensors that collect data at sea, where there is intermittent or no internet connectivity. The company needs to collect, format, and process the data at sea and move the data to AWS later. Which AWS service should the company use to meet these requirements?",
    answers: [
      { text: "AWS IoT Core", correct: false },
      { text: "Amazon Lightsail", correct: false },
      { text: "AWS Storage Gateway", correct: false },
      { text: "AWS Snowball Edge", correct: true },
    ],
    explanation:
      "AWS Snowball Edge allows data to be collected and processed at remote locations, then transferred to AWS.",
  },
  {
    question:
      "A company hosts an application on multiple Amazon EC2 instances. The application uses Amazon Simple Notification Service (Amazon SNS) to send messages. Which AWS service or feature will give the application permission to access required AWS services?",
    answers: [
      { text: "AWS Certificate Manager (ACM)", correct: false },
      { text: "IAM roles", correct: true },
      { text: "AWS Security Hub", correct: false },
      { text: "Amazon GuardDuty", correct: false },
    ],
    explanation:
      "IAM roles provide fine-grained access control across AWS services.",
  },
  {
    question:
      "A user has limited knowledge of AWS services, but wants to quickly deploy a scalable Node.js application in the AWS Cloud. Which service should be used to deploy the application?",
    answers: [
      { text: "AWS CloudFormation", correct: false },
      { text: "AWS Elastic Beanstalk", correct: true },
      { text: "Amazon EC2", correct: false },
      { text: "AWS OpsWorks", correct: false },
    ],
    explanation:
      "AWS Elastic Beanstalk is an easy-to-use service for deploying and scaling web applications.",
  },
  {
    question:
      "A company needs a content delivery network that provides secure delivery of data, videos, applications, and APIs to users globally with low latency and high transfer speeds. Which AWS service meets these requirements?",
    answers: [
      { text: "Amazon CloudFront", correct: true },
      { text: "Elastic Load Balancing", correct: false },
      { text: "Amazon S3", correct: false },
      { text: "Amazon Elastic Transcoder", correct: false },
    ],
    explanation:
      "Amazon CloudFront is a content delivery network that delivers data with low latency and high transfer speeds.",
  },
  {
    question:
      "A company needs to use third-party software for its workload on AWS. Which AWS service or feature can the company use to purchase the software?",
    answers: [
      { text: "AWS Resource Access Manager", correct: false },
      { text: "AWS Managed Services", correct: false },
      { text: "AWS License Manager", correct: false },
      { text: "AWS Marketplace", correct: true },
    ],
    explanation:
      "AWS Marketplace allows companies to purchase and deploy third-party software on AWS.",
  },
  {
    question:
      "A company needs fully managed, highly reliable, and scalable file storage that is accessible over the Server Message Block (SMB) protocol. Which AWS service will meet these requirements?",
    answers: [
      { text: "Amazon S3", correct: false },
      { text: "Amazon Elastic File System (Amazon EFS)", correct: false },
      { text: "Amazon FSx for Windows File Server", correct: true },
      { text: "Amazon Elastic Block Store (Amazon EBS)", correct: false },
    ],
    explanation:
      "Amazon FSx for Windows File Server provides fully managed, highly reliable, and scalable file storage that is accessible over the industry-standard Server Message Block (SMB) protocol.",
  },
  {
    question:
      "A company needs to centrally configure and manage Amazon VPC security groups across multiple AWS accounts within an organization in AWS Organizations. Which AWS service should the company use to meet these requirements?",
    answers: [
      { text: "AWS Firewall Manager", correct: true },
      { text: "Amazon GuardDuty", correct: false },
      { text: "Amazon Detective", correct: false },
      { text: "AWS WAF", correct: false },
    ],
    explanation:
      "AWS Firewall Manager helps you manage and configure VPC security groups centrally across multiple accounts.",
  },
  {
    question:
      "Which task is a responsibility of AWS, according to the AWS shared responsibility model?",
    answers: [
      {
        text: "Configure identity and access management for applications",
        correct: false,
      },
      {
        text: "Manage encryption options for data that is stored on AWS",
        correct: false,
      },
      {
        text: "Configure security groups for Amazon EC2 instances",
        correct: false,
      },
      {
        text: "Maintain the physical hardware of the infrastructure",
        correct: true,
      },
    ],
    explanation:
      "AWS is responsible for maintaining the physical hardware that supports its cloud services.",
  },
  {
    question:
      "A company has an Amazon EC2 instance in a private subnet. The company wants to initiate a connection to the internet to pull operating system updates while preventing traffic from the internet from accessing the EC2 instance. Which AWS managed service allows this?",
    answers: [
      { text: "VPC endpoint", correct: false },
      { text: "NAT gateway", correct: true },
      { text: "Amazon PrivateLink", correct: false },
      { text: "VPC peering", correct: false },
    ],
    explanation:
      "The NAT gateway allows instances in private subnets to connect to the internet for updates while blocking inbound traffic.",
  },
  {
    question:
      "Which actions are the responsibility of AWS, according to the AWS shared responsibility model? (Choose two.)",
    answers: [
      { text: "Securing the virtualization layer", correct: true },
      {
        text: "Patching the operating system on Amazon EC2 instances",
        correct: false,
      },
      {
        text: "Enforcing a strict password policy for IAM users",
        correct: false,
      },
      {
        text: "Patching the operating system on Amazon RDS instances",
        correct: true,
      },
    ],
    explanation:
      "AWS is responsible for securing the virtualization layer and patching managed services like Amazon RDS.",
  },
  {
    question:
      "A company is storing data that will not be frequently accessed in the AWS Cloud. If the company needs to access the data, the data needs to be retrieved within 12 hours. The company wants a solution that is cost-effective for storage costs for each gigabyte. Which Amazon S3 storage class will meet these requirements?",
    answers: [
      { text: "S3 Standard", correct: false },
      { text: "S3 Glacier Flexible Retrieval", correct: true },
      {
        text: "S3 One Zone-Infrequent Access (S3 One Zone-IA)",
        correct: false,
      },
      {
        text: "S3 Standard-Infrequent Access (S3 Standard-IA)",
        correct: false,
      },
    ],
    explanation:
      "S3 Glacier Flexible Retrieval is cost-effective for infrequently accessed data with retrieval times that can be up to 12 hours.",
  },
  {
    question:
      "Which AWS service or resource can be used to identify services that have been used by a user within a specified date range?",
    answers: [
      { text: "Amazon S3 access control lists (ACLs)", correct: false },
      { text: "AWS Certificate Manager (ACM)", correct: false },
      { text: "Network Access Analyzer", correct: false },
      {
        text: "AWS Identity and Access Management Access Analyzer",
        correct: true,
      },
    ],
    explanation:
      "IAM Access Analyzer helps identify AWS services used by a user, leveraging AWS CloudTrail logs.",
  },
  {
    question:
      "A company needs to engage third-party consultants to help maintain and support its AWS environment and the company’s business needs. Which AWS service or resource will meet these requirements?",
    answers: [
      { text: "AWS Support", correct: false },
      { text: "AWS Organizations", correct: false },
      { text: "AWS Service Catalog", correct: false },
      { text: "AWS Partner Network (APN)", correct: true },
    ],
    explanation:
      "The AWS Partner Network (APN) connects companies with qualified third-party consultants and service providers.",
  },
  {
    question:
      "A company wants to create Amazon QuickSight dashboards every week by using its billing data. Which AWS feature or tool can the company use to meet these requirements?",
    answers: [
      { text: "AWS Budgets", correct: false },
      { text: "AWS Cost Explorer", correct: false },
      { text: "AWS Cost and Usage Report", correct: true },
      { text: "AWS Cost Anomaly Detection", correct: false },
    ],
    explanation:
      "The AWS Cost and Usage Report provides detailed billing data that can be used to create QuickSight dashboards.",
  },
  {
    question:
      "A company is planning to move data backups to the AWS Cloud. The company needs to replace on-premises storage with storage that is cloud-based but locally cached. Which AWS service meets these requirements?",
    answers: [
      { text: "AWS Storage Gateway", correct: true },
      { text: "AWS Snowcone", correct: false },
      { text: "AWS Backup", correct: false },
      { text: "Amazon Elastic File System (Amazon EFS)", correct: false },
    ],
    explanation:
      "AWS Storage Gateway provides cloud-based storage solutions with local caching options.",
  },
  {
    question:
      "A company needs to organize its resources and track AWS costs on a detailed level. The company needs to categorize costs by business department, environment, and application. Which solution will meet these requirements?",
    answers: [
      {
        text: "Access the AWS Cost Management console to organize resources, set an AWS budget, and receive notifications of unintentional usage.",
        correct: false,
      },
      {
        text: "Use tags to organize the resources. Activate cost allocation tags to track AWS costs on a detailed level.",
        correct: true,
      },
      {
        text: "Create Amazon CloudWatch dashboards to visually organize and track costs individually.",
        correct: false,
      },
      {
        text: "Access the AWS Billing and Cost Management dashboard to organize and track resource consumption on a detailed level.",
        correct: false,
      },
    ],
    explanation:
      "Using tags and activating cost allocation tags allows for detailed tracking of AWS costs by various categories.",
  },
  {
    question:
      "A company needs to plan, schedule, and run hundreds of thousands of computing jobs on AWS. Which AWS service can the company use to meet this requirement?",
    answers: [
      { text: "AWS Step Functions", correct: false },
      { text: "AWS Service Catalog", correct: false },
      { text: "Amazon Simple Queue Service (Amazon SQS)", correct: false },
      { text: "AWS Batch", correct: true },
    ],
    explanation:
      "AWS Batch is designed for managing and executing batch jobs at any scale.",
  },
  {
    question:
      "Which AWS services or features provide high availability and low latency by enabling failover across different AWS Regions? (Choose two.)",
    answers: [
      { text: "Amazon Route 53", correct: true },
      { text: "Network Load Balancer", correct: false },
      { text: "Amazon S3 Transfer Acceleration", correct: false },
      { text: "AWS Global Accelerator", correct: true },
    ],
    explanation:
      "Amazon Route 53 and AWS Global Accelerator help provide low-latency routing and high availability across AWS Regions.",
  },
  {
    question:
      "Which of the following is a way to use Amazon EC2 Auto Scaling groups to scale capacity in the AWS Cloud?",
    answers: [
      {
        text: "Scale the number of EC2 instances in or out automatically, based on demand",
        correct: true,
      },
      { text: "Use serverless EC2 instances", correct: false },
      {
        text: "Scale the size of EC2 instances up or down automatically, based on demand",
        correct: false,
      },
      {
        text: "Transfer unused CPU resources between EC2 instances",
        correct: false,
      },
    ],
    explanation:
      "Amazon EC2 Auto Scaling groups can automatically adjust the number of instances based on demand.",
  },
  {
    question: "Which abilities are benefits of the AWS Cloud? (Choose two.)",
    answers: [
      { text: "Trade variable expenses for capital expenses.", correct: false },
      { text: "Deploy globally in minutes", correct: true },
      { text: "Plan capacity in advance of deployments", correct: false },
      { text: "Take advantage of economies of scale", correct: true },
    ],
    explanation:
      "AWS Cloud provides the ability to deploy globally quickly and benefit from economies of scale.",
  },
  {
    question:
      "Which AWS security service protects applications from distributed denial of service attacks with always-on detection and automatic inline mitigations?",
    answers: [
      { text: "Amazon Inspector", correct: false },
      { text: "AWS Web Application Firewall (AWS WAF)", correct: false },
      { text: "Elastic Load Balancing (ELB)", correct: false },
      { text: "AWS Shield", correct: true },
    ],
    explanation:
      "AWS Shield offers managed DDoS protection with always-on detection and mitigation.",
  },
  {
    question:
      "Which AWS service allows users to model and provision AWS resources using common programming languages?",
    answers: [
      { text: "AWS CloudFormation", correct: false },
      { text: "AWS CodePipeline", correct: false },
      { text: "AWS Cloud Development Kit (AWS CDK)", correct: true },
      { text: "AWS Systems Manager", correct: false },
    ],
    explanation:
      "AWS CDK allows users to model cloud application resources using familiar programming languages and provision infrastructure.",
  },
  {
    question:
      "Which Amazon EC2 instance pricing model can provide discounts of up to 90%?",
    answers: [
      { text: "Reserved Instances", correct: false },
      { text: "On-Demand", correct: false },
      { text: "Dedicated Hosts", correct: false },
      { text: "Spot Instances", correct: true },
    ],
    explanation:
      "Spot Instances allow users to utilize unused EC2 capacity at discounts of up to 90% compared to On-Demand prices.",
  },
  {
    question:
      "Which of the following acts as an instance-level firewall to control inbound and outbound access?",
    answers: [
      { text: "Network access control list", correct: false },
      { text: "Security groups", correct: true },
      { text: "AWS Trusted Advisor", correct: false },
      { text: "Virtual private gateways", correct: false },
    ],
    explanation:
      "Security groups act as a virtual firewall for your Amazon EC2 instances, controlling inbound and outbound traffic.",
  },
  {
    question:
      "A company must be able to develop, test, and launch an application in the AWS Cloud quickly. Which advantage of cloud computing will meet these requirements?",
    answers: [
      { text: "Stop guessing capacity", correct: false },
      { text: "Trade fixed expense for variable expense", correct: false },
      { text: "Achieve economies of scale", correct: false },
      { text: "Increase speed and agility", correct: true },
    ],
    explanation:
      "The cloud enables quick development and deployment, which enhances speed and agility.",
  },
  {
    question:
      "A company has teams that have different job roles and responsibilities. The company’s employees often change teams. The company needs to manage permissions for the employees so that the permissions are appropriate for the job responsibilities. Which IAM resource should the company use to meet this requirement with the LEAST operational overhead?",
    answers: [
      { text: "IAM user groups", correct: false },
      { text: "IAM roles", correct: true },
      { text: "IAM instance profiles", correct: false },
      { text: "IAM policies for individual users", correct: false },
    ],
    explanation:
      "IAM roles allow for flexible permission management with minimal operational overhead.",
  },
  {
    question:
      "Which AWS service can a company use to securely store and encrypt passwords for a database?",
    answers: [
      { text: "AWS Shield", correct: false },
      { text: "AWS Secrets Manager", correct: true },
      { text: "AWS Identity and Access Management (IAM)", correct: false },
      { text: "Amazon Cognito", correct: false },
    ],
    explanation:
      "AWS Secrets Manager is designed to securely store and manage sensitive information like database passwords.",
  },
  {
    question:
      "What can a cloud practitioner use to retrieve AWS security and compliance documents and submit them as evidence to an auditor or regulator?",
    answers: [
      { text: "AWS Certificate Manager", correct: false },
      { text: "AWS Systems Manager", correct: false },
      { text: "AWS Artifact", correct: true },
      { text: "Amazon Inspector", correct: false },
    ],
    explanation:
      "AWS Artifact provides access to AWS security and compliance documents needed for audits.",
  },
  {
    question:
      "Which encryption types can be used to protect objects at rest in Amazon S3? (Choose two.)",
    answers: [
      {
        text: "Server-side encryption with Amazon S3 managed encryption keys (SSE-S3)",
        correct: true,
      },
      {
        text: "Server-side encryption with AWS KMS managed keys (SSE-KMS)",
        correct: true,
      },
      { text: "TLS", correct: false },
      { text: "SSL", correct: false },
    ],
    explanation:
      "SSE-S3 and SSE-KMS are the two encryption options for protecting data at rest in Amazon S3.",
  },
  {
    question:
      "A company wants to integrate its online shopping website with social media login credentials. Which AWS service can the company use to make this integration?",
    answers: [
      { text: "AWS Directory Service", correct: false },
      { text: "AWS Identity and Access Management (IAM)", correct: false },
      { text: "Amazon Cognito", correct: true },
      { text: "AWS IAM Identity Center (AWS Single Sign-On)", correct: false },
    ],
    explanation:
      "Amazon Cognito supports integration with social identity providers for authentication.",
  },
  {
    question:
      "Which AWS service is used to track, record, and audit configuration changes made to AWS resources?",
    answers: [
      { text: "AWS Shield", correct: false },
      { text: "AWS Config", correct: true },
      { text: "AWS IAM", correct: false },
      { text: "Amazon Inspector", correct: false },
    ],
    explanation:
      "AWS Config tracks configuration changes and provides visibility into resource configurations over time.",
  },
  {
    question:
      "A customer runs an On-Demand Amazon Linux EC2 instance for 3 hours, 5 minutes, and 6 seconds. For how much time will the customer be billed?",
    answers: [
      { text: "3 hours, 5 minutes", correct: false },
      { text: "3 hours, 5 minutes, and 6 seconds", correct: false },
      { text: "3 hours, 6 minutes", correct: true },
      { text: "4 hours", correct: false },
    ],
    explanation:
      "AWS bills in full minutes, rounding up any partial minutes. Thus, this instance will be billed for 3 hours and 6 minutes.",
  },
  {
    question:
      "A company website is experiencing DDoS attacks. Which AWS service can help protect the company website against these attacks?",
    answers: [
      { text: "AWS Resource Access Manager", correct: false },
      { text: "AWS Amplify", correct: false },
      { text: "AWS Shield", correct: true },
      { text: "Amazon GuardDuty", correct: false },
    ],
    explanation:
      "AWS Shield provides managed DDoS protection to help secure applications from attacks.",
  },
  {
    question:
      "A company wants a customized assessment of its current on-premises environment. The company wants to understand its projected running costs in the AWS Cloud. Which AWS service or tool will meet these requirements?",
    answers: [
      { text: "AWS Trusted Advisor", correct: false },
      { text: "Amazon Inspector", correct: false },
      { text: "AWS Control Tower", correct: false },
      { text: "Migration Evaluator", correct: true },
    ],
    explanation:
      "Migration Evaluator provides assessments and cost projections for migrating to AWS.",
  },
  {
    question:
      "A company that has multiple business units wants to centrally manage and govern its AWS Cloud environments. The company wants to automate the creation of AWS accounts, apply service control policies (SCPs), and simplify billing processes. Which AWS service or tool should the company use to meet these requirements?",
    answers: [
      { text: "AWS Organizations", correct: true },
      { text: "Cost Explorer", correct: false },
      { text: "AWS Budgets", correct: false },
      { text: "AWS Trusted Advisor", correct: false },
    ],
    explanation:
      "AWS Organizations allows you to centrally manage multiple AWS accounts, apply SCPs, and streamline billing.",
  },
  {
    question:
      "A company is hosting an application in the AWS Cloud. The company wants to verify that underlying AWS services and general AWS infrastructure are operating normally. Which combination of AWS services can the company use to gather the required information? (Choose two.)",
    answers: [
      { text: "AWS Personal Health Dashboard", correct: true },
      { text: "AWS Systems Manager", correct: false },
      { text: "AWS Trusted Advisor", correct: false },
      { text: "AWS Service Health Dashboard", correct: true },
    ],
    explanation:
      "AWS Personal Health Dashboard provides personalized status notifications, while AWS Service Health Dashboard gives an overview of service health.",
  },
  {
    question:
      "A company needs to migrate a PostgreSQL database from on-premises to Amazon RDS. Which AWS service or tool should the company use to meet this requirement?",
    answers: [
      { text: "Cloud Adoption Readiness Tool", correct: false },
      { text: "AWS Migration Hub", correct: false },
      { text: "AWS Database Migration Service (AWS DMS)", correct: true },
      { text: "AWS Application Migration Service", correct: false },
    ],
    explanation:
      "AWS Database Migration Service (AWS DMS) facilitates the migration of databases to AWS easily.",
  },
  {
    question:
      "Which cloud concept is demonstrated by using AWS Compute Optimizer?",
    answers: [
      { text: "Security validation", correct: false },
      { text: "Rightsizing", correct: true },
      { text: "Elasticity", correct: false },
      { text: "Global reach", correct: false },
    ],
    explanation:
      "AWS Compute Optimizer provides recommendations for rightsizing your resources.",
  },
  {
    question:
      "A company hosts a large amount of data in AWS. The company wants to identify if any of the data should be considered sensitive. Which AWS service will meet the requirement?",
    answers: [
      { text: "Amazon Inspector", correct: false },
      { text: "Amazon Macie", correct: true },
      { text: "AWS Identity and Access Management (IAM)", correct: false },
      { text: "Amazon CloudWatch", correct: false },
    ],
    explanation:
      "Amazon Macie helps discover and classify sensitive data stored in AWS.",
  },
  {
    question:
      "A user has a stateful workload that will run on Amazon EC2 for the next 3 years. What is the MOST cost-effective pricing model for this workload?",
    answers: [
      { text: "On-Demand Instances", correct: false },
      { text: "Reserved Instances", correct: true },
      { text: "Dedicated Instances", correct: false },
      { text: "Spot Instances", correct: false },
    ],
    explanation:
      "Reserved Instances offer significant discounts compared to On-Demand pricing for long-term workloads.",
  },
  {
    question:
      "Who enables encryption of data at rest for Amazon Elastic Block Store (Amazon EBS)?",
    answers: [
      { text: "AWS Support", correct: false },
      { text: "AWS customers", correct: true },
      { text: "AWS Key Management Service (AWS KMS)", correct: false },
      { text: "AWS Trusted Advisor", correct: false },
    ],
    explanation:
      "Customers must enable encryption for their EBS volumes using AWS KMS.",
  },
  {
    question: "What can a user accomplish using AWS CloudTrail?",
    answers: [
      { text: "Generate an IAM user credentials report", correct: false },
      { text: "Record API calls made to AWS services", correct: true },
      {
        text: "Assess the compliance of AWS resource configurations with policies and guidelines",
        correct: false,
      },
      {
        text: "Ensure that Amazon EC2 instances are patched with the latest security updates",
        correct: false,
      },
    ],
    explanation:
      "AWS CloudTrail records API calls made to AWS services for governance and auditing.",
  },
  {
    question:
      "A company is planning to host its workloads on AWS. Which AWS service requires the company to update and patch the guest operating system?",
    answers: [
      { text: "Amazon DynamoDB", correct: false },
      { text: "Amazon S3", correct: false },
      { text: "Amazon EC2", correct: true },
      { text: "Amazon Aurora", correct: false },
    ],
    explanation:
      "Amazon EC2 users are responsible for managing and patching their guest operating systems.",
  },
  {
    question:
      "Which AWS service or feature will search for and identify AWS resources that are shared externally?",
    answers: [
      { text: "Amazon OpenSearch Service", correct: false },
      { text: "AWS Control Tower", correct: false },
      { text: "AWS IAM Access Analyzer", correct: true },
      { text: "AWS Fargate", correct: false },
    ],
    explanation:
      "AWS IAM Access Analyzer identifies resources that have policies allowing external access.",
  },
  {
    question:
      "A company is migrating its workloads to the AWS Cloud. The company must retain full control of patch management for the guest operating systems that host its applications. Which AWS service should the company use to meet these requirements?",
    answers: [
      { text: "Amazon DynamoDB", correct: false },
      { text: "Amazon EC2", correct: true },
      { text: "AWS Lambda", correct: false },
      { text: "Amazon RDS", correct: false },
    ],
    explanation:
      "Using Amazon EC2 gives customers control over the operating system and patch management.",
  },
  {
    question:
      "At what support level do users receive access to a support concierge?",
    answers: [
      { text: "Basic Support", correct: false },
      { text: "Developer Support", correct: false },
      { text: "Business Support", correct: false },
      { text: "Enterprise Support", correct: true },
    ],
    explanation:
      "Enterprise Support includes access to a support concierge for assistance.",
  },
  {
    question:
      "Which AWS service can a company use to visually design and build serverless applications?",
    answers: [
      { text: "AWS Lambda", correct: false },
      { text: "AWS Batch", correct: false },
      { text: "AWS Application Composer", correct: true },
      { text: "AWS App Runner", correct: false },
    ],
    explanation:
      "AWS Application Composer helps design and build serverless applications visually.",
  },
  {
    question:
      "A company wants to migrate to AWS and use the same security software it uses on-premises. The security software vendor offers its security software as a service on AWS. Where can the company purchase the security solution?",
    answers: [
      { text: "AWS Partner Solutions Finder", correct: false },
      { text: "AWS Support Center", correct: false },
      { text: "AWS Management Console", correct: false },
      { text: "AWS Marketplace", correct: true },
    ],
    explanation:
      "AWS Marketplace is where customers can purchase third-party software solutions offered on AWS.",
  },
  {
    question:
      "A company has deployed an Amazon EC2 instance. Which option is an AWS responsibility under the AWS shared responsibility model?",
    answers: [
      { text: "Managing and encrypting application data", correct: false },
      {
        text: "Installing updates and security patches of guest operating system",
        correct: false,
      },
      { text: "Configuration of infrastructure devices", correct: true },
      {
        text: "Configuration of security groups on each instance",
        correct: false,
      },
    ],
    explanation:
      "AWS is responsible for the security of the underlying infrastructure, including configuration.",
  },
  {
    question:
      "A company wants to migrate its PostgreSQL database to AWS. The company does not use the database frequently. Which AWS service or resource will meet these requirements with the LEAST management overhead?",
    answers: [
      { text: "PostgreSQL on Amazon EC2", correct: false },
      { text: "Amazon RDS for PostgreSQL", correct: false },
      { text: "Amazon Aurora PostgreSQL-Compatible Edition", correct: false },
      { text: "Amazon Aurora Serverless", correct: true },
    ],
    explanation:
      "Amazon Aurora Serverless offers the least management overhead with automatic scaling.",
  },
  {
    question:
      "A company is using Amazon DynamoDB for its application database. Which tasks are the responsibility of AWS, according to the AWS shared responsibility model? (Choose two.)",
    answers: [
      { text: "Classify data", correct: false },
      { text: "Configure access permissions", correct: false },
      {
        text: "Provide public endpoints to store and retrieve data",
        correct: true,
      },
      {
        text: "Manage the infrastructure layer and the operating system",
        correct: true,
      },
    ],
    explanation:
      "AWS manages the infrastructure and provides endpoints for DynamoDB, while customers manage their data.",
  },
  {
    question:
      "A company wants to create a globally accessible e-commerce platform for its customers. The company wants to use a highly available and scalable DNS web service to connect users to the platform. Which AWS service will meet these requirements?",
    answers: [
      { text: "Amazon EC2", correct: false },
      { text: "Amazon VPC", correct: false },
      { text: "Amazon Route 53", correct: true },
      { text: "Amazon RDS", correct: false },
    ],
    explanation:
      "Amazon Route 53 is a scalable DNS service suitable for globally accessible platforms.",
  },
  {
    question:
      "Which maintenance task is the customer’s responsibility, according to the AWS shared responsibility model?",
    answers: [
      {
        text: "Physical connectivity among Availability Zones",
        correct: false,
      },
      { text: "Network switch maintenance", correct: false },
      { text: "Hardware updates and firmware patches", correct: false },
      { text: "Amazon EC2 updates and security patches", correct: true },
    ],
    explanation:
      "Customers are responsible for managing updates and security patches for their EC2 instances.",
  },
  {
    question:
      "A company wants to improve its security posture by reviewing user activity through API calls. Which AWS service will meet this requirement?",
    answers: [
      { text: "AWS WAF", correct: false },
      { text: "Amazon Detective", correct: false },
      { text: "Amazon CloudWatch", correct: false },
      { text: "AWS CloudTrail", correct: true },
    ],
    explanation:
      "AWS CloudTrail logs API activity, allowing users to review actions taken in their AWS account.",
  },
  {
    question:
      "A company is migrating to the AWS Cloud and plans to run experimental workloads for 3 to 6 months on AWS. Which pricing model will meet these requirements?",
    answers: [
      { text: "Use Savings Plans for a 3-year term.", correct: false },
      { text: "Use Dedicated Hosts", correct: false },
      { text: "Buy Reserved Instances", correct: false },
      { text: "Use On-Demand Instances", correct: true },
    ],
    explanation:
      "On-Demand Instances are ideal for short-term experimental workloads with flexibility.",
  },
  {
    question:
      "A company that has AWS Enterprise Support is launching a new version of a popular product in 2 months. The company expects a large increase in traffic to its website. The website is hosted on Amazon EC2 instances. Which action should the company take to assess its readiness to scale for this launch?",
    answers: [
      {
        text: "Replace the EC2 instances with AWS Lambda functions.",
        correct: false,
      },
      {
        text: "Use AWS Infrastructure Event Management (IEM) support",
        correct: true,
      },
      {
        text: "Submit a request on AWS Marketplace to monitor the event.",
        correct: false,
      },
      {
        text: "Review the coverage reports in the AWS Cost Management console",
        correct: false,
      },
    ],
    explanation:
      "AWS IEM provides guidance on scaling and operational support during significant events.",
  },
  {
    question:
      "A company that has AWS Enterprise Support is launching a new version of a popular product in 2 months. The company expects a large increase in traffic to its website. The website is hosted on Amazon EC2 instances. Which action should the company take to assess its readiness to scale for this launch?",
    answers: [
      {
        text: "Replace the EC2 instances with AWS Lambda functions",
        correct: false,
      },
      {
        text: "Use AWS Infrastructure Event Management (IEM) support",
        correct: true,
      },
      {
        text: "Submit a request on AWS Marketplace to monitor the event",
        correct: false,
      },
      {
        text: "Review the coverage reports in the AWS Cost Management console",
        correct: false,
      },
    ],
    explanation:
      "Using AWS IEM will help assess scaling readiness for the expected traffic increase.",
  },
  {
    question:
      "A company wants to launch multiple workloads on AWS. Each workload is related to a different business unit. The company wants to separate and track costs for each business unit. Which solution will meet these requirements with the LEAST operational overhead?",
    answers: [
      {
        text: "Use AWS Organizations and create one account for each business unit.",
        correct: true,
      },
      {
        text: "Use a spreadsheet to control the owners and cost of each resource",
        correct: false,
      },
      {
        text: "Use an Amazon DynamoDB table to record costs for each business unit",
        correct: false,
      },
      {
        text: "Use the AWS Billing console to assign owners to resources and track costs",
        correct: false,
      },
    ],
    explanation:
      "Using AWS Organizations allows for centralized management and tracking of costs with minimal overhead.",
  },
  {
    question:
      "A company wants to launch multiple workloads on AWS. Each workload is related to a different business unit. The company wants to separate and track costs for each business unit. Which solution will meet these requirements with the LEAST operational overhead?",
    answers: [
      {
        text: "Use AWS Organizations and create one account for each business unit",
        correct: true,
      },
      {
        text: "Use a spreadsheet to control the owners and cost of each resource",
        correct: false,
      },
      {
        text: "Use an Amazon DynamoDB table to record costs for each business unit",
        correct: false,
      },
      {
        text: "Use the AWS Billing console to assign owners to resources and track costs",
        correct: false,
      },
    ],
    explanation:
      "AWS Organizations allows for easy cost separation and tracking with low operational overhead.",
  },
  {
    question:
      "A company wants a time-series database service that makes it easier to store and analyze trillions of events each day. Which AWS service will meet this requirement?",
    answers: [
      { text: "Amazon Neptune", correct: false },
      { text: "Amazon Timestream", correct: true },
      { text: "Amazon Forecast", correct: false },
      {
        text: "Amazon DocumentDB (with MongoDB compatibility)",
        correct: false,
      },
    ],
    explanation:
      "Amazon Timestream is designed for time-series data, allowing for efficient storage and analysis.",
  },
  {
    question:
      "Which option is a shared control between AWS and the customer, according to the AWS shared responsibility model?",
    answers: [
      { text: "Configuration management", correct: true },
      { text: "Physical and environmental controls", correct: false },
      { text: "Data integrity authentication", correct: false },
      { text: "Identity and access management", correct: false },
    ],
    explanation:
      "Configuration management is a shared control where AWS manages infrastructure and customers manage their configurations.",
  },
  {
    question:
      "A company often does not use all of its current Amazon EC2 capacity to run stateless workloads. The company wants to optimize its EC2 costs. Which EC2 instance type will meet these requirements?",
    answers: [
      { text: "Spot Instances", correct: true },
      { text: "Dedicated Instances", correct: false },
      { text: "Reserved Instances", correct: false },
      { text: "On-Demand Instances", correct: false },
    ],
    explanation:
      "Spot Instances are cost-effective for workloads that can tolerate interruptions.",
  },
  {
    question:
      "A company wants to store data in Amazon S3. The company rarely access the data, and the data can be regenerated if necessary. The company wants to store the data in the most cost-effective storage class. Which S3 storage class will meet this requirement?",
    answers: [
      { text: "S3 Standard", correct: false },
      { text: "S3 Intelligent-Tiering", correct: false },
      {
        text: "S3 Standard-Infrequent Access (S3 Standard-IA)",
        correct: false,
      },
      { text: "S3 One Zone-Infrequent Access (S3 One Zone-IA)", correct: true },
    ],
    explanation:
      "S3 One Zone-IA is a low-cost option for infrequently accessed data that can be regenerated.",
  },
  {
    question:
      "A company has migrated its workloads to AWS. The company wants to adopt AWS at scale and operate more efficiently and securely. Which AWS service or framework should the company use for operational support?",
    answers: [
      { text: "AWS Support", correct: false },
      { text: "AWS Cloud Adoption Framework (AWS CAF)", correct: false },
      { text: "AWS Managed Services (AMS)", correct: false },
      { text: "AWS Well-Architected Framework", correct: true },
    ],
    explanation:
      "The AWS Well-Architected Framework helps organizations operate efficiently and securely in the cloud.",
  },
  {
    question:
      "A company wants to provision and manage its AWS infrastructure by using the common programming languages Typescript, Python, Java, and .NET. Which AWS service will meet this requirement?",
    answers: [
      { text: "AWS CodeBuild", correct: false },
      { text: "AWS CloudFormation", correct: false },
      { text: "AWS CLI", correct: false },
      { text: "AWS Cloud Development Kit (AWS CDK)", correct: true },
    ],
    explanation:
      "AWS CDK allows developers to define their cloud resources using familiar programming languages.",
  },
  {
    question:
      "Which Amazon EC2 pricing model provides the MOST cost savings for an always-up, right-sized database server running for a project that will last 1 year?",
    answers: [
      { text: "On-Demand Instances", correct: false },
      { text: "Convertible Reserved Instances", correct: true },
      { text: "Spot Instances", correct: false },
      { text: "Standard Reserved Instances", correct: false },
    ],
    explanation:
      "Convertible Reserved Instances provide significant savings for long-term commitments like a year.",
  },
  {
    question:
      "A company has a physical tape library to store data backups. The tape library is running out of space. The company needs to extend the tape library's capacity to the AWS Cloud. Which AWS service should the company use to meet this requirement?",
    answers: [
      { text: "Amazon Elastic File System (Amazon EFS)", correct: false },
      { text: "Amazon Elastic Block Store (Amazon EBS)", correct: false },
      { text: "Amazon S3", correct: false },
      { text: "AWS Storage Gateway", correct: true },
    ],
    explanation:
      "AWS Storage Gateway integrates on-premises environments with cloud storage, allowing for scalable backup solutions.",
  },
  {
    question:
      "A company is using the AWS Free Tier for several AWS services for an application. What will happen if the Free Tier usage period expires or if the application use exceeds the Free Tier usage limits?",
    answers: [
      {
        text: "The company will be charged the standard pay-as-you-go service rates for the usage that exceeds the Free Tier usage",
        correct: true,
      },
      {
        text: "AWS Support will contact the company to set up standard service charges",
        correct: false,
      },
      {
        text: "The company will be charged for the services it consumed during the Free Tier period, plus additional charges for service consumption after the Free Tier period",
        correct: false,
      },
      {
        text: "The company's AWS account will be frozen and can be restarted after a payment plan is established.",
        correct: false,
      },
    ],
    explanation:
      "Once the Free Tier expires or limits are exceeded, standard pay-as-you-go rates apply.",
  },
  {
    question:
      "A company wants to monitor its workload performance. The company wants to ensure that the cloud services are delivered at a level that meets its business needs. Which AWS Cloud Adoption Framework (AWS CAF) perspective will meet these requirements?",
    answers: [
      { text: "Business", correct: true },
      { text: "Governance", correct: false },
      { text: "Platform", correct: false },
      { text: "Operations", correct: false },
    ],
    explanation:
      "The Business perspective in AWS CAF focuses on ensuring services meet business needs.",
  },
  {
    question:
      "A company wants to migrate its applications to the AWS Cloud. The company plans to identify and prioritize any business transformation opportunities and evaluate its AWS Cloud readiness. Which AWS service or tool should the company use to meet these requirements?",
    answers: [
      { text: "AWS Cloud Adoption Framework (AWS CAF)", correct: true },
      { text: "AWS Managed Services (AMS)", correct: false },
      { text: "AWS Well-Architected Framework", correct: false },
      { text: "AWS Migration Hub", correct: false },
    ],
    explanation:
      "The AWS CAF helps organizations identify transformation opportunities and assess cloud readiness.",
  },
  {
    question:
      "A company needs an AWS service that provides a clear baseline of what the company runs in its on-premises data centers. The company needs the projected cost to run its on-premises workloads in the AWS Cloud. What AWS service or tool will meet these requirements?",
    answers: [
      { text: "AWS Compute Optimizer", correct: false },
      { text: "AWS Cost Explorer", correct: false },
      { text: "AWS Systems Manager Agent (SSM Agent)", correct: false },
      { text: "Migration Evaluator", correct: true },
    ],
    explanation:
      "Migration Evaluator provides insights into on-premises workloads and their projected AWS costs.",
  },
  {
    question:
      "A company acquired another corporation. The company now has two AWS accounts. Which AWS service or tool can the company use to consolidate the billing for these two accounts?",
    answers: [
      { text: "AWS Systems Manager", correct: false },
      { text: "AWS Organizations", correct: true },
      { text: "AWS License Manager", correct: false },
      { text: "Cost Explorer", correct: false },
    ],
    explanation:
      "AWS Organizations allows you to consolidate billing across multiple AWS accounts.",
  },
  {
    question:
      "A company wants to set up its workloads to perform their intended functions and recover quickly from failure. Which pillar of the AWS Well-Architected Framework aligns with these goals?",
    answers: [
      { text: "Performance efficiency", correct: false },
      { text: "Sustainability", correct: false },
      { text: "Reliability", correct: true },
      { text: "Security", correct: false },
    ],
    explanation:
      "The reliability pillar focuses on ensuring workloads function as intended and can recover from failures.",
  },
  {
    question:
      "Which of the following is a managed AWS service that is used specifically for extract, transform, and load (ETL) data?",
    answers: [
      { text: "Amazon Athena", correct: false },
      { text: "AWS Glue", correct: true },
      { text: "Amazon S3", correct: false },
      { text: "AWS Snowball Edge", correct: false },
    ],
    explanation:
      "AWS Glue is a fully managed ETL service designed for data transformation.",
  },
  {
    question:
      "A company wants to migrate petabytes of data from its on-premises data center to AWS. The company does not want to use an internet connection to perform the migration. Which AWS service will meet these requirements?",
    answers: [
      { text: "AWS DataSync", correct: false },
      { text: "Amazon Connect", correct: false },
      { text: "AWS Snowmobile", correct: true },
      { text: "AWS Direct Connect", correct: false },
    ],
    explanation:
      "AWS Snowmobile is designed for exabyte-scale data transfer, ideal for large migrations without internet.",
  },
  {
    question:
      "A company wants to receive alerts to monitor its overall operating costs for its AWS public cloud infrastructure. Which AWS offering will meet these requirements?",
    answers: [
      { text: "Amazon EventBridge", correct: false },
      { text: "Compute Savings Plans", correct: false },
      { text: "AWS Budgets", correct: true },
      { text: "Migration Evaluator", correct: false },
    ],
    explanation:
      "AWS Budgets allows you to set custom cost and usage budgets with alerts.",
  },
  {
    question: "How does the AWS Enterprise Support Concierge team help users?",
    answers: [
      { text: "Supporting application development", correct: false },
      { text: "Providing architecture guidance", correct: false },
      { text: "Answering billing and account inquiries", correct: true },
      {
        text: "Answering questions regarding technical support cases",
        correct: false,
      },
    ],
    explanation:
      "The Enterprise Support Concierge specializes in billing and account-related inquiries.",
  },
  {
    question:
      "A company wants to run a simulation for 3 years without interruptions. Which Amazon EC2 instance purchasing option will meet these requirements MOST cost-effectively?",
    answers: [
      { text: "Spot Instances", correct: false },
      { text: "Reserved Instances", correct: true },
      { text: "Dedicated Hosts", correct: false },
      { text: "On-Demand Instances", correct: false },
    ],
    explanation:
      "Reserved Instances provide cost savings for long-term commitments like a 3-year simulation.",
  },
  {
    question:
      "Which AWS service or resource can provide discounts on some AWS service costs in exchange for a spending commitment?",
    answers: [
      { text: "Amazon Detective", correct: false },
      { text: "AWS Pricing Calculator", correct: false },
      { text: "Savings Plans", correct: true },
      { text: "Basic Support", correct: false },
    ],
    explanation:
      "Savings Plans offer savings in exchange for a commitment to a certain level of usage.",
  },
  {
    question:
      "Which of the following are pillars of the AWS Well-Architected Framework? (Choose two.)",
    answers: [
      { text: "High availability", correct: false },
      { text: "Performance efficiency", correct: true },
      { text: "Cost optimization", correct: true },
      { text: "Going global in minutes", correct: false },
    ],
    explanation:
      "Performance efficiency and cost optimization are key pillars of the AWS Well-Architected Framework.",
  },
  {
    question:
      "A company wants to use Amazon EC2 instances to provide a static website to users all over the world. The company needs to minimize latency for the users. Which solution meets these requirements?",
    answers: [
      { text: "Use EC2 instances in multiple edge locations.", correct: false },
      {
        text: "Use EC2 instances in the same Availability Zone but in different AWS Regions",
        correct: false,
      },
      {
        text: "Use Amazon CloudFront with the EC2 instances configured as the source",
        correct: true,
      },
      {
        text: "Use EC2 instances in the same Availability Zone but in different AWS accounts",
        correct: false,
      },
    ],
    explanation:
      "Amazon CloudFront reduces latency by caching content closer to users globally.",
  },
  {
    question:
      "A team of researchers is going to collect data at remote locations around the world. Many locations do not have internet connectivity. The team needs to capture the data in the field, and transfer it to the AWS Cloud later. Which AWS service will support these requirements?",
    answers: [
      { text: "AWS Outposts", correct: false },
      { text: "AWS Transfer Family", correct: false },
      { text: "AWS Snow Family", correct: true },
      { text: "AWS Migration Hub", correct: false },
    ],
    explanation:
      "AWS Snow Family devices are designed to collect and transfer data when internet connectivity is unavailable.",
  },
  {
    question:
      "Which of the following are benefits that a company receives when it moves an on-premises production workload to AWS? (Choose two.)",
    answers: [
      {
        text: "AWS trains the company's staff on the use of all the AWS services",
        correct: false,
      },
      { text: "AWS manages all security in the cloud", correct: false },
      {
        text: "AWS offers free support from technical account managers (TAMs).",
        correct: true,
      },
      { text: "AWS provides economies of scale", correct: true },
    ],
    explanation:
      "Companies benefit from economies of scale and support when moving workloads to AWS.",
  },
  {
    question:
      "A company has decided to adopt Amazon EC2 infrastructure and wants to scale various stateless services for short-term usage. Which EC2 pricing model is MOST cost-efficient to meet these requirements?",
    answers: [
      { text: "Spot Instances", correct: true },
      { text: "On-Demand Instances", correct: false },
      { text: "Reserved Instances", correct: false },
      { text: "Dedicated Hosts", correct: false },
    ],
    explanation:
      "Spot Instances offer the best cost efficiency for short-term, variable workloads.",
  },
  {
    question:
      "Which of the following are benefits of AWS Trusted Advisor? (Choose two.)",
    answers: [
      {
        text: "Access to Amazon Simple Queue Service (Amazon SQS)",
        correct: false,
      },
      { text: "Cost optimization recommendations", correct: true },
      { text: "Hourly refresh of the service limit checks", correct: true },
      { text: "Security checks", correct: false },
    ],
    explanation:
      "AWS Trusted Advisor provides cost optimization and service limit checks to improve resource management.",
  },
  {
    question:
      "A company wants to save costs by archiving data that is no longer frequently accessed by end users. Which Amazon S3 feature will meet this requirement?",
    answers: [
      { text: "S3 Versioning", correct: false },
      { text: "S3 Lifecycle", correct: true },
      { text: "S3 Object Lock", correct: false },
      { text: "S3 Inventory", correct: false },
    ],
    explanation:
      "S3 Lifecycle policies enable automatic transition of objects to lower-cost storage classes.",
  },
  {
    question:
      "Which cloud computing advantage is a company applying when it uses AWS Regions to increase application availability to users in different countries?",
    answers: [
      { text: "Pay-as-you-go pricing", correct: false },
      { text: "Capacity forecasting", correct: false },
      { text: "Economies of scale", correct: false },
      { text: "Global reach", correct: true },
    ],
    explanation:
      "Using AWS Regions enhances global reach, providing availability to users across different geographical locations.",
  },
  {
    question:
      "A company wants an AWS service to collect and process 10 TB of data locally and transfer the data to AWS. The company has intermittent connectivity. Which AWS service will meet these requirements?",
    answers: [
      { text: "AWS Database Migration Service (AWS DMS)", correct: false },
      { text: "AWS DataSync", correct: false },
      { text: "AWS Backup", correct: false },
      { text: "AWS Snowball Edge", correct: true },
    ],
    explanation:
      "AWS Snowball Edge allows data collection and transfer even with intermittent connectivity.",
  },
  {
    question:
      "Which of the following is an AWS Well-Architected Framework design principle for operational excellence in the AWS Cloud?",
    answers: [
      { text: "Go global in minutes", correct: false },
      { text: "Make frequent, small, reversible changes", correct: true },
      {
        text: "Implement a strong foundation of identity and access management",
        correct: false,
      },
      {
        text: "Stop spending money on hardware infrastructure for data center operations",
        correct: false,
      },
    ],
    explanation:
      "Making frequent, small, reversible changes is a principle that supports operational excellence in the cloud.",
  },
  {
    question: "What is a benefit of using AWS serverless computing?",
    answers: [
      {
        text: "Application deployment and management are not required",
        correct: false,
      },
      {
        text: "Application security will be fully managed by AWS.",
        correct: false,
      },
      { text: "Monitoring and logging are not needed", correct: false },
      {
        text: "Management of infrastructure is offloaded to AWS",
        correct: true,
      },
    ],
    explanation:
      "Serverless computing offloads infrastructure management to AWS, allowing developers to focus on code.",
  },
  {
    question:
      "A developer wants AWS users to access AWS services by using temporary security credentials. Which AWS service or feature should the developer use to provide these credentials?",
    answers: [
      { text: "IAM policies", correct: false },
      { text: "IAM user groups", correct: false },
      { text: "AWS Security Token Service (AWS STS)", correct: true },
      { text: "AWS IAM Identity Center (AWS Single Sign-On)", correct: false },
    ],
    explanation:
      "AWS STS allows for the generation of temporary, limited-privilege security credentials.",
  },
  {
    question:
      "A global company wants to use a managed security service for protection from SQL injection attacks. The service also must provide detailed logging information about access to the company's ecommerce applications. Which AWS service will meet these requirements?",
    answers: [
      { text: "AWS Network Firewall", correct: false },
      { text: "Amazon RDS for SQL Server", correct: false },
      { text: "Amazon GuardDuty", correct: false },
      { text: "AWS WAF", correct: true },
    ],
    explanation:
      "With AWS WAF, you can create security rules that control bot traffic and block common attack patterns such as SQL injection or cross-site scripting (XSS).",
  },
  {
    question:
      "A company is migrating its on-premises server to an Amazon EC2 instance. The server must stay active at all times for the next 12 months. Which EC2 pricing option is the MOST cost-effective for the company's workload?",
    answers: [
      { text: "On-Demand", correct: false },
      { text: "Dedicated Hosts", correct: false },
      { text: "Spot Instances", correct: false },
      { text: "Reserved Instances", correct: true },
    ],
    explanation: "",
  },
  {
    question:
      "Which of the following is the customer's responsibility under the AWS shared responsibility model? (Choose two.)",
    answers: [
      {
        text: "Maintain the configuration of infrastructure devices",
        correct: false,
      },
      {
        text: "Maintain patching and updates within the hardware infrastructure",
        correct: false,
      },
      {
        text: "Maintain the configuration of guest operating systems and applications",
        correct: true,
      },
      { text: "Manage decisions involving encryption options", correct: true },
    ],
    explanation: "",
  },
  {
    question:
      "A company wants to verify if multi-factor authentication (MFA) is enabled for all users within its AWS accounts. Which AWS service or resource will meet this requirement?",
    answers: [
      { text: "AWS Cost and Usage Report", correct: false },
      { text: "IAM credential reports", correct: true },
      { text: "AWS Artifact", correct: false },
      { text: "Amazon CloudFront reports", correct: false },
    ],
    explanation:
      "IAM credential reports provide a way to audit the status of all your IAM credentials, including the status of MFA devices.",
  },
  {
    question:
      "A company uses AWS security services and tools. The company needs a service to help manage the security alerts and must organize the alerts into a single dashboard. Which AWS service should the company use to meet these requirements?",
    answers: [
      { text: "Amazon GuardDuty", correct: false },
      { text: "Amazon Inspector", correct: false },
      { text: "Amazon Macie", correct: false },
      { text: "AWS Security Hub", correct: true },
    ],
    explanation:
      "AWS Security Hub is a cloud security posture management service that automates best practice checks, aggregates alerts, and supports automated remediation.",
  },
  {
    question:
      "A company wants to run its workloads in the AWS Cloud effectively, reduce management overhead, and improve processes. Which AWS Well-Architected Framework pillar represents these requirements?",
    answers: [
      { text: "Reliability", correct: false },
      { text: "Operational excellence", correct: true },
      { text: "Performance efficiency", correct: false },
      { text: "Cost optimization", correct: false },
    ],
    explanation:
      "The Operational Excellence pillar includes the ability to support development and run workloads effectively, gain insight into their operations, and to continuously improve supporting processes and procedures to deliver business value.",
  },
  {
    question:
      "A company uses Amazon S3 to store records that can contain personally identifiable information (PII). The company wants a solution that can monitor all S3 buckets for PII and immediately alert staff about vulnerabilities. Which AWS service will meet these requirements?",
    answers: [
      { text: "Amazon GuardDuty", correct: false },
      { text: "Amazon Detective", correct: false },
      { text: "Amazon Macie", correct: true },
      { text: "AWS Shield", correct: false },
    ],
    explanation: "GuardDuty is more for logs, while Macie is more for PII.",
  },
  {
    question:
      "Which AWS service allows users to download security and compliance reports about the AWS infrastructure on demand?",
    answers: [
      { text: "Amazon GuardDuty", correct: false },
      { text: "AWS Security Hub", correct: false },
      { text: "AWS Artifact", correct: true },
      { text: "AWS Shield", correct: false },
    ],
    explanation: "",
  },
  {
    question:
      "An external auditor has requested that a company provide a list of all its IAM users, including the status of users' credentials and access keys. What is the SIMPLEST way to provide this information?",
    answers: [
      {
        text: "Create an IAM user account for the auditor, granting the auditor administrator permissions",
        correct: false,
      },
      {
        text: "Take a screenshot of each user's page in the AWS Management Console, then provide the screenshots to the auditor",
        correct: false,
      },
      {
        text: "Download the IAM credential report, then provide the report to the auditor",
        correct: true,
      },
      {
        text: "Download the AWS Trusted Advisor report, then provide the report to the auditor",
        correct: false,
      },
    ],
    explanation:
      "The IAM credential report is a feature within AWS Identity and Access Management (IAM) that provides a way to audit the status of credentials for all IAM users in an AWS account.",
  },
  {
    question:
      "Which task can a company perform by using security groups in the AWS Cloud?",
    answers: [
      {
        text: "Allow access to an Amazon EC2 instance through only a specific port.",
        correct: true,
      },
      {
        text: "Deny access to malicious IP addresses at a subnet level",
        correct: false,
      },
      {
        text: "Protect data that is cached by Amazon CloudFront.",
        correct: false,
      },
      {
        text: "Apply a stateless firewall to an Amazon EC2 instance",
        correct: false,
      },
    ],
    explanation:
      "Security groups in AWS are used to control inbound and outbound traffic to and from Amazon EC2 instances.",
  },
  {
    question:
      "A company plans to run a compute-intensive workload that uses graphics processing units (GPUs). Which Amazon EC2 instance type should the company use?",
    answers: [
      { text: "Accelerated computing", correct: true },
      { text: "Compute optimized", correct: false },
      { text: "Storage optimized", correct: false },
      { text: "General purpose", correct: false },
    ],
    explanation:
      "Accelerated computing instances are made to work with graphic intensive workloads.",
  },
  {
    question:
      "Which of the following are features of network ACLs as they are used in the AWS Cloud? (Choose two.)",
    answers: [
      { text: "They are stateless", correct: true },
      { text: "They are stateful", correct: false },
      {
        text: "They evaluate all rules before allowing traffic.",
        correct: false,
      },
      {
        text: "They process rules in order, starting with the lowest numbered rule, when deciding whether to allow traffic",
        correct: true,
      },
    ],
    explanation:
      "NACLs are stateless, which means that information about previously sent or received traffic is not saved.",
  },
  {
    question:
      "Which capabilities are in the platform perspective of the AWS Cloud Adoption Framework (AWS CAF)? (Choose two.)",
    answers: [
      { text: "Performance and capacity management", correct: false },
      { text: "Data engineering", correct: true },
      {
        text: "Continuous integration and continuous delivery (CI/CD)",
        correct: true,
      },
      { text: "Infrastructure protection", correct: false },
    ],
    explanation: "",
  },
  {
    question:
      "According to the AWS shared responsibility model, the customer is responsible for applying the latest security updates and patches for which of the following?",
    answers: [
      { text: "Amazon DynamoDB", correct: false },
      { text: "Amazon EC2 instances", correct: true },
      { text: "Amazon RDS instances", correct: false },
      { text: "Amazon S3", correct: false },
    ],
    explanation: "",
  },
  {
    question:
      "Which Amazon S3 storage class is MOST cost-effective for unknown access patterns?",
    answers: [
      { text: "S3 Standard", correct: false },
      {
        text: "S3 Standard-Infrequent Access (S3 Standard-IA)",
        correct: false,
      },
      {
        text: "S3 One Zone-Infrequent Access (S3 One Zone-IA)",
        correct: false,
      },
      { text: "S3 Intelligent-Tiering", correct: true },
    ],
    explanation:
      "S3 Intelligent-Tiering is the ideal storage class for data with unknown, changing, or unpredictable access patterns.",
  },
  {
    question:
      "A company has a managed IAM policy that does not grant the necessary permissions for users to accomplish required tasks. How can this be resolved?",
    answers: [
      { text: "Enable AWS Shield Advanced", correct: false },
      { text: "Create a custom IAM policy", correct: true },
      {
        text: "Use a third-party web application firewall (WAF) managed rule from the AWS Marketplace",
        correct: false,
      },
      {
        text: "Use AWS Key Management Service (AWS KMS) to create a customer-managed key",
        correct: false,
      },
    ],
    explanation:
      "Creating a custom IAM policy allows you to define and specify the exact permissions and access controls needed by your users.",
  },
  {
    question:
      "Who is responsible for managing IAM user access and secret keys according to the AWS shared responsibility model?",
    answers: [
      {
        text: "IAM access and secret keys are static, so there is no need to rotate them",
        correct: false,
      },
      { text: "The customer is responsible for rotating keys", correct: true },
      { text: "AWS will rotate the keys whenever required", correct: false },
      {
        text: "The AWS Support team will rotate keys when requested by the customer",
        correct: false,
      },
    ],
    explanation: "The customer is responsible for rotating their keys.",
  },
  {
    question:
      "A company needs to run a pre-installed third-party firewall on an Amazon EC2 instance. Which AWS service or feature can provide this solution?",
    answers: [
      { text: "Network ACLs", correct: false },
      { text: "Security groups", correct: false },
      { text: "AWS Marketplace", correct: true },
      { text: "AWS Trusted Advisor", correct: false },
    ],
    explanation:
      "AWS Marketplace is a digital catalog that includes thousands of software listings from independent software vendors.",
  },
  {
    question:
      "Which AWS Cloud benefit gives a company the ability to quickly deploy cloud resources to access compute, storage, and database infrastructures in a matter of minutes?",
    answers: [
      { text: "Elasticity", correct: false },
      { text: "Cost savings", correct: false },
      { text: "Agility", correct: true },
      { text: "Reliability", correct: false },
    ],
    explanation:
      "Agility in cloud computing refers to the ability to quickly develop, test, and launch applications.",
  },
  {
    question:
      "Which of the following is entirely the responsibility of AWS, according to the AWS shared responsibility model?",
    answers: [
      { text: "Security awareness and training", correct: false },
      { text: "Development of an IAM password policy", correct: false },
      { text: "Patching of the guest operating system", correct: false },
      { text: "Physical and environmental controls", correct: true },
    ],
    explanation:
      "AWS is responsible for the protection of the physical infrastructure and environment of its data centers.",
  },
  {
    question:
      "Which of the following is a characteristic of the AWS account root user?",
    answers: [
      {
        text: "The root user is the only user that can be configured with multi-factor authentication (MFA).",
        correct: false,
      },
      {
        text: "The root user is the only user that can access the AWS Management Console",
        correct: false,
      },
      {
        text: "The root user is the first sign-in identity that is available when an AWS account is created",
        correct: true,
      },
      {
        text: "The root user has a password that cannot be changed",
        correct: false,
      },
    ],
    explanation:
      "The root user is the first sign-in identity that is available when an AWS account is created.",
  },
  {
    question:
      "An Amazon EC2 instance previously used for development is inaccessible and no longer appears in the AWS Management Console. Which AWS service should be used to determine what action made this EC2 instance inaccessible?",
    answers: [
      { text: "Amazon CloudWatch Logs", correct: false },
      { text: "AWS Security Hub", correct: false },
      { text: "Amazon Inspector", correct: false },
      { text: "AWS CloudTrail", correct: true },
    ],
    explanation:
      "AWS CloudTrail is the service that records API calls and related events made on your AWS account.",
  },
  {
    question:
      "A company's application developers need to quickly provision and manage AWS services by using scripts. Which AWS offering should the developers use to meet these requirements?",
    answers: [
      { text: "AWS CLI", correct: true },
      { text: "AWS CodeBuild", correct: false },
      { text: "AWS Cloud Adoption Framework (AWS CAF)", correct: false },
      { text: "AWS Systems Manager Session Manager", correct: false },
    ],
    explanation:
      "The AWS CLI is a command-line tool provided by AWS that allows developers and administrators to interact with AWS services directly from the command line.",
  },
  {
    question:
      "A company wants to migrate unstructured data to AWS. The data needs to be securely moved with inflight encryption and end-to-end data validation. Which AWS service will meet these requirements?",
    answers: [
      { text: "AWS Application Migration Service", correct: false },
      { text: "Amazon Elastic File System (Amazon EFS)", correct: false },
      { text: "AWS DataSync", correct: true },
      { text: "AWS Migration Hub", correct: false },
    ],
    explanation:
      "AWS DataSync is designed for securely transferring large amounts of data between on-premises storage and AWS.",
  },
  {
    question:
      "A development team wants to deploy multiple test environments for an application in a fast, repeatable manner. Which AWS service should the team use?",
    answers: [
      { text: "Amazon EC2", correct: false },
      { text: "AWS CloudFormation", correct: true },
      { text: "Amazon QuickSight", correct: false },
      { text: "Amazon Elastic Container Service (Amazon ECS)", correct: false },
    ],
    explanation:
      "CloudFormation will allow you to use infrastructure as code and enable fast, repeatable deployments.",
  },
  {
    question:
      "A company wants to quickly implement a continuous integration/continuous delivery (CI/CD) pipeline. Which AWS service will meet this requirement?",
    answers: [
      { text: "AWS Config", correct: false },
      { text: "Amazon Cognito", correct: false },
      { text: "AWS DataSync", correct: false },
      { text: "AWS CodeStar", correct: true },
    ],
    explanation:
      "AWS CodeStar is a fully managed service that makes it easy to develop, build, and deploy applications on AWS.",
  },
  {
    question:
      "Which AWS Cloud deployment model uses AWS Outposts as part of the application deployment infrastructure?",
    answers: [
      { text: "On-premises", correct: false },
      { text: "Serverless", correct: false },
      { text: "Cloud-native", correct: false },
      { text: "Hybrid", correct: true },
    ],
    explanation:
      "A hybrid cloud environment blends on-premises infrastructure with cloud resources.",
  },
  {
    question:
      "Which of the following is a fully managed graph database service on AWS?",
    answers: [
      { text: "Amazon Aurora", correct: false },
      { text: "Amazon FSx", correct: false },
      { text: "Amazon DynamoDB", correct: false },
      { text: "Amazon Neptune", correct: true },
    ],
    explanation:
      "Amazon Neptune is a fast, reliable, fully managed graph database service.",
  },
  {
    question:
      "Which AWS service could an administrator use to provide desktop environments for several employees?",
    answers: [
      { text: "AWS Organizations", correct: false },
      { text: "AWS Fargate", correct: false },
      { text: "AWS WAF", correct: false },
      { text: "AWS WorkSpaces", correct: true },
    ],
    explanation:
      "AWS WorkSpaces is a fully managed desktop computing service in the cloud. It allows administrators to provision and manage desktop environments for users, providing them with a secure and scalable solution for accessing their desktops from various devices.",
  },
  {
    question:
      "Which AWS service or feature gives users the ability to capture information about network traffic in a VPC?",
    answers: [
      { text: "VPC Flow Logs", correct: true },
      { text: "Amazon Inspector", correct: false },
      { text: "VPC route tables", correct: false },
      { text: "AWS CloudTrail", correct: false },
    ],
    explanation:
      "VPC Flow Logs is a feature that enables you to capture information about the IP traffic going to and from network interfaces in your VPC.",
  },
  {
    question:
      "Which type of AWS storage is ephemeral and is deleted when an Amazon EC2 instance is stopped or terminated?",
    answers: [
      { text: "Amazon Elastic Block Store (Amazon EBS)", correct: false },
      { text: "Amazon EC2 instance store", correct: true },
      { text: "Amazon Elastic File System (Amazon EFS)", correct: false },
      { text: "Amazon S3", correct: false },
    ],
    explanation:
      "Amazon EC2 instance store provides temporary block-level storage that is directly attached to the Amazon EC2 instance. It is referred to as 'ephemeral' because the data stored in the instance store volumes is not persistent and is deleted when the EC2 instance is stopped or terminated.",
  },
  {
    question:
      "A company wants to provide access to Windows file shares in AWS from its on-premises workloads. The company does not want to provision any additional infrastructure or applications in its data center. Which AWS service will meet these requirements?",
    answers: [
      { text: "Amazon FSx File Gateway", correct: true },
      { text: "AWS DataSync", correct: false },
      { text: "Amazon S3", correct: false },
      { text: "AWS Snow Family", correct: false },
    ],
    explanation:
      "Amazon FSx File Gateway is a service that enables on-premises access to file data stored in Amazon FSx for Windows File Server, allowing access without provisioning additional infrastructure.",
  },
  {
    question:
      "A company wants durable storage for static content and infinitely scalable data storage infrastructure at the lowest cost. Which AWS service should the company choose?",
    answers: [
      { text: "Amazon Elastic Block Store (Amazon EBS)", correct: false },
      { text: "Amazon S3", correct: true },
      { text: "AWS Storage Gateway", correct: false },
      { text: "Amazon Elastic File System (Amazon EFS)", correct: false },
    ],
    explanation:
      "Amazon S3 (Simple Storage Service) is a fully managed object storage service that provides durable storage for static content, designed for scalability and low-latency access.",
  },
  {
    question:
      "An ecommerce company wants to use Amazon EC2 Auto Scaling to add and remove EC2 instances based on CPU utilization. Which AWS service or feature can initiate an Amazon EC2 Auto Scaling action to achieve this goal?",
    answers: [
      { text: "Amazon Simple Queue Service (Amazon SQS)", correct: false },
      {
        text: "Amazon Simple Notification Service (Amazon SNS)",
        correct: false,
      },
      { text: "AWS Systems Manager", correct: false },
      { text: "Amazon CloudWatch alarm", correct: true },
    ],
    explanation:
      "Amazon CloudWatch alarms can monitor CPU utilization and trigger Auto Scaling actions to add or remove EC2 instances based on defined thresholds.",
  },
  {
    question:
      "A company wants to transform its workforce by attracting and developing a digitally fluent high-performance workforce. Which AWS Cloud Adoption Framework (AWS CAF) perspective will meet these requirements?",
    answers: [
      { text: "Business", correct: false },
      { text: "People", correct: true },
      { text: "Platform", correct: false },
      { text: "Operations", correct: false },
    ],
    explanation:
      "The 'People' perspective in AWS CAF focuses on workforce transformation, including attracting and developing a diverse and inclusive workforce with the right mix of skills.",
  },
  {
    question:
      "A company wants to move its on-premises databases to managed cloud database services by using a simplified migration process. Which AWS service or tool can help the company meet this requirement?",
    answers: [
      { text: "AWS Storage Gateway", correct: false },
      { text: "AWS Application Migration Service", correct: false },
      { text: "AWS DataSync", correct: false },
      { text: "AWS Database Migration Service (AWS DMS)", correct: true },
    ],
    explanation:
      "AWS Database Migration Service (DMS) is designed to help migrate on-premises databases to managed cloud database services in a simplified manner.",
  },
  {
    question:
      "A company needs a fully managed file server that natively supports Microsoft workloads and file systems. Which AWS service should the company use to meet these requirements?",
    answers: [
      { text: "Amazon Elastic File System (Amazon EFS)", correct: false },
      { text: "Amazon FSx for Lustre", correct: false },
      { text: "Amazon FSx for Windows File Server", correct: true },
      { text: "Amazon Elastic Block Store (Amazon EBS)", correct: false },
    ],
    explanation:
      "Amazon FSx for Windows File Server provides a fully managed file server that supports Microsoft workloads and the SMB protocol.",
  },
  {
    question:
      "A company has been storing monthly reports in an Amazon S3 bucket. The company exports the report data into comma-separated values (.csv) files. A developer wants to write a simple query that can read all of these files and generate a summary report. Which AWS service or feature should the developer use to meet these requirements with the LEAST amount of operational overhead?",
    answers: [
      { text: "Amazon S3 Select", correct: false },
      { text: "Amazon Athena", correct: true },
      { text: "Amazon Redshift", correct: false },
      { text: "Amazon EC2", correct: false },
    ],
    explanation:
      "Amazon Athena is a serverless query service that allows you to analyze data directly in Amazon S3 using standard SQL without managing infrastructure.",
  },
  {
    question:
      "Which AWS feature provides a no-cost platform for AWS users to join community groups, ask questions, find answers, and read community-generated articles about best practices?",
    answers: [
      { text: "AWS Knowledge Center", correct: false },
      { text: "AWS re:Post", correct: true },
      { text: "AWS IQ", correct: false },
      { text: "AWS Enterprise Support", correct: false },
    ],
    explanation:
      "AWS re:Post is a no-cost platform for AWS users to engage with the community, ask questions, and share best practices.",
  },
  {
    question:
      "A company needs to search for text in documents that are stored in Amazon S3. Which AWS service will meet these requirements?",
    answers: [
      { text: "Amazon Kendra", correct: true },
      { text: "Amazon Rekognition", correct: false },
      { text: "Amazon Polly", correct: false },
      { text: "Amazon Lex", correct: false },
    ],
    explanation:
      "Amazon Kendra is designed for intelligent search capabilities and allows searching for text in documents stored in Amazon S3.",
  },
  {
    question:
      "Which AWS services make use of global edge locations? (Choose two.)",
    answers: [
      { text: "AWS Fargate", correct: false },
      { text: "Amazon CloudFront", correct: true },
      { text: "AWS Global Accelerator", correct: true },
      { text: "AWS Wavelength", correct: false },
    ],
    explanation:
      "Amazon CloudFront and AWS Global Accelerator utilize global edge locations to optimize performance and reduce latency.",
  },
  {
    question:
      "A user needs a relational database but does not have the resources to manage the hardware, resiliency, and replication. Which AWS service option meets the user's requirements?",
    answers: [
      {
        text: "Run MySQL on Amazon Elastic Container Service (Amazon ECS).",
        correct: false,
      },
      { text: "Run MySQL on Amazon EC2", correct: false },
      { text: "Choose Amazon RDS for MySQL", correct: true },
      { text: "Choose Amazon ElastiCache for Redis", correct: false },
    ],
    explanation:
      "Amazon RDS for MySQL is a fully managed service that handles database management tasks such as provisioning, setup, patching, and backups.",
  },
  {
    question:
      "A company needs to deploy applications in the AWS Cloud as quickly as possible. The company also needs to minimize the complexity that is related to the management of AWS resources. Which AWS service should the company use to meet these requirements?",
    answers: [
      { text: "AWS Config", correct: false },
      { text: "AWS Elastic Beanstalk", correct: true },
      { text: "Amazon EC2", correct: false },
      { text: "Amazon Personalize", correct: false },
    ],
    explanation:
      "AWS Elastic Beanstalk is a fully managed service that simplifies application deployment and management on AWS.",
  },
  {
    question:
      "Which mechanism allows developers to access AWS services from application code?",
    answers: [
      { text: "AWS Software Development Kit", correct: true },
      { text: "AWS Management Console", correct: false },
      { text: "AWS CodePipeline", correct: false },
      { text: "AWS Config", correct: false },
    ],
    explanation:
      "The AWS Software Development Kit (SDK) allows developers to programmatically access AWS services from application code.",
  },
  {
    question:
      "A company is migrating to the AWS Cloud. The company wants to understand and identify potential security misconfigurations or unexpected behaviors. Which AWS Cloud Adoption Framework (AWS CAF) security perspective capability will meet these requirements?",
    answers: [
      { text: "Identity and access management", correct: false },
      { text: "Threat detection", correct: true },
      { text: "Platform engineering", correct: false },
      { text: "Availability and continuity management", correct: false },
    ],
    explanation:
      "The 'Threat detection' capability focuses on understanding potential security misconfigurations and unexpected behaviors.",
  },
  {
    question:
      "A company wants to establish a private network connection between AWS and its corporate network. Which AWS service or feature will meet this requirement?",
    answers: [
      { text: "Amazon Connect", correct: false },
      { text: "Amazon Route 53", correct: false },
      { text: "AWS Direct Connect", correct: true },
      { text: "VPC peering", correct: false },
    ],
    explanation:
      "AWS Direct Connect allows for a dedicated network connection between a corporate network and an Amazon VPC.",
  },
  {
    question:
      "Which AWS services or features give users the ability to create a network connection between two VPCs? (Choose two.)",
    answers: [
      { text: "VPC endpoints", correct: false },
      { text: "Amazon Route 53", correct: false },
      { text: "VPC peering", correct: true },
      { text: "AWS Transit Gateway", correct: true },
    ],
    explanation:
      "VPC peering and AWS Transit Gateway allow for creating network connections between two VPCs.",
  },
  {
    question: "Which AWS service converts text to lifelike voices?",
    answers: [
      { text: "Amazon Transcribe", correct: false },
      { text: "Amazon Rekognition", correct: false },
      { text: "Amazon Polly", correct: true },
      { text: "Amazon Textract", correct: false },
    ],
    explanation:
      "Amazon Polly is the service that converts text to speech, providing lifelike voices for applications.",
  },
  {
    question:
      "A company wants to use application stacks to run a workload in the AWS Cloud. The company wants to use pre-configured instances. Which AWS service will meet these requirements?",
    answers: [
      { text: "Amazon Lightsail", correct: true },
      { text: "Amazon Athena", correct: false },
      { text: "AWS Outposts", correct: false },
      { text: "Amazon EC2", correct: false },
    ],
    explanation:
      "Amazon Lightsail provides pre-configured instances to deploy application stacks, such as LAMP, easily.",
  },
  {
    question:
      "Which AWS services are supported by Savings Plans? (Choose two.)",
    answers: [
      { text: "Amazon EC2", correct: true },
      { text: "Amazon RDS", correct: false },
      { text: "Amazon SageMaker", correct: true },
      { text: "Amazon Redshift", correct: false },
    ],
    explanation:
      "Savings Plans support various compute services, including Amazon EC2 and Amazon SageMaker.",
  },
  {
    question:
      "Which AWS service or tool can provide rightsizing recommendations for Amazon EC2 resources at no additional cost?",
    answers: [
      { text: "AWS Well-Architected Tool", correct: false },
      { text: "Amazon CloudWatch", correct: false },
      { text: "AWS Cost Explorer", correct: true },
      { text: "Amazon S3 analytics", correct: false },
    ],
    explanation:
      "AWS Cost Explorer can provide insights and rightsizing recommendations for EC2 resources.",
  },
  {
    question:
      "A company operates a petabyte-scale data warehouse to analyze its data. The company wants a solution that will not require manual hardware and software management. Which AWS service will meet these requirements?",
    answers: [
      {
        text: "Amazon DocumentDB (with MongoDB compatibility)",
        correct: false,
      },
      { text: "Amazon Redshift", correct: true },
      { text: "Amazon Neptune", correct: false },
      { text: "Amazon ElastiCache", correct: false },
    ],
    explanation:
      "Amazon Redshift is a fully managed petabyte-scale data warehouse, handling all hardware and software management.",
  },
  {
    question:
      "A library wants to automate the classification of electronic books based on the contents of the books. Which AWS service should the library use to meet this requirement?",
    answers: [
      { text: "Amazon Redshift", correct: false },
      { text: "Amazon CloudSearch", correct: false },
      { text: "Amazon Comprehend", correct: true },
      { text: "Amazon Aurora", correct: false },
    ],
    explanation:
      "Amazon Comprehend provides natural language processing capabilities for text classification and analysis.",
  },
  {
    question:
      "Which task is a responsibility of AWS, according to the AWS shared responsibility model?",
    answers: [
      { text: "Encryption of application data", correct: false },
      { text: "Authentication of application users", correct: false },
      { text: "Protection of physical network infrastructure", correct: true },
      { text: "Configuration of firewalls", correct: false },
    ],
    explanation:
      "AWS is responsible for the security of the cloud, including the protection of the physical network infrastructure.",
  },
  {
    question:
      "Which options are AWS Cloud Adoption Framework (AWS CAF) cloud transformation journey recommendations? (Choose two.)",
    answers: [
      { text: "Envision phase", correct: true },
      { text: "Align phase", correct: true },
      { text: "Assess phase", correct: false },
      { text: "Mobilize phase", correct: false },
    ],
    explanation:
      "The Envision and Align phases are key recommendations in the AWS Cloud Adoption Framework.",
  },
  {
    question:
      "A company wants to generate a list of IAM users. The company also wants to view the status of various credentials that are associated with the users, such as password, access keys, and multi-factor authentication (MFA) devices. Which AWS service or feature will meet these requirements?",
    answers: [
      { text: "IAM credential report", correct: true },
      { text: "AWS IAM Identity Center (AWS Single Sign-On)", correct: false },
      {
        text: "AWS Identity and Access Management Access Analyzer",
        correct: false,
      },
      { text: "AWS Cost and Usage Report", correct: false },
    ],
    explanation:
      "The IAM credential report provides a list of users and their associated credential statuses.",
  },
  {
    question:
      "A company is designing its AWS workloads so that components can be updated regularly and so that changes can be made in small, reversible increments. Which pillar of the AWS Well-Architected Framework does this design support?",
    answers: [
      { text: "Security", correct: false },
      { text: "Performance efficiency", correct: false },
      { text: "Operational excellence", correct: true },
      { text: "Reliability", correct: false },
    ],
    explanation:
      "This design supports the Operational Excellence pillar, focusing on improving processes and procedures.",
  },
  {
    question:
      "A company wants to track tags, buckets, and prefixes for its Amazon S3 objects. Which S3 feature will meet this requirement?",
    answers: [
      { text: "S3 Inventory report", correct: true },
      { text: "S3 Lifecycle", correct: false },
      { text: "S3 Versioning", correct: false },
      { text: "S3 ACLs", correct: false },
    ],
    explanation:
      "The S3 Inventory report helps keep track of objects and their respective tags, buckets, and prefixes.",
  },
  {
    question:
      "A company wants to allow users to authenticate and authorize multiple AWS accounts by using a single set of credentials. Which AWS service or resource will meet this requirement?",
    answers: [
      { text: "AWS Organizations", correct: false },
      { text: "IAM user", correct: false },
      { text: "AWS IAM Identity Center (AWS Single Sign-On)", correct: true },
      { text: "AWS Control Tower", correct: false },
    ],
    explanation:
      "AWS IAM Identity Center (SSO) provides centralized authentication across multiple AWS accounts.",
  },
  {
    question:
      "A company created an Amazon EC2 instance. The company wants to control the incoming and outgoing network traffic at the instance level. Which AWS resource or service will meet this requirement?",
    answers: [
      { text: "AWS Shield", correct: false },
      { text: "Security groups", correct: true },
      { text: "Network Access Analyzer", correct: false },
      { text: "VPC endpoints", correct: false },
    ],
    explanation:
      "Security Groups are used to control inbound and outbound traffic at the instance level.",
  },
  {
    question:
      "A company wants to use the AWS Cloud to deploy an application globally. Which architecture deployment model should the company use to meet this requirement?",
    answers: [
      { text: "Multi-Region", correct: true },
      { text: "Single-Region", correct: false },
      { text: "Multi-AZ", correct: false },
      { text: "Single-AZ", correct: false },
    ],
    explanation:
      "A Multi-Region deployment model distributes the application across different AWS regions for global availability.",
  },
  {
    question:
      "A company wants a web application to interact with various AWS services. Which AWS service or resource will meet this requirement?",
    answers: [
      { text: "AWS CloudShell", correct: false },
      { text: "AWS Marketplace", correct: false },
      { text: "AWS Management Console", correct: false },
      { text: "AWS CLI", correct: true },
    ],
    explanation:
      "The AWS CLI allows you to interact with AWS services programmatically from the command line.",
  },
  {
    question:
      "A company is migrating its applications from on-premises to the AWS Cloud. The company wants to ensure that the applications are assigned only the minimum permissions that are needed to perform all operations. Which AWS service will meet these requirements?",
    answers: [
      { text: "AWS Identity and Access Management (IAM)", correct: true },
      { text: "Amazon CloudWatch", correct: false },
      { text: "Amazon Macie", correct: false },
      { text: "Amazon GuardDuty", correct: false },
    ],
    explanation:
      "AWS IAM enables the management of permissions and ensures that applications follow the principle of least privilege.",
  },
  {
    question:
      "Which options are AWS Cloud Adoption Framework (AWS CAF) governance perspective capabilities? (Choose two.)",
    answers: [
      { text: "Identity and access management", correct: false },
      { text: "Cloud financial management", correct: true },
      { text: "Application portfolio management", correct: true },
      { text: "Innovation management", correct: false },
    ],
    explanation:
      "Cloud Financial Management and Application Portfolio Management are key capabilities in the Governance perspective of AWS CAF.",
  },
  {
    question:
      "Which AWS service provides a single location to track the progress of application migrations?",
    answers: [
      { text: "AWS Application Discovery Service", correct: false },
      { text: "AWS Application Migration Service", correct: false },
      { text: "AWS Service Catalog", correct: false },
      { text: "AWS Migration Hub", correct: true },
    ],
    explanation:
      "AWS Migration Hub provides a central place to monitor the progress of application migrations.",
  },
  {
    question:
      "A company launched an Amazon EC2 instance with the latest Amazon Linux 2 Amazon Machine Image (AMI). Which actions can a system administrator take to connect to the EC2 instance? (Choose two.)",
    answers: [
      { text: "Use Amazon EC2 Instance Connect", correct: true },
      {
        text: "Use a Remote Desktop Protocol (RDP) connection",
        correct: false,
      },
      { text: "Use AWS Batch", correct: false },
      { text: "Use AWS Systems Manager Session Manager", correct: true },
    ],
    explanation:
      "You can connect to an EC2 instance using Amazon EC2 Instance Connect or AWS Systems Manager Session Manager.",
  },
  {
    question:
      "Which architecture concept describes the ability to deploy resources on demand and release resources when they are no longer needed?",
    answers: [
      { text: "High availability", correct: false },
      { text: "Decoupled architecture", correct: false },
      { text: "Resilience", correct: false },
      { text: "Elasticity", correct: true },
    ],
    explanation:
      "Elasticity refers to the ability to automatically adjust resources based on demand.",
  },
  {
    question:
      "Which task requires a user to sign in as the AWS account root user?",
    answers: [
      { text: "The deletion of IAM users", correct: false },
      { text: "The deletion of an AWS account", correct: true },
      {
        text: "The creation of an organization in AWS Organizations",
        correct: false,
      },
      { text: "The deletion of Amazon EC2 instances", correct: false },
    ],
    explanation: "Only the root user can delete an AWS account.",
  },
  {
    question:
      "What does the Amazon S3 Intelligent-Tiering storage class offer?",
    answers: [
      {
        text: "Payment flexibility by reserving storage capacity",
        correct: false,
      },
      {
        text: "Long-term retention of data by copying the data to an encrypted Amazon Elastic Block Store (Amazon EBS) volume",
        correct: false,
      },
      {
        text: "Automatic cost savings by moving objects between tiers based on access pattern changes",
        correct: true,
      },
      {
        text: "Secure, durable, and lowest cost storage for data archival",
        correct: false,
      },
    ],
    explanation:
      "S3 Intelligent-Tiering automatically saves costs by moving objects between access tiers as needed.",
  },
  {
    question:
      "A company needs Amazon EC2 instances for a workload that can tolerate interruptions. Which EC2 instance purchasing option meets this requirement with the LARGEST discount compared to On-Demand prices?",
    answers: [
      { text: "Spot Instances", correct: true },
      { text: "Convertible Reserved Instances", correct: false },
      { text: "Standard Reserved Instances", correct: false },
      { text: "Dedicated Hosts", correct: false },
    ],
    explanation:
      "Spot Instances offer the largest discount compared to On-Demand prices for interruptible workloads.",
  },
  {
    question:
      "A company is planning to migrate to the AWS Cloud. The company wants to identify measurable business outcomes that will explain the value of the company's decision to migrate. Which phase of the cloud transformation journey includes these activities?",
    answers: [
      { text: "Envision", correct: true },
      { text: "Align", correct: false },
      { text: "Scale", correct: false },
      { text: "Launch", correct: false },
    ],
    explanation:
      "The Envision phase focuses on identifying transformation opportunities and measurable business outcomes.",
  },
  {
    question:
      "Which AWS service or component allows inbound traffic from the internet to access a VPC?",
    answers: [
      { text: "Internet gateway", correct: true },
      { text: "NAT gateway", correct: false },
      { text: "AWS WAF", correct: false },
      { text: "VPC peering", correct: false },
    ],
    explanation:
      "An Internet gateway enables inbound internet traffic to reach resources in a VPC.",
  },
  {
    question:
      "Which AWS service can companies use to create infrastructure from code?",
    answers: [
      {
        text: "Amazon Elastic Kubernetes Service (Amazon EKS)",
        correct: false,
      },
      { text: "AWS Outposts", correct: false },
      { text: "AWS CodePipeline", correct: false },
      { text: "AWS CloudFormation", correct: true },
    ],
    explanation:
      "AWS CloudFormation allows users to define and provision AWS infrastructure as code.",
  },
  {
    question:
      "Which guideline is a well-architected design principle for building cloud applications?",
    answers: [
      { text: "Keep static data closer to compute resources", correct: false },
      { text: "Provision resources for peak capacity", correct: false },
      { text: "Design for automated recovery from failure", correct: true },
      { text: "Use tightly coupled components", correct: false },
    ],
    explanation:
      "Designing for automated recovery from failure is a key principle for resilient cloud architectures.",
  },
  {
    question:
      "A company needs to move 75 petabytes of data from its on-premises data centers to AWS. Which AWS service should the company use to meet these requirements MOST cost-effectively?",
    answers: [
      { text: "AWS Snowball Edge Storage Optimized", correct: false },
      { text: "AWS Snowmobile", correct: true },
      { text: "AWS Direct Connect", correct: false },
      { text: "AWS Storage Gateway", correct: false },
    ],
    explanation:
      "AWS Snowmobile is designed for large-scale data transfers, making it the most cost-effective solution.",
  },
  {
    question:
      "Which of the following are pillars of the AWS Well-Architected Framework? (Choose two.)",
    answers: [
      { text: "Resource scalability", correct: false },
      { text: "Performance efficiency", correct: true },
      { text: "System elasticity", correct: false },
      { text: "Operational excellence", correct: true },
    ],
    explanation:
      "Performance Efficiency and Operational Excellence are two of the six pillars of the AWS Well-Architected Framework.",
  },
  {
    question:
      "A company needs to connect its on-premises data center to the AWS Cloud. The company needs a dedicated, low-latency connection with consistent network performance. Which AWS service will meet these requirements?",
    answers: [
      { text: "AWS Global Accelerator", correct: false },
      { text: "Amazon CloudFront", correct: false },
      { text: "AWS Direct Connect", correct: true },
      { text: "AWS Managed VPN", correct: false },
    ],
    explanation:
      "AWS Direct Connect provides a dedicated, low-latency connection to AWS from an on-premises environment.",
  },
  {
    question:
      "Which design principles should a company apply to AWS Cloud workloads to maximize sustainability and minimize environmental impact? (Choose two.)",
    answers: [
      { text: "Maximize utilization of Amazon EC2 instances", correct: true },
      { text: "Minimize utilization of Amazon EC2 instances", correct: false },
      { text: "Minimize usage of managed services.", correct: false },
      {
        text: "Reduce the need for users to reinstall applications.",
        correct: true,
      },
    ],
    explanation:
      "Maximizing resource utilization and reducing unnecessary reinstallation are principles for sustainability in the cloud.",
  },
  {
    question:
      "In which ways does the AWS Cloud offer lower total cost of ownership (TCO) of computing resources than on-premises data centers? (Choose two.)",
    answers: [
      {
        text: "AWS replaces upfront capital expenditures with pay-as-you-go costs",
        correct: true,
      },
      {
        text: "AWS is designed for high availability, which eliminates user downtime",
        correct: false,
      },
      {
        text: "AWS eliminates the need for on-premises IT staff",
        correct: false,
      },
      {
        text: "AWS uses economies of scale to continually reduce prices.",
        correct: true,
      },
    ],
    explanation:
      "AWS reduces TCO through pay-as-you-go pricing and economies of scale, lowering costs over time.",
  },
  {
    question:
      "A company wants to deploy some of its resources in the AWS Cloud. To meet regulatory requirements, the data must remain local and on premises. There must be low latency between AWS and the company resources. Which AWS service or feature can be used to meet these requirements?",
    answers: [
      { text: "AWS Local Zones", correct: false },
      { text: "Availability Zones", correct: false },
      { text: "AWS Outposts", correct: true },
      { text: "AWS Wavelength Zones", correct: false },
    ],
    explanation:
      "AWS Outposts provide a hybrid solution that meets regulatory requirements while ensuring low latency.",
  },
  {
    question:
      "Which of the following AWS services are serverless? (Choose two.)",
    answers: [
      { text: "AWS Outposts", correct: false },
      { text: "Amazon EC2", correct: false },
      { text: "AWS Fargate", correct: true },
      { text: "AWS Lambda", correct: true },
    ],
    explanation:
      "AWS Fargate and AWS Lambda are serverless services that allow you to run applications without managing servers.",
  },
  {
    question:
      "When a user wants to utilize their existing per-socket, per-core, or per-virtual machine software licenses for a Microsoft Windows server running on AWS, which Amazon EC2 instance type is required?",
    answers: [
      { text: "Spot Instances", correct: false },
      { text: "Dedicated Instances", correct: false },
      { text: "Dedicated Hosts", correct: true },
      { text: "Reserved Instances", correct: false },
    ],
    explanation:
      "Dedicated Hosts allow users to use existing software licenses for Windows servers on AWS.",
  },
  {
    question:
      "A solutions architect needs to maintain a fleet of Amazon EC2 instances so that any impaired instances are replaced with new ones. Which AWS service should the solutions architect use?",
    answers: [
      { text: "Amazon Elastic Container Service (Amazon ECS)", correct: false },
      { text: "Amazon GuardDuty", correct: false },
      { text: "AWS Shield", correct: false },
      { text: "AWS Auto Scaling", correct: true },
    ],
    explanation:
      "AWS Auto Scaling automatically replaces impaired EC2 instances to maintain the desired fleet size.",
  },
  {
    question:
      "Which AWS service provides on-premises applications with low-latency access to data that is stored in the AWS Cloud?",
    answers: [
      { text: "Amazon CloudFront", correct: false },
      { text: "AWS Storage Gateway", correct: true },
      { text: "AWS Backup", correct: false },
      { text: "AWS DataSync", correct: false },
    ],
    explanation:
      "AWS Storage Gateway allows on-premises applications to access AWS Cloud storage with low latency.",
  },
  {
    question: "What does Amazon CloudFront provide?",
    answers: [
      {
        text: "Automatic scaling for all resources to power an application from a single unified interface",
        correct: false,
      },
      {
        text: "Secure delivery of data, videos, applications, and APIs to users globally with low latency",
        correct: true,
      },
      {
        text: "Ability to directly manage traffic globally through a variety of routing types, including latency-based routing, geo DNS, geoproximity, and weighted round robin",
        correct: false,
      },
      {
        text: "Automatic distribution of incoming application traffic across multiple targets, such as Amazon EC2 instances, containers, IP addresses, and AWS Lambda functions",
        correct: false,
      },
    ],
    explanation:
      "Amazon CloudFront is a content delivery network (CDN) that provides secure, low-latency delivery of content.",
  },
  {
    question:
      "Which AWS service supports the deployment and management of applications in the AWS Cloud?",
    answers: [
      { text: "Amazon CodeGuru", correct: false },
      { text: "AWS Fargate", correct: false },
      { text: "AWS CodeCommit", correct: false },
      { text: "AWS Elastic Beanstalk", correct: true },
    ],
    explanation:
      "AWS Elastic Beanstalk enables easy deployment and management of applications in the AWS Cloud.",
  },
  {
    question:
      "A company wants to integrate natural language processing (NLP) into business intelligence (BI) dashboards. The company wants to ask questions and receive answers with relevant visualizations. Which AWS service or tool will meet these requirements?",
    answers: [
      { text: "Amazon Macie", correct: false },
      { text: "Amazon Rekognition", correct: false },
      { text: "Amazon QuickSight Q", correct: true },
      { text: "Amazon Lex", correct: false },
    ],
    explanation:
      "Amazon QuickSight Q allows users to query data using natural language and receive visualizations.",
  },
  {
    question:
      "Which Amazon S3 feature or storage class uses the AWS backbone network and edge locations to reduce latencies from the end user to Amazon S3?",
    answers: [
      { text: "S3 Cross-Region Replication", correct: false },
      { text: "S3 Transfer Acceleration", correct: true },
      { text: "S3 Event Notifications", correct: false },
      {
        text: "S3 Standard-Infrequent Access (S3 Standard-IA)",
        correct: false,
      },
    ],
    explanation:
      "S3 Transfer Acceleration speeds up transfers by routing through AWS's global network.",
  },
  {
    question:
      "Which AWS service provides the ability to host a NoSQL database in the AWS Cloud?",
    answers: [
      { text: "Amazon Aurora", correct: false },
      { text: "Amazon DynamoDB", correct: true },
      { text: "Amazon RDS", correct: false },
      { text: "Amazon Redshift", correct: false },
    ],
    explanation:
      "Amazon DynamoDB is a fully managed NoSQL database service provided by AWS.",
  },
  {
    question:
      "Which AWS service is a relational database compatible with MySQL and PostgreSQL?",
    answers: [
      { text: "Amazon Redshift", correct: false },
      { text: "Amazon DynamoDB", correct: false },
      { text: "Amazon Aurora", correct: true },
      { text: "Amazon Neptune", correct: false },
    ],
    explanation:
      "Amazon Aurora is compatible with MySQL and PostgreSQL and offers enhanced performance.",
  },
  {
    question:
      "Which architecture design principle describes the need to isolate failures between dependent components in the AWS Cloud?",
    answers: [
      { text: "Use a monolithic design", correct: false },
      { text: "Design for automation", correct: false },
      { text: "Design for single points of failure", correct: false },
      { text: "Loosely couple components", correct: true },
    ],
    explanation:
      "Loosely coupling components helps isolate failures in microservices architectures.",
  },
  {
    question:
      "Which benefit of cloud computing gives a company the ability to deploy applications to users all over the world through a network of AWS Regions, Availability Zones, and edge locations?",
    answers: [
      { text: "Economy of scale", correct: false },
      { text: "Global reach", correct: true },
      { text: "Agility", correct: false },
      { text: "High availability", correct: false },
    ],
    explanation:
      "Global reach allows companies to deploy applications closer to users for reduced latency.",
  },
  {
    question:
      "Which AWS service makes it easier to monitor and troubleshoot application logs and cloud resources?",
    answers: [
      { text: "Amazon EC2", correct: false },
      { text: "AWS Identity and Access Management (IAM)", correct: false },
      { text: "Amazon CloudWatch", correct: true },
      { text: "AWS CloudTrail", correct: false },
    ],
    explanation:
      "Amazon CloudWatch provides monitoring for AWS resources and applications.",
  },
  {
    question:
      "Which AWS service uses AWS Compute Optimizer to provide sizing recommendations based on workload metrics?",
    answers: [
      { text: "Amazon EC2", correct: true },
      { text: "Amazon RDS", correct: false },
      { text: "Amazon Lightsail", correct: false },
      { text: "AWS Step Functions", correct: false },
    ],
    explanation:
      "AWS Compute Optimizer gives recommendations for EC2 instance types based on usage metrics.",
  },
  {
    question:
      "Which AWS service will help a company plan a migration to AWS by collecting the configuration, usage, and behavior data of on-premises data centers?",
    answers: [
      { text: "AWS Resource Groups", correct: false },
      { text: "AWS Application Discovery Service", correct: true },
      { text: "AWS Service Catalog", correct: false },
      { text: "AWS Systems Manager", correct: false },
    ],
    explanation:
      "AWS Application Discovery Service collects data to aid in migration planning.",
  },
  {
    question:
      "Which AWS service uses a combination of publishers and subscribers?",
    answers: [
      { text: "AWS Lambda", correct: false },
      {
        text: "Amazon Simple Notification Service (Amazon SNS)",
        correct: true,
      },
      { text: "Amazon CloudWatch", correct: false },
      { text: "AWS CloudFormation", correct: false },
    ],
    explanation:
      "Amazon SNS enables pub/sub messaging for application integration.",
  },
  {
    question:
      "A company is in the early stages of planning a migration to AWS. The company wants to obtain the monthly predicted total AWS cost of ownership for future Amazon EC2 instances and associated storage. Which AWS service or tool should the company use to meet these requirements?",
    answers: [
      { text: "AWS Pricing Calculator", correct: true },
      { text: "AWS Compute Optimizer", correct: false },
      { text: "AWS Trusted Advisor", correct: false },
      { text: "AWS Application Migration Service", correct: false },
    ],
    explanation:
      "AWS Pricing Calculator helps estimate the total cost of AWS resources based on expected usage.",
  },
  {
    question:
      "Which AWS service or tool will monitor AWS resources and applications in real time?",
    answers: [
      { text: "AWS Trusted Advisor", correct: false },
      { text: "Amazon CloudWatch", correct: true },
      { text: "AWS CloudTrail", correct: false },
      { text: "AWS Cost Explorer", correct: false },
    ],
    explanation:
      "Amazon CloudWatch monitors AWS resources and applications in real time.",
  },
  {
    question:
      "Which AWS Cloud Adoption Framework (AWS CAF) capability belongs to the business perspective?",
    answers: [
      { text: "Program and project management", correct: true },
      { text: "Data science", correct: false },
      { text: "Observability", correct: false },
      { text: "Change and release management", correct: false },
    ],
    explanation:
      "Program and project management is a key capability under the business perspective of AWS CAF.",
  },
  {
    question:
      "Which AWS resource can help a company reduce its costs in exchange for a usage commitment when using Amazon EC2 instances?",
    answers: [
      { text: "Compute Savings Plans", correct: true },
      { text: "Auto Scaling group", correct: false },
      { text: "On-Demand Instance", correct: false },
      { text: "EC2 instance store", correct: false },
    ],
    explanation:
      "Compute Savings Plans offer cost reductions for committing to usage over a specified term.",
  },
  {
    question:
      "Which perspective in the AWS Cloud Adoption Framework (AWS CAF) includes a capability for well-designed data and analytics architecture?",
    answers: [
      { text: "Security", correct: false },
      { text: "Governance", correct: false },
      { text: "Operations", correct: false },
      { text: "Platform", correct: true },
    ],
    explanation:
      "The Platform perspective of AWS CAF emphasizes data and analytics architecture.",
  },
  {
    question:
      "Which options are AWS Cloud Adoption Framework (AWS CAF) people perspective capabilities? (Choose two.)",
    answers: [
      { text: "Organizational alignment", correct: true },
      { text: "Portfolio management", correct: false },
      { text: "Organization design", correct: true },
      { text: "Risk management", correct: false },
    ],
    explanation:
      "Organizational alignment and organization design are capabilities within the people perspective.",
  },
  {
    question:
      "A company needs a bridge between technology and business to help evolve to a culture of continuous growth and learning. Which perspective in the AWS Cloud Adoption Framework (AWS CAF) serves as this bridge?",
    answers: [
      { text: "People", correct: true },
      { text: "Governance", correct: false },
      { text: "Operations", correct: false },
      { text: "Security", correct: false },
    ],
    explanation:
      "The People perspective acts as a bridge for cultural transformation in organizations.",
  },
  {
    question:
      "Which option is a responsibility of AWS under the AWS shared responsibility model?",
    answers: [
      { text: "Application data security", correct: false },
      {
        text: "Patch management for applications that run on Amazon EC2 instances",
        correct: false,
      },
      {
        text: "Patch management of the underlying infrastructure for managed services",
        correct: true,
      },
      { text: "Application identity and access management", correct: false },
    ],
    explanation:
      "AWS is responsible for patch management of the underlying infrastructure for managed services.",
  },
  {
    question:
      "Which AWS service or resource can identify and provide reports on IAM resources in one AWS account that is shared with another AWS account?",
    answers: [
      { text: "IAM credential report", correct: false },
      { text: "AWS IAM Identity Center (AWS Single Sign-On)", correct: false },
      {
        text: "AWS Identity and Access Management Access Analyzer",
        correct: true,
      },
      { text: "Amazon Cognito user pool", correct: false },
    ],
    explanation:
      "AWS IAM Access Analyzer helps identify shared IAM resources across accounts.",
  },
  {
    question:
      "Which AWS Well-Architected Framework pillar focuses on structured and streamlined allocation of computing resources?",
    answers: [
      { text: "Reliability", correct: false },
      { text: "Operational excellence", correct: false },
      { text: "Performance efficiency", correct: true },
      { text: "Sustainability", correct: false },
    ],
    explanation:
      "The Performance Efficiency pillar focuses on the optimal allocation and management of computing resources.",
  },
  {
    question:
      "Which AWS Cloud Adoption Framework (AWS CAF) capabilities belong to the governance perspective? (Choose two.)",
    answers: [
      { text: "Program and project management", correct: true },
      { text: "Product management", correct: false },
      { text: "Portfolio management", correct: true },
      { text: "Risk management", correct: true },
    ],
    explanation:
      "The governance perspective includes capabilities like program and project management and portfolio management.",
  },
  {
    question:
      "A company wants to use AWS Managed Services (AMS) for operational support and wants to understand the scope of AMS. Which AMS feature will meet these requirements?",
    answers: [
      { text: "Landing zone and network management", correct: true },
      { text: "Customer application development", correct: false },
      { text: "DevSecOps pipeline configuration", correct: false },
      { text: "Application log monitoring", correct: false },
    ],
    explanation:
      "Landing zone and network management is a key feature of AWS Managed Services.",
  },
  {
    question:
      "A company wants to migrate its on-premises NoSQL workload to Amazon DynamoDB. Which AWS service will meet this requirement?",
    answers: [
      { text: "AWS Migration Hub", correct: false },
      { text: "AWS Database Migration Service (AWS DMS)", correct: true },
      { text: "Migration Evaluator", correct: false },
      { text: "AWS Application Migration Service", correct: false },
    ],
    explanation:
      "AWS Database Migration Service (AWS DMS) is designed for migrating databases, including NoSQL workloads.",
  },
  {
    question:
      "A company is in the process of finding correct Amazon EC2 instance types and sizes to meet its performance and capacity requirements. The company wants to find the lowest possible cost. Which option accurately characterizes the company's actions?",
    answers: [
      { text: "Auto Scaling", correct: false },
      { text: "Storage tiering", correct: false },
      { text: "Rightsizing", correct: true },
      { text: "Instance scheduling", correct: false },
    ],
    explanation:
      "Rightsizing involves optimizing resource allocation to ensure cost-effectiveness while meeting performance needs.",
  },
  {
    question:
      "A company wants to manage sign-in security for workforce users. The company needs to create workforce users and centrally manage their access across all the company's AWS accounts and applications. Which AWS service will meet these requirements?",
    answers: [
      { text: "AWS Audit Manager", correct: false },
      { text: "Amazon Cognito", correct: false },
      { text: "AWS Security Hub", correct: false },
      { text: "AWS IAM Identity Center (AWS Single Sign-On)", correct: true },
    ],
    explanation:
      "AWS IAM Identity Center allows for centralized identity and access management across multiple AWS accounts.",
  },
  {
    question:
      "A company wants a report that lists the status of multi-factor authentication (MFA) devices that all users in the company's AWS account use. Which AWS feature or service will meet this requirement?",
    answers: [
      { text: "AWS Cost and Usage Reports", correct: false },
      { text: "IAM credential reports", correct: true },
      { text: "Detailed Billing Reports", correct: false },
      { text: "AWS Cost Explorer reports", correct: false },
    ],
    explanation:
      "IAM credential reports provide a detailed overview of MFA device statuses for users in an AWS account.",
  },
  {
    question:
      "A company wants to use machine learning capabilities to analyze log data from its Amazon EC2 instances and efficiently conduct security investigations. Which AWS service will meet these requirements?",
    answers: [
      { text: "Amazon Inspector", correct: false },
      { text: "Amazon QuickSight", correct: false },
      { text: "Amazon Detective", correct: true },
      { text: "Amazon GuardDuty", correct: false },
    ],
    explanation:
      "Amazon Detective is designed for analyzing and investigating security data, making it suitable for this use case.",
  },
  {
    question:
      "A company is launching a mobile app in the AWS Cloud. The company wants the app's users to sign in through social media identity providers (IdPs). Which AWS service will meet this requirement?",
    answers: [
      { text: "AWS Lambda", correct: false },
      { text: "Amazon Cognito", correct: true },
      { text: "AWS Secrets Manager", correct: false },
      { text: "Amazon CloudFront", correct: false },
    ],
    explanation:
      "Amazon Cognito enables user authentication through social media identity providers.",
  },
  {
    question:
      "Which complimentary AWS service or tool creates data-driven business cases for cloud planning?",
    answers: [
      { text: "Migration Evaluator", correct: true },
      { text: "AWS Billing Conductor", correct: false },
      { text: "AWS Billing Console", correct: false },
      { text: "Amazon Forecast", correct: false },
    ],
    explanation:
      "Migration Evaluator helps create business cases for cloud migrations based on data analysis.",
  },
  {
    question: "Which cloud concept is demonstrated by using AWS Cost Explorer?",
    answers: [
      { text: "Rightsizing", correct: true },
      { text: "Reliability", correct: false },
      { text: "Resilience", correct: false },
      { text: "Modernization", correct: false },
    ],
    explanation:
      "AWS Cost Explorer helps users analyze and optimize costs, reflecting the rightsizing concept.",
  },
  {
    question:
      "A company wants to deploy a non-containerized Java-based web application on AWS. The company wants to use a managed service to quickly deploy the application. The company wants the service to automatically provision capacity, load balance, scale, and monitor application health. Which AWS service will meet these requirements?",
    answers: [
      { text: "Amazon Elastic Container Service (Amazon ECS)", correct: false },
      { text: "AWS Lambda", correct: false },
      {
        text: "Amazon Elastic Kubernetes Service (Amazon EKS)",
        correct: false,
      },
      { text: "AWS Elastic Beanstalk", correct: true },
    ],
    explanation:
      "AWS Elastic Beanstalk automates the deployment and management of web applications, including Java-based apps.",
  },
  {
    question:
      "Which AWS service or tool gives users the ability to connect with AWS and deploy resources programmatically?",
    answers: [
      { text: "Amazon QuickSight", correct: false },
      { text: "AWS PrivateLink", correct: false },
      { text: "AWS Direct Connect", correct: false },
      { text: "AWS SDKs", correct: true },
    ],
    explanation:
      "AWS SDKs provide the tools needed to connect to AWS services and manage resources programmatically.",
  },
  {
    question:
      "A company has deployed a web application to Amazon EC2 instances. The EC2 instances have low usage. Which AWS service or feature should the company use to rightsize the EC2 instances?",
    answers: [
      { text: "AWS Config", correct: false },
      { text: "AWS Cost Anomaly Detection", correct: false },
      { text: "AWS Budgets", correct: false },
      { text: "AWS Compute Optimizer", correct: true },
    ],
    explanation:
      "AWS Compute Optimizer analyzes resource utilization and provides recommendations for rightsizing EC2 instances.",
  },
  {
    question:
      "A company wants to define a central data protection policy that works across AWS services for compute, storage, and database resources. Which AWS service will meet this requirement?",
    answers: [
      { text: "AWS Batch", correct: false },
      { text: "AWS Elastic Disaster Recovery", correct: false },
      { text: "AWS Backup", correct: true },
      { text: "Amazon FSx", correct: false },
    ],
    explanation:
      "AWS Backup provides a centralized way to manage data protection across various AWS services.",
  },
  {
    question:
      "A company needs to categorize and track AWS usage cost based on business categories. Which AWS service or feature should the company use to meet these requirements?",
    answers: [
      { text: "Cost allocation tags", correct: true },
      { text: "AWS Organizations", correct: false },
      { text: "AWS Security Hub", correct: false },
      { text: "AWS Cost and Usage Report", correct: false },
    ],
    explanation:
      "Cost allocation tags enable users to categorize and track AWS costs based on defined categories.",
  },
  {
    question:
      "Which AWS service can migrate data between AWS storage services?",
    answers: [
      { text: "AWS DataSync", correct: true },
      { text: "AWS Direct Connect", correct: false },
      { text: "AWS Lake Formation", correct: false },
      { text: "Amazon S3", correct: false },
    ],
    explanation:
      "AWS DataSync simplifies data transfer between AWS storage services.",
  },
  {
    question:
      "Which statements represent the cost-effectiveness of the AWS Cloud? (Choose two.)",
    answers: [
      {
        text: "Users can trade fixed expenses for variable expenses",
        correct: true,
      },
      {
        text: "Users can deploy all over the world in minutes",
        correct: false,
      },
      { text: "AWS offers increased speed and agility", correct: false },
      { text: "Users benefit from economies of scale", correct: true },
    ],
    explanation:
      "Users can convert fixed costs to variable costs and benefit from economies of scale in AWS.",
  },
  {
    question:
      "A company wants to design its cloud architecture so that it can support development innovations, and continuously improve processes and procedures. This is an example of which pillar of the AWS Well-Architected Framework?",
    answers: [
      { text: "Security", correct: false },
      { text: "Performance efficiency", correct: false },
      { text: "Operational excellence", correct: true },
      { text: "Reliability", correct: false },
    ],
    explanation:
      "Operational excellence focuses on supporting continuous improvement and innovation.",
  },
  {
    question:
      "A company needs to consolidate the billing for multiple AWS accounts. The company needs to use one account to pay on behalf of all the other accounts. Which AWS service or tool should the company use to meet this requirement?",
    answers: [
      { text: "AWS Trusted Advisor", correct: false },
      { text: "AWS Organizations", correct: true },
      { text: "AWS Budgets", correct: false },
      { text: "AWS Service Catalog", correct: false },
    ],
    explanation:
      "AWS Organizations allows for consolidated billing across multiple accounts.",
  },
  {
    question:
      "A company is moving some of its on-premises IT services to the AWS Cloud. The finance department wants to see the entire bill so it can forecast spending limits. Which AWS service can the company use to set spending limits and receive notifications if those limits are exceeded?",
    answers: [
      { text: "AWS Cost and Usage Reports", correct: false },
      { text: "AWS Budgets", correct: true },
      { text: "AWS Organizations consolidated billing", correct: false },
      { text: "Cost Explorer", correct: false },
    ],
    explanation:
      "AWS Budgets allows users to set spending limits and receive alerts when those limits are approached or exceeded.",
  },
  {
    question:
      "Which AWS Support plans provide access to an AWS technical account manager (TAM)? (Choose two.)",
    answers: [
      { text: "AWS Basic Support", correct: false },
      { text: "AWS Developer Support", correct: false },
      { text: "AWS Enterprise On-Ramp Support", correct: true },
      { text: "AWS Enterprise Support", correct: true },
    ],
    explanation:
      "AWS Enterprise On-Ramp and Enterprise Support plans provide access to a technical account manager.",
  },
  {
    question: "Where can users find examples of AWS Cloud solution designs?",
    answers: [
      { text: "AWS Marketplace", correct: false },
      { text: "AWS Service Catalog", correct: false },
      { text: "AWS Architecture Center", correct: true },
      { text: "AWS Trusted Advisor", correct: false },
    ],
    explanation:
      "The AWS Architecture Center provides numerous examples of cloud solution designs.",
  },
  {
    question:
      "Which task is the responsibility of a company that is using Amazon RDS?",
    answers: [
      { text: "Provision the underlying infrastructure", correct: false },
      {
        text: "Create IAM policies to control administrative access to the service",
        correct: true,
      },
      {
        text: "Install the cables to connect the hardware for compute and storage",
        correct: false,
      },
      { text: "Install and patch the RDS operating system", correct: false },
    ],
    explanation:
      "Creating IAM policies for managing access is a responsibility of the company using Amazon RDS.",
  },
  {
    question:
      "Which of the following is an advantage that the AWS Cloud provides to users?",
    answers: [
      {
        text: "Users eliminate the need to guess about infrastructure capacity requirements",
        correct: true,
      },
      {
        text: "Users decrease their variable costs by maintaining sole ownership of IT hardware.",
        correct: false,
      },
      {
        text: "Users maintain control of underlying IT infrastructure hardware.",
        correct: false,
      },
      {
        text: "Users maintain control of operating systems for managed services.",
        correct: false,
      },
    ],
    explanation:
      "AWS Cloud allows users to avoid the uncertainties of capacity planning.",
  },
  {
    question:
      "Which feature of Amazon RDS provides the ability to automatically create a primary database instance and to synchronously replicate data to an instance in another Availability Zone?",
    answers: [
      { text: "Read replicas", correct: false },
      { text: "Blue/green deployment", correct: false },
      { text: "Multi-AZ deployment", correct: true },
      { text: "Reserved Instances", correct: false },
    ],
    explanation:
      "Multi-AZ deployment ensures high availability and disaster recovery by synchronously replicating data.",
  },
  {
    question:
      "A company needs to check for IAM access keys that have not been rotated recently. Which AWS service should the company use to meet this requirement?",
    answers: [
      { text: "AWS WAF", correct: false },
      { text: "AWS Shield", correct: false },
      { text: "Amazon Cognito", correct: false },
      { text: "AWS Trusted Advisor", correct: true },
    ],
    explanation:
      "AWS Trusted Advisor provides insights on IAM access keys, including their rotation status.",
  },
  {
    question:
      "A company runs many Amazon EC2 instances in its VPC. The company wants to use a native AWS security resource to control network traffic between certain EC2 instances. Which AWS service or feature will meet this requirement?",
    answers: [
      { text: "Network ACLs", correct: false },
      { text: "AWS WAF", correct: false },
      { text: "Amazon GuardDuty", correct: false },
      { text: "Security groups", correct: true },
    ],
    explanation:
      "Security groups act as virtual firewalls to control network traffic to and from EC2 instances.",
  },
  {
    question:
      "Which of the following can be components of a VPC in the AWS Cloud? (Choose two.)",
    answers: [
      { text: "Amazon API Gateway", correct: false },
      { text: "Amazon S3 buckets and objects", correct: false },
      { text: "Subnet", correct: true },
      { text: "Internet gateway", correct: true },
    ],
    explanation:
      "Subnets and internet gateways are essential components of a VPC in AWS.",
  },
  {
    question:
      "A company is building a new application on AWS. The company needs the application to remain available if an individual application component fails. Which design principle should the company use to meet this requirement?",
    answers: [
      { text: "Disposable resources", correct: false },
      { text: "Automation", correct: false },
      { text: "Rightsizing", correct: false },
      { text: "Loose coupling", correct: true },
    ],
    explanation:
      "Loose coupling allows application components to fail independently without affecting the overall application availability.",
  },
  {
    question:
      "A company wants to use a managed service to identify and protect sensitive data that is stored in Amazon S3. Which AWS service will meet these requirements?",
    answers: [
      { text: "AWS IAM Access Analyzer", correct: false },
      { text: "Amazon GuardDuty", correct: false },
      { text: "Amazon Inspector", correct: false },
      { text: "Amazon Macie", correct: true },
    ],
    explanation:
      "Amazon Macie is designed to identify and protect sensitive data stored in Amazon S3.",
  },
  {
    question:
      "Which AWS service or feature can a user configure to limit network access at the subnet level?",
    answers: [
      { text: "AWS Shield", correct: false },
      { text: "AWS WAF", correct: false },
      { text: "Network ACL", correct: true },
      { text: "Security group", correct: false },
    ],
    explanation:
      "Network ACLs can be used to control inbound and outbound traffic at the subnet level.",
  },
  {
    question:
      "Which AWS service can a company use to manage encryption keys in the cloud?",
    answers: [
      { text: "AWS License Manager", correct: false },
      { text: "AWS Certificate Manager (ACM)", correct: false },
      { text: "AWS CloudHSM", correct: true },
      { text: "AWS Directory Service", correct: false },
    ],
    explanation:
      "AWS CloudHSM allows for secure management of encryption keys in the cloud.",
  },
  {
    question:
      "A company wants to enhance security by launching a third-party ISP intrusion detection system from its AWS account. Which AWS service or resource should the company use to meet this requirement?",
    answers: [
      { text: "AWS Security Hub", correct: false },
      { text: "AWS Marketplace", correct: true },
      { text: "AWS Quick Starts", correct: false },
      { text: "AWS Security Center", correct: false },
    ],
    explanation:
      "AWS Marketplace provides access to third-party security solutions, including intrusion detection systems.",
  },
  {
    question:
      "How does the AWS Cloud help companies build agility into their processes and cloud infrastructure?",
    answers: [
      {
        text: "Companies can avoid provisioning too much capacity when they do not know how much capacity is required.",
        correct: false,
      },
      {
        text: "Companies can expand into new geographic regions.",
        correct: false,
      },
      {
        text: "Companies can access a range of technologies to experiment and innovate quickly",
        correct: true,
      },
      {
        text: "Companies can pay for IT resources only when they use the resources",
        correct: false,
      },
    ],
    explanation:
      "The AWS Cloud provides a variety of technologies that enable quick experimentation and innovation.",
  },
  {
    question:
      "Which AWS service or tool gives a company the ability to release application changes in an automated way?",
    answers: [
      { text: "Amazon AppFlow", correct: false },
      { text: "AWS CodeDeploy", correct: true },
      { text: "AWS PrivateLink", correct: false },
      { text: "Amazon EKS Distro", correct: false },
    ],
    explanation:
      "AWS CodeDeploy automates application deployments, enabling efficient release of application changes.",
  },
  {
    question:
      "Which AWS Cloud Adoption Framework (AWS CAF) perspective focuses on managing identities and permissions at scale?",
    answers: [
      { text: "Operations", correct: false },
      { text: "Platform", correct: false },
      { text: "Governance", correct: false },
      { text: "Security", correct: true },
    ],
    explanation:
      "The Security perspective emphasizes identity and access management.",
  },
  {
    question:
      "Which AWS service or feature allows users to securely store encrypted credentials and retrieve these credentials when required?",
    answers: [
      { text: "AWS Encryption SDK", correct: false },
      { text: "AWS Security Hub", correct: false },
      { text: "AWS Secrets Manager", correct: true },
      { text: "AWS Artifact", correct: false },
    ],
    explanation:
      "AWS Secrets Manager securely stores and manages sensitive information, such as credentials.",
  },
  {
    question:
      "Which pillar of the AWS Well-Architected Framework aligns with the ability to make frequent, small, and reversible changes to AWS Cloud architecture?",
    answers: [
      { text: "Security", correct: false },
      { text: "Cost optimization", correct: false },
      { text: "Operational excellence", correct: true },
      { text: "Performance efficiency", correct: false },
    ],
    explanation:
      "Operational excellence encourages frequent changes that can be easily reversed.",
  },
  {
    question:
      "Which AWS service or resource can a company use to deploy AWS WAF rules?",
    answers: [
      { text: "Amazon EC2", correct: false },
      { text: "Application Load Balancer", correct: true },
      { text: "AWS Trusted Advisor", correct: false },
      { text: "Network Load Balancer", correct: false },
    ],
    explanation:
      "AWS WAF rules can be deployed through an Application Load Balancer.",
  },
  {
    question:
      "A company hosts its website on Amazon EC2 instances. The company needs to ensure that the website reaches a global audience and provides minimum latency to users. Which AWS service should the company use to meet these requirements?",
    answers: [
      { text: "Amazon Route 53", correct: false },
      { text: "Amazon CloudFront", correct: true },
      { text: "Elastic Load Balancing", correct: false },
      { text: "AWS Lambda", correct: false },
    ],
    explanation:
      "Amazon CloudFront is a content delivery network that improves global access and reduces latency.",
  },
  {
    question:
      "Which AWS design principle emphasizes the reduction of interdependencies between components of an application?",
    answers: [
      { text: "Scalability", correct: false },
      { text: "Loose coupling", correct: true },
      { text: "Automation", correct: false },
      { text: "Caching", correct: false },
    ],
    explanation:
      "Loose coupling reduces interdependencies, allowing components to operate independently.",
  },
  {
    question:
      "A company wants to provide one of its employees with access to Amazon RDS. The company also wants to limit the interaction to only the AWS CLI and AWS software development kits (SDKs). Which combination of actions should the company take to meet these requirements while following the principles of least privilege? (Choose two.)",
    answers: [
      {
        text: "Create an IAM user and provide AWS Management Console access only",
        correct: false,
      },
      {
        text: "Create an IAM user and provide programmatic access only.",
        correct: true,
      },
      {
        text: "Create an IAM role and provide AWS Management Console access only",
        correct: false,
      },
      {
        text: "Create an IAM policy with Amazon RDS access and attach it to the IAM user.",
        correct: true,
      },
    ],
    explanation:
      "Providing programmatic access and attaching a policy for Amazon RDS access aligns with least privilege.",
  },
  {
    question:
      "A company is running a reporting web server application on Amazon EC2 instances. The application runs once every week and once again at the end of the month. The EC2 instances can be shut down when they are not in use. What is the MOST cost-effective billing model for this use case?",
    answers: [
      { text: "Standard Reserved Instances", correct: false },
      { text: "Convertible Reserved Instances", correct: false },
      { text: "On-Demand Capacity Reservations", correct: false },
      { text: "On-Demand Instances", correct: true },
    ],
    explanation:
      "On-Demand Instances allow for flexibility and cost-effectiveness for sporadic usage.",
  },
  {
    question:
      "A company wants to discover, prepare, move, and integrate data from multiple sources for data analytics and machine learning. Which AWS serverless data integration service should the company use to meet these requirements?",
    answers: [
      { text: "AWS Glue", correct: true },
      { text: "AWS Data Exchange", correct: false },
      { text: "Amazon Athena", correct: false },
      { text: "Amazon EMR", correct: false },
    ],
    explanation:
      "AWS Glue is an ETL service designed for data preparation and integration for analytics.",
  },
  {
    question:
      "A company is moving its development and test environments to AWS to increase agility and reduce cost. Because these are not production workloads and the servers are not fully utilized, occasional unavailability is acceptable. What is the MOST cost-effective Amazon EC2 pricing model that will meet these requirements?",
    answers: [
      { text: "Reserved Instances", correct: false },
      { text: "On-Demand Instances", correct: false },
      { text: "Spot Instances", correct: true },
      { text: "Dedicated Hosts", correct: false },
    ],
    explanation:
      "Spot Instances offer significant cost savings for non-critical workloads.",
  },
  {
    question:
      "A company deploys its application on Amazon EC2 instances. The application occasionally experiences sudden increases in demand. The company wants to ensure that its application can respond to changes in demand at the lowest possible cost. Which AWS service or concept will meet these requirements?",
    answers: [
      { text: "AWS Auto Scaling", correct: true },
      { text: "AWS Compute Optimizer", correct: false },
      { text: "AWS Cost Explorer", correct: false },
      { text: "AWS Well-Architected Framework", correct: false },
    ],
    explanation:
      "AWS Auto Scaling allows applications to automatically adjust capacity based on demand.",
  },
  {
    question:
      "A company wants to organize its users so that the company can grant permissions to the users as a group. Which AWS service or tool can the company use to meet this requirement?",
    answers: [
      { text: "Security groups", correct: false },
      { text: "AWS Identity and Access Management (IAM)", correct: true },
      { text: "Resource groups", correct: false },
      { text: "AWS Security Hub", correct: false },
    ],
    explanation:
      "AWS IAM allows for group management and permission assignment.",
  },
  {
    question:
      "A company wants to build an application that uses AWS Lambda to run Python code. Under the AWS shared responsibility model, which tasks will be the company’s responsibility? (Choose two.)",
    answers: [
      { text: "Management of the underlying infrastructure", correct: false },
      { text: "Management of the operating system", correct: true },
      { text: "Writing the business logic code", correct: true },
      {
        text: "Providing AWS Identity and Access Management (IAM) access to the Lambda service.",
        correct: false,
      },
    ],
    explanation:
      "The company is responsible for writing code and managing its own application logic.",
  },
  {
    question:
      "A company needs to identify who accessed an AWS service and what action was performed for a given time period. Which AWS service should the company use to meet this requirement?",
    answers: [
      { text: "Amazon CloudWatch", correct: false },
      { text: "AWS CloudTrail", correct: true },
      { text: "AWS Security Hub", correct: false },
      { text: "Amazon Inspector", correct: false },
    ],
    explanation:
      "AWS CloudTrail records API calls for AWS services and provides detailed logging.",
  },
  {
    question:
      "A company wants to use a centralized AWS service to enforce compliance with the organizational business standards. The company wants to use an AWS service that can govern and control who can deploy, manage, and decommission AWS resources. Which AWS service will meet these requirements?",
    answers: [
      { text: "Amazon CloudWatch", correct: false },
      { text: "AWS Service Catalog", correct: true },
      { text: "Amazon GuardDuty", correct: false },
      { text: "AWS Security Hub", correct: false },
    ],
    explanation:
      "AWS Service Catalog allows organizations to create and manage catalogs of IT services.",
  },
  {
    question:
      "What does 'security of the cloud' refer to in the AWS shared responsibility model?",
    answers: [
      {
        text: "Availability of AWS services such as Amazon EC2",
        correct: false,
      },
      {
        text: "Security of the cloud infrastructure that runs all the AWS services",
        correct: true,
      },
      {
        text: "Implementation of password policies for IAM users",
        correct: false,
      },
      {
        text: "Security of customer environments by using AWS Network Firewall partners",
        correct: false,
      },
    ],
    explanation:
      "'Security of the cloud' pertains to the underlying infrastructure managed by AWS.",
  },
  {
    question:
      "A company has an application that produces unstructured data continuously. The company needs to store the data so that the data is durable and easy to query. Which AWS service can the company use to meet these requirements?",
    answers: [
      { text: "Amazon RDS", correct: false },
      { text: "Amazon Aurora", correct: false },
      { text: "Amazon QuickSight", correct: false },
      { text: "Amazon DynamoDB", correct: true },
    ],
    explanation:
      "Amazon DynamoDB is a fully managed NoSQL database service that provides durability and fast querying.",
  },
  {
    question:
      "Which options are AWS Cloud Adoption Framework (AWS CAF) perspectives? (Choose two.)",
    answers: [
      { text: "Cloud fluency", correct: true },
      { text: "Security", correct: true },
      { text: "Change acceleration", correct: false },
      { text: "Business", correct: false },
    ],
    explanation:
      "Cloud fluency and Security are perspectives in the AWS Cloud Adoption Framework.",
  },
  {
    question:
      "A company wants to migrate a company’s on-premises container infrastructure to the AWS Cloud. The company wants to prevent unplanned administration and operation cost and adapt to a serverless architecture. Which AWS service will meet these requirements?",
    answers: [
      { text: "Amazon Connect", correct: false },
      { text: "AWS Fargate", correct: true },
      { text: "Amazon Lightsail", correct: false },
      { text: "Amazon EC2", correct: false },
    ],
    explanation:
      "AWS Fargate allows you to run containers without managing the underlying infrastructure.",
  },
  {
    question:
      "A company wants its Amazon EC2 instances to be in different locations but share the same geographic area. The company also wants to use multiple power grids and independent networking connectivity for the EC2 instances. Which solution meets these requirements?",
    answers: [
      {
        text: "Use EC2 instances in multiple edge locations in the same AWS Region",
        correct: false,
      },
      {
        text: "Use EC2 instances in multiple Availability Zones in the same AWS Region",
        correct: true,
      },
      {
        text: "Use EC2 instances in multiple Amazon Connect locations in the same AWS Region.",
        correct: false,
      },
      {
        text: "Use EC2 instances in multiple AWS Artifact locations in the same AWS Region",
        correct: false,
      },
    ],
    explanation:
      "Using multiple Availability Zones increases redundancy and availability while keeping resources in the same region.",
  },
  {
    question:
      "An ecommerce company has deployed a new web application on Amazon EC2 instances. The company wants to distribute incoming HTTP traffic evenly across all running instances. Which AWS service or resource will meet this requirement?",
    answers: [
      { text: "Amazon EC2 Auto Scaling", correct: false },
      { text: "Application Load Balancer", correct: true },
      { text: "Gateway Load Balancer", correct: false },
      { text: "Network Load Balancer", correct: false },
    ],
    explanation:
      "An Application Load Balancer is designed to distribute incoming traffic across multiple EC2 instances.",
  },
  {
    question:
      "Which AWS service or feature gives users the ability to connect VPCs and on-premises networks to a central hub?",
    answers: [
      { text: "Virtual private gateway", correct: false },
      { text: "AWS Transit Gateway", correct: true },
      { text: "Internet gateway", correct: false },
      { text: "Customer gateway", correct: false },
    ],
    explanation:
      "AWS Transit Gateway simplifies network management by acting as a central hub for VPCs and on-premises networks.",
  },
  {
    question:
      "A company wants to run CPU-intensive workload across multiple Amazon EC2 instances. Which EC2 instance type should the company use to meet this requirement?",
    answers: [
      { text: "General purpose instances", correct: false },
      { text: "Compute optimized instances", correct: true },
      { text: "Memory optimized instances", correct: false },
      { text: "Storage optimized instances", correct: false },
    ],
    explanation:
      "Compute optimized instances are designed for CPU-intensive tasks.",
  },
  {
    question:
      "A company is connecting multiple VPCs and on-premises networks. The company needs to use an AWS service as a cloud router to simplify peering relationships. Which AWS service can the company use to meet this requirement?",
    answers: [
      { text: "AWS Direct Connect", correct: false },
      { text: "AWS Transit Gateway", correct: true },
      { text: "Amazon Connect", correct: false },
      { text: "Amazon Route 53", correct: false },
    ],
    explanation:
      "AWS Transit Gateway acts as a cloud router to simplify network connections.",
  },
  {
    question:
      "A company stores a large amount of data that auditors access only twice each year. Which Amazon S3 storage class should the company use to store the data with the LOWEST cost?",
    answers: [
      { text: "Amazon S3 Outposts", correct: false },
      { text: "Amazon S3 Glacier Instant Retrieval", correct: false },
      { text: "Amazon S3 Standard", correct: false },
      { text: "Amazon S3 Intelligent-Tiering", correct: false },
      { text: "Amazon S3 Glacier Flexible Retrieval", correct: true },
    ],
    explanation:
      "Amazon S3 Glacier Flexible Retrieval is the most cost-effective option for data that is accessed infrequently.",
  },
  {
    question:
      "Which action should a company take to improve security in its AWS account?",
    answers: [
      {
        text: "Require multi-factor authentication (MFA) for privileged users",
        correct: true,
      },
      { text: "Remove the root user account", correct: false },
      {
        text: "Create an access key for the AWS account root user",
        correct: false,
      },
      { text: "Create an access key for each privileged user", correct: false },
    ],
    explanation:
      "Enabling MFA for privileged users enhances account security significantly.",
  },
  {
    question:
      "Which of the following are ways to improve security on AWS? (Choose two.)",
    answers: [
      { text: "Using AWS Artifact", correct: false },
      {
        text: "Granting the broadest permissions to all IAM roles",
        correct: false,
      },
      {
        text: "Enabling multi-factor authentication (MFA) with Amazon Cognito",
        correct: true,
      },
      { text: "Using AWS Trusted Advisor security checks", correct: true },
    ],
    explanation:
      "Using MFA and conducting regular security checks through AWS Trusted Advisor improve security.",
  },
  {
    question:
      "A company wants to store its files in the AWS Cloud. Users need to be able to download these files directly using a public URL. Which AWS service or feature will meet this requirement?",
    answers: [
      { text: "Amazon Redshift", correct: false },
      { text: "Amazon Elastic Block Store (Amazon EBS)", correct: false },
      { text: "Amazon Elastic File System (Amazon EFS)", correct: false },
      { text: "Amazon S3", correct: true },
    ],
    explanation:
      "Amazon S3 provides the ability to store files and generate public URLs for access.",
  },
  {
    question:
      "A company is using AWS for all its IT infrastructure. The company's developers are allowed to deploy applications on their own. The developers want to deploy their applications without having to provision the infrastructure themselves. Which AWS service should the developers use to meet these requirements?",
    answers: [
      { text: "AWS CloudFormation", correct: false },
      { text: "AWS CodeBuild", correct: false },
      { text: "AWS Elastic Beanstalk", correct: true },
      { text: "AWS CodeDeploy", correct: false },
    ],
    explanation:
      "AWS Elastic Beanstalk allows developers to deploy applications without managing the underlying infrastructure.",
  },
  {
    question:
      "A company wants to gain insights from its data and build interactive data visualization dashboards. Which AWS service will meet these requirements?",
    answers: [
      { text: "Amazon SageMaker", correct: false },
      { text: "Amazon Rekognition", correct: false },
      { text: "Amazon QuickSight", correct: true },
      { text: "Amazon Kinesis", correct: false },
    ],
    explanation:
      "Amazon QuickSight is designed for creating interactive data visualization dashboards.",
  },
  {
    question:
      "A cloud engineer wants to store data in Amazon S3. The engineer will access some of the data yearly and some of the data daily. Which S3 storage class will meet these requirements MOST cost-effectively?",
    answers: [
      { text: "S3 Standard", correct: false },
      { text: "S3 Glacier Deep Archive", correct: false },
      {
        text: "S3 One Zone-Infrequent Access (S3 One Zone-IA)",
        correct: false,
      },
      { text: "S3 Intelligent-Tiering", correct: true },
    ],
    explanation:
      "S3 Intelligent-Tiering automatically optimizes costs based on access patterns.",
  },
  {
    question:
      "Which of the following are economic benefits of using the AWS Cloud? (Choose two.)",
    answers: [
      { text: "Consumption-based pricing", correct: true },
      { text: "Perpetual licenses", correct: false },
      { text: "Economies of scale", correct: true },
      { text: "AWS Enterprise Support at no additional cost", correct: false },
    ],
    explanation:
      "Consumption-based pricing and economies of scale are key economic benefits of using AWS.",
  },
  {
    question:
      "A user is moving a workload from a local data center to an architecture that is distributed between the local data center and the AWS Cloud. Which type of migration is this?",
    answers: [
      { text: "On-premises to cloud native", correct: false },
      { text: "Hybrid to cloud native", correct: false },
      { text: "On-premises to hybrid", correct: true },
      { text: "Cloud native to hybrid", correct: false },
    ],
    explanation: "This scenario represents an on-premises to hybrid migration.",
  },
  {
    question:
      "A company needs to store infrequently used data for data archives and long-term backups. Which AWS service or storage class will meet these requirements MOST cost-effectively?",
    answers: [
      { text: "Amazon FSx for Lustre", correct: false },
      { text: "Amazon Elastic Block Store (Amazon EBS)", correct: false },
      { text: "Amazon Elastic File System (Amazon EFS)", correct: false },
      { text: "Amazon S3 Glacier Flexible Retrieval", correct: true },
    ],
    explanation:
      "Amazon S3 Glacier Flexible Retrieval is cost-effective for long-term archival storage.",
  },
  {
    question:
      "Which AWS service provides users with AWS issued reports, certifications, accreditations, and third-party attestations?",
    answers: [
      { text: "AWS Artifact", correct: true },
      { text: "AWS Trusted Advisor", correct: false },
      { text: "AWS Health Dashboard", correct: false },
      { text: "AWS Config", correct: false },
    ],
    explanation:
      "AWS Artifact provides access to compliance reports and security documentation.",
  },
  {
    question:
      "A company needs to create and publish interactive business intelligence dashboards. The dashboards require insights that are powered by machine learning. Which AWS service or tool will meet these requirements?",
    answers: [
      { text: "AWS Glue Studio", correct: false },
      { text: "Amazon QuickSight", correct: true },
      { text: "Amazon Redshift", correct: false },
      { text: "Amazon Athena", correct: false },
    ],
    explanation:
      "Amazon QuickSight integrates machine learning insights into dashboards.",
  },
  {
    question:
      "A company wants to use AWS. The company has stringent requirements about low-latency access to on-premises systems and data residency. Which AWS service should the company use to design a solution that meets these requirements?",
    answers: [
      { text: "AWS Wavelength", correct: false },
      { text: "AWS Transit Gateway", correct: false },
      { text: "AWS Ground Station", correct: false },
      { text: "AWS Outposts", correct: true },
    ],
    explanation:
      "AWS Outposts provides low-latency access to on-premises systems and meets data residency requirements.",
  },
  {
    question:
      "A company runs an on-premises contact center for customers. The company needs to migrate to a cloud-based solution that can deliver artificial intelligence features to improve user experience. Which AWS service will meet these requirements?",
    answers: [
      { text: "AWS Wavelength", correct: false },
      { text: "AWS IAM Identity Center (AWS Single Sign-On)", correct: false },
      { text: "AWS Direct Connect", correct: false },
      { text: "Amazon Connect", correct: true },
    ],
    explanation:
      "Amazon Connect is a cloud-based contact center service with AI features.",
  },
  {
    question:
      "A company needs the ability to acquire resources when the resources are needed. The company also needs the ability to release the resources when the resources are no longer needed. Which AWS concept represents the company's goals?",
    answers: [
      { text: "Scalability", correct: false },
      { text: "Sustainability", correct: false },
      { text: "Elasticity", correct: true },
      { text: "Operational excellence", correct: false },
    ],
    explanation:
      "Elasticity refers to the ability to dynamically adjust resource allocation as needed.",
  },
  {
    question:
      "A company wants to use Amazon EC2 instances for a stable production workload that will run for 1 year. Which instance purchasing option meets these requirements MOST cost-effectively?",
    answers: [
      { text: "Dedicated Hosts", correct: false },
      { text: "Reserved Instances", correct: true },
      { text: "On-Demand Instances", correct: false },
      { text: "Spot Instances", correct: false },
    ],
    explanation:
      "Reserved Instances provide the best cost savings for long-term stable workloads.",
  },
  {
    question:
      "A company wants to log in securely to Linux Amazon EC2 instances. How can the company accomplish this goal?",
    answers: [
      { text: "Use SSH keys", correct: true },
      { text: "Use a VPN.", correct: false },
      { text: "Use end-to-end encryption", correct: false },
      { text: "Use Amazon Route 53", correct: false },
    ],
    explanation:
      "SSH keys are the standard method for secure logins to Linux EC2 instances.",
  },
  {
    question:
      "A company wants to use a serverless compute service for an application. Which AWS service will meet this requirement?",
    answers: [
      { text: "AWS Lambda", correct: true },
      { text: "AWS CloudFormation", correct: false },
      { text: "AWS Elastic Beanstalk", correct: false },
      { text: "Elastic Load Balancing", correct: false },
    ],
    explanation:
      "AWS Lambda is a serverless compute service that runs code without provisioning servers.",
  },
  {
    question:
      "A company wants a solution that will automatically adjust the number of Amazon EC2 instances that are being used based on the current load. Which AWS offering will meet these requirements?",
    answers: [
      { text: "Dedicated Hosts", correct: false },
      { text: "Placement groups", correct: false },
      { text: "Auto Scaling groups", correct: true },
      { text: "Reserved Instances", correct: false },
    ],
    explanation:
      "Auto Scaling groups automatically adjust instance counts based on load.",
  },
  {
    question:
      "A company is building AWS architecture to deliver real-time data feeds from an on-premises data center into an application that runs on AWS. The company needs a consistent network connection with minimal latency. What should the company use to connect the application and the data center to meet these requirements?",
    answers: [
      { text: "AWS Direct Connect", correct: true },
      { text: "Public internet", correct: false },
      { text: "AWS VPN", correct: false },
      { text: "Amazon Connect", correct: false },
    ],
    explanation:
      "AWS Direct Connect provides dedicated network connections with low latency.",
  },
  {
    question:
      "A company plans to migrate its custom marketing application and order-processing application to AWS. The company needs to deploy the applications on different types of instances with various configurations of CPU, memory, storage, and networking capacity. Which AWS service should the company use to meet these requirements?",
    answers: [
      { text: "AWS Lambda", correct: false },
      { text: "Amazon Cognito", correct: false },
      { text: "Amazon Athena", correct: false },
      { text: "Amazon EC2", correct: true },
    ],
    explanation:
      "Amazon EC2 allows for deployment on various instance types with custom configurations.",
  },
  {
    question:
      "A company wants to monitor and block malicious HTTP and HTTPS requests that its Amazon CloudFront distributions receive. Which AWS service should the company use to meet these requirements?",
    answers: [
      { text: "Amazon GuardDuty", correct: false },
      { text: "Amazon Inspector", correct: false },
      { text: "AWS WAF", correct: true },
      { text: "Amazon Detective", correct: false },
    ],
    explanation:
      "AWS WAF is designed to protect web applications by filtering and monitoring HTTP traffic.",
  },
  {
    question: "Which AWS services can host PostgreSQL databases? (Choose two.)",
    answers: [
      { text: "Amazon S3", correct: false },
      { text: "Amazon Aurora", correct: true },
      { text: "Amazon EC2", correct: true },
      { text: "Amazon OpenSearch Service", correct: false },
    ],
    explanation:
      "Amazon Aurora and Amazon EC2 can both host PostgreSQL databases.",
  },
  {
    question:
      "Which AWS service can generate information that can be used by external auditors?",
    answers: [
      { text: "Amazon Cognito", correct: false },
      { text: "Amazon FSx", correct: false },
      { text: "AWS Config", correct: true },
      { text: "Amazon Inspector", correct: false },
    ],
    explanation:
      "AWS Config provides visibility into resource configurations for compliance auditing.",
  },
  {
    question:
      "Which AWS service or feature requires an internet service provider (ISP) and a colocation facility to be implemented?",
    answers: [
      { text: "AWS VPN", correct: false },
      { text: "Amazon Connect", correct: false },
      { text: "AWS Direct Connect", correct: true },
      { text: "Internet gateway", correct: false },
    ],
    explanation:
      "AWS Direct Connect requires an ISP and colocation to establish a dedicated network connection.",
  },
  {
    question:
      "A company wants its Amazon EC2 instances to operate in a highly available environment, even if there is a natural disaster in a particular geographic area. Which solution achieves this goal?",
    answers: [
      { text: "Use EC2 instances in multiple AWS Regions", correct: true },
      { text: "Use EC2 instances in multiple edge locations", correct: false },
      {
        text: "Use EC2 instances in the same Availability Zone but in different AWS Regions",
        correct: false,
      },
      {
        text: "Use Amazon CloudFront with the EC2 instances configured as the source",
        correct: false,
      },
    ],
    explanation:
      "Using EC2 instances in multiple AWS Regions ensures high availability in case of a disaster.",
  },
  {
    question:
      "Which AWS service allows for file sharing between multiple Amazon EC2 instances?",
    answers: [
      { text: "AWS Direct Connect", correct: false },
      { text: "AWS Snowball Edge", correct: false },
      { text: "AWS Backup", correct: false },
      { text: "Amazon Elastic File System (Amazon EFS)", correct: true },
    ],
    explanation: "Amazon EFS enables file sharing between EC2 instances.",
  },
  {
    question:
      "A company needs to manage multiple logins across AWS accounts within the same organization in AWS Organizations. Which AWS service should the company use to meet this requirement?",
    answers: [
      { text: "Amazon VPC", correct: false },
      { text: "Amazon GuardDuty", correct: false },
      { text: "Amazon Cognito", correct: false },
      { text: "AWS IAM Identity Center", correct: true },
    ],
    explanation:
      "AWS IAM Identity Center helps manage user access across multiple AWS accounts.",
  },
  {
    question:
      "A company uses Amazon WorkSpaces. Which task is the responsibility of AWS, according to the AWS shared responsibility model?",
    answers: [
      {
        text: "Set up multi-factor authentication (MFA) for each WorkSpaces user account",
        correct: false,
      },
      {
        text: "Ensure the environmental safety and security of the AWS infrastructure that hosts WorkSpaces",
        correct: true,
      },
      {
        text: "Provide security for WorkSpaces user accounts through AWS Identity and Access Management (IAM).",
        correct: false,
      },
      {
        text: "Configure AWS CloudTrail to log API calls and user activity",
        correct: false,
      },
    ],
    explanation:
      "AWS is responsible for the security of the infrastructure hosting Amazon WorkSpaces.",
  },
  {
    question:
      "A company is migrating its public website to AWS. The company wants to host the domain name for the website on AWS. Which AWS service should the company use to meet this requirement?",
    answers: [
      { text: "AWS Lambda", correct: false },
      { text: "Amazon Route 53", correct: true },
      { text: "Amazon CloudFront", correct: false },
      { text: "AWS Direct Connect", correct: false },
    ],
    explanation:
      "Amazon Route 53 is the service for managing domain names and DNS routing.",
  },
  {
    question:
      "A company uses a third-party identity provider (IdP). The company wants to provide its employees with access to AWS accounts and services without requiring another set of login credentials. Which AWS service will meet this requirement?",
    answers: [
      { text: "AWS Directory Service", correct: false },
      { text: "Amazon Cognito", correct: false },
      { text: "AWS IAM Identity Center", correct: true },
      { text: "AWS Resource Access Manager (AWS RAM)", correct: false },
    ],
    explanation:
      "AWS IAM Identity Center allows integration with third-party identity providers for seamless access.",
  },
  {
    question:
      "Which combination of AWS services can be used to move a commercial relational database to an Amazon-managed open-source database? (Choose two.)",
    answers: [
      { text: "AWS Database Migration Service (AWS DMS)", correct: true },
      { text: "AWS software development kits (SDKs)", correct: false },
      { text: "AWS Schema Conversion Tool", correct: true },
      { text: "AWS Systems Manager", correct: false },
    ],
    explanation:
      "AWS DMS and the AWS Schema Conversion Tool are essential for migrating databases.",
  },
  {
    question:
      "Which AWS service gives users on-demand, self-service access to AWS compliance control reports?",
    answers: [
      { text: "AWS Config", correct: false },
      { text: "Amazon GuardDuty", correct: false },
      { text: "AWS Trusted Advisor", correct: false },
      { text: "AWS Artifact", correct: true },
    ],
    explanation:
      "AWS Artifact provides access to compliance reports and audit documentation.",
  },
  {
    question:
      "A company runs a legacy workload in an on-premises data center. The company wants to migrate the workload to AWS. The company does not want to make any changes to the workload. Which migration strategy should the company use?",
    answers: [
      { text: "Repurchase", correct: false },
      { text: "Replatform", correct: false },
      { text: "Rehost", correct: true },
      { text: "Refactor", correct: false },
    ],
    explanation:
      "Rehosting, often referred to as 'lift and shift,' allows migration without changes.",
  },
  {
    question:
      "A company is planning to migrate applications to the AWS Cloud. During a system audit, the company finds that its content management system (CMS) application is incompatible with cloud environments. Which migration strategies will help the company to migrate the CMS application with the LEAST effort? (Choose two.)",
    answers: [
      { text: "Retire", correct: false },
      { text: "Rehost", correct: false },
      { text: "Repurchase", correct: true },
      { text: "Replatform", correct: true },
    ],
    explanation:
      "Repurchasing or replatforming requires the least effort for incompatible applications.",
  },
  {
    question:
      "Which of the following are AWS best practice recommendations for the use of AWS Identity and Access Management (IAM)? (Choose two.)",
    answers: [
      {
        text: "Use the AWS account root user for daily access",
        correct: false,
      },
      {
        text: "Use access keys and secret access keys on Amazon EC2.",
        correct: false,
      },
      { text: "Rotate credentials on a regular basis.", correct: true },
      { text: "Configure multi-factor authentication (MFA).", correct: true },
    ],
    explanation:
      "Rotating credentials and configuring MFA are key best practices for IAM.",
  },
  {
    question:
      "Which option is AWS responsible for under the AWS shared responsibility model?",
    answers: [
      { text: "Network and firewall configuration", correct: false },
      { text: "Client-side data encryption", correct: false },
      { text: "Management of user permissions", correct: false },
      { text: "Hardware and infrastructure", correct: true },
    ],
    explanation:
      "AWS is responsible for the security of the underlying hardware and infrastructure.",
  },
  {
    question:
      "A company wants to run a graph query that provides credit card users’ names, addresses, and transactions. The company wants the graph to show if the names, addresses, and transactions indicate possible fraud. Which AWS database service will meet these requirements?",
    answers: [
      {
        text: "Amazon DocumentDB (with MongoDB compatibility)",
        correct: false,
      },
      { text: "Amazon Timestream", correct: false },
      { text: "Amazon DynamoDB", correct: false },
      { text: "Amazon Neptune", correct: true },
    ],
    explanation:
      "Amazon Neptune is designed for graph queries and can analyze complex relationships.",
  },
  {
    question:
      "Which AWS service provides machine learning capability to detect and analyze content in images and videos?",
    answers: [
      { text: "Amazon Connect", correct: false },
      { text: "Amazon Lightsail", correct: false },
      { text: "Amazon Personalize", correct: false },
      { text: "Amazon Rekognition", correct: true },
    ],
    explanation:
      "Amazon Rekognition provides capabilities for analyzing images and videos.",
  },
  {
    question:
      "A company wants its AWS usage to be more sustainable. The company wants to track, measure, review, and forecast polluting emissions that result from its AWS applications. Which AWS service or tool can the company use to meet these requirements?",
    answers: [
      { text: "AWS Health Dashboard", correct: false },
      { text: "AWS customer carbon footprint tool", correct: true },
      { text: "AWS Support Center", correct: false },
      { text: "Amazon QuickSight", correct: false },
    ],
    explanation:
      "The AWS customer carbon footprint tool helps track and measure carbon emissions.",
  },
  {
    question:
      "Which AWS service gives users the ability to deploy highly repeatable infrastructure configurations?",
    answers: [
      { text: "AWS CloudFormation", correct: true },
      { text: "AWS CodeDeploy", correct: false },
      { text: "AWS CodeBuild", correct: false },
      { text: "AWS Systems Manager", correct: false },
    ],
    explanation:
      "AWS CloudFormation allows for the deployment of infrastructure as code.",
  },
  {
    question:
      "A company needs to provide customer service by using voice calls and web chat features. Which AWS service should the company use to meet these requirements?",
    answers: [
      { text: "Amazon Aurora", correct: false },
      { text: "Amazon Connect", correct: true },
      { text: "Amazon WorkSpaces", correct: false },
      { text: "AWS Organizations", correct: false },
    ],
    explanation:
      "Amazon Connect provides a cloud-based contact center solution with voice and chat capabilities.",
  },
  {
    question:
      "Which AWS service is designed to help users handle large amounts of data in a data warehouse environment?",
    answers: [
      { text: "Amazon RDS", correct: false },
      { text: "Amazon DynamoDB", correct: false },
      { text: "Amazon Redshift", correct: true },
      { text: "Amazon Aurora", correct: false },
    ],
    explanation:
      "Amazon Redshift is specifically designed for data warehousing.",
  },
  {
    question:
      "A company is building a web application using AWS. Which AWS service will help prevent network layer DDoS attacks against the web application?",
    answers: [
      { text: "AWS WAF", correct: false },
      { text: "AWS Firewall Manager", correct: false },
      { text: "Amazon GuardDuty", correct: false },
      { text: "AWS Shield", correct: true },
    ],
    explanation:
      "AWS Shield provides DDoS protection for applications running on AWS.",
  },
  {
    question:
      "Which of the following are advantages of moving to the AWS Cloud? (Choose two.)",
    answers: [
      {
        text: "Users can implement all AWS services in seconds.",
        correct: false,
      },
      {
        text: "AWS assumes all responsibility for the security of infrastructure and applications",
        correct: false,
      },
      { text: "Users experience increased speed and agility.", correct: true },
      { text: "Users benefit from massive economies of scale", correct: true },
    ],
    explanation:
      "Increased speed and agility, along with economies of scale, are key benefits of AWS.",
  },
  {
    question:
      "Which AWS compute service gives users the ability to securely and reliably run containers at scale?",
    answers: [
      { text: "Amazon Elastic Container Service (Amazon ECS)", correct: true },
      { text: "Amazon Aurora", correct: false },
      { text: "Amazon Athena", correct: false },
      { text: "Amazon Polly", correct: false },
    ],
    explanation:
      "Amazon ECS is designed for running and managing containerized applications.",
  },
  {
    question:
      "Which AWS tool or feature acts as a VPC firewall at the subnet level?",
    answers: [
      { text: "Security group", correct: false },
      { text: "Network ACL", correct: true },
      { text: "Traffic Mirroring", correct: false },
      { text: "Internet gateway", correct: false },
    ],
    explanation:
      "Network ACLs provide a firewall at the subnet level within a VPC.",
  },
  {
    question:
      "A company runs an application on AWS that performs batch jobs. The application is fault-tolerant and can handle interruptions. The company wants to optimize the cost to run the application. Which AWS offering will meet these requirements?",
    answers: [
      { text: "Amazon Macie", correct: false },
      { text: "Amazon Neptune", correct: false },
      { text: "Amazon EC2 Spot Instances", correct: true },
      { text: "Amazon EC2 On-Demand Instances", correct: false },
    ],
    explanation:
      "Amazon EC2 Spot Instances are cost-effective for fault-tolerant and interruptible applications.",
  },
  {
    question:
      "Which AWS service can be used to send alerts when a specific Amazon CloudWatch alarm is invoked?",
    answers: [
      { text: "AWS CloudTrail", correct: false },
      {
        text: "Amazon Simple Notification Service (Amazon SNS)",
        correct: true,
      },
      { text: "Amazon Simple Queue Service (Amazon SQS)", correct: false },
      { text: "Amazon EventBridge", correct: false },
    ],
    explanation: "Amazon SNS can send alerts based on CloudWatch alarms.",
  },
  {
    question:
      "A cloud practitioner wants to use a highly available and scalable DNS service for its AWS workload. Which AWS service will meet this requirement?",
    answers: [
      { text: "Amazon Route 53", correct: true },
      { text: "Amazon Lightsail", correct: false },
      { text: "AWS Amplify Hosting", correct: false },
      { text: "Amazon S3", correct: false },
    ],
    explanation:
      "Amazon Route 53 provides scalable and highly available DNS services.",
  },
  {
    question:
      "According to the AWS shared responsibility model, which task is the customer's responsibility?",
    answers: [
      {
        text: "Maintaining the infrastructure needed to run AWS Lambda",
        correct: false,
      },
      {
        text: "Updating the operating system of Amazon DynamoDB instances",
        correct: false,
      },
      { text: "Maintaining Amazon S3 infrastructure", correct: false },
      {
        text: "Updating the guest operating system on Amazon EC2 instances",
        correct: true,
      },
    ],
    explanation:
      "Customers are responsible for managing the guest operating system on their EC2 instances.",
  },
  {
    question:
      "A company is learning about its responsibilities that are related to the management of Amazon EC2 instances. Which tasks for EC2 instances are the company’s responsibility, according to the AWS shared responsibility model? (Choose two.)",
    answers: [
      { text: "Install and patch the machine hypervisor", correct: false },
      { text: "Patch the guest operating system", correct: true },
      { text: "Encrypt data at rest on associated storage.", correct: true },
      { text: "Install the physical hardware and cabling", correct: false },
    ],
    explanation:
      "The company is responsible for patching the guest OS and encrypting data at rest.",
  },
  {
    question:
      "A company runs MySQL database workloads on self-managed servers in an on-premises data center. The company wants to migrate the database workloads to an AWS managed service. Which migration strategy should the company use?",
    answers: [
      { text: "Rehost", correct: false },
      { text: "Repurchase", correct: false },
      { text: "Refactor", correct: false },
      { text: "Replatform", correct: true },
    ],
    explanation:
      "Replatforming allows the company to migrate to a managed service with minimal changes.",
  },
  {
    question:
      "A company is planning to migrate a monolithic application to AWS. The company wants to modernize the application by splitting it into microservices. The company will deploy the microservices on AWS. Which migration strategy should the company use?",
    answers: [
      { text: "Rehost", correct: false },
      { text: "Repurchase", correct: false },
      { text: "Replatform", correct: false },
      { text: "Refactor", correct: true },
    ],
    explanation:
      "Refactoring is suitable for modernizing applications into microservices.",
  },
  {
    question:
      "A company wants to implement detailed tracking of its cloud costs by department and project. Which AWS feature or service should the company use?",
    answers: [
      { text: "Consolidated billing", correct: false },
      { text: "Cost allocation tags", correct: true },
      { text: "AWS Marketplace", correct: false },
      { text: "AWS Budgets", correct: false },
    ],
    explanation:
      "Cost allocation tags help track and categorize costs for different departments and projects.",
  },
  {
    question:
      "A user wants to invoke an AWS Lambda function when an Amazon EC2 instance enters the 'stopping' state. Which AWS service is appropriate for this use case?",
    answers: [
      { text: "Amazon EventBridge", correct: true },
      { text: "AWS Config", correct: false },
      {
        text: "Amazon Simple Notification Service (Amazon SNS)",
        correct: false,
      },
      { text: "AWS CloudFormation", correct: false },
    ],
    explanation:
      "Amazon EventBridge can be used to trigger events based on state changes in EC2 instances.",
  },
  {
    question:
      "A company has a MariaDB database on premises. The company wants to move the data to the AWS Cloud. Which AWS service will host this database with the LEAST amount of operational overhead?",
    answers: [
      { text: "Amazon RDS", correct: true },
      { text: "Amazon Neptune", correct: false },
      { text: "Amazon S3", correct: false },
      { text: "Amazon DynamoDB", correct: false },
    ],
    explanation:
      "Amazon RDS is a managed service that minimizes operational overhead for databases.",
  },
  {
    question:
      "Which AWS service or feature supports governance, compliance, and risk auditing of AWS accounts?",
    answers: [
      { text: "Multi-factor authentication (MFA)", correct: false },
      { text: "AWS Lambda", correct: false },
      {
        text: "Amazon Simple Notification Service (Amazon SNS)",
        correct: false,
      },
      { text: "AWS CloudTrail", correct: true },
    ],
    explanation:
      "AWS CloudTrail provides auditing capabilities for AWS account activity.",
  },
  {
    question:
      "Which AWS Cloud design principle is a company using when the company implements AWS CloudTrail?",
    answers: [
      { text: "Activate traceability", correct: true },
      { text: "Use serverless compute architectures", correct: false },
      { text: "Perform operations as code.", correct: false },
      { text: "Go global in minutes", correct: false },
    ],
    explanation:
      "Implementing AWS CloudTrail supports the principle of traceability in cloud operations.",
  },
  {
    question:
      "A company needs a threat detection service that will continuously monitor its AWS accounts, workloads, and Amazon S3 buckets for malicious activity and unauthorized behavior. Which AWS service meets these requirements?",
    answers: [
      { text: "AWS Shield", correct: false },
      { text: "AWS Firewall Manager", correct: false },
      { text: "Amazon GuardDuty", correct: true },
      { text: "Amazon Inspector", correct: false },
    ],
    explanation:
      "Amazon GuardDuty is designed for continuous threat detection across AWS environments.",
  },
  {
    question:
      "A company is planning to migrate to the AWS Cloud. The company is conducting organizational transformation and wants to become more responsive to customer inquiries and feedback. Which task should the company perform to meet these requirements, according to the AWS Cloud Adoption Framework (AWS CAF)?",
    answers: [
      {
        text: "Realign teams to focus on products and value streams",
        correct: true,
      },
      {
        text: "Create new value propositions with new products and services",
        correct: false,
      },
      {
        text: "Use a new data and analytics platform to create actionable insights",
        correct: false,
      },
      { text: "Migrate and modernize legacy infrastructure", correct: false },
    ],
    explanation:
      "Realigning teams to focus on products and value streams enhances responsiveness to customer needs.",
  },
  {
    question:
      "A company wants to rightsize its Amazon EC2 instances. Which configuration change will meet this requirement with the LEAST operational overhead?",
    answers: [
      {
        text: "Add EC2 instances in another Availability Zone",
        correct: false,
      },
      {
        text: "Change the size and type of the EC2 instances based on utilization",
        correct: true,
      },
      {
        text: "Convert the payment method from On-Demand to Savings Plans",
        correct: false,
      },
      {
        text: "Reprovision the EC2 instances with a larger instance type",
        correct: false,
      },
    ],
    explanation:
      "Changing the size and type of instances based on utilization minimizes operational overhead.",
  },
  {
    question:
      "Which AWS service supports user sign-up functionality and authentication to mobile and web applications?",
    answers: [
      { text: "Amazon Cognito", correct: true },
      { text: "AWS Config", correct: false },
      { text: "Amazon GuardDuty", correct: false },
      { text: "AWS Systems Manager", correct: false },
    ],
    explanation:
      "Amazon Cognito provides user sign-up, sign-in, and access control for web and mobile apps.",
  },
  {
    question:
      "Which benefit of the AWS Cloud helps companies achieve lower usage costs because of the aggregate usage of all AWS users?",
    answers: [
      { text: "No need to guess capacity", correct: false },
      { text: "Ability to go global in minutes", correct: false },
      { text: "Economies of scale", correct: true },
      { text: "Increased speed and agility", correct: false },
    ],
    explanation:
      "Economies of scale lower costs due to the collective usage of AWS services.",
  },
  {
    question:
      "A company's compliance officer wants to review the AWS Service Organization Control (SOC) reports. Which AWS service or feature should the compliance officer use to complete this task?",
    answers: [
      { text: "AWS Artifact", correct: true },
      { text: "AWS Concierge Support", correct: false },
      { text: "AWS Support", correct: false },
      { text: "AWS Trusted Advisor", correct: false },
    ],
    explanation:
      "AWS Artifact provides access to compliance reports, including SOC reports.",
  },
  {
    question:
      "A company has a compliance requirement to record and evaluate configuration changes, as well as perform remediation actions on AWS resources. Which AWS service should the company use?",
    answers: [
      { text: "AWS Config", correct: true },
      { text: "AWS Secrets Manager", correct: false },
      { text: "AWS CloudTrail", correct: false },
      { text: "AWS Trusted Advisor", correct: false },
    ],
    explanation:
      "AWS Config monitors configuration changes and compliance for AWS resources.",
  },
  {
    question:
      "A company plans to perform a one-time migration of a large dataset with millions of files from its on-premises data center to the AWS Cloud. Which AWS service should the company use for the migration?",
    answers: [
      { text: "AWS Database Migration Service (AWS DMS)", correct: false },
      { text: "AWS DataSync", correct: true },
      { text: "AWS Migration Hub", correct: false },
      { text: "AWS Application Migration Service", correct: false },
    ],
    explanation:
      "AWS DataSync simplifies and accelerates moving large datasets to AWS.",
  },
  {
    question:
      "Which AWS network services or features allow CIDR block notation when providing an IP address range? (Choose two.)",
    answers: [
      { text: "Security groups", correct: false },
      { text: "Amazon Machine Image", correct: false },
      { text: "Network access control list (network ACL)", correct: true },
      { text: "AWS Budgets", correct: false },
    ],
    explanation:
      "Network ACLs support CIDR notation for defining IP address ranges.",
  },
  {
    question:
      "A company wants to develop an accessibility application that will convert text into audible speech. Which AWS service will meet this requirement?",
    answers: [
      { text: "Amazon MQ", correct: false },
      { text: "Amazon Polly", correct: true },
      { text: "Amazon Neptune", correct: false },
      { text: "Amazon Timestream", correct: false },
    ],
    explanation: "Amazon Polly provides text-to-speech capabilities.",
  },
  {
    question:
      "A company needs to set up dedicated network connectivity between its on-premises data center and the AWS Cloud. The network cannot use the public internet. Which AWS service or feature will meet these requirements?",
    answers: [
      { text: "AWS Transit Gateway", correct: false },
      { text: "AWS VPN", correct: false },
      { text: "Amazon CloudFront", correct: false },
      { text: "AWS Direct Connect", correct: true },
    ],
    explanation:
      "AWS Direct Connect provides dedicated connectivity without using the public internet.",
  },
  {
    question:
      "A company needs to use dashboards and charts to analyze insights from business data. Which AWS service will provide the dashboards and charts for these insights?",
    answers: [
      { text: "Amazon Macie", correct: false },
      { text: "Amazon Aurora", correct: false },
      { text: "Amazon QuickSight", correct: true },
      { text: "AWS CloudTrail", correct: false },
    ],
    explanation:
      "Amazon QuickSight offers business intelligence capabilities for dashboards and visualizations.",
  },
  {
    question:
      "A company wants to migrate its on-premises infrastructure to the AWS Cloud. Which advantage of cloud computing will help the company reduce upfront costs?",
    answers: [
      { text: "Go global in minutes", correct: false },
      { text: "Increase speed and agility", correct: false },
      { text: "Benefit from massive economies of scale", correct: false },
      { text: "Trade fixed expense for variable expense", correct: true },
    ],
    explanation:
      "Cloud computing allows companies to shift from fixed to variable costs.",
  },
  {
    question:
      "A company is designing workloads in the AWS Cloud. The company wants the workloads to perform their intended function correctly and consistently throughout their lifecycle. Which pillar of the AWS Well-Architected Framework does this goal represent?",
    answers: [
      { text: "Operational excellence", correct: false },
      { text: "Security", correct: false },
      { text: "Reliability", correct: true },
      { text: "Performance efficiency", correct: false },
    ],
    explanation:
      "Reliability ensures workloads perform correctly and consistently.",
  },
  {
    question:
      "Which AWS service is used to temporarily provide federated security credentials to access AWS resources?",
    answers: [
      { text: "Amazon GuardDuty", correct: false },
      { text: "AWS Simple Token Service (AWS STS)", correct: true },
      { text: "AWS Secrets Manager", correct: false },
      { text: "AWS Certificate Manager", correct: false },
    ],
    explanation: "AWS STS is used for federated access to AWS resources.",
  },
  {
    question:
      "What is a benefit of using an Elastic Load Balancing (ELB) load balancer with applications running in the AWS Cloud?",
    answers: [
      {
        text: "An ELB will automatically scale resources to meet capacity needs",
        correct: false,
      },
      {
        text: "An ELB can balance traffic across multiple compute resources",
        correct: true,
      },
      { text: "An ELB can span multiple AWS Regions", correct: false },
      {
        text: "An ELB can balance traffic between multiple internet gateways",
        correct: false,
      },
    ],
    explanation:
      "ELBs distribute incoming application traffic across multiple targets.",
  },
  {
    question:
      "A company needs to convert video files and audio files to a format that will play on smartphones. Which AWS service will meet this requirement?",
    answers: [
      { text: "Amazon Comprehend", correct: false },
      { text: "Amazon Rekognition", correct: false },
      { text: "Amazon Elastic Transcoder", correct: true },
      { text: "Amazon Polly", correct: false },
    ],
    explanation: "Amazon Elastic Transcoder is designed for media transcoding.",
  },
  {
    question:
      "A company wants to securely store Amazon RDS database credentials and automatically rotate user passwords periodically. Which AWS service or capability will meet these requirements?",
    answers: [
      { text: "Amazon S3", correct: false },
      { text: "AWS Systems Manager Parameter Store", correct: false },
      { text: "AWS Secrets Manager", correct: true },
      { text: "AWS CloudTrail", correct: false },
    ],
    explanation:
      "AWS Secrets Manager securely stores and automatically rotates credentials.",
  },
  {
    question:
      "A company needs to have the ability to set up infrastructure for new applications in minutes. Which advantage of cloud computing will help the company meet this requirement?",
    answers: [
      { text: "Trade fixed expense for variable expense", correct: false },
      { text: "Go global in minutes", correct: false },
      { text: "Increase speed and agility", correct: true },
      { text: "Stop guessing capacity", correct: false },
    ],
    explanation:
      "The cloud enables rapid setup of infrastructure, enhancing speed and agility.",
  },
  {
    question:
      "A company needs a managed NFS file system that the company can use with its AWS compute resources. Which AWS service or feature will meet these requirements?",
    answers: [
      { text: "Amazon Elastic Block Store (Amazon EBS)", correct: false },
      { text: "AWS Storage Gateway Tape Gateway", correct: false },
      { text: "Amazon S3 Glacier Flexible Retrieval", correct: false },
      { text: "Amazon Elastic File System (Amazon EFS)", correct: true },
    ],
    explanation:
      "Amazon EFS is a managed NFS file system that can be used with AWS resources.",
  },
  {
    question:
      "A company plans to migrate to the AWS Cloud. The company wants to gather information about its on-premises data center. Which AWS service should the company use to meet these requirements?",
    answers: [
      { text: "AWS Application Discovery Service", correct: true },
      { text: "AWS DataSync", correct: false },
      { text: "AWS Storage Gateway", correct: false },
      { text: "AWS Database Migration Service (AWS DMS)", correct: false },
    ],
    explanation:
      "AWS Application Discovery Service helps gather information about on-premises environments.",
  },
  {
    question:
      "Which tasks are responsibilities of the customer, according to the AWS shared responsibility model? (Choose two.)",
    answers: [
      { text: "Secure the virtualization layer", correct: false },
      { text: "Encrypt data and maintain data integrity", correct: true },
      { text: "Patch the Amazon RDS operating system", correct: false },
      {
        text: "Maintain identity and access management controls",
        correct: true,
      },
    ],
    explanation:
      "Customers are responsible for data encryption and managing access controls in AWS.",
  },
  {
    question:
      "An online retail company wants to migrate its on-premises workload to AWS. The company needs to automatically handle a seasonal workload increase in a cost-effective manner. Which AWS Cloud features will help the company meet this requirement? (Choose two.)",
    answers: [
      { text: "Cross-Region workload deployment", correct: false },
      { text: "Pay-as-you-go pricing", correct: true },
      { text: "Built-in AWS CloudTrail audit capabilities", correct: false },
      { text: "Auto Scaling policies", correct: true },
    ],
    explanation:
      "Pay-as-you-go pricing and Auto Scaling help manage costs effectively during workload spikes.",
  },
  {
    question:
      "A developer needs to use a standardized template to create copies of a company's AWS architecture for development, test, and production environments. Which AWS service should the developer use to meet this requirement?",
    answers: [
      { text: "AWS Cloud Map", correct: false },
      { text: "AWS CloudFormation", correct: true },
      { text: "Amazon CloudFront", correct: false },
      { text: "AWS CloudTrail", correct: false },
    ],
    explanation:
      "AWS CloudFormation allows users to create and manage resources using standardized templates.",
  },
  {
    question:
      "Which AWS service can create a private network connection from on premises to the AWS Cloud?",
    answers: [
      { text: "AWS Config", correct: false },
      { text: "Virtual Private Cloud (Amazon VPC)", correct: false },
      { text: "AWS Direct Connect", correct: true },
      { text: "Amazon Route 53", correct: false },
    ],
    explanation:
      "AWS Direct Connect provides a dedicated network connection to AWS.",
  },
  {
    question:
      "Under the AWS shared responsibility model, which of the following is a responsibility of the customer?",
    answers: [
      {
        text: "Shred disk drives before they leave a data center",
        correct: false,
      },
      {
        text: "Prevent customers from gathering packets or collecting traffic at the hypervisor level",
        correct: false,
      },
      {
        text: "Patch the guest operating system with the latest security patches",
        correct: true,
      },
      {
        text: "Maintain security systems that provide physical monitoring of data centers",
        correct: false,
      },
    ],
    explanation:
      "Customers are responsible for patching their own operating systems.",
  },
  {
    question:
      "Which AWS service uses speech-to-text conversion to help users create meeting notes?",
    answers: [
      { text: "Amazon Polly", correct: false },
      { text: "Amazon Textract", correct: false },
      { text: "Amazon Rekognition", correct: false },
      { text: "Amazon Transcribe", correct: true },
    ],
    explanation:
      "Amazon Transcribe converts speech to text for applications like meeting notes.",
  },
  {
    question:
      "Which AWS service or tool provides users with a graphical interface that they can use to manage AWS services?",
    answers: [
      { text: "AWS Copilot", correct: false },
      { text: "AWS CLI", correct: false },
      { text: "AWS Management Console", correct: true },
      { text: "AWS software development kits (SDKs)", correct: false },
    ],
    explanation:
      "The AWS Management Console provides a graphical user interface for managing AWS services.",
  },
  {
    question:
      "A company has a workload that will run continuously for 1 year. The workload cannot tolerate service interruptions. Which Amazon EC2 purchasing option will be MOST cost-effective?",
    answers: [
      { text: "All Upfront Reserved Instances", correct: true },
      { text: "Partial Upfront Reserved Instances", correct: false },
      { text: "Dedicated Instances", correct: false },
      { text: "On-Demand Instances", correct: false },
    ],
    explanation:
      "All Upfront Reserved Instances provide the best cost savings for long-term workloads.",
  },
  {
    question:
      "A company migrated its systems to the AWS Cloud. The systems are rightsized, and a security review did not reveal any issues. The company must ensure that additional developments, integrations, changes, and system usage growth do not jeopardize this optimized AWS infrastructure. Which AWS service should the company use to report ongoing optimization and security?",
    answers: [
      { text: "AWS Trusted Advisor", correct: true },
      { text: "AWS Health Dashboard", correct: false },
      { text: "Amazon Connect", correct: false },
      { text: "AWS Systems Manager", correct: false },
    ],
    explanation:
      "AWS Trusted Advisor provides ongoing recommendations for optimization and security.",
  },
  {
    question:
      "Which AWS service integrates with other AWS services to provide the ability to encrypt data at rest?",
    answers: [
      { text: "AWS Key Management Service (AWS KMS)", correct: true },
      { text: "AWS Certificate Manager (ACM)", correct: false },
      { text: "AWS Identity and Access Management (IAM)", correct: false },
      { text: "AWS Security Hub", correct: false },
    ],
    explanation:
      "AWS KMS facilitates encryption of data at rest by integrating with other AWS services.",
  },
  {
    question:
      "A company wants to track the monthly cost and usage of all Amazon EC2 instances in a specific AWS environment. Which AWS service or tool will meet these requirements?",
    answers: [
      { text: "AWS Cost Anomaly Detection", correct: false },
      { text: "AWS Budgets", correct: true },
      { text: "AWS Compute Optimizer", correct: false },
      { text: "AWS Trusted Advisor", correct: false },
    ],
    explanation:
      "AWS Budgets allows tracking of costs and usage across AWS services.",
  },
  {
    question:
      "A company wants the ability to automatically acquire resources as needed and release the resources when they are no longer needed. Which cloud concept describes this functionality?",
    answers: [
      { text: "Availability", correct: false },
      { text: "Elasticity", correct: true },
      { text: "Durability", correct: false },
      { text: "Reliability", correct: false },
    ],
    explanation:
      "Elasticity refers to the ability to scale resources up or down as needed.",
  },
  {
    question:
      "A company wants a cost-effective option when running its applications in an Amazon EC2 instance for short time periods. The applications can be interrupted. Which EC2 instance type will meet these requirements?",
    answers: [
      { text: "Spot Instances", correct: true },
      { text: "On-Demand Instances", correct: false },
      { text: "Reserved Instances", correct: false },
      { text: "Dedicated Instances", correct: false },
    ],
    explanation:
      "Spot Instances offer significant cost savings for applications that can tolerate interruptions.",
  },
  {
    question:
      "A company has an AWS Business Support plan. The company needs to gain access to the AWS DDoS Response Team (DRT) to help mitigate DDoS events. Which AWS service or resource must the company use to meet these requirements?",
    answers: [
      { text: "AWS Shield Standard", correct: false },
      { text: "AWS Enterprise Support", correct: false },
      { text: "AWS WAF", correct: false },
      { text: "AWS Shield Advanced", correct: true },
    ],
    explanation:
      "AWS Shield Advanced provides access to the DDoS Response Team for incident response.",
  },
  {
    question:
      "Which AWS service or tool provides a visualization of historical AWS spending patterns and projections of future AWS costs?",
    answers: [
      { text: "AWS Cost and Usage Report", correct: false },
      { text: "AWS Budgets", correct: false },
      { text: "Cost Explorer", correct: true },
      { text: "Amazon CloudWatch", correct: false },
    ],
    explanation:
      "Cost Explorer visualizes historical spending and forecasts future costs.",
  },
  {
    question:
      "A company is migrating to the AWS Cloud instead of running its infrastructure on premises. Which of the following are advantages of this migration? (Choose two.)",
    answers: [
      {
        text: "Elimination of the need to perform security auditing",
        correct: false,
      },
      { text: "Increased global reach and agility", correct: true },
      { text: "Ability to deploy globally in minutes", correct: true },
      { text: "Elimination of the cost of IT staff members", correct: false },
    ],
    explanation:
      "Cloud migration provides greater global reach and the ability to deploy resources quickly.",
  },
  {
    question: "Which AWS service uses edge locations to cache content?",
    answers: [
      { text: "Amazon Kinesis", correct: false },
      { text: "Amazon Simple Queue Service (Amazon SQS)", correct: false },
      { text: "Amazon CloudFront", correct: true },
      { text: "Amazon Route 53", correct: false },
    ],
    explanation:
      "Amazon CloudFront uses edge locations to deliver content with low latency.",
  },
  {
    question:
      "A company wants to securely access an Amazon S3 bucket from an Amazon EC2 instance without accessing the internet. What should the company use to accomplish this goal?",
    answers: [
      { text: "VPN connection", correct: false },
      { text: "Internet gateway", correct: false },
      { text: "VPC endpoint", correct: true },
      { text: "NAT gateway", correct: false },
    ],
    explanation:
      "A VPC endpoint allows secure access to S3 from EC2 without using the internet.",
  },
  {
    question:
      "A company wants an AWS service that can automate software deployment in Amazon EC2 instances and on-premises instances. Which AWS service will meet this requirement?",
    answers: [
      { text: "AWS CodeCommit", correct: false },
      { text: "AWS CodeBuild", correct: false },
      { text: "AWS CodeDeploy", correct: true },
      { text: "AWS CodePipeline", correct: false },
    ],
    explanation:
      "AWS CodeDeploy automates software deployments across different environments.",
  },
  {
    question: "Which AWS services are serverless? (Choose two.)",
    answers: [
      { text: "AWS Fargate", correct: true },
      { text: "Amazon Managed Streaming for Apache Kafka", correct: false },
      { text: "Amazon EMR", correct: false },
      { text: "Amazon S3", correct: true },
    ],
    explanation:
      "AWS Fargate and Amazon S3 are examples of serverless services.",
  },
  {
    question:
      "A company wants to continuously improve processes and procedures to deliver business value. Which pillar of the AWS Well-Architected Framework does this goal represent?",
    answers: [
      { text: "Performance efficiency", correct: false },
      { text: "Operational excellence", correct: true },
      { text: "Reliability", correct: false },
      { text: "Sustainability", correct: false },
    ],
    explanation:
      "The Operational Excellence pillar focuses on continuous improvement and delivering business value.",
  },
  {
    question:
      "Which of the following is a customer responsibility according to the AWS shared responsibility model?",
    answers: [
      {
        text: "Apply security patches for Amazon S3 infrastructure devices",
        correct: false,
      },
      { text: "Provide physical security for AWS datacenters", correct: false },
      {
        text: "Install operating system updates on Lambda@Edge",
        correct: false,
      },
      {
        text: "Implement multi-factor authentication (MFA) for IAM user accounts",
        correct: true,
      },
    ],
    explanation:
      "Customers are responsible for implementing MFA for their IAM user accounts.",
  },
  {
    question:
      "Which AWS service should a company use to organize, characterize, and search large numbers of images?",
    answers: [
      { text: "Amazon Transcribe", correct: false },
      { text: "Amazon Rekognition", correct: true },
      { text: "Amazon Aurora", correct: false },
      { text: "Amazon QuickSight", correct: false },
    ],
    explanation:
      "Amazon Rekognition is designed for analyzing and searching images.",
  },
  {
    question: "Which AWS service is always available free of charge to users?",
    answers: [
      { text: "Amazon Athena", correct: false },
      { text: "AWS Identity and Access Management (IAM)", correct: true },
      { text: "AWS Secrets Manager", correct: false },
      { text: "Amazon ElastiCache", correct: false },
    ],
    explanation:
      "AWS IAM is a free service used to manage user access and permissions.",
  },
  {
    question:
      "A company needs to run some of its workloads on premises to comply with regulatory guidelines. The company wants to use the AWS Cloud to run workloads that are not required to be on premises. The company also wants to be able to use the same API calls for the on-premises workloads and the cloud workloads. Which AWS service or feature should the company use to meet these requirements?",
    answers: [
      { text: "Dedicated Hosts", correct: false },
      { text: "AWS Outposts", correct: true },
      { text: "Availability Zones", correct: false },
      { text: "AWS Wavelength", correct: false },
    ],
    explanation:
      "AWS Outposts allows consistent API calls and running workloads both on-premises and in the cloud.",
  },
  {
    question:
      "What is the recommended use case for Amazon EC2 On-Demand Instances?",
    answers: [
      {
        text: "A steady-state workload that requires a particular EC2 instance configuration for a long period of time",
        correct: false,
      },
      {
        text: "A workload that can be interrupted for a project that requires the lowest possible cost",
        correct: false,
      },
      {
        text: "An unpredictable workload that does not require a long-term commitment",
        correct: true,
      },
      {
        text: "A workload that is expected to run for longer than 1 year",
        correct: false,
      },
    ],
    explanation:
      "On-Demand Instances are best for unpredictable workloads without long-term commitments.",
  },
  {
    question:
      "A company wants to use an AWS networking solution that can act as a centralized gateway between multiple VPCs and on-premises networks. Which AWS service or feature will meet this requirement?",
    answers: [
      { text: "Gateway VPC endpoint", correct: false },
      { text: "AWS Direct Connect", correct: false },
      { text: "AWS Transit Gateway", correct: true },
      { text: "AWS PrivateLink", correct: false },
    ],
    explanation:
      "AWS Transit Gateway provides centralized connectivity between VPCs and on-premises networks.",
  },
  {
    question:
      "An administrator observed that multiple AWS resources were deleted yesterday. Which AWS service will help identify the cause and determine which user deleted the resources?",
    answers: [
      { text: "AWS CloudTrail", correct: true },
      { text: "Amazon Inspector", correct: false },
      { text: "Amazon GuardDuty", correct: false },
      { text: "AWS Trusted Advisor", correct: false },
    ],
    explanation:
      "AWS CloudTrail logs all API calls, helping track changes and deletions made by users.",
  },
  {
    question:
      "To assist companies with Payment Card Industry Data Security Standard (PCI DSS) compliance in the cloud, AWS provides:",
    answers: [
      {
        text: "physical Inspections of data centers by appointment.",
        correct: false,
      },
      {
        text: "required PCI compliance certifications for any application running on AWS",
        correct: false,
      },
      {
        text: "an AWS Attestation of Compliance (AOC) report for specific AWS services",
        correct: true,
      },
      { text: "professional PCI compliance services", correct: false },
    ],
    explanation:
      "AWS provides an AOC report to help customers with PCI DSS compliance.",
  },
  {
    question:
      "In which situations should a company create an IAM user instead of an IAM role?",
    answers: [
      {
        text: "When an application that runs on Amazon EC2 instances requires access to other AWS services",
        correct: false,
      },
      {
        text: "When the company creates AWS access credentials for individuals",
        correct: true,
      },
      {
        text: "When the company creates an application that runs on a mobile phone that makes requests to AWS",
        correct: false,
      },
      {
        text: "When the company needs to add users to IAM groups",
        correct: false,
      },
    ],
    explanation:
      "IAM users are created to provide access for individuals requiring AWS credentials.",
  },
  {
    question:
      "A company hosts a web application on AWS. The company has improved the availability of its application by provisioning multiple Amazon EC2 instances. The company wants to distribute its traffic across the EC2 instances while providing a single point of contact to the web clients. Which AWS service can distribute the traffic to multiple EC2 instances as targets?",
    answers: [
      { text: "VPC endpoints", correct: false },
      { text: "Application Load Balancer", correct: true },
      { text: "NAT gateway", correct: false },
      { text: "Internet gateway", correct: false },
    ],
    explanation:
      "Application Load Balancer distributes incoming application traffic across multiple EC2 instances.",
  },
  {
    question:
      "What is the total volume of data that can be stored in Amazon S3?",
    answers: [
      { text: "10 PB", correct: false },
      { text: "50 PB", correct: false },
      { text: "100 PB", correct: false },
      { text: "Virtually unlimited", correct: true },
    ],
    explanation: "Amazon S3 offers virtually unlimited storage capacity.",
  },
  {
    question:
      "Which design principle is related to the reliability pillar according to the AWS Well-Architected Framework?",
    answers: [
      { text: "Test recovery procedures", correct: true },
      { text: "Experiment more often", correct: false },
      { text: "Go global in minutes", correct: false },
      { text: "Analyze and attribute to expenditure", correct: false },
    ],
    explanation:
      "Testing recovery procedures is essential for ensuring reliability.",
  },
  {
    question:
      "A company stores data in an Amazon S3 bucket. Which task is the responsibility of AWS?",
    answers: [
      { text: "Configure an S3 Lifecycle policy", correct: false },
      { text: "Activate S3 Versioning", correct: false },
      { text: "Configure S3 bucket policies.", correct: false },
      {
        text: "Protect the infrastructure that supports S3 storage",
        correct: true,
      },
    ],
    explanation:
      "AWS is responsible for protecting the infrastructure underlying S3.",
  },
  {
    question:
      "A company wants to transfer a virtual Windows Server 2022 that is currently running in its own data center to AWS. The company wants to automatically convert the existing server to run directly on AWS infrastructure instead of visualized hardware. Which AWS service will meet these requirements?",
    answers: [
      { text: "AWS DataSync", correct: false },
      { text: "AWS Database Migration Service (AWS DMS)", correct: false },
      { text: "AWS Application Discovery Service", correct: false },
      { text: "AWS Application Migration Service", correct: true },
    ],
    explanation:
      "AWS Application Migration Service helps automate the migration of existing servers to AWS.",
  },
  {
    question: "Which AWS service is a fully managed NoSQL database service?",
    answers: [
      { text: "Amazon RDS", correct: false },
      { text: "Amazon Redshift", correct: false },
      { text: "Amazon DynamoDB", correct: true },
      { text: "Amazon Aurora", correct: false },
    ],
    explanation: "Amazon DynamoDB is a fully managed NoSQL database service.",
  },
  {
    question:
      "A company deployed an application in multiple AWS Regions around the world. The company wants to improve the application’s performance and availability. Which AWS service will meet these requirements?",
    answers: [
      { text: "AWS Global Accelerator", correct: true },
      { text: "Amazon DataZone", correct: false },
      { text: "AWS Cloud Map", correct: false },
      { text: "AWS Auto Scaling", correct: false },
    ],
    explanation:
      "AWS Global Accelerator improves performance and availability for applications across multiple regions.",
  },
  {
    question:
      "A company wants to migrate its on-premises SQL Server database to the AWS Cloud. The company wants AWS to handle the day-to-day administration of the database. Which AWS service will meet the company's requirements?",
    answers: [
      { text: "Amazon EC2 for Microsoft SQL Server", correct: false },
      { text: "Amazon DynamoDB", correct: false },
      { text: "Amazon RDS", correct: true },
      { text: "Amazon Aurora", correct: false },
    ],
    explanation:
      "Amazon RDS handles database administration tasks, allowing the company to focus on development.",
  },
  {
    question:
      "A company needs stateless network filtering for its VPC. Which AWS service, tool, or feature will meet this requirement?",
    answers: [
      { text: "AWS PrivateLink", correct: false },
      { text: "Security group", correct: false },
      { text: "Network access control list (ACL)", correct: true },
      { text: "AWS WAF", correct: false },
    ],
    explanation: "Network ACLs provide stateless filtering for VPC traffic.",
  },
  {
    question:
      "Which option is an advantage of AWS Cloud computing that minimizes variable costs?",
    answers: [
      { text: "High availability", correct: false },
      { text: "Economies of scale", correct: true },
      { text: "Global reach", correct: false },
      { text: "Agility", correct: false },
    ],
    explanation:
      "Economies of scale in AWS Cloud computing help minimize costs.",
  },
  {
    question:
      "A company wants to migrate its server-based applications to the AWS Cloud. The company wants to determine the total cost of ownership for its compute resources that will be hosted on the AWS Cloud. Which combination of AWS services or tools will meet these requirements? (Choose two.)",
    answers: [
      { text: "AWS Pricing Calculator", correct: true },
      { text: "Migration Evaluator", correct: true },
      { text: "AWS Support Center", correct: false },
      { text: "AWS Application Discovery Service", correct: false },
    ],
    explanation:
      "AWS Pricing Calculator helps estimate costs, while Migration Evaluator provides insights for cost analysis.",
  },
  {
    question:
      "A company has data lakes designed for high performance computing (HPC) workloads. Which Amazon EC2 instance type should the company use to meet these requirements?",
    answers: [
      { text: "General purpose instances", correct: false },
      { text: "Compute optimized instances", correct: true },
      { text: "Memory optimized instances", correct: false },
      { text: "Storage optimized instances", correct: false },
    ],
    explanation:
      "Compute optimized instances are designed for high-performance computing workloads.",
  },
  {
    question:
      "Which benefits does a company gain when the company moves from on-premises IT architecture to the AWS Cloud? (Choose two.)",
    answers: [
      {
        text: "Reduced or eliminated tasks for hardware troubleshooting, capacity planning, and procurement",
        correct: true,
      },
      { text: "Elimination of the need for trained IT staff", correct: false },
      {
        text: "Automatic security configuration of all applications that are migrated to the cloud",
        correct: false,
      },
      {
        text: "Faster deployment of new features and applications",
        correct: true,
      },
    ],
    explanation:
      "Cloud migration reduces operational tasks and speeds up feature deployment.",
  },
  {
    question:
      "A company is planning to migrate to the AWS Cloud. The company is conducting organizational transformation and wants to become more responsive to customer inquiries and feedback. Which task should the company perform to meet these requirements, according to the AWS Cloud Adoption Framework (AWS CAF)? (Choose two.)",
    answers: [
      {
        text: "Realign teams to focus on products and value streams",
        correct: true,
      },
      {
        text: "Create new value propositions with new products and services",
        correct: false,
      },
      {
        text: "Use agile methods to rapidly iterate and evolve",
        correct: true,
      },
      {
        text: "Use a new data and analytics platform to create actionable insights",
        correct: false,
      },
    ],
    explanation:
      "Realigning teams and adopting agile methods help enhance responsiveness.",
  },
  {
    question:
      "A company that is planning to migrate to the AWS Cloud is based in an isolated area that has limited internet connectivity. The company needs to perform local data processing on premises. The company needs a solution that can operate without a stable internet connection. Which AWS service will meet these requirements?",
    answers: [
      { text: "Amazon S3", correct: false },
      { text: "AWS Snowball Edge", correct: true },
      { text: "AWS Storage Gateway", correct: false },
      { text: "AWS Backup", correct: false },
    ],
    explanation:
      "AWS Snowball Edge enables local processing and storage even with limited connectivity.",
  },
  {
    question:
      "A company wants to build graph queries for real-time fraud pattern detection. Which AWS service will meet this requirement?",
    answers: [
      { text: "Amazon Neptune", correct: true },
      { text: "Amazon DynamoDB", correct: false },
      { text: "Amazon Timestream", correct: false },
      { text: "Amazon Forecast", correct: false },
    ],
    explanation:
      "Amazon Neptune is designed for graph databases and real-time querying.",
  },
  {
    question:
      "A company wants to migrate to the AWS Cloud. The company needs the ability to acquire resources when the resources are necessary. The company also needs the ability to release those resources when the resources are no longer necessary. Which architecture concept of the AWS Cloud meets these requirements?",
    answers: [
      { text: "Elasticity", correct: true },
      { text: "Availability", correct: false },
      { text: "Reliability", correct: false },
      { text: "Durability", correct: false },
    ],
    explanation:
      "Elasticity allows dynamic scaling of resources based on demand.",
  },
  {
    question:
      "A company wants to deploy a web application as a containerized application. The company wants to use a managed service that can automatically create container images from source code and deploy the containerized application. Which AWS service will meet these requirements?",
    answers: [
      { text: "AWS Elastic Beanstalk", correct: false },
      { text: "Amazon Elastic Container Service (Amazon ECS)", correct: false },
      { text: "AWS App Runner", correct: true },
      { text: "Amazon EC2", correct: false },
    ],
    explanation:
      "AWS App Runner simplifies container application deployment from source code.",
  },
  {
    question:
      "A company has moved all its infrastructure to the AWS Cloud. To plan ahead for each quarter, the finance team wants to track the cost and usage data of all resources from previous months. The finance team wants to automatically generate reports that contain the data. Which AWS service or feature should the finance team use to meet these requirements?",
    answers: [
      { text: "Amazon Detective", correct: false },
      { text: "AWS Pricing Calculator", correct: false },
      { text: "AWS Budgets", correct: true },
      { text: "AWS Savings Plans", correct: false },
    ],
    explanation:
      "AWS Budgets helps track costs and generate reports on AWS usage.",
  },
  {
    question:
      "Which AWS Cloud Adoption Framework (AWS CAF) perspective focuses on real-time insights and answers questions about strategy?",
    answers: [
      { text: "Operations", correct: false },
      { text: "People", correct: false },
      { text: "Business", correct: true },
      { text: "Platform", correct: false },
    ],
    explanation:
      "The Business perspective addresses strategic questions and insights.",
  },
  {
    question:
      "A company wants to migrate critical on-premises production systems to Amazon EC2 instances. The production instances will be used for at least 3 years. The company wants a pricing option that will minimize cost. Which solution will meet these requirements?",
    answers: [
      { text: "On-Demand Instances", correct: false },
      { text: "Reserved Instances", correct: true },
      { text: "Spot Instances", correct: false },
      { text: "AWS Free Tier", correct: false },
    ],
    explanation: "Reserved Instances provide cost savings for long-term usage.",
  },
  {
    question:
      "Which AWS Well-Architected Framework concept represents a system's ability to remain functional when the system encounters operational problems?",
    answers: [
      { text: "Consistency", correct: false },
      { text: "Elasticity", correct: false },
      { text: "Durability", correct: true },
      { text: "Latency", correct: false },
    ],
    explanation: "Durability ensures functionality despite operational issues.",
  },
  {
    question:
      "Which pillar of the AWS Well-Architected Framework focuses on the ability to recover automatically from service interruptions?",
    answers: [
      { text: "Security", correct: false },
      { text: "Performance efficiency", correct: false },
      { text: "Operational excellence", correct: false },
      { text: "Reliability", correct: true },
    ],
    explanation:
      "The Reliability pillar emphasizes automatic recovery from disruptions.",
  },
  {
    question:
      "A company has multiple SQL-based databases located in a data center. The company needs to migrate all database servers to the AWS Cloud to reduce the cost of operating physical servers. Which AWS service or resource will meet these requirements with the LEAST operational overhead?",
    answers: [
      { text: "Amazon EC2 instances", correct: false },
      { text: "Amazon RDS", correct: true },
      { text: "Amazon DynamoDB", correct: false },
      { text: "OpenSearch", correct: false },
    ],
    explanation:
      "Amazon RDS simplifies database management with minimal operational overhead.",
  },
  {
    question:
      "A company wants to build, train, and deploy machine learning (ML) models. Which AWS service can the company use to meet this requirement?",
    answers: [
      { text: "Amazon Personalize", correct: false },
      { text: "Amazon Comprehend", correct: false },
      { text: "Amazon Forecast", correct: false },
      { text: "Amazon SageMaker", correct: true },
    ],
    explanation:
      "Amazon SageMaker is designed for building, training, and deploying ML models.",
  },
  {
    question:
      "Which AWS service or tool provides recommendations to help users get rightsized Amazon EC2 instances based on historical workload usage data?",
    answers: [
      { text: "AWS Pricing Calculator", correct: false },
      { text: "AWS Compute Optimizer", correct: true },
      { text: "AWS App Runner", correct: false },
      { text: "AWS Systems Manager", correct: false },
    ],
    explanation:
      "AWS Compute Optimizer offers rightsizing recommendations for EC2 instances.",
  },
  {
    question:
      "A company wants to explore and analyze data in Amazon S3 by using a programming language. Which AWS service will meet these requirements?",
    answers: [
      { text: "Amazon Kendra", correct: false },
      { text: "Amazon Athena", correct: true },
      { text: "Amazon Comprehend", correct: false },
      { text: "Amazon SageMaker", correct: false },
    ],
    explanation: "Amazon Athena allows querying data in S3 using SQL.",
  },
  {
    question:
      "A company needs to run an application on Amazon EC2 instances without interruption. Which EC2 instance purchasing option will meet this requirement MOST cost-effectively?",
    answers: [
      { text: "Standard Reserved Instances", correct: true },
      { text: "Convertible Reserved Instances", correct: false },
      { text: "On-Demand Instances", correct: false },
      { text: "Spot Instances", correct: false },
    ],
    explanation:
      "Standard Reserved Instances are cost-effective for long-running applications.",
  },
  {
    question:
      "A company wants a fully managed service that centralizes and automates data protection across AWS services and hybrid workloads. Which AWS service will meet these requirements?",
    answers: [
      { text: "AWS Artifact", correct: false },
      { text: "AWS Backup", correct: true },
      { text: "AWS Batch", correct: false },
      { text: "AWS Shield", correct: false },
    ],
    explanation: "AWS Backup automates data protection across services.",
  },
  {
    question:
      "A company plans to migrate its application from on premises to the AWS Cloud. The company needs to gather usage and configuration data for the application components. Which AWS service will meet these requirements?",
    answers: [
      { text: "AWS Database Migration Service (AWS DMS)", correct: false },
      { text: "AWS Transfer Family", correct: false },
      { text: "AWS Application Discovery Service", correct: true },
      { text: "AWS Global Accelerator", correct: false },
    ],
    explanation:
      "AWS Application Discovery Service collects data on existing applications.",
  },
  {
    question:
      "Which design principle aligns with performance efficiency pillar of the AWS Well-Architected Framework?",
    answers: [
      { text: "Using serverless architectures", correct: true },
      { text: "Scaling horizontally", correct: false },
      { text: "Measuring the cost of workloads", correct: false },
      { text: "Using managed services", correct: false },
    ],
    explanation:
      "Using serverless architectures optimizes performance and efficiency.",
  },
  {
    question:
      "A company wants to provide low latency to its users around the world. Which feature of the AWS Cloud meets this requirement?",
    answers: [
      { text: "Global infrastructure", correct: true },
      { text: "Pay as-you-go pricing", correct: false },
      { text: "Managed services", correct: false },
      { text: "Economy of scale", correct: false },
    ],
    explanation:
      "AWS's global infrastructure supports low latency access for users worldwide.",
  },
  {
    question:
      "Which type of workload should a company run on Amazon EC2 Spot Instances?",
    answers: [
      {
        text: "A steady-state workload that requires a particular EC2 instance configuration for a long period of time",
        correct: false,
      },
      {
        text: "A workload that can be interrupted and can control costs",
        correct: true,
      },
      {
        text: "A steady-state workload that does not require a long-term commitment",
        correct: false,
      },
      {
        text: "A workload that cannot be interrupted and can control costs",
        correct: false,
      },
    ],
    explanation:
      "Spot Instances are ideal for workloads that can tolerate interruptions.",
  },
  {
    question:
      "A company has multiple AWS accounts. The company needs to receive a consolidated bill from AWS and must centrally manage security and compliance. Which AWS service or feature should the company use to meet these requirements?",
    answers: [
      { text: "AWS Cost and Usage Report", correct: false },
      { text: "AWS Organizations", correct: true },
      { text: "AWS Config", correct: false },
      { text: "AWS Security Hub", correct: false },
    ],
    explanation:
      "AWS Organizations allows for consolidated billing and management across accounts.",
  },
  {
    question:
      "For which use case are Amazon EC2 On-Demand Instances MOST cost-effective?",
    answers: [
      {
        text: "Compute-intensive video transcoding that can be restarted if necessary",
        correct: false,
      },
      {
        text: "An instance in continual use for 1 month to conduct quality assurance tests",
        correct: true,
      },
      {
        text: "An instance that runs a web server that will run for 1 year",
        correct: false,
      },
      {
        text: "An instance that runs a database that will run for 3 years",
        correct: false,
      },
    ],
    explanation:
      "On-Demand Instances are cost-effective for short-term, consistent usage.",
  },
  {
    question:
      "A company has developed a new in-house application. The company does not have a way to determine or predict the usage demand that the application will create. Which AWS Cloud computing benefit is the company seeking?",
    answers: [
      { text: "Easy to use", correct: false },
      { text: "Cost-effective", correct: false },
      { text: "Secure", correct: false },
      { text: "Scalable and high performance", correct: true },
    ],
    explanation:
      "Scalability allows the company to adjust resources based on unpredictable demand.",
  },
  {
    question:
      "Which AWS offering can analyze a company’s AWS environment to discover security vulnerabilities on Amazon EC2 instances?",
    answers: [
      { text: "Amazon Inspector", correct: true },
      { text: "Amazon Macie", correct: false },
      { text: "AWS Shield Standard", correct: false },
      { text: "Security groups", correct: false },
    ],
    explanation:
      "Amazon Inspector identifies vulnerabilities in EC2 instances.",
  },
  {
    question:
      "A company plans to onboard new employees that will be working remotely. The company needs to set up Windows virtual desktops to create a working environment for the new employees. The employees must be able to access the working environment from anywhere and by using their computer or a web browser. Which AWS service or feature will meet these requirements?",
    answers: [
      { text: "Dedicated Hosts", correct: false },
      { text: "AWS Global Accelerator", correct: false },
      { text: "Amazon Workspaces", correct: true },
      { text: "Amazon CloudFront", correct: false },
    ],
    explanation:
      "Amazon Workspaces provides virtual desktops accessible from anywhere.",
  },
  {
    question:
      "A company wants to visualize and manage AWS Cloud costs and usage for a specific period of time. Which AWS service or feature will meet these requirements?",
    answers: [
      { text: "Cost Explorer", correct: true },
      { text: "Consolidated billing", correct: false },
      { text: "AWS Organizations", correct: false },
      { text: "AWS Budgets", correct: false },
    ],
    explanation:
      "Cost Explorer enables visualization and management of AWS costs and usage.",
  },
  {
    question: "Which AWS service supports MySQL database engines?",
    answers: [
      { text: "Amazon DynamoDB", correct: false },
      { text: "Amazon RDS", correct: true },
      {
        text: "Amazon DocumentDB (with MongoDB compatibility)",
        correct: false,
      },
      { text: "Amazon ElastiCache", correct: false },
    ],
    explanation:
      "Amazon RDS supports MySQL and various other relational database engines.",
  },
  {
    question:
      "A company purchased Amazon EC2 Standard Reserved Instances (RIs) for a workload in the AWS Cloud. The company needs to move part of the workload to an instance family that does not match the instance family of these Standard RIs. How can the company take advantage of the Standard RIs that it no longer needs?",
    answers: [
      {
        text: "Contact the AWS Support team, and ask the team to sell the Standard RIs",
        correct: false,
      },
      {
        text: "Sell the Standard RIs on the Amazon EC2 Reserved Instance Marketplace",
        correct: true,
      },
      {
        text: "Sell the Standard RIs as a third-party seller on the AWS Marketplace",
        correct: false,
      },
      { text: "Convert the Standard RIs to Savings Plans", correct: false },
    ],
    explanation:
      "Standard RIs can be sold on the Reserved Instance Marketplace if no longer needed.",
  },
  {
    question:
      "A company is releasing a business-critical application. Before the release, the company needs strategic planning assistance from AWS. During the release, the company needs AWS infrastructure event management and real-time support. What should the company do to meet these requirements?",
    answers: [
      { text: "Access AWS Trusted Advisor", correct: false },
      { text: "Contact the AWS Partner Network (APN)", correct: false },
      { text: "Sign up for AWS Enterprise Support", correct: true },
      { text: "Contact AWS Professional Services", correct: false },
    ],
    explanation:
      "AWS Enterprise Support provides the necessary assistance for critical applications.",
  },
  {
    question:
      "A company wants to improve employee productivity by providing a way for employees to search for questions and retrieve specific answers. The company wants to use a single intelligent search interface. Which AWS service will meet these requirements?",
    answers: [
      { text: "Amazon Connect", correct: false },
      { text: "Amazon Kendra", correct: true },
      { text: "Amazon Lex", correct: false },
      { text: "Amazon Comprehend", correct: false },
    ],
    explanation:
      "Amazon Kendra is designed for intelligent search and retrieval of information.",
  },
  {
    question:
      "A company wants an Amazon S3 solution that provides access to object storage within single-digit milliseconds. Which solution will meet these requirements?",
    answers: [
      { text: "S3 Express One Zone", correct: true },
      { text: "S3 Standard", correct: false },
      { text: "S3 Glacier Flexible Retrieval", correct: false },
      { text: "S3 Glacier Instant Retrieval", correct: false },
    ],
    explanation:
      "S3 Express One Zone offers low-latency access to S3 object storage.",
  },
  {
    question:
      "A cloud practitioner needs to obtain AWS compliance reports before migrating an environment to the AWS Cloud. How can these reports be generated?",
    answers: [
      { text: "Generate the reports with Amazon Macie", correct: false },
      { text: "Open a case with AWS Support", correct: false },
      { text: "Contact the AWS Compliance team.", correct: false },
      { text: "Download the reports from AWS Artifact", correct: true },
    ],
    explanation:
      "AWS Artifact is a portal that provides access to various compliance reports, including certifications and attestations.",
  },
  {
    question:
      "Which AWS services or tools can identify rightsizing opportunities for Amazon EC2 instances? (Choose two.)",
    answers: [
      { text: "Amazon SageMaker", correct: false },
      { text: "AWS Cost Explorer", correct: true },
      { text: "AWS Billing Conductor", correct: false },
      { text: "AWS Compute Optimizer", correct: true },
      { text: "Amazon CodeGuru", correct: false },
    ],
    explanation:
      "AWS Cost Explorer provides detailed spending views, while AWS Compute Optimizer gives tailored recommendations for rightsizing EC2 instances.",
  },
  {
    question:
      "What does the concept of agility mean in AWS Cloud computing? (Choose two.)",
    answers: [
      {
        text: "The speed at which AWS resources are implemented",
        correct: true,
      },
      { text: "The ability to experiment quickly", correct: true },
      { text: "The elimination of wasted capacity", correct: false },
    ],
    explanation:
      "Agility in AWS refers to the quick implementation of resources and the ability to experiment and iterate rapidly.",
  },
  {
    question:
      "A company is running and managing its own Docker environment on Amazon EC2 instances. The company wants an alternative to help manage cluster size, scheduling, and environment maintenance. Which AWS service meets these requirements?",
    answers: [
      { text: "AWS Lambda", correct: false },
      { text: "Amazon Athena", correct: false },
      { text: "AWS Fargate", correct: true },
      { text: "Amazon RDS", correct: false },
    ],
    explanation:
      "AWS Fargate automates cluster scaling and management, allowing teams to focus on their applications.",
  },
  {
    question:
      "A global company wants to migrate its third-party applications to the AWS Cloud. The company wants help from a global team of experts to complete the migration faster and more reliably in accordance with AWS internal best practices. Which AWS service or resource will meet these requirements?",
    answers: [
      { text: "AWS Managed Services", correct: false },
      { text: "AWS Support", correct: false },
      { text: "AWS Launch Wizard", correct: false },
      { text: "AWS Professional Services", correct: true },
    ],
    explanation:
      "AWS Professional Services provides expert guidance for migrations, following AWS best practices.",
  },
  {
    question:
      "A company wants to make an upfront commitment for continued use of its production Amazon EC2 instances in exchange for a reduced overall cost. Which pricing options meet these requirements with the LOWEST cost? (Choose two.)",
    answers: [
      { text: "Reserved Instances", correct: true },
      { text: "Spot Instances", correct: false },
      { text: "Savings Plans", correct: true },
      { text: "On-Demand Instances", correct: false },
    ],
    explanation:
      "Reserved Instances and Savings Plans allow for upfront commitments that reduce costs.",
  },
  {
    question:
      "Which of the following is a fully managed MySQL-compatible database?",
    answers: [
      { text: "Amazon DynamoDB", correct: false },
      { text: "Amazon S3", correct: false },
      { text: "Amazon Aurora", correct: true },
      { text: "Amazon Redshift", correct: false },
    ],
    explanation:
      "Amazon Aurora is a fully managed relational database engine compatible with MySQL.",
  },
  {
    question:
      "Which AWS service gives users the ability to discover and protect sensitive data that is stored in Amazon S3 buckets?",
    answers: [
      { text: "Amazon Detective", correct: false },
      { text: "AWS IAM Access Analyzer", correct: false },
      { text: "Amazon Macie", correct: true },
      { text: "Amazon GuardDuty", correct: false },
    ],
    explanation:
      "Amazon Macie uses machine learning to discover and protect sensitive data in S3.",
  },
  {
    question:
      "A developer wants to deploy an application quickly on AWS without manually creating the required resources. Which AWS service will meet these requirements?",
    answers: [
      { text: "Amazon EC2", correct: false },
      { text: "AWS Elastic Beanstalk", correct: true },
      { text: "Amazon Personalize", correct: false },
      { text: "AWS CodeBuild", correct: false },
    ],
    explanation:
      "AWS Elastic Beanstalk automates the deployment and management of applications.",
  },
  {
    question:
      "Which AWS service or feature identifies whether an Amazon S3 bucket or an IAM role has been shared with an external entity?",
    answers: [
      { text: "AWS IAM Access Analyzer", correct: true },
      { text: "AWS Organizations", correct: false },
      { text: "AWS Systems Manager", correct: false },
      { text: "AWS Service Catalog", correct: false },
    ],
    explanation:
      "AWS IAM Access Analyzer helps identify shared resources with external entities.",
  },
  {
    question:
      "A company wants to run a NoSQL database on Amazon EC2 instances. Which task is the responsibility of AWS in this scenario?",
    answers: [
      {
        text: "Patch the physical infrastructure that hosts the EC2 instances",
        correct: true,
      },
      {
        text: "Update the guest operating system of the EC2 instances",
        correct: false,
      },
      {
        text: "Maintain high availability at the database layer.",
        correct: false,
      },
      { text: "Configure the security group firewall", correct: false },
    ],
    explanation:
      "AWS manages the underlying physical infrastructure, including patching and maintenance.",
  },
  {
    question:
      "Which of the following is a software development framework that a company can use to define cloud resources as code and provision the resources through AWS CloudFormation?",
    answers: [
      { text: "AWS CLI", correct: false },
      { text: "AWS CodeStar", correct: false },
      { text: "AWS Developer Center", correct: false },
      { text: "AWS Cloud Development Kit (AWS CDK)", correct: true },
    ],
    explanation:
      "AWS CDK allows developers to define infrastructure as code using familiar programming languages.",
  },
  {
    question:
      "A company is developing an application that uses multiple AWS services. The application needs to use temporary, limited-privilege credentials for authentication with other AWS APIs. Which AWS service or feature should the company use to meet these authentication requirements?",
    answers: [
      { text: "IAM users", correct: false },
      { text: "Amazon API Gateway", correct: false },
      { text: "IAM instance profiles", correct: false },
      { text: "AWS Security Token Service (AWS STS)", correct: true },
    ],
    explanation:
      "AWS STS provides temporary, limited-privilege credentials for users.",
  },
  {
    question:
      "A company wants to provide managed Windows virtual desktops and applications to its remote employees over secure network connections. Which AWS services can the company use to meet these requirements? (Choose two.)",
    answers: [
      { text: "Amazon Connect", correct: false },
      { text: "Amazon WorkSpaces", correct: true },
      { text: "AWS Site-to-Site VPN", correct: false },
      { text: "Amazon AppStream 2.0", correct: true },
    ],
    explanation:
      "Amazon WorkSpaces provides virtual desktops, while AppStream 2.0 delivers applications.",
  },
  {
    question:
      "Which tasks are customer responsibilities, according to the AWS shared responsibility model? (Choose two.)",
    answers: [
      {
        text: "Configure the AWS provided security group firewall.",
        correct: true,
      },
      { text: "Patch or upgrade Amazon DynamoDB.", correct: false },
      { text: "Classify company assets in the AWS Cloud", correct: true },
      {
        text: "Determine which Availability Zones to use for Amazon S3 buckets",
        correct: false,
      },
    ],
    explanation:
      "Customers are responsible for configuring firewalls and classifying their assets.",
  },
  {
    question:
      "A company wants to receive a notification when a specific AWS cost threshold is reached. Which AWS services or tools can the company use to meet this requirement? (Choose two.)",
    answers: [
      { text: "Cost Explorer", correct: false },
      { text: "AWS Budgets", correct: true },
      { text: "Amazon Simple Queue Service", correct: false },
      { text: "Amazon CloudWatch", correct: true },
    ],
    explanation:
      "AWS Budgets allows setting custom budgets with alerts, while CloudWatch can create alarms for cost metrics.",
  },
  {
    question:
      "Which AWS service or feature allows a user to establish a dedicated network connection between a company’s on-premises data center and the AWS Cloud?",
    answers: [
      { text: "VPC peering", correct: false },
      { text: "AWS VPN", correct: false },
      { text: "AWS Direct Connect", correct: true },
      { text: "Amazon Route 53", correct: false },
    ],
    explanation:
      "AWS Direct Connect provides a dedicated network connection from on-premises to AWS.",
  },
  {
    question:
      "What is a customer responsibility when using AWS Lambda according to the AWS shared responsibility model?",
    answers: [
      { text: "Managing the code within the Lambda function", correct: true },
      { text: "Patching the operating system", correct: false },
      {
        text: "Shutting down Lambda functions when they are no longer in use",
        correct: false,
      },
      {
        text: "Confirming that the hardware is working in the data center",
        correct: false,
      },
    ],
    explanation:
      "Customers manage their Lambda function code; AWS handles the infrastructure.",
  },
  {
    question:
      "A company wants to migrate its on-premises relational databases to the AWS Cloud. The company wants to use infrastructure as close to its current geographical location as possible. Which AWS service or resource should the company use to select its Amazon RDS deployment area?",
    answers: [
      { text: "AWS Direct Connect", correct: false },
      { text: "AWS Regions", correct: true },
      { text: "Amazon Connect", correct: false },
      { text: "AWS Wavelength", correct: false },
    ],
    explanation:
      "AWS Regions are physical locations for deploying RDS instances close to the company’s location.",
  },
  {
    question:
      "Which option is a customer responsibility when using Amazon DynamoDB under the AWS Shared Responsibility Model?",
    answers: [
      { text: "Patching of DynamoDB", correct: false },
      { text: "Encryption of data at rest in DynamoDB", correct: false },
      { text: "Access to DynamoDB tables", correct: true },
      { text: "Physical security of DynamoDB", correct: false },
    ],
    explanation:
      "Customers are responsible for managing access to their DynamoDB tables.",
  },
  {
    question:
      "Which AWS service supports a hybrid architecture that gives users the ability to extend AWS infrastructure, AWS services, APIs, and tools to data centers, colocation environments, or on-premises facilities?",
    answers: [
      { text: "AWS Fargate", correct: false },
      { text: "AWS Local Zones", correct: false },
      { text: "AWS Outposts", correct: true },
      { text: "AWS Snowmobile", correct: false },
    ],
    explanation:
      "AWS Outposts enables running AWS infrastructure on-premises while connecting to the AWS cloud.",
  },
  {
    question:
      "Which of the following are benefits of using AWS Trusted Advisor? (Choose two.)",
    answers: [
      { text: "Creating and rotating encryption keys", correct: false },
      {
        text: "Implementing enforced tagging across AWS resources",
        correct: false,
      },
      {
        text: "Improving security by proactively monitoring the AWS environment",
        correct: true,
      },
      {
        text: "Detecting underutilized resources to save costs",
        correct: true,
      },
    ],
    explanation:
      "AWS Trusted Advisor helps optimize costs and enhance security by identifying underutilized resources.",
  },
  {
    question:
      "Which AWS service can run a managed PostgreSQL database that provides online transaction processing (OLTP)?",
    answers: [
      { text: "Amazon EMR", correct: false },
      { text: "Amazon Athena", correct: false },
      { text: "Amazon DynamoDB", correct: false },
      { text: "Amazon RDS", correct: true },
    ],
    explanation:
      "Amazon RDS supports PostgreSQL and provides a managed service suitable for OLTP workloads.",
  },
  {
    question:
      "A company is setting up AWS Identity and Access Management (IAM) on an AWS account. Which recommendation complies with IAM security best practices?",
    answers: [
      {
        text: "Use the account root user access keys for administrative tasks.",
        correct: false,
      },
      {
        text: "Avoid rotating credentials to prevent issues in production applications",
        correct: false,
      },
      {
        text: "Turn on multi-factor authentication (MFA) for added security during the login process",
        correct: true,
      },
      {
        text: "Grant broad permissions so that all company employees can access the resources they need.",
        correct: false,
      },
    ],
    explanation:
      "Enabling MFA adds a layer of security to the IAM login process, which is a best practice.",
  },
  {
    question:
      "A company runs thousands of simultaneous simulations using AWS Batch. Each simulation is stateless, is fault tolerant, and runs for up to 3 hours. Which pricing model enables the company to optimize costs and meet these requirements?",
    answers: [
      { text: "Dedicated Instances", correct: false },
      { text: "On-Demand Instances", correct: false },
      { text: "Reserved Instances", correct: false },
      { text: "Spot Instances", correct: true },
    ],
    explanation:
      "Spot Instances are cost-effective for stateless, fault-tolerant workloads that can handle interruptions, allowing bidding for unused EC2 capacity.",
  },
  {
    question:
      "A company is exploring the use of the AWS Cloud and needs to create a cost estimate for a project before the infrastructure is provisioned. Which AWS service or feature can be used to estimate costs before deployment?",
    answers: [
      { text: "AWS Billing and Cost Management", correct: false },
      { text: "AWS Pricing Calculator", correct: true },
      { text: "AWS Free Tier", correct: false },
      { text: "AWS Cost and Usage Report", correct: false },
    ],
    explanation:
      "AWS Pricing Calculator allows you to create estimates for AWS use cases, modeling solutions before deployment.",
  },
  {
    question:
      "A company has an AWS account. The company wants to audit its password and access key rotation details for compliance purposes. Which AWS service or tool will meet this requirement?",
    answers: [
      { text: "AWS Audit Manager", correct: false },
      { text: "AWS Artifact", correct: false },
      { text: "IAM Access Analyzer", correct: false },
      { text: "IAM credential report", correct: true },
    ],
    explanation:
      "The IAM credential report provides detailed information on password and access key rotation for compliance.",
  },
  {
    question:
      "Which AWS service is a cloud security posture management (CSPM) service that aggregates alerts from various AWS services and partner products in a standardized format?",
    answers: [
      { text: "Amazon GuardDuty", correct: false },
      { text: "AWS Trusted Advisor", correct: false },
      { text: "Amazon EventBridge", correct: false },
      { text: "AWS Security Hub", correct: true },
    ],
    explanation:
      "AWS Security Hub aggregates security alerts and performs automated checks against best practices.",
  },
  {
    question:
      "Which of the following services can be used to block network traffic to an instance? (Choose two.)",
    answers: [
      { text: "Security groups", correct: true },
      {
        text: "Amazon Virtual Private Cloud (Amazon VPC) flow logs",
        correct: false,
      },
      { text: "Network ACLs", correct: true },
      { text: "Amazon CloudWatch", correct: false },
    ],
    explanation:
      "Security groups and Network ACLs control inbound and outbound traffic, allowing you to block network traffic effectively.",
  },
  {
    question:
      "Which AWS service or tool helps users visualize, understand, and manage spending and usage over time?",
    answers: [
      { text: "AWS Organizations", correct: false },
      { text: "AWS Cost Explorer", correct: true },
      { text: "AWS Service Catalog", correct: false },
      { text: "AWS Pricing Calculator", correct: false },
    ],
    explanation:
      "AWS Cost Explorer allows for detailed visualization and analysis of AWS spending and usage.",
  },
  {
    question:
      "A user needs programmatic access to AWS resources through the AWS CLI or the AWS API. Which option will provide the user with the appropriate access?",
    answers: [
      { text: "AWS Key Management Service", correct: false },
      { text: "SSH public keys", correct: false },
      { text: "Access keys", correct: true },
      { text: "Amazon Inspector", correct: false },
    ],
    explanation:
      "Access keys are used to sign programmatic requests to the AWS CLI or API, providing necessary credentials.",
  },
  {
    question: "Which AWS service can be used at no additional cost?",
    answers: [
      { text: "AWS Organizations", correct: true },
      { text: "AWS Config", correct: false },
      { text: "Amazon CloudWatch", correct: false },
      { text: "Amazon SageMaker", correct: false },
    ],
    explanation:
      "AWS Organizations is provided at no additional cost, allowing management of multiple AWS accounts.",
  },
  {
    question:
      "An e-learning platform needs to run an application for 2 months each year. The application will be deployed on Amazon EC2 instances. Any application downtime during those 2 months must be avoided. Which EC2 purchasing option will meet these requirements MOST cost-effectively?",
    answers: [
      { text: "Reserved Instances", correct: false },
      { text: "Spot Instances", correct: false },
      { text: "Dedicated Hosts", correct: false },
      { text: "On-Demand Instances", correct: true },
    ],
    explanation:
      "On-Demand Instances allow for flexibility without upfront costs, suitable for applications with specific time constraints.",
  },
  {
    question:
      "A company is building an application that needs to deliver images and videos globally with minimal latency. Which approach can the company use to accomplish this in a cost-effective manner?",
    answers: [
      { text: "Deliver the content through Amazon CloudFront", correct: true },
      { text: "Implement a VPN across multiple AWS Regions", correct: false },
      { text: "Deliver the content through AWS PrivateLink.", correct: false },
      {
        text: "Store the content on Amazon S3 and enable S3 cross-region replication.",
        correct: false,
      },
    ],
    explanation:
      "Amazon CloudFront is a content delivery network that efficiently delivers content globally with low latency.",
  },
  {
    question: "Which AWS service is always provided at no charge?",
    answers: [
      { text: "AWS Identity and Access Management (IAM)", correct: true },
      { text: "Elastic Load Balancers", correct: false },
      { text: "AWS WAF", correct: false },
      { text: "Amazon S3", correct: false },
    ],
    explanation:
      "AWS IAM is a free service that allows you to manage access to AWS resources securely.",
  },
  {
    question:
      "Which option is a benefit of the economies of scale based on the advantages of cloud computing?",
    answers: [
      { text: "Lower variable costs over fixed costs", correct: true },
      { text: "Increased speed and agility", correct: false },
      {
        text: "The ability to trade variable expense for fixed expense",
        correct: false,
      },
      {
        text: "Increased operational costs across data centers",
        correct: false,
      },
    ],
    explanation:
      "Economies of scale in cloud computing lead to lower variable costs due to aggregated usage.",
  },
  {
    question:
      "Elasticity in the AWS Cloud refers to which of the following? (Choose two.)",
    answers: [
      {
        text: "The ability to rightsize resources as demand shifts",
        correct: true,
      },
      {
        text: "The maximum amount of RAM an Amazon EC2 instance can use",
        correct: false,
      },
      {
        text: "How quickly an Amazon EC2 instance can be restarted",
        correct: false,
      },
      {
        text: "How easily resources can be procured when they are needed",
        correct: true,
      },
    ],
    explanation:
      "Elasticity allows for adding or releasing resources in response to changing business needs.",
  },
  {
    question:
      "Which AWS service or resource provides answers to the most frequently asked security-related questions that AWS receives from its users?",
    answers: [
      { text: "AWS Knowledge Center", correct: true },
      { text: "Amazon Connect", correct: false },
      { text: "AWS Artifact", correct: false },
      { text: "AWS Chatbot", correct: false },
    ],
    explanation:
      "AWS Knowledge Center provides answers to frequently asked security questions by users.",
  },
  {
    question:
      "A company has 5 TB of data stored in Amazon S3. The company plans to occasionally run queries on the data for analysis. Which AWS service should the company use to run these queries in the MOST cost-effective manner?",
    answers: [
      { text: "Amazon Redshift", correct: false },
      { text: "Amazon Kinesis", correct: false },
      { text: "Amazon Athena", correct: true },
      { text: "Amazon RDS", correct: false },
    ],
    explanation:
      "Amazon Athena enables running SQL queries directly on data stored in S3 without the need for ETL.",
  },
  {
    question:
      "A company needs to assess application vulnerabilities and must identify infrastructure deployments that do not meet best practices. Which AWS service can the company use to meet these requirements?",
    answers: [
      { text: "Amazon GuardDuty", correct: false },
      { text: "Amazon Inspector", correct: true },
      { text: "AWS Config", correct: false },
      { text: "AWS Trusted Advisor", correct: false },
    ],
    explanation:
      "Amazon Inspector is designed for automated security assessments to identify vulnerabilities within AWS EC2 instances and verify application configurations against best practices.",
  },
  {
    question:
      "Which AWS service is a key-value database that provides sub-millisecond latency on a large scale?",
    answers: [
      { text: "Amazon Neptune", correct: false },
      { text: "Amazon DocumentDB", correct: false },
      { text: "Amazon DynamoDB", correct: true },
      { text: "Amazon Aurora", correct: false },
    ],
    explanation:
      "Amazon DynamoDB is a fully managed NoSQL database service that delivers fast and predictable performance with seamless scalability, capable of handling massive workloads.",
  },
  {
    question:
      "Which AWS service or feature is used to send both text and email messages from distributed applications?",
    answers: [
      {
        text: "Amazon Simple Notification Service (Amazon SNS)",
        correct: true,
      },
      { text: "Amazon CloudWatch alerts", correct: false },
      { text: "Amazon Simple Email Service", correct: false },
      { text: "Amazon Simple Queue Service", correct: false },
    ],
    explanation:
      "Amazon SNS enables high-throughput messaging and notifications, supporting both application-to-application and application-to-person communication.",
  },
  {
    question:
      "A company wants to manage deployed IT services and govern its infrastructure as code (IaC) templates. Which AWS service will meet this requirement?",
    answers: [
      { text: "AWS Organizations", correct: false },
      { text: "AWS Resource Explorer", correct: false },
      { text: "AWS Service Catalog", correct: true },
      { text: "AWS Systems Manager", correct: false },
    ],
    explanation:
      "AWS Service Catalog helps organizations manage and provision IT services based on predefined IaC templates, ensuring governance and compliance.",
  },
  {
    question:
      "A company is using a central data platform to manage multiple types of data for its customers. The company wants to use AWS services to discover, transform, and visualize the data. Which combination of AWS services should the company use to meet these requirements? (Choose two.)",
    answers: [
      { text: "Amazon QuickSight", correct: true },
      { text: "Amazon Elastic File System", correct: false },
      { text: "Amazon Redshift", correct: false },
      { text: "AWS Glue", correct: true },
    ],
    explanation:
      "AWS Glue provides ETL capabilities for data discovery and transformation, while Amazon QuickSight offers tools for visualizing and reporting data.",
  },
  {
    question:
      "Which AWS Cloud Adoption Framework (AWS CAF) capability belongs to the people perspective?",
    answers: [
      { text: "Event management", correct: false },
      { text: "Cloud fluency", correct: true },
      { text: "Data architecture", correct: false },
      { text: "Strategic partnership", correct: false },
    ],
    explanation:
      "Cloud fluency relates to the people perspective of the AWS CAF, focusing on understanding and effectively using cloud technologies.",
  },
  {
    question:
      "To reduce costs, a company is planning to migrate a NoSQL database to AWS. Which AWS service is fully managed and can automatically scale throughput capacity to meet database workload demands?",
    answers: [
      { text: "Amazon RDS", correct: false },
      { text: "Amazon Redshift", correct: false },
      { text: "Amazon DynamoDB", correct: true },
      { text: "Amazon Aurora", correct: false },
    ],
    explanation:
      "Amazon DynamoDB is a fully managed NoSQL database service that automatically scales throughput capacity to match workload demands.",
  },
  {
    question: "What is the purpose of having an internet gateway within a VPC?",
    answers: [
      {
        text: "To load balance traffic from the internet across Amazon EC2 instances",
        correct: false,
      },
      {
        text: "To impose bandwidth constraints on internet traffic",
        correct: false,
      },
      { text: "To create a VPN connection to the VPC", correct: false },
      {
        text: "To allow communication between the VPC and the internet",
        correct: true,
      },
    ],
    explanation:
      "An internet gateway is a horizontally scaled, redundant, and highly available VPC component that allows communication between your VPC and the internet.",
  },
  {
    question:
      "A company wants to monitor for misconfigured security groups that are allowing unrestricted access to specific ports. Which AWS service will meet this requirement?",
    answers: [
      { text: "Amazon CloudWatch", correct: false },
      { text: "AWS Health Dashboard", correct: false },
      { text: "Amazon GuardDuty", correct: false },
      { text: "AWS Trusted Advisor", correct: true },
    ],
    explanation:
      "AWS Trusted Advisor checks for security best practices, including misconfigured security groups that allow unrestricted access.",
  },
  {
    question:
      "Which AWS service can identify when an Amazon EC2 instance was terminated?",
    answers: [
      { text: "AWS Compute Optimizer", correct: false },
      { text: "Amazon EventBridge", correct: false },
      { text: "AWS CloudTrail", correct: true },
      { text: "AWS Identity and Access Management (IAM)", correct: false },
    ],
    explanation:
      "AWS CloudTrail records all API activity in your AWS account, including the termination of EC2 instances, providing an audit trail of actions.",
  },
  {
    question:
      "Which option is a perspective that includes foundational capabilities of the AWS Cloud Adoption Framework (AWS CAF)?",
    answers: [
      { text: "Reliability", correct: false },
      { text: "Governance", correct: true },
      { text: "Performance efficiency", correct: false },
      { text: "Sustainability", correct: false },
    ],
    explanation:
      "The 'Governance' perspective is a foundational component of the AWS Cloud Adoption Framework, focusing on strategy and investment priorities.",
  },
  {
    question:
      "An ecommerce company has migrated its IT infrastructure from an on-premises data center to the AWS Cloud. Which cost is the company’s direct responsibility?",
    answers: [
      { text: "Cost of power for the AWS servers", correct: false },
      { text: "Cost of application software licenses", correct: true },
      { text: "Cost of the hardware infrastructure on AWS", correct: false },
      {
        text: "Cost of physical security for the AWS data center",
        correct: false,
      },
    ],
    explanation:
      "In the AWS Cloud, customers are responsible for the cost of application software licenses required to run applications on AWS services.",
  },
  {
    question:
      "A company has a test AWS environment. A company is planning on testing an application within AWS. The application testing can be interrupted and does not need to run continuously. Which Amazon EC2 purchasing option will meet these requirements MOST cost-effectively?",
    answers: [
      { text: "Spot Instances", correct: true },
      { text: "Dedicated Instances", correct: false },
      { text: "Reserved Instances", correct: false },
      { text: "On-Demand Instances", correct: false },
    ],
    explanation:
      "Spot Instances are ideal for workloads that can be interrupted, making them a cost-effective option for testing applications.",
  },
  {
    question:
      "Which of the following is an advantage that users experience when they move on-premises workloads to the AWS Cloud?",
    answers: [
      {
        text: "Distribution of all operational controls to AWS",
        correct: false,
      },
      {
        text: "Price discounts that are identical to discounts from hardware providers",
        correct: false,
      },
      { text: "Elimination of operational expenses", correct: false },
      {
        text: "Elimination of expenses for running and maintaining data centers",
        correct: true,
      },
    ],
    explanation:
      "The main advantage of moving to the AWS Cloud is the elimination of expenses related to running and maintaining physical data centers.",
  },
  {
    question:
      "A company plans to use an Amazon Snowball Edge device to transfer files to the AWS Cloud. Which activities related to a Snowball Edge device are available to the company at no cost?",
    answers: [
      {
        text: "The transfer of data out of Amazon S3 and to the Snowball Edge appliance",
        correct: false,
      },
      {
        text: "Daily use of the Snowball Edge appliance after 10 days",
        correct: false,
      },
      {
        text: "The transfer of data from the Snowball Edge appliance into Amazon S3",
        correct: true,
      },
      {
        text: "The cost of shipping the Snowball Edge appliance",
        correct: false,
      },
    ],
    explanation:
      "The transfer of data from the Snowball Edge appliance into Amazon S3 is free of charge; costs apply for the shipping and other actions.",
  },
  {
    question:
      "According to security best practices, how should an Amazon EC2 instance be given access to an Amazon S3 bucket?",
    answers: [
      {
        text: "Have the EC2 instance assume a role to obtain the privileges to upload the file.",
        correct: true,
      },
      {
        text: "Modify the S3 bucket policy so that any service can upload to it at any time.",
        correct: false,
      },
      {
        text: "Hard code an IAM user’s secret key and access key directly in the application, and upload the file.",
        correct: false,
      },
      {
        text: "Store the IAM user’s secret key and access key in a text file on the EC2 instance, read the keys, then upload the file.",
        correct: false,
      },
    ],
    explanation:
      "Getting your EC2 instance to assume a role for accessing an S3 bucket leverages IAM roles, providing temporary permissions, which enhances security by avoiding fixed access keys and adhering to the principle of least privilege.",
  },
  {
    question:
      "Which option is a physical location of the AWS global infrastructure?",
    answers: [
      { text: "Amazon Connect", correct: false },
      { text: "AWS DataSync", correct: false },
      { text: "AWS Organizations", correct: false },
      { text: "AWS Region", correct: true },
    ],
    explanation:
      "AWS Regions are physical locations around the world where AWS clusters data centers, consisting of multiple isolated Availability Zones.",
  },
  {
    question:
      "Which service enables customers to audit API calls in their AWS accounts?",
    answers: [
      { text: "AWS Trusted Advisor", correct: false },
      { text: "AWS X-Ray", correct: false },
      { text: "AWS CloudTrail", correct: true },
      { text: "Amazon Inspector", correct: false },
    ],
    explanation:
      "AWS CloudTrail tracks API calls made by users within an account, providing a detailed audit log of activities.",
  },
  {
    question:
      "Which AWS service provides the ability to manage infrastructure as code?",
    answers: [
      { text: "AWS CodeDeploy", correct: false },
      { text: "AWS Direct Connect", correct: false },
      { text: "AWS CloudFormation", correct: true },
      { text: "AWS CodePipeline", correct: false },
    ],
    explanation:
      "AWS CloudFormation allows users to manage infrastructure as code, enabling the creation and management of resources using templates.",
  },
  {
    question:
      "An online gaming company needs to choose a purchasing option to run its Amazon EC2 instances for 1 year. The web traffic is consistent, and any increases in traffic are predictable. Which EC2 instance purchasing option will meet these requirements MOST cost-effectively?",
    answers: [
      { text: "Reserved Instances", correct: true },
      { text: "On-Demand Instances", correct: false },
      { text: "Spot Instances", correct: false },
      { text: "Spot Fleet", correct: false },
    ],
    explanation:
      "Reserved Instances provide a cost-effective option for running EC2 instances with predictable traffic over a longer term.",
  },
  {
    question:
      "A company is running a monolithic on-premises application that does not scale and is difficult to maintain. The company has a plan to migrate the application to AWS and divide the application into microservices. Which best practice of the AWS Well-Architected Framework is the company following with this plan?",
    answers: [
      {
        text: "Integrate functional testing as part of AWS deployment.",
        correct: false,
      },
      { text: "Implement loosely coupled dependencies", correct: true },
      { text: "Use automation to deploy changes", correct: false },
      { text: "Deploy the application to multiple locations", correct: false },
    ],
    explanation:
      "Implementing loosely coupled dependencies is a key advantage of transitioning from a monolithic architecture to microservices.",
  },
  {
    question:
      "A company has a centralized group of users with large file storage requirements that have exceeded the space available on premises. The company wants to extend its file storage capabilities for this group while retaining the performance benefit of sharing content locally. What is the MOST operationally efficient AWS solution for this scenario?",
    answers: [
      {
        text: "Create an Amazon S3 bucket for each user. Mount each bucket by using an S3 file system mounting utility.",
        correct: false,
      },
      {
        text: "Configure and deploy an AWS Storage Gateway file gateway. Connect each user’s workstation to the file gateway",
        correct: true,
      },
      {
        text: "Move each user’s working environment to Amazon WorkSpaces. Set up an Amazon WorkDocs account for each user.",
        correct: false,
      },
      {
        text: "Deploy an Amazon EC2 instance and attach an Amazon Elastic Block Store (Amazon EBS) Provisioned IOPS volume. Share the EBS volume directly with the users.",
        correct: false,
      },
    ],
    explanation:
      "AWS Storage Gateway configured as a file gateway provides a hybrid storage solution, allowing seamless integration between on-premises environments and AWS cloud storage.",
  },
  {
    question:
      "A company is using Amazon DynamoDB. Which task is the company’s responsibility, according to the AWS shared responsibility model?",
    answers: [
      { text: "Secure the operating system", correct: false },
      { text: "Provision hosts.", correct: false },
      { text: "Patch the operating system.", correct: false },
      { text: "Manage database access permissions", correct: true },
    ],
    explanation:
      "In the shared responsibility model, customers are responsible for managing database access permissions in DynamoDB, while AWS handles the underlying infrastructure.",
  },
  {
    question:
      "A company needs to block SQL injection attacks. Which AWS service or feature can meet this requirement?",
    answers: [
      { text: "AWS WAF", correct: true },
      { text: "Security groups", correct: false },
      { text: "AWS Shield", correct: false },
      { text: "Network ACLs", correct: false },
    ],
    explanation:
      "AWS WAF allows you to create custom rules to block SQL injection attempts, enhancing application security.",
  },
  {
    question:
      "A company is storing sensitive customer data in an Amazon S3 bucket. The company wants to protect the data from accidental deletion or overwriting. Which S3 feature should the company use to meet these requirements?",
    answers: [
      { text: "S3 bucket policies", correct: false },
      { text: "S3 server-side encryption", correct: false },
      { text: "S3 Versioning", correct: true },
      { text: "S3 Lifecycle rules", correct: false },
    ],
    explanation:
      "S3 Versioning allows you to preserve, retrieve, and restore every version of every object stored in the S3 bucket, providing protection against accidental deletion.",
  },
  {
    question:
      "A company wants to protect its AWS Cloud information, systems, and assets while performing risk assessment and mitigation tasks. Which pillar of the AWS Well-Architected Framework is supported by these goals?",
    answers: [
      { text: "Security", correct: true },
      { text: "Performance efficiency", correct: false },
      { text: "Reliability", correct: false },
      { text: "Operational excellence", correct: false },
    ],
    explanation:
      "The Security pillar of the AWS Well-Architected Framework focuses on protecting information and assets while assessing risks and implementing mitigation strategies.",
  },
  {
    question:
      "A company needs to plan, schedule, and run hundreds of thousands of computing jobs on AWS. Which AWS service can the company use to meet this requirement?",
    answers: [
      { text: "AWS Step Functions", correct: false },
      { text: "AWS Batch", correct: true },
      { text: "Amazon Simple Queue Service (Amazon SQS)", correct: false },
      { text: "AWS Service Catalog", correct: false },
    ],
    explanation:
      "AWS Batch is a fully managed service that efficiently runs hundreds of thousands of computing batch jobs on AWS, dynamically provisioning the right amount of compute and memory resources.",
  },
  {
    question:
      "A company needs to engage third-party consultants to help maintain and support its AWS environment and the company’s business needs. Which AWS service or resource will meet these requirements?",
    answers: [
      { text: "AWS Partner Network (APN)", correct: true },
      { text: "AWS Support", correct: false },
      { text: "AWS Service Catalog", correct: false },
      { text: "AWS Organizations", correct: false },
    ],
    explanation:
      "The AWS Partner Network (APN) helps companies find qualified third-party consultants and service providers specialized in AWS services.",
  },
  {
    question:
      "A customer runs an On-Demand Amazon Linux EC2 instance for 3 hours, 5 minutes, and 6 seconds. For how much time will the customer be billed?",
    answers: [
      { text: "4 hours", correct: false },
      { text: "3 hours, 5 minutes, and 6 seconds", correct: false },
      { text: "3 hours, 6 minutes", correct: true },
      { text: "3 hours, 5 minutes", correct: false },
    ],
    explanation:
      "AWS bills EC2 On-Demand Instances on a per-second basis, rounding up to the next full minute after the first 60 seconds. Therefore, the total billing time is 3 hours and 6 minutes.",
  },
  {
    question:
      "A company wants to migrate its PostgreSQL database to AWS. The company does not use the database frequently. Which AWS service or resource will meet these requirements with the LEAST management overhead?",
    answers: [
      { text: "Amazon Aurora PostgreSQL-Compatible Edition", correct: false },
      { text: "Amazon RDS for PostgreSQL", correct: false },
      { text: "Amazon Aurora Serverless", correct: true },
      { text: "PostgreSQL on Amazon EC2", correct: false },
    ],
    explanation:
      "Amazon Aurora Serverless provides the highest level of automation and scalability, allowing you to use a serverless database without managing instances or maintenance.",
  },
  {
    question:
      "Which AWS service allows users to model and provision AWS resources using common programming languages?",
    answers: [
      { text: "AWS CodePipeline", correct: false },
      { text: "AWS CloudFormation", correct: false },
      { text: "AWS Cloud Development Kit (AWS CDK)", correct: true },
      { text: "AWS Systems Manager", correct: false },
    ],
    explanation:
      "AWS CDK is an open-source framework that allows you to model cloud application resources using familiar programming languages, provisioning infrastructure through CloudFormation.",
  },
  {
    question:
      "At what support level do users receive access to a support concierge?",
    answers: [
      { text: "Business Support", correct: false },
      { text: "Developer Support", correct: false },
      { text: "Enterprise Support", correct: true },
      { text: "Basic Support", correct: false },
    ],
    explanation:
      "Enterprise Support provides users access to a support concierge, offering guidance and assistance with AWS-related inquiries and case management.",
  },
  {
    question:
      "A company needs to migrate a PostgreSQL database from on-premises to Amazon RDS. Which AWS service or tool should the company use to meet this requirement?",
    answers: [
      { text: "AWS Migration Hub", correct: false },
      { text: "AWS Database Migration Service (AWS DMS)", correct: true },
      { text: "AWS Application Migration Service", correct: false },
      { text: "Cloud Adoption Readiness Tool", correct: false },
    ],
    explanation:
      "AWS Database Migration Service (AWS DMS) simplifies the migration of databases to AWS, ensuring a secure and efficient transition.",
  },
  {
    question:
      "Which option is a shared control between AWS and the customer, according to the AWS shared responsibility model?",
    answers: [
      { text: "Physical and environmental controls", correct: false },
      { text: "Data integrity authentication", correct: false },
      { text: "Configuration management", correct: true },
      { text: "Identity and access management", correct: false },
    ],
    explanation:
      "Configuration management is a shared control where AWS manages infrastructure configurations, while customers manage their own application configurations.",
  },
  {
    question:
      "A company wants to integrate its online shopping website with social media login credentials. Which AWS service can the company use to make this integration?",
    answers: [
      { text: "AWS Identity and Access Management (IAM)", correct: false },
      { text: "AWS IAM Identity Center (AWS Single Sign-On)", correct: false },
      { text: "AWS Directory Service", correct: false },
      { text: "Amazon Cognito", correct: true },
    ],
    explanation:
      "Amazon Cognito allows customers to sign in using social or enterprise identity providers, enabling easy integration with social media login credentials.",
  },
  {
    question:
      "A company hosts a large amount of data in AWS. The company wants to identify if any of the data should be considered sensitive. Which AWS service will meet the requirement?",
    answers: [
      { text: "AWS Identity and Access Management (IAM)", correct: false },
      { text: "Amazon Macie", correct: true },
      { text: "Amazon CloudWatch", correct: false },
      { text: "Amazon Inspector", correct: false },
    ],
    explanation:
      "Amazon Macie uses machine learning to discover, classify, and protect sensitive data stored in AWS, helping companies enforce security policies.",
  },
  {
    question:
      "A company that has AWS Enterprise Support is launching a new version of a popular product in 2 months. The company expects a large increase in traffic to its website. The website is hosted on Amazon EC2 instances. Which action should the company take to assess its readiness to scale for this launch?",
    answers: [
      {
        text: "Use AWS Infrastructure Event Management (IEM) support",
        correct: true,
      },
      {
        text: "Submit a request on AWS Marketplace to monitor the event.",
        correct: false,
      },
      {
        text: "Replace the EC2 instances with AWS Lambda functions.",
        correct: false,
      },
      {
        text: "Review the coverage reports in the AWS Cost Management console",
        correct: false,
      },
    ],
    explanation:
      "AWS Infrastructure Event Management (IEM) offers guidance and operational support for scaling readiness during significant events.",
  },
  {
    question:
      "A company is storing data that will not be frequently accessed in the AWS Cloud. If the company needs to access the data, the data needs to be retrieved within 12 hours. The company wants a solution that is cost-effective for storage costs for each gigabyte. Which Amazon S3 storage class will meet these requirements?",
    answers: [
      {
        text: "S3 Standard-Infrequent Access (S3 Standard-IA)",
        correct: false,
      },
      {
        text: "S3 One Zone-Infrequent Access (S3 One Zone-IA)",
        correct: false,
      },
      { text: "S3 Standard", correct: false },
      { text: "S3 Glacier Flexible Retrieval", correct: true },
    ],
    explanation:
      "S3 Glacier Flexible Retrieval is cost-effective for infrequently accessed data and supports retrieval within a 12-hour timeframe.",
  },
  {
    question:
      "Which AWS service is used to track, record, and audit configuration changes made to AWS resources?",
    answers: [
      { text: "AWS Config", correct: true },
      { text: "AWS Shield", correct: false },
      { text: "Amazon Inspector", correct: false },
      { text: "AWS IAM", correct: false },
    ],
    explanation:
      "AWS Config provides a comprehensive view of AWS resources, tracking configuration changes and their relationships over time.",
  },
  {
    question:
      "A company is migrating to the AWS Cloud and plans to run experimental workloads for 3 to 6 months on AWS. Which pricing model will meet these requirements?",
    answers: [
      { text: "Use Savings Plans for a 3-year term.", correct: false },
      { text: "Use On-Demand Instances", correct: true },
      { text: "Buy Reserved Instances", correct: false },
      { text: "Use Dedicated Hosts", correct: false },
    ],
    explanation:
      "On-Demand Instances provide flexibility for short-term workloads without long-term commitments.",
  },
  {
    question:
      "Who enables encryption of data at rest for Amazon Elastic Block Store (Amazon EBS)?",
    answers: [
      { text: "AWS customers", correct: true },
      { text: "AWS Support", correct: false },
      { text: "AWS Key Management Service (AWS KMS)", correct: false },
      { text: "AWS Trusted Advisor", correct: false },
    ],
    explanation:
      "Customers enable encryption for EBS by selecting AWS KMS; without explicit selection, data will not be encrypted.",
  },
  {
    question:
      "A company that has multiple business units wants to centrally manage and govern its AWS Cloud environments. The company wants to automate the creation of AWS accounts, apply service control policies (SCPs), and simplify billing processes. Which AWS service or tool should the company use to meet these requirements?",
    answers: [
      { text: "AWS Trusted Advisor", correct: false },
      { text: "Cost Explorer", correct: false },
      { text: "AWS Budgets", correct: false },
      { text: "AWS Organizations", correct: true },
    ],
    explanation:
      "AWS Organizations allows central management of multiple AWS accounts, automating account creation and applying service control policies.",
  },
  {
    question:
      "A company must be able to develop, test, and launch an application in the AWS Cloud quickly. Which advantage of cloud computing will meet these requirements?",
    answers: [
      { text: "Trade fixed expense for variable expense", correct: false },
      { text: "Stop guessing capacity", correct: false },
      { text: "Increase speed and agility", correct: true },
      { text: "Achieve economies of scale", correct: false },
    ],
    explanation:
      "Cloud computing enhances agility, allowing for rapid development, testing, and launching of applications.",
  },
  {
    question:
      "A company wants to launch multiple workloads on AWS. Each workload is related to a different business unit. The company wants to separate and track costs for each business unit. Which solution will meet these requirements with the LEAST operational overhead?",
    answers: [
      {
        text: "Use AWS Organizations and create one account for each business unit.",
        correct: true,
      },
      {
        text: "Use an Amazon DynamoDB table to record costs for each business unit",
        correct: false,
      },
      {
        text: "Use a spreadsheet to control the owners and cost of each resource",
        correct: false,
      },
      {
        text: "Use the AWS Billing console to assign owners to resources and track costs",
        correct: false,
      },
    ],
    explanation:
      "Creating separate accounts for each business unit using AWS Organizations allows for easy cost tracking and management with minimal operational overhead.",
  },
  {
    question:
      "A company has an Amazon EC2 instance in a private subnet. The company wants to initiate a connection to the internet to pull operating system updates while preventing traffic from the internet from accessing the EC2 instance. Which AWS managed service allows this?",
    answers: [
      { text: "Amazon PrivateLink", correct: false },
      { text: "VPC endpoint", correct: false },
      { text: "VPC peering", correct: false },
      { text: "NAT gateway", correct: true },
    ],
    explanation:
      "The NAT gateway allows instances in a private subnet to connect to the internet while blocking incoming traffic from the internet.",
  },
  {
    question:
      "Which cloud concept is demonstrated by using AWS Compute Optimizer?",
    answers: [
      { text: "Rightsizing", correct: true },
      { text: "Security validation", correct: false },
      { text: "Elasticity", correct: false },
      { text: "Global reach", correct: false },
    ],
    explanation:
      "AWS Compute Optimizer helps you identify optimal AWS resources for your workloads, demonstrating the concept of rightsizing.",
  },
  {
    question:
      "Which AWS service can a company use to securely store and encrypt passwords for a database?",
    answers: [
      { text: "Amazon Cognito", correct: false },
      { text: "AWS Identity and Access Management (IAM)", correct: false },
      { text: "AWS Secrets Manager", correct: true },
      { text: "AWS Shield", correct: false },
    ],
    explanation:
      "AWS Secrets Manager helps securely store and manage sensitive information, such as database credentials.",
  },
  {
    question:
      "A company wants a time-series database service that makes it easier to store and analyze trillions of events each day. Which AWS service will meet this requirement?",
    answers: [
      {
        text: "Amazon DocumentDB (with MongoDB compatibility)",
        correct: false,
      },
      { text: "Amazon Timestream", correct: true },
      { text: "Amazon Neptune", correct: false },
      { text: "Amazon Forecast", correct: false },
    ],
    explanation:
      "Amazon Timestream is designed for time-series data and can efficiently handle trillions of events per day.",
  },
  {
    question:
      "A company that has AWS Enterprise Support is launching a new version of a popular product in 2 months. The company expects a large increase in traffic to its website. The website is hosted on Amazon EC2 instances. Which action should the company take to assess its readiness to scale for this launch?",
    answers: [
      {
        text: "Review the coverage reports in the AWS Cost Management console",
        correct: false,
      },
      {
        text: "Use AWS Infrastructure Event Management (IEM) support",
        correct: true,
      },
      {
        text: "Submit a request on AWS Marketplace to monitor the event",
        correct: false,
      },
      {
        text: "Replace the EC2 instances with AWS Lambda functions",
        correct: false,
      },
    ],
    explanation:
      "AWS Infrastructure Event Management (IEM) provides operational support for scaling readiness during significant events.",
  },
  {
    question:
      "A company is hosting an application in the AWS Cloud. The company wants to verify that underlying AWS services and general AWS infrastructure are operating normally. Which combination of AWS services can the company use to gather the required information? (Choose two.)",
    answers: [
      { text: "AWS Service Health Dashboard", correct: true },
      { text: "AWS Systems Manager", correct: false },
      { text: "AWS Trusted Advisor", correct: false },
      { text: "AWS Personal Health Dashboard", correct: true },
    ],
    explanation:
      "AWS Personal Health Dashboard provides insights into service events impacting your account, while the Service Health Dashboard offers general service status.",
  },
  {
    question:
      "A company wants to monitor its workload performance. The company wants to ensure that the cloud services are delivered at a level that meets its business needs. Which AWS Cloud Adoption Framework (AWS CAF) perspective will meet these requirements?",
    answers: [
      { text: "Governance", correct: false },
      { text: "Operations", correct: false },
      { text: "Platform", correct: false },
      { text: "Business", correct: true },
    ],
    explanation:
      "The Business perspective of the AWS CAF focuses on ensuring that cloud services align with business needs and performance metrics.",
  },
  {
    question:
      "A company wants to create a globally accessible ecommerce platform for its customers. The company wants to use a highly available and scalable DNS web service to connect users to the platform. Which AWS service will meet these requirements?",
    answers: [
      { text: "Amazon VPC", correct: false },
      { text: "Amazon Route 53", correct: true },
      { text: "Amazon RDS", correct: false },
      { text: "Amazon EC2", correct: false },
    ],
    explanation:
      "Amazon Route 53 is a highly available and scalable Domain Name System (DNS) service that can manage traffic routing to your ecommerce platform.",
  },
  {
    question:
      "A company has teams that have different job roles and responsibilities. The company’s employees often change teams. The company needs to manage permissions for the employees so that the permissions are appropriate for the job responsibilities. Which IAM resource should the company use to meet this requirement with the LEAST operational overhead?",
    answers: [
      { text: "IAM instance profiles", correct: false },
      { text: "IAM policies for individual users", correct: false },
      { text: "IAM roles", correct: true },
      { text: "IAM user groups", correct: false },
    ],
    explanation:
      "IAM roles allow you to manage permissions based on job responsibilities with minimal operational overhead, especially in dynamic environments.",
  },
  {
    question:
      "Which task is a responsibility of AWS, according to the AWS shared responsibility model?",
    answers: [
      {
        text: "Configure security groups for Amazon EC2 instances",
        correct: false,
      },
      {
        text: "Maintain the physical hardware of the infrastructure",
        correct: true,
      },
      {
        text: "Manage encryption options for data that is stored on AWS",
        correct: false,
      },
      {
        text: "Configure identity and access management for applications",
        correct: false,
      },
    ],
    explanation:
      "AWS is responsible for the physical infrastructure and hardware that support the cloud environment, while customers manage security and access controls.",
  },
  {
    question: "Which abilities are benefits of the AWS Cloud? (Choose two.)",
    answers: [
      { text: "Plan capacity in advance of deployments", correct: false },
      { text: "Take advantage of economies of scale", correct: true },
      { text: "Deploy globally in minutes", correct: true },
      { text: "Trade variable expenses for capital expenses", correct: false },
    ],
    explanation:
      "AWS Cloud allows for rapid global deployment and leverages economies of scale, providing significant benefits over traditional on-premises infrastructure.",
  },
  {
    question:
      "Which AWS security service protects applications from distributed denial of service attacks with always-on detection and automatic inline mitigations?",
    answers: [
      { text: "AWS Web Application Firewall (AWS WAF)", correct: false },
      { text: "Amazon Inspector", correct: false },
      { text: "Elastic Load Balancing (ELB)", correct: false },
      { text: "AWS Shield", correct: true },
    ],
    explanation:
      "AWS Shield provides protection against DDoS attacks with continuous monitoring and automatic mitigation capabilities.",
  },
  {
    question:
      "Which AWS service or feature will search for and identify AWS resources that are shared externally?",
    answers: [
      { text: "AWS IAM Access Analyzer", correct: true },
      { text: "Amazon OpenSearch Service", correct: false },
      { text: "AWS Fargate", correct: false },
      { text: "AWS Control Tower", correct: false },
    ],
    explanation:
      "AWS IAM Access Analyzer identifies resources shared with external entities and helps manage permissions and security risks.",
  },
  {
    question:
      "Which AWS service can a company use to visually design and build serverless applications?",
    answers: [
      { text: "AWS Application Composer", correct: true },
      { text: "AWS Batch", correct: false },
      { text: "AWS Lambda", correct: false },
      { text: "AWS App Runner", correct: false },
    ],
    explanation:
      "AWS Application Composer simplifies the design and configuration of serverless applications, enabling quick development.",
  },
  {
    question:
      "Which of the following acts as an instance-level firewall to control inbound and outbound access?",
    answers: [
      { text: "Network access control list", correct: false },
      { text: "AWS Trusted Advisor", correct: false },
      { text: "Virtual private gateways", correct: false },
      { text: "Security groups", correct: true },
    ],
    explanation:
      "Security groups function as virtual firewalls that control traffic for EC2 instances, allowing for inbound and outbound rules.",
  },
  {
    question:
      "A company wants to store data in Amazon S3. The company rarely accesses the data, and the data can be regenerated if necessary. The company wants to store the data in the most cost-effective storage class. Which S3 storage class will meet this requirement?",
    answers: [
      {
        text: "S3 Standard-Infrequent Access (S3 Standard-IA)",
        correct: false,
      },
      { text: "S3 Intelligent-Tiering", correct: false },
      { text: "S3 Standard", correct: false },
      { text: "S3 One Zone-Infrequent Access (S3 One Zone-IA)", correct: true },
    ],
    explanation:
      "S3 One Zone-IA is ideal for infrequently accessed data that can be regenerated, offering a lower-cost option.",
  },
  {
    question:
      "A company wants to migrate to AWS and use the same security software it uses on premises. The security software vendor offers its security software as a service on AWS. Where can the company purchase the security solution?",
    answers: [
      { text: "AWS Support Center", correct: false },
      { text: "AWS Partner Solutions Finder", correct: false },
      { text: "AWS Marketplace", correct: true },
      { text: "AWS Management Console", correct: false },
    ],
    explanation:
      "AWS Marketplace is a digital catalog where you can find and purchase software solutions, including security applications available as a service.",
  },
  {
    question:
      "A user has a stateful workload that will run on Amazon EC2 for the next 3 years. What is the MOST cost-effective pricing model for this workload?",
    answers: [
      { text: "Spot Instances", correct: false },
      { text: "Reserved Instances", correct: true },
      { text: "Dedicated Instances", correct: false },
      { text: "On-Demand Instances", correct: false },
    ],
    explanation:
      "Reserved Instances provide significant savings for workloads that require long-term capacity commitments, such as a 3-year stateful workload.",
  },
  {
    question:
      "A company is planning to host its workloads on AWS. Which AWS service requires the company to update and patch the guest operating system?",
    answers: [
      { text: "Amazon DynamoDB", correct: false },
      { text: "Amazon S3", correct: false },
      { text: "Amazon EC2", correct: true },
      { text: "Amazon Aurora", correct: false },
    ],
    explanation:
      "With Amazon EC2, customers have control over the guest operating system and are responsible for managing updates and patches.",
  },
  {
    question:
      "Which AWS services or features provide high availability and low latency by enabling failover across different AWS Regions? (Choose two.)",
    answers: [
      { text: "AWS Global Accelerator", correct: true },
      { text: "Network Load Balancer", correct: false },
      { text: "Amazon S3 Transfer Acceleration", correct: false },
      { text: "Amazon Route 53", correct: true },
    ],
    explanation:
      "AWS Global Accelerator optimizes traffic routing, while Amazon Route 53 can route requests based on the lowest latency, enhancing availability and performance.",
  },
  {
    question:
      "A company wants to launch multiple workloads on AWS. Each workload is related to a different business unit. The company wants to separate and track costs for each business unit. Which solution will meet these requirements with the LEAST operational overhead?",
    answers: [
      {
        text: "Use the AWS Billing console to assign owners to resources and track costs",
        correct: false,
      },
      {
        text: "Use an Amazon DynamoDB table to record costs for each business unit",
        correct: false,
      },
      {
        text: "Use AWS Organizations and create one account for each business unit",
        correct: true,
      },
      {
        text: "Use a spreadsheet to control the owners and cost of each resource",
        correct: false,
      },
    ],
    explanation:
      "Creating separate accounts for each business unit through AWS Organizations simplifies cost tracking with minimal operational overhead.",
  },
  {
    question: "What can a user accomplish using AWS CloudTrail?",
    answers: [
      { text: "Record API calls made to AWS services", correct: true },
      {
        text: "Ensure that Amazon EC2 instances are patched with the latest security updates",
        correct: false,
      },
      {
        text: "Assess the compliance of AWS resource configurations with policies and guidelines",
        correct: false,
      },
      { text: "Generate an IAM user credentials report", correct: false },
    ],
    explanation:
      "AWS CloudTrail enables governance, compliance, operational auditing, and risk auditing by recording API calls made on your account, providing valuable insights for security analysis and troubleshooting.",
  },
  {
    question:
      "Which encryption types can be used to protect objects at rest in Amazon S3? (Choose two.)",
    answers: [
      { text: "SSL", correct: false },
      {
        text: "Server-side encryption with Amazon S3 managed encryption keys (SSE-S3)",
        correct: true,
      },
      { text: "TLS", correct: false },
      {
        text: "Server-side encryption with AWS KMS managed keys (SSE-KMS)",
        correct: true,
      },
    ],
    explanation:
      "Amazon S3 supports various encryption methods for protecting objects at rest, including SSE-S3 and SSE-KMS.",
  },
  {
    question:
      "A company has a physical tape library to store data backups. The tape library is running out of space. The company needs to extend the tape library's capacity to the AWS Cloud. Which AWS service should the company use to meet this requirement?",
    answers: [
      { text: "AWS Storage Gateway", correct: true },
      { text: "Amazon Elastic Block Store (Amazon EBS)", correct: false },
      { text: "Amazon S3", correct: false },
      { text: "Amazon Elastic File System (Amazon EFS)", correct: false },
    ],
    explanation:
      "AWS Storage Gateway connects on-premises environments to cloud storage, allowing for scalable and cost-effective storage solutions.",
  },
  {
    question:
      "Which Amazon EC2 instance pricing model can provide discounts of up to 90%?",
    answers: [
      { text: "Reserved Instances", correct: false },
      { text: "Dedicated Hosts", correct: false },
      { text: "On-Demand", correct: false },
      { text: "Spot Instances", correct: true },
    ],
    explanation:
      "Amazon EC2 Spot Instances utilize unused EC2 capacity, offering discounts of up to 90% compared to On-Demand prices.",
  },
  {
    question:
      "A company needs to organize its resources and track AWS costs on a detailed level. The company needs to categorize costs by business department, environment, and application. Which solution will meet these requirements?",
    answers: [
      {
        text: "Create Amazon CloudWatch dashboards to visually organize and track costs individually",
        correct: false,
      },
      {
        text: "Use tags to organize the resources. Activate cost allocation tags to track AWS costs on a detailed level",
        correct: true,
      },
      {
        text: "Access the AWS Cost Management console to organize resources, set an AWS budget, and receive notifications of unintentional usage.",
        correct: false,
      },
      {
        text: "Access the AWS Billing and Cost Management dashboard to organize and track resource consumption on a detailed level",
        correct: false,
      },
    ],
    explanation:
      "Using tags and activating cost allocation tags allows detailed tracking of AWS costs by various categories.",
  },
  {
    question:
      "A company wants to improve its security posture by reviewing user activity through API calls. Which AWS service will meet this requirement?",
    answers: [
      { text: "AWS CloudTrail", correct: true },
      { text: "Amazon Detective", correct: false },
      { text: "Amazon CloudWatch", correct: false },
      { text: "AWS WAF", correct: false },
    ],
    explanation:
      "AWS CloudTrail records API calls and provides a complete history of user activity, which is essential for security reviews.",
  },
  {
    question:
      "A company wants to create Amazon QuickSight dashboards every week by using its billing data. Which AWS feature or tool can the company use to meet these requirements?",
    answers: [
      { text: "AWS Cost Explorer", correct: false },
      { text: "AWS Cost and Usage Report", correct: true },
      { text: "AWS Cost Anomaly Detection", correct: false },
      { text: "AWS Budgets", correct: false },
    ],
    explanation:
      "The AWS Cost and Usage Report provides detailed billing data that can be utilized in Amazon QuickSight for dashboard creation.",
  },
  {
    question:
      "A company needs fully managed, highly reliable, and scalable file storage that is accessible over the Server Message Block (SMB) protocol. Which AWS service will meet these requirements?",
    answers: [
      { text: "Amazon Elastic Block Store (Amazon EBS)", correct: false },
      { text: "Amazon FSx for Windows File Server", correct: true },
      { text: "Amazon Elastic File System (Amazon EFS)", correct: false },
      { text: "Amazon S3", correct: false },
    ],
    explanation:
      "Amazon FSx for Windows File Server offers fully managed file storage with SMB protocol access, ideal for this requirement.",
  },
  {
    question:
      "A company is migrating its workloads to the AWS Cloud. The company must retain full control of patch management for the guest operating systems that host its applications. Which AWS service should the company use to meet these requirements?",
    answers: [
      { text: "Amazon RDS", correct: false },
      { text: "Amazon DynamoDB", correct: false },
      { text: "Amazon EC2", correct: true },
      { text: "AWS Lambda", correct: false },
    ],
    explanation:
      "With Amazon EC2, customers manage the guest operating system, including all updates and security patches.",
  },
  {
    question:
      "Which Amazon EC2 pricing model provides the MOST cost savings for an always-up, right-sized database server running for a project that will last 1 year?",
    answers: [
      { text: "Spot Instances", correct: false },
      { text: "Convertible Reserved Instances", correct: true },
      { text: "Standard Reserved Instances", correct: false },
      { text: "On-Demand Instances", correct: false },
    ],
    explanation:
      "Convertible Reserved Instances offer flexibility and significant cost savings for long-term projects like a year-long database server.",
  },
  {
    question:
      "A company wants a customized assessment of its current on-premises environment. The company wants to understand its projected running costs in the AWS Cloud. Which AWS service or tool will meet these requirements?",
    answers: [
      { text: "Amazon Inspector", correct: false },
      { text: "AWS Control Tower", correct: false },
      { text: "AWS Trusted Advisor", correct: false },
      { text: "Migration Evaluator", correct: true },
    ],
    explanation:
      "Migration Evaluator provides insights and assessments to help organizations plan their migration and projected costs on AWS.",
  },
  {
    question:
      "Which AWS service or resource can be used to identify services that have been used by a user within a specified date range?",
    answers: [
      {
        text: "AWS Identity and Access Management Access Analyzer",
        correct: true,
      },
      { text: "AWS Certificate Manager (ACM)", correct: false },
      { text: "Amazon S3 access control lists (ACLs)", correct: false },
      { text: "Network Access Analyzer", correct: false },
    ],
    explanation:
      "AWS IAM Access Analyzer integrates with AWS CloudTrail to track and identify user activity over a specified period.",
  },
  {
    question:
      "What can a cloud practitioner use to retrieve AWS security and compliance documents and submit them as evidence to an auditor or regulator?",
    answers: [
      { text: "Amazon Inspector", correct: false },
      { text: "AWS Systems Manager", correct: false },
      { text: "AWS Artifact", correct: true },
      { text: "AWS Certificate Manager", correct: false },
    ],
    explanation:
      "AWS Artifact provides access to AWS compliance documents and reports necessary for audits and regulatory purposes.",
  },
  {
    question:
      "A company is using the AWS Free Tier for several AWS services for an application. What will happen if the Free Tier usage period expires or if the application use exceeds the Free Tier usage limits?",
    answers: [
      {
        text: "The company will be charged the standard pay-as-you-go service rates for the usage that exceeds the Free Tier usage",
        correct: true,
      },
      {
        text: "The company's AWS account will be frozen and can be restarted after a payment plan is established.",
        correct: false,
      },
      {
        text: "The company will be charged for the services it consumed during the Free Tier period, plus additional charges for service consumption after the Free Tier period",
        correct: false,
      },
      {
        text: "AWS Support will contact the company to set up standard service charges",
        correct: false,
      },
    ],
    explanation:
      "Once the Free Tier period expires or limits are exceeded, standard pay-as-you-go rates apply for any additional usage.",
  },
  {
    question:
      "Which maintenance task is the customer’s responsibility, according to the AWS shared responsibility model?",
    answers: [
      { text: "Amazon EC2 updates and security patches", correct: true },
      { text: "Hardware updates and firmware patches", correct: false },
      { text: "Network switch maintenance", correct: false },
      {
        text: "Physical connectivity among Availability Zones",
        correct: false,
      },
    ],
    explanation:
      "Under the shared responsibility model, customers manage updates and security patches for their Amazon EC2 instances.",
  },
  {
    question:
      "A company often does not use all of its current Amazon EC2 capacity to run stateless workloads. The company wants to optimize its EC2 costs. Which EC2 instance type will meet these requirements?",
    answers: [
      { text: "Reserved Instances", correct: false },
      { text: "Dedicated Instances", correct: false },
      { text: "Spot Instances", correct: true },
      { text: "On-Demand Instances", correct: false },
    ],
    explanation:
      "Spot Instances are well-suited for cost optimization, especially for flexible, stateless workloads that can tolerate interruptions.",
  },
  {
    question:
      "A company wants to provision and manage its AWS infrastructure by using the common programming languages Typescript, Python, Java, and .NET. Which AWS service will meet this requirement?",
    answers: [
      { text: "AWS Cloud Development Kit (AWS CDK)", correct: true },
      { text: "AWS CloudFormation", correct: false },
      { text: "AWS CodeBuild", correct: false },
      { text: "AWS CLI", correct: false },
    ],
    explanation:
      "AWS Cloud Development Kit (AWS CDK) allows developers to use familiar programming languages to define and manage AWS infrastructure.",
  },
  {
    question:
      "A company website is experiencing DDoS attacks. Which AWS service can help protect the company website against these attacks?",
    answers: [
      { text: "Amazon GuardDuty", correct: false },
      { text: "AWS Shield", correct: true },
      { text: "AWS Amplify", correct: false },
      { text: "AWS Resource Access Manager", correct: false },
    ],
    explanation:
      "AWS Shield provides managed DDoS protection to help safeguard applications against attacks, enhancing availability and responsiveness.",
  },
  {
    question:
      "A company needs to centrally configure and manage Amazon VPC security groups across multiple AWS accounts within an organization in AWS Organizations. Which AWS service should the company use to meet these requirements?",
    answers: [
      { text: "AWS Firewall Manager", correct: true },
      { text: "Amazon Detective", correct: false },
      { text: "Amazon GuardDuty", correct: false },
      { text: "AWS WAF", correct: false },
    ],
    explanation:
      "AWS Firewall Manager enables centralized management of security policies and configurations, including VPC security groups, across AWS accounts.",
  },
  {
    question:
      "A company has migrated its workloads to AWS. The company wants to adopt AWS at scale and operate more efficiently and securely. Which AWS service or framework should the company use for operational support?",
    answers: [
      { text: "AWS Managed Services (AMS)", correct: false },
      { text: "AWS Well-Architected Framework", correct: true },
      { text: "AWS Cloud Adoption Framework (AWS CAF)", correct: false },
      { text: "AWS Support", correct: false },
    ],
    explanation:
      "The AWS Well-Architected Framework provides best practices and guidelines for building secure and efficient architectures at scale.",
  },
  {
    question:
      "Which of the following is a way to use Amazon EC2 Auto Scaling groups to scale capacity in the AWS Cloud?",
    answers: [
      {
        text: "Transfer unused CPU resources between EC2 instances",
        correct: false,
      },
      { text: "Use serverless EC2 instances", correct: false },
      {
        text: "Scale the size of EC2 instances up or down automatically, based on demand",
        correct: false,
      },
      {
        text: "Scale the number of EC2 instances in or out automatically, based on demand",
        correct: true,
      },
    ],
    explanation:
      "Amazon EC2 Auto Scaling groups adjust the number of running instances based on demand, ensuring optimal resource utilization.",
  },
  {
    question:
      "A company has deployed an Amazon EC2 instance. Which option is an AWS responsibility under the AWS shared responsibility model?",
    answers: [
      {
        text: "Installing updates and security patches of guest operating system",
        correct: false,
      },
      {
        text: "Configuration of security groups on each instance",
        correct: false,
      },
      { text: "Managing and encrypting application data", correct: false },
      { text: "Configuration of infrastructure devices", correct: true },
    ],
    explanation:
      "AWS is responsible for the security of the cloud infrastructure, including configuration of the underlying infrastructure devices.",
  },
  {
    question:
      "A company that has multiple business units wants to centrally manage and govern its AWS Cloud environments. The company wants to automate the creation of AWS accounts, apply service control policies (SCPs), and simplify billing processes. Which AWS service or tool should the company use to meet these requirements?",
    answers: [
      { text: "AWS Organizations", correct: true },
      { text: "Cost Explorer", correct: false },
      { text: "AWS Trusted Advisor", correct: false },
      { text: "AWS Budgets", correct: false },
    ],
    explanation:
      "AWS Organizations allows for centralized management of accounts, policies, and billing across multiple AWS accounts.",
  },
  {
    question:
      "A company is planning to move data backups to the AWS Cloud. The company needs to replace on-premises storage with storage that is cloud-based but locally cached. Which AWS service meets these requirements?",
    answers: [
      { text: "AWS Snowcone", correct: false },
      { text: "AWS Storage Gateway", correct: true },
      { text: "AWS Backup", correct: false },
      { text: "Amazon Elastic File System (Amazon EFS)", correct: false },
    ],
    explanation:
      "AWS Storage Gateway connects on-premises environments with cloud storage, offering locally cached options for seamless integration.",
  },
  {
    question:
      "A company is using Amazon DynamoDB for its application database. Which tasks are the responsibility of AWS, according to the AWS shared responsibility model? (Choose two.)",
    answers: [
      {
        text: "Manage the infrastructure layer and the operating system",
        correct: true,
      },
      { text: "Configure access permissions", correct: false },
      {
        text: "Provide public endpoints to store and retrieve data",
        correct: true,
      },
      { text: "Classify data", correct: false },
    ],
    explanation:
      "AWS is responsible for managing the infrastructure layer and providing endpoints for data storage and retrieval in DynamoDB.",
  },
  {
    question:
      "Which actions are the responsibility of AWS, according to the AWS shared responsibility model? (Choose two.)",
    answers: [
      { text: "Securing the virtualization layer", correct: true },
      {
        text: "Patching the operating system on Amazon RDS instances",
        correct: true,
      },
      {
        text: "Patching the operating system on Amazon EC2 instances",
        correct: false,
      },
      {
        text: "Enforcing a strict password policy for IAM users",
        correct: false,
      },
    ],
    explanation:
      "AWS is responsible for the security of the cloud, including the virtualization layer and managed services like Amazon RDS.",
  },
  {
    question:
      "A company wants to define a central data protection policy that works across AWS services for compute, storage, and database resources. Which AWS service will meet this requirement?",
    answers: [
      { text: "Amazon FSx", correct: false },
      { text: "AWS Elastic Disaster Recovery", correct: false },
      { text: "AWS Batch", correct: false },
      { text: "AWS Backup", correct: true },
    ],
    explanation:
      "AWS Backup provides a centralized way to automate and centrally manage backups across AWS services.",
  },
  {
    question:
      "Which AWS service can a company use to manage encryption keys in the cloud?",
    answers: [
      { text: "AWS CloudHSM", correct: true },
      { text: "AWS Directory Service", correct: false },
      { text: "AWS License Manager", correct: false },
      { text: "AWS Certificate Manager (ACM)", correct: false },
    ],
    explanation:
      "AWS CloudHSM allows users to manage encryption keys securely in the cloud.",
  },
  {
    question:
      "A company wants a report that lists the status of multi-factor authentication (MFA) devices that all users in the company's AWS account use. Which AWS feature or service will meet this requirement?",
    answers: [
      { text: "Detailed Billing Reports", correct: false },
      { text: "AWS Cost and Usage Reports", correct: false },
      { text: "AWS Cost Explorer reports", correct: false },
      { text: "IAM credential reports", correct: true },
    ],
    explanation:
      "IAM credential reports provide detailed information about IAM users and their credentials, including MFA status.",
  },
  {
    question:
      "Which of the following are ways to improve security on AWS? (Choose two.)",
    answers: [
      {
        text: "Enabling multi-factor authentication (MFA) with Amazon Cognito",
        correct: true,
      },
      { text: "Using AWS Artifact", correct: false },
      { text: "Using AWS Trusted Advisor security checks", correct: true },
      {
        text: "Granting the broadest permissions to all IAM roles",
        correct: false,
      },
    ],
    explanation:
      "Implementing MFA and utilizing AWS Trusted Advisor security checks enhance AWS security posture.",
  },
  {
    question:
      "Which AWS service or tool gives users the ability to connect with AWS and deploy resources programmatically?",
    answers: [
      { text: "Amazon QuickSight", correct: false },
      { text: "AWS Direct Connect", correct: false },
      { text: "AWS SDKs", correct: true },
      { text: "AWS PrivateLink", correct: false },
    ],
    explanation:
      "AWS SDKs enable developers to interact with AWS services programmatically.",
  },
  {
    question:
      "Which AWS Support plans provide access to an AWS technical account manager (TAM)? (Choose two.)",
    answers: [
      { text: "AWS Basic Support", correct: false },
      { text: "AWS Enterprise On-Ramp Support", correct: true },
      { text: "AWS Enterprise Support", correct: true },
      { text: "AWS Developer Support", correct: false },
    ],
    explanation:
      "AWS Enterprise and Enterprise On-Ramp Support plans include access to a Technical Account Manager.",
  },
  {
    question:
      "A company is launching a mobile app in the AWS Cloud. The company wants the app's users to sign in through social media identity providers (IdPs). Which AWS service will meet this requirement?",
    answers: [
      { text: "AWS Lambda", correct: false },
      { text: "Amazon CloudFront", correct: false },
      { text: "AWS Secrets Manager", correct: false },
      { text: "Amazon Cognito", correct: true },
    ],
    explanation:
      "Amazon Cognito provides authentication options, including social media sign-in capabilities.",
  },
  {
    question:
      "A company has an application that produces unstructured data continuously. The company needs to store the data so that the data is durable and easy to query. Which AWS service can the company use to meet these requirements?",
    answers: [
      { text: "Amazon Aurora", correct: false },
      { text: "Amazon QuickSight", correct: false },
      { text: "Amazon RDS", correct: false },
      { text: "Amazon DynamoDB", correct: true },
    ],
    explanation:
      "Amazon DynamoDB is a NoSQL database service designed to handle unstructured data with durability and querying capabilities.",
  },
  {
    question:
      "Which AWS Cloud Adoption Framework (AWS CAF) perspective focuses on managing identities and permissions at scale?",
    answers: [
      { text: "Governance", correct: false },
      { text: "Platform", correct: false },
      { text: "Operations", correct: false },
      { text: "Security", correct: true },
    ],
    explanation:
      "The Security perspective of the AWS CAF emphasizes identity and access management.",
  },
  {
    question:
      "How does the AWS Cloud help companies build agility into their processes and cloud infrastructure?",
    answers: [
      {
        text: "Companies can avoid provisioning too much capacity when they do not know how much capacity is required.",
        correct: false,
      },
      {
        text: "Companies can pay for IT resources only when they use the resources.",
        correct: false,
      },
      {
        text: "Companies can expand into new geographic regions.",
        correct: false,
      },
      {
        text: "Companies can access a range of technologies to experiment and innovate quickly.",
        correct: true,
      },
    ],
    explanation:
      "AWS provides a variety of tools and services that facilitate rapid experimentation and innovation.",
  },
  {
    question:
      "A company runs many Amazon EC2 instances in its VPC. The company wants to use a native AWS security resource to control network traffic between certain EC2 instances. Which AWS service or feature will meet this requirement?",
    answers: [
      { text: "AWS WAF", correct: false },
      { text: "Network ACLs", correct: false },
      { text: "Amazon GuardDuty", correct: false },
      { text: "Security groups", correct: true },
    ],
    explanation:
      "Security groups are used to control inbound and outbound traffic for Amazon EC2 instances.",
  },
  {
    question:
      "A company needs to consolidate the billing for multiple AWS accounts. The company needs to use one account to pay on behalf of all the other accounts. Which AWS service or tool should the company use to meet this requirement?",
    answers: [
      { text: "AWS Trusted Advisor", correct: false },
      { text: "AWS Budgets", correct: false },
      { text: "AWS Service Catalog", correct: false },
      { text: "AWS Organizations", correct: true },
    ],
    explanation:
      "AWS Organizations allows for consolidated billing across multiple AWS accounts.",
  },
  {
    question:
      "Which task is the responsibility of a company that is using Amazon RDS?",
    answers: [
      {
        text: "Install the cables to connect the hardware for compute and storage",
        correct: false,
      },
      {
        text: "Create IAM policies to control administrative access to the service",
        correct: true,
      },
      { text: "Install and patch the RDS operating system", correct: false },
      { text: "Provision the underlying infrastructure", correct: false },
    ],
    explanation:
      "Creating IAM policies is the responsibility of the user when using Amazon RDS, while AWS manages the infrastructure.",
  },
  {
    question:
      "A company wants to deploy a non-containerized Java-based web application on AWS. The company wants to use a managed service to quickly deploy the application. The company wants the service to automatically provision capacity, load balance, scale, and monitor application health. Which AWS service will meet these requirements?",
    answers: [
      {
        text: "Amazon Elastic Kubernetes Service (Amazon EKS)",
        correct: false,
      },
      { text: "AWS Elastic Beanstalk", correct: true },
      { text: "Amazon Elastic Container Service (Amazon ECS)", correct: false },
      { text: "AWS Lambda", correct: false },
    ],
    explanation:
      "AWS Elastic Beanstalk simplifies the deployment of applications and handles capacity provisioning, load balancing, and monitoring.",
  },
  {
    question:
      "A company needs to categorize and track AWS usage cost based on business categories. Which AWS service or feature should the company use to meet these requirements?",
    answers: [
      { text: "AWS Cost and Usage Report", correct: false },
      { text: "AWS Security Hub", correct: false },
      { text: "AWS Organizations", correct: false },
      { text: "Cost allocation tags", correct: true },
    ],
    explanation:
      "Cost allocation tags allow organizations to categorize and track AWS costs based on specific business categories.",
  },
  {
    question:
      "A company stores a large amount of data that auditors access only twice each year. Which Amazon S3 storage class should the company use to store the data with the LOWEST cost?",
    answers: [
      { text: "Amazon S3 Outposts", correct: false },
      { text: "Amazon S3 Intelligent-Tiering", correct: false },
      { text: "Amazon S3 Standard", correct: false },
      { text: "Amazon S3 Glacier Instant Retrieval", correct: true },
    ],
    explanation:
      "Amazon S3 Glacier Instant Retrieval is designed for long-term storage of data that is infrequently accessed.",
  },
  {
    question:
      "A company wants to use a centralized AWS service to enforce compliance with the organizational business standards. The company wants to use an AWS service that can govern and control who can deploy, manage, and decommission AWS resources. Which AWS service will meet these requirements?",
    answers: [
      { text: "AWS Security Hub", correct: false },
      { text: "Amazon CloudWatch", correct: false },
      { text: "Amazon GuardDuty", correct: false },
      { text: "AWS Service Catalog", correct: true },
    ],
    explanation:
      "AWS Service Catalog allows organizations to manage and govern access to AWS resources and deployments.",
  },
  {
    question:
      "A company is connecting multiple VPCs and on-premises networks. The company needs to use an AWS service as a cloud router to simplify peering relationships. Which AWS service can the company use to meet this requirement?",
    answers: [
      { text: "AWS Direct Connect", correct: false },
      { text: "Amazon Connect", correct: false },
      { text: "Amazon Route 53", correct: false },
      { text: "AWS Transit Gateway", correct: true },
    ],
    explanation:
      "AWS Transit Gateway simplifies network architecture by acting as a central hub for connecting multiple VPCs and on-premises networks.",
  },
  {
    question: "Which cloud concept is demonstrated by using AWS Cost Explorer?",
    answers: [
      { text: "Resilience", correct: false },
      { text: "Modernization", correct: false },
      { text: "Rightsizing", correct: true },
      { text: "Reliability", correct: false },
    ],
    explanation:
      "AWS Cost Explorer helps users analyze and optimize their AWS spending, promoting the concept of rightsizing resources.",
  },
  {
    question:
      "Which statements represent the cost-effectiveness of the AWS Cloud? (Choose two.)",
    answers: [
      { text: "AWS offers increased speed and agility", correct: false },
      {
        text: "Users can trade fixed expenses for variable expenses",
        correct: true,
      },
      { text: "Users benefit from economies of scale", correct: true },
      {
        text: "Users can deploy all over the world in minutes",
        correct: false,
      },
    ],
    explanation:
      "AWS allows users to convert fixed costs into variable costs and benefits from economies of scale due to its vast infrastructure.",
  },
  {
    question:
      "A company hosts its website on Amazon EC2 instances. The company needs to ensure that the website reaches a global audience and provides minimum latency to users. Which AWS service should the company use to meet these requirements?",
    answers: [
      { text: "Amazon Route 53", correct: false },
      { text: "Elastic Load Balancing", correct: false },
      { text: "AWS Lambda", correct: false },
      { text: "Amazon CloudFront", correct: true },
    ],
    explanation:
      "Amazon CloudFront is a content delivery network (CDN) that caches content globally, reducing latency for users.",
  },
  {
    question:
      "A company wants to design its cloud architecture so that it can support development innovations, and continuously improve processes and procedures. This is an example of which pillar of the AWS Well-Architected Framework?",
    answers: [
      { text: "Security", correct: false },
      { text: "Operational excellence", correct: true },
      { text: "Performance efficiency", correct: false },
      { text: "Reliability", correct: false },
    ],
    explanation:
      "The Operational Excellence pillar focuses on operations and processes that support ongoing improvement and innovation.",
  },
  {
    question:
      "A company wants to organize its users so that the company can grant permissions to the users as a group. Which AWS service or tool can the company use to meet this requirement?",
    answers: [
      { text: "Security groups", correct: false },
      { text: "AWS Identity and Access Management (IAM)", correct: true },
      { text: "AWS Security Hub", correct: false },
      { text: "Resource groups", correct: false },
    ],
    explanation:
      "AWS IAM allows for the creation of groups to manage permissions collectively for users.",
  },
  {
    question:
      "What does 'security of the cloud' refer to in the AWS shared responsibility model?",
    answers: [
      {
        text: "Availability of AWS services such as Amazon EC2",
        correct: false,
      },
      {
        text: "Implementation of password policies for IAM users",
        correct: false,
      },
      {
        text: "Security of the cloud infrastructure that runs all the AWS services",
        correct: true,
      },
      {
        text: "Security of customer environments by using AWS Network Firewall partners",
        correct: false,
      },
    ],
    explanation:
      "Security of the cloud refers to the protection of the underlying infrastructure managed by AWS.",
  },
  {
    question:
      "A company needs to check for IAM access keys that have not been rotated recently. Which AWS service should the company use to meet this requirement?",
    answers: [
      { text: "Amazon Cognito", correct: false },
      { text: "AWS WAF", correct: false },
      { text: "AWS Shield", correct: false },
      { text: "AWS Trusted Advisor", correct: true },
    ],
    explanation:
      "AWS Trusted Advisor checks for best practices, including IAM access key rotation.",
  },
  {
    question:
      "An ecommerce company has deployed a new web application on Amazon EC2 instances. The company wants to distribute incoming HTTP traffic evenly across all running instances. Which AWS service or resource will meet this requirement?",
    answers: [
      { text: "Network Load Balancer", correct: false },
      { text: "Application Load Balancer", correct: true },
      { text: "Amazon EC2 Auto Scaling", correct: false },
      { text: "Gateway Load Balancer", correct: false },
    ],
    explanation:
      "Application Load Balancer is designed to distribute HTTP(S) traffic across multiple EC2 instances.",
  },
  {
    question:
      "A company has deployed a web application to Amazon EC2 instances. The EC2 instances have low usage. Which AWS service or feature should the company use to rightsize the EC2 instances?",
    answers: [
      { text: "AWS Budgets", correct: false },
      { text: "AWS Cost Anomaly Detection", correct: false },
      { text: "AWS Config", correct: false },
      { text: "AWS Compute Optimizer", correct: true },
    ],
    explanation:
      "AWS Compute Optimizer provides recommendations for resizing EC2 instances based on usage patterns.",
  },
  {
    question:
      "Which AWS service or resource can a company use to deploy AWS WAF rules?",
    answers: [
      { text: "Amazon EC2", correct: false },
      { text: "AWS Trusted Advisor", correct: false },
      { text: "Application Load Balancer", correct: true },
      { text: "Network Load Balancer", correct: false },
    ],
    explanation:
      "AWS WAF rules can be integrated with Application Load Balancers to protect web applications.",
  },
  {
    question:
      "Which AWS service or tool gives a company the ability to release application changes in an automated way?",
    answers: [
      { text: "Amazon AppFlow", correct: false },
      { text: "AWS CodeDeploy", correct: true },
      { text: "AWS PrivateLink", correct: false },
      { text: "Amazon EKS Distro", correct: false },
    ],
    explanation:
      "AWS CodeDeploy automates application deployments to a variety of compute services.",
  },
  {
    question:
      "A company is moving some of its on-premises IT services to the AWS Cloud. The finance department wants to see the entire bill so it can forecast spending limits. Which AWS service can the company use to set spending limits and receive notifications if those limits are exceeded?",
    answers: [
      { text: "AWS Organizations consolidated billing", correct: false },
      { text: "AWS Budgets", correct: true },
      { text: "AWS Cost and Usage Reports", correct: false },
      { text: "Cost Explorer", correct: false },
    ],
    explanation:
      "AWS Budgets allows you to set spending limits and track costs against those limits.",
  },
  {
    question:
      "Which AWS service or feature allows users to securely store encrypted credentials and retrieve these credentials when required?",
    answers: [
      { text: "AWS Artifact", correct: false },
      { text: "AWS Security Hub", correct: false },
      { text: "AWS Encryption SDK", correct: false },
      { text: "AWS Secrets Manager", correct: true },
    ],
    explanation:
      "AWS Secrets Manager securely stores and manages sensitive information, such as API keys and passwords.",
  },
  {
    question:
      "A company needs to identify who accessed an AWS service and what action was performed for a given time period. Which AWS service should the company use to meet this requirement?",
    answers: [
      { text: "AWS Security Hub", correct: false },
      { text: "Amazon Inspector", correct: false },
      { text: "Amazon CloudWatch", correct: false },
      { text: "AWS CloudTrail", correct: true },
    ],
    explanation:
      "AWS CloudTrail records AWS API calls for your account, allowing you to audit access and actions taken.",
  },
  {
    question:
      "Which AWS design principle emphasizes the reduction of interdependencies between components of an application?",
    answers: [
      { text: "Caching", correct: false },
      { text: "Loose coupling", correct: true },
      { text: "Scalability", correct: false },
      { text: "Automation", correct: false },
    ],
    explanation:
      "Loose coupling allows application components to operate independently, facilitating easier changes and updates.",
  },
  {
    question:
      "A company wants to use a managed service to identify and protect sensitive data that is stored in Amazon S3. Which AWS service will meet these requirements?",
    answers: [
      { text: "AWS IAM Access Analyzer", correct: false },
      { text: "Amazon GuardDuty", correct: false },
      { text: "Amazon Inspector", correct: false },
      { text: "Amazon Macie", correct: true },
    ],
    explanation:
      "Amazon Macie helps in discovering, classifying, and protecting sensitive data in S3.",
  },
  {
    question:
      "Which of the following is an advantage that the AWS Cloud provides to users?",
    answers: [
      {
        text: "Users maintain control of underlying IT infrastructure hardware.",
        correct: false,
      },
      {
        text: "Users eliminate the need to guess about infrastructure capacity requirements",
        correct: true,
      },
      {
        text: "Users decrease their variable costs by maintaining sole ownership of IT hardware.",
        correct: false,
      },
      {
        text: "Users maintain control of operating systems for managed services.",
        correct: false,
      },
    ],
    explanation:
      "AWS allows users to avoid guessing capacity needs by providing on-demand resources.",
  },
  {
    question:
      "Which AWS service or feature gives users the ability to connect VPCs and on-premises networks to a central hub?",
    answers: [
      { text: "Customer gateway", correct: false },
      { text: "Internet gateway", correct: false },
      { text: "Virtual private gateway", correct: false },
      { text: "AWS Transit Gateway", correct: true },
    ],
    explanation:
      "AWS Transit Gateway simplifies network management by serving as a hub for multiple VPCs and on-premises networks.",
  },
  {
    question:
      "A company wants to migrate its on-premises NoSQL workload to Amazon DynamoDB. Which AWS service will meet this requirement?",
    answers: [
      { text: "AWS Migration Hub", correct: false },
      { text: "AWS Database Migration Service (AWS DMS)", correct: true },
      { text: "Migration Evaluator", correct: false },
      { text: "AWS Application Migration Service", correct: false },
    ],
    explanation:
      "AWS DMS facilitates the migration of databases to AWS services such as DynamoDB.",
  },
  {
    question:
      "A company wants to store its files in the AWS Cloud. Users need to be able to download these files directly using a public URL. Which AWS service or feature will meet this requirement?",
    answers: [
      { text: "Amazon Elastic Block Store (Amazon EBS)", correct: false },
      { text: "Amazon Redshift", correct: false },
      { text: "Amazon S3", correct: true },
      { text: "Amazon Elastic File System (Amazon EFS)", correct: false },
    ],
    explanation:
      "Amazon S3 is designed for storing and retrieving any amount of data with public URL access.",
  },
  {
    question:
      "Which feature of Amazon RDS provides the ability to automatically create a primary database instance and to synchronously replicate data to an instance in another Availability Zone?",
    answers: [
      { text: "Reserved Instances", correct: false },
      { text: "Multi-AZ deployment", correct: true },
      { text: "Blue/green deployment", correct: false },
      { text: "Read replicas", correct: false },
    ],
    explanation:
      "Multi-AZ deployment in Amazon RDS automatically creates a primary instance and a synchronous standby instance in another AZ for high availability.",
  },
  {
    question:
      "Which AWS service or feature can a user configure to limit network access at the subnet level?",
    answers: [
      { text: "Security group", correct: false },
      { text: "AWS Shield", correct: false },
      { text: "Network ACL", correct: true },
      { text: "AWS WAF", correct: false },
    ],
    explanation:
      "Network ACLs (Access Control Lists) provide a way to control traffic at the subnet level.",
  },
  {
    question:
      "Which AWS service can migrate data between AWS storage services?",
    answers: [
      { text: "AWS Direct Connect", correct: false },
      { text: "Amazon S3", correct: false },
      { text: "AWS Lake Formation", correct: false },
      { text: "AWS DataSync", correct: true },
    ],
    explanation:
      "AWS DataSync automates moving data between on-premises storage and AWS storage services.",
  },
  {
    question:
      "Which pillar of the AWS Well-Architected Framework aligns with the ability to make frequent, small, and reversible changes to AWS Cloud architecture?",
    answers: [
      { text: "Performance efficiency", correct: false },
      { text: "Operational excellence", correct: true },
      { text: "Cost optimization", correct: false },
      { text: "Security", correct: false },
    ],
    explanation:
      "The Operational Excellence pillar emphasizes the ability to make small, frequent changes.",
  },
  {
    question:
      "A company is using AWS for all its IT infrastructure. The company's developers are allowed to deploy applications on their own. The developers want to deploy their applications without having to provision the infrastructure themselves. Which AWS service should the developers use to meet these requirements?",
    answers: [
      { text: "AWS CloudFormation", correct: false },
      { text: "AWS CodeBuild", correct: false },
      { text: "AWS CodeDeploy", correct: false },
      { text: "AWS Elastic Beanstalk", correct: true },
    ],
    explanation:
      "AWS Elastic Beanstalk allows developers to deploy applications without managing the underlying infrastructure.",
  },
  {
    question:
      "A company deploys its application on Amazon EC2 instances. The application occasionally experiences sudden increases in demand. The company wants to ensure that its application can respond to changes in demand at the lowest possible cost. Which AWS service or concept will meet these requirements?",
    answers: [
      { text: "AWS Well-Architected Framework", correct: false },
      { text: "AWS Auto Scaling", correct: true },
      { text: "AWS Cost Explorer", correct: false },
      { text: "AWS Compute Optimizer", correct: false },
    ],
    explanation:
      "AWS Auto Scaling automatically adjusts the number of EC2 instances based on demand.",
  },
  {
    question:
      "Which of the following can be components of a VPC in the AWS Cloud? (Choose two.)",
    answers: [
      { text: "Amazon API Gateway", correct: false },
      { text: "Internet gateway", correct: true },
      { text: "Amazon S3 buckets and objects", correct: false },
      { text: "Subnet", correct: true },
    ],
    explanation:
      "Internet gateways and subnets are essential components of a VPC.",
  },
  {
    question:
      "A company is running a reporting web server application on Amazon EC2 instances. The application runs once every week and once again at the end of the month. The EC2 instances can be shut down when they are not in use. What is the MOST cost-effective billing model for this use case?",
    answers: [
      { text: "On-Demand Capacity Reservations", correct: false },
      { text: "Standard Reserved Instances", correct: false },
      { text: "On-Demand Instances", correct: true },
      { text: "Convertible Reserved Instances", correct: false },
    ],
    explanation:
      "On-Demand Instances are ideal for applications with unpredictable usage patterns.",
  },
  {
    question:
      "Which options are AWS Cloud Adoption Framework (AWS CAF) perspectives? (Choose two.)",
    answers: [
      { text: "Cloud fluency", correct: true },
      { text: "Security", correct: true },
      { text: "Business", correct: false },
      { text: "Change acceleration", correct: false },
    ],
    explanation:
      "Cloud fluency and Security are recognized perspectives in the AWS Cloud Adoption Framework.",
  },
  {
    question:
      "A company wants to run CPU-intensive workload across multiple Amazon EC2 instances. Which EC2 instance type should the company use to meet this requirement?",
    answers: [
      { text: "Memory optimized instances", correct: false },
      { text: "Storage optimized instances", correct: false },
      { text: "Compute optimized instances", correct: true },
      { text: "General purpose instances", correct: false },
    ],
    explanation:
      "Compute optimized instances are designed for CPU-intensive applications.",
  },
  {
    question: "Where can users find examples of AWS Cloud solution designs?",
    answers: [
      { text: "AWS Trusted Advisor", correct: false },
      { text: "AWS Service Catalog", correct: false },
      { text: "AWS Architecture Center", correct: true },
      { text: "AWS Marketplace", correct: false },
    ],
    explanation:
      "The AWS Architecture Center provides examples and best practices for AWS solution designs.",
  },
  {
    question:
      "A company is moving its development and test environments to AWS to increase agility and reduce cost. Because these are not production workloads and the servers are not fully utilized, occasional unavailability is acceptable. What is the MOST cost-effective Amazon EC2 pricing model that will meet these requirements?",
    answers: [
      { text: "Spot Instances", correct: true },
      { text: "Dedicated Hosts", correct: false },
      { text: "Reserved Instances", correct: false },
      { text: "On-Demand Instances", correct: false },
    ],
    explanation:
      "Spot Instances are the most cost-effective option for non-critical workloads with flexible availability.",
  },
  {
    question:
      "A company wants to discover, prepare, move, and integrate data from multiple sources for data analytics and machine learning. Which AWS serverless data integration service should the company use to meet these requirements?",
    answers: [
      { text: "Amazon EMR", correct: false },
      { text: "AWS Glue", correct: true },
      { text: "Amazon Athena", correct: false },
      { text: "AWS Data Exchange", correct: false },
    ],
    explanation:
      "AWS Glue is a serverless ETL service designed for data preparation and integration.",
  },
  {
    question:
      "A company wants to gain insights from its data and build interactive data visualization dashboards. Which AWS service will meet these requirements?",
    answers: [
      { text: "Amazon Rekognition", correct: false },
      { text: "Amazon Kinesis", correct: false },
      { text: "Amazon SageMaker", correct: false },
      { text: "Amazon QuickSight", correct: true },
    ],
    explanation:
      "Amazon QuickSight is a business analytics service for building interactive dashboards and visualizations.",
  },
  {
    question:
      "A company wants to migrate a company’s on-premises container infrastructure to the AWS Cloud. The company wants to prevent unplanned administration and operation cost and adapt to a serverless architecture. Which AWS service will meet these requirements?",
    answers: [
      { text: "Amazon Connect", correct: false },
      { text: "AWS Fargate", correct: true },
      { text: "Amazon EC2", correct: false },
      { text: "Amazon Lightsail", correct: false },
    ],
    explanation:
      "AWS Fargate allows for running containers without managing the underlying server infrastructure.",
  },
  {
    question:
      "A company wants to enhance security by launching a third-party ISP intrusion detection system from its AWS account. Which AWS service or resource should the company use to meet this requirement?",
    answers: [
      { text: "AWS Security Hub", correct: false },
      { text: "AWS Security Center", correct: false },
      { text: "AWS Quick Starts", correct: false },
      { text: "AWS Marketplace", correct: true },
    ],
    explanation:
      "AWS Marketplace offers third-party security solutions, including intrusion detection systems.",
  },
  {
    question:
      "Which action should a company take to improve security in its AWS account?",
    answers: [
      { text: "Remove the root user account", correct: false },
      {
        text: "Create an access key for the AWS account root user",
        correct: false,
      },
      { text: "Create an access key for each privileged user", correct: false },
      {
        text: "Require multi-factor authentication (MFA) for privileged users",
        correct: true,
      },
    ],
    explanation:
      "Implementing MFA for privileged users significantly enhances account security.",
  },
  {
    question:
      "A company wants to use machine learning capabilities to analyze log data from its Amazon EC2 instances and efficiently conduct security investigations. Which AWS service will meet these requirements?",
    answers: [
      { text: "Amazon GuardDuty", correct: false },
      { text: "Amazon Detective", correct: true },
      { text: "Amazon Inspector", correct: false },
      { text: "Amazon QuickSight", correct: false },
    ],
    explanation:
      "Amazon Detective helps analyze and investigate security findings using machine learning.",
  },
  {
    question:
      "A company wants to manage sign-in security for workforce users. The company needs to create workforce users and centrally manage their access across all the company's AWS accounts and applications. Which AWS service will meet these requirements?",
    answers: [
      { text: "Amazon Cognito", correct: false },
      { text: "AWS IAM Identity Center (AWS Single Sign-On)", correct: true },
      { text: "AWS Security Hub", correct: false },
      { text: "AWS Audit Manager", correct: false },
    ],
    explanation:
      "AWS IAM Identity Center (formerly SSO) provides centralized identity and access management.",
  },
  {
    question:
      "A company is in the process of finding correct Amazon EC2 instance types and sizes to meet its performance and capacity requirements. The company wants to find the lowest possible cost. Which option accurately characterizes the company's actions?",
    answers: [
      { text: "Rightsizing", correct: true },
      { text: "Instance scheduling", correct: false },
      { text: "Storage tiering", correct: false },
      { text: "Auto Scaling", correct: false },
    ],
    explanation:
      "Rightsizing refers to selecting the optimal instance types and sizes based on workload requirements.",
  },
  {
    question:
      "A company wants to build an application that uses AWS Lambda to run Python code. Under the AWS shared responsibility model, which tasks will be the company’s responsibility? (Choose two.)",
    answers: [
      { text: "Management of the underlying infrastructure", correct: true },
      { text: "Writing the business logic code", correct: true },
      {
        text: "Providing AWS Identity and Access Management (IAM) access to the Lambda service.",
        correct: false,
      },
      { text: "Management of the operating system", correct: false },
    ],
    explanation:
      "The company is responsible for writing the code and managing the Lambda function's configuration, while AWS manages the infrastructure.",
  },
  {
    question:
      "A company wants its Amazon EC2 instances to be in different locations but share the same geographic area. The company also wants to use multiple power grids and independent networking connectivity for the EC2 instances. Which solution meets these requirements?",
    answers: [
      {
        text: "Use EC2 instances in multiple Availability Zones in the same AWS Region",
        correct: true,
      },
      {
        text: "Use EC2 instances in multiple edge locations in the same AWS Region",
        correct: false,
      },
      {
        text: "Use EC2 instances in multiple AWS Artifact locations in the same AWS Region",
        correct: false,
      },
      {
        text: "Use EC2 instances in multiple Amazon Connect locations in the same AWS Region.",
        correct: false,
      },
    ],
    explanation:
      "Multiple Availability Zones provide redundancy and high availability within the same region.",
  },
  {
    question:
      "Which complimentary AWS service or tool creates data-driven business cases for cloud planning?",
    answers: [
      { text: "Migration Evaluator", correct: true },
      { text: "AWS Billing Console", correct: false },
      { text: "Amazon Forecast", correct: false },
      { text: "AWS Billing Conductor", correct: false },
    ],
    explanation:
      "Migration Evaluator helps organizations build a data-driven business case for moving to the cloud.",
  },
  {
    question:
      "A company wants to provide one of its employees with access to Amazon RDS. The company also wants to limit the interaction to only the AWS CLI and AWS software development kits (SDKs). Which combination of actions should the company take to meet these requirements while following the principles of least privilege? (Choose two.)",
    answers: [
      {
        text: "Create an IAM user and provide AWS Management Console access only",
        correct: false,
      },
      {
        text: "Create an IAM user and provide programmatic access only.",
        correct: true,
      },
      {
        text: "Create an IAM policy with Amazon RDS access and attach it to the IAM user.",
        correct: true,
      },
      {
        text: "Create an IAM role and provide AWS Management Console access only",
        correct: false,
      },
    ],
    explanation:
      "Programmatic access ensures the user can interact with RDS through CLI/SDK, while a policy restricts access.",
  },
  {
    question:
      "A company is building a new application on AWS. The company needs the application to remain available if an individual application component fails. Which design principle should the company use to meet this requirement?",
    answers: [
      { text: "Disposable resources", correct: false },
      { text: "Rightsizing", correct: false },
      { text: "Loose coupling", correct: true },
      { text: "Automation", correct: false },
    ],
    explanation:
      "Loose coupling allows application components to fail independently without impacting the entire application.",
  },
  {
    question:
      "Which AWS Cloud Adoption Framework (AWS CAF) capabilities belong to the governance perspective? (Choose two.)",
    answers: [
      { text: "Risk management", correct: true },
      { text: "Product management", correct: false },
      { text: "Portfolio management", correct: false },
      { text: "Program and project management", correct: true },
    ],
    explanation:
      "Risk management and Program and project management are key capabilities in the governance perspective of AWS CAF.",
  },
  {
    question:
      "A company wants to use AWS Managed Services (AMS) for operational support and wants to understand the scope of AMS. Which AMS feature will meet these requirements?",
    answers: [
      { text: "Customer application development", correct: false },
      { text: "DevSecOps pipeline configuration", correct: false },
      { text: "Application log monitoring", correct: false },
      { text: "Landing zone and network management", correct: true },
    ],
    explanation:
      "AMS provides features like Landing zone and network management to assist with operational support.",
  },
  /*
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
    explanation: "",
  }
  */
];
