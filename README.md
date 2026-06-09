<p align="center">
  <img src="favicon.png" alt="OptiType Logo" width="120" height="120" style="border-radius: 20px;">
</p>

<h1 align="center">OptiType — ML-Powered Eye Tracking Typing System</h1>

<p align="center">
  <strong>Type with your eyes using any standard webcam — free, offline, and open-source.</strong>
</p>

<p align="center">
  <a href="https://mohamed-alzarzour.github.io/OptiType-Website/en/">🌐 Live Website</a> ·
  <a href="https://mohamed-alzarzour.github.io/OptiType-Website/en/download/">⬇️ Download</a> ·
  <a href="https://mohamed-alzarzour.github.io/OptiType-Website/en/docs/">📖 Documentation</a> ·
  <a href="https://mohamed-alzarzour.github.io/OptiType-Website/en/about/">ℹ️ About</a>
</p>

---

## 🔎 Project Overview

**OptiType** is a desktop application that enables real-time gaze-based typing using only a standard webcam. It is designed as a free, software-only alternative to commercial eye-tracking devices that cost $5,000–$15,000.

The system uses **Google MediaPipe FaceMesh** to detect 478 facial landmarks and iris positions, extracts **8 gaze features**, and classifies the user's gaze direction into **6 screen zones** using machine learning. Users type through a hierarchical navigation interface controlled entirely by eye movement.

### Key Highlights

| Metric | Value |
|--------|-------|
| 🎯 **Best Accuracy** | 97.25% (MLP Neural Network) |
| 🧠 **ML Models** | 5 (SVM, RF, KNN, GB, MLP) |
| 👁️ **Gaze Zones** | 6 (3×2 grid) |
| ⚡ **Latency** | < 40ms (real-time) |
| 💰 **Cost** | $0 — completely free |
| 🔒 **Privacy** | 100% offline — no data leaves your device |

---

## ✨ Features

- **No Special Hardware** — Works with any standard webcam (720p+)
- **5 ML Algorithms** — MLP, SVM, KNN, Random Forest, Gradient Boosting
- **Adaptive Calibration** — Personalized training with automatic quality evaluation
- **Training Insights** — Confusion matrices, feature importance, PDF reports
- **100% Offline** — No cloud, no internet required after installation
- **Cross-Platform** — Linux (AppImage, .deb, .tar.gz) + Windows (.exe)
- **Multi-User** — Systematic data collection from multiple participants
- **Customizable** — Dwell time, confidence threshold, smoothing window, model selection

---

## 🌐 Website Features

This repository contains the **official OptiType website**, built with modern web technologies:

- 🌍 **Multi-Language Support** — English and Turkish
- 📥 **Download Center** — Direct download links for all platforms
- 📖 **Documentation** — Complete user and developer guide
- 📱 **Fully Responsive** — Optimized for desktop, tablet, and mobile
- 🌙 **Dark Theme** — Professional dark interface with neural network background animation
- ⚡ **Static Site** — Fast loading, no server required (GitHub Pages ready)

---

## 🛠️ Technologies Used

### Application
| Technology | Purpose |
|-----------|---------|
| Python 3.10+ | Core programming language |
| MediaPipe FaceMesh | 478-point face & iris detection |
| scikit-learn | ML training, evaluation, pipelines |
| OpenCV | Camera access, image processing, UI |
| NumPy / Pandas | Numerical computation, data I/O |
| Pillow (PIL) | Text rendering, Unicode fonts |
| PyInstaller | Standalone executable generation |

### Website
| Technology | Purpose |
|-----------|---------|
| Astro | Static site generator framework |
| Tailwind CSS | Utility-first styling |
| TypeScript | Type-safe i18n system |
| HTML5 / CSS3 | Semantic structure, animations |
| Canvas API | Neural network background animation |

---

## 📁 Project Structure

```
OptiType-Website/
├── index.html              # Root redirect → /en/
├── favicon.ico             # Browser tab icon
├── favicon.png             # High-res icon (PWA/social)
├── .nojekyll               # Bypass Jekyll on GitHub Pages
├── _astro/
│   └── Layout.*.css        # Compiled stylesheet
├── images/
│   ├── hero_eye.png        # Hero section eye graphic
│   ├── main_ui.png         # Main UI showcase
│   ├── adaptive_grid.png   # 6-zone grid showcase
│   ├── ml_workflow.png     # ML pipeline diagram
│   ├── screenshot_*.png    # Feature screenshots
│   └── screenshots/        # App UI screenshots
│       ├── main_menu.png
│       ├── typing_interface.png
│       ├── calibration.png
│       ├── settings.png
│       └── history.png
├── en/                     # English pages
│   ├── index.html          # Home
│   ├── about/index.html    # About
│   ├── download/index.html # Download center
│   └── docs/index.html     # Documentation
└── tr/                     # Turkish pages
    ├── index.html          # Ana Sayfa
    ├── about/index.html    # Hakkında
    ├── download/index.html # İndir
    └── docs/index.html     # Belgeler
```

---

## ⬇️ Download

| Platform | Format | Link |
|----------|--------|------|
| **Windows** | .exe Installer | [Download](https://github.com/mohamed-alzarzour/OptiType/releases) |
| **Linux** | AppImage (Portable) | [Download](https://github.com/mohamed-alzarzour/OptiType/releases) |
| **Linux** | .deb (Debian/Ubuntu) | [Download](https://github.com/mohamed-alzarzour/OptiType/releases) |
| **Linux** | .tar.gz (Generic) | [Download](https://github.com/mohamed-alzarzour/OptiType/releases) |

### System Requirements
- Standard webcam (720p or higher)
- 500 MB disk space
- **Linux:** glibc 2.31+
- **Windows:** Windows 10/11 (x64)

---

## 🚀 Deployment (GitHub Pages)

This site is deployed using **GitHub Pages** from the `main` branch root.

### Steps:
1. Push this repository to GitHub
2. Go to **Settings → Pages**
3. Set Source: **Deploy from a branch**
4. Select Branch: **main**, Folder: **/ (root)**
5. Click **Save**
6. Site will be live at: `https://mohamed-alzarzour.github.io/OptiType-Website/`

> **Note:** The `.nojekyll` file is included to ensure GitHub Pages serves the site correctly without Jekyll processing.

---

## 🏗️ Local Development

To modify and rebuild the website from source:

```bash
# Navigate to the website source (in the main OptiType project)
cd project_materials/website

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Output will be in dist/ — copy to this repository
```

---

## 👥 Team

| Role | Name | Link |
|------|------|------|
| **Developer** | Mohamed Alzarzour (2110205631) | [LinkedIn](https://www.linkedin.com/in/mohamed-alzarzour/) · [GitHub](https://github.com/mohamed-alzarzour) · [Instagram](https://instagram.com/moha5o) |
| **Supervisor** | Dr.Öğr.Üyesi Ammar Mohammed Ali Al-Qadasi | [Academic Profile](https://unis.karabuk.edu.tr/akademisyen/ammarmohammed) |
| **University** | Karabük University | [Website](https://www.karabuk.edu.tr) |
| **Department** | Computer Engineering | [Website](https://bbf.karabuk.edu.tr/bilgisayar) |

---

## 📜 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2026 Mohamed Alzarzour

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.
```

---

<p align="center">
  <strong>OptiType</strong> — Graduation Project · Computer Engineering · Karabük University · 2026
</p>
