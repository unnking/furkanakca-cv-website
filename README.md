# Furkan Akça - Personal CV & Portfolio Website

# Furkan Akça - Personal CV & Portfolio Website

This repository contains the source code for my personal professional website, which serves as an interactive CV and portfolio. The site highlights my transition from Electrical-Electronics Engineering to **DevOps and Cloud Engineering**.

---

## 🚀 Key Technologies & Architecture

This project is built and deployed using a modern, cost-effective, and scalable cloud architecture.

| Component | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | HTML5, CSS3 | Static content presentation (CV layout). |
| **Version Control** | **Git** | Source code management. |
| **Cloud Hosting** | **AWS S3** | Static website hosting for high availability and low cost (utilizing AWS Free Tier). |
| **CI/CD** | **GitHub Actions** | Automated deployment pipeline. |
| **Security** | **AWS IAM** & **GitHub Secrets** | Securely manages AWS credentials without exposing them in the repository. |

---

## 🔧 CI/CD Pipeline Overview

The deployment workflow is fully automated using GitHub Actions.

1.  A code **push** to the `main` branch triggers the workflow.
2.  **GitHub Actions** uses the securely stored **AWS Access Keys (via Secrets)** to authenticate with AWS.
3.  The workflow runs the `aws s3 sync` command to upload and synchronize the local files with the designated **S3 Bucket**.
4.  The content is immediately available via the S3 static website endpoint.

---

## Live Site

You can view the live version of my CV here:

[Insert AWS S3 Endpoint URL or Custom Domain URL Here]

---

## Contact & Connect

Feel free to connect with me for career opportunities or technical discussions.

| Platform | Link |
| :--- | :--- |
| Email | `akca-akca@hotmail.com` |