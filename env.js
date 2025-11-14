// Cloudflare Pages environment variables are available as window properties
// در Cloudflare Pages، متغیرهای محیطی به صورت window.GEMINI_API_KEY در دسترس هستند
// Cloudflare Pages متغیرهای محیطی را به صورت متغیرهای سراسری در اختیار کلاینت قرار می‌دهد.
// این اسکریپت تلاش می‌کند کلیدها را از window یا از محدودهٔ global بخواند و آن‌ها را
// در window.TAAVON_API_KEYS قرار دهد تا بقیهٔ برنامه به‌صورت یکپارچه از آن استفاده کند.
(function injectTaavonKeys() {
  const fromWindow = name =>
    typeof window !== "undefined" && typeof window[name] !== "undefined"
      ? window[name]
      : undefined;

  const keys = [
    typeof GEMINI_API_KEY !== "undefined" ? GEMINI_API_KEY : fromWindow("GEMINI_API_KEY"),
    typeof GEMINI_API_KEY_1 !== "undefined" ? GEMINI_API_KEY_1 : fromWindow("GEMINI_API_KEY_1"),
    typeof GEMINI_API_KEY_2 !== "undefined" ? GEMINI_API_KEY_2 : fromWindow("GEMINI_API_KEY_2"),
    typeof GEMINI_API_KEY_3 !== "undefined" ? GEMINI_API_KEY_3 : fromWindow("GEMINI_API_KEY_3"),
    typeof GEMINI_API_KEY_4 !== "undefined" ? GEMINI_API_KEY_4 : fromWindow("GEMINI_API_KEY_4"),
    typeof GEMINI_API_KEY_5 !== "undefined" ? GEMINI_API_KEY_5 : fromWindow("GEMINI_API_KEY_5"),
    typeof GEMINI_API_KEY_6 !== "undefined" ? GEMINI_API_KEY_6 : fromWindow("GEMINI_API_KEY_6")
  ].filter(Boolean);

  // حذف کلیدهای تکراری برای جلوگیری از استفادهٔ دوباره
  window.TAAVON_API_KEYS = [...new Set(keys)];

  if (!window.TAAVON_API_KEYS.length) {
    const available =
      typeof window !== "undefined"
        ? Object.keys(window).filter(key => key.toUpperCase().includes("GEMINI"))
        : [];
    console.warn("[env.js] هیچ کلید Gemini پیدا نشد. متغیرهای در دسترس:", available);
  } else {
    console.log(`[env.js] ${window.TAAVON_API_KEYS.length} Gemini API key(s) detected.`);
  }
})();

