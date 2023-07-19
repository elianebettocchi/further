function createParagraph(){

    var textOne = document.getElementById('textOne').value
    var textTwo = document.getElementById('textTwo').value
    var textThree = document.getElementById('textThree').value
    var textFour = document.getElementById('textFour').value
    var textFive = document.getElementById('textFive').value
    var textSix = document.getElementById('textSix').value
    var textSeven = document.getElementById('textSeven').value
    var textEight = document.getElementById('textEight').value
    var textNine = document.getElementById('textNine').value

    var paragraph =  '<p>The darkness is dissipating. You blink and open your eyes. You see' + textOne + 'around you. You try to move, but you are' + textTwo + 'inside a' + textThree+'. Then, you feel a hand pulling you out. It' + textFour + 'you so that you can now stand over the' + textFive+'. Familiar faces watch you with' + textSix+'; there is a powerful energy of' + textSeven + 'around and emanating from you. One of them, the one' + textEight+', speaks in a' + textNine + 'tone of voice: </p><p><em>You have three options at this moment:</p><ol><li>you can come with us;</li><li>you can go back to where you were;</li><li>you can cross the tunnel.</li></ol></em>'

document.getElementById('answer').innerHTML = paragraph;
}