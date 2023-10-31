import express from "express";
import {
    createSubmission,
} from "../controllers/SubmissionController.js";

const router = express.Router();

router.post('/submissions', createSubmission);


export default router;