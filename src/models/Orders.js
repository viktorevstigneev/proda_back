const { Schema, model } = require('mongoose');

const OrdersSchema = new Schema({
	serviceId: {
		type: Schema.Types.ObjectId,
		ref: 'Service',
	},
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
	name: {
		type: String,
	},
	time: {
		type: String,
	},
	phone: {
		type: String,
	},
	status:{
		type: Boolean,
		default: false
	}
});

const Orders = model('Orders', OrdersSchema);

const createOrders = (data) => {
	return Orders.create(data);
};

const getOrdersData = () => {
	return Orders.find().populate('userId').populate('serviceId');
};

const getOrdersOne = (id) => {
	return Orders.findOne({ _id: id });
};

const deleteOrders = (id) => {
	return Orders.deleteOne({ _id: id });
};

const updateOrders = (id, data) => {
	return Orders.updateOne({ _id: id }, {status: data});
};

module.exports = {
	createOrders,
	getOrdersData,
	deleteOrders,
	updateOrders,
	getOrdersOne,
	Orders,
};
