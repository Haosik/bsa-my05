const router = require('express').Router();
const userService = require('../../services/user');


router.get('/', (req, res, next) => {
	userService.findUsers((err, data) => {
		if (!err){
			res.send(data);
			res.json(res.data);
		} else {
			res.status(400);
			next(err);
		}
	});
});

router.get('/:id', (req, res, next) => {
	userService.findOneUser(Number(req.params.id), (err, data) => {
		if (!err){
			res.data = data;
			res.json(res.data);
		} else {
			res.status(400);
			next(err);
		}
	});
});

router.post('/', (req, res, next) => {
	const obj = req.body;
	userService.addUser(obj, (err, data) => {
		res.end();
	});
});

router.put('/:id', (req, res, next) => {
	const obj = req.body;
	userService.findOneUserAndUpdate(Number(req.params.id), obj, (err, data) => {
		if (!err){
			res.json(res.data);
		} else {
			res.status(400);
			next(err);
		}
	});
});

router.delete('/:id', (req, res, next) => {
	userService.findOneUserAndDelete(Number(req.params.id), (err, data) => {
		if (!err){
			res.json(res.data);
		} else {
			res.status(400);
			next(err);
		}
	});
});

module.exports = router;