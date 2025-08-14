import React from 'react';
import { Button } from "@/components/ui/button";

const NavigationButton = ({ title, icon, onClick, className = "" }) => {
  return (
    <Button
      onClick={onClick}
      className={`h-20 w-full flex flex-col items-center justify-center space-y-2 text-primary-foreground bg-primary hover:bg-primary/90 border-2 border-primary/20 shadow-lg ${className}`}
      variant="default"
    >
      {icon && <div className="text-2xl">{icon}</div>}
      <span className="text-sm font-semibold text-center leading-tight">
        {title}
      </span>
    </Button>
  );
};

export default NavigationButton;