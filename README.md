Project Documentation Template 
This text summarizes the process and architecture implemented for your static CV website project.

 Project Title: Automated Deployment of Static CV Website
This project demonstrates the setup of a personal resume website using modern AWS Serverless/Static Hosting architecture principles and a secure CI/CD (Continuous Integration/Continuous Deployment) pipeline.

 Core Technologies Utilized
Cloud Hosting: AWS S3 (Static Website Hosting)

Version Control: Git & GitHub

Automation (CI/CD): GitHub Actions

Security: AWS IAM and GitHub Secrets

 Implementation Steps and Process
1. Repository Setup and AWS Infrastructure Preparation
HTML/CSS files were created and pushed to the GitHub repository using Git.

An AWS S3 bucket was created for static hosting, and the necessary Public Read Policy was configured to allow internet access.

2. Secure Identity Management (IAM)
An exclusive AWS IAM User was created, adhering to the Principle of Least Privilege, granted only the permissions required to write files to the specific S3 bucket.

The Access Key ID and Secret Access Key for this user were obtained.

3. Secure CI/CD Environment Configuration
To ensure security, the obtained AWS Access Keys were not stored in the codebase but were securely defined within the repository's GitHub Secrets section.

4. Establishing the Automated Deployment Pipeline
A GitHub Actions Workflow file, named .github/workflows/deploy_to_s3.yml, was created and placed in the repository.

This YAML configuration was set to trigger upon any push event to the main branch.

The workflow was programmed to securely authenticate with AWS using the secrets and then use the aws s3 sync . s3://[bucket-name] command to automatically synchronize the repository files with the target S3 bucket.

5. Project Outcome and Learnings
The setup ensures that any update to the project code, upon being committed and pushed to GitHub, results in the static website being automatically updated within seconds, requiring no manual intervention.

This project successfully demonstrates core DevOps competencies, including Automation, Infrastructure-as-Code (for static setup), and a secure End-to-End Deployment Pipeline.

Feel free to connect with me for career opportunities or technical discussions.

| Platform | Link |
| :--- | :--- |
| Email | `akca-akca@hotmail.com` |
