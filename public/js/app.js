
    const weatherForm =  document.querySelector('form')
    const search =document.querySelector('input')
    const pOne = document.querySelector('#p1')
    const pTwo = document.querySelector('#p2')

console.log('git')

    weatherForm.addEventListener('submit',(event) => { 
 

  event.preventDefault();

  fetch('http://localhost:3000/weather?address=' + search.value ).then((response) => { 

    response.json().then((data) => { 
        if(data.error) {
            console.log(data.error)
        return   pOne.textContent = data.error
        }
        else { 
    pOne.textContent = data.location
    pTwo.textContent = data.temp
        }
    })
    
    })

    })
    