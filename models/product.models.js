const mongoose = require("mongoose");
const prodcutSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true["please enter product name"],
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const product=mongoose.model("product",prodcutSchema);
module.exports=product;
