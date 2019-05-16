var express = require('express');
const fs = require('fs');
var router = express.Router();

const awsi = require('../../module/utils/aws_interface.js');
const defaultRes = require('../../module/utils/utils');
const statusCode = require('../../module/utils/statusCode');
const resMessage = require('../../module/utils/responseMessage');

let client = new awsi.Client();
var db_partition = 'awsi-test';

router.post('/signup', async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;
  const nickname = req.body.nickname;

  if (!email || !name || !nickname || !password) {
    res.status(200).send(defaultRes.successFalse(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
  }

  const extras = {
    name: name,
    nickname: nickname
  };

  client.auth_register(email, password, extras, async (data) => {
    res.status(200).send(defaultRes.successTrue(statusCode.OK, resMessage.USER_INSERT_SUCCESS, data));
  });
});

router.post('/signin', async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    res.status(200).send(defaultRes.successFalse(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
  }

  client.auth_login(email, password, async(data)=>{
    res.status(200).send(defaultRes.successTrue(statusCode.OK, resMessage.SIGN_IN_SUCCESS, data));

  });
});

module.exports = router;
