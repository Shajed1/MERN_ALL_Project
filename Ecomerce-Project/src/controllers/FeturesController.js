const {
    FeturesListService,
    LegaldetailsService
}=require("../service/FeturesService")


exports.FeturesList=async (req, res) => {
    let result=await FeturesListService(req);
    return res.status(200).json(result);
}

exports.Legaldetails=async (req, res) => {
    let result=await LegaldetailsService(req);
    return res.status(200).json(result);
}