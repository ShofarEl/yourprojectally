# Frontend Deployment to Vercel

## Prerequisites
1. Install Vercel CLI: `npm i -g vercel`
2. Login to Vercel: `vercel login`

## Deployment Steps

### 1. Navigate to client directory
```bash
cd client
```

### 2. Install dependencies
```bash
npm install
```

### 3. Deploy to Vercel
```bash
vercel --prod
```

### 4. Configure Environment Variables in Vercel Dashboard
Go to your Vercel project dashboard and add:
- `VITE_API_URL` = `https://yourprojectally-production.up.railway.app`

## SPA Routing Fix
The `vercel.json` and `public/_redirects` files are configured to handle React Router properly.
This fixes the 404 errors when refreshing pages or accessing routes directly.

## Alternative: Deploy via Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Set the root directory to `client`
4. Add environment variable: `VITE_API_URL=https://yourprojectally-production.up.railway.app`
5. Deploy

## Troubleshooting 404 Errors
If you still get 404 errors after deployment:
1. Check that `vercel.json` is in the client root
2. Ensure `public/_redirects` exists
3. Redeploy the project: `vercel --prod`

## Backend Configuration
Your backend is already deployed at: https://yourprojectally-production.up.railway.app

Make sure your Railway backend allows CORS for your Vercel domain.

## Local Development
For local development, the app will use `http://localhost:5000` as defined in `.env.local`