var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var userSchema = new mongoose.Schema({
 		username: {type:String,default:null},
		date :{type:String,default:null},
		email:{type:String,default:null},
		phone:{type:String,default:null},
		status:{type:String,default:null}
		
});

// userSchema.index({type: 2, email: 1 },{unique: true});
// userSchema.index({type: 1, email: 1 },{unique: true});
userSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Users', userSchema);

