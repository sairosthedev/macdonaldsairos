"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm here to help you learn more about Macdonald Sairos and his work. What would you like to know?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const playHoverSound = () => {
    // Sound effects removed
  };

  const playClickSound = () => {
    // Sound effects removed
  };

  const getBotResponse = (userMessage, conversationHistory) => {
    // For now, let's use only fallback responses to test
    console.log('Getting bot response for:', userMessage);
    
    const fallbackResponses = {
      greeting: [
        "Hello! Great to meet you! 👋 I'm here to help you learn about Macdonald Sairos.",
        "Hi there! Welcome to Macdonald's portfolio! How can I assist you today?",
        "Hey! I'm excited to tell you about Macdonald's work and skills!"
      ],
      about: [
        "Macdonald Sairos is a passionate Full Stack Developer with expertise in modern web technologies. He specializes in creating innovative digital solutions that combine functionality with beautiful design.",
        "Macdonald is a creative developer who loves building user-friendly applications. He has experience with React, Next.js, Node.js, and various other technologies.",
        "Macdonald is a dedicated developer focused on creating exceptional user experiences through clean code and thoughtful design."
      ],
      skills: [
        "Macdonald's key skills include:\n• Frontend: React, Next.js, JavaScript, TypeScript, Tailwind CSS\n• Backend: Node.js, Express, Python, Django\n• Database: MongoDB, PostgreSQL, MySQL\n• Tools: Git, Docker, AWS, Vercel\n• Design: UI/UX, Figma, Adobe Creative Suite",
        "He's proficient in modern web development technologies including React ecosystem, server-side development, database management, and cloud deployment.",
        "Macdonald specializes in full-stack development with a focus on creating responsive, performant web applications."
      ],
      projects: [
        "Macdonald has worked on various projects including:\n• Modern web applications with React and Next.js\n• E-commerce platforms\n• Business solutions and dashboards\n• Mobile-responsive designs\n• Performance-optimized applications\n\nYou can see more details on his portfolio or GitHub: github.com/sairosthedev",
        "Macdonald's projects showcase his expertise in full-stack development, with a focus on user experience and modern design patterns. He's worked on everything from simple websites to complex web applications.",
        "Macdonald has built numerous projects demonstrating his skills in React, Next.js, and modern web technologies. Check out his GitHub profile for code examples and project details!"
      ],
      work: [
        "Macdonald works as a Full Stack Developer at Miccs Technologies, where he creates innovative digital solutions. He specializes in building user-friendly web applications using modern technologies like React, Next.js, and Node.js.",
        "Macdonald is a professional developer who creates web applications, APIs, and digital solutions. He's passionate about clean code, user experience, and staying up-to-date with the latest web technologies.",
        "Macdonald's work involves developing full-stack web applications, designing user interfaces, and implementing backend solutions. He's experienced in both frontend and backend development."
      ],
      experience: [
        "Macdonald has extensive experience in:\n• Full Stack Web Development\n• React and Next.js applications\n• Node.js backend development\n• Database design and management\n• UI/UX design\n• Cloud deployment and DevOps\n\nHe's worked on various client projects and continues to expand his skills.",
        "Macdonald brings years of experience in modern web development, with expertise spanning the entire development stack from frontend to backend and deployment.",
        "With experience in both frontend and backend development, Macdonald has worked on diverse projects ranging from simple websites to complex web applications."
      ],
      age: [
        "I don't have specific personal information like age, but I can tell you about Macdonald's professional experience and skills! He's a skilled Full Stack Developer with expertise in modern web technologies.",
        "Macdonald's professional experience and skills are what matter most! He's a talented developer with extensive experience in React, Next.js, and full-stack development.",
        "While I don't have personal details like age, I can share that Macdonald is an experienced Full Stack Developer passionate about creating innovative web solutions."
      ],
      contact: [
        "You can reach Macdonald through:\n• WhatsApp: +263786033933\n• LinkedIn: linkedin.com/in/macdonald-sairos-8b1686186\n• GitHub: github.com/sairosthedev\n• Email: macdonaldsairos@gmail.com",
        "Macdonald is always open to discussing new opportunities and collaborations. Feel free to reach out through any of his social channels!",
        "For business inquiries or just to say hello, Macdonald can be reached via WhatsApp, LinkedIn, or GitHub. He's very responsive!"
      ],
      default: [
        "That's an interesting question! I'd be happy to help you learn more about Macdonald's skills, projects, or how to get in touch with him.",
        "I can tell you more about Macdonald's work, skills, or help you find the best way to contact him directly.",
        "That's a great question! For the most accurate information, I'd recommend reaching out to Macdonald directly through his contact channels."
      ]
    };

    const message = userMessage.toLowerCase();
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return fallbackResponses.greeting[Math.floor(Math.random() * fallbackResponses.greeting.length)];
    } else if (message.includes('about') || message.includes('who') || message.includes('introduce')) {
      return fallbackResponses.about[Math.floor(Math.random() * fallbackResponses.about.length)];
    } else if (message.includes('skill') || message.includes('technology') || message.includes('tech')) {
      return fallbackResponses.skills[Math.floor(Math.random() * fallbackResponses.skills.length)];
    } else if (message.includes('project') || message.includes('portfolio') || message.includes('work')) {
      return fallbackResponses.projects[Math.floor(Math.random() * fallbackResponses.projects.length)];
    } else if (message.includes('work') || message.includes('job') || message.includes('career')) {
      return fallbackResponses.work[Math.floor(Math.random() * fallbackResponses.work.length)];
    } else if (message.includes('experience') || message.includes('background') || message.includes('history')) {
      return fallbackResponses.experience[Math.floor(Math.random() * fallbackResponses.experience.length)];
    } else if (message.includes('age') || message.includes('old') || message.includes('birthday')) {
      return fallbackResponses.age[Math.floor(Math.random() * fallbackResponses.age.length)];
    } else if (message.includes('contact') || message.includes('reach') || message.includes('connect') || message.includes('phone') || message.includes('email')) {
      return fallbackResponses.contact[Math.floor(Math.random() * fallbackResponses.contact.length)];
    } else {
      return fallbackResponses.default[Math.floor(Math.random() * fallbackResponses.default.length)];
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue("");
    setIsTyping(true);

    try {
      // Call the chatbot API
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: currentInput,
          conversationHistory: messages
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        const botResponse = {
          id: Date.now() + 1,
          text: data.response,
          sender: "bot",
          timestamp: new Date(),
        };
        
        setMessages(prev => [...prev, botResponse]);
      } else {
        throw new Error(data.error || 'Failed to get response');
      }
    } catch (error) {
      console.error('Chatbot error:', error);
      // Fallback to local response if API fails
      const botResponseText = getBotResponse(currentInput, messages);
      
      const botResponse = {
        id: Date.now() + 1,
        text: botResponseText,
        sender: "bot",
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "Tell me about Macdonald",
    "What are his technical skills?",
    "What services does he offer?",
    "How can I contact him?",
    "What's his experience?",
    "Tell me about his projects"
  ];

  const handleQuickQuestion = (question) => {
    setInputValue(question);
    handleSendMessage();
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
      >
        <motion.div
          animate={isOpen ? { rotate: -45 } : { rotate: 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          )}
        </motion.div>
        
        {/* Pulse animation when closed */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 rounded-full bg-purple-500"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 0, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-40 w-96 h-[500px] bg-[#111111] border border-purple-500/20 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 text-white">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="font-press-start text-sm">MS</span>
                </div>
                <div>
                  <h3 className="font-orbitron text-lg">Macdonald's Assistant</h3>
                  <p className="text-sm text-white/80">Online now</p>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 h-[350px] overflow-y-auto p-4 space-y-4 bg-[#0a0a0a]">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.sender === "user"
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                        : "bg-[#1a1a1a] text-gray-100 border border-purple-500/20"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-[#1a1a1a] border border-purple-500/20 p-3 rounded-2xl">
                    <div className="flex space-x-1">
                      <motion.div
                        className="w-2 h-2 bg-purple-500 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-purple-500 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-purple-500 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Quick Questions */}
              {messages.length === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-2"
                >
                  <p className="text-xs text-gray-400 text-center">Quick questions:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {quickQuestions.map((question, index) => (
                      <motion.button
                        key={index}
                        onClick={() => handleQuickQuestion(question)}
                        className="text-xs p-2 bg-[#1a1a1a] border border-purple-500/20 rounded-lg text-gray-300 hover:text-purple-400 hover:border-purple-500/40 transition-all duration-200"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {question}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-[#111111] border-t border-purple-500/20">
              <div className="flex space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about Macdonald..."
                  className="flex-1 p-3 bg-[#1a1a1a] border border-purple-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/40 transition-colors duration-200"
                />
                <motion.button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;