var mongoose = require("mongoose");
var Employee = require("../models/Employee");

var employeeController = {};

employeeController.list = (req, res) => {
    Employee.find({}).exec((err, employees) => {
        if(err) {
            console.log("Error: ", err);
        }
        else {
            res.send("Employees list");
        }
    });
};