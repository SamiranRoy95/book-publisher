const searchInput=document.getElementById("search__input");
const searchBtn=document.getElementById("search__btn");
const errorDiv=document.getElementById("error");




searchBtn.addEventListener("click",function(){

    const search=searchInput.value;
    if(search===""){
        errorDiv.innerText="search result can not be empty";
    }
    searchInput.value="";
    const url=`https://openlibrary.org/search.json?q=${search}`;
    
    fetch(url)
    
    .then((res)=>res.json())
    .then((data)=>display(data.docs))
    

});


const display=(docs)=>{
    
    const searchResult=document.getElementById("display__data");
    
    
    docs.forEach(book => {
        
        
        const div=document.createElement("div")
        div.classList.add("search");
        div.innerHTML=`
        <img src="${book.cover_i}"/>

        <h1> ${book.title}</h1>
        <h2>${book.author_name}</h2>
        <h2>${book.publisher}</h2>
        <h2>${book.first_publish_year}</h2>
        
        `
        searchResult.appendChild(div)
        
    });

}

