# Hotel Management System Deployment Guide

This repository is structured as three deployable units:

- Frontend customer app: `customer-frontend/` -> Vercel project
- Frontend staff/admin app: `staff-frontend/` -> separate Vercel project
- Backend API: `backend/` -> persistent Node.js host (recommended: Fly.io)
- Database: keep Supabase cloud project and run the SQL migrations there

## Actual architecture

The repository is not a single app. The evidence in the code shows:

- `backend/server/index.js` is the main Express API server.
- It starts a long-lived Express app with `app.listen(...)` and creates a cancellation worker via `startCancellationJob(...)`.
- It exposes SSE at `/api/live-events` and uses Supabase as the database/auth/realtime layer.
- `customer-frontend` is a React + Vite SPA that connects through `VITE_API_BASE_URL`.
- `staff-frontend` is a separate React + Vite app that uses `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` directly.

## Why not Vercel for the backend

The backend is not currently compatible with Vercel's serverless model as-is because:

- it runs a persistent Express process with `app.listen()`
- it keeps background timers running
- it serves long-lived SSE connections
- it handles Stripe webhook raw bytes and expects a stable long-lived server

A Vercel serverless deployment would require a significant backend refactor.

## Recommended free hosting setup

### Frontends (Vercel)

Create two separate Vercel projects:

1. `customer-frontend`
   - Framework: Vite
   - Env vars:
     - `VITE_SERVICE_MODE=http`
     - `VITE_API_BASE_URL=https://<your-flyio-backend-domain>`

2. `staff-frontend`
   - Framework: Vite
   - Env vars:
     - `VITE_SUPABASE_URL=https://<your-supabase-project>.supabase.co`
     - `VITE_SUPABASE_ANON_KEY=<anon-key>`

### Backend (Fly.io, free tier suitable)

Use Fly.io because it supports a persistent Node.js process better than Render/Railway free plans for long-lived Express and SSE workloads.

Backend env vars:

- `NODE_ENV=production`
- `PORT=8080`
- `FRONTEND_URL=https://<customer-vercel-domain>,https://<staff-vercel-domain>`
- `SUPABASE_URL=https://<supabase-project>.supabase.co`
- `SUPABASE_ANON_KEY=<anon-key>`
- `SUPABASE_SERVICE_ROLE_KEY=<service-role-key>`
- `QR_SECRET_SALT=<strong-random-string>`
- `STRIPE_SECRET_KEY=<stripe-key>`
- `STRIPE_WEBHOOK_SECRET=<stripe-webhook-secret>`
- `KBZPAY_APP_ID=<kvzpay-app-id>`
- `KBZPAY_MERCH_CODE=<merchant-code>`
- `KBZPAY_MERCHANT_KEY=<merchant-key>`

## Required code & config changes

- Keep the backend as a persistent app rather than serverless.
- Configure CORS with production frontend domains via `FRONTEND_URL`.
- Never put `SUPABASE_SERVICE_ROLE_KEY` in frontend code or Vercel env vars.
- Ensure frontend apps use environment variables, not hardcoded localhost or embedded secrets.
- Keep the existing Supabase database and application functionality intact.

## Fly.io deployment steps

1. Install the Fly CLI:
   ```bash
   curl -L https://fly.io/install.sh | sh
   ```

2. In the backend folder, create the app:
   ```bash
   cd backend
   flyctl launch --no-deploy
   ```

3. Set production environment variables on Fly:
   ```bash
   flyctl secrets set \
     NODE_ENV=production \
     PORT=8080 \
     FRONTEND_URL='https://customer.example.com,https://staff.example.com' \
     SUPABASE_URL='https://<project>.supabase.co' \
     SUPABASE_ANON_KEY='<anon-key>' \
     SUPABASE_SERVICE_ROLE_KEY='<service-role-key>' \
     QR_SECRET_SALT='<random-string>' \
     STRIPE_SECRET_KEY='<stripe-secret>' \
     STRIPE_WEBHOOK_SECRET='<stripe-webhook-secret>'
   ```

4. Deploy:
   ```bash
   flyctl deploy
   ```

5. Confirm the health route:
   ```bash
   curl https://<your-flyio-app>.fly.dev/api/config
   ```

## Vercel deployment steps

For each frontend app, import the project in Vercel and choose the app folder as the root.

### Customer App

- Project root: `customer-frontend/`
- Build command: `npm run build`
- Output directory: `dist`
- Environment variables:
  - `VITE_SERVICE_MODE=http`
  - `VITE_API_BASE_URL=https://<your-flyio-backend-domain>`

### Staff App

- Project root: `staff-frontend/`
- Build command: `npm run build`
- Output directory: `dist`
- Environment variables:
  - `VITE_SUPABASE_URL=https://<project>.supabase.co`
  - `VITE_SUPABASE_ANON_KEY=<anon-key>`

## Database setup

Keep your existing Supabase project and run the migration SQL provided under:

- `backend/supabase/COMPLETE_DATABASE_SETUP.sql`
- or `backend/supabase/migrations/`

## Webhooks

Register the Stripe webhook in the Stripe dashboard:

- URL: `https://<your-backend-domain>/api/payments/webhook/stripe`
- Secret: `STRIPE_WEBHOOK_SECRET`

## Verification checklist

Before considering the deployment ready:

- backend starts without errors
- `/api/config` responds successfully
- frontend builds succeed in Vercel
- customer app can reach the backend API through `VITE_API_BASE_URL`
- staff app loads with Supabase URL and anon key
- Stripe webhook endpoint is reachable and verified
- CORS allows the deployed customer and staff domains

## Important note

This repository should not be treated as a single deployment unit. The backend and the frontends are intentionally separate, and the backend needs its own host because it is a persistent Express API and not just a Vercel serverless function.
