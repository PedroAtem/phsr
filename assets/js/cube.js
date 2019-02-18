var cube;
var radioGroup;
var currentClass = '';

function changeSide() {
    var checkedRadio = radioGroup.querySelector(':checked');
    var showClass = 'show-' + checkedRadio.value;
    if (currentClass) {
        cube.classList.remove( currentClass );
    }
    cube.classList.add( showClass );
    currentClass = showClass;
}

// set initial side
function initCube() {
    cube = document.querySelector('.cube');
    radioGroup = document.querySelector('.radio-group');
    changeSide();
    radioGroup.addEventListener( 'change', changeSide );
}