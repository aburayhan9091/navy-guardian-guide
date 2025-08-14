// Payment and IP tracking utilities

const PAYMENT_KEY = 'navyAppPaymentStatus';
const IP_KEY = 'navyAppUserIP';

// Check if user has paid
export const hasUserPaid = () => {
  return localStorage.getItem(PAYMENT_KEY) === 'paid';
};

// Mark user as paid
export const markUserAsPaid = () => {
  localStorage.setItem(PAYMENT_KEY, 'paid');
};

// Get user IP address
export const getUserIP = async () => {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error('Failed to get IP:', error);
    return null;
  }
};

// Check and store user IP
export const checkAndStoreIP = async () => {
  const currentIP = await getUserIP();
  const storedIP = localStorage.getItem(IP_KEY);
  
  if (storedIP && storedIP !== currentIP) {
    // Different IP detected, could implement additional logic here
    console.log('Different IP detected');
  }
  
  if (currentIP) {
    localStorage.setItem(IP_KEY, currentIP);
  }
  
  return currentIP;
};