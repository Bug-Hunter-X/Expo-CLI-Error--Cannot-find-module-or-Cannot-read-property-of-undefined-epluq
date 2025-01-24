// Corrected package.json
{
  "name": "expo-bug-example",
  "version": "1.0.0",
  "main": "index.js",
  "dependencies": {
    "expo": "^48.0.0", // Or the appropriate version
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-native": "~0.71.8"
  },
  "devDependencies": {
    "@babel/core": "^7.20.0"
  },
  "private": true,
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web"
  }
}

//bug.js (example of problematic project setup)
//This file is intentionally left blank to highlight the package.json issue
//The error occurs even if this file is empty, because of the problem in package.json
