# Video Management API

A simple Video Management API for uploading, retrieving, listing, and searching videos.

## Features

- Upload video files
- Retrieve video details
- List all uploaded videos with pagination
- Delete videos
- Search videos by title or description with pagination
- Pagination for both endpoints list videos and search

## Technologies Used

- Node.js
- TypeScript
- Express.js
- Multer
- class-validator & class-transformer
- Jest

## Prerequisites

- Node.js (v14+)
- npm (v6+)

## approaches

1. i used a specific structure because i find it very organised and can be understood easily which i have used it since 2021
2. i used a lot of comments to explain the code and make it easy to understand
3. i also used multer to process the file from request body
4. i used class-validator and class-transformer to validate the request body
5. i used chatgpt just to organise the readme file 
6. i used jest to write unit tests for the api
7. i used express to create the api
8. i used typescript to write the code
9. i used a lot of async/await to make the code look clean and easy to read
10. i used a lot of try/catch to handle errors
11. i used dotenv to handle the environment variables
12. i have implemented pagination and search and input validation and error handling

## Installation

1. Clone the repository:
git clone https://github.com/yourusername/video-management-api.git
cd video-management-api
Copy
2. Install dependencies:
npm install
Copy
3. Create a `.env` file:
PORT=8040
Copy
## Running the Application
Copy
Development:
npm run dev

Copy
Docker:
docker-compose up

Copy
Production:
npm run build
npm start

Copy
Server runs at `http://localhost:8040`.

## API Endpoints

### Upload a new video
- **POST** `/api/videos`
- **Body**: form-data
  - `video`: File (required)
  - `title`: string (required)
  - `description`: string (optional)
- **Response**: 201 Created
  ```json
  {
    "id": "string",
    "message": "Video uploaded successfully"
  }
  Get video details
  
  GET /api/videos/:id
  Response: 200 OK
  jsonCopy{
    "id": "string",
    "title": "string",
    "description": "string",
    "uploadDate": "string",
    "fileSize": number
  }
  
  
  List all videos
  
  GET /api/videos
  Query Parameters:
  
  page: number (optional, default: 1)
  limit: number (optional, default: 10)
  
  
  Response: 200 OK
  jsonCopy{
    "data": [
      {
        "id": "string",
        "title": "string",
        "description": "string",
        "uploadDate": "string",
        "fileSize": number
      }
    ],
    "page": number,
    "limit": number,
    "total": number
  }
  
  
  Delete a video
  
  DELETE /api/videos/:id
  Response: 200 OK
  jsonCopy{
    "message": "Video deleted successfully"
  }
  
  
  Search videos
  
  GET /api/videos/search
  Query Parameters:
  
  query: string (required)
  page: number (optional, default: 1)
  limit: number (optional, default: 10)
  
  
  Response: 200 OK
  jsonCopy{
    "data": [
      {
        "id": "string",
        "title": "string",
        "description": "string",
        "uploadDate": "string",
        "fileSize": number
      }
    ],
    "page": number,
    "limit": number,
    "total": number
  }
  ```

Testing
Copynpm test
Deployment

Build:
Copynpm run build

Deploy dist directory to your hosting platform.
Set environment variables on the hosting platform.

Contributing

Fork the repository
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request

License
MIT License
Copy
