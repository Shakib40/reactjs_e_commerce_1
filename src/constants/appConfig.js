const TITLE = '';

export default{
  LOGIN: `${TITLE} Login`,
  SIGNUP: `${TITLE} Sign up`,
  RESET_PASSWORD: `${TITLE} Reset password`,
  OTP: `${TITLE} OTP`,
  DASHBOARD: `${TITLE} Dashboard`,
  PROFILE: `${TITLE} Profile`,
  FUNDS: `${TITLE} Transactions`,
  PAN: `${TITLE} PAN`,
  IPV: `${TITLE} IPV`,
  AADHAAR: `${TITLE} Aadhaar verification`,
  AADHAAR_VERIFY: `${TITLE} User details`,
  UPLOAD_DOCS: `${TITLE} Upload docs`,
  DOC_VERIFY: `${TITLE} Document verification`,
  PORTFOLIO_LIST: `${TITLE} Portfolio list`,
  BASE_URL: process.env.PUBLIC_URL,
  // S3_URL: 'https://vulhunt-app.s3.amazonaws.com' // Staging
  S3_URL: 'https://vulhunt-public.s3.ap-south-1.amazonaws.com', // Local
  AES_KEY: '*8nGrasBPKZ!k=@S',
  AES_IV: 'LYP%x^8qq=g_kKN@',
  S3_PATH_FOR_TERMS_AND_CONDITIONS: 'https://vuhunt-static-bucket.s3.ap-south-1.amazonaws.com/VULHUNT+Terms-useragreement-converted.pdf',
  ROCKET_CHAT_BASE_URL: 'https://devchat.vulhunt.com'
};
