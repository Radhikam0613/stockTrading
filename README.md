# 📈Full-Stack Stock Trading Platform

A **full-stack stock trading platform ** simulating Zerodha, built with **React.js frontend** and **Node.js + Express backend**, featuring **JWT authentication**, **portfolio management**, **charts**, and **secure RESTful APIs**. Perfect for showcasing **full-stack development skills** for internships.  

---

## 🚀 Project Highlights

- **💻 Full-Stack Expertise:** Two separate React apps (**Landing + Dashboard**) with Node.js backend.  
- **🔐 Authentication & Security:** **JWT-based authentication**, **bcryptjs password hashing**, protected routes.  
- **📊 Portfolio Management:** View **holdings, positions, orders, funds**; place buy/sell orders.  
- **📉 Interactive Charts:** Pie & Bar charts using **Chart.js** for data visualization.  
- **🗄️ Database Skills:** **MongoDB + Mongoose** for CRUD operations on **users, holdings, orders, positions**.  
- **⚡ Frontend Proficiency:** **React.js, React Router, Axios**, responsive design, dynamic UI feedback via `react-toastify`.  
- **🧪 Testing & QA:** **API testing** with ThunderClient, **unit tests** with Jest.  
- **🌐 Version Control:** **Git/GitHub** with branching, commits, structured project setup.  
- **✨ Next-Level Enhancements Ready:** **WebSockets** for real-time updates, live stock API integration, advanced dashboard analytics.  

---

## 📝 About This Project

A **full-stack Zerodha ** built with **React.js (Landing + Dashboard)** and **Node.js + Express backend**. Features **secure JWT authentication**, password hashing, **interactive portfolio charts**, buy/sell orders, and **RESTful API integration with MongoDB**. Demonstrates **end-to-end full-stack development, problem-solving, and software engineering skills**—ideal for internship portfolios.  

---

## 📂 Table of Contents

1. [Project Overview](#-project-overview)  
2. [Key Features](#-key-features)  
3. [Tech Stack](#tech-stack)  
4. [Frontend Structure](#frontend-structure)  
5. [Backend Structure](#backend-structure)  
6. [Authentication & Security](#-authentication--security)  
7. [Charts & Visualizations](#-charts--visualizations)  
8. [Testing](#-testing)  
10. [Next Steps / Enhancements](#-next-steps--enhancements)  
11. [Skills Demonstrated](#-skills-demonstrated)  

---

## 📌 Project Overview

- **Landing App:** **Signup/Login pages**, handles user input, sends requests to backend.  
- **Kite Dashboard:** Displays **portfolio holdings, positions, orders, funds, charts**, and notifications.  
- **Backend:** **Node.js + Express** server, **MongoDB database**, **RESTful APIs**.  
- **Authentication:** **JWT tokens** stored in cookies, validated on protected routes.  
- **Testing:** ThunderClient for API testing, Jest for unit tests.  

---

## 🔑 Key Features

- Full **authentication flow** (signup/login)  
- **Buy/sell orders** with database updates  
- **Portfolio overview** with holdings, funds, positions  
- Dynamic **charts** (Pie & Bar) for data visualization  
- **Toast notifications** for success/error messages  
- **API testing** and **unit testing**  

---

## Tech Stack

| Layer | Technologies |
|-------|--------------|
| **Frontend** | React.js, React Router, Chart.js, react-toastify, Axios, HTML5, CSS3, ES6+ |
| **Backend** | Node.js, Express, bcryptjs, jsonwebtoken, cookie-parser, MongoDB, Mongoose |
| **Testing** | Jest, ThunderClient |
| **Version Control** | Git, GitHub |

---

## Frontend Structure

**Landing App:**  
- Pages: **Signup, Login**  
- Features: **Form validation**, **user input handling**, **API calls**, **JWT-based redirection**  

**Kite Dashboard App:**  
- Components: **Dashboard, Holdings, Positions, Orders, Funds, Summary, Watchlist, Apps**  
- Features: **Portfolio overview**, **buy/sell functionality**, **interactive charts**, **toast notifications**  

---

## Backend Structure

- **Routes:**  
  - `/signup` → Create **user**  
  - `/login` → Validate **credentials** & generate **JWT**  
  - `/allHoldings` → Fetch **user holdings**  
  - `/allPositions` → Fetch **positions**  
  - `/buy` / `/sell` → Handle **stock orders**  
- **MongoDB Models:** Users, Holdings, Orders, Positions  
- **Authentication:** JWT verification for protected routes  

---

## 🔐 Authentication & Security

- **Password hashing:** `bcryptjs`  
- **JWT authentication** stored in cookies  
- **Protected routes** validate JWT  
- Error handling for invalid credentials or expired tokens  

---

## 📊 Charts & Visualizations

- **Pie Chart:** Holdings distribution  
- **Bar Chart:** Positions and funds trends  
- Dynamic rendering using **Chart.js**  

---

## 🧪 Testing

- **API testing** with ThunderClient  
- **Unit testing** with Jest  
- Ensures secure, bug-free, maintainable code  

---
## ✨ Next Steps / Enhancements

- Integrate live stock market API

- Implement WebSockets for real-time dashboard updates

- Enhance UI/UX for mobile responsiveness

- Add more analytics charts

- Improve error handling for invalid/expired JWTs

---

## 💡 Skills Demonstrated

- Core Programming Fundamentals: Data types, loops, conditions, functions, OOP basics, debugging

- Frontend Development: HTML5, CSS3, JS (ES6+), React.js, responsive design, REST API consumption

- Backend Development: Node.js + Express, REST APIs, JWT authentication, error handling

- Database Skills: MongoDB CRUD operations, Mongoose ORM, data modeling

- Version Control: Git/GitHub, branching, commits

- Tools & Deployment: ThunderClient, Jest, basic deployment knowledge

- Problem-Solving & SDLC: Requirement analysis → design → development → testing

- Soft Skills: Quick learning, teamwork, communication, discipline, ownership, time management
