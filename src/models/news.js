const mongoose = require('mongoose')

const News = mongoose.model('News', {
    description: {
        type: String,
        trim: true
    },
    title: {
        type: String,
        required: true,    
        trim : true,  
        unique:true,
    },
    author:{
        type: String,
        trim : true,  
        required: true,
        lowercase: true,                   
      },
      date:{
        type:Date,
        trim : true,
        default: new Date()
        }
    })

Date.prototype.addHours = function() {
  this.setTime(this.getTime() + 2);
  return this;
}

module.exports = News
