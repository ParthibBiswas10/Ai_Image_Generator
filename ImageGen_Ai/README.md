# AI Image Generator

A React-based AI Image Generator using Google's Gemini AI API with a beautiful, responsive UI.

## Features

- Generate AI images from text prompts
- Responsive design for all screen sizes
- Particle background effects
- Download generated images
- Modern UI with blur effects and animations

## Setup

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   - Copy `.env.example` to `.env`
   - Add your Google AI API key to the `VITE_API_KEY` variable

4. Run the development server:
   ```bash
   npm run dev
   ```

## Deployment to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. **Important**: Add the environment variable in Vercel:
   - Go to your Vercel project dashboard
   - Navigate to Settings → Environment Variables
   - Add `VITE_API_KEY` with your Google AI API key
   - Deploy your project

## Troubleshooting

If you encounter issues after deployment:

1. **Check Environment Variables**: Ensure `VITE_API_KEY` is set in your Vercel project settings
2. **Check API Quota**: Verify your Google AI API usage hasn't exceeded limits
3. **Check Browser Console**: Look for detailed error messages in the browser's developer tools
4. **Verify API Key**: Ensure your Google AI API key is valid and has the necessary permissions

## Technologies Used

- React 19
- Vite
- Google Gemini AI API
- CSS3 with responsive design
- Particle effects
