import express from 'express';
import {addUser,getUser} from '../controller/user-controller.js';
import { newConversation,getConversation } from '../controller/conversationController.js';
import { newMessage,getMessage} from '../controller/messageController.js';
import { uploadFile } from '../controller/imgController.js';
// import upload from '../utils/upload.js';
import { getImage } from '../controller/imgController.js';

const route = express.Router();
 
route.post('/add',addUser);
route.get('/users',getUser);
route.post('/conversation/add',newConversation);
route.post('/conversation/get',getConversation);
  
route.post('/message/add',newMessage);
route.get('/message/get/:id',getMessage);

// route.post('/file/upload',upload.single("file"),uploadFile);
route.get('/file/:filename',getImage);

export default route;