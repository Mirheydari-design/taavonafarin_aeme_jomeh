// Cloudflare Pages environment variables are available as window properties
// در Cloudflare Pages، متغیرهای محیطی به صورت window.GEMINI_API_KEY در دسترس هستند
window.TAAVON_API_KEYS = [
  window.GEMINI_API_KEY,
  window.GEMINI_API_KEY_1,
  window.GEMINI_API_KEY_2,
  window.GEMINI_API_KEY_3,
  window.GEMINI_API_KEY_4,
  window.GEMINI_API_KEY_5,
  window.GEMINI_API_KEY_6
].filter(Boolean);

