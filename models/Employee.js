var mongoose = require("mongoose");

var EmployeeSchema = new mongoose.Schema({
    name: String,
    adress: String,
    position: String,
    salary: Number,
    updated_at: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("Employee", EmployeeSchema);