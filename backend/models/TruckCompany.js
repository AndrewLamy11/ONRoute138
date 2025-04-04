const mongoose = require("mongoose");

const truckCompanySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
});

const TruckCompany = mongoose.model("TruckCompany", truckCompanySchema);

module.exports = TruckCompany;
