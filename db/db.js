import mongoose from 'mongoose';

export const database = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Database Connected');
    } catch (error) {
        console.log('Database Connection failed', error.message);
    }
};
