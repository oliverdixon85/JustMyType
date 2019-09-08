$(document).ready(function () {

    //creating variables to work with
    let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    let sentenceIndex = 0;
    let currentSentence = sentences[sentenceIndex];
    let letterIndex = 0;
    let currentLetter = currentSentence[letterIndex];


    //'sentence' and 'target-letter' already existed from html and is then used with newly created variables
    $('#sentence').text(currentSentence);
    $('#target-letter').text(currentLetter);

    

$('#keyboard-upper-container').hide()

//when shift if pressed (aka charCode 16) then the lower case is hidden and upper case is shown 
$('body').keydown(function(e){
    if (e.which === 16) {
        $('#keyboard-upper-container').show()
        $('#keyboard-lower-container').hide()
    }
})

//when shift is released lower case returns and upper case is hidden
$('body').keyup(function(e) {
    if (e.which == 16) {
        $('#keyboard-upper-container').hide()
        $('#keyboard-lower-container').show()
    }

    //this is to make sure the yellow color only flashes for a brief time, as soon as it is added it is removed, otherwise the color will remain yellow
    $('.make-it-yellow').removeClass('make-it-yellow');
   
});

//when any key is pressed the following will fire
$('body').keypress(function(e){

    //when the last letter is pressed the letterIndex will return to 0 and #feedback will be emptied
    //additionally, the currentSentence will move to the next sentence in the array
    if(letterIndex === currentSentence.length -1){
        letterIndex = 0;
        $('#feedback').empty();
        sentenceIndex++;
        let currentSentence = sentences[sentenceIndex];
        $('#sentence').text(currentSentence);
    } else {
        //if the last letter is not reached the following will fire.
        //if the key code pressed matches the letterIndex of the currentSentence then there will be a green check mark
        //if they don't match then there will be a red cross
        if(e.which === currentSentence.charCodeAt(letterIndex)){
            $('#feedback').append('<span class="glyphicon glyphicon-ok"></span>');
        } else {
            $('#feedback').append('<span class="glyphicon glyphicon-remove"></span>');
        }
        
        //this is the code for the letter that will appear in the #targetLetter container
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