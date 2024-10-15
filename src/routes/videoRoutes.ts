import { Router } from 'express';
import multer from 'multer';
import { VideoController } from '../controllers/videoController';
import { VideoService } from '../services/videoService';

const router = Router();
const upload = multer({ dest: 'uploads/' });
const videoService = new VideoService();
const videoController = new VideoController(videoService);

router.post('/videos', upload.single('video'), videoController.createVideo.bind(videoController));
router.get('/videos/:id', videoController.getVideo.bind(videoController));
router.get('/videos', videoController.listVideos.bind(videoController));
router.delete('/videos/:id', videoController.deleteVideo.bind(videoController));

export default router;