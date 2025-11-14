const mongoose = require('mongoose');
require('dotenv').config();

const User = require('./models/User');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/alram-db')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Create admin user
async function createAdminUser() {
  try {
    const adminUser = await User.findOne({ email: 'admin@example.com' });
    
    if (!adminUser) {
      await User.create({
        email: 'admin@example.com',
        password: 'admin123', // This will be hashed automatically
        isAdmin: true
      });
      console.log('Admin user created successfully');
    } else {
      console.log('Admin user already exists');
    }
  } catch (error) {
    console.error('Error creating admin user:', error);
  } finally {
    mongoose.connection.close();
  }
}

createAdminUser();