
const mongoose =require("mongoose")

mongoose.connect( "mongodb://localhost:27017")
.then(()=>{
    console.log("connection open")
}).catch(err=>{
    console.log(err)
    console.log("error connection failed")
})


const resturantSchema =new mongoose.Schema({
name:{
    type:String,
    required:true
},
location:{
    type:String,
    required:true
},

rating:{
    type:String,
    required:true
},
score:{
    type:Number,
    required:true
}
})

const Resturants = mongoose.model('Resturants',resturantSchema);
//const cattlebaron  = new Resturant({name:'Cattelbaron',location:'Kuilsriver',description:'Steakhouse',rating:4})

 
