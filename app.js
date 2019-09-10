$(document).ready(function () {

    //creating variables to work with
    let sentences = ['ten ate neite ate nee enet ite ate inet ent eate ', 'Too ato too nOt enot one totA not anot tOO aNot ', 'oat itain oat tain nate eate tea anne inant nean ', 'itant eate anot eat nato inate eat anot tain eat ', 'nee ene ate ite tent tiet ent ine ene ete ene ate '];
    let sentenceIndex = 0;
    let currentSentence = sentences[sentenceIndex];
    let letterIndex = 0;
    let currentLetter = currentSentence[letterIndex];
    let keysPressed = 0
    let startTime;
    let endTime;
    let mistakeCount = 0; 
    let wordCount = 0


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
    if (e.which === 32) {
        wordCount++
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
    
    if(keysPressed === 0){
        startTime = Date.now();
        keysPressed++
    }

    //when the last letter is pressed the letterIndex will return to 0 and #feedback will be emptied
    //additionally, the currentSentence will move to the next sentence in the array
    if(letterIndex >= currentSentence.length -1){
       
        $('#feedback').empty();
        sentenceIndex++;
        if(sentenceIndex >= sentences.length){
            endTime = Date.now()
            let minutes = (endTime - startTime) / 60000; 
            // I created a wordCount by the number of times I pressed the space button (32)...
            // i therefore added a space between the sentences and after the final word. 
            let wordsPerMinute = wordCount / minutes - 2 * mistakeCount;
            let confirmBox = confirm(`You type at ${wordsPerMinute} words per minute! Play Again?`);
            if (confirmBox == true) {
                window.location.reload();
            } else {
                        alert(`Allrighty, suit yourself`)
                        window.location.reload();
                    }

            return;
        } 
        letterIndex = 0;
        currentSentence = sentences[sentenceIndex];
        currentLetter = currentSentence[0];
        $('#target-letter').text(currentLetter);
        $('#sentence').text(currentSentence);
        $('#yellow-block').css("left", "17.5px");
    } else {
        //if the last letter is not reached the following will fire.
        //if the key code pressed matches the letterIndex of the currentSentence then there will be a green check mark
        //if they don't match then there will be a red cross
        if(e.which === currentSentence.charCodeAt(letterIndex)){
            $('#feedback').append('<span class="glyphicon glyphicon-ok"></span>');
        } else {
            $('#feedback').append('<span class="glyphicon glyphicon-remove"></span>');
            mistakeCount++
        }
        
        //this is the code for the letter that will appear in the #targetLetter container
        letterIndex++;
        let currentLetter = currentSentence[letterIndex];
        $('#yellow-block').css("left", "+=17.5");
        $('#target-letter').text(currentLetter);
        $('#' + e.which).addClass('make-it-yellow');
    }

   

})



})