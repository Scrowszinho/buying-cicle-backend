import nodeRestful from "node-restful";
import mongoose from "mongoose";

const buyingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, default: Date.now },
  value: { type: Number, min: 0, required: true },
});

const statusSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, default: Date.now },
  status: {
    type: Number,
    required: true,
    uppercase: true,
    enum: ["CANCELED", "PAID", "PENDING"],
  },
  default: "PENDING",
});

const buyingCycleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    date: { type: Date, default: Date.now },
    buying: [buyingSchema],
    status: [statusSchema]
})
module.exports = restful.model('BuyingCicle', buyingCycleSchema);