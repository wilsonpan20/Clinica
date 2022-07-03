const Patient = require('../models/Patient')

// helpers
const getUserByToken = require('../helpers/get-user-by-token')
const getToken = require('../helpers/get-token')
const ObjectId = require('mongoose').Types.ObjectId

module.exports = class PatientController {
  // create paciente
  static async create(req, res) {
   
    // validations
    if (!nome) {
      res.status(422).json({ message: '' })
      return
    }

    if (!nome) {
      res.status(422).json({ message: ''})
      return
    }

    if (!nome) {
      res.status(422).json({ message: '' })
      return
    }

    if (!nome) {
      res.status(422).json({ message: '' })
      return
    }

    if (!nome) {
      res.status(422).json({ message: '' })
      return
    }

    // get user
    const token = getToken(req)
    const user = await getUserByToken(token)

    // create paciente
    const Patient = new Patient({
     
      
    })

    images.map((image) => {
      patient.images.push(image.filename)
    })

    try {
      const newPatient = await Patient.save()

      res.status(201).json({
        message: 'Paciente cadastrado com sucesso!',
        newPet: newPet,
      })
    } catch (error) {
      res.status(500).json({ message: error })
    }
  }

  
  static async getAll(req, res) {
    const pets = await Patient.find().sort('-createdAt')

    res.status(200).json({
      patients: patients,
    })
  }

  // get all user 
  static async getAllUserPatient(req, res) {
    // get user
    const token = getToken(req)
    const user = await getUserByToken(token)

    const patients = await Pet.find({ 'user._id': user._id })

    res.status(200).json({
      patients,
    })
  }



  
  static async getPatientById(req, res) {
    const id = req.params.id

    // check if id is valid
    if (!ObjectId.isValid(id)) {
      res.status(422).json({ message: 'ID inválido!' })
      return
    }

    // check if patient exists
    const patient = await Patient.findOne({ _id: id })

    if (!patient) {
      res.status(404).json({ message: 'Pet não encontrado!' })
      return
    }

    res.status(200).json({
      patient: patient,
    })
  }

  // remove a patient
  static async removePatientById(req, res) {
    const id = req.params.id

    // check if id is valid
    if (!ObjectId.isValid(id)) {
      res.status(422).json({ message: 'ID inválido!' })
      return
    }

    // check if Patient exists
    const Patient = await patient.findOne({ _id: id })

    if (!Patient) {
      res.status(404).json({ message: 'Paciente  não encontrado!' })
      return
    }

    // check if user registered this Patient
    const token = getToken(req)
    const user = await getUserByToken(token)

    if (patient.user._id.toString() != user._id.toString()) {
      res.status(404).json({
        message:
          'Houve um problema em processar sua solicitação, tente novamente mais tarde!',
      })
      return
    }

    await patient.findByIdAndRemove(id)

    res.status(200).json({ message: 'paciente removido com sucesso!' })
  }

  // update a Patient
  static async updatePet(req, res) {
  

    const updateData = {}

    // check if Patient exists
    const patient = await Pet.findOne({ _id: id })

    if (!patient) {
      res.status(404).json({ message: 'Paciente não encontrado!' })
      return
    }

  }

  }





    

     
  
  

