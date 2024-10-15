import { Request, Response, NextFunction } from 'express';
import { VideoService } from '../services/videoService';
import { CreateVideoDto } from '../dtos/video/createVideoDto';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { SearchVideosDto } from '../dtos/video/searchVideosDto';
import { Video } from '../interfaces/video.interface';
import { PaginationDto } from '../dtos/paginationDto';

export class VideoController {
  constructor(private videoService: VideoService) {}

  async createVideo(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const createVideoDto = plainToClass(CreateVideoDto, req.body);
      const errors = await validate(createVideoDto);

      if (errors.length > 0) {
        res.status(400).json({ errors: errors.map((error:any) => Object.values(error.constraints)) });
        return;
      }

      if (!req.file) {
        res.status(400).json({ error: 'No video file uploaded' });
        return;
      }

      const newVideo = this.videoService.createVideo(createVideoDto, req.file.size);
      res.status(201).json({ id: newVideo.id, message: 'Video uploaded successfully' });
    } catch (error) {
      next(error);
    }
  }

  async searchVideos(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const searchParams = plainToClass(SearchVideosDto, req.query);
      const errors = await validate(searchParams);

      if (errors.length > 0) {
        res.status(400).json({ errors: errors.map((error:any) => Object.values(error.constraints)) });
        return;
      }

      const result = this.videoService.searchVideos(searchParams);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

  async getVideo(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const video = this.videoService.getVideoById(req.params.id);
      if (!video) {
        res.status(404).json({ error: 'Video not found' });
        return;
      }
      res.json(video);
    } catch (error) {
      next(error);
    }
  }

  async listVideos(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const paginationParams = plainToClass(PaginationDto, req.body);
      const errors = await validate(paginationParams);

      if (errors.length > 0) {
        res.status(400).json({ errors: errors.map((error:any) => Object.values(error.constraints)) });
        return;
      }

      const result = this.videoService.getAllVideos(paginationParams);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

  async deleteVideo(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const deleted = this.videoService.deleteVideo(req.params.id);
      if (!deleted) {
        res.status(404).json({ error: 'Video not found' });
        return;
      }
      res.json({ message: 'Video deleted successfully' });
    } catch (error) {
      next(error);
    }
  }
}