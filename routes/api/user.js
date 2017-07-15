const router = require('express').Router();
const userService = require('../../services/user');


router.get('/:id', (req, res, next) => {
	userService.findUser(Number(req.params.id), (err, data) => {
		if (!err){
			res.data = data;
			res.json(res.data);
		} else {
			res.status(400);
			res.end();
		}
	});
});

router.post('/', (req, res, next) => {
	const obj = req.body;
	userService.add(obj, (err, data) => {
		if (!err) {
			res.data = data.rows[0];
		}
		res.json(res.data);
	});
});

router.put('/:id', (req, res, next) => {
	const obj = req.body;
	userService.findUserAndUpdate(Number(req.params.id), obj, (err, data) => {
		if (!err){
			res.json(res.data);
		} else {
			res.status(400);
			res.end();
		}
	});
});

router.delete('/:id', (req, res, next) => {
	userService.findUserAndDelete(Number(req.params.id), (err, data) => {
		if (!err){
			res.json(res.data);
		} else {
			res.status(400);
			res.end();
		}
	});
});

