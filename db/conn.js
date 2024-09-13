const mongoose = require("mongoose");

// Creating a database connection
mongoose.connect("mongodb://0.0.0.0:27017/medi-lock", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB connected successfully");
}).catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
    // If there is an error connecting to MongoDB, exit the application
    process.exit(1);
});

// Exporting the mongoose instance
module.exports = mongoose;
