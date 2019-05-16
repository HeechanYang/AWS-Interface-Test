var express = require('express');
var router = express.Router();

const defaultRes = require('../../module/utils/utils');
const statusCode = require('../../module/utils/statusCode');
const resMessage = require('../../module/utils/responseMessage');

// GET Room using `userIdx`
router.get('/user/:userIdx', async (req, res) => {
  const userIdx = Number(req.params.userIdx);
  
  if(!userIdx){
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

// GET Room using `roomIdx`
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

// POST Room using request.body
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

// PUT Room using request.body
router.put('/', async (req, res) => {
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
})

// DELETE Room using request.body
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
})

module.exports = router;
