import Income from "../modules/incomeModule.js";

export const addIncome = async (req, res) => {
    const{title,amount,category,description,date}=req.body;

    try {
        //validation
        if (!title || !amount || !date || !category) {
            return res.status(400).json({ message: "All fields are required" });
        }

        if (!amount || amount <= 0) {
            return res.status(400).json({ message: "Amount must be positive" });
        }
        const income = new Income({
            title, amount, date, category, description
        });

        await income.save()    //saving the database income 

        console.log(income);
        return res.status(200).json({ message: "Income is saved" });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};


export const getIncomes = async (req, res) => {
    try {
        const incomes = await Income.find().sort({ createdAt: -1 });
        return res.status(200).json(incomes);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

export const deleteIncome = async (req, res) => {
    const { id } = req.params;

    try {
        const income = await Income.findByIdAndDelete(id);
        if (income) {
            res.status(200).json({ message: "Income has been deleted" });
        } else {
            res.status(404).json({ message: "Income not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};