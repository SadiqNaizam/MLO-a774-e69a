import React, { useState, useCallback } from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import AssessmentHeader from '../components/AssessmentScreen/AssessmentHeader';
import QuestionList, { QuestionState } from '../components/AssessmentScreen/QuestionList';
import AIQResultDisplay from '../components/AssessmentScreen/AIQResultDisplay';
import ScreenerNotes from '../components/AssessmentScreen/ScreenerNotes';

const AIQAssessmentPage: React.FC = () => {
  const [questionsData, setQuestionsData] = useState<QuestionState[]>([]);

  const handleQuestionnaireUpdate = useCallback((updatedQuestions: QuestionState[]) => {
    setQuestionsData(updatedQuestions);
  }, []);

  // Overall page container for centering, max-width, and padding
  // Adjusted py-6 to py-8 to provide a bit more top/bottom space as commonly seen in dashboards.
  const pageContainerClasses = "container mx-auto max-w-5xl py-8 px-4 sm:px-6 lg:px-8";

  // Wrapper for all page sections, applying vertical stacking and spacing.
  // This aligns with Layout Requirements' "overall.definition": "Flexible vertical layout with main content area focused centrally."
  // and "mainContent.notes": "Main body contains stacked components including questions with toggles and AIQ summary results (checkbox matrix)."
  // The gap will space AssessmentHeader, QuestionList, AIQResultDisplay, and ScreenerNotes sequentially.
  const pageSectionsWrapperClasses = "flex flex-col gap-6 md:gap-8";

  return (
    <MainAppLayout>
      <div className={pageContainerClasses}>
        <div className={pageSectionsWrapperClasses}>
          <AssessmentHeader />
          <QuestionList onQuestionnaireUpdate={handleQuestionnaireUpdate} />
          <AIQResultDisplay questionsData={questionsData} />
          <ScreenerNotes />
        </div>
      </div>
    </MainAppLayout>
  );
};

export default AIQAssessmentPage;
