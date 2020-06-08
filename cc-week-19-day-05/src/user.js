const mongoose = require('mongoose');
const fs = require('fs');
// make a connection
mongoose.connect('mongodb://localhost:27017/task-manager-api',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
});


const UserSchema = new mongoose.Schema({
    author:String,
    country:String,
    imageLink:String,
    language:String,
    link:String,
    pages:Number,
    title: String,
    year:Number

})
const user = fs.readFileSync('1st.json')
const obj = JSON.parse(user)
console.log(obj)
const User = mongoose.model('User',UserSchema,'userstore')
User.collection.insertMany(obj, function (err, docs) {
    if (err){ 
        return console.error(err);
    } else {
      console.log("Multiple documents inserted to Collection");
    }
  });

module.exports=User