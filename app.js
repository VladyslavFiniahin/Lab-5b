 // Task-1
  function calculateByHeron() {
    const side1 = parseFloat(document.getElementById('side1').value);
    const side2 = parseFloat(document.getElementById('side2').value);
    const side3 = parseFloat(document.getElementById('side3').value);

    const semiPerimeter = (side1 + side2 + side3) / 2;
    const area = Math.sqrt(semiPerimeter * (semiPerimeter - side1) * (semiPerimeter - side2) * (semiPerimeter - side3));
    
    document.getElementById('resultHeron').textContent = isNaN(area) ? 'Не знайдено' : area.toFixed(2);
  }

 // Task-2
  function calculateBySAS() {
    const sideA = parseFloat(document.getElementById('sideA').value);
    const sideB = parseFloat(document.getElementById('sideB').value);
    const angleC = parseFloat(document.getElementById('angleC').value);

    const angleInRadians = (angleC * Math.PI) / 180;
    const area = (sideA * sideB * Math.sin(angleInRadians)) / 2;

    document.getElementById('resultSAS').textContent = isNaN(area) ? 'Не знайдено' : area.toFixed(2);
  }

 // Task-3
  function calculateBySideHeight() {
    const side = parseFloat(document.getElementById('side').value);
    const height = parseFloat(document.getElementById('height').value);
    const area = (side * height) / 2;

    document.getElementById('resultSideHeight').textContent = isNaN(area) ? 'Не знайдено' : area.toFixed(2);
  }
  
 // Task-5
  function calculateBySidesAndRadius() {
    const side1Circle = parseFloat(document.getElementById('side1Circle').value);
    const side2Circle = parseFloat(document.getElementById('side2Circle').value);
    const side3Circle = parseFloat(document.getElementById('side3Circle').value);
    const radiusCircle = parseFloat(document.getElementById('radiusCircle').value);

    const semiPerimeter = (side1Circle + side2Circle + side3Circle) / 2;
    const area = (side1Circle * side2Circle * side3Circle) / (4 * radiusCircle);

    document.getElementById('resultSidesAndRadius').textContent = isNaN(area) ? 'Не знайдено' : area.toFixed(2);
  } 

 // Task-6
  function checkPalindrome() {
    const number = document.getElementById('numberPalindrome').value.toString();
    const reversedNumber = number.split('').reverse().join('');
    const resultDisplay = document.getElementById('resultPalindrome');

    if (number === reversedNumber) {
      resultDisplay.textContent = `Число ${number} є паліндром`;
    } else {
      resultDisplay.textContent = `Число ${number} не є паліндром`;
    }
  }

 // Task-7
  function checkAnagram() {
    const word1 = document.getElementById('word1').value.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
    const word2 = document.getElementById('word2').value.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');

    const resultDisplay = document.getElementById('resultAnagram');
    if (word1 === word2) {
      resultDisplay.textContent = `анаграма`;
    } else {
      resultDisplay.textContent = `не анаграма`;
    }
  }

  // Task-8
  function getFibonacciNumber() {
    const index = parseInt(document.getElementById('fibIndex').value);

    if (index <= 0) {
      document.getElementById('resultFibonacci').textContent = 'Введіть число';
      return;
    }

    let prev = 0, curr = 1;
    for (let i = 2; i <= index; i++) {
      const next = prev + curr;
      prev = curr;
      curr = next;
    }

    document.getElementById('resultFibonacci').textContent = `Число у послідовності Фібоначчі під номером ${index} - ${curr}`;
  }
  
  // Task-9
  function checkFibonacci() {
    const numberToCheck = parseInt(document.getElementById('numberToCheck').value);

    let prev = 0, curr = 1;
    while (curr < numberToCheck) {
      const next = prev + curr;
      prev = curr;
      curr = next;
    }

    const resultDisplay = document.getElementById('resultFibCheck');
    if (curr === numberToCheck) {
      resultDisplay.textContent = `Число ${numberToCheck} належить послідовності Фібоначчі`;
    } else {
      resultDisplay.textContent = `Число ${numberToCheck} не належить послідовності Фібоначчі`;
    }
  }
