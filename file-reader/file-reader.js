/**
 * how to get file uploading
 * using constructor a new fileReader.
 *  */
var openFile = function (event) {
    var input = event.target;
    console.log(input, ":value input");

    var reader = new FileReader();
    console.log(reader, ":value reader");

    reader.onload = function () {
        var dataUrl = reader.result;
        console.log(dataUrl, ":value dataUrl");

        var output = document.getElementById('output-images');
        console.log(output, ":value output");

        output.src = dataUrl;
    };
    reader.readAsDataURL(input.files[0]);
};


/**
 * instance properties
 * to get error encountered during load
 */

var openFileError = function (event) {
    var input = event.target;
    console.log(input, ":value input");
    
    var reader = new FileReader();
    console.log(reader, ":value reader");
    
    /** read file when onload start */
    reader.onloadstart = function () {
        reader.abort();
    }
    
    /** read file when onload end and give a message of error */
    reader.onloadend = function () {
        console.log(reader.error.message);
        var res = document.getElementById('response-error');
        res.innerText = reader.error.message;
    }

    /** read file data as url */
    reader.readAsDataURL(input.files[0]);
}