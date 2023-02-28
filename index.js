let personList = document.getElementById("person-list");
let inputNama = document.querySelector(".inputnama");
let inputUmur = document.querySelector(".inputumur");
let form = document.querySelector("form");
let persons = [];

if(localStorage == undefined){
    console.error("Maaf browser anda tidak tersedia localStorage");
}
else if(localStorage.getItem("users")==null){
    localStorage.setItem("users",[]);
}

persons = localStorage.getItem("users") == [] ? []: JSON.parse(localStorage.getItem("users"));

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(inputNama.value&&inputUmur.value!=""){
        persons.push(setData());
        setStorage();
        load();
    }else{
        alert("Data tidak boleh kosong !!!");
    }

})

window.addEventListener("DOMContentLoaded",()=>{
    load();
})

function setData(){
    let data = {
        id : +new Date,
        nama : inputNama.value,
        umur : inputUmur.value
    }
    return data;
};

function load(){
    personList.innerHTML = persons.map((person)=>{
        return `
        <div data-id="${person.id}" id="personal-data">
        <h4> Nama : ${person.nama}</h4>
        <h4> Umur : ${person.umur}</h4>
        <button id="delete-button" href=""> delete </button>
        </div>
        `
    }).join("<br>");

    let personsData = personList.querySelectorAll("#personal-data");

    for(personData of personsData){
        let deleteButton = personData.querySelector("#delete-button")
        let personId = parseInt(personData.getAttribute("data-id"));
        deleteButton?.addEventListener("click",()=>{
            deleteData(personId);
            // console.log(personData);
        })
    }
}

function deleteData(personId){
    const id = personId;
    let data = persons.findIndex((person)=>{
        return person.id == id;
    })
    if(data !== -1){
        persons.splice(data, 1);
        setStorage();
        load();
    }
}

function setStorage() {
        localStorage.setItem("users",JSON.stringify(persons));
};

