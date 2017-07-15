const users = [{
	id: 1,
	name: 'Nikita',
	email: 'nikita@gmail.com'
},{
	id: 2,
	name: 'Slava',
	email: 'slava@gmail.com'
},{
	id: 3,
	name: 'Alex',
	email: 'alex@gmail.com'
},{
	id: 4,
	name: 'Pavel',
	email: 'pavel@gmail.com'
}];

module.exports = {
	findAll: (callback) => {
		callback(null, users);
	},

	findOne: (id, callback) => {
		const {err, user} = findUser(id);
		callback(err, user);
	},

	add: (user, callback) => {
		if (typeof user.id !== 'undefined'){
			users.push(user);
			callback(null);
		} else {
			callback(new Error('Did not specify user\'s ID'));
		}
	},

	findOneAndDelete: (id, callback) => {
		let {err, user, index} = findUser(id);
		if (typeof index !== 'undefined'){
			users.splice(index, 1);
		} else {
			err = new Error('User with such ID not found');
		}
		callback(err);
	},

	findOneAndUpdate: (id, user, callback) => {
		const {err, index} = findUser(id);
		users[index] = Object.assign(users[index], user);
		callback(err);
	}
};