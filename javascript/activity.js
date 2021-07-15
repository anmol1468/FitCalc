document.addEventListener('click', (event) => {
    if (event.target.closest('.scroll')) {
        window.scrollTo({
            top: 710,
            left: 0,
            behavior: 'smooth'
        })
    } else if (event.target.closest('#open-running')) {
        document.querySelector('.exercise-calculations').style.display = 'block';
        document.querySelector('.running').style.display = 'block';
        document.querySelector('.skipping').style.display = 'none';
        document.querySelector('.cycling').style.display = 'none';
        document.querySelector('.section-activity-results').style.display = 'none';
    } else if (event.target.closest('#open-skipping')) {
        document.querySelector('.exercise-calculations').style.display = 'block';
        document.querySelector('.running').style.display = 'none';
        document.querySelector('.skipping').style.display = 'block';
        document.querySelector('.cycling').style.display = 'none';
        document.querySelector('.section-activity-results').style.display = 'none';
    } else if (event.target.closest('#open-cycling')) {
        document.querySelector('.exercise-calculations').style.display = 'block';
        document.querySelector('.running').style.display = 'none';
        document.querySelector('.skipping').style.display = 'none';
        document.querySelector('.cycling').style.display = 'block';
        document.querySelector('.section-activity-results').style.display = 'none';
    }
})



function getUserDetails() {
    const weights = document.querySelectorAll('.weight');
    const durations = document.querySelectorAll('.duration');
    const intensities = document.querySelectorAll('.intensity');

    let givenWeight;
    let givenDuration;
    let givenIntensity;

    for (let weight of weights) {
        if (weight.value != '') { givenWeight = +weight.value }
    }

    for (let duration of durations) {
        if (duration.value != '') { givenDuration = +duration.value }
    }

    for (let intensity of intensities) {
        if (intensity.value != '') { givenIntensity = +intensity.value }
    }


    return {
        givenDuration,
        givenWeight,
        givenIntensity
    }
}


function calculateCaloriesBurnt() {
    const { givenDuration, givenWeight, givenIntensity } = getUserDetails();

    return Math.trunc(givenDuration * (givenIntensity * 3.5 * givenWeight) / 200)
}


function showCalorieBurnResults() {
    let caloriesBurntDisplay = document.querySelector('#calories-burnt');

    caloriesBurntDisplay.innerText = calculateCaloriesBurnt();
    document.querySelector('.section-activity-results').style.display = 'block';
}

document.addEventListener('click', (event) => {
    if (event.target.closest('.calculate-calories-burnt')) {
        showCalorieBurnResults();
    }
})