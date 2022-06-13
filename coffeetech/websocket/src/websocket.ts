import { io } from "./http";

interface SelectedPark {
    socket_id: string,
    plate: string,
    parkSelected: string
}

const vacancy: SelectedPark[] = []

io.on("connection", (socket) => {
    socket.on("select_park", data => {
        // socket.join(data.parkSelected)

        const samePark = vacancy.find((vac) => vac.parkSelected === data.parkSelected)
        const samePlate = vacancy.find((vac) => vac.plate === data.plate)
        console.log(samePark, samePlate);
        

        if(samePark) {
            console.log("Há um carro nesta vaga");
        }
        else if (samePlate) {
            const vacIndex = vacancy.indexOf(samePlate);
            vacancy.splice(vacIndex, 1);

            if(data.parkSelected) {
                vacancy.push({
                    socket_id: socket.id,
                    plate: data.plate,
                    parkSelected: data.parkSelected
                })

                io.emit("selected_park", vacancy)
            }
        } else {
            if(data.parkSelected) {
                vacancy.push({
                    socket_id: socket.id,
                    plate: data.plate,
                    parkSelected: data.parkSelected
                })

                io.emit("selected_park", vacancy)
            }
        }
    })
})
