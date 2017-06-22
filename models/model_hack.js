/**
 * Created by abhishek on 14/5/17.
 */
const mongoose=require('mongoose');

const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

const Schema=mongoose.Schema;

const WallpaperSchema=new Schema({
    category:String,
    hack:String

});

WallpaperSchema.plugin(autoIncrement.plugin, 'user_data');
const Wallpaper =mongoose.model('hack_new',WallpaperSchema);

module.exports=Wallpaper;
