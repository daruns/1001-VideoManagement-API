import { Request, Response, NextFunction } from 'express';
import multer from 'multer';
import { Readable } from 'stream';

// Configure Multer
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('video/')) {
      cb(null, true);
    } else {
      cb(new Error('Only video files are allowed!'));
    }
  },
  limits: {
    fileSize: 100 * 1024 * 1024, // 100MB limit
  }
}).single('video');

export const handleFileUpload = (req: Request, res: Response, next: NextFunction) => {
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });
  
  req.on('end', () => {
    console.log('Received data:', body.substring(0, 1000) + '...'); // Log first 1000 characters
    
    upload(req, res, (err: any) => {
      if (err instanceof multer.MulterError) {
        console.error('Multer error:', err);
        if (err.code === 'LIMIT_UNEXPECTED_FILE') {
          return res.status(400).json({ error: 'Unexpected field. Make sure you are uploading a file with the field name "video".' });
        } else if (err.code === 'LIMIT_FILE_SIZE') {
          return res.status(400).json({ error: 'File size limit exceeded. Maximum file size is 100MB.' });
        }
        return res.status(400).json({ error: err.message });
      } else if (err) {
        console.error('Unknown error:', err);
        return res.status(500).json({ error: 'File upload failed. ' + err.message });
      }
      
      if (!req.file) {
        return res.status(400).json({ error: 'No video file uploaded. Make sure you are uploading a file with the field name "video".' });
      }
      
      next();
    });
  });

  req.on('error', (err) => {
    console.error('Request error:', err);
    res.status(500).json({ error: 'An error occurred while processing the request.' });
  });
};