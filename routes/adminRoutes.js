const express = require('express');
const authMiddleware = require('../middlewares/authMiddelware');
const {
  getDonarsListController,
  getHospitalListController,
  getOrgListController,
  deleteDonarController,
  updateDonarController,
  updateHospitalController,
  updateOrgController, // Add the updateDonarController
} = require('../controllers/adminController');
const adminMiddleware = require('../middlewares/adminMiddleware');

const router = express.Router();

// Routes

// GET || DONAR LIST
router.get('/donar-list', authMiddleware, adminMiddleware, getDonarsListController);

// GET || HOSPITAL LIST
router.get('/hospital-list', authMiddleware, adminMiddleware, getHospitalListController);

// GET || ORG LIST
router.get('/org-list', authMiddleware, adminMiddleware, getOrgListController);

// DELETE DONAR || GET
router.delete('/delete-donar/:id', authMiddleware, adminMiddleware, deleteDonarController);

// UPDATE DONAR || PUT
router.put('/update-donar/:id', authMiddleware, adminMiddleware, updateDonarController);
// UPDATE HOSPITAL || PUT
router.put('/update-hospital/:id', authMiddleware, adminMiddleware, updateHospitalController);
// PUT || UPDATE ORGANIZATION
router.put('/update-organization/:id', authMiddleware, adminMiddleware, updateOrgController);

module.exports = router;
