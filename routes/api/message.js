const router = require('express').Router();
const messageService = require('../../services/message');

router.get('/', (req, res, next) => {
	messageService.findAllMessages((err, data) => {
		if (!err) {
			res.send(data);
			res.json(res.data);
		} else {
			res.status(400);
			res.end();
		}
	});
}); 

router.get('/:id', (req, res, next) => {
	messageService.getUserContacts(req.params.id, (err, data) => {
		if (!err) {
			res.send(data);
			res.json(res.data);
		} else {
			res.status(400);
			res.end();
		}
	});
});

router.post('/', (req, res, next) => {
	const obj = req.body;
	messageService.addMessage(obj, (err, data) => {
		if (!err) {
			res.status(201);
			res.end();
		} else {
			res.status(400);
			res.end();
		}
	});
});


router.put('/:id', (req, res, next) => {
	const obj = req.body;
	messageService.findMessageAndUpdate(Number(req.params.id), obj, (err, data) => {
		if (!err){
			res.json(res.data);
		} else {
			res.status(400);
			res.end();
		}
	});
});

router.delete('/:id', (req, res, next) => {
	messageService.findMessageAndDelete(Number(req.params.id), (err, data) => {
		if (!err){
			res.json(res.data);
		} else {
			res.status(400);
			res.end();
		}
	});
});

module.exports = router;