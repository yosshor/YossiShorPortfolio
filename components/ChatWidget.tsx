import React, { useState, useRef, useEffect } from 'react';
import { MessageCircleIcon, XIcon, SendIcon, SparklesIcon } from './Icons';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init',
      role: 'model',
      text: "Hi! I'm Yossi's AI assistant. Ask me anything about his resume, skills, or experience.",
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(userMessage.text);
      
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Failed to send message", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white p-4 rounded-full shadow-[0_4px_20px_rgba(14,165,233,0.4)] transition-all transform hover:scale-105"
        >
          <MessageCircleIcon className="w-6 h-6" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-[max-width] duration-300 ease-in-out whitespace-nowrap font-medium">
            Ask AI about Yossi
          </span>
        </button>
      )}

      {isOpen && (
        <div className="w-[350px] sm:w-[400px] h-[500px] bg-dark-900 rounded-2xl shadow-2xl border border-white/10 flex flex-col animate-fade-in-up overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-brand-600 to-purple-600 p-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-white">
              <SparklesIcon className="w-5 h-5" />
              <h3 className="font-semibold">Yossi's AI Assistant</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
            >
              <XIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-dark-900 scrollbar-thin">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-brand-600 text-white rounded-br-none'
                      : 'bg-dark-800 text-slate-200 border border-white/10 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-dark-800 p-4 rounded-2xl rounded-bl-none border border-white/10 flex gap-1">
                  <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10 bg-dark-950">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about my experience..."
                className="flex-1 bg-dark-800 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-slate-500"
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !inputValue.trim()}
                className="bg-brand-600 text-white p-2 rounded-lg hover:bg-brand-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <SendIcon className="w-5 h-5" />
              </button>
            </div>
            <p className="text-[10px] text-slate-500 mt-2 text-center">
              Powered by Google Gemini API. AI may make mistakes.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
