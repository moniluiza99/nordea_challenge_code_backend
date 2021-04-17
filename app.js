const express = require('express')
const areTwoSidesSame = require('./helpers').areTwoSidesSame
const doesTriangleExist = require('./helpers').doesTriangleExist;
const app = express()
const port = 8000

app.get('/', (req, res) => {
  let {valueA, valueB, valueC} = req.query;
  valueA = parseInt(valueA)
  valueB = parseInt(valueB)
  valueC = parseInt(valueC)
  if(!doesTriangleExist(valueA, valueB, valueC)){
    res.json({triangleType:'not possible'});
    return;
  }
  if(valueA === valueB && valueB ===valueC){
     res.json({triangleType:'equilateral'})
     return;
  }
  try{
  if(areTwoSidesSame(valueA, valueB, valueC)){
    res.json({triangleType: 'isoceles'})
    return;
  }
  }catch(e){
    console.log(e)
  }
  res.json({triangleType:'scalene'})

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})