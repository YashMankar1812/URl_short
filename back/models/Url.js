
import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
  longUrl: { type: String, required: true },
  // shortUrl: { type: String, required: true},
  date: { type: Date, default: Date.now },
  clicks: { type: Number, default: 0 },
});

const UrlModel = mongoose.model('Url', urlSchema);

export default UrlModel;