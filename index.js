const express = require('express');
const app = express();

// Define route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to MythosCraft! Our RPG development toolkit enables creators to build immersive fantasy worlds. With an extensive library of assets and an easy-to-use world-building interface, it\'s the perfect starting point for crafting your epic RPG narrative.');
});

// Define route for the asset library page
app.get('/asset-library', (req, res) => {
  res.send('Our asset library features a wide range of high-quality 3D models, textures, and other resources that you can use to bring your fantasy world to life.');
});

// Define route for the world-building interface page
app.get('/world-building-interface', (req, res) => {
  res.send('Our world-building interface provides an intuitive and easy-to-use interface for creating and customizing your fantasy world, with support for terrain sculpting, object placement, and more.');
});

// Define route for the RPG narrative page
app.get('/rpg-narrative', (req, res) => {
  res.send('Our RPG narrative tools provide a framework for crafting immersive storylines and engaging characters, with support for branching dialogue trees, quests, and more.');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});