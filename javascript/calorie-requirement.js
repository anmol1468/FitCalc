

function getDetails() {
    const age = document.querySelector('#age-input').value;
    const weight = document.querySelector('#weight-input').value;
    const height = document.querySelector('#height-input').value;
    const gender = document.querySelector('#gender-input').value;
    const workout = document.querySelector('#workout-input').value;

    return {
        age,
        weight,
        height,
        gender,
        workout,
    }
}

function calculateBmr() {
    const { age, weight, height, gender } = getDetails();
    let bmr;

    if (gender === 'male') {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else if (gender === 'female') {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }
    return bmr
}


function calculateCalRequired() {
    const { workout } = getDetails();
    const bmr = calculateBmr();
    let calorieRequirement;

    switch (workout) {
        case 'workout-l-1':
            calorieRequirement = bmr * 1.2;
            break;

        case 'workout-l-2':
            calorieRequirement = bmr * 1.375;
            break;

        case 'workout-l-3':
            calorieRequirement = bmr * 1.55;
            break;

        case 'workout-l-4':
            calorieRequirement = bmr * 1.725;
            break;

        case 'workout-l-5':
            calorieRequirement = bmr * 1.9;
            break;
    }

    return calorieRequirement;
}

function showCalorieRequirement() {
    const { age, weight, height } = getDetails();
    if (age == '' || weight == '' || height == '') return;

    const calorieRequirement = document.querySelector('#caloric-requirement');
    const deficitCalories = document.querySelector('#deficit-calories');
    const surplusCalories = document.querySelector('#surplus-calories');
    const requirementSection = document.querySelector('.section-calorie-requirement-results');

    calorieRequirement.innerText = Math.trunc(calculateCalRequired());
    deficitCalories.innerText = Math.trunc(calculateCalRequired()) - 500;
    surplusCalories.innerText = Math.trunc(calculateCalRequired()) + 500;
    requirementSection.style.display = 'block';

}


////////// event listeners 

document.addEventListener('click', (event) => {
    if (event.target.closest('.scroll')) {
        window.scrollTo({
            top: 550,
            left: 0,
            behavior: 'smooth'
        })
    } else if (event.target.closest('#calculate-calorie-requirement')) {
        showCalorieRequirement()
    }
})