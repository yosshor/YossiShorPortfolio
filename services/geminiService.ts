import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

// Define the personal context for the AI
const YOSSI_CONTEXT = `
You are an AI assistant for Yossi Shor's personal portfolio website.
Here is the data about Yossi Shor:
- **Name**: Yossi Shor
- **Age**: 37
- **Experience**: 4 years of professional development experience.
- **Current Role**: Senior Frontend / Full Stack Developer.
- **Key Skills**: React, TypeScript, Tailwind CSS, Node.js, AI Integration (Gemini), UI/UX Design.
- **Background**: At 37, Yossi brings a mature, disciplined approach to coding. He transitioned into tech with a passion for building intuitive, high-performance web applications.
- **Philosophy**: Believes in clean code, mobile-first design, and user-centric development.
- **Availability**: Open to new opportunities and consulting.
- **Social Profiles**:
  - LinkedIn: https://www.linkedin.com/in/yossishor/
  - GitHub: https://github.com/yosshor

Your Goal:
Answer visitor questions about Yossi's background, skills, and experience politely and professionally. 
Keep answers concise (under 100 words unless asked for detail).
If asked about something not in this context (like "what is the capital of France"), strictly reply: "I'm here to answer questions about Yossi Shor's professional background."
Adopt a friendly, professional, and enthusiastic tone.
`;

let chatSession: Chat | null = null;

export const getGeminiChat = (): Chat => {
  if (chatSession) return chatSession;

  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API_KEY is not defined in the environment variables.");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: YOSSI_CONTEXT,
      temperature: 0.7,
      maxOutputTokens: 300,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = getGeminiChat();
    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "I'm sorry, I couldn't generate a response at the moment.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I seem to be having trouble connecting to my brain right now. Please try again later.";
  }
};