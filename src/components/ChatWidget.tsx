'use client'

import { useState, useRef, useEffect } from 'react'

// FAQ data
const faqs = [
  {
    question: 'What conditions do you treat?',
    answer:
      'We treat a wide range of conditions including back pain, neck pain, sports injuries, arthritis, post-surgery rehabilitation, neurological conditions, and more. Our expert physiotherapists are trained in various specialized treatments.',
  },
  {
    question: 'Do you offer home visits?',
    answer:
      'Yes, we provide home physiotherapy services in Whitefield and Belagere areas. Our therapists can bring necessary equipment to your home for a comprehensive treatment session.',
  },
  {
    question: 'What are your working hours?',
    answer:
      'We are open from 9 AM to 8 PM, Monday through Saturday. We offer flexible appointment slots in the morning, afternoon, and evening to accommodate your schedule.',
  },
  {
    question: 'How long is each session?',
    answer:
      'A typical physiotherapy session lasts 45-60 minutes. The first consultation may take longer as it includes a detailed assessment of your condition.',
  },
  {
    question: 'Do you accept insurance?',
    answer:
      "Yes, we work with most major insurance providers. Please contact us with your insurance details, and we'll help you understand your coverage.",
  },
  {
    question: 'What should I wear to my session?',
    answer:
      'Please wear comfortable, loose-fitting clothes that allow easy movement and access to the area requiring treatment.',
  },
  {
    question: 'How many sessions will I need?',
    answer:
      'The number of sessions varies depending on your condition, severity, and response to treatment. Your physiotherapist will provide a treatment plan after your initial assessment.',
  },
  {
    question: "Do I need a doctor's referral?",
    answer:
      "No, you don't need a doctor's referral to visit our physiotherapy clinic. However, if you have any medical reports or imaging, please bring them along.",
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit/debit cards, UPI payments, and cash. Payment is required at the end of each session.',
  },
  {
    question: 'Is parking available?',
    answer:
      'Yes, we have dedicated parking space available for our clients at both our Whitefield and Belagere locations.',
  },
  {
    question: 'Do you provide virtual consultations?',
    answer:
      'Yes, we offer virtual consultations for initial assessments and follow-up sessions when appropriate. This is particularly useful for general advice and exercise guidance.',
  },
  {
    question: 'What COVID-19 safety measures do you follow?',
    answer:
      'We maintain strict hygiene protocols including regular sanitization, mandatory masks, temperature checks, and limited patients per time slot to ensure social distancing.',
  },
  {
    question: 'How do I cancel or reschedule an appointment?',
    answer:
      'You can cancel or reschedule your appointment by calling us at least 24 hours in advance. Late cancellations may incur a fee.',
  },
  {
    question: 'Do you treat children?',
    answer:
      'Yes, we have physiotherapists specialized in pediatric care. We treat various childhood conditions and developmental issues.',
  },
  {
    question: 'What makes KineSphere different?',
    answer:
      'We combine evidence-based treatments with personalized care, state-of-the-art facilities, and a holistic approach to recovery. Our team includes specialized physiotherapists with extensive experience.',
  },
]

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    { text: 'Hi! How can I help you today?', isUser: false },
  ])
  const [inputValue, setInputValue] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const findBestMatch = (query: string) => {
    const normalizedQuery = query.toLowerCase()
    let bestMatch = faqs[0]
    let highestScore = 0

    faqs.forEach(faq => {
      const questionScore = [
        ...faq.question.toLowerCase().matchAll(new RegExp(normalizedQuery, 'g')),
      ].length
      const answerScore = [...faq.answer.toLowerCase().matchAll(new RegExp(normalizedQuery, 'g'))]
        .length
      const score = questionScore * 2 + answerScore

      if (score > highestScore) {
        highestScore = score
        bestMatch = faq
      }
    })

    return bestMatch
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const userMessage = inputValue.trim()
    setMessages(prev => [...prev, { text: userMessage, isUser: true }])
    setInputValue('')

    // Find best matching FAQ
    const match = findBestMatch(userMessage)
    setTimeout(() => {
      setMessages(prev => [...prev, { text: match.answer, isUser: false }])
    }, 500)
  }

  return (
    <div className="fixed bottom-0 right-0 p-4 safe-area-bottom z-50">
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white shadow-lg hover:bg-primary/90 transition-colors"
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed chat-window md:absolute md:bottom-16 inset-0 md:inset-auto md:right-0 w-full md:w-96 h-[100dvh] md:h-[500px] bg-dark-100 md:rounded-lg shadow-xl flex flex-col overflow-hidden z-50">
          {/* Header */}
          <div className="bg-dark-200 p-4 flex items-center justify-between safe-top">
            <div>
              <h3 className="text-white font-semibold">KineSphere Chat</h3>
              <p className="text-sm text-gray-400">Ask us anything about our services</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="md:hidden w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 [scrollbar-width:thin] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-dark-300 [&::-webkit-scrollbar-track]:bg-dark-200">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.isUser ? 'bg-primary text-white' : 'bg-dark-200 text-gray-300'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 bg-dark-200 safe-bottom">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 bg-dark-300 border border-dark-400 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}

      <style jsx>{`
        .safe-area-bottom {
          padding-bottom: max(1rem, env(safe-area-inset-bottom));
        }

        @media (max-width: 768px) {
          .fixed.chat-window {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            height: -webkit-fill-available;
          }
        }

        @supports (height: 100dvh) {
          .h-[100dvh] {
            height: 100dvh;
          }
        }

        @supports not (height: 100dvh) {
          .h-[100dvh] {
            height: 100vh;
          }
        }

        .safe-top {
          padding-top: max(1rem, env(safe-area-inset-top));
        }

        .safe-bottom {
          padding-bottom: max(1rem, env(safe-area-inset-bottom));
        }
      `}</style>
    </div>
  )
}
