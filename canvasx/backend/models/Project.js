import mongoose from "mongoose";

const blockSchema = new mongoose.Schema(
  {
    id: String,
    type: String,
    content: String,
    x: Number,
    y: Number,
    width: Number,
    height: Number
  },
  { _id: false }
);

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "Untitled Project"
  },
  blocks: {
    type: [blockSchema],
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Project", projectSchema);
