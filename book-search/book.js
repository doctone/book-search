$('document').ready(function () {
    $(".book-list").css("visibility","visible");
    let searchData;
    const outputList = document.getElementById("list-output");
    const bookUrl = "https://www.googleapis.com/books/v1/volumes/";
    const index = document.URL.indexOf('?');
    if (index > 0) {
    searchData = document.URL.substring(index+1, document.URL.length);
    } else {searchData = ''}
    fetch(bookUrl+searchData)
    .then(res => res.json())
    .then(data => {

    
    // individual book selection info
    outputList.innerHTML += 
    `
    <div class="card" style="width: 14rem;">
        <img src="${data.volumeInfo.imageLinks.thumbnail}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${data.volumeInfo.title}</h5>
            <p class="card-text text-center">Total pages : ${data.volumeInfo.pageCount}</p>
        </div>
    </div>

    <div class="book-description text-center mt-5"> 
    <p>
    If you wanted to read this book <b>1 week</b>, you would need to read <b>${Math.round(data.volumeInfo.pageCount/7)} pages per day.</b> Good luck!
    </p>
    <p>
    If you wanted to read this book <b>1 month</b>, you would need to read <b>${Math.round(data.volumeInfo.pageCount/30)} pages per day.</b> Slightly more managable..
    </p>
    <p>
    If you wanted to read this book <b>6 months</b>, you would need to read <b>${(Math.round(data.volumeInfo.pageCount/180)) === 0 ? 1 : Math.round(data.volumeInfo.pageCount/180)} pages per day.</b> Now we're talking.. Get to work..
    </p>
    </div>
    `
    })
})
        