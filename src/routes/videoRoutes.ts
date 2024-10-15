import { Router } from 'express';
import multer from 'multer';
import { VideoController } from '../controllers/videoController';
import { VideoService } from '../services/videoService';

const router = Router();
const upload = multer({ dest: 'uploads/' });
const videoService = new VideoService();
const videoController = new VideoController(videoService);

// Note: We don't need to add '/api' here, as we'll do that in app.ts
router.post('/', upload.single('video'), videoController.createVideo.bind(videoController));
router.get('/:id', videoController.getVideo.bind(videoController));
router.get('/', videoController.listVideos.bind(videoController));
router.delete('/:id', videoController.deleteVideo.bind(videoController));

export default router;
