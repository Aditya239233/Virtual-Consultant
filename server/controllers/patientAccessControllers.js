const patient = require("../model/patient");
const bcrypt = require("bcrypt");

const patientRegister= async (request, response) => {
    console.log(response.statusCode);
    try{
        const patientExists = await patient.findOne({ email: request.body.email});
        if(patientExists) 
        {
            return response.status(409).send('This patient already exists');
        }

    }
    catch(error){
        response.status(400).send(error);
    }
    const new_patient = new patient({
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        username: request.body.username,
        email: request.body.email,
        password: request.body.password,
        age: request.body.age,
        weight: request.body.weight,
        height: request.body.height,
        bmi: request.body.bmi,
        allergies: request.body.allergies,
        confirm_password: request.body.confirm_password
    });
    bcrypt.hash(new_patient.password, 10, function (err, hash) {
        if (err) {
            return next(err);
        }
        new_patient.password = hash;
        new_patient.confirm_password = hash;
        new_patient
            .save()
            .then((data) => {
                console.log("successfully created a new patient");
            })
            .catch((error) => {
                console.log("error", error);
            });
    });
    response.json({
        'statuscode': response.statusCode
    })
}

module.exports={
    patientRegister
}