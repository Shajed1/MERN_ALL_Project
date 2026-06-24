const {
    FeturesListService
}=require("../service/FeturesService")


exports.FeturesList=async (req, res) => {
    let result=await FeturesListService(req);
    return res.status(200).json(result);
}