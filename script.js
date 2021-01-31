// generate random button event
const generateRandomBtn = document.getElementById('generate-random-btn');
generateRandomBtn.addEventListener('click', function(){
    const randomPin = (Math.random()*10000).toFixed(0)
    document.getElementById('random-input').value = randomPin;
}) 



const buttonContainer = document.getElementById('button-container');
buttonContainer.addEventListener('click', function(event){
    const formUser = event.target.innerText;
    const randomNumberFormUser = document.getElementById('random-number');
    if(isNaN(formUser)){
        if(formUser === 'C'){
            randomNumberFormUser.value ='';
        }
        else if(formUser === '<'){
            randomNumberFormUser.value = (randomNumberFormUser.value).slice(0, -1);
        }
        else if(formUser === 'Submit'){
            const randomNumber = document.getElementById('random-input').value;
            
            if(randomNumberFormUser.value === randomNumber){
                document.getElementById('notify-success').style.display = 'block';
                document.getElementById('notify-error').style.display = 'none';
                console.log('is true', randomNumber , randomNumberFormUser)
            }
            else{
                document.getElementById('notify-error').style.display = 'block';
                document.getElementById('notify-success').style.display = 'none';
                
            }
        }
    }
    else{
        randomNumberFormUser.value += formUser;
    }  
})