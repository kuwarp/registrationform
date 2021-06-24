const mongoose=require('mongoose')

mongoose.connect("mongodb://localhost:27017/reg",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
    
}).then(()=>{
    console.log(`successful`);
}).catch((err)=>{
    console.log(`Abort`);
})