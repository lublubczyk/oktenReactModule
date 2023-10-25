import Joi from "joi";

const userValidator = Joi.object({
    name: Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄ]{1,20}$/).required().messages({
        'string.pattern.base': 'Only letters min 1  max 20'
    }),
    username: Joi.string().alphanum().max(20).required(),
    website: Joi.string().uri().empty('').optional()
});

export { userValidator };