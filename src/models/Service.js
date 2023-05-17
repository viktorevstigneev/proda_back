const { Schema, model } = require('mongoose');

const ServiceSchema = new Schema({
	name: {
		type: String,
	},
	price: {
		type: String,
	},
	description: {
		type: String,
	},
});

const Service = model('Service', ServiceSchema);

const createService = (data) => {
	return Service.create(data);
};

const getServiceData = () => {
	return Service.find();
};

const getServiceOne = (id) => {
	return Service.findOne({ _id: id });
};

const deleteService = (id) => {
	return Service.deleteOne({ _id: id });
};

const updateService = (id, data) => {
	return Service.updateOne({ _id: id }, { ...data });
};

module.exports = {
	createService,
	getServiceData,
	deleteService,
	updateService,
	getServiceOne,
	Service,
};
