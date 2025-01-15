const mongoose = require('mongoose');
const { Schema } = mongoose;

const registrationSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ['highprep', 'midprep', 'lowprep', 'noprep'],
      required: true,
    },
    ps: {
      type: String,
      required: true,
    },
    membersNew: [
      {
        name: {
          type: String,
          required: true,
          trim: true,
          minlength: 2,
        },
        phoneNumber: {
          type: String,
          required: true,
          validate: {
            validator: function (v) {
              return /^\+?[1-9]\d{1,14}$/.test(v); // Validates international phone numbers
            },
            message: (props) => `${props.value} is not a valid phone number.`,
          },
        },
        emailId: {
          type: String,
          required: true,
          
        },
        department: {
          type: String,
          required: true,
          
        },
        year: {
          type: Number,
          required: true,
          
        },
        programme: {
          type: String,
          required: true,
          trim: true,
          minlength: 3,
        },
      },
    ],
  },
  { timestamps: true }
);

// Validation for the members count based on the selected category
registrationSchema.pre('save', function (next) {
  const registration = this;
  const category = registration.category;
  const membersCount = registration.membersNew.length;

  let maxMembers = 0;

  // Check max members based on the category
  switch (category) {
    case 'highprep':
      maxMembers = 8;
      break;
    case 'midprep':
      maxMembers = 6;
      break;
    case 'lowprep':
      maxMembers = 4;
      break;
    case 'noprep':
      maxMembers = 2;
      break;
    default:
      maxMembers = 0;
      break;
  }

  // Validation: Ensure the number of members fits the category
  if (membersCount > maxMembers) {
    return next(
      new Error(`You can only have up to ${maxMembers} members for the selected category.`)
    );
  }

  if (membersCount < 1) {
    return next(new Error('At least one member is required.'));
  }

  next();
});

// Create a Registration model based on the schema
const Registration = mongoose.model('Registration', registrationSchema);

module.exports = Registration;
