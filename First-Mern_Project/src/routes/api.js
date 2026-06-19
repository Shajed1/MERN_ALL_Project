const express = require('express');
const Crudecontroller=require("../controllers/Crudecontroller")

const router = express.Router();
// user section
router.post('/productCeate',Crudecontroller.createData);
router.get('/readdata',Crudecontroller.readdata);
router.get('/readdatabyId/:id',Crudecontroller.readDatabyId);
router.put('/updateData/:id',Crudecontroller.updatedata);
router.delete('/delete/:id',Crudecontroller.Deletedelete);


module.exports=router;
