const Joi = require('joi');

const userValidation = data => {
    const schema = Joi.object({
        userName: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(4).required()
    });
    return schema.validate(data);
};

module.exports.userValidation = userValidation;