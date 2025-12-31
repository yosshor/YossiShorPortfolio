# Yossi Shor - Digital Marketing Developer & Full Stack Engineer

Professional portfolio website showcasing my work, skills, and experience as a Digital Marketing Developer and Full Stack Engineer.

## About

Digital Marketing Developer from Ramat Gan, Israel with a **BSc in Electrical Engineering**. Specializing in React, TypeScript, Python, Deep Learning, and Full Stack Development. Since 2021, I've been building websites and digital solutions for clients including [Mark-It-Ing](https://github.com/mark-it-ing).

**Certifications & Training:**
- 🎓 Full Stack Developer Certification - iNT college (Grade 99)
- 🤖 Machine Learning & Deep Learning Bootcamp
- 🔒 Cyber Security (Azure, Checkpoint, Windows Servers)
- 🔊 Deep Learning & Sound Recognition (abilisense)

This portfolio features:

- 🎨 Modern, responsive design with Tailwind CSS
- 🤖 AI-powered chat assistant using Google Gemini
- 📊 Real projects from my GitHub (32+ repositories)
- 💼 Professional experience since 2021
- 🚀 Marketing websites and full-stack applications
- 🎯 735+ LinkedIn followers

**Links:**
- GitHub: [github.com/yosshor](https://github.com/yosshor) (32+ repos)
- LinkedIn: [linkedin.com/in/yossishor](https://www.linkedin.com/in/yossishor/) (735+ followers)
- Work: [Mark-It-Ing](https://github.com/mark-it-ing)

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Create a `.env.local` file in the root directory and add:
   ```
   GEMINI_API_KEY=your_gemini_api_key
   VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   ```
3. Run the app:
   `npm run dev`

## EmailJS Setup

To enable email functionality:

1. Sign up for a free account at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{name}}` - Sender's name
   - `{{email}}` - Sender's email (used for Reply To)
   - `{{title}}` - Email subject/title
   - `{{message}}` - Email message content
   - `{{time}}` - Timestamp of when the message was sent
4. Configure your template:
   - **To Email**: Set to your receiving email (e.g., shorymarkiting@gmail.com)
   - **From Name**: Use `{{name}}`
   - **Reply To**: Use `{{email}}`
   - **Subject**: Use `Contact Us: {{title}}` or similar
5. Get your Public Key, Service ID, and Template ID from EmailJS dashboard
6. Add them to your `.env.local` file (for local development)

## Deployment to Vercel

This project works perfectly with Vercel! EmailJS runs client-side, so no backend is needed.

### Steps to Deploy:

1. **Push your code to GitHub**
2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
3. **Add Environment Variables in Vercel:**
   - Go to Project Settings → Environment Variables
   - Add the following variables:
     - `GEMINI_API_KEY` - Your Gemini API key
     - `VITE_EMAILJS_PUBLIC_KEY` - Your EmailJS public key
     - `VITE_EMAILJS_SERVICE_ID` - Your EmailJS service ID
     - `VITE_EMAILJS_TEMPLATE_ID` - Your EmailJS template ID
4. **Deploy!** Vercel will automatically build and deploy your site

### Why EmailJS Works Great with Vercel:

- ✅ **No Backend Required** - EmailJS runs entirely in the browser
- ✅ **No Serverless Functions** - Everything is client-side
- ✅ **Free Tier** - EmailJS offers 200 emails/month for free
- ✅ **Fast & Reliable** - Direct API calls from the browser
- ✅ **Secure** - Uses public keys (safe to expose in frontend)

**Note:** The `VITE_` prefix means these variables will be available in the browser. This is safe for EmailJS public keys, but keep your `GEMINI_API_KEY` secure (it's only used server-side during build if needed).
