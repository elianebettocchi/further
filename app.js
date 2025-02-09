function createParagraph(){

    var textOne = document.getElementById('textOne').value
    var textTwo = document.getElementById('textTwo').value
    var textThree = document.getElementById('textThree').value
    var textFour = document.getElementById('textFour').value
    var textFive = document.getElementById('textFive').value
    var textSix = document.getElementById('textSix').value
    var textSeven = document.getElementById('textSeven').value

    var paragraph =  '<p>The darkness is dissipating. You blink and open your eyes. You see' + textOne + 'around you. You try to move, but you are trapped inside a' + textTwo + '. Then, you feel a hand pulling you out so that you can now stand over the' + textThree + '. Familiar faces watch you with' + textFour + '; there is a powerful energy of' + textFive + 'around and emanating from you. One of them, the one' + textSix + ', speaks in a' + textSeven + 'tone of voice: </p><p><strong><em>You have three options at this moment: <ol><li><a class="a-red" href="1.html">come with us</a></li><li><a class="a-red" href="2.html">go back</a></li><li><a class="a-red" href="3.html">cross the tunnel</a></li></ol></em></strong></p>'

document.getElementById('answer').innerHTML = paragraph;
}
