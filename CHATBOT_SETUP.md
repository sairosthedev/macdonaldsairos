# Chatbot Setup Guide

## Overview
Your portfolio now includes an AI-powered chatbot that can answer questions about Macdonald Sairos, his skills, experience, and services. The chatbot uses OpenAI's GPT-3.5-turbo model to provide intelligent, contextual responses.

## Features
- **AI-Powered Responses**: Uses OpenAI GPT-3.5-turbo for intelligent conversations
- **Comprehensive Knowledge Base**: Contains detailed information about Macdonald's skills, experience, and services
- **Fallback Responses**: Works even when AI is unavailable
- **Conversation Memory**: Maintains context throughout the conversation
- **Quick Questions**: Pre-defined questions for common inquiries
- **Modern UI**: Matches your portfolio's purple/blue gradient theme

## Setup Instructions

### 1. Get OpenAI API Key
1. Visit [OpenAI Platform](https://platform.openai.com/)
2. Sign up or log in to your account
3. Go to API Keys section
4. Create a new API key
5. Copy the API key (starts with `sk-`)

### 2. Add Environment Variable
Create a `.env.local` file in your project root and add:

```env
OPENAI_API_KEY=your_openai_api_key_here
```

Replace `your_openai_api_key_here` with your actual OpenAI API key.

### 3. Deploy
The chatbot will work automatically once you deploy with the environment variable set.

## How It Works

### AI Integration
- **API Route**: `/api/chatbot` handles AI requests
- **Model**: Uses GPT-3.5-turbo for responses
- **Context**: Maintains conversation history for better responses
- **Knowledge Base**: Comprehensive information about Macdonald

### Fallback System
If the AI is unavailable, the chatbot uses predefined responses based on keyword matching:
- Greetings
- About Macdonald
- Skills & Technologies
- Contact Information
- General inquiries

### Knowledge Base Includes
- Personal information
- Technical skills (Frontend, Backend, Databases, Cloud)
- Professional experience
- Portfolio highlights
- Contact information
- Services offered
- Personality traits

## Customization

### Adding More Information
Edit the `macdonaldKnowledgeBase` in `/src/app/api/chatbot/route.js` to add more information about Macdonald.

### Modifying Responses
You can customize the AI's behavior by modifying the `systemPrompt` in the API route.

### Styling
The chatbot UI can be customized in `/src/app/components/Chatbot.jsx` using Tailwind CSS classes.

## Cost Considerations
- OpenAI charges per token used
- GPT-3.5-turbo is cost-effective for most use cases
- Responses are limited to 500 tokens to control costs
- Consider setting up usage limits in your OpenAI account

## Troubleshooting

### Chatbot Not Responding
1. Check if `OPENAI_API_KEY` is set correctly
2. Verify the API key is valid and has credits
3. Check browser console for errors
4. Fallback responses should still work

### API Errors
- Check OpenAI API status
- Verify API key permissions
- Ensure sufficient credits in OpenAI account

## Security Notes
- API key is stored securely in environment variables
- No sensitive data is logged
- Rate limiting is handled by OpenAI
- Fallback responses ensure the chatbot always works

## Future Enhancements
- Add more specific project information
- Integrate with your project data
- Add language support
- Implement conversation analytics
- Add voice input/output capabilities

