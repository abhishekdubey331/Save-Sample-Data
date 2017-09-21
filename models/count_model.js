/**
 * Created by abhishek on 14/5/17.
 */
const mongoose=require('mongoose');

const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

const Schema=mongoose.Schema;

const CountSchema=new Schema({
    count: { type: Number, default: 0 },
    user_id: {type: String, default: 'abhishek'},
});

CountSchema.plugin(autoIncrement.plugin, 'count_data');
const Count =mongoose.model('count_data',CountSchema);

module.exports=Count;
