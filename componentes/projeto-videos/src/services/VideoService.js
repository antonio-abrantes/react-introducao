import { ApiService } from './ApiService';

const endpoint = 'videos.json';

export const VideoService = {
  list(){
    return ApiService.get(endpoint);
  }
}