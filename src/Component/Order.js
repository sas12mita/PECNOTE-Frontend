const noteBookModel = require("../Models/noteBookModel");
const fs=require("fs-extra")
const slugify=require("slugify")
const uploadNote= async (req,res)=>
{
   try {
    const {name,slug,description,price,quantity,shipping}=req.fields;
    const {photo}=req.files;
    const note = new noteBookModel({ ...req.fields, slug: slugify(name) });
    if (photo) {
        note.photo.data = fs.readFileSync(photo.path);
        note.photo.contentType = photo.type;
    }
    await note.save();
    res.status(201).send({
      success: true,
      message: "Product Created Successfully",
      note,
    });
   } catch (error) {
    console.log(error)
   }
}
module.exports = { uploadNote};