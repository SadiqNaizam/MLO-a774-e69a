import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface ScreenerNotesProps {
  className?: string;
}

const ScreenerNotes: React.FC<ScreenerNotesProps> = ({ className }) => {
  const [notes, setNotes] = useState<string>('');

  return (
    <div className={cn("p-4 bg-card text-card-foreground rounded-md shadow-md", className)}>
      <Label htmlFor="screener-notes" className="block mb-2 text-base font-semibold text-primaryText">
        Screener Notes / Comments:
      </Label>
      <Textarea
        id="screener-notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Enter comments and observations here..."
        className="w-full min-h-[120px] resize-y bg-background border-input text-primaryText focus:ring-1 focus:ring-ring"
      />
    </div>
  );
};

export default ScreenerNotes;
