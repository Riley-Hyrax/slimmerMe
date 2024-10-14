let currentQuestion = 1;
let totalQuestions = 5;
let countdownTimer;
let countdownValue = 60;
const initialCountdownValue = 60;

function nextQuestion(questionNumber) {
  document.getElementById('question' + questionNumber).style.display = 'none';

  if (questionNumber + 1 <= totalQuestions) {
    document.getElementById('question' + (questionNumber + 1)).style.display = 'flex';
  } else {
    showLoadingScreen(); // Show loading screen before final screen
  }

  updateProgressBar((questionNumber + 1) / totalQuestions * 100);
}

function showLoadingScreen() {
  // Display the loading screen
  document.getElementById('loadingScreen').style.display = 'block';
  document.getElementById('progressBar').style.display = 'none';

  // Update the loading message after a short delay
  setTimeout(() => {
    document.getElementById('loadingMessage').textContent = 'Preparing your results...';
  }, 2000);

  // Show the final screen after loading
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
  // Get user input values
  const heightFeet = parseInt(document.getElementById('heightFeet').value);
  const heightInches = parseInt(document.getElementById('heightInches').value);
  const currentWeight = parseInt(document.getElementById('currentWeight').value);
  const desiredWeight = parseInt(document.getElementById('desiredWeight').value);

  // Validate inputs
  if (isNaN(heightFeet) || isNaN(heightInches) || isNaN(currentWeight) || isNaN(desiredWeight)) {
    alert("Please fill in all fields correctly.");
    return;
  }

  // Convert height to inches
  const totalHeightInches = (heightFeet * 12) + heightInches;

  // Calculate BMI
  const bmi = (currentWeight / (totalHeightInches * totalHeightInches)) * 703;

  // Prepare dynamic content for the offer
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
  const afterMessage = `Imagine yourself reaching your goal weight of ${desiredWeight} pounds. The changes can start today with our revolutionary method.`;

  // Update the final screen with the personalized message
  document.getElementById('bmiResult').textContent = bmiResultText;
  document.getElementById('afterMessage').textContent = afterMessage;

  // Hide the height/weight input section and show the loading screen
  document.getElementById('question5').style.display = 'none';
  showLoadingScreen();
}

function showLoadingScreen() {
  // Display the loading screen
  document.getElementById('loadingScreen').style.display = 'block';
  document.getElementById('progressBar').style.display = 'none';

  // Update the loading message after a short delay
  setTimeout(() => {
    document.getElementById('loadingMessage').textContent = 'Preparing your results...';
  }, 2000);

  // Show the final screen after loading
  setTimeout(() => {
    document.getElementById('loadingScreen').style.display = 'none';
    document.getElementById('finalScreen').style.display = 'block';
  }, 4000);
}

function showLoadingScreen() {
  // Display the loading screen
  document.getElementById('loadingScreen').style.display = 'block';
  document.getElementById('progressBar').style.display = 'none';

  // Update the loading message after a short delay
  setTimeout(() => {
    document.getElementById('loadingMessage').textContent = 'Preparing your results...';
  }, 2000);

  // Show the final screen after loading
  setTimeout(() => {
    document.getElementById('loadingScreen').style.display = 'none';
    document.getElementById('finalScreen').style.display = 'block';
  }, 4000);
}

function updateProgressBar(progress) {
  document.getElementById('progressBar').style.width = progress + '%';
}

