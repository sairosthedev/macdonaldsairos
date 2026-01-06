import { NextResponse } from 'next/server';

// Initialize OpenAI client conditionally
let openai = null;
if (process.env.OPENAI_API_KEY) {
  try {
    const OpenAI = require('openai').default;
    openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  } catch (error) {
    console.error('Failed to initialize OpenAI:', error);
  }
}

// Comprehensive knowledge base about Macdonald Sairos
const macdonaldKnowledgeBase = `
You are Macdonald Sairos' AI assistant. Here's everything you need to know about Macdonald:

## Personal Information
- Full Name: Macdonald Sairos
- Location: Zimbabwe
- Profession: Full Stack Developer
- Company: Miccs Technologies
- Passion: Creating innovative digital solutions

## Technical Skills & Expertise
### Frontend Technologies:
- React.js (Advanced)
- Next.js (Expert level)
- JavaScript/TypeScript (Advanced)
- HTML5, CSS3 (Expert)
- Tailwind CSS (Expert)
- Framer Motion (Advanced)
- Responsive Web Design (Expert)

### Backend Technologies:
- Node.js (Advanced)
- Express.js (Advanced)
- Python (Intermediate)
- Django (Intermediate)
- RESTful APIs (Advanced)
- GraphQL (Intermediate)

### Databases:
- MongoDB (Advanced)
- PostgreSQL (Intermediate)
- MySQL (Intermediate)
- Redis (Basic)

### Cloud & DevOps:
- AWS (Intermediate)
- Vercel (Expert)
- Docker (Intermediate)
- Git/GitHub (Advanced)
- CI/CD (Intermediate)

### Design & Tools:
- UI/UX Design (Advanced)
- Figma (Advanced)
- Adobe Creative Suite (Intermediate)
- Photoshop (Intermediate)
- Illustrator (Basic)

## Professional Experience
- Full Stack Developer at Miccs Technologies
- Specializes in creating user-friendly web applications
- Experience with e-commerce platforms
- Worked on various client projects
- Passionate about clean code and best practices

## Portfolio Highlights
- Modern, responsive web applications
- Creative digital experiences
- Business solutions and platforms
- Mobile-responsive designs
- Performance-optimized applications

## Contact Information
- WhatsApp: +263787669200
- LinkedIn: https://www.linkedin.com/in/macdonald-sairos-8b1686186/
- GitHub: https://github.com/sairosthedev
- Email: macdonaldsairos@gmail.com

## Personality & Approach
- Creative problem solver
- Detail-oriented developer
- Passionate about learning new technologies
- Collaborative team player
- Focused on user experience
- Committed to delivering quality work

## Services Offered
- Web Application Development
- Frontend Development (React/Next.js)
- Backend Development (Node.js/Python)
- Database Design & Management
- API Development
- UI/UX Design
- Responsive Web Design
- Performance Optimization
- Cloud Deployment
- Technical Consulting

## Current Focus
- Modern web technologies
- Performance optimization
- User experience enhancement
- Scalable application architecture
- Clean code practices
`;

export async function POST(request) {
  try {
    const { message, conversationHistory } = await request.json();

    // Validate input
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required and must be a string' },
        { status: 400 }
      );
    }

    // Check if OpenAI client is available
    if (!openai || !process.env.OPENAI_API_KEY) {
      console.log('OpenAI client not available, using fallback responses');
      return NextResponse.json(
        { 
          response: "I'm currently offline, but I can still help! Macdonald is a Full Stack Developer specializing in React, Next.js, and modern web technologies. You can reach him at +263787669200 or visit his LinkedIn profile.",
          isFallback: true 
        },
        { status: 200 }
      );
    }

    // Prepare conversation context
    const systemPrompt = `${macdonaldKnowledgeBase}

You are Macdonald Sairos' AI assistant. Your role is to:
1. Provide helpful information about Macdonald's skills, experience, and services
2. Answer questions about his portfolio and projects
3. Help visitors understand how to contact Macdonald
4. Be friendly, professional, and informative
5. Keep responses concise but comprehensive
6. Always maintain a positive, helpful tone
7. If asked about something not in the knowledge base, politely redirect to contact Macdonald directly

Guidelines:
- Always be helpful and professional
- Provide specific, accurate information
- Include relevant contact details when appropriate
- Keep responses conversational but informative
- Don't make up information not provided in the knowledge base
- If unsure about something, suggest contacting Macdonald directly`;

    // Build conversation history for context
    const messages = [
      {
        role: 'system',
        content: systemPrompt
      }
    ];

    // Add conversation history if provided
    if (conversationHistory && Array.isArray(conversationHistory)) {
      conversationHistory.forEach(msg => {
        if (msg.sender === 'user') {
          messages.push({ role: 'user', content: msg.text });
        } else if (msg.sender === 'bot') {
          messages.push({ role: 'assistant', content: msg.text });
        }
      });
    }

    // Add current user message
    messages.push({ role: 'user', content: message });

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: messages,
      max_tokens: 500,
      temperature: 0.7,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    const response = completion.choices[0]?.message?.content;

    if (!response) {
      throw new Error('No response from OpenAI');
    }

    return NextResponse.json(
      { 
        response: response.trim(),
        isFallback: false 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Chatbot API error:', error);
    
    // Fallback response for any errors
    const fallbackResponses = [
      "I'm having trouble processing that right now. Macdonald is a Full Stack Developer specializing in React and Next.js. You can reach him at +263787669200 for more information!",
      "Sorry, I'm experiencing some technical difficulties. Macdonald Sairos is available for web development projects. Contact him via WhatsApp at +263787669200!",
      "I'm temporarily unavailable, but Macdonald is a skilled Full Stack Developer. Visit his LinkedIn profile or WhatsApp him at +263787669200 for more details!"
    ];

    const randomFallback = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];

    return NextResponse.json(
      { 
        response: randomFallback,
        isFallback: true,
        error: error.message 
      },
      { status: 200 }
    );
  }
}

