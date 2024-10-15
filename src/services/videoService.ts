import { v4 as uuidv4 } from 'uuid';
import { Video } from '../interfaces/video.interface';
import { CreateVideoDto } from '../dtos/video/createVideoDto';
import { SearchVideosDto } from '../dtos/video/searchVideosDto';
import { paginate } from '../utils/paginationUtils';

export class VideoService {
  private videos: Video[] = [];

  createVideo(createVideoDto: CreateVideoDto, fileSize: number): Video {
    const newVideo: Video = {
      id: uuidv4(),
      title: createVideoDto.title,
      description: createVideoDto.description || '',
      uploadDate: new Date(),
      fileSize,
    };
    this.videos.push(newVideo);
    return newVideo;
  }
  searchVideos(searchParams: SearchVideosDto): Video[] {
    let results = this.videos;
    
    if (searchParams.query) {
      const lowercaseQuery = searchParams.query.toLowerCase();
      results = results.filter(video => 
        video.title.toLowerCase().includes(lowercaseQuery) ||
        (video.description && video.description.toLowerCase().includes(lowercaseQuery))
      );
    }
    return paginate(results, searchParams.page, searchParams.limit)
  }

  getVideoById(id: string): Video | undefined {
    return this.videos.find(v => v.id === id);
  }

  getAllVideos(title?: string, uploadDate?: string): Video[] {
    let filteredVideos = this.videos;
    if (title) {
      filteredVideos = filteredVideos.filter(v => 
        v.title.toLowerCase().includes(title.toLowerCase())
      );
    }
    if (uploadDate) {
      const date = new Date(uploadDate);
      filteredVideos = filteredVideos.filter(v => 
        v.uploadDate.toDateString() === date.toDateString()
      );
    }
    return filteredVideos;
  }

  deleteVideo(id: string): boolean {
    const index = this.videos.findIndex(v => v.id === id);
    if (index === -1) return false;
    this.videos.splice(index, 1);
    return true;
  }
}

