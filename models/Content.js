import mongoose from 'mongoose';

const contentSchema = new mongoose.Schema({
  section: {
    type: String,
    required: true,
  },
  page: {
    type: String,
    required: true,
  },
  content: {
    text: String,
    images: [String],
    styles: {
      color: String,
      fontSize: String,
      fontWeight: String,
      backgroundColor: String,
    },
  },
  updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Content', contentSchema);
