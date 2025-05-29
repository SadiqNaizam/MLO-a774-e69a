import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { QuestionState } from './QuestionList';

export type AIQLevel = 'High' | 'Medium' | 'Low' | null;

interface AIQResultDisplayProps {
  className?: string;
  questionsData: QuestionState[];
}

const AIQResultDisplay: React.FC<AIQResultDisplayProps> = ({ className, questionsData }) => {
  const [calculatedAiqLevel, setCalculatedAiqLevel] = useState<AIQLevel>(null);

  useEffect(() => {
    const relevantCount = questionsData.filter(q => q.isRelevant).length;
    // Example calculation logic:
    // High: 4+ relevant
    // Medium: 2-3 relevant
    // Low: 0-1 relevant
    if (relevantCount >= 4) {
      setCalculatedAiqLevel('High');
    } else if (relevantCount >= 2) { // Catches 2 and 3
      setCalculatedAiqLevel('Medium');
    } else { // Catches 0 and 1
      setCalculatedAiqLevel('Low');
    }
  }, [questionsData]);

  const aiqLevels: AIQLevel[] = ['High', 'Medium', 'Low'];

  return (
    <div className={cn("p-4 rounded-md border border-border bg-card", className)}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
        <Label className="text-base font-semibold text-primaryText mb-2 sm:mb-0">AIQ Level:</Label>
        <div className="flex space-x-4">
          {aiqLevels.map(level => (
            level && (
              <div key={level} className="flex items-center space-x-2">
                <Checkbox
                  id={`aiq-${level.toLowerCase()}`}
                  checked={calculatedAiqLevel === level}
                  disabled
                  className="w-5 h-5 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground border-muted-foreground"
                  aria-label={`AIQ Level ${level}`}
                />
                <Label
                  htmlFor={`aiq-${level.toLowerCase()}`}
                  className={cn(
                    "text-sm",
                    calculatedAiqLevel === level ? "text-primaryText font-medium" : "text-secondaryText"
                  )}
                >
                  {level}
                </Label>
              </div>
            )
          ))}
        </div>
      </div>
      <p className="mt-2 text-xs text-muted-foreground">
        (Auto calculated using above inputs)
      </p>
    </div>
  );
};

export default AIQResultDisplay;
