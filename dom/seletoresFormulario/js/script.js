function showinfo(){
    let name = document.querySelector("input[name = name]").value
    let favoriteColor = document.querySelector("select[name = 'color'] option:checked").text
    let likeProgaming = document.querySelector("input[name = 'like-programing']:checked").value
    let developerOptions = document.querySelectorAll("input[name= 'developer-options']:checked")
    let  optionValue = []
    developerOptions.forEach(element => {
        optionValue.push(element.value)
        let optionChecked = developerOptions.join(", ")
        alert("Nome:" + name + "\Cor primária: " + favoriteColor + "\nGosta de programar?" + likeProgaming +
        "conhecimentos em programação web: " + optionChecked)
    })
}