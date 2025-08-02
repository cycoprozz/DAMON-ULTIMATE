const cloudinary = require('cloudinary').v2;
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadFile = async (file, projectId) => {
  try {
    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(file.path, {
      resource_type: 'auto',
      folder: 'cariblifemedia'
    });

    // Save file record to database
    const fileRecord = await prisma.file.create({
      data: {
        project_id: projectId,
        filename: file.originalname,
        file_url: result.secure_url,
        file_size: file.size,
        file_type: file.mimetype
      }
    });

    return fileRecord;
  } catch (error) {
    console.error('File upload error:', error);
    throw new Error('File upload failed');
  }
};

const deleteFile = async (fileId) => {
  try {
    const file = await prisma.file.findUnique({
      where: { id: fileId }
    });

    if (!file) {
      throw new Error('File not found');
    }

    // Extract public_id from Cloudinary URL
    const urlParts = file.file_url.split('/');
    const publicId = urlParts[urlParts.length - 1].split('.')[0];

    // Delete from Cloudinary
    await cloudinary.uploader.destroy(publicId);

    // Delete from database
    await prisma.file.delete({
      where: { id: fileId }
    });

    return { message: 'File deleted successfully' };
  } catch (error) {
    console.error('File deletion error:', error);
    throw new Error('File deletion failed');
  }
};

const getProjectFiles = async (projectId) => {
  try {
    const files = await prisma.file.findMany({
      where: { project_id: projectId },
      orderBy: { uploaded_at: 'desc' }
    });

    return files;
  } catch (error) {
    console.error('Get files error:', error);
    throw new Error('Failed to get project files');
  }
};

module.exports = {
  uploadFile,
  deleteFile,
  getProjectFiles
}; 