var fs = require('fs');
var imagedata // get imagedata from POST request
fs.writeFile("/2dtodepth/infile/image.jpg", imagedata, 'binary', function(err) {
    console.log("The file was saved!");
