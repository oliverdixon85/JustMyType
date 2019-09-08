$(document).ready(function () {

    let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    let sentenceIndex = 0;
    let currentSentence = sentences[sentenceIndex];
    let letterIndex = 0;
    let currentLetter = currentSentence[letterIndex];

    $('#sentence').text(currentSentence);
    $('#target-letter').text(currentLetter);

    

$('#keyboard-upper-container').hide()

$('body').keydown(function(e){
    if (e.which === 16) {
        $('#keyboard-upper-container').show()
        $('#keyboard-lower-container').hide()
    }
})

$('body').keyup(function(e) {
    if (e.which == 16) {
        $('#keyboard-upper-container').hide()
        $('#keyboard-lower-container').show()
    }
    $('.make-it-yellow').removeClass('make-it-yellow');
   
});

$('body').keypress(function(e){

    if(letterIndex === currentSentence.length -1){
        letterIndex = 0;
        $('#feedback').empty();
        sentenceIndex++;
        let currentSentence = sentences[sentenceIndex];
        $('#sentence').text(currentSentence);
    } else {

        if(e.which === currentSentence.charCodeAt(letterIndex)){
            $('#feedback').append('<span class="glyphicon glyphicon-ok"></span>');
        } else {
            $('#feedback').append('<span class="glyphicon glyphicon-remove"></span>');
        }
    
        letterIndex++;
        let currentLetter = currentSentence[letterIndex];
        $('#target-letter').text(currentLetter);
        $('#' + e.which).addClass('make-it-yellow');
    }

   

})

// $(document).keypress(function (e) {
//     if ((e.which < 65) && (e.which > 26)) {
//         $('#' + e.which).css('background-color', 'yellow');
//     }
// });



})