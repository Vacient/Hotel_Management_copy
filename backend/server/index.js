const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const express = require('express');
const cors = require('cors');
const {
  isConfigured,
  realtimeBus,
  getRooms,
  getRoomById,
  updateRoomStatus,
  getBookings,
  getBookingByRefOrToken,
  createAtomicBooking,
  checkInWithQrToken,
  checkOutBooking,
  getServiceRequests,
  createServiceRequest,
  updateServiceRequestStatus,
  runCancellationCheck,
  markBookingAsPaid,
  verifyPaymentProof,
  createWalkInBooking
} = require('./supabaseClient');
const { createSecureQrToken, generateQrDataUrl, generateInRoomQr } = require('./qrService');
const { startCancellationJob } = require('./cancellationJob');
const { requireAuth, requireVerifiedEmail } = require('./middleware/auth');
const { requireRole } = require('./middleware/roles');
const { createPrepayOrder, verifyWebhookSignature } = require('./services/kbzPayService');
const { createCheckoutSession, constructEvent } = require('./services/stripeService');
const helmet = require('helmet');
const { globalLimiter, strictLimiter } = require('./middleware/rateLimiter');
const { validateRequest } = require('./middleware/validate');
const { errorHandler } = require('./middleware/errorHandler');
const {
  createBookingSchema,
  createServiceRequestSchema,
  updateRoomStatusSchema,
  updateServiceRequestStatusSchema,
  checkoutPaymentSchema,
  scanQrCheckInSchema
} = require('./validators/schemas');

const app = express();
app.set('trust proxy', true);
const PORT = process.env.PORT || 3000;
const isProduction = process.env.NODE_ENV === 'production';

if (isProduction) {
  const requiredKeys = ['SUPABASE_URL', 'SUPABASE_ANON_KEY', 'SUPABASE_SERVICE_ROLE_KEY', 'QR_SECRET_SALT'];
  const missing = requiredKeys.filter((key) => {
    const value = process.env[key];
    return !value || value.includes('replace-with') || value.includes('your_') || value.includes('your-');
  });

  if (missing.length > 0) {
    console.warn(`[startup] Production env vars missing or still using placeholders: ${missing.join(', ')}`);
  }
}

// Hide X-Powered-By header
app.disable('x-powered-by');
