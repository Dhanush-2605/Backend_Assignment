const mongoose = require("mongoose");

const AddressSchema = mongoose.Schema(
  {
    Address: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Address", AddressSchema);
