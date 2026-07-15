const facultySchema = new mongoose.Schema({
    id:{
        type : Number,
        required: true
    },
    name : {
        type : String,
        required: true
    },
    email : {
        type : String,
        required: true
    },
    password : {
        type : number,
        required: false
    },
    status :{
        type : String,
        required : true
    }
});

const Faculty = mongoose.model('Faculty', facultySchema);

export default Faculty;
