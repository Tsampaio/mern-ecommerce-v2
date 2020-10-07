import bcrypt from 'bcryptjs';

const users = [
	{
		name: "Admin User",
		email: 'admin@email.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: true
	},
	{
		name: "John Doe",
		email: 'john@email.com',
		password: bcrypt.hashSync('123456', 10)
	},
	{
		name: "Rachel Terry",
		email: 'rachel@email.com',
		password: bcrypt.hashSync('123456', 10)
	},
];

export default users;