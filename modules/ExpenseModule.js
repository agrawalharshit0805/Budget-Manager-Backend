import mongoose, { Schema, model } from "mongoose";

const ExpenseSchema = new Schema({
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
        default: "income"
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
        required: true,
        trim: true,
        maxlength: 20
    }
}, { timestamps: true });

const Expense = model('Expense', ExpenseSchema);

export default Expense;

