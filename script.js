import express from 'express';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import bodyParser from 'body-parser';

const app = express();

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYWMojIeGwn1pBFN7fdVs8_nHWshG3XG8",
  authDomain: "amigos-397f7.firebaseapp.com",
  projectId: "amigos-397f7",
  storageBucket: "amigos-397f7.appspot.com",
  messagingSenderId: "1041133258014",
  appId: "1:1041133258014:web:4282e979936711e236b50f",
  measurementId: "G-VEK8MGQ4DT",
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase);

// Middlewares
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded data from the form
app.use(bodyParser.json()); // Parse JSON data
app.use(express.static('public')); // Serve static files like HTML

// Handle form data submission via POST request
app.post('/submit-form', async (req, res) => {
  const { name, phone, state, country, pin, email, message } = req.body;

  // Add to Firestore
  try {
    await addDoc(collection(db, 'contacts'), {
      name,
      phone,
      state,
      country,
      pin,
      email,
      message,
      timestamp: new Date(), // Optional: Add a timestamp
    });
    res.status(200).send('Form submitted successfully!');
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).send('Error submitting form!');
  }
});

// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

