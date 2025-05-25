export class healtController{

static async ping (req,res) {

    console.log(req.params)

    res.status(200).json({message : "Pong is POng"})
}

static async ring (req,res) {

    console.log(req.params)

    res.status(200).json({message : "is ringing"})
}


}