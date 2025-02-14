const cloudinary = require("cloudinary").v2;
require("dotenv").config();

// Cloudinary configuration
const connectCloudinary = () => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_SECRET_KEY,
    });
    console.log("Cloudinary Connected");
  } catch (error) {
    console.error("Failed to connect to Cloudinary:", error);
  }
};

module.exports = connectCloudinary;
