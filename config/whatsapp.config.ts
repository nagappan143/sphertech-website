/**
 * WhatsApp Configuration — SpherTech
 *
 * Update WHATSAPP_NUMBER and the message content below to match your business.
 */

// WhatsApp number (Country code + Number, without + symbol)
export const WHATSAPP_NUMBER = '917063961249';

// Auto-send messages when chatbot first opens
export const AUTO_MESSAGES = [
  "Hello! 👋 Welcome to SpherTech",
  "I'm an assistant here to help with your project or product inquiries.",
  "How can I help you today?",
  "You can ask me about:\n• IT Projects\n• Products\n• Online Learning / Courses\n• Pricing & Support",
];

// Bot response patterns
export const BOT_RESPONSES = {
  greeting: "Hello! 👋 Welcome to SpherTech. How can I help you today?",
  projects:
    "💻 We build custom IT projects — web apps, mobile apps, automation, and enterprise software. Tell me a bit about what you're looking to build!",
  products:
    "📦 We offer ready-made products and SaaS solutions. Would you like a quick overview or a demo link?",
  learning:
    "🎓 Our Online Learning platform covers tech courses with hands-on projects. Want details on current batches or pricing?",
  contact:
    "📞 Phone: +91 70 6396 1249\n📧 Email: hello@sphertech.example.com\n📍 SpherTech Tower, Tech Park, Chennai, India 560001",
  pricing:
    "💰 Pricing depends on scope. Share a few details about your project/product/course interest and we'll send a quote.",
  default:
    "Thanks for reaching out! For a quick response, tap 'Continue on WhatsApp' below and our team will assist you directly. 😊",
};

// Keywords for triggering specific responses
export const TRIGGER_KEYWORDS = {
  greeting: ['hello', 'hi', 'hey', 'start', 'begin'],
  projects: ['project', 'app', 'website', 'development', 'build', 'software'],
  products: ['product', 'saas', 'tool', 'solution'],
  learning: ['course', 'learning', 'training', 'class', 'batch', 'online learning'],
  contact: ['contact', 'phone', 'email', 'address', 'location'],
  pricing: ['price', 'cost', 'pricing', 'quote', 'budget'],
};

// Message delay configuration (in milliseconds)
export const MESSAGE_DELAYS = {
  autoMessageInterval: 1000,
  autoMessageStartDelay: 500,
  botResponseDelay: 600,
};