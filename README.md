Video Management API
A simple Video Management API for uploading, retrieving, listing, and searching videos.

Features
Upload video files
Retrieve video details
List all uploaded videos with pagination
Delete videos
Search videos by title or description with pagination
Pagination for both endpoints list videos and search
Technologies Used
Node.js
TypeScript
Express.js
Multer
class-validator & class-transformer
Jest
Prerequisites
Node.js (v14+)
npm (v6+)
Approaches
Used a specific structure for organization and ease of understanding
Used comments to explain the code and make it easy to understand
Used Multer to process file uploads
Used class-validator and class-transformer to validate request bodies
Used Jest for unit testing
Used Express to create the API
Used TypeScript for writing the code
Used async/await for clean and readable code
Used try/catch for error handling
Used dotenv for environment variables
Implemented pagination, search, input validation, and error handling
Installation
Clone the repository:

Verify
Edit
Copy code
git clone https://github.com/yourusername/video-management-api.git
cd video-management-api
Install dependencies:

Verify
Edit
Copy code
npm install
Create a .env file:

Verify
Edit
Copy code
PORT=8040
Running the Application
Development

Verify
Edit
Copy code
npm run dev
Docker

Verify
Edit
Copy code
docker-compose up
Production

Verify
Edit
Copy code
npm run build
npm start
Server runs at http://localhost:8040.

API Endpoints
Upload a new video
http

Verify
Edit
Copy code
POST /api/videos
Body: form-data

video: File (required)
title: string (required)
description: string (optional)
Response: 201 Created

json

Verify
Edit
Copy code
{
  "id": "string",
  "message": "Video uploaded successfully"
}
Get video details
http

Verify
Edit
Copy code
GET /api/videos/:id
Response: 200 OK

json

Verify
Edit
Copy code
{
  "id": "string",
  "title": "string",
  "description": "string",
  "uploadDate": "string",
  "fileSize": number
}
List all videos
http

Verify
Edit
Copy code
GET /api/videos
Query Parameters:

page: number (optional, default: 1)
limit: number (optional, default: 10)
Response: 200 OK

json

Verify
Edit
Copy code
{
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
http

Verify
Edit
Copy code
DELETE /api/videos/:id
Response: 200 OK

json

Verify
Edit
Copy code
{
  "message": "Video deleted successfully"
}
Search videos
http

Verify
Edit
Copy code
GET /api/videos/search
Query Parameters:

query: string (required)
page: number (optional, default: 1)
limit: number (optional, default: 10)
Response: 200 OK

json

Verify
Edit
Copy code
{
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
License
MIT License

