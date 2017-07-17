const router = require('express').Router();
const messageService = require('../../services/message');

router.get('/:id', (req, res, next) => {
	messageService.getUserContacts(req.params.id, (err, data) => {
		if (!err) {
			res.send(data);
			res.json(res.data);
		} else {
			res.status(400);
			next(err);
		}
	});
});

module.exports = router;