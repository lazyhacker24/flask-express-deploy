const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from Express Frontend!');
});

app.get('/call-backend', async (req, res) => {
    try {
        const response = await axios.get('http://<BACKEND_IP>:5000/');
        res.send(`Backend says: ${JSON.stringify(response.data)}`);
    } catch (err) {
        res.send('Error connecting to backend');
    }
});

app.listen(3000, () => console.log('Frontend running on port 3000'));
