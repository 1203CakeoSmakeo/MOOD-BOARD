var Saitama = "http://pm1.narvii.com/6442/6b043eb018d7909504ecd771b37874de43b237a5_00.jpg";
var Kabuto = "https://i.ytimg.com/vi/gFrWD37y7w4/maxresdefault.jpg";
var PigGod = "https://66.media.tumblr.com/3f416d688b9d59e630e540d0f8eb0763/tumblr_nvtznfGNbw1ut6bp7o1_500.gif";
$('button').click(function() {
    var input = $('input').val();
    $(".images").html("");
    if (input === "horror") {


    } else if (input === "Saitama") {

    } else if (input === "Scared") {
        Scared();
    } else {
        alert("Please enter Happy, Scared, or Hungry");
    }
});


function Happy() {
    https: //encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ugVV2RYitH6pmQ0g77EMBP_EyPU8mupN4_8SvTGVkHnl7U9vfQ");
        changeTextColor("red");
    displayImage("http://pm1.narvii.com/6442/6b043eb018d7909504ecd771b37874de43b237a5_00.jpg");
}

function Scared() {
    changeBackground("Brown");
    changeTextColor("Red");
    displayImage("https://animemotivation.com/wp-content/uploads/2017/05/Armin.jpg.webp");
}

function PigGod() {
    changeBackground("https://66.media.tumblr.com/3f416d688b9d59e630e540d0f8eb0763/tumblr_nvtznfGNbw1ut6bp7o1_500.gif");
    changeTextColor();
    displayImage = ("https://66.media.tumblr.com/3f416d688b9d59e630e540d0f8eb0763/tumblr_nvtznfGNbw1ut6bp7o1_500.gif");
}


function changeBackground(backgroundImage) {
    $('body').css('background-color', backgroundImage);
}

function changeTextColor(color) {
    $('body').css('color', color);
}

function displayImage(image) {
    $('.images').append('<img src =' + image + '>');

}