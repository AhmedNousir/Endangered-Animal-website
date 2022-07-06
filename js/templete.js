// select main page
let main = document.querySelector(".main");

//get arrary of image
let imgarray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];


/*setInterval(() => {



    //get random photo
    let randomNumber = Math.floor(Math.random() * imgarray.length);



    //change background image
    main.style.backgroundImage = 'url("imgs/' + imgarray[randomNumber] + '")';
}, 1000);
*/


//select range 
let ourrange = document.querySelector(".range");

window.onscroll = function () {

    //range oofsettop
    let rangeoffsetTop = ourrange.offsetTop;

    //outer heigth
    let rangehight = ourrange.offsetHeight;//bt7sb al hight bta3 element

    //window height
    let windowHeight = this.innerHeight; //alhight bta3 alwindow nafso

    //window scroll top
    let windowScrolTop = this.pageYOffset;//by7sb m3 alscrol

    if (windowScrolTop > (rangeoffsetTop + rangehight - windowHeight)) {


        let allranges = document.querySelectorAll(".range-box .range-proccess span");

        allranges.forEach(range => {

            range.style.width = range.dataset.proccess;
        });
    }
};