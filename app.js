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
    res.render('home'); 
});

app.get('/home', (req, res) => {
    res.render('home'); 
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact'); 
});

app.get('/cards', (req, res) => {
    res.render('cards'); 
});

app.get('/signUp', (req, res) => {
    res.render('signUp'); 
});

app.get('/login', (req, res) => {
    res.render('login'); 
});

// Define routes for members post log in
app.get('/wishlist', (req, res) => {
    res.render('wishlist'); 
});

app.get('/collection', (req, res) => {
    res.render('collection'); 
});

app.get('/account', (req, res) => {
    res.render('account'); 
});

// Handle contact form submission
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    // logging data to console for MVP (CHANGE LATER)  
    console.log('---------------------------')
    console.log('Received contact form submission:');
    console.log(' - Name:', name);
    console.log(' - Email:', email);
    console.log(' - Message:', message);
    
    res.send("Thanks for contacting us, we will reply soon!");

});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});