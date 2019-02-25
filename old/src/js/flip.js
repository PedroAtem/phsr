let show_all = false;

function toogleFlipAll() {
    show_all = !show_all;
    for (let element of document.getElementsByClassName('flip-card')) {
        if (show_all) {
            element.classList.add('flip-card-hover')
        } else {
            element.classList.remove('flip-card-hover')
        }
    }

}