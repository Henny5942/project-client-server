const express= require("express")
const router= express.Router()
const photoController=require("../controllers/photoController")



router.get("/", photoController)
router.post("/", photoController)
router.put("/", photoController)
router.delete("/:id", photoController)


module.exports = router