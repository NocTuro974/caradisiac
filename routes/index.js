var express = require('express');
var router = express.Router();
const elasticsearch = require('elasticsearch');
const async = require('async');
const {getBrands} = require('node-car-api');
const {getModels} = require('node-car-api');

var client = new elasticsearch.Client({
    host : 'localhost:9200',
    log : 'trace'
})

var modelList = [];

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send("working");
});

router.get('/populate', async function(req, res, next) {
    await populate();
    res.send("indexage terminé");
});

router.get('/search', async function(req, res, next){
    let qres = await search();
    res.send("recherche terminée\n" + qres);
});

async function asyncGetModels(){
    let models = await getModels('PEUGEOT');
    models.forEach(element => {
        let index = {index : {_index : "models", _type : "model", _id : element.uuid}};
        modelList.push(index);
        modelList.push(element);
    });
}

async function populate(){
    console.log("Récupération des modèles")
    await asyncGetModels();

    console.log("Début de l'indexage")
    client.bulk({
        body : modelList
    },
    function(error, response){
        if (error){
            console.log(error);
        }
        else{
            console.log(response);
            console.log("indexation terminée");
        }
    });
}

async function search(){
    let res = await client.search({
        index : "models",
        type : "model",
        q : "brand:PEUGEOT"
    });
    console.log("passe ici");
    res.hits.hits.forEach(function(element){
        console.log(element._source)
    })
    return res.hits;
}

module.exports = router;
