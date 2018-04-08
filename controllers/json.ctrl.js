
module.exports.json = function (req, res) {

    var query = req.query;

    var parm = req.params.hotelId;
    if (query && query.offset) {
        console.log("Got offset " + query.offset)
    }

    console.log("Request Param:" + parm);
    res
        .status(200)
        .json({json:true})
};
