const express = require('express'); 
const router = express.Router();

const blogController = require('../Controllers/blogController');
const blogDetailsController = require('../Controllers/blogDetailsController');
const commentController = require('../Controllers/commentController');
const messageController = require('../Controllers/messageController');
const portfolioController = require('../Controllers/portfolioController');
const productController = require('../Controllers/productController');
const profitController = require('../Controllers/profitController');
const projectController = require('../Controllers/projectController');
const serviceController = require('../Controllers/serviceController');
const tittleController = require('../Controllers/tittleController');

router.get('/create1',blogController.create1);
router.get('/read2',blogController.read2);
router.get('/delete3',blogController.delete3);
router.get('/update4',blogController.update4);

router.get('/create5',blogDetailsController.create5);
router.get('/read6',blogDetailsController.read6);
router.get('/delete7',blogDetailsController.delete7);
router.get('/update8',blogDetailsController.update8);

router.get('/create9',commentController.create9);
router.get('/read10',commentController.read10);
router.get('/delete11',commentController.delete11);
router.get('/update12',commentController.update12);

router.get('/create13',messageController.create13);
router.get('/read14',messageController.read14);
router.get('/delete15',messageController.delete15);
router.get('/update16',messageController.update16);

router.get('/create17',portfolioController.create17);
router.get('/read18',portfolioController.read18);
router.get('/delete19',portfolioController.delete19);
router.get('/update20',portfolioController.update20);

router.get('/create21',productController.create21);
router.get('/read22',productController.read22);
router.get('/delete23',productController.delete23);
router.get('/update24',productController.update24);

router.get('/create25',profitController.create25);
router.get('/read26',profitController.read26);
router.get('/delete27',profitController.delete27);
router.get('/update28',profitController.update28);

router.get('/create29',projectController.create29);
router.get('/read30',projectController.read30);
router.get('/delete31',projectController.delete31);
router.get('/update32',projectController.update32);

router.get('/create33',serviceController.create33);
router.get('/read34',serviceController.read34);
router.get('/delete35',serviceController.delete35);
router.get('/update36',serviceController.update36);

router.get('/create37',tittleController.create37);
router.get('/read38',tittleController.read38);
router.get('/delete39',tittleController.delete39);
router.get('/update40',tittleController.update40);



module.exports=router;