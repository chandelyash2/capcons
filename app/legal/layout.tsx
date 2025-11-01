import React, { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface LegalLayoutProps {
  children: ReactNode
}

/**
 * Legal Layout
 * 
 * Provides Word document-like styling for all legal pages.
 * This layout wraps all pages in the /legal route segment.
 */
export default function LegalLayout({ children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="w-full">
        {/* Document Container - Word-like paper appearance */}
        <article
          className={cn(
            'bg-white shadow-xl',
            // On small screens: 16px margin on each side (total 32px space)
            'mx-4',
            // On larger screens: center with minimum 75% width, max 75% width
            'sm:mx-auto sm:min-w-[75%] sm:max-w-[75%]',
            'px-8 sm:px-12 lg:px-16',
            'pt-16 sm:pt-20',
            'pb-20 sm:pb-24',
            'legal-document-style'
          )}
          style={{
            fontFamily: "'Times New Roman', 'Times', 'Georgia', serif",
            fontSize: '11pt',
            lineHeight: '1.6',
            color: '#333',
          }}
        >
          {/* Document Content - Pages will render their own title and content */}
          <div className="legal-content">
            {children}
          </div>
        </article>
      </div>
    </div>
  )
}

