const mongoose = require('../db/conn')
const { Schema } = mongoose

const Patient = mongoose.model(
  'Patient',
  new Schema({
    name: {
      type: String,
      required: true,
    },
    sexo: {
      type: String,
      required: true,
    },
    number_rg: {
      type: String,
      require:true,
    },
    number_cpf: {
      type: String,
      required: true,
    },
    birth_date: {
      type: Date,
      required: true,
    },
    images: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      require:true
    },
    number: {
      type: String,
    },

    user: Object,
    adopter: Object,
  }, {timestamps: true}),
)

module.exports = Patient
