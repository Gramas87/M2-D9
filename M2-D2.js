
let genres = ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"]

let list = document.createElement("ul")
for (let i = 0; i < genres.length; i++) {
    let item = document.createElement("li")
    item.innerHTML = genres[i]
    list.appendChild(item)
}

 let div = document.createElement("div")
 div.appendChild(list)

 let body = document.getElementsByTagName("body")
 body[0].appendChild(div)
 
 