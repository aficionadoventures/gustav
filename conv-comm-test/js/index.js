/* messages variable here mapped to .messages-content in CSS. */

var $messages = $('.messages-content'),
    d, h, m, /* Date Variables */
    i = 0; /* Counter Variable */


/* On Loading the Window, Load Scrollbar. */
$(window).load(function() {
  $messages.mCustomScrollbar();
  setTimeout(function() {
    gustavoMessage(); /* Calls Fake Messager Function */
  }, 100);
});

/* Scrollbar. Don't Touch. */
function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
    scrollInertia: 10,
    timeout: 0
  });
}

/* Sets Date */
function setDate(){
  d = new Date()
  if (m != d.getMinutes()) {
    m = d.getMinutes();
    $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
  }
}

function insertMessage() {
  msg = $('.message-input').val();
  if ($.trim(msg) == '') {
    return false;
  }
  $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
  setDate();
  $('.message-input').val(null);
  updateScrollbar();
  setTimeout(function() {
    gustavoMessage();
  }, 1000 + (Math.random() * 20) * 100);
}

$('.message-submit').click(function() {
  insertMessage();
});

$(window).on('keydown', function(e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  }
})

var Fake = [
  'Hi there, I\'m Gustavo and you?',
  'Nice to meet you',
  'How are you?',
  'Not too bad, thanks',
  'What do you do?',
  'That\'s awesome',
  'Codepen is a nice place to stay',
  'I think you\'re a nice person',
  'Why do you think that?',
  'Can you explain?',
  'Anyway I\'ve gotta go now',
  'It was a pleasure chat with you',
  'Time to make a new codepen',
  'Bye',
  ':)'
]

var messageDivNew = '<div class="message new"><figure class="avatar"><img src="http://vignette1.wikia.nocookie.net/narcos/images/9/98/Gustavo.png/revision/latest?cb=20150812191150" /></figure>';

var carouselTest = ' <div class="container"> <br> <div id="myCarousel" class="carousel slide" data-ride="carousel"> &lt;!-- Indicators --&gt; <ol class="carousel-indicators"> <li data-target="#myCarousel" data-slide-to="0" class="active"></li> <li data-target="#myCarousel" data-slide-to="1"></li> <li data-target="#myCarousel" data-slide-to="2"></li> <li data-target="#myCarousel" data-slide-to="3"></li> </ol> &lt;!-- Wrapper for slides --&gt; <div class="carousel-inner" role="listbox"> <div class="item active"> <img src="img_chania.jpg" alt="Chania" width="460" height="345"> <div class="carousel-caption"> <h3>Chania</h3> <p>The atmosphere in Chania has a touch of Florence and Venice.</p> </div> </div> <div class="item"> <img src="img_chania2.jpg" alt="Chania" width="460" height="345"> <div class="carousel-caption"> <h3>Chania</h3> <p>The atmosphere in Chania has a touch of Florence and Venice.</p> </div> </div> <div class="item"> <img src="img_flower.jpg" alt="Flower" width="460" height="345"> <div class="carousel-caption"> <h3>Flowers</h3> <p>Beatiful flowers in Kolymbari, Crete.</p> </div> </div> <div class="item"> <img src="img_flower2.jpg" alt="Flower" width="460" height="345"> <div class="carousel-caption"> <h3>Flowers</h3> <p>Beatiful flowers in Kolymbari, Crete.</p> </div> </div> </div> &lt;!-- Left and right controls --&gt; <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev"> <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> <span class="sr-only">Previous</span> </a> <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next"> <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span> <span class="sr-only">Next</span> </a> </div> </div> '


function gustavoMessage() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="http://vignette1.wikia.nocookie.net/narcos/images/9/98/Gustavo.png/revision/latest?cb=20150812191150" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();

  setTimeout(function() {
    $('.message.loading').remove();
    if(i!=100){ /* Different Sorts of Messages at Different Points */
    $( messageDivNew + Fake[i] + carouselTest + '</div>').appendTo($('.mCSB_container')).addClass('new');
    setDate();
    updateScrollbar();
    i++;
  }}, 1000 + (Math.random() * 20) * 100);

}