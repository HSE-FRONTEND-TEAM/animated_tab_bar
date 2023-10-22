let menu_items = document.querySelectorAll('li')
let body = document.querySelector('body')


menu_items.forEach(item => item.addEventListener('click',event => {
    menu_items.forEach(i => {
        i.style.backgroundColor = ""
    });
    let elem = event.currentTarget
    body.style.backgroundColor = elem.dataset.color
    elem.style.backgroundColor = elem.dataset.color
}))
