const path = require('path')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const express = require('express')

const app = express()
const hbs = require('hbs')


const pubdir = path.join(__dirname, '../public')
const viewsdir = path.join(__dirname, "../templates/views")
const partialsDir = path.join(__dirname, "../templates/partials")



app.set('view engine', 'hbs')
app.set('views', viewsdir )
hbs.registerPartials(partialsDir)


//setup static dir use
app.use(express.static(pubdir))


app.get('', (req,res) => { 



    
    res.render('index' , {
        title: "weather app",
        name: " or"

    })

})




app.get('/help', (req,res) => { 

    res.render('help' , {
        title: "help page",
        name: " or"

    })

})
app.get('/weather', (req,res) => { 
    if(!req.query.address) {
        return res.send ({error:'provide search term'})
    }
const address= req.query.address
    geocode(address, (error, {location, current} = {} )   =>  { 
        if(error) { 
            return res.send ({error:'error 1' , error})
        }
    
    forecast(location,  (error, foreData) => {
        if(error) { 
            return res.send('Error2', error)
        }   
      

    res.send({
        location: location , 
        temp: foreData.temp , 
        desc: foreData
    })})
}) })

app.get('/products', (req,res) => { 
    if(!req.query.search) {
        return res.send ({error:'provide search term'})
    }
    res.send(
        {products: [req.query.search]
    })
})

app.get('*', (req,res) => { 

    res.render('404' , {
        title: "404",
        name: " or",
        message: " page not found"

    })

    })

app.listen(3000, () => { 

    console.log('server up11');


})