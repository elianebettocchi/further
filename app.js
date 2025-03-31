function createParagraph(){

    var textOne = document.getElementById('textOne').value
    var textTwo = document.getElementById('textTwo').value
    var textThree = document.getElementById('textThree').value
    var textFour = document.getElementById('textFour').value
    var textFive = document.getElementById('textFive').value
    var textSix = document.getElementById('textSix').value
    var textSeven = document.getElementById('textSeven').value

    var paragraph =  '<p>The darkness is dissipating. You blink and open your eyes. You see' + textOne + 'around you. You try to move, but you are trapped inside a' + textTwo + '. Then, you feel a hand pulling you out so that you can now stand over the' + textThree + '. Familiar faces watch you with' + textFour + '; there is a powerful energy of' + textFive + 'around and emanating from you. One of them, the one' + textSix + ', speaks in a' + textSeven + 'tone of voice: </p><h1 class="text-center"><a href="further.html">You have three options at this moment:</a></h1>'

document.getElementById('answer').innerHTML = paragraph;
}
