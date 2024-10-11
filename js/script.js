const block1 = document.getElementById('s1-block-1');
const block2 = document.getElementById('s1-block-2');
const block3 = document.getElementById('s1-block-3');
const block4 = document.getElementById('s1-block-4');
const blockItem1 = document.getElementById('s1-block-1-item');
const blockItem2 = document.getElementById('s1-block-2-item');
const blockItem3 = document.getElementById('s1-block-3-item');
const blockItem4 = document.getElementById('s1-block-4-item');

const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('previous-button');

const answer1 = document.getElementById('answer-1');
const answer2 = document.getElementById('answer-2');
const answer3 = document.getElementById('answer-3');
const answer4 = document.getElementById('answer-4');


let clickedBlock = 'none';
let currentQuestionIndex = 1;



prevButton.style.display = 'none';

nextButton.addEventListener('click', () => {
    if (clickedBlock == 'none'){
        alert('Please Select An Option');
    } else {
        document.getElementById(`section-${currentQuestionIndex}`).style.display = 'none';
        document.getElementById(`section-${currentQuestionIndex + 1}`).style.display = 'flex';
        currentQuestionIndex += 1;
        console.log(currentQuestionIndex);
        prevButton.style.display = 'block'
    }
    
});

prevButton.addEventListener('click', () => {
    
    if (currentQuestionIndex == 1){
        console.log('uwu');
        
    } else{
        currentQuestionIndex = currentQuestionIndex -1;
        console.log(currentQuestionIndex);
        document.getElementById(`section-${currentQuestionIndex + 1}`).style.display = 'none';
        document.getElementById(`section-${currentQuestionIndex}`).style.display = 'flex';
        if (currentQuestionIndex == 1){
            prevButton.style.display = 'none';
        }
        
    }
    
});


block1.addEventListener('click', ()=>{
    clickedBlock = 'Block 1';
    blockItem1.style.backgroundColor = '#f13473';
    block1.style.transform = 'scale(1.2)'

    blockItem2.style.backgroundColor = '#EA749B';
    block2.style.transform = 'scale(1)'
    blockItem3.style.backgroundColor = '#EA749B';
    block3.style.transform = 'scale(1)'
    blockItem4.style.backgroundColor = '#EA749B';
    block4.style.transform = 'scale(1)'




});

block2.addEventListener('click', () => {
    clickedBlock = 'Block 2';

    blockItem2.style.backgroundColor = '#f13473';
    block2.style.transform = 'scale(1.2)'

    blockItem1.style.backgroundColor = '#EA749B';
    block1.style.transform = 'scale(1)'
    blockItem3.style.backgroundColor = '#EA749B';
    block3.style.transform = 'scale(1)'
    blockItem4.style.backgroundColor = '#EA749B';
    block4.style.transform = 'scale(1)'
});

block3.addEventListener('click', ()=>{
    clickedBlock = 'Block 3';

    blockItem3.style.backgroundColor = '#f13473';
    block3.style.transform = 'scale(1.2)'

    blockItem1.style.backgroundColor = '#EA749B';
    block1.style.transform = 'scale(1)'
    blockItem2.style.backgroundColor = '#EA749B';
    block2.style.transform = 'scale(1)'
    blockItem4.style.backgroundColor = '#EA749B';
    block4.style.transform = 'scale(1)'
});

block4.addEventListener('click', () => {
    clickedBlock = 'Block 4';

    blockItem4.style.backgroundColor = '#f13473';
    block4.style.transform = 'scale(1.2)'

    blockItem1.style.backgroundColor = '#EA749B';
    block1.style.transform = 'scale(1)'
    blockItem3.style.backgroundColor = '#EA749B';
    block3.style.transform = 'scale(1)'
    blockItem2.style.backgroundColor = '#EA749B';
    block2.style.transform = 'scale(1)'
});


