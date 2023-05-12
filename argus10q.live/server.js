const express = require('express')
const app =  express()
const port = 3000
const website = 'argus10q.live'
app.listen(port, () => console.log(`${website} listening on port ${port}!`))
app.use(express.static(__dirname + '/public'))
