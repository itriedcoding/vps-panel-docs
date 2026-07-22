'use client'

import { useState } from 'react'
import { FiCheck, FiCopy } from 'react-icons/fi'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface CodeBlockProps {
  code: string
  language?: string
  showLineNumbers?: boolean
  filename?: string
  showCopy?: boolean
}

export function CodeBlock({
  code,
  language = 'bash',
  showLineNumbers = false,
  filename,
  showCopy = true,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="code-block my-6">
      {(filename || showCopy) && (
        <div className="code-header">
          <div className="flex items-center gap-2">
            {filename && (
              <span className="text-xs text-dark-400 font-mono">{filename}</span>
            )}
            {language && !filename && (
              <span className="text-xs text-dark-500 font-mono uppercase">{language}</span>
            )}
          </div>
          {showCopy && (
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 text-xs text-dark-400 hover:text-dark-200 transition-colors"
            >
              {copied ? (
                <>
                  <FiCheck size={14} className="text-green-400" />
                  <span className="text-green-400">Copied!</span>
                </>
              ) : (
                <>
                  <FiCopy size={14} />
                  <span>Copy</span>
                </>
              )}
            </button>
          )}
        </div>
      )}
      <div className="code-content">
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          showLineNumbers={showLineNumbers}
          customStyle={{
            margin: 0,
            padding: 0,
            background: 'transparent',
            fontSize: '14px',
            lineHeight: '1.6',
          }}
          codeTagProps={{
            style: {
              fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
            },
          }}
        >
          {code.trim()}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}
