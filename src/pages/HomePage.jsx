import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentBanglaDate, getCurrentEnglishDate } from '../utils/banglaDate';
import BlogCarousel from '../components/BlogCarousel';
import NavigationButton from '../components/NavigationButton';
import navyBanner from '../assets/navy-news-banner.jpg';

const HomePage = () => {
  const navigate = useNavigate();
  const banglaDate = getCurrentBanglaDate();
  const englishDate = getCurrentEnglishDate();

  const navigationItems = [
    { title: 'Fire Fighting', path: '/fire-fighting', icon: '🔥' },
    { title: 'Damage Control', path: '/damage-control', icon: '🔧' },
    { title: 'NBCD', path: '/nbcd', icon: '⚠️' },
    { title: 'First Aid', path: '/first-aid', icon: '🏥' },
    { title: 'About the App', path: '/about', icon: 'ℹ️' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Dates */}
      <div className="bg-primary text-primary-foreground p-4 text-center">
        <div className="max-w-md mx-auto space-y-1">
          <div className="text-lg font-semibold">
            {banglaDate.formatted}
          </div>
          <div className="text-sm opacity-90">
            {englishDate}
          </div>
        </div>
      </div>

      {/* News Banner */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={navyBanner} 
          alt="Bangladesh Navy News Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-2xl font-bold text-center px-4">
            Bangladesh Navy Mobile Guide
          </h1>
        </div>
      </div>

      {/* Navigation Grid */}
      <div className="p-4 max-w-md mx-auto">
        <h2 className="text-xl font-bold text-primary mb-4 text-center">
          Training Modules
        </h2>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          {navigationItems.slice(0, 4).map((item) => (
            <NavigationButton
              key={item.path}
              title={item.title}
              icon={item.icon}
              onClick={() => navigate(item.path)}
            />
          ))}
        </div>
        
        {/* About button spans full width */}
        <NavigationButton
          title={navigationItems[4].title}
          icon={navigationItems[4].icon}
          onClick={() => navigate(navigationItems[4].path)}
          className="mb-6"
        />

        {/* Blog Carousel */}
        <BlogCarousel />
      </div>
    </div>
  );
};

export default HomePage;