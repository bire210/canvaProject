let booksCont=document.getElementById("book")
console.log(booksCont)

async function getBook(){
    try {
       const res=await fetch("https://librarymanagement-uuri.onrender.com/api/Retrieve/") ;
       const books =await res.json()
       displayBook(books)
    } catch (error) {
        window.alert(error.message)
    }
}



function displayBook(arr){
   booksCont.innerHTML="";

    arr.forEach((element,index )=> {
        let div=document.createElement("div");
        let image=document.createElement("img");
        image.src=element.posterURL;
        div.append(image)
        booksCont.append(div)
    });
}




getBook()