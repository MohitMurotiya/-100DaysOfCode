var reset = document.querySelector('#reset-file');
var fileName = document.querySelector('#chosen-file');
var image = document.getElementById('logo');
var umbrella = document.getElementById('umbrella');
var loader = document.getElementById('loader');

const COLOR_BTNS = document.querySelectorAll('.color');
// Adding click event listeners on all the colors
COLOR_BTNS.forEach(div => {
    div.addEventListener('click', customUmbrella);
})

function customUmbrella(e){
    let color = e.target.getAttribute('data-color');
    let colorNameClass = this.className;
    if(!this.classList.contains('active-color')){
        let colorName = colorNameClass.slice(colorNameClass.indexOf('-') + 1, colorNameClass.length);
        resetActiveBtns();
        this.classList.add('active-color');
        setNewColor(colorName, color)
    }
}

// resetting all active color btns
function resetActiveBtns(){
    COLOR_BTNS.forEach(color => {
        color.classList.remove('active-color');
    });
}

// set new color on the umbrella 
function setNewColor(colorName, color){
    setTimeout(() => {
        document.querySelector(':root').style.setProperty('--umbrella', color);
        document.querySelector('.section-left img').src = `images/${colorName}-umbrella.png`;
        umbrella.style.display = 'initial';
        loader.style.display = 'none';
    }, image.style.visibility == 'visible' ? 1000 : 0);

    umbrella.style.display = 'none';
    loader.style.display = 'initial';
}

// Event Listener when user uploads a logo
document.querySelector('.upload-btn').addEventListener('change', uploadLogo)

function uploadLogo(e){
    setTimeout(() => {
        const max_size = 5242880;
        if(e.target.files[0].size > max_size){
            umbrella.style.display = 'initial';
            loader.style.display = 'none';
            alert("File size exceeds");
            return;
        }
        fileName.textContent = e.target.files[0].name;
        reset.style.visibility = 'visible';
        image.src = URL.createObjectURL(e.target.files[0]);
        image.style.visibility = 'visible';

        umbrella.style.display = 'initial';
        loader.style.display = 'none';
    }, 2000);

    umbrella.style.display = 'none';
    loader.style.display = 'initial';

}

// To reset the logo
reset.addEventListener('click', () => {
    fileName.textContent = 'upload logo';
    reset.style.visibility = 'hidden';
    image.style.visibility = 'hidden';
})
