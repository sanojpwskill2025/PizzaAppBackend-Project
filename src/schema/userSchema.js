const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First Name is required"],
        minlength: [5, "First name must be atleast 5 character long"],
        lowercase: true,
        trim: true, //the user gives extra spaces then it will automatically remove it
        maxlength: [20, "First name should be less than or equal to 20 characters"]
    },

    lastName: {
        type: String,
        required: [true, "First Name is required"],
        minlength: [5, "First name must be atleast 5 character long"],
        lowercase: true,
        trim: true, //the user gives extra spaces then it will automatically remove it
        maxlength: [20, "First name should be less than or equal to 20 characters"]
    },

    mobileNumber: {
        type: String,
        trim: true,
        maxlength: [10, "Phone number should be of length 10"],
        minlength: [10, "Phone number should be of length 10"],
        unique: [true, "Fone number is already in use"],
        required: [true, "phone number should be provided"]
    },
    email: {
        type: String,
        trim: true,
        required: [true, "Email should be provided"],
        unique: [true, "Email is already in use"],
        match: [/^\w+([\._]?\w+)*@\w+([\._]?\w+)*(\.\w{2,3})+$/, 'please fill a valid email address']
    },
     password: {
         type: String,
         trim: true,
         maxlength: [10, "password should be of length 10"],
         minlength: [6, "password should be of length 10"],
         unique: [true, "password is already in use"],
         required: [true, "password should be provided"]
    },
    role:{
        type: String,
        enum: ["USER", "ADMIN"],
        default: "USER"
    }
},{
    timestamps: true //For creating date and update date by mongoose
});

userSchema.pre('save', async function (){
    //here u can modify your user before it is saved in mongodb 
    console.log('Executing pre save hook');
    console.log(this);
    const hashedpassword = await bcrypt.hash(this.password, 10);
    console.log(hashedpassword);
    this.password = hashedpassword;
    console.log('Executing pre save hook and now creating user');

})

const User = mongoose.model("User", userSchema); //collection

module.exports = User;