function index(req,res){
    res.render("index");
}


function generate(req, res) {

    const name = req.body.name;
    const location = req.body.location;
    const occupation = req.body.occupation;
    const education = req.body.education;
    const experience = req.body.experience;


    const data = {

        name : name,
        location : location,
        occupation : occupation,
        education : education,
        experience : experience,
    };

    res.render("resume", data);
}


const resumeController = {index, generate};

module.exports = resumeController;