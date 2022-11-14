//  var crypto = require('crypto');
 var express = require('express');
 var router = express.Router();
 var mongoose = require('mongoose');
 var Users = require('../models/user.js');


/* Create users and Merchants */
router.post('/create', function (req, res, next) {
            var Users1 = new Users({
                username: req.body.username,
                email: req.body.email,
                phone: req.body.phone,
                date: req.body.date              
            });
            //User or Merchant Creation
            Users1.save(function (err, post) {
                if (err) {
                    res.json({ "message": "Error", "status": 204 });
                } else {
                    // console.log(post);
                    res.json({ "message": "success", "status": 200 , data:post});

                }
            });
      });

// update profile details
router.put('/Update/:id', function (req, res, next) {
    console.log(req.body)
    Users.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, post) {
        if(err){
            res.json(204);
        }else{
           console.log(post);
           res.json(200);
        }


    });
});    


 module.exports = router;

