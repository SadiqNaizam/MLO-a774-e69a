import React, { useState, useCallback, useEffect } from 'react';
import { cn } from '@/lib/utils';
import InteractiveQuestion, { Question as QuestionType } from './InteractiveQuestion';

export interface QuestionState extends QuestionType {
  isRelevant: boolean;
  isNonRelevant: boolean;
}

const DUMMY_QUESTIONS_DATA: QuestionType[] = [
  {
    id: 'q1',
    number: '01',
    text: 'Tell me about a time when you adopted a new technology or tool on your own. What motivated you, and what was the result?',
    details: '(Looks for curiosity and initiative)',
  },
  {
    id: 'q2',
    number: '02',
    text: 'How do you stay up to date with new trends or tools in your field? Have you come across anything AI-related?',
    details: '(Assesses awareness and interest)',
  },
  {
    id: 'q3',
    number: '03',
    text: 'Have you experimented with any AI tools, even casually? (e.g., ChatGPT, image generators, automation bots)',
    details: '(Gauges willingness to experiment)',
  },
  {
    id: 'q4',
    number: '04',
    text: 'Can you think of a repetitive or time-consuming task in your role that could benefit from automation or AI?',
    details: '(Tests ability to identify practical AI opportunities)',
  },
  {
    id: 'q5',
    number: '05',
    text: 'Tell me about a time you had to change your way of working because of a new process or tool. How did you respond?',
    details: '(Evaluates adaptability)',
  },
  {
    id: 'q6',
    number: '06',
    text: 'Can you open an AI tool of your choice and show me how you would use it to solve something or get a result? Pls walk me through the process, step by step',
    details: '',
  },
];

interface QuestionListProps {
  className?: string;
  onQuestionnaireUpdate: (questions: QuestionState[]) => void;
}

const QuestionList: React.FC<QuestionListProps> = ({ className, onQuestionnaireUpdate }) => {
  const [questions, setQuestions] = useState<QuestionState[]>(() => {
    // Initialize state to have Q1 relevant and others non-relevant to achieve "Low" AIQ initially
    return DUMMY_QUESTIONS_DATA.map((q, index) => {
      if (index === 0) return { ...q, isRelevant: true, isNonRelevant: false }; // Q1 Relevant
      return { ...q, isRelevant: false, isNonRelevant: true }; // Q2-Q6 Non-Relevant
    });
  });

  useEffect(() => {
    onQuestionnaireUpdate(questions);
  }, [questions, onQuestionnaireUpdate]);

  const handleToggleRelevant = useCallback((questionId: string, newCheckedState: boolean) => {
    setQuestions(prevQuestions =>
      prevQuestions.map(q => {
        if (q.id === questionId) {
          return { ...q, isRelevant: newCheckedState, isNonRelevant: newCheckedState ? false : q.isNonRelevant };
        }
        return q;
      })
    );
  }, []);

  const handleToggleNonRelevant = useCallback((questionId: string, newCheckedState: boolean) => {
    setQuestions(prevQuestions =>
      prevQuestions.map(q => {
        if (q.id === questionId) {
          return { ...q, isNonRelevant: newCheckedState, isRelevant: newCheckedState ? false : q.isRelevant };
        }
        return q;
      })
    );
  }, []);

  return (
    <div className={cn("bg-card p-4 sm:p-6 rounded-md border border-border", className)}>
      <div className="flex items-center py-2 border-b border-border mb-2">
        <div className="flex-shrink-0 w-10 hidden sm:block"></div> {/* Spacer for question number column header */}
        <div className="flex-grow sm:ml-4 sm:mr-6 text-sm font-medium text-primaryText">Question</div>
        <div className="flex items-center justify-center w-24 text-sm font-medium text-primaryText">Relevant</div>
        <div className="flex items-center justify-center w-28 text-sm font-medium text-primaryText">Non-Relevant</div>
      </div>

      {questions.map((question, index) => (
        <InteractiveQuestion
          key={question.id}
          question={question}
          isRelevant={question.isRelevant}
          isNonRelevant={question.isNonRelevant}
          onToggleRelevant={handleToggleRelevant}
          onToggleNonRelevant={handleToggleNonRelevant}
          className={cn(index < questions.length - 1 ? "border-b border-border" : "")}
        />
      ))}
    </div>
  );
};

export default QuestionList;
