# React + Vite

# Project Title: Profile Viewer with Interactive Map

## Project Description

This project is a React-based web application created using Vite. It allows users to view and manage profiles, including browsing user details, displaying their work and location, and viewing their location on an interactive map. The application demonstrates the integration of React Router for navigation and Google Maps for location display.

## Features

- **Home Page**: A landing page with a form to add new profiles and a navigation button to view all profiles.
- **Profile Details Page**: Displays a list of user profiles with their name, photo, work, and location.
- **Interactive Map**: Allows users to view the selected profile's location on a Google Map.
- **Add New Profiles**: Users can add new profiles via a form.
- **Navigation**: Smooth routing between the Home Page and Profile Details Page.

## Technologies Used

- **React**: Frontend framework for building UI components.
- **Vite**: Fast build tool for modern web projects.
- **React Router**: For handling navigation and routing.
- **Google Maps API**: For rendering interactive maps.
- **CSS**: Styling for components and pages.

## Folder Structure

```
project-root/
├── src/
│   ├── data/
│   │   ├── people.json
│   ├── pages/
|   |   ├── HomePage.css
│   │   ├── HomePage.jsx
│   │   ├── ProfileDetailsPage.jsx
│   │   ├── ProfileDetailsPage.css
│   │   ├── MapComponent.jsx
│   │   ├── MapComponent.css
│   ├── App.css
│   ├── App.jsx
│   ├── main.jsx
├── vite.config.js
├── package.json
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/profile-viewer.git
   cd profile-viewer
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the application in your browser at the URL displayed in the terminal (e.g., `http://localhost:5173`).

## Usage

### Adding Profiles

1. Go to the Home Page.
2. Fill in the profile details in the form provided.
3. Click "Add Profile" to save the profile.

### Viewing Profiles

1. On the Home Page, click the "Profiles" button to navigate to the Profile Details Page.
2. Browse the list of profiles and click "Location" on any profile to view it on the map.

### Viewing Map

1. On the Profile Details Page, click "Location" for any user to see their location displayed on a Google Map.
2. Use the "Close" button to exit the map view.

## Configuration

### Google Maps API Key

Replace `AIzaSyC0X2rh0M-GZMze8LzQJQ4mXw_GVzodQOs` in `MapComponent.jsx` with your own Google Maps API key.

## JSON File

The profiles are loaded from `people.json`. You can update this file to change the default profiles.

## Contributing

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request.

## Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [Google Maps API](https://developers.google.com/maps/documentation/javascript/overview)

