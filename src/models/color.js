import mongoose, { Schema } from "mongoose";

const colorSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },

    valor: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: function (v) {
          const hexRegex = /^#([A-Fa-f0-9]{6})$/;
          const rgbRegex = /^rgb\(\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\s*\)$/;

          return hexRegex.test(v) || rgbRegex.test(v);
        },
        message: (props) => `${props.value} no es un color HEX ni RGB válido`,
      },
    }
  },
  {
    timestamps: true,
  }
);

const Color = mongoose.model("Color", colorSchema);
export default Color;
