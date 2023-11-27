const userModel = require('../models/userModel');

// GET DONAR LIST
const getDonarsListController = async (req, res) => {
  try {
    const donarData = await userModel.find({ role: 'donar' }).sort({ createdAt: -1 });

    return res.status(200).send({
      success: true,
      Toatlcount: donarData.length,
      message: 'Donar List Fetched Successfully',
      donarData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: 'Error In Donar List API',
      error,
    });
  }
};

// GET HOSPITAL LIST
const getHospitalListController = async (req, res) => {
  try {
    const hospitalData = await userModel.find({ role: 'hospital' }).sort({ createdAt: -1 });

    return res.status(200).send({
      success: true,
      Toatlcount: hospitalData.length,
      message: 'Hospital List Fetched Successfully',
      hospitalData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: 'Error In Hospital List API',
      error,
    });
  }
};

// GET ORG LIST
const getOrgListController = async (req, res) => {
  try {
    const orgData = await userModel.find({ role: 'organisation' }).sort({ createdAt: -1 });

    return res.status(200).send({
      success: true,
      Toatlcount: orgData.length,
      message: 'ORG List Fetched Successfully',
      orgData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: 'Error In ORG List API',
      error,
    });
  }
};

// DELETE DONAR
const deleteDonarController = async (req, res) => {
  try {
    await userModel.findByIdAndDelete(req.params.id);
    return res.status(200).send({
      success: true,
      message: 'Record Deleted successfully',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: 'Error while deleting',
      error,
    });
  }
};

// UPDATE DONAR
const updateDonarController = async (req, res) => {
  try {
    const updatedDonar = await userModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.status(200).send({
      success: true,
      message: 'Donar Record Updated successfully',
      updatedDonar,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: 'Error while updating Donar',
      error,
    });
  }
};

// UPDATE HOSPITAL
const updateHospitalController = async (req, res) => {
  try {
    const updatedHospital = await userModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.status(200).send({
      success: true,
      message: 'Hospital Record Updated successfully',
      updatedHospital,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: 'Error while updating Hospital',
      error,
    });
  }
};


//UPDATE ORGANIZATION
const updateOrgController = async (req, res) => {
  try {
    const updatedOrg = await userModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.status(200).send({
      success: true,
      message: 'Organization Record Updated successfully',
      updatedOrg,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: 'Error while updating Organization',
      error,
    });
  }
};

// Export the updated controller
module.exports = {
  getDonarsListController,
  getHospitalListController,
  getOrgListController,
  deleteDonarController,
  updateDonarController,
  updateHospitalController,
  updateOrgController, // Add the updateOrgController
};
