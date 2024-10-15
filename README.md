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
    "id": "6bdf95f8-7d37-4c7f-b2b2-87f71396ebdb",
    "message": "Video uploaded successfully"
  }

### List all videos
- **GET** `/api/videos`
- **Body**: raw/json
  - `limit`: number (optional)
  - `page`: number (optional)
- **Response**: 200 fetched
  ```json
  {
      "page": 1,
      "limit": 10,
      "total": 2,
      "data": [
          {
              "id": "6bdf95f8-7d37-4c7f-b2b2-87f71396ebdb",
              "title": "myfile5",
              "description": "my video",
              "uploadDate": "2024-10-15T16:22:14.018Z",
              "fileSize": 96480114
          },
          {
              "id": "997cce11-ce32-4316-b618-edb1faf2f365",
              "title": "myfile5",
              "description": "my video",
              "uploadDate": "2024-10-15T16:22:35.963Z",
              "fileSize": 96480114
          }
      ]

### Search videos
- **GET** `/api/videos/search`
- **Body**: raw/json
  - `query `: string (required
  - `limit`: number (optional)
  - `page`: number (optional)
- **Response**: 200 fetched
  ```json
  {
      "page": 1,
      "limit": 10,
      "total": 2,
      "data": [
          {
              "id": "6bdf95f8-7d37-4c7f-b2b2-87f71396ebdb",
              "title": "myfile5",
              "description": "my video",
              "uploadDate": "2024-10-15T16:22:14.018Z",
              "fileSize": 96480114
          },
          {
              "id": "997cce11-ce32-4316-b618-edb1faf2f365",
              "title": "myfile5",
              "description": "my video",
              "uploadDate": "2024-10-15T16:22:35.963Z",
              "fileSize": 96480114
          }
      ]

### Get Video Details By ID
- **GET** `/api/videos/6bdf95f8-7d37-4c7f-b2b2-87f71396ebdb`
- **Body**: raw/json
  - `query `: string (required
  - `limit`: number (optional)
  - `page`: number (optional)
- **Response**: 200 fetched
  ```json
  {
      "id": "6bdf95f8-7d37-4c7f-b2b2-87f71396ebdb",
      "title": "myfile5",
      "description": "my video",
      "uploadDate": "2024-10-15T16:22:14.018Z",
      "fileSize": 96480114
  }

### Delete Video
- **DELTE** `/api/videos/6bdf95f8-7d37-4c7f-b2b2-87f71396ebdb`
- **Body**: None
- **Response**: 200 OK
  ```json
  {
    "message": "Video deleted successfully"
  }


License
MIT License
Copy
