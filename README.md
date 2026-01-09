# Netflix Clone

A responsive Netflix clone built with React, Firebase, and Tailwind CSS. Browse movies, create an account, and save your favorite shows!

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-11.6.0-FFCA28?logo=firebase&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.3.2-38B2AC?logo=tailwind-css&logoColor=white)

## Features

- **User Authentication** - Sign up, login, and logout with Firebase Auth
- **Movie Browsing** - Browse popular, trending, top-rated, upcoming, and horror movies
- **Save Favorites** - Save and manage your favorite shows in your account
- **Protected Routes** - Secure account page accessible only to authenticated users
- **Responsive Design** - Fully responsive UI built with Tailwind CSS
- **Horizontal Scrolling** - Netflix-style horizontal movie carousels

## Tech Stack

- **Frontend:** React 18, React Router v6
- **Styling:** Tailwind CSS
- **Backend/Auth:** Firebase (Authentication & Firestore)
- **API:** TMDB (The Movie Database)
- **Icons:** React Icons
- **HTTP Client:** Axios

## Project Structure

```
src/
├── components/
│   ├── Main.jsx          # Hero section with featured movie
│   ├── Movie.jsx         # Individual movie card
│   ├── Navbar.jsx        # Navigation bar
│   ├── ProtectedRoute.js # Auth route wrapper
│   ├── Row.jsx           # Horizontal movie row
│   └── SavedShows.jsx    # User's saved movies
├── context/
│   └── AuthContext.js    # Firebase auth context
├── pages/
│   ├── Account.jsx       # User account page
│   ├── Home.jsx          # Main landing page
│   ├── Login.jsx         # Login page
│   └── Signup.jsx        # Registration page
├── App.js                # Main app with routes
├── firebase.js           # Firebase configuration
├── index.css             # Global styles
├── index.js              # App entry point
└── Requests.js           # TMDB API endpoints
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase account
- TMDB API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/netflix-clone.git
   cd netflix-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication (Email/Password)
   - Enable Firestore Database
   - Copy your Firebase config to `src/firebase.js`

4. **Set up TMDB API**
   - Get your API key from [TMDB](https://www.themoviedb.org/documentation/api)
   - Update the API key in `src/Requests.js`

5. **Start the development server**
   ```bash
   npm start
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode |
| `npm test` | Launches the test runner |
| `npm run build` | Builds the app for production |
| `npm run eject` | Ejects from Create React App |

## API Endpoints

The app fetches movie data from TMDB:

- **Popular Movies** - `/movie/popular`
- **Top Rated** - `/movie/top_rated`
- **Trending** - `/trending/movie/day`
- **Horror** - `/discover/movie?query=horror`
- **Upcoming** - `/movie/upcoming`

