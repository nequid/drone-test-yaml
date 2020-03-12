const express = require('express')

const app = express()

app.get('/',(req,res)=>{
  console.log('Get request fired')
  res.send({status: 'ok v1'})
})

app.listen(4000, () => {
  console.log('Server is listening on 4000')
});

