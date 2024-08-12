# takeUforward: Countdown banner
*This is hiring assessment for Software Engineer in takeuforward.*

Here’s a detailed analysis of the GitHub repository [TUF_Countdown_banner](https://github.com/manni2000/TUF_Countdown_banner), including the technologies used and the functionality provided.

### Overview
The **TUF Countdown Banner** project is a dynamic one-page website built using React. It provides a customizable banner that can display a countdown timer. The banner is controlled via an internal dashboard that allows the user to toggle the banner on or off, update its content, set a countdown timer, and provide a clickable link. The application leverages a MySQL database to persist the banner settings.

### Technologies Used

1. **Frontend:**
   - **React:** A JavaScript library for building user interfaces, used to create the dynamic, responsive front-end of the website.
   - **CSS:** For styling the components, providing a clean and professional UI.
   - **Axios:** A promise-based HTTP client for the browser and Node.js, used to communicate with the backend API.

2. **Backend:**
   - **Node.js:** A JavaScript runtime built on Chrome's V8 JavaScript engine, used to run the backend server.
   - **Express:** A minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications.
   - **MySQL:** A relational database management system used to store and manage the banner settings, including the description, timer, and link.

3. **Database:**
   - **MySQL Database:** The project uses MySQL to store banner-related information. The data includes the banner description, timer settings, and the link associated with the banner.

### Functionality

1. **Banner Display:**
   - The main feature is a banner that displays at the top of the webpage. This banner includes a countdown timer that shows the remaining time before the banner disappears.

2. **Dashboard Controls:**
   - **Banner On/Off:** The dashboard allows users to toggle the visibility of the banner on the main website.
   - **Update Banner Content:** Users can update the text displayed on the banner.
   - **Set Timer:** The dashboard provides an option to set a countdown timer, which is then displayed as a reverse clock on the banner.
   - **Add a Link:** Users can provide a clickable link on the banner, directing users to a specified URL.

3. **Persistent Storage:**
   - The banner’s settings, including the description, timer, and link, are stored in a MySQL database, ensuring that the banner configuration is persistent across sessions.

4. **Responsive Design:**
   - The website is designed to be responsive, ensuring that it looks and functions well on various devices, including desktops, tablets, and mobile phones.

### Detailed Workflow

- **Initial Setup:**
  - When the application starts, it retrieves the current banner settings from the MySQL database via the backend API.

- **Banner Updates:**
  - When the user updates the banner settings via the dashboard, the new settings are sent to the backend using an API call (handled by Axios). The backend updates the database with the new settings and returns the updated data to the frontend.

- **Real-Time Updates:**
  - The banner immediately reflects the changes made via the dashboard, such as updating the description, changing the timer, or toggling visibility.

### Key Features:

- **Dynamic Banner:** A dynamic banner that updates in real-time based on user inputs from the dashboard.
- **Internal Dashboard:** A fully functional dashboard to control the banner's content, visibility, and behavior.
- **Countdown Timer:** A countdown timer displayed on the banner that can be set and updated via the dashboard.
- **Database Integration:** Persistent storage of the banner's settings using MySQL.
- **Responsive Design:** The application is optimized for various screen sizes.

To run the **TUF Countdown Banner** project locally and preview it, follow the steps below:

### Prerequisites

Make sure you have the following installed on your system:
- **Node.js** (version 12 or higher)
- **MySQL** (for database management)
- **Git** (optional, for cloning the repository)

### Steps to Run Locally

1. **Clone the Repository:**

   First, clone the repository to your local machine using Git. Open a terminal and run the following command:

   ```bash
   git clone https://github.com/manni2000/TUF_Countdown_banner.git
   ```

   Alternatively, you can download the ZIP file of the repository from GitHub and extract it to your desired location.

2. **Navigate to the Project Directory:**

   Change your current working directory to the project directory:

   ```bash
   cd TUF_Countdown_banner
   ```

3. **Install Dependencies:**

   Install the required Node.js dependencies for both the frontend and backend:

   ```bash
   # Install backend dependencies
   cd server
   npm install

   # Install frontend dependencies
   cd ../client
   npm install
   ```

4. **Set Up the MySQL Database:**

   - Open your MySQL client and create a new database for the project:

     ```sql
     CREATE DATABASE database;
     ```

   - Create the necessary tables in the `database` Database. You can use the following SQL command to create the `banner` table:

     ```sql
     USE database;

     CREATE TABLE banner (
       id INT AUTO_INCREMENT PRIMARY KEY,
       description VARCHAR(255) NOT NULL,
       timer INT NOT NULL,
       link VARCHAR(255) NOT NULL,
       isVisible BOOLEAN NOT NULL
     );
     ```

   - Optionally, you can insert a sample row into the `banner` table:

     ```sql
     INSERT INTO banner (description, timer, link, isVisible)
     VALUES ('Sample Banner', 3600, 'https://www.example.com', TRUE);
     ```

5. **Configure Environment Variables:**

   - Go to the `server` directory and create a `.env` file to configure your environment variables:

     ```bash
     cd server
     touch .env
     ```

   - Add the following content to your `.env` file:

     ```bash
     PORT=5000
     DB_HOST=localhost
     DB_USER=your_mysql_username
     DB_PASSWORD=your_mysql_password
     DB_NAME=tuf_countdown_banner
     ```

     Replace `your_mysql_username` and `your_mysql_password` with your actual MySQL credentials.

6. **Start the Backend Server:**

   Start the backend server by running:

   ```bash
   npm start
   ```

   This will start the backend server on `http://localhost:5000`.

7. **Start the Frontend Development Server:**

   Open a new terminal window, navigate to the `client` directory, and start the frontend development server:

   ```bash
   cd client
   npm start
   ```

8. **This will start the frontend development server on `http://localhost:3000`**

### Preview

https://github.com/user-attachments/assets/0b4f59df-6fda-4fec-8955-d154ccc57e4d

### License

MIT License

© 2024 by Manish Kumar: **Do not use without permission**


### Summary

- **Clone the Repository:** Download the project files from GitHub.
- **Install Dependencies:** Install Node.js packages for both the frontend and backend.
- **Set Up MySQL Database:** Create the necessary database and tables.
- **Configure Environment Variables:** Set up the `.env` file for the backend.
- **Start Servers:** Run the backend and frontend servers.
- **Preview:** Access `http://localhost:3000` in your browser to view and interact with the application.

This setup will allow you to run and preview the **TUF Countdown Banner** project locally on your machine.
