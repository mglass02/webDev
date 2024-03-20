// Import required modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Set view engine to EJS
app.set('view engine', 'ejs');

// Set views directory
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
    res.render('home'); // Render the home.ejs file
});

app.get('/home', (req, res) => {
    res.render('home'); // Render the home.ejs file
});

app.get('/about', (req, res) => {
    res.render('about'); // Render the about.ejs file
});

app.get('/contact', (req, res) => {
    res.render('contact'); // Render the about.ejs file
});

app.get('/cards', (req, res) => {
    res.render('cards'); // Render the about.ejs file
});

app.get('/signUp', (req, res) => {
    res.render('signUp'); // Render the about.ejs file
});

app.get('/login', (req, res) => {
    res.render('login'); // Render the about.ejs file
});

// Define routes for members post log in
app.get('/wishlist', (req, res) => {
    res.render('wishlist'); // Render the about.ejs file
});

app.get('/collection', (req, res) => {
    res.render('collection'); // Render the about.ejs file
});

app.get('/account', (req, res) => {
    res.render('account'); // Render the about.ejs file
});

// Handle contact form submission
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    // You can process the email data here
    // For now, let's just log the data to the console
    console.log('Received contact form submission:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Optionally, you can send an email notification here

    // Send a response back to the client
    res.send('Message received! We will get back to you soon.');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});