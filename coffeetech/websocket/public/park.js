const socket = io();

const urlSearch = new URLSearchParams(window.location.search)
const plate = urlSearch.get("plate");
const parkSelected = urlSearch.get("select_park")

// emit -> para emitir informações
// on -> para escutar informaçõess

socket.emit("select_park", {
    plate,
    parkSelected
})

socket.on("selected_park", (data) => {
    console.log(data);


    let i = 0
    for(i in data) {
        console.log(data[i].parkSelected);
        const statusVac = document.getElementById(`status${data[i].parkSelected}`);
        statusVac.innerHTML += `<span style="color: red">Indisponível</span>`
    }
    

})