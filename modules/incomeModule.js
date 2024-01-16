import mongoose from 'mongoose';

const IncomeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    amount: {
        type: Number,
        required: true,
        trim: true,
    },
    type: {
        type: String,
        default: "Income",
    },
    date: {
        type: Date,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        maxlength: 50,
        trim: true,
    },
}, { timestamps: true });

const Income = mongoose.model('Income', IncomeSchema);

export default Income;

