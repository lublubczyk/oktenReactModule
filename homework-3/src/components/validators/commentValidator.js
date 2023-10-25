import Joi from "joi";

const commentValidator = Joi.object({
    postId: Joi.number().integer().min(1).max(100).required(),
    name: Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄ]{1,20}$/).required().messages({
        'string.pattern.base': 'Only letters min 1  max 20'
    }),
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    body: Joi.string().min(1).max(300).required()  
})

export { commentValidator };