// .env file exists outside of the src folder, so this helps redirect to access the .env file
require('dotenv').config()
const cors = require('cors')
const express = require('express')

const app = express()

app.use(cors({
    // Whitelisted links that are allowed to communicate with the backend speecifically (i.e. the frontend)
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173']
}))

// Simple use method to keep track of get requests when navigating through the pages.
app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
})

app.use(express.json())


// Route handlers below:
// Basic routes below for the users/developers to navigate through the pages.

app.get('/health', (req, res) => res.json({ ok: true }))

app.get('/announcement-page', (req, res) => {
    res.json({message: "Test message for the announcement page!"});
    console.log("Another test message to the announcement page!");
})

app.get('/consultant-page', (req, res) => {
    res.json({message: "Test message for the consultant page!"});
    console.log("Another test message to the consultant page!");
})

app.get('/dashboard-page', (req, res) => {
    res.json({message: "Test message for the dashboard page!"});
    console.log("Another test message to the dashboard page!");
})

app.get('/login-page', (req, res) => {
    res.json({message: "Test message for the login page!"});
    console.log("Another test message to the login page!");
})

app.get('/not-found', (req, res) => {
    res.json({message: "Test message for the not found page!"});
    console.log("Another test message to the not found page!");
})

app.get('/policy-page', (req, res) => {
    res.json({message: "Test message for the policy page!"});
    console.log("Another test message to the policy page!");
})

app.get('/profile-page', (req, res) => {
    res.json({message: "Test message for the profile page!"});
    console.log("Another test message to the profile page!");
})

app.get('/test-page', (req, res) => {
    res.json({message: "Test message for the test page!"});
    console.log("Another test message to the test page!");
})

app.get('/ticket-page', (req, res) => {
    res.json({message: "Test message for the found page!"});
    console.log("Another test message to the found page!");
})

// Setting up the port and for the server to start up and wait for incoming request on said port.
const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Server running on ${PORT}`))
