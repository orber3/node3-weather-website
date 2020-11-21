const request = require('postman-request')


const forecast =  (location, callback )  => { 
    const url ='http://api.weatherstack.com/current?access_key=d26a6181f1be205f56e0698a4d866414&query=' + location +  "" 

 request({url , json: true} , (error,{body}) => { 
 if(error) { 
     callback("unable to connect to forecast", undefined)
 }
  else if(body.error)   {
    callback("unable to find lcoation" , undefined)

  } 
  else {
       callback(undefined , {
    current: body.current.weather_descriptions[0] , 
    temp: body.current.temperature
  })}


}








 )} 

module.exports= forecast