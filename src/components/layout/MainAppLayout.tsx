import React from 'react';
import { cn } from '@/lib/utils';
import Header from './Header'; // Relative import for a component in the same directory

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col min-h-screen bg-background text-foreground", className)}>
      <Header />
      <main className="flex-grow w-full">
        {/* 
          The children (e.g., a page template like AssessmentPageTemplate)
          are responsible for their own specific content layout, 
          including padding, max-width containers, and gaps between elements.
          For instance, a page template might use:
          <div className="container mx-auto max-w-5xl py-8 px-4 sm:px-6 lg:px-8">
            // ... page content structured with flex, grid, or specific component layouts
          </div>
          This <main> element here provides the flexible, growing area for that content.
          It implements the "overall": "flex flex-col" requirement from Layout Requirements.
          The "mainContent": "flex flex-col gap-6 p-6" styling is intended for the content
          area *within* the page, not this top-level main structural tag.
        */}
        {children}
      </main>
      {/* 
        An optional global footer could be added here if requirements specified one.
        The current "footer" in Layout Requirements refers to the ScreenerNotes section,
        which is part of the page-specific content.
        Example global footer:
        <footer className="p-4 bg-muted text-muted-foreground text-center text-sm border-t border-border">
          © {new Date().getFullYear()} AI Quotient Assessment
        </footer> 
      */}
    </div>
  );
};

export default MainAppLayout;
