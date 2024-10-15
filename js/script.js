let currentQuestion = 1;
let totalQuestions = 5;
let countdownTimer;
let countdownValue = 60;
const initialCountdownValue = 60;

function nextQuestion(questionNumber) {
  document.getElementById('section2').scrollIntoView({ behavior: 'smooth' });

  document.getElementById('question' + questionNumber).style.display = 'none';

  if (questionNumber + 1 <= totalQuestions) {
    document.getElementById('question' + (questionNumber + 1)).style.display = 'flex';
  } else {
    showLoadingScreen(); 
  }

  updateProgressBar((questionNumber + 1) / totalQuestions * 100);
}

function showLoadingScreen() {
  document.getElementById('loadingScreen').style.display = 'block';
  document.getElementById('progressBar').style.display = 'none';

  setTimeout(() => {
    document.getElementById('loadingMessage').textContent = 'Preparing your results...';
  }, 2000);

  setTimeout(() => {
    document.getElementById('loadingScreen').style.display = 'none';
    document.getElementById('finalScreen').style.display = 'block';
    generateReferenceNumber(); 
  }, 4000);
}

function updateProgressBar(progress) {
  document.getElementById('progressBar').style.width = progress + '%';
}

function generateReferenceNumber() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const firstPart = letters.charAt(Math.floor(Math.random() * letters.length)) + letters.charAt(Math.floor(Math.random() * letters.length));
  const secondPart = Math.floor(Math.random() * 90 + 10);
  const thirdPart = Math.floor(Math.random() * 90 + 10);

  const referenceNumber = `REF: ${firstPart}-${secondPart}-${thirdPart}`;
  document.getElementById('referenceNumber').textContent = referenceNumber;
}

function calculateAndNext() {

  document.getElementById('section2').scrollIntoView({ behavior: 'smooth' });

  const heightFeet = parseInt(document.getElementById('heightFeet').value);
  const heightInches = parseInt(document.getElementById('heightInches').value);
  const currentWeight = parseInt(document.getElementById('currentWeight').value);
  const desiredWeight = parseInt(document.getElementById('desiredWeight').value);

  if (isNaN(heightFeet) || isNaN(heightInches) || isNaN(currentWeight) || isNaN(desiredWeight)) {
    alert("Please fill in all fields correctly.");
    return;
  }

  const totalHeightInches = (heightFeet * 12) + heightInches;

  const bmi = (currentWeight / (totalHeightInches * totalHeightInches)) * 703;

  let bmiCategory = '';
  if (bmi < 18.5) {
    bmiCategory = 'underweight';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    bmiCategory = 'normal weight';
  } else if (bmi >= 25 && bmi < 29.9) {
    bmiCategory = 'overweight';
  } else {
    bmiCategory = 'obese';
  }

  const bmiResultText = `Your BMI is ${bmi.toFixed(1)}, which is considered ${bmiCategory}.`;

  document.getElementById('bmiResult').textContent = bmiResultText;

  document.getElementById('question5').style.display = 'none';
  showLoadingScreen();
}

function showLoadingScreen() {
  document.getElementById('loadingScreen').style.display = 'block';
  document.getElementById('progressBar').style.display = 'none';

  setTimeout(() => {
    document.getElementById('loadingMessage').textContent = 'Preparing your results...';
  }, 2000);

  setTimeout(() => {
    document.getElementById('loadingScreen').style.display = 'none';
    document.getElementById('finalScreen').style.display = 'block';
  }, 4000);
}

function showLoadingScreen() {
  document.getElementById('loadingScreen').style.display = 'block';
  document.getElementById('progressBar').style.display = 'none';

  setTimeout(() => {
    document.getElementById('loadingMessage').textContent = 'Preparing your results...';
  }, 2000);

  setTimeout(() => {
    document.getElementById('loadingScreen').style.display = 'none';
    document.getElementById('finalScreen').style.display = 'block';
  }, 4000);
}

function updateProgressBar(progress) {
  document.getElementById('progressBar').style.width = progress + '%';
}

