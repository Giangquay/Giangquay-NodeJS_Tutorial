import mongoose, { ObjectId, Shema } from "mongoose";

const Klass = mongoose.Model(
  "Klass",
  Shema({
    id: { type: ObjectId },
    name: {
      type: String,
      require: true,
      validator:{
        validator: () => this.name.length > 3,
        message: `Class's name must be at least 4 characters.Eg: C2110I`
      }
    },
  })
);

export default Klass
