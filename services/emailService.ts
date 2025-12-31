import emailjs from '@emailjs/browser';

/**
 * Sends an email using EmailJS service.
 * @param templateParams - Object containing email template parameters (name, email, title/subject, message)
 * @returns Promise that resolves when email is sent successfully
 * @throws Error if email sending fails
 */
export const sendEmail = async (templateParams: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<void> => {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  // Detailed error messages for missing configuration
  if (!publicKey) {
    throw new Error('VITE_EMAILJS_PUBLIC_KEY is missing. Please add it to your .env.local file. Get it from: https://dashboard.emailjs.com/admin/account');
  }
  if (!serviceId) {
    throw new Error('VITE_EMAILJS_SERVICE_ID is missing. Please add it to your .env.local file. Get it from your EmailJS dashboard.');
  }
  if (!templateId) {
    throw new Error('VITE_EMAILJS_TEMPLATE_ID is missing. Please add it to your .env.local file. Get it from your EmailJS template settings.');
  }

  // Format current time for the email
  const currentTime = new Date().toLocaleString('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short'
  });

  try {
    await emailjs.send(
      serviceId,
      templateId,
      {
        name: templateParams.name,
        email: templateParams.email,
        title: templateParams.subject, // Using 'title' to match EmailJS template
        subject: templateParams.subject, // Also include 'subject' for compatibility
        message: templateParams.message,
        time: currentTime,
      },
      publicKey
    );
  } catch (error: any) {
    console.error('EmailJS error:', error);
    
    // Provide more specific error messages
    if (error?.status === 400) {
      if (error?.text?.includes('Public Key')) {
        throw new Error('Invalid EmailJS Public Key. Please check your VITE_EMAILJS_PUBLIC_KEY in .env.local. Get it from: https://dashboard.emailjs.com/admin/account');
      }
      throw new Error(`EmailJS error: ${error.text || 'Bad Request. Please check your EmailJS configuration.'}`);
    }
    
    if (error?.status === 404) {
      throw new Error('EmailJS Service or Template not found. Please check your VITE_EMAILJS_SERVICE_ID and VITE_EMAILJS_TEMPLATE_ID.');
    }
    
    throw new Error(error?.text || error?.message || 'Failed to send email. Please try again later.');
  }
};

