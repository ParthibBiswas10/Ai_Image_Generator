# Vercel Deployment Checklist

## Before Deployment

- [ ] Ensure `.env` file contains valid `VITE_API_KEY`
- [ ] Test the app locally with `npm run dev`
- [ ] Commit and push all changes to GitHub
- [ ] Verify `.gitignore` includes `.env` (to keep API key secure)

## Vercel Configuration

1. **Connect GitHub Repository**

   - Go to Vercel dashboard
   - Import your GitHub repository

2. **Set Environment Variables**

   - In Vercel project settings, go to "Environment Variables"
   - Add: `VITE_API_KEY` = `your_google_ai_api_key_here`
   - Set for: Production, Preview, and Development

3. **Build Settings**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

## Common Issues & Solutions

### 1. "API key is not configured" Error

- **Cause**: Environment variable not set in Vercel
- **Solution**: Add `VITE_API_KEY` in Vercel Environment Variables

### 2. "Network Error" or "Failed to Fetch"

- **Cause**: CORS or network issues
- **Solution**: Check API quotas and network connectivity

### 3. "No candidates returned from API"

- **Cause**: API quota exceeded or invalid request
- **Solution**:
  - Check Google Cloud Console for API usage
  - Verify API key permissions
  - Try simpler prompts

### 4. Build Fails

- **Cause**: Missing dependencies or build configuration
- **Solution**:
  - Run `npm install` locally
  - Check `package.json` for correct dependencies
  - Verify `vite.config.js` configuration

## Testing After Deployment

1. Open the deployed URL
2. Click the "Health Check" button (in development mode)
3. Check browser console for errors
4. Try generating an image with a simple prompt like "a red apple"

## Debug Commands

```bash
# Local testing
npm run dev

# Build testing
npm run build
npm run preview

# Check environment
echo $VITE_API_KEY
```

## API Key Setup

1. Go to Google Cloud Console
2. Enable the Gemini API
3. Create an API key
4. Copy the key to your environment variables

## Support

If issues persist:

1. Check browser developer console for detailed errors
2. Verify API key is valid and has proper permissions
3. Check Google Cloud Console for API usage and quotas
4. Ensure all environment variables are properly set in Vercel
