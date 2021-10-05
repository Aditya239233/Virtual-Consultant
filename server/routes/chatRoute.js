var express = require("express");

const chatAccess = require('../controllers/conversationControllers')

const router = express.Router();

router.get('/retrieveConversation', chatAccess.retrieveConversation);
router.get('/retrieveAllConversationPartners', chatAccess.retrieveAllConversationPartners);
router.post('/chat', chatAccess.newChat);

module.exports=router;