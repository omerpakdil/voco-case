import mongoose from "mongoose";
const { Schema,model } = mongoose;

//  Restaurant collection

const restaurantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    logo: { type: String },
    address: {
        city: { type: String, required: true },
        district: { type: String, required: true },
        fullAddress: { type: String, required: true },
        location: {
            type: { type: String, enum: ['Point'], default: 'Point' },
            coordinates: { type: [Number], required: true },
        },
    },
    branches: [{ 
        city: { type: String, required: true },
        district: { type: String, required: true },
        fullAddress: { type: String, required: true },
        location: {
            type: { type: String, enum: ['Point'], default: 'Point' },
            coordinates: { type: [Number], required: true },
        },
    }],
    menu: [{
        name: { type: String, required: true },
        price: { type: Number, required: true },
        content: { type: String },
        coverImage: { type: String },
    }],
    types: [{ type: String }],
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
