const express = require('express');
const router = express.Router();
const multer = require('multer');
const auth = require('../middleware/auth');
const { uploadFile, deleteFile, getProjectFiles } = require('../services/fileService');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop());
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 100 * 1024 * 1024 // 100MB limit
  },
  fileFilter: (req, file, cb) => {
    // Allow video and image files
    if (file.mimetype.startsWith('video/') || file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only video and image files are allowed.'), false);
    }
  }
});

// @route   POST api/files/upload/:projectId
// @desc    Upload file to project
// @access  Private
router.post('/upload/:projectId', auth, upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ msg: 'No file uploaded' });
    }

    const projectId = parseInt(req.params.projectId);
    const fileRecord = await uploadFile(req.file, projectId);

    res.json(fileRecord);
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ msg: 'File upload failed' });
  }
});

// @route   GET api/files/project/:projectId
// @desc    Get all files for a project
// @access  Private
router.get('/project/:projectId', auth, async (req, res) => {
  try {
    const projectId = parseInt(req.params.projectId);
    const files = await getProjectFiles(projectId);

    res.json(files);
  } catch (error) {
    console.error('Get files error:', error);
    res.status(500).json({ msg: 'Failed to get project files' });
  }
});

// @route   DELETE api/files/:fileId
// @desc    Delete a file
// @access  Private
router.delete('/:fileId', auth, async (req, res) => {
  try {
    const fileId = parseInt(req.params.fileId);
    await deleteFile(fileId);

    res.json({ msg: 'File deleted successfully' });
  } catch (error) {
    console.error('Delete file error:', error);
    res.status(500).json({ msg: 'Failed to delete file' });
  }
});

module.exports = router; 