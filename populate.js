const async = require('async');
const {getBrands} = require('node-car-api');
const {getModels} = require('node-car-api');

async function asyncGetBrands(){
  const brands = await getBrands();
  console.log(brands);
}

async function asyncGetModels(){
  const models = await getModels('PEUGEOT');
  console.log(models);
}

//start();
asyncGetModels();
