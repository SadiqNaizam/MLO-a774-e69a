import React from 'react';
import { cn } from '@/lib/utils';

interface AssessmentHeaderProps {
  className?: string;
}

const AssessmentHeader: React.FC<AssessmentHeaderProps> = ({ className }) => {
  return (
    <header className={cn("flex flex-col items-center justify-center p-6 bg-card text-card-foreground", className)}>
      <h1 className="text-3xl font-bold text-primaryText dark:text-primaryText text-center">AI QUOTIENT (AIQ) ASSESSMENT</h1>
      <p className="text-lg text-secondaryText dark:text-secondaryText mt-1 text-center">SCREENING AI-FRIENDLY TALENT</p>
    </header>
  );
};

export default AssessmentHeader;
