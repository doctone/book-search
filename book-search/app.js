$('document').ready(function () {
    const outputList = document.getElementById("list-output");
    const bookUrl = "https://www.googleapis.com/books/v1/volumes?q=";
    let searchData;
    
    // making enter key trigger button
    $("#search-box").keyup(function(event) {
            if (event.keyCode === 13) {
                    $("#search").click();
                }
            });
    
            
    // search function on button
    $("#search").click(function() {
        outputList.innerHTML = '';
        searchData = $("#search-box").val();
        if(searchData === '' || searchData === null) {
            alert("error!");
        } else {
            $.ajax({
                url: bookUrl + searchData,
                dataType: 'json',
                success: function(res){
                    const books = res.items;
                    for (let i=0; i<books.length; i+=1) {
                        const bookId = books[i].id
                            outputList.innerHTML += `
                            <div class="card" style="width: 14rem;">
                                <img src="${books[i].volumeInfo.imageLinks.thumbnail}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${books[i].volumeInfo.title}</h5>
                                    <p id="pageCount${i}"class="card-text">Total pages : ${books[i].volumeInfo.pageCount}</p>
                                    <a id="${i}" href="books.html?${bookId}" class="btn btn-primary book-select">Calculate reading time</a>
                                </div>
                            </div>
                            `
                            console.log(books);
                        }
                    }
                })
                    $(".book-list").css("visibility","visible")
                }
            }

)
        })
