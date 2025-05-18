# Diploma_2025_Frontend

This repository contains the **React + TypeScript** web client for the Diploma 2025 project.  
It lets users upload tactical images, sends them to the backend for Roboflow detection, and presents the annotated results for preview or download.

> **Live demo:** [Click here](https://diploma-client-jvx7.onrender.com)

---

## ✨ Key Features

| Area | Details |
|------|---------|
| **Image upload** | Drag‑and‑drop / file picker to select a single image. |
| **Instant feedback** | UI shows “Processing…” while the backend is working. |
| **Roboflow results** | Lists detected objects and provides download buttons for `yolo.jpg` (annotated image) & `object_info.json` (metadata). |
| **API base URL via env** | `VITE_APP_API_BASE` controls which backend the client talks to (default `http://localhost:5000`). |
| **Modern stack** | Vite 5, React 18, TypeScript, Axios, SCSS modules. |

---

## 🛠️ Technology Stack

- **React 18** (with Hooks)  
- **TypeScript** – static typing  
- **Vite** – lightning‑fast dev server & build  
- **Axios** – HTTP client  
- **SCSS Modules** – component‑scoped styles

---

## 🚀 Quick Start

1. **Clone the repo**

   ```bash
   git clone https://github.com/purpleFade/diploma_client.git
   cd diploma_client
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure the backend URL (optional)**  
   By default the client calls `http://localhost:5000`.  
   To override this, create an **`.env`** file (or `.env.local`) in the project root:

   ```bash
   # .env
   VITE_APP_API_BASE=https://your-backend-url
   ```

4. **Start the dev server**

   ```bash
   npm run dev
   ```

   The app is now running at **http://localhost:5173** (Vite default) or the port Vite chooses.

5. **Production build**

   ```bash
   npm run build        # outputs to /dist
   npm run preview      # serves the built app locally
   ```

---

## 📡 API Contracts

| Method | Route | Body | Purpose |
|--------|-------|------|---------|
| **POST** | `/process_image` | *multipart/form-data* field **image** | Sends an image to the backend; receives JSON `{ results_folder, object_info, … }`. |
| **GET** | `/results/{folder}/{file}` | — | Downloads `yolo.jpg` or `object_info.json`. |

See the backend README for detailed response examples.

---

## 🗂️ Folder Structure

```
diploma_client/
├── public/               # Static assets
├── src/
│   ├── components/
│   │   └── ImageUploader/
│   │       ├── ImageUploader.tsx
│   │       └── ImageUploader.scss
│   ├── App.tsx           # Main layout
│   ├── index.tsx         # Entry point
│   └── utils/            # Helper functions (future)
├── .env.example          # Sample env file
├── package.json
├── tsconfig.json
└── README.md             # (this file)
```

---

## 🖌️ Styling

The project uses **SCSS modules** (`*.scss`) imported directly inside components, giving each component its own style scope (no global leaks).

---

## 🤝 Contributing

1. **Fork** the repo  
2. **Create** a feature branch  
   ```bash
   git checkout -b feature/my-idea
   ```
3. **Commit** your changes  
   ```bash
   git commit -m "Describe my idea"
   ```
4. **Push** the branch & open a **pull request**

---

## 📝 License

Distributed under the **MIT License**. See the `LICENSE` file for details.
