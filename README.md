# ArtifactArcade

![Homepage](https://i.ibb.co.com/8ngKRKRz/ac.png)

A web application dedicated to tracking historical artifacts like the Rosetta Stone, Antikythera Mechanism, and more. ArtifactArcade allows users to explore, view details, and contribute their own artifact entries, creating a vibrant repository of history.

## 🌟 Purpose

ArtifactArcade aims to make learning about historical artifacts interactive and accessible. Users can browse artifacts, add their own entries, and engage with content by liking or disliking items. The platform fosters community participation to preserve historical knowledge.

## 🌐 Live URL

[Visit ArtifactArcade](https://artifactarcade-website.web.app/)
[ArtifactArcade-backend](https://github.com/AsifurRahman10/ArtifactArcade-website-server.git)

## 🛠️ Key Features

1. **Responsive Design**: Optimized for all devices—desktop, tablet, and mobile.
2. **Attractive Homepage**:
   - **Banner**: Highlights the essence of ArtifactArcade.
   - **Feature Section**: Displays the top 6 artifacts with the most likes.
   - Two additional content-rich sections for engaging user experience.
3. **Browse All Artifacts**:
   - View all artifacts contributed by users.
   - Click on individual cards to view detailed information (protected by a private route).
4. **Add Artifacts**:
   - Logged-in users can contribute new artifacts with relevant details.
5. **Like and Dislike Functionality**:
   - Users can like or dislike artifacts.
6. **My Artifacts**:
   - A dedicated section for users to view all artifacts they have added.
7. **Liked Artifacts**:
   - A section for users to track all artifacts they have liked.
8. **Authentication**:
   - Users must log in to access certain features (e.g., adding or liking artifacts).

## 🛠️ Technologies Used

This project is powered by a range of modern web technologies and tools to provide a seamless and engaging user experience:

- **React**: For building the user interface with components and managing the application state.
- **React Router DOM**: Enables navigation and private routing across different pages.
- **Firebase**: Used for user authentication and hosting the live site.
- **Axios**: Simplifies making HTTP requests to interact with the backend server.
- **Flowbite React**: Provides pre-designed UI components for faster development.
- **Lottie React**: Brings the site to life with stunning animations.
- **Motion**: Ensures smooth animations and transitions across the site.
- **React Helmet Async**: Dynamically manages page titles and meta tags for SEO optimization.
- **React Icons**: Adds visually appealing icons to the interface.
- **React Slick & Slick Carousel**: Implements carousel sliders to showcase content beautifully.
- **SweetAlert2**: Provides elegant pop-up alerts for user interactions.

## Running the Project Locally

To run this project locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/AsifurRahman10/ArtifactArcade-website-client.git
cd ArtifactArcade-website-client
```

### 2. Install Dependencies

Frontend
Navigate to the frontend folder and install the required dependencies:

```
cd frontend
npm install
```

Backend
Navigate to the backend folder and install the required dependencies:

```
cd backend
npm install
```

### 3. Setup Environment Variables

You need to create a .env file for both the frontend and backend with the necessary environment variables.

Frontend:
Firebase credentials
API keys for any other integrations (if needed)
Backend:
Create a .env file in the backend folder with the following variables and set up accordingly:

```

VITE_FIREBASE_API_KEY=your-firebase-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
VITE_FIREBASE_PROJECT_ID=your-firebase-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
VITE_FIREBASE_APP_ID=your-firebase-app-id
VITE_STRIPE_KEY=your-stripe-api-key
VITE_DB_URL=your-database-url

```

Backend
In the backend folder, create a .env file and add the following variables:

```
UserDB=your-database-user
PasswordDB=your-database-password
SECRET_KEY=Token-secret
```

### 4. Running the Project

After setting up the environment variables, you can start the project by running the following commands:
Frontend
In the frontend folder, run:

```
bash
npm run dev
```

Backend
In the backend folder, run:

```
bash
npm start
```

The frontend will be available at http://localhost:3000, and the backend will be available at http://localhost:5000 (or the port you set).
