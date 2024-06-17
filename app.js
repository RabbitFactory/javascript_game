function play(){
    document.getElementById('home_screen').classList.add('hidden');

    document.getElementById('play_ground').classList.remove('hidden');
    generateRandomAlphabet()
}

function generateRandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvxyz';
    const alphabetArray = alphabetString.split('');
    
    const randomNumber = Math.random() * 25;
    const randomIndex = Math.round(randomNumber);

    const alphabet = alphabetArray[randomIndex];
    continueGame(alphabet);

    function addBG(alphabetID){
        const element = document.getElementById(alphabetID)
        element.classList.add('bg-orange-400')
    };

    addBG(alphabet);
    //return alphabet;
}

function continueGame(alphabetFromFunction){
    const changingAlphabet = alphabetFromFunction;
    document.getElementById('current_alphabet').innerText = changingAlphabet;



}
