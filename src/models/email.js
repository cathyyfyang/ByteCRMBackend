const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema(
  {   
    type: {
      type: String,
      required: true,
    },

    value:{
        type: String,
        required:false,
    },

    description:{
        type: String,
        required:true,
    },

    time: {
        type: String,
        required: true,
    },

    date: {
        type: String,
        required: true,
    },

    contacts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Contact' }],
       

    user:{
        type: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        select: false
    },

   
    __v: {
      type: Number,
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

const Model = mongoose.model('Email', emailSchema);

module.exports = Model;
