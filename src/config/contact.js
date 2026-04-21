/** WhatsApp Business number (country code + number, no + or spaces) */
export const WHATSAPP_NUMBER = '917559966190';

export function getWhatsAppProductUrl(productName) {
  const text = `Hi, I'm interested in ${productName}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
