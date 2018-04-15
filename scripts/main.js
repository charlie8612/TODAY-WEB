var check01 = document.getElementById("outerCircle01");
var check02 = document.getElementById("outerCircle02");
var check03 = document.getElementById("outerCircle03");
var pc = document.getElementById("play_music");

var count = 0;
var state = -1;

check01.addEventListener("click", toggle);
check01.addEventListener("click", selector);
check02.addEventListener("click", toggle);
check02.addEventListener("click", selector);
check03.addEventListener("click", toggle);
check03.addEventListener("click", selector);
pc.addEventListener("click",selector);

// window.addEventListener("scroll", scroll);

// function scroll(){
//     var el = $(window).scrollTop();
//     console.log(el);
// }

function toggle () {
    var checkId = this.attributes["data-circle"].value;
    var todoId = this.attributes["data-todo"].value;
    var checked = document.getElementById(checkId);
    var todoCheck = document.getElementById(todoId);
    if (checked.className === "hide"){
        todoCheck.className = "todo01checked";
        checked.className = "check01";
        count++;
    }else {
        checked.className = "hide";
        todoCheck.className = "todo01unchecked";
        count--;
    }
    if(count == 1){
        document.getElementById('piano_img').src = "./src/piano_icon.png";
        document.getElementById('drum_img').src = "./src/blank_drum_icon.png";
        document.getElementById('guitar_img').src = "./src/blank_guitar_icon.png";
        document.getElementById('piano_img_phone').src = "./src/piano_icon.png";
        document.getElementById('drum_img_phone').src = "./src/blank_drum_icon.png";
        document.getElementById('guitar_img_phone').src = "./src/blank_guitar_icon.png";
    }
    if(count == 2){
        document.getElementById('drum_img').src = "./src/drum_icon.png";
        document.getElementById('guitar_img').src = "./src/blank_guitar_icon.png";
        document.getElementById('drum_img_phone').src = "./src/drum_icon.png";
        document.getElementById('guitar_img_phone').src = "./src/blank_guitar_icon.png";
    }
    if(count == 3){
        document.getElementById('guitar_img').src = "./src/guitar_icon.png";
        document.getElementById('guitar_img_phone').src = "./src/guitar_icon.png";
    }
    if(count == 0){
        document.getElementById('piano_img').src = "./src/blank_piano_icon.png";
        document.getElementById('drum_img').src = "./src/blank_drum_icon.png";
        document.getElementById('guitar_img').src = "./src/blank_guitar_icon.png";
        document.getElementById('piano_img_phone').src = "./src/blank_piano_icon.png";
        document.getElementById('drum_img_phone').src = "./src/blank_drum_icon.png";
        document.getElementById('guitar_img_phone').src = "./src/blank_guitar_icon.png";
    }
}

function selector(){    /*WORD REPLACE*/

    //console.log(this);
    if(count > 0 && state == -1){
        state = 0;
        document.getElementById('fsm').innerHTML = "<h1>ENJOY OUR LITTLE REWARD</h1><p>Great!<br>After finishing an listed event,<br>you will receive a reward you deserved.<br>“Click on the musical note to play music.”<br></p>";
    }
    if(count == 1 && state == 0 && this.id == "play_music"){
        state = 1;
        document.getElementById('fsm').innerHTML = "<h1>GETTING BETTER</h1><p>Looks like you have got the hang of it.<br>Let’s continue our process!<br>“Finish the following events.”<br></p>";
    }
    if(count == 3 && state == 1){
        state = 2;
        document.getElementById('fsm').innerHTML = "<h1>LISTEN TO YOUR DAILY BEAT</h1><p>Congratulations!<br>We have finished all the tasks.<br>Let’s relax and enjoy our achievement.<br>“Enjoy the music!”<br></p>";
    }
}

var flag = 1;
var newnode = document.getElementById('nav_experience_design').cloneNode(true);
var oldnode = document.getElementById('nav_about_contact');
newnode.id = 'clone_nav_experience_design';

window.onscroll = function(){
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    if( t > 0 && flag == 1) {
        document.getElementById('nav_experience_design').className = 'experience_and_design_after';
        newnode.className = 'experience_and_design_after_replace';
        document.getElementById("wrapper").replaceChild(newnode, oldnode);
        flag = 0;
    }
    if( t == 0){
        document.getElementById("wrapper").replaceChild(oldnode, newnode);
        document.getElementById('nav_experience_design').className = 'experience_and_design';
        flag = 1;
    }
    if($(window).scrollTop() < 1500 && flag == 0){
        var experience_design = document.getElementById('clone_nav_experience_design').childNodes;
        experience_design[1].className = 'experience_container';
        experience_design[3].className = 'design_container';
    }
    if($(window).scrollTop() > 1500 &&　$(window).scrollTop() < 4600){
        var experience_design = document.getElementById('clone_nav_experience_design').childNodes;
        experience_design[1].className = 'experience_container_spy';
        experience_design[3].className = 'design_container';
    }
    if($(window).scrollTop() > 4600){
        var experience_design = document.getElementById('clone_nav_experience_design').childNodes;
        experience_design[1].className = 'experience_container';
        experience_design[3].className = 'design_container_spy';
    }
}

var play_count = 1;


function play(){
    if(count == 1 && play_count == 1){
        var audio = document.getElementById("audio");
        audio.src = './src/MIX1.mp3';
        audio.play();
        play_count = 0;
        document.getElementById("play_music").src = './src/pause_music_icon.png';
        document.getElementById("play_music_phone").src = './src/pause_music_icon.png';
    }
    else if(count == 2 && play_count == 1){
        var audio = document.getElementById("audio");
        audio.src = './src/MIX2.mp3';
        audio.play();
        play_count = 0;
        document.getElementById("play_music").src = './src/pause_music_icon.png';
        document.getElementById("play_music_phone").src = './src/pause_music_icon.png';
    }
    else if(count == 3 && play_count == 1){
        var audio = document.getElementById("audio");
        audio.src = './src/MIX3.mp3';
        audio.play();
        play_count = 0;
        document.getElementById("play_music").src = './src/pause_music_icon.png';
        document.getElementById("play_music_phone").src = './src/pause_music_icon.png';
    }
    else{
        this.audio.pause();
        play_count = 1;
        document.getElementById("play_music").src = './src/play_music.png';
        document.getElementById("play_music_phone").src = './src/play_music.png';
    }
}

// jquery

$('#go_to_top').click(function(){
    $(this).click(function(){
        $('html,body').animate({ scrollTop : 0 }, 'slow');
        return false;
    });
});

$('#jump_to_experience').click(function (){
    $(this).click(function (){
        $('html, body').animate({scrollTop: $("#experience_link").offset().top }, 'slow');
        return false;
    });
});

$('#jump_to_design').click(function (){
    $(this).click(function (){
        $('html, body').animate({scrollTop: $("#design_link").offset().top}, 'slow');
        return false;
    });
});

$("#getEarlyAccessButtonId").on('click', function(){
  // window.scrollTo(0, 0); 
  $('html,body').animate({ scrollTop : 0 }, 'slow');
  $("div").removeClass("emailInputAnimatedHide");
  $(".dumb").addClass('emailInputAnimated animated fadeInRight');
  $(this).addClass('animated fadeOut');
});
