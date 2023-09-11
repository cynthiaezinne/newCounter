let saveeEd = document.getElementById('save-ed')
let countEr = document.getElementById('count-btn')
let count = 0

function increase() {
   count += 1  
   countEr.textContent = count
}

function save() {
    let countstring = count + '- '
    saveeEd.textContent += countstring
     console.log(count)
}