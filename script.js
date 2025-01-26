const menuItems = document.querySelectorAll('.menu-item')
menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', () =>{
        menuItems.forEach((item) => {
            if (item !== menuItem) {
                item.classList.remove('active')
                 item.querySelector('.dropdown').classList.add('hidden')
            }
        })
        const dropdown = menuItem.querySelector('.dropdown')
        dropdown.classList.toggle('hidden')
        menuItem.classList.toggle('active')
    })
})

const hamIcon = document.querySelector('.icon-ham')
const closeIcon = document.querySelector('.icon-close')
const menuList = document.querySelector('.nav-item')

hamIcon.addEventListener( 'click', () =>{
    menuList.classList.toggle('show');
    hamIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
})
closeIcon.addEventListener('click', () => {
    menuList.classList.toggle('show');
    closeIcon.classList.add('hidden');
    hamIcon.classList.remove('hidden');
  });