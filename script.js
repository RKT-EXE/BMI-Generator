
const inptform = document.querySelector('form')

inptform.addEventListener('submit',function(event){
    
    event.preventDefault();

    const userHeight = parseInt(document.getElementById('height').value);
    const userWeight = parseInt(document.getElementById('weight').value);
    const result = document.querySelector('#result');

   
    if(userHeight === '' || userHeight < 0 || isNaN(userHeight)) {
        result.innerHTML = `Please give a valid (Height)!`
    }
    else if(userWeight==='' || userWeight < 0 || isNaN(userWeight)){
        result.innerHTML = `Please give a valid (Weight)!`
    }
    else{
        const bmi  = (userWeight / ((userHeight*userHeight)/10000)).toFixed(2);
        result.innerHTML = `Your BMI : ${bmi}`
    }

})


