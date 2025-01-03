const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors()); // Add CORS support

// Serve static files from the appropriate directories
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.static(path.join(__dirname, 'html files')));

// Define Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'html files', 'index.html'));
});

app.get('/postjob', (req, res) => {
    res.sendFile(path.join(__dirname, 'html files', 'postjob.html'));
});

app.get('/jobs', (req, res) => {
    res.sendFile(path.join(__dirname, 'html files', 'jobs.html'));
});

app.get('/jobs/:id', (req, res) => {
    res.sendFile(path.join(__dirname, 'html files', 'job-details.html'));
});

app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'html files', 'profile.html'));
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'html files', 'auth.html'));
});

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/jobsDB', {
    // Removed deprecated options
})

.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

// Define Job schema and model
const jobSchema = new mongoose.Schema({
    title: String,
    description: String,
    pay: Number,
    skills: [String]
});

const Job = mongoose.model('Job', jobSchema);

// Create a new job
app.post('/jobs', async (req, res) => {
    try {
        console.log('Received data:', req.body);
        const job = new Job(req.body);
        await job.save();
        console.log('Job created:', job);
        res.status(200).send(job);
    } catch (error) {
        console.error('Error creating job:', error);
        res.status(500).send('Error creating job');
    }
});

// API Endpoint to get all jobs
app.get('/api/jobs', async (req, res) => {
    const jobs = await Job.find();
    res.send(jobs);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, 'localhost', () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});




