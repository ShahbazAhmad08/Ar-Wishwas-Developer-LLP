import React, { useState, useEffect, useRef } from 'react';
import { COMPANY_INFO, SITES_DATA } from '../data/sitesData';
import { 
  Bot, Mic, MicOff, Volume2, VolumeX, Send, X, Sparkles, 
  Settings, Key, RefreshCw, MessageSquare, Phone, Calendar, ArrowRight, Play, Square
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Knowledge base for fallback zero-latency responses
const generateLocalResponse = (query) => {
  const q = query.toLowerCase();

  if (q.includes('prayagraj') || q.includes('allahabad') || q.includes('bamrauli') || q.includes('jhalwa')) {
    return "Prayagraj me hamare 2 prime projects hain: 1) Wishwas Green City (Bamrauli Airport ke paas, starting ₹8,500/sq.yd) aur 2) Wishwas Royal Enclave (Jhalwa IIIT Tech Hub ke paas, starting ₹11,200/sq.yd). Dono gated societies 100% Section 143 approved aur registry ready hain.";
  }

  if (q.includes('kaushambi') || q.includes('manjhanpur') || q.includes('bharwari') || q.includes('saini')) {
    return "Kaushambi me hamare 3 high-ROI projects hain: 1) Wishwas Eco Park (Manjhanpur Main Highway, ₹6,000/sq.yd), 2) Wishwas Smart Township (Bharwari Junction, ₹5,500/sq.yd), aur 3) Wishwas Residency (NH-19 direct touch, ₹7,200/sq.yd). Sabhi me 30-40ft interlocking roads aur light available hai.";
  }

  if (q.includes('price') || q.includes('rate') || q.includes('budget') || q.includes('cost') || q.includes('kitne ka')) {
    return "Ar Wishwas Developer me plot rates ₹5,500 se lekar ₹11,200 per square yard tak hain. 100 gaj (900 sq.ft) ka plot approx ₹5.5 Lakh se shuru hota hai, jisme aapko 80% tak nationalized bank loan (SBI/PNB) mil sakta hai.";
  }

  if (q.includes('legal') || q.includes('143') || q.includes('registry') || q.includes('dakhil') || q.includes('mutation') || q.includes('paper')) {
    return "Hamari sabhi zameenein 100% clear title aur UP Revenue Code Section 143/80 non-agricultural certified hain. Full payment par Sub-Registrar office me direct stamp paper par registry hoti hai aur UP Bhulekh portal par online mutation (Dakhil-Kharij) ki guarantee di jaati hai.";
  }

  if (q.includes('loan') || q.includes('bank') || q.includes('emi') || q.includes('finance')) {
    return "State Bank of India (SBI), Punjab National Bank (PNB), HDFC aur Bank of Baroda se hamare sabhi projects pre-approved hain. Aapko plot valuation par 75% se 80% tak easy EMI loan mil jaata hai.";
  }

  if (q.includes('visit') || q.includes('site') || q.includes('dekhna') || q.includes('location')) {
    return "Aap free site visit book kar sakte hain! Hamari vehicle aapko pickup karegi aur aap plot boundary pillars aur 30-40ft roads live dekh sakte hain. Booking ke liye 'Schedule Site Visit' button dabayein ya +91 90059 38097 par call karein.";
  }

  if (q.includes('contact') || q.includes('phone') || q.includes('number') || q.includes('office') || q.includes('address')) {
    return `Aap humse direct call ya WhatsApp par sampark kar sakte hain: Phone: ${COMPANY_INFO.phone}, Email: ${COMPANY_INFO.email}. Hamara Corporate Office Civil Lines, Near High Court, Prayagraj me hai.`;
  }

  return "Namaste! Mai Ar Wishwas Developer ka AI Assistant hoon. Mai aapko Prayagraj aur Kaushambi ke verified gated plots, Section 143 legal paperwork, SBI/PNB bank loan, aur site visit booking me madad kar sakta hoon. Aap apna sawaal bol ya likh sakte hain!";
};

export const AiVoiceAssistant = ({ isOpen, onClose, onOpenSiteVisit }) => {
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: "Namaste! Mai Ar Wishwas Developer ka AI Voice Assistant hoon. Prayagraj ya Kaushambi me plots, registry, pricing ya bank loan ke baare me poochiye!",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [grokApiKey, setGrokApiKey] = useState(() => localStorage.getItem('GROK_API_KEY') || '');
  const [showSettings, setShowSettings] = useState(false);
  
  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Initialize Speech Recognition
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'hi-IN'; // Indian Hindi / Hinglish primary

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        if (transcript) {
          handleSendMessage(transcript);
        }
      };

      recognition.onerror = (event) => {
        console.warn('Speech recognition error:', event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }
  }, []);

  // Text-To-Speech function with calm Indian voice and balanced pacing (0.85 rate)
  const speakText = (text) => {
    if (!voiceEnabled || !window.speechSynthesis) return;

    window.speechSynthesis.cancel(); // Cancel any existing speech

    // Clean text from symbols
    const cleanText = text.replace(/[*#_`]/g, '').trim();

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 0.86; // Aaram aaram se bole taaki sab samajh aaye
    utterance.pitch = 1.0;

    // Search for best Indian Voice (hi-IN or en-IN)
    const voices = window.speechSynthesis.getVoices();
    const indianVoice = voices.find(v => 
      v.lang === 'hi-IN' || 
      v.lang === 'hi_IN' || 
      v.name.includes('Hindi') || 
      v.name.includes('India') || 
      v.lang === 'en-IN' || 
      v.lang === 'en_IN'
    );

    if (indianVoice) {
      utterance.voice = indianVoice;
    }

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  // Toggle Voice Recognition Mic
  const toggleListening = () => {
    if (!recognitionRef.current) {
      alert("Aapke browser me speech recognition support nahi hai. Kripya Chrome ya Edge use karein.");
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
    } else {
      stopSpeaking();
      try {
        recognitionRef.current.start();
      } catch (err) {
        console.error("Mic start error", err);
      }
    }
  };

  // Send message to Grok AI or Fallback Smart Engine
  const handleSendMessage = async (textToSend) => {
    const query = (textToSend || inputMessage).trim();
    if (!query) return;

    setInputMessage('');
    stopSpeaking();

    const userMsg = {
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setIsLoading(true);

    let aiReply = "";

    // Check if Grok API Key is provided
    if (grokApiKey) {
      try {
        const response = await fetch("https://api.x.ai/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${grokApiKey}`
          },
          body: JSON.stringify({
            model: "grok-beta",
            messages: [
              {
                role: "system",
                content: `You are the official Senior Real Estate Voice Assistant of Ar Wishwas Developer LLP.
Company details:
- Plotted gated townships in Prayagraj (Wishwas Green City near Bamrauli Airport, Wishwas Royal Enclave near Jhalwa IIIT) and Kaushambi (Wishwas Eco Park in Manjhanpur, Wishwas Smart Township in Bharwari, Wishwas Residency on NH-19).
- Rates range from ₹5,500 to ₹11,200 per sq.yd.
- Section 143 Non-Agricultural converted, 100% Freehold, instant registry on stamp paper, and online Khatauni mutation on UP Bhulekh.
- Bank Loan approved up to 80% by SBI, PNB, HDFC, Bank of Baroda.
- Phone: +91 90059 38097, Email: info@arvishawas.in.
Tone: Polite, professional, helpful Indian Hindi / Hinglish. Keep answers concise, clear, and easy to understand when read aloud.`
              },
              {
                role: "user",
                content: query
              }
            ],
            temperature: 0.7,
            max_tokens: 300
          })
        });

        if (response.ok) {
          const data = await response.json();
          aiReply = data.choices[0]?.message?.content || generateLocalResponse(query);
        } else {
          aiReply = generateLocalResponse(query);
        }
      } catch (err) {
        console.warn("Grok API call failed, using smart local engine", err);
        aiReply = generateLocalResponse(query);
      }
    } else {
      // Simulate quick natural processing with built-in real estate engine
      await new Promise(r => setTimeout(r, 600));
      aiReply = generateLocalResponse(query);
    }

    const aiMsg = {
      sender: 'ai',
      text: aiReply,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, aiMsg]);
    setIsLoading(false);

    // Auto speak with Indian voice
    speakText(aiReply);
  };

  const handleSaveApiKey = (key) => {
    setGrokApiKey(key);
    localStorage.setItem('GROK_API_KEY', key);
    setShowSettings(false);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/70 backdrop-blur-sm"
      >
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          onClick={e => e.stopPropagation()}
          className="relative w-full sm:max-w-lg h-[90vh] sm:h-[650px] bg-[#071124] border border-amber-400/40 rounded-t-3xl sm:rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden"
        >
          
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0B1A38] via-[#102A56] to-[#071124] p-4 border-b border-amber-400/30 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 p-0.5 shadow-md flex items-center justify-center">
                <Bot className="w-6 h-6 text-slate-950" />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-slate-950 rounded-full animate-pulse" />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-display font-bold text-white">
                    Ar Wishwas AI Voice Advisor
                  </h3>
                  <span className="text-[9px] font-mono bg-amber-400/20 text-amber-300 px-1.5 py-0.5 rounded border border-amber-400/30">
                    {grokApiKey ? "Grok AI Enabled" : "Smart Voice Engine"}
                  </span>
                </div>
                <p className="text-[10px] text-slate-300 flex items-center gap-1 font-sans">
                  <span>Indian Accent Voice • Hindi & English</span>
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1.5">
              {/* Audio Toggle */}
              <button
                onClick={() => {
                  if (isSpeaking) stopSpeaking();
                  setVoiceEnabled(!voiceEnabled);
                }}
                className={`p-2 rounded-xl transition ${voiceEnabled ? 'bg-amber-500/20 text-amber-300' : 'bg-slate-800 text-slate-400'}`}
                title={voiceEnabled ? "Voice Output Active" : "Voice Output Muted"}
              >
                {voiceEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </button>

              {/* API Settings */}
              <button
                onClick={() => setShowSettings(!showSettings)}
                className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition"
                title="Grok AI API Settings"
              >
                <Settings className="w-4 h-4" />
              </button>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-800/80 hover:bg-rose-600 hover:text-white text-slate-300 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Grok API Key Settings Drawer */}
          {showSettings && (
            <div className="p-4 bg-slate-900 border-b border-amber-400/30 text-white animate-in slide-in-from-top duration-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                  <Key className="w-3.5 h-3.5" /> Grok AI (xAI) API Configuration
                </span>
                <button 
                  onClick={() => setShowSettings(false)}
                  className="text-[11px] text-slate-400 hover:text-white"
                >
                  Close
                </button>
              </div>
              <p className="text-[11px] text-slate-300 mb-2">
                Apna Grok AI API Key daaliye advanced real-time LLM intelligence ke liye (optional):
              </p>
              <div className="flex gap-2">
                <input
                  type="password"
                  value={grokApiKey}
                  onChange={(e) => setGrokApiKey(e.target.value)}
                  placeholder="xai-xxxxxxxxxxxxxxxxxxxx"
                  className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-amber-400 font-mono"
                />
                <button
                  onClick={() => handleSaveApiKey(grokApiKey)}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-3 py-1.5 rounded-xl text-xs"
                >
                  Save
                </button>
              </div>
            </div>
          )}

          {/* Active Speaking Indicator */}
          {isSpeaking && (
            <div className="bg-amber-500/15 border-b border-amber-400/30 px-4 py-2 flex items-center justify-between text-amber-300 text-xs">
              <div className="flex items-center gap-2">
                <span className="flex gap-0.5 items-end h-3.5">
                  <span className="w-1 bg-amber-400 rounded-full animate-bounce [animation-delay:-0.3s] h-3" />
                  <span className="w-1 bg-amber-400 rounded-full animate-bounce [animation-delay:-0.15s] h-4" />
                  <span className="w-1 bg-amber-400 rounded-full animate-bounce h-2" />
                </span>
                <span className="font-semibold">AI bol raha hai (Indian Accent)...</span>
              </div>
              <button
                onClick={stopSpeaking}
                className="inline-flex items-center gap-1 text-[10px] font-bold bg-slate-900 border border-amber-400/40 px-2 py-0.5 rounded-md hover:bg-slate-800 text-amber-200"
              >
                <Square className="w-2.5 h-2.5 fill-amber-300 text-amber-300" /> Stop Audio
              </button>
            </div>
          )}

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
            {messages.map((msg, index) => {
              const isAi = msg.sender === 'ai';
              return (
                <div
                  key={index}
                  className={`flex items-start gap-2.5 ${isAi ? 'justify-start' : 'justify-end'}`}
                >
                  {isAi && (
                    <div className="w-7 h-7 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center flex-shrink-0 text-amber-400 mt-0.5">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div className={`max-w-[82%] rounded-2xl p-3 text-xs leading-relaxed ${
                    isAi
                      ? 'bg-slate-900/95 border border-slate-700/80 text-slate-100 shadow-md'
                      : 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-medium shadow-md'
                  }`}>
                    <p className="font-sans whitespace-pre-line">{msg.text}</p>
                    
                    <div className="mt-1.5 flex items-center justify-between text-[9px] opacity-70 gap-2">
                      <span>{msg.time}</span>
                      {isAi && (
                        <button
                          onClick={() => speakText(msg.text)}
                          className="text-amber-300 hover:text-white flex items-center gap-1 cursor-pointer"
                          title="Listen again"
                        >
                          <Volume2 className="w-3 h-3" /> Suniye
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {isLoading && (
              <div className="flex items-center gap-2 text-xs text-amber-300 bg-slate-900/80 border border-slate-800 p-3 rounded-2xl w-fit">
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-amber-400" />
                <span>AI jawaab soch raha hai...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompt Chips */}
          <div className="px-4 py-2 border-t border-slate-800/80 flex gap-2 overflow-x-auto no-scrollbar">
            {[
              "Prayagraj ke plots",
              "Kaushambi ke plots",
              "Section 143 & Registry",
              "Bank loan / EMI"
            ].map((chip, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(chip)}
                className="bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-400/30 text-[10px] font-medium px-2.5 py-1 rounded-full whitespace-nowrap transition cursor-pointer flex-shrink-0"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Bottom Voice & Text Input */}
          <div className="p-3 bg-slate-950 border-t border-slate-800">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputMessage);
              }}
              className="flex items-center gap-2"
            >
              {/* Mic Voice Input Button */}
              <button
                type="button"
                onClick={toggleListening}
                className={`p-3 rounded-2xl transition-all cursor-pointer flex items-center justify-center ${
                  isListening
                    ? 'bg-rose-500 text-white animate-pulse shadow-[0_0_15px_rgba(244,63,94,0.8)]'
                    : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md'
                }`}
                title={isListening ? "Listening... (Bolna band karein)" : "Tap to Speak (Boliye)"}
              >
                {isListening ? <MicOff className="w-5 h-5 animate-spin" /> : <Mic className="w-5 h-5" />}
              </button>

              {/* Text Input */}
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder={isListening ? "Listening... Boliye..." : "Apna sawaal yahan likhein ya mic dabayein..."}
                className="flex-1 bg-slate-900 border border-slate-700 focus:border-amber-400 rounded-2xl px-4 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none transition"
              />

              {/* Send Button */}
              <button
                type="submit"
                disabled={!inputMessage.trim() || isLoading}
                className="bg-amber-500 hover:bg-amber-400 disabled:opacity-40 disabled:hover:bg-amber-500 text-slate-950 p-3 rounded-2xl transition shadow-md cursor-pointer flex items-center justify-center"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            {/* Quick Footer Links */}
            <div className="mt-2 pt-2 border-t border-slate-900 flex items-center justify-between text-[10px] text-slate-400 px-1">
              <button
                onClick={() => {
                  onClose();
                  if (onOpenSiteVisit) onOpenSiteVisit();
                }}
                className="text-amber-400 hover:underline flex items-center gap-1 font-semibold"
              >
                <Calendar className="w-3 h-3" /> Schedule Site Visit
              </button>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent("Hello Ar Wishwas Developer, I need assistance regarding plots.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline flex items-center gap-1 font-semibold"
              >
                <MessageSquare className="w-3 h-3" /> Direct WhatsApp
              </a>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
