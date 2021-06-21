import mongoose from 'mongoose';

// Create new variable called userScheme
const userScheme = new mongoose.Schema({
    nim: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    fakultas: {
        type: String,
        required: true,
    },
    jurusan: {
        type: String,
        required: true,
    },
    angkatan: {
        type: Number,
        required: true,
    },
});

export default mongoose.model("User", userScheme);