const express =  require('express')
const router = express.Router();
const {main, Alldata ,Iddata ,Detele ,update} = require('../Controllers/Allcontollersfunctiondata')


router.route('/').get((req,res)=>{
    res.send({"sucess":"data"})

}).post(main);


router.get('/dataall',Alldata)

router.route('/data/:id').get(Iddata).delete(Detele).put(update)



module.exports = router;
