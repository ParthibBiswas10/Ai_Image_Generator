# 🎨 AI Image Generator

A modern, interactive AI-powered image generator built with React and Google Gemini API. Generate stunning images from text prompts with beautiful particle effects and smooth animations.

![AI Image Generator](https://img.shields.io/badge/React-18+-blue.svg)
![Vite](https://img.shields.io/badge/Vite-5+-green.svg)
![Google Gemini](https://img.shields.io/badge/Google%20Gemini-AI-orange.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## ✨ Features

- 🤖 **AI-Powered Generation**: Utilizes Google Gemini 2.0 Flash for image generation
- 🎭 **Interactive UI**: Beautiful particle background effects with customizable animations
- 📱 **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and builds
- 🎨 **Modern Styling**: Sleek design with CSS animations and blur effects
- 💾 **Download Feature**: Save generated images directly to your device
- 🔒 **Secure**: Environment-based API key management

## 📸 Screenshots

### Desktop View

![AI Image Generator Desktop](src/assets/Screenshot%202025-07-03%20145558.png)

### Mobile Responsive Design

![AI Image Generator Mobile](src/assets/Screenshot%202025-07-03%20145610.png)

### Image Generation in Action

![AI Image Generation Process](src/assets/Screenshot%202025-07-03%20145650.png)

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite 7
- **Styling**: CSS3, Tailwind CSS
- **Animations**: Framer Motion, GSAP
- **3D Effects**: OGL (WebGL library)
- **AI Integration**: Google Gemini API
- **Deployment**: Vercel
- **Package Manager**: npm

## 🎯 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Google Gemini API key

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/ai-image-generator.git
   cd ai-image-generator
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```env
   VITE_GEMINI_API_KEY=your_google_gemini_api_key_here
   ```

   To get your API key:

   - Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
   - Create a new API key
   - Copy and paste it into your `.env` file

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 🎮 Usage

1. **Enter a Prompt**: Type your desired image description in the input field
2. **Generate Image**: Click the "Search" button to start generation
3. **Wait for Magic**: Watch the particle effects while the AI creates your image
4. **Download**: Click the download button to save your generated image

### Example Prompts

- "A serene sunset over snow-capped mountains"
- "A futuristic city with flying cars at night"
- "A magical forest with glowing mushrooms"
- "A cute robot reading a book in a library"

## 📁 Project Structure

```
src/
├── components/
│   ├── ImageGen.jsx          # Main image generation component
│   ├── ImageGen.css          # Styling for image generator
│   ├── footer.jsx            # Footer component with social links
│   ├── footer.css            # Footer styling
│   └── HealthCheck.jsx       # Development health check component
├── assets/
│   └── Default.png           # Default placeholder image
├── lib/
│   └── utils.js              # Utility functions
├── effect/
│   ├── Particles/            # Particle effect components
│   └── DotGrid/              # Grid effect components
├── App.jsx                   # Main App component
├── App.css                   # Global app styling
├── main.jsx                  # Application entry point
└── index.css                 # Global CSS reset and variables
```

## ⚙️ Configuration

### Environment Variables

| Variable              | Description                | Required |
| --------------------- | -------------------------- | -------- |
| `VITE_GEMINI_API_KEY` | Your Google Gemini API key | ✅       |

### Particle Effects

Customize particle effects in `App.jsx`:

```javascript
<Particles
  particleCount={900} // Number of particles
  particleColors={["#ff69b4", "#00ff88", "#0088ff", "#ffffff"]}
  particleSpread={15} // Spread radius
  speed={1.5} // Animation speed
  particleBaseSize={150} // Base particle size
  moveParticlesOnHover={true} // Interactive particles
  alphaParticles={true} // Transparency effects
  particleHoverFactor={2} // Hover interaction strength
/>
```

## 🚀 Deployment

### Deploy to Vercel

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**

   - Visit [Vercel](https://vercel.com)
   - Import your GitHub repository
   - Configure environment variables in Vercel dashboard

3. **Set Environment Variables**

   - Go to Project Settings → Environment Variables
   - Add `VITE_GEMINI_API_KEY` with your API key

4. **Deploy**
   - Vercel will automatically deploy your app
   - Your app will be live at `https://your-app.vercel.app`

### Deploy to Other Platforms

The app can also be deployed to:

- Netlify
- GitHub Pages
- Heroku
- Firebase Hosting

## 🎨 Customization

### Styling

- Modify `src/App.css` for global styles
- Update `src/components/ImageGen.css` for component-specific styling
- Customize colors, fonts, and animations to match your brand

### Features

- Add image filters and effects
- Implement image history/gallery
- Add sharing functionality
- Include more AI models

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Parthib Biswas**

- 🌐 Website: [Your Website](https://your-website.com)
- 💼 LinkedIn: [Parthib Biswas](https://www.linkedin.com/in/parthib-biswas-79b06029b/)
- 🐱 GitHub: [ParthibBiswas10](https://github.com/ParthibBiswas10)
- 📧 Email: your.email@example.com

## 🙏 Acknowledgments

- Google Gemini API for AI image generation
- React team for the amazing framework
- Vite for the blazing fast build tool
- OpenGL community for WebGL libraries
- All contributors and users of this project

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/yourusername/ai-image-generator?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/ai-image-generator?style=social)
![GitHub issues](https://img.shields.io/github/issues/yourusername/ai-image-generator)

---

⭐ **Star this repository if you found it helpful!**
