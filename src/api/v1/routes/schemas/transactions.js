const Joi = require('joi');

const transactionsSchemas = Joi.object({
    transaction: Joi.object({
        product: Joi.string().min(2).max(30).required(),
        customer: Joi.string().min(3).max(30).required(),
        total_price: Joi.number().min(0).required(),
        currency: Joi.string().min(1).max(30).required(),
        credit_card_type: Joi.string().min(1).max(30).required(),
        credit_card_number: Joi.number().min(1).required(),
    })
})

module.exports = {
    transactionsSchemas
}
