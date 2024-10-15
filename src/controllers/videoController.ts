import { Request, Response } from 'express';
import { VideoService } from '../services/videoService';
import { CreateVideoDto } from '../dtos/video/createVideoDto';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

export class VideoController {
  constructor(private videoService: VideoService) {}

  async createVideo(req: Request, res: Response) {
    const createVideoDto = plainToClass(CreateVideoDto, req.body);
    const errors = await validate(createVideoDto);

    if (errors.length > 0) {
      return res.status(400).json({ errors: errors.map(error => Object.values(error.constraints)) });
    }

    if (!req.file) {
      return res.status(400).json({ error: 'No video file uploaded' });
    }

    const newVideo = this.videoService.createVideo(createVideoDto, req.file.size);
    res.status(201).json({ id: newVideo.id, message: 'Video uploaded successfully' });
  }

  getVideo(req: Request, res: Response) {
    const video = this.videoService.getVideoById(req.params.id);
    if (!video) {
      return res.status(404).json({ error: 'Video not found' });
    }
    res.json(video);
  }

  listVideos(req: Request, res: Response) {
    const { title, uploadDate } = req.query;
    const videos = this.videoService.getAllVideos(title as string, uploadDate as string);
    res.json(videos);
  }

  deleteVideo(req: Request, res: Response) {
    const deleted = this.videoService.deleteVideo(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Video not found' });
    }
    res.json({ message: 'Video deleted successfully' });
  }
}