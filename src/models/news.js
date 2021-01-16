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
        default: new Date().addHours(2)
        }
    })

Date.prototype.addHours= function(h){
    this.setHours(this.getHours()+h);
    return this;
}

module.exports = News
