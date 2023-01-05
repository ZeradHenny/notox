const link_lists = document.querySelectorAll(`.list-menu li`);
const mega_menus = document.querySelectorAll(`.mega-menu--wrapper`);
var active_link_color;
link_lists.forEach(link=>{
    link.addEventListener('mouseover', (event) => {        
        mega_menus.forEach(menu=>{
            if(link.dataset.handle == menu.dataset.target){
                menu.classList.add("active");
                link.classList.add('color');
                active_link_color = link;
            }
        })
    })
    link.addEventListener('mouseleave', (event) => {
        mega_menus.forEach(menu=>{
            menu.classList.remove("active");
            link.classList.remove('color');
        })
    })
})

mega_menus.forEach(menu=>{
    menu.addEventListener('mouseover', (event) => {
        menu.classList.add("active");  
        active_link_color.classList.add('color');
    })
    menu.addEventListener('mouseleave', (event) => {
        menu.classList.remove("active");  
        active_link_color.classList.remove('color');
    })
})

