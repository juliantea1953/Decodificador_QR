var fs = require("fs") // permite interactuar con los archivos del sistema
var QrCode = require('qrcode-reader'); // para decodificar codigo QR
var Jimp = require("jimp"); // procesar imagenes

var buffer = fs.readFileSync(__dirname + '/pru (5).jpg');




Jimp.read(buffer, function(err, image) {

    //image.resize(1000, 1000);
    // image.rotate(-45);
    // image.crop(209.18388366699, 166.11226558685, 119.26786422729, 118.21937799454);/// (left * imgW = x, top * imgH = y, Width * imgW = w, Height * imgH = h) /// 
     //image.rotate(30);
     //image.writeAsync('codigoEdit.png');// guardar imagen
     //image.resize(1000, 1000);
     

    if (err) {
        console.error(err);
        
    }
    var qr = new QrCode();
    qr.callback = function(err, value) {
        if (err) {
            console.log("hola")
            console.error(err);
            
           
        }
        console.log(value.result);
        console.log("value");
    };
    qr.decode(image.bitmap);

});