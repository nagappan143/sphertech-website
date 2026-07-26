'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, MessageCircle, X, Send } from 'lucide-react';
import {
  WHATSAPP_NUMBER,
  AUTO_MESSAGES,
  BOT_RESPONSES,
  TRIGGER_KEYWORDS,
  MESSAGE_DELAYS,
} from '@/config/whatsapp.config';

interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
}

export function FloatingButtons() {
  const [showTop, setShowTop] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = React.useState('');
  const [isAutoSending, setIsAutoSending] = React.useState(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);
  // Separate timeout refs so clearing one flow never cancels the other.
  const autoMessageTimeoutIdsRef = React.useRef<NodeJS.Timeout[]>([]);
  const replyTimeoutIdsRef = React.useRef<NodeJS.Timeout[]>([]);
  const hasAutoSentRef = React.useRef(false);

  React.useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Fires exactly once per open — driven by a ref, not state, so this
  // effect never re-runs (and never re-clears itself) once it starts.
  React.useEffect(() => {
    if (!isOpen || hasAutoSentRef.current) return;
    hasAutoSentRef.current = true;
    setIsAutoSending(true);

    let delay = MESSAGE_DELAYS.autoMessageStartDelay;
    AUTO_MESSAGES.forEach((msg, index) => {
      const id = setTimeout(() => {
        const newMessage: ChatMessage = { id: `auto-${index}`, text: msg, sender: 'bot' };
        setMessages((prev) => [...prev, newMessage]);
      }, delay);
      autoMessageTimeoutIdsRef.current.push(id);
      delay += MESSAGE_DELAYS.autoMessageInterval;
    });

    const doneId = setTimeout(() => setIsAutoSending(false), delay);
    autoMessageTimeoutIdsRef.current.push(doneId);
  }, [isOpen]);

  // Clear all pending timeouts on unmount only.
  React.useEffect(() => {
    return () => {
      autoMessageTimeoutIdsRef.current.forEach(clearTimeout);
      replyTimeoutIdsRef.current.forEach(clearTimeout);
    };
  }, []);

  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const lower = userMessage.toLowerCase();

    if (TRIGGER_KEYWORDS.greeting.some((kw) => lower.includes(kw))) return BOT_RESPONSES.greeting;
    if (TRIGGER_KEYWORDS.projects.some((kw) => lower.includes(kw))) return BOT_RESPONSES.projects;
    if (TRIGGER_KEYWORDS.products.some((kw) => lower.includes(kw))) return BOT_RESPONSES.products;
    if (TRIGGER_KEYWORDS.learning.some((kw) => lower.includes(kw))) return BOT_RESPONSES.learning;
    if (TRIGGER_KEYWORDS.contact.some((kw) => lower.includes(kw))) return BOT_RESPONSES.contact;
    if (TRIGGER_KEYWORDS.pricing.some((kw) => lower.includes(kw))) return BOT_RESPONSES.pricing;
    return BOT_RESPONSES.default;
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = { id: `user-${Date.now()}`, text: inputValue, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue('');

    const id = setTimeout(() => {
      const botResponse: ChatMessage = {
        id: `bot-${Date.now()}`,
        text: getBotResponse(currentInput),
        sender: 'bot',
      };
      setMessages((prev) => [...prev, botResponse]);
    }, MESSAGE_DELAYS.botResponseDelay);
    replyTimeoutIdsRef.current.push(id);
  };

  const handleWhatsAppDirectClick = () => {
    const message = encodeURIComponent(
      'Hello SpherTech! I would like to know more about your IT projects, products, or online learning courses. 👋'
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-card/80 text-foreground shadow-xl backdrop-blur-xl transition hover:border-primary/40"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Chat on WhatsApp"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-500/30 transition hover:scale-110"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 flex h-[500px] w-96 flex-col rounded-2xl border border-border/60 bg-card shadow-2xl max-sm:w-80">
          <div className="flex items-center justify-between rounded-t-2xl bg-emerald-500 p-4 text-white">
            <div>
              <h3 className="text-lg font-semibold">SpherTech Chat</h3>
              <p className="text-xs text-emerald-100">Usually responds instantly</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full p-2 transition hover:bg-emerald-600"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-muted/30 p-4">
            {messages.length === 0 && !isAutoSending && (
              <div className="mt-6 text-center text-sm text-muted-foreground">
                <MessageCircle className="mx-auto mb-3 h-10 w-10 text-emerald-500" />
                <p>Start a conversation…</p>
              </div>
            )}

            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-xs whitespace-pre-wrap break-words rounded-lg px-4 py-2 ${
                    msg.sender === 'user'
                      ? 'rounded-br-none bg-emerald-500 text-white'
                      : 'rounded-bl-none border border-border/60 bg-card text-foreground'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="rounded-b-2xl border-t border-border/60 bg-card p-3">
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message…"
                className="flex-1 rounded-lg border border-border/60 bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button
                type="submit"
                className="rounded-lg bg-emerald-500 p-2 text-white transition hover:bg-emerald-600"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>

            <button
              onClick={handleWhatsAppDirectClick}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 py-2 text-sm font-medium text-white transition hover:bg-emerald-600"
            >
              Continue on WhatsApp
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export function CookieConsent() {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const t = setTimeout(() => setShow(true), 1500);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        className="fixed bottom-4 left-4 right-4 z-40 mx-auto max-w-md rounded-2xl border border-border/60 bg-card/90 p-4 shadow-2xl backdrop-blur-xl"
      >
        <div className="flex items-start gap-3">
          <p className="flex-1 text-sm text-muted-foreground">
            We use cookies to enhance your experience. By continuing, you agree
            to our cookie policy.
          </p>
          <button
            aria-label="Dismiss"
            onClick={() => setShow(false)}
            className="rounded-lg p-1 hover:bg-muted"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-3 flex gap-2">
          <button
            onClick={() => setShow(false)}
            className="flex-1 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
          >
            Accept
          </button>
          <button
            onClick={() => setShow(false)}
            className="flex-1 rounded-lg border border-border px-4 py-2 text-sm font-medium"
          >
            Decline
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}