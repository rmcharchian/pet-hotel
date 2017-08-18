//vars part two, electric boogaloo
var express = require('express');
var router = express.Router();
var pool = require('../modules/pool');



router.get('/', function (req,res) {
    console.log('Get route hit');
    pool.connect(function (err, db, done) {
        if (err) {
            console.log('Error hitting db', err);
            res.sendStatus(500);
        } else {
            db.query(
                'SELECT owners.first_name, owners.last_name, pets.breed, pets.color FROM owners JOIN visits ON owners.id = visits.owner_id JOIN pets ON pets.id = visits.pets_id WHERE visits.check_out_date IS NULL;',
                function (queryErr, result) {
                    if (queryErr) {
                        console.log('Error making query', queryErr);
                        res.sendStatus(500);
                    } else {
                        res.send(result.rows);
                    }
                })
        }
    })
});

router.post('/ownersRoute', function (req, res) {
    console.log('Owners post route hit');
    pool.connect(function (err, db, done) {
        if (err) {
            console.log('Error hitting db', err);
            res.sendStatus(500);
        } else {
            db.query(
                'INSERT INTO owners (first_name, last_name) VALUES ($1, $2);',
                [req.body.firstName, req.body.lastName],
                function (queryErr, result) {
                    if (queryErr) {
                        console.log('Error making query', queryErr);
                        res.sendStatus(500);
                    } else {
                        res.send(result.rows);
                    }
                })
        }
    })
});

router.post('/petsRoute', function (req, res) {
    console.log('Owners post route hit');
    pool.connect(function (err, db, done) {
        if (err) {
            console.log('Error hitting db', err);
            res.sendStatus(500);
        } else {
            db.query(
                'INSERT INTO pets (pet_name, breed, color) VALUES ($1, $2, $3); INSERT INTO visits (check_in_date) VALUES (now());',
                [req.body.petName, req.body.petBreed, req.body.petColor, req.body.date],
                function (queryErr, result) {
                    if (queryErr) {
                        console.log('Error making query', queryErr);
                        res.sendStatus(500);
                    } else {
                        res.sendStatus(200);
                    }
                })
        }
    })
});

router.put('/', function () {
    console.log('Put route hit');

});

router.delete('/', function () {
    console.log('Delete route hit');

});


//gotta send it somewhere
module.exports = router;
