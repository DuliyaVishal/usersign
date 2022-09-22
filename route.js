const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt= require("bcrypt")
const User = require("../models/model");

router.post("/postData", (req, res, next) => {

    // User.find({ email: req.body.email })
    //   .exec()
    //   .then(user => {
    //     if (user.length >= 1) {
    //       return res.status(409).json({
    //         message: "Mail exists"
    //       });
    //     } else {
    //       bcrypt.hash(req.body.password, 10, (err, hash) => {
    //         if (err) {
    //           return res.status(500).json({
    //             error: err
    //           });
    //         } else {
    //           const user = new User({
               
    //             email: req.body.email,
    //             password: hash
    //           });
    //           user
    //             .save()
    //             .then(result => {
    //               console.log(result);
    //               res.status(201).json({
    //                 message: "User created"
    //               });
    //             })
    //             .catch(err => {
    //               console.log(err);
    //               res.status(500).json({
    //                 error: err
    //               });
    //             });
    //         }
    //       });
    //     }
    //   });
      User.find({ userName: req.body.userName })
      .exec()
      .then(user => {
        if (user.length >= 1) {
          return res.status(409).json({
            message: "UserName exists"
          });
        } else {
          bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
              return res.status(500).json({
                error: err
              });
            } else {
              const user = new User({
               
                userName: req.body.userName,
                password: hash
              });
              user
                .save()
                .then(result => {
                  console.log(result);
                  res.status(201).json({
                    message: "User created"
                  });
                })
                .catch(err => {
                  console.log(err);
                  res.status(500).json({
                    error: err
                  });
                });
            }
          });
        }
      });
    //   User.find({ phone: req.body.phone })
    //   .exec()
    //   .then(user => {
    //     if (user.length >= 1) {
    //       return res.status(409).json({
    //         message: "Mail exists"
    //       });
    //     } else {
    //       bcrypt.hash(req.body.password, 10, (err, hash) => {
    //         if (err) {
    //           return res.status(500).json({
    //             error: err
    //           });
    //         } else {
    //           const user = new User({
               
    //             phone: req.body.phone,
    //             password: hash
    //           });
    //           user
    //             .save()
    //             .then(result => {
    //               console.log(result);
    //               res.status(201).json({
    //                 message: "User created"
    //               });
    //             })
    //             .catch(err => {
    //               console.log(err);
    //               res.status(500).json({
    //                 error: err
    //               });
    //             });
    //         }
    //       });
    //     }
    //   });
 });
module.exports = router;