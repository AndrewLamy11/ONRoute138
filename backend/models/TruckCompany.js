const mongoose = require("mongoose");
const { stringify } = require("querystring");

const truckCompanySchema = new mongoose.Schema({
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
  GEO: {
    type: String,
    required: true,
  },
  DGUID: {
    type: String,
    required: true,
  },
  UOM: {
    type: String,
    required: true,
  },
  UOM_ID: {
    type: String,
    required: true,
  },
  SCALAR_FACTOR: {
    type: String,
    required: true,
  },
  SCALAR_ID: {
    type: Number,
    required: true,
  },
  VECTOR: {
    type: String,
    required: true,
  },
  COORDINATE: {
    type: Number,
    required: true,
  },
  VALUE: {
    type: Number,
    required: true,
  },
  DECIMALS: {
    type: Number,
    required: true,
  },
  ImagePath: {
    type: String,
    required: true,
  },

  FleetandEquipmentStatistics: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
});

const TruckCompany = mongoose.model(
  "TruckCompany",
  truckCompanySchema,
  "TruckCompany"
);

module.exports = TruckCompany;
