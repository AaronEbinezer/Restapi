const express = require('express')
const AppDAO = require('./dao')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    // const dao = new AppDAO('./holybible.db').get(
    //     `SELECT Book FROM bible WHERE Chapter = ?`,
    //     [2]);
    
        // res.send(new AppDAO('./holybible.db').get(
        //     `SELECT Book FROM bible WHERE Chapter = ?`,
        //     [2]).then(bible =>{
        //         res.setHeader('Content-Type', 'application/json');
        //         res.json({result : bible});
        //         console.log(bible);
        //     })
            
        //     )
            new AppDAO('./holybible.db').get(
                `SELECT Book FROM bible WHERE Chapter = ?`,
                [2]).then(bible =>{
                    res.setHeader('Content-Type', 'application/json');
                    res.json({result : bible});
                    // console.log(bible);
                
})
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))