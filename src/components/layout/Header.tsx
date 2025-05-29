import React from 'react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header
      className={cn(
        "w-full bg-surface text-card-foreground shadow-sm",
        className
      )}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center space-x-2">
          <span className="font-bold text-lg sm:text-xl">ASCENDION</span>
          {/* Optional: tagline can be added here if needed */}
          {/* e.g., <span className="text-xs text-muted-foreground hidden sm:block ml-2">Engineering to elevate life</span> */}
        </a>
        {/* Placeholder for future elements like navigation links or user profile icons */}
        <div>
          {/* Example: <UserIcon className="h-6 w-6" /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
