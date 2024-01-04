import mongoose from "mongoose";
const { Schema,model } = mongoose;


//  Order collection

const orderSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
    addresses: [{
        city: { type: String, required: true },
        district: { type: String, required: true },
        fullAddress: { type: String, required: true },
        location: {
            type: { type: String, enum: ['Point'], default: 'Point' },
            coordinates: { type: [Number], required: true },
        },
    }],
    comment: { type: String },
    score: { type: Number },
    dateTime: { type: Date, default: Date.now },
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
