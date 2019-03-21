// var linkTodo = "jsonplaceholder.typicode.com/todos/1";
var linkPhoto = "jsonplaceholder.typicode.com/photos";
var submitButton = document.getElementById("submit-btn");

// version arrow function
function fetchData(linkPhoto) {
    fetch('https://' + linkPhoto)
        .then(response => response.json())
        .then(data => {
            var start = 0,
                end = 5;
            // console.log(data.length, ":value of data length");
            for (let index = start; index < end; index++) {
                // console.log(data[index]);
                var element = '';
                element += '<a href="https://' + 'populify.com' + '/">'
                element += '<img style="width: 200px; height: 200px;" src="' + data[index].url + '" alt="images-' + index + '" srcset="' + data[index].url + '"></img>'
                element += '</a>';
                // append element
                document.getElementById("draw-html").innerHTML += element;
            }
        });
}
fetchData(linkPhoto);

submitButton.addEventListener("click", function () {
    fetchData(linkPhoto);
}, false);