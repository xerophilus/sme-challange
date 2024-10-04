# Expo Image Picker Demo

This project demonstrates how to use image picking and camera functionality in a React Native app using Expo. It features a simple image gallery with a carousel display and options to pick images from the device or take new photos using the camera.

## Features

- Pick multiple images from the device gallery
- Take photos using the device camera
- Display selected images in a carousel
- Responsive design that adapts to different screen sizes
- Proper handling of camera permissions

## Technologies Used

- React Native
- Expo
- expo-image-picker: For accessing the device's image gallery and camera
- react-native-reanimated-carousel: For displaying images in a carousel
- react-native-safe-area-context: For handling safe areas on different devices
- @expo/vector-icons: For using Ionicons in the UI

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```
3. Start the Expo development server:
   ```
   npx expo start
   ```

## Usage

- Tap "Pick Images" to select multiple images from your device's gallery
- Tap "Take Photo" to open the camera and take a new photo
- Selected images will be displayed in a carousel at the top of the screen
- If no images are selected, a placeholder will be shown

## Project Structure

- `app/(tabs)/index.tsx`: Main component containing the image picker and display logic
- `app/_layout.tsx`: Root layout component (if applicable)
- Other configuration files (e.g., `app.json`, `babel.config.js`, etc.)