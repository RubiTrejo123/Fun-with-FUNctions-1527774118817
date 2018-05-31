
$("#randomColor").click(function() {
 changeColor();
});



$("#greenColor").click(function() {
    changeColor("green");
});


$("#blueColor").click(function() {
   changeColor("blue");
});



$("#randomImage").click(function() {
   changeImage();
});


$("#kittenImage").click(function() {
    changeImage("http://i0.kym-cdn.com/photos/images/newsfeed/000/010/005/caturdayxx.jpg?1250728946");
});


$("#puppyImage").click(function() {
    changeImage("http://www.justpuppies.net/images/pom_triple_0815.jpg");
});



























// THESE FUNCTIONS ARE DEFINED FOR YOU!
// CALL THESE FUNCTIONS WITHIN THE CLICK HANDLERS ABOVE
function changeColor(color){
    if (color) {
        $('body').css('background-image', 'none');
        $('body').css('background-color', color);   
    } else {
        $('body').css('background-image', 'none');
        $('body').css('background-color', 'rgb(' + getNumber() + ',' + getNumber() + ',' + getNumber() + ')' );
    }
}

function changeImage(url){
    if (url){
        $('body').css('background-image', 'url(' + url + ')');   
    } else {
        $('body').css('background-image', 'url(' + getImage() + ')');
    }
}


function getNumber(){
    return Math.ceil( Math.random() * 256 );
}

function getImage(){
    var images = [
        'http://i0.kym-cdn.com/photos/images/newsfeed/000/010/005/caturdayxx.jpg?1250728946',
        'http://i0.kym-cdn.com/photos/images/newsfeed/000/181/605/itiscaturday.jpg?1317681407',
        'http://cdn.humoropedia.com/wp-content/uploads/2014/11/Caturday-All-For-One-One-For-All.jpg',
        'http://www.justpuppies.net/images/pom_triple_0815.jpg',
        'http://cdn2-www.dogtime.com/assets/uploads/2010/12/puppies.jpg',
        'http://cdn1-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg'
    ];
    
    return images[ Math.floor(Math.random() * images.length) ];
}