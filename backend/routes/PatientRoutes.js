const router = require('express').Router()

const PatientController = require('../controllers/PatientController')

// middlewares
const verifyToken = require('../helpers/check-token')
const { imageUpload } = require('../helpers/image-upload')

router.post(
  '/create',
  verifyToken,
  imageUpload.array('images'),
  PatientController.create,
)
router.get('/', PatientController.getAll)
router.get('/:id', PatientController.getPatientById)
router.delete('/:id', verifyToken, PatientController.removePatientyId)
router.patch(
  '/:id',
  verifyToken,
  imageUpload.array('images'),
  PatientController.updatePatient
)
router.patch('/schedule/:id', verifyToken, PatientController.schedule)
router.patch('/conclude/:id', verifyToken, PatientController.concludeAdoption)

module.exports = router
