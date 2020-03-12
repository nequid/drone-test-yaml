const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// parse application/json
app.use(bodyParser.json())

app.get('/',(req,res)=>{
  console.log('Get request fired')
  res.send({status: 'ok v11'})
})

app.post('/',(req,res)=>{
  console.log('Post request fired')
  res.send({status: 'ok v11'})
})

app.listen(4000, () => {
  console.log('Server is listening on 4000')
});

