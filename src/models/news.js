const mongoose = require('mongoose')
const moment = require ('moment');

const News = mongoose.model('News', {
    description: {
        type: String,
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
        uppercase: true,                   
      },
      date:{
        type:Date,
        trim : true,
        default:function(){
          return moment().add(2,'hour')
        }
    }
})

module.exports = News