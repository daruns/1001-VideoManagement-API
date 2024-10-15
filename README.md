# Video Management API

A simple Video Management API for uploading, retrieving, listing, and searching videos.

## Features

- Upload video files
- Retrieve video details
- List all uploaded videos with pagination
- Delete videos
- Search videos by title or description with pagination

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

Development:
npm run dev
Copy
Production:
npm run build
npm start
Copy
Server runs at `http://localhost:8040`.

## API Endpoints

- `POST /api/videos`: Upload a new video
- `GET /api/videos/:id`: Get video details
- `GET /api/videos`: List all videos (paginated)
- `DELETE /api/videos/:id`: Delete a video
- `GET /api/videos/search`: Search videos (paginated)

## Testing
npm test
Copy
## Deployment

1. Build:
npm run build
Copy
2. Deploy `dist` directory to your hosting platform.

3. Set environment variables on the hosting platform.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

MIT License