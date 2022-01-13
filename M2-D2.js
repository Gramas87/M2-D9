
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

 const deleteRow = () => {
    const btns = document.querySelectorAll('.btn-del')
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', event => {
        event.target.parentElement.classList.add('fade-out')
        setTimeout(() => {
            event.target.parentElement.classList.add('d-none')
          }, 1600)
      })
    }
  }
  deleteRow()
 /* I cant understand why it wont work and it breaks the other button 
  const addRow = () => {
    const tBody = (document.querySelector('tbody').innerHTML +=  
    <tr>
                    <th scope="row">8</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td class="btn btn-del">delete row</td>

                </tr>)
  }
  */