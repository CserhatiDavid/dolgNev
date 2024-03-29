/*
* File: app.js
* Author: Cserhati David
* Copyright: 2023, Cserhati David
* Group: Szoft I-2 N
* Date: 2023-02-23
* Github: https://github.com/CserhatiDavid/
* Licenc: GNU GPL
* Nem vállalunk felelősséget a rossz jegyekért
*/
const doc={ 
    tbody:null
}
const state={
    dolgozoLista:[]
}


window.addEventListener("load",()=>{
    intit();
    render();
})
function intit() {
    doc.tbody=document.querySelector("#tbody");
    state.dolgozoLista=[
        {id:1, name:"Pista",city:"Szolnok",salary:385},
        {id:2, name:"Mari",city:"Szeged",salary:382},
        {id:3, name:"Kati",city:"Szolnok",salary:355},
        {id:4, name:"Dani",city:"Szeged",salary:384},
        {id:5, name:"Lili",city:"Szolnok",salary:382}
    ];
}
function render() {
    let rows="";
    state.dolgozoLista.forEach((dolgozo)=>{
        console.log(dolgozo.name)
        rows+=`
            <tr>
                <td>${dolgozo.id}</td>
                <td>${dolgozo.name}</td>
                <td>${dolgozo.city}</td>
                <td>${dolgozo.salary}</td>
            </tr>
        `;
        doc.tbody.innerHTML=rows;
    })
}