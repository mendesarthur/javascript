const hitchedSpaceships = [["Fenix", 8, true], ["Golias", 9, true], ["Falcon", 10, false], ["Elemental", 11, false]]

let with9Chars = hitchedSpaceships.filter((element) =>{
    return element[1] > 9
})
.map((element) => {
    return element[0]; 
  });

const inProcess = hitchedSpaceships.findIndex((element) => {
  return element[2] == false;
});

const upSpaceships = hitchedSpaceships.map((currentSpaceship) => {
  return currentSpaceship[0].toUpperCase();
});

alert(
  `Espaçonaves com mais de 9 tripulantes: ${with9Trip.join(
    ', '
  )} \nPlataforma com processo de engate: ${
    inProcess + 1
  } \nEspaçonaves destacadas: ${upSpaceships.join(', ')}`
);