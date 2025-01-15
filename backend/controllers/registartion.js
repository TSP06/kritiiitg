// Assuming you have already connected to MongoDB using mongoose
const Registration = require('../models/registration'); // Adjust path as necessary

// Function to add a new registration
exports.addRegistration = async (req, res) => {
  console.log(req.body);
  const registrationData = req.body.newRegistration; // Corrected typo in "newRegistration"
  console.log("function called");
 // console.log(registrationData);
 // console.log(registrationData.membersNew);

  try {
    // Validate membersNew data
    if (!Array.isArray(registrationData.membersNew) || registrationData.membersNew.length === 0) {
      return res.status(400).json({ success: false, message: 'Members list cannot be empty.' });
    }

    

    // Create a new registration instance with the validated data
    const registration = new Registration(registrationData);
    console.log("saving");
    console.log(registration);

    // Save the registration to the database
    const savedRegistration = await registration.save();

    res.status(201).json({ success: true, message: 'Registration added successfully!', data: savedRegistration });
  } catch (error) {
    console.log(error);

    // If there's an error (validation errors or database errors), handle it
    if (error.name === 'ValidationError' || error.message.includes('Invalid')) {
      return res.status(400).json({ success: false, message: 'Validation error: ' + error.message });
    } else {
      return res.status(500).json({ success: false, message: 'Error adding registration: ' + error.message });
    }
  }
};


 exports.fetchRegistrationByTitleAndPs=async(req,title, ps,res) =>{
   
  try {
    const registration = await Registration.findByTitleAndPs(title, ps);
    if (!registration) {
      console.log('No registration found with the given title and ps.');
    } else {
      console.log('Registration found:', registration);
    }
  } catch (error) {
    console.error('Error fetching registration:', error.message);
  }
};
