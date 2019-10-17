

function display_image(myModal, myImg, modal_image, img_src) {

    // Get the modal
    var modal = document.getElementById(myModal);

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById(myImg);
    var modalImg = document.getElementById(modal_image);
    //img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = img_src;
    //};
}

// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
function close_image(modal_name, modal_image) {
    var modal = document.getElementById(modal_name);
    modal.style.display = "none";
    //modal_image.style.display = "none";
};