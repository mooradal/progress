add = document.getElementById("add")
take = document.getElementById("take") 

max_inp = document.getElementById("max")
current_inp = document.getElementById("current")

progress = document.getElementById("progress")

add.addEventListener("click",function() {current_inp.value ++})
take.addEventListener("click",function() {current_inp.value --})

main()

function main() {
window.requestAnimationFrame(main)

progress.innerHTML = Math.floor((current_inp.value/max_inp.value*100)) + "%"
if (current_inp.value/max_inp.value*100 > 100) {
    progress.style.width = "100%"
} else {
    progress.style.width = (current_inp.value/max_inp.value*100) + "%"
}

console.log((current_inp.value/max_inp.value*100) + "%")
}
