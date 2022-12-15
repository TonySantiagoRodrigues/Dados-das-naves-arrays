const nave  = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

let dragon = nave.filter(spaceship => {
    return spaceship[1] > 9
}).map(spaceship => {
    return spaceship[0]
})
let test = nave.findIndex(spaceship =>{
    return spaceship[2] == false
})

let higt = nave.map(spaceship => {
    return spaceship[0].toUpperCase()
}
)

let message = "Espaçonaves com mais de 9 tripulantes: " + dragon.join(", ")
message += "\nPlataform com processo de engate:" + (test + 1)
message += "\nEspaçonaves destacadas: " + higt.join (", ")

alert(message)