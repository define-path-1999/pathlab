import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';

interface FAQ {
    question: string;
    answer: string;
}

const FAQs: React.FC = () => {
    const faqs: FAQ[] = [
        {
            question: 'What tests do you offer?',
            answer: 'We offer a wide range of tests including blood tests, urine tests, imaging tests, and more.',
        },
        {
            question: 'How do I schedule an appointment?',
            answer: 'You can schedule an appointment by calling our office or using our online appointment booking system.',
        },
        {
            question: 'How long do test results take?',
            answer: 'Test results typically take 1-3 business days. Some tests may have longer turnaround times.',
        },
        {
            question: 'Do I need to fast before certain tests?',
            answer: 'Some tests require fasting beforehand. Your healthcare provider will provide instructions if fasting is necessary for your test.',
        },
        {
            question: 'Can I eat or drink before a blood test?',
            answer: 'For most blood tests, you will need to fast for 8-12 hours before the test. However, you can usually drink water.',
        },
        {
            question: 'What should I bring to my appointment?',
            answer: 'You should bring your identification, insurance information, any relevant medical records, and a list of medications you are currently taking.',
        },
    ];

    return (
        <div className="max-w-4xl mx-auto py-8 min-h-screen bg-gray-50">
            <Typography variant="h4" gutterBottom className="text-center text-3xl font-bold mb-8">
                FAQs
            </Typography>
            {faqs.map((faq, index) => (
                <div key={index} className="m-4 md:m-0">
                    <Accordion key={index} className="mb-4  border border-gray-300 rounded">
                        <AccordionSummary className="bg-gray-100">
                            <Typography variant="h6" className="font-bold">{faq.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails className="bg-gray-50">
                            <Typography >{faq.answer}</Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            ))}
        </div>
    );
};

export default FAQs;
