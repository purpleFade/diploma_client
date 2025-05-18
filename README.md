
---

# Practice_2024_Frontend

This repository contains the frontend application for the **Practice 2024 Project**, a web-based interface that interacts with the backend microservice to analyze and process tactical images. The frontend is built using React.js and TypeScript for a modern, responsive, and user-friendly experience.

## Features

- **Image Upload Interface**: Users can upload images for analysis and view processed results.
- **Interactive UI**: Displays analysis results, including object detections, directly on the uploaded images.
- **Real-time Feedback**: Provides immediate feedback on the status of image processing.
- **API Integration**: Communicates seamlessly with the backend service via RESTful API.

## Technology Stack

- **React.js**: JavaScript library for building user interfaces.
- **TypeScript**: Strongly typed programming language for better code quality.
- **Axios**: HTTP client for making API requests.
- **SCSS**: Styling framework for custom, modular, and responsive design.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/purpleFade/Practice_2024_frontend.git
   cd Practice_2024_frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. The application will run locally on `http://localhost:3000/`.

## Usage

1. Open the application in a browser: `http://localhost:3000/`.
2. Upload an image using the "Upload Image" button.
3. View analysis results, including processed images and additional metadata.
4. Download results in various formats (e.g., processed images, JSON data).

## Folder Structure

```
Practice_2024_frontend/
├── public/               # Public assets
├── src/                  # Source code
│   ├── components/       # React components
│   ├── pages/            # Page-level components
│   ├── styles/           # SCSS stylesheets
│   ├── utils/            # Utility functions
│   ├── App.tsx           # Main App component
│   ├── index.tsx         # Entry point
│   └── api/              # API service integrations
├── package.json          # Project metadata and dependencies
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project documentation
```

## API Integration

- **POST** `/process_image`: Sends the uploaded image to the backend for analysis.
- **GET** `/results/<filename>`: Fetches processed image files and metadata.

## Styling

- Modular SCSS is used to style components.
- Styles are scoped per component for better maintainability and isolation.

## Contributing

1. Fork this repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature description"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
