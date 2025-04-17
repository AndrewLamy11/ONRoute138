const mongoose = require("mongoose");
const { stringify } = require("querystring");

const truckCompaniesSchema = new mongoose.Schema({
  TruckCompany: {
    type: String,
  },
  PickupLocation: {
    type: String,
    required: true,
  },
  REF_DATE: {
    type: Number,
    required: true,
  },

  UOM: {
    type: String,
    required: true,
  },

  VALUE: {
    type: Number,
    required: true,
  },

  FleetandEquipmentStatistics: {
    type: String,
    required: true,
  },
});

const TruckCompanies = mongoose.model(
  "TruckCompanies",
  truckCompanySchema,
  "TruckCompanies"
);

module.exports = TruckCompanies;
