// Assuming you have already connected to MongoDB using mongoose
const Registration = require('../models/registration'); // Adjust path as necessary

// Function to add a new registration
exports.addRegistration = async (req,res) => {
    console.log(req.body);
    const registrationData = req.body.newRegistartion
    console.log("function called")
    console.log(registrationData)
    console.log(registrationData.membersNew)
  try {
    // Create a new registration instance with the data passed
    const registration = new Registration(registrationData);
console.log("saving");
console.log(registration)
    // Save the registration to the database
    const savedRegistration = await registration.save();

    res.status(201).json({ message: 'User added successfully!' });
  } catch (error) {
    console.log(error);
    // If there's an error (validation errors or database errors), handle it
    if (error.name === 'ValidationError') {
      return { success: false, message: 'Validation error: ' + error.message };
    } else {
      return { success: false, message: 'Error adding registration: ' + error.message };
    }
  }
};
exports.fetchRegistrationByTitleAndPs = async (req, res) => {
  const { title, ps } = req.params; // Extract title and ps from request parameters
  try {
    const registration = await Registration.findOne({ title, ps });
    if (!registration) {
      return res.status(404).json({ success: false, message: 'No registration found with the given title and ps.' });
    }
    res.status(200).json({ success: true, data: registration });
  } catch (error) {
    console.error('Error fetching registration:', error.message);
    res.status(500).json({ success: false, message: 'Error fetching registration.' });
  }
};

// Example usage


// Call the function to add a new registration

