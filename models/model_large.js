/**
 * Created by abhishek on 14/5/17.
 */
const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const WallpaperSchema=new Schema({

    url: String,
    downloads:String

});


const Wallpaper =mongoose.model('inspiration_large',WallpaperSchema);

module.exports=Wallpaper;
