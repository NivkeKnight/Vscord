const express = require('express')
const router = express.Router()
const dados = require('./dados')
const cors = require('cors')
router.use(cors())
router.get('/weapon/random', function(req,res){
    var number = Math.floor(Math.random(dados.length)*100)

    res.json(
        {
            
            "Author": "João Pedro",
            "Arma ": number,
            "Descrição" : dados[number]
        }
    )

})

router.get('/weapon/:component?/:subcomponent?', function(req,res){
    var component = req.params.component
    var subcomponent = req.params.subcomponent
    var value = req.query.value 
    var limit = req.query.limit || dados.length
    var order = req.query.order ? true : false
    var response = [];

    for(var i = 0; i<limit; i++){
        response.push(dados[i])
    }
    if(component && subcomponent) {
        if(component == "req") {
            response = response.filter((weapon) => weapon[component][subcomponent] <= value)
        }else if(component == "scale"){
            response = response.filter((weapon) => weapon[component][subcomponent] == value)
        }else {
            response = response.filter((weapon) => weapon[component][subcomponent] >= value)
        }
    } else {
        if(component == "durability") {
            response = response.filter((weapon) => weapon[component] >= value)
        }
        if(component == "weight") {
            response = response.filter((weapon) => weapon[component] <= value)
        }
        if(component == "obtained" || component == "attackTypes" ||component == "name") {
            response = response.filter((weapon) => JSON.stringify(weapon[component]).toLowerCase().includes(value.toLowerCase()))
        }
        if(component == "aotaOnly") {
            response = response.filter((weapon) => weapon[component] == true)
        }
    }

    if(order){
        if(component == "aotaOnly" || component == "obtained" || component == "attackTypes" || component == "scale") {
            component = "name";
            subcomponent = null;
        }
        if(!subcomponent){
            if(component == "name"){
                response.sort(function(a,b){
                    if ( a[component] < b[component] ){
                        return -1;
                      }
                      if ( a[component] > b[component] ){
                        return 1;
                      }
                      return 0;
                })
            }else if(component == "durability" || component == "weight"){
                response.sort(function(a,b){
                    return a[component] - b[component];
                })
            }
        }else{
            response.sort(function(a,b){
                return a[component][subcomponent] - b[component][subcomponent];
            })
        }
    }

    res.json(
        {
            "Author": "João Pedro",
            "Tamanho da lista":response.length,
            "Resultado" : response
        }
    )
})



module.exports = router