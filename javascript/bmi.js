
function calculateBMI() {
    const height = document.querySelector('#height-input').value;
    const weight = document.querySelector('#weight-input').value;

    const bmi = (weight / ((height * height) / 10000)).toFixed(1);

    return bmi
}


function bmiCategoryFinder() {
    const bmi = calculateBMI();
    let category;

    if (bmi < 18.5) { category = 'Underweight' }
    else if (bmi >= 18.5 && bmi < 24.9) { category = 'Normal' }
    else if (bmi >= 24.9 && bmi < 29.9) { category = 'Overweight' }
    else if (bmi >= 29.9 && bmi < 34.9) { category = 'Obese' }
    else if (bmi >= 35) { category = 'Extremly obese' }

    return category
}


function showBmiResults() {
    const height = document.querySelector('#height-input').value;
    const weight = document.querySelector('#weight-input').value;

    if (height == '' || weight == '') return;

    const bmi = document.querySelector('#BMI');
    const category = document.querySelector('#BMI-category');
    const resultSections = document.querySelector('.section-bmi-results');

    bmi.innerText = calculateBMI();
    category.innerText = bmiCategoryFinder();
    resultSections.style.display = 'block';
}


document.addEventListener('click', (event) => {
    if (event.target.closest('#calculate-bmi')) {
        showBmiResults()

    } else if (event.target.closest('.scroll')) {
        window.scrollTo({
            top: 500,
            left: 0,
            behavior: 'smooth'
        })
    }
})

