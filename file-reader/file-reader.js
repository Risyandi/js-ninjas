// how to get file uploading by you
var openFile = function (event) {
    var input = event.target;
        console.log(input, ":value input");
    
    var reader = new FileReader();
        console.log(reader, ":value reader");
    
    reader.onload = function () {
        var dataUrl = reader.result;
            console.log(dataUrl, ":value dataUrl");
        
        var output = document.getElementById('output');
            console.log(output, ":value output");
        
        output.src = dataUrl;
    };
    reader.readAsDataURL(input.files[0]);
};