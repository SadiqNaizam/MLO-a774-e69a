import React from 'react';
import { cn } from '@/lib/utils';
import { Checkbox } from '@/components/ui/checkbox';

export interface Question {
  id: string;
  number: string;
  text: string;
  details: string;
}

interface InteractiveQuestionProps {
  question: Question;
  isRelevant: boolean;
  isNonRelevant: boolean;
  onToggleRelevant: (questionId: string, checked: boolean) => void;
  onToggleNonRelevant: (questionId: string, checked: boolean) => void;
  className?: string;
}

const InteractiveQuestion: React.FC<InteractiveQuestionProps> = ({
  question,
  isRelevant,
  isNonRelevant,
  onToggleRelevant,
  onToggleNonRelevant,
  className,
}) => {
  const handleRelevantChange = (checked: boolean | 'indeterminate') => {
    onToggleRelevant(question.id, checked as boolean);
  };

  const handleNonRelevantChange = (checked: boolean | 'indeterminate') => {
    onToggleNonRelevant(question.id, checked as boolean);
  };

  return (
    <div className={cn("flex flex-col sm:flex-row items-start py-4", className)}>
      <div className="flex items-start w-full sm:w-auto">
        <div className="flex-shrink-0 w-10">
          <span className="text-xl font-semibold text-primary">{question.number}</span>
        </div>
        <div className="flex-grow ml-4 sm:mr-6">
          <p className="text-base text-primaryText">{question.text}</p>
          {question.details && (
            <p className="text-sm text-secondaryText mt-1">{question.details}</p>
          )}
        </div>
      </div>
      
      <div className="flex items-center mt-3 sm:mt-0 ml-10 sm:ml-0">
        <div className="flex items-center justify-center w-24">
          <Checkbox
            id={`relevant-${question.id}`}
            checked={isRelevant}
            onCheckedChange={handleRelevantChange}
            aria-label={`Mark question ${question.number} as relevant`}
            className="w-6 h-6 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground border-muted-foreground"
          />
        </div>
        <div className="flex items-center justify-center w-28">
          <Checkbox
            id={`non-relevant-${question.id}`}
            checked={isNonRelevant}
            onCheckedChange={handleNonRelevantChange}
            aria-label={`Mark question ${question.number} as non-relevant`}
            className="w-6 h-6 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground border-muted-foreground"
          />
        </div>
      </div>
    </div>
  );
};

export default InteractiveQuestion;
