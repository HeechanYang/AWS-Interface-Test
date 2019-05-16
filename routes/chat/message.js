var express = require('express');
var router = express.Router();

const defaultRes = require('../../module/utils/utils');
const statusCode = require('../../module/utils/statusCode');
const resMessage = require('../../module/utils/responseMessage');

router.get('/:roomIdx', async (req, res) => {
  const roomIdx = Number(req.params.roomIdx);
  
  if(!roomIdx){
    res.status(200).send(defaultRes.successFalse(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
  }

  let result;

  // Do Something

  if (!result) { 
    res.status(200).send(defaultRes.successFalse(statusCode.DB_ERROR, resMessage.USER_INSERT_FAIL));
  } else { 
    res.status(200).send(defaultRes.successTrue(statusCode.OK, resMessage.USER_INSERT_SUCCESS, result));
  }
});

router.post('/', async (req, res) => {
  const writer = Number(req.body.writer);
  const title = req.body.title;
  const content = req.body.content;
  let password = req.body.boardPw;

  if(!writer || !title || !content || !password){
    res.status(200).send(defaultRes.successFalse(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
  }

  let result;

  // Do Something

  if (!result) { 
    res.status(200).send(defaultRes.successFalse(statusCode.DB_ERROR, resMessage.USER_INSERT_FAIL));
  } else { 
    res.status(200).send(defaultRes.successTrue(statusCode.OK, resMessage.USER_INSERT_SUCCESS, result));
  }
});

router.delete('/', async (req, res) => {
  const targetBoardIdx = req.body.boardIdx;
  let password = req.body.boardPw;

  if(!targetBoardIdx || !password){
    res.status(200).send(defaultRes.successFalse(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
  }

  let result;

  // Do Something

  if (!result) { 
    res.status(200).send(defaultRes.successFalse(statusCode.DB_ERROR, resMessage.USER_INSERT_FAIL));
  } else { 
    res.status(200).send(defaultRes.successTrue(statusCode.OK, resMessage.USER_INSERT_SUCCESS, result));
  }
});

module.exports = router;
