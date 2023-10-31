import SubmissionModel from '../models/SubmissionModel.js';

export const createSubmission = async (req, res) => {
  try {
    const submission = await SubmissionModel.create(req.body);
    res.status(201).json({ msg: "Submission Created", submission });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
