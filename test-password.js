const bcrypt = require('bcryptjs');

const storedHash = '$2a$10$WAxLarwekGZ47ulDN2WmOewx5TYHN2IrumOR8o6Bo.r/ijH4pVKRq';
const passwordToTest = 'Password123';

bcrypt.compare(passwordToTest, storedHash).then(result => {
  console.log('Password matches:', result);
  if (result) {
    console.log('✅ LOGIN SHOULD WORK');
  } else {
    console.log('❌ PASSWORD MISMATCH - Admin user password is incorrect in the database');
  }
  process.exit(0);
}).catch(err => {
  console.log('❌ Error:', err.message);
  process.exit(1);
});
