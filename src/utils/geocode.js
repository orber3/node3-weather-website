const request = require('postman-request')

const geocode = (address, callback) =>  {
    const mapUrl ="https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1Ijoib3JiZXIzIiwiYSI6ImNraGhoZ3VyZTBuZ2Yycm85NnZtem13eTkifQ.Fm8orQyywFPNdyODWVgOuw"

    request({url: mapUrl,json: true}, (error,{body}) => {
        
        if(error) { 
            callback('unable to connect to geo services' , undefined)

         }

       else if(body.features.length === 0) {

            callback( 'body features error. cant find location' , undefined)
       }
       else {
            callback(undefined , {

                latitue: body.features[0].center[0],
                longtitue: body.features[0].center[1],
                location: body.features[0].place_name

            })

       }
}  
 ) }


module.exports= geocode