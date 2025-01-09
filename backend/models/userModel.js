const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },  // Make 'username' unique
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'user'], default: 'user' },
});


userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.comparePassword = async function (password) {
 console.log(bcrypt.hash(password));
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
