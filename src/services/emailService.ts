import emailjs from '@emailjs/browser';

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_kvw3pwo',
  TEMPLATE_ID: 'Template_d7x0xfh',
  TEMPLATE_ID_LOWER: 'template_d7x0xfh',
  PUBLIC_KEY: 'PTz067ICh7iNq1tmP',
};

export interface SendEmailParams {
  name: string;
  email: string;
  phone?: string;
  serviceInterest?: string;
  message: string;
}

export async function sendContactEmail(params: SendEmailParams): Promise<{ success: boolean; error?: string }> {
  const templateParams = {
    name: params.name,
    user_name: params.name,
    from_name: params.name,
    email: params.email,
    user_email: params.email,
    from_email: params.email,
    reply_to: params.email,
    phone: params.phone || 'Not provided',
    user_phone: params.phone || 'Not provided',
    contact_number: params.phone || 'Not provided',
    service: params.serviceInterest || 'General Inquiry',
    service_interest: params.serviceInterest || 'General Inquiry',
    subject: `New Project Inquiry from ${params.name}`,
    message: params.message,
    to_name: 'Abul Hassan',
  };

  try {
    // Attempt with the provided template ID
    await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );
    return { success: true };
  } catch (err: unknown) {
    console.warn('Initial EmailJS send attempt failed, trying lowercase template id...', err);
    try {
      // Fallback with lowercase template ID if the capitalized one was rejected
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID_LOWER,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      return { success: true };
    } catch (fallbackErr: unknown) {
      console.error('EmailJS send failed:', fallbackErr);
      const errorMessage = fallbackErr instanceof Error ? fallbackErr.message : 'Failed to send email';
      return { success: false, error: errorMessage };
    }
  }
}
