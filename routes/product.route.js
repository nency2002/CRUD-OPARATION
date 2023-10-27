const { Router } = require("express")
const pro = require("../models/product.schema")

const router = Router()

router.get("/pro",  (req, res) => {
    res.render("product")
})

router.post("/create" , async (req, res) => {
    let data = await pro.create(req.body);
    res.send(data)
})

router.patch("/:id", async (req, res) => {
    let {id} = req.params
    let data = await pro.findByIdAndUpdate(id , req.body);
    res.send(data);
})
router.delete("/:id", async (req, res) => {
    let {id} = req.params
    let data = await pro.findByIdAndDelete(id);
    res.send(data);
})
router.get("/products" ,async  (req, res) => {
    let data = await pro.find()
    res.send(data)
})
module.exports = router