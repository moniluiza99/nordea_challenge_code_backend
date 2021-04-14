console.log("Triangle")
const { query } = require('express')
const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  let {valueA, valueB, valueC} = req.query; console.log(req);
  if(valueA === valueB && valueB ===valueC){
      res.json({triangleType:'equilateral'})
  }else{
      res.json({triangleType:'scalene'})
  }

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})