const express = require('express');
const multer = require('multer');

const { handleAddService, handleGetService, handleDeleteService } = require('../controllers/Service');
// const isAuthenticated = require('../utils/isAuthenticated');

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './src/uploads/');
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});

const fileFilter = (req, file, cb) => {
	if (['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/svg'].includes(file.mimetype)) {
		cb(null, true);
	} else {
		cb(null, false);
	}
};

const upload = multer({ storage, fileFilter });
const router = express();
const type = upload.single('avatar');

router.get('/service', handleGetService);
router.post('/service', type, handleAddService);
router.delete('/service', handleDeleteService);


module.exports = router;
