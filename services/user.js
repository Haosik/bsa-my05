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

function findUser(id){
	const err = null;
	if (typeof id === 'undefined'){
		err = new Error('id is undefined');
	}

	let index;
	const user = users.find((el, ind) => {
		if (el.id === id){
			index = ind;
			return true;
		} else {
			return false;
		}
	});
	return {user, index, err};
}

module.exports = {
	findUsers: (callback) => {
		callback(null, users);
	},

	findOneUser: (id, callback) => {
		const {err, user} = findUser(id);
		callback(err, user);
	},

	addUser: (user, callback) => {
		if (typeof user.id !== 'undefined'){
			users.push(user);
			callback(null);
		} else {
			callback(new Error('Did not specify user\'s ID'));
		}
	},

	findOneUserAndUpdate: (id, user, callback) => {
		const {err, index} = findUser(id);
		users[index] = Object.assign(users[index], user);
		callback(err);
	},

	findOneUserAndDelete: (id, callback) => {
		let {err, user, index} = findUser(id);
		if (typeof index !== 'undefined'){
			users.splice(index, 1);
		} else {
			err = new Error('User with such ID not found');
		}
		callback(err);
	}
};