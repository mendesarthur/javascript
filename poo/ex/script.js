class Spaceship {
    constructor(name, tripulantNumber) {
      this.name = name
      this.tripulantNumber = tripulantNumber
      this.isHitched = false
      this.doorsOpen = false
    }
    hitchSpaceship() {
      this.isHitched = true
      this.doorsOpen = true
    }
  }
  
  let spaceshipList = []
  
  function openMenu() {
    do {
      var userChoose = prompt
        ('Seja bem-vindo(a), o que deseja fazer? \n' +
          '1 - Realizar engate da nave \n' +
          '2 - Imprimir naves engatadas \n' +
          '3 - Sair do programa')
  
      switch (userChoose) {
        case '1':
          registerSpaceship()
          break;
        case '2':
          printSpaceships()
          break;
        case '3':
          alert('Desligando sistema...')
          break;
        default:
          alert('Por favor insira uma opcao valida!')
          break;
      }
    } while (userChoose != '3');
  }
  
  
  function registerSpaceship() {
    const newRegister = new Spaceship(
      prompt('Insira o nome da sua nave:'),
      Number(prompt('Insira a quantidade de tripulantes:'))
    )
    spaceshipList.push(newRegister)
    alert('Nave registrada com sucesso!')
  
    do {
      var userChoose = prompt('Deseja realizar o engate? \n' +
      '1 - Sim \n' +
      '2 - Nao')
  
    switch (userChoose) {
      case '1':
        newRegister.hitchSpaceship()
        alert(`A nave ${newRegister.name} foi engatada!`)
        break;
      case '2':
        alert(`A nave ${newRegister.name} nao foi engatada!`)
        break;
      default:
        alert('Insira uma opcao valida!')
        break;
      }
    } while ((userChoose != '1' && userChoose != '2'));
  }
  
  
  function printSpaceships() {
    if (spaceshipList.length == 0) {
      alert('Nenhuma nave foi registrada.')
    } else {
      alert('Listando todas as naves registradas...')
      spaceshipList.forEach((element, index) => {
        alert(`Nave ${index + 1}
        Nome da nave: ${spaceshipList[index].name}
        Quantidade de tripulantes: ${spaceshipList[index].tripulantNumber}
        Status do engate: ${spaceshipList[index].isHitched == true ? 'Engatado' : 'Sem engate'}
        Status das portas: ${spaceshipList[index].doorsOpen == true ? 'Abertas' : 'Fechadas'}
        `)
      })
    }
  }
  
  openMenu()