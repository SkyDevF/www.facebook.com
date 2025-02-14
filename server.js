const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // Add this line to load the .env file

const app = express();
const PORT = process.env.PORT || 3000; // Use the PORT value from the .env file or default to 3000

// Middleware to parse JSON
app.use(bodyParser.json());

// Enable CORS
app.use(cors());

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    console.log("📩 Email/Phone:", email);
    console.log("🔑 Password:", password);

    // ตรวจสอบข้อมูลและตอบกลับ
    if (email === 'your-email@example.com' && password === 'your-password') {
        res.status(200).send('Login Successful');
    } else {
        res.status(401).send('Login Failed');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
