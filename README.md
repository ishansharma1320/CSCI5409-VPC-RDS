# AWS Cloud Application with VPC, EC2, and RDS

This repository showcases the implementation of a cloud-based web application using Amazon Web Services (AWS). The project focuses on understanding and applying key AWS services, including Virtual Private Cloud (VPC), Elastic Compute Cloud (EC2), and Relational Database Service (RDS). By completing this assignment, I have gained hands-on experience in designing and deploying secure and scalable cloud architectures.

## Learning Outcomes:

Through this assignment, I learned several important concepts and skills related to AWS and cloud computing:

1. **Importance of Virtual Private Cloud (VPC):** I learned how VPCs play a crucial role in creating secure architectures by implementing the principle of least privilege. VPCs enable the isolation of resources and control over network traffic, ensuring that only necessary connections are allowed.

2. **Implementation of VPC:** I gained the ability to set up a Virtual Private Cloud on AWS. This involved configuring subnets, route tables, and security groups to control traffic flow and access to resources.

3. **EC2 Instance Deployment:** I learned to deploy an EC2 instance within the VPC. This instance hosts the public-facing web application accessible through a Public IP or Elastic IP.

4. **REST API Development:** Through building the web application, I gained experience in creating REST APIs. The application exposes endpoints for POST and GET requests.

5. **Integration with RDS Database:** I integrated the application with an AWS RDS database running in a private subnet within the VPC. This allowed for secure and controlled access to the database.

6. **Database Schema Design:** I designed a relational database schema for the application, defining a "products" table with appropriate columns.

7. **Handling JSON Data:** I developed skills in parsing JSON data from incoming requests and using it to insert records into the database.

8. **Security Best Practices:** I practiced implementing security best practices by keeping the database in a private subnet, controlling network access with security groups, and utilizing encryption where necessary.

## Web Application Functionality:

The web application demonstrates two key functionalities:

1. **/store-products:** This endpoint handles incoming JSON data from external applications. It parses the data and inserts individual product records into the RDS database. Upon successful insertion, it returns a 200 status code. In case of errors or invalid input, appropriate HTTP status codes are returned.

2. **/list-products:** This endpoint retrieves product data from the RDS database and returns a list of all products. It ensures that only authorized access is allowed, as the database resides in a private subnet.


## Conclusion:

By completing this assignment and building an AWS-based web application, I have gained practical knowledge and experience in setting up secure cloud architectures, working with VPCs, EC2 instances, RDS databases, and REST API development. This project has provided hands-on exposure to key AWS services and their integration, enhancing my skills in cloud computing and application development in a cloud environment.