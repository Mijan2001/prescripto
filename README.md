# Hospital Management System - Full Stack Web Application

Welcome to the **Hospital Management System**, a complete full-stack web application built using the **MERN Stack** (MongoDB, Express.js, React, Node.js). This application allows users to book appointments, view doctor availability, and allows the admin to manage requests.

---

## 🏥 Features

- **User Features**:
  - **Login/Signup**: Users can register and log in securely.
  - **Doctor Filtering**: Filter doctors based on designation and specialization.
  - **Appointment Booking**: Users can book appointments based on doctor availability.
  - **Doctor Details**: View detailed information about doctors.
  - **Profile Management**: Edit personal profile details.

- **Admin Features**:
  - **Accept/Reject Appointment Requests**: Admin can manage user appointment requests.
  - **Doctor Management**: Admin can manage doctor data, including updating availability.

---

## 📚 Technologies Used

- **Frontend**:
  - React.js
  - Redux (for state management)
  - React Router (for routing)
  - Tailwind CSS (for styling)
  - Axios (for API calls)

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (Database)
  - JWT (for authentication)
  - Bcrypt.js (for password hashing)

---

## 🔧 Installation Guide

### 1. Clone the repository
First, clone the repository to your local machine.

```bash
git clone https://github.com/yourusername/hospital-management-system.git
cd hospital-management-system

### 2. Set up the Backend

- Navigate to the **backend** directory:
    
    ```bash
    bash
    CopyEdit
    cd backend
    
    ```
    
- Install the necessary dependencies:
    
    ```bash
    bash
    CopyEdit
    npm install
    
    ```
    
- Set up environment variables:
    
    Create a `.env` file in the **backend** directory and add the following variables:
    
    ```bash
    bash
    CopyEdit
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    PORT=5000
    
    ```
    
- Start the server:
    
    ```bash
    bash
    CopyEdit
    npm start
    
    ```
    

### 3. Set up the Frontend

- Navigate to the **frontend** directory:
    
    ```bash
    bash
    CopyEdit
    cd ../frontend
    
    ```
    
- Install the necessary dependencies:
    
    ```bash
    bash
    CopyEdit
    npm install
    
    ```
    
- Start the React app:
