const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, enum: ["standard", "business", "suite", "luxury", "family"], required: true },
    description: String,
    image: String,
    price: { type: Number, required: true },
    originalPrice: { type: Number, required: true },
    rating: { type: Number, default: 4.5 },
    reviews: { type: Number, default: 202 },
    guests: { type: Number, default: 2 },
    beds: { type: Number, default: 1 },
    bathrooms: { type: Number, default: 1 },
    size: { type: String, default: "300 sq ft" },
    amenities: [String],
    // tumhara pehla schema ke fields bhi rakh sakte ho:
    roomNumber: { type: String, required: true, unique: true },
    type: { type: String, enum: ['AC', 'Non-AC'], required: true },
    isBooked: { type: Boolean, default: false },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null }
}, { timestamps: true });

module.exports = mongoose.model('Room', roomSchema);
