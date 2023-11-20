
let cursor = document.getElementById("cursor");
document.addEventListener("mousemove", function (e) {
    let x = e.pageX / 10;
    let y = e.pageY / 10 ;
    cursor.style.top = 200- y + "px";
    cursor.style.left = -10- x + "px";


    document.addEventListener('mouseleave', (e) => {
        cursor.style.transition = '.5s'
        cursor.style.top = '0'
        cursor.style.left = '0'
    })
})