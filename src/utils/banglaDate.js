// Bangla calendar utility functions
const banglaMonths = [
  'বৈশাখ', 'জ্যৈষ্ঠ', 'আষাঢ়', 'শ্রাবণ', 'ভাদ্র', 'আশ্বিন',
  'কার্তিক', 'অগ্রহায়ণ', 'পৌষ', 'মাঘ', 'ফাল্গুন', 'চৈত্র'
];

const banglaNumerals = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

// Convert English numerals to Bangla
const toBanglaNumber = (num) => {
  return num.toString().split('').map(digit => banglaNumerals[parseInt(digit)]).join('');
};

// Get current Bangla date
export const getCurrentBanglaDate = () => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  const currentDate = now.getDate();
  
  // Simple conversion (approximate)
  let banglaYear = currentYear - 593;
  let banglaMonth = currentMonth + 1;
  let banglaDate = currentDate;
  
  // Adjust for Bangla calendar year start (mid-April)
  if (currentMonth < 3 || (currentMonth === 3 && currentDate < 14)) {
    banglaYear -= 1;
    banglaMonth += 8;
    if (banglaMonth > 12) banglaMonth -= 12;
  } else {
    banglaMonth -= 3;
    if (banglaMonth <= 0) banglaMonth += 12;
  }
  
  return {
    date: toBanglaNumber(banglaDate),
    month: banglaMonths[banglaMonth - 1],
    year: toBanglaNumber(banglaYear),
    formatted: `${toBanglaNumber(banglaDate)} ${banglaMonths[banglaMonth - 1]} ${toBanglaNumber(banglaYear)}`
  };
};

// Get current English date formatted
export const getCurrentEnglishDate = () => {
  const now = new Date();
  const options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return now.toLocaleDateString('en-US', options);
};