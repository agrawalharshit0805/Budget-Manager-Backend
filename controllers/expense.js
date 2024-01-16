import Expense from "../modules/ExpenseModule.js";

export const addExpense = async (req, res) => {
    const{title,amount,category,description,date}=req.body;

    const expense = new Expense({
        title, amount, date, category, description
    });

    try {
        //validation
        if (!title || !amount || !date || !category) {
            return res.status(400).json({ message: "All fields are required" });
        }
        if (amount <= 0 || !amount) {
            return res.status(400).json({ message: "Amount must be positive" });
        }
        await expense.save()    //saving the database income 
        res.status(200).json({ message: "Expense is saved" });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
    console.log(expense);
};

export const getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find().sort({ createdAt: -1 });
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

export const deleteExpense = async (req, res) => {
    const { id } = req.params;

    try {
        const expense = await Expense.findByIdAndDelete(id);
        if (expense) {
            res.status(200).json({ message: "Expense has been deleted" });
        } else {
            res.status(404).json({ message: "Expense not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};