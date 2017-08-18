//vars part two, electric boogaloo
var express = require('express');
var router = express.Router();
var pool = require('./pool');



router.get('/', function (){
    console.log('Get route hit');
    pool.connect( function (err, db, done){
        if (err){
            console.log('Error hitting db', err);
            res.sendStatus(500);
        } else {
            db.query(
                'SELECT owner.first_name, owner.last_name, pets.breed, pets.color FROM owner JOIN visits ON owner.id = visits.owner_id JOIN pets ON pets.id = visits.pets_id WHERE visits.check_out_date IS NULL;',
            function (queryErr, result){
                if (queryErr){
                    console.log('Error making query', queryErr);
                    res.sendStatus(500);
                } else {
                    res.send(result.rows);
                }
            }) 
        }
    })
});

router.post('/', function (){
    console.log('Post route hit');
    
});

router.put('/', function (){
    console.log('Put route hit');
    
});

router.delete('/', function (){
    console.log('Delete route hit');
    
});


//gotta send it somewhere
module.exports = router;