/**
 * Created by abhishek on 14/5/17.
 */
const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const WallpaperSchema=new Schema({

    id: String,
    category:String,
    hack:String

});


const Wallpaper =mongoose.model('hack_new',WallpaperSchema);

module.exports=Wallpaper;
