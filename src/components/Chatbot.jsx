import { useEffect, useRef, useState } from 'react'
import { saveChatMessage } from '../firebase.js'

const API_KEY = 'AIzaSyALkcr0Tbh6zZS3mAi1kDiv9kyKJ-aDVp0'
const MODEL = 'gemini-2.5-flash'
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`

const SYSTEM_CONTEXT =
  'You are an official customer support chatbot for Amigos Pvt. Ltd., an off-road vehicle manufacturing company. ' +
  'Your role is to assist users by providing accurate, concise, and helpful information about the company’s products and services. ' +
  'The company offers the following off-road buggy models: Thunder 400, Thunder 600, Titan 400, and Titan 600. ' +
  'Thunder 400 is a lightweight, high-torque off-road buggy, while Titan 600 is designed for extreme terrain with powerful suspension. ' +
  'Pricing varies based on customization, so users asking about price or cost should be advised to contact the company directly. ' +
  'All vehicles use high-performance engines suitable for off-road use. Amigos Pvt. Ltd. provides complete service and spare support. ' +
  'For contact inquiries, share the official email (Amigos.pvt.ltd.2025@gmail.com) and phone number (9100274829). ' +
  'Greet users politely when they say hello or hi. If a query is outside this scope, respond politely and guide the user ' +
  'to ask about models, pricing, or support. Do not invent information or make assumptions beyond the provided details.'

const Chatbot = ({ isLoggedIn, initialMessages, userId }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messageEndRef = useRef(null)

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isOpen])

  const cleanText = (raw) => {
    if (!raw) return ''
    let text = raw

    // Turn markdown headings into plain lines (keep the text, drop the #)
    text = text.replace(/^\s*#{1,6}\s*/gm, '')

    // Convert markdown bullet markers at line start into a simple bullet symbol
    text = text.replace(/^\s*[-*+]\s+/gm, '• ')

    // Strip bold/italic markers but keep the inner text
    text = text.replace(/\*\*(.+?)\*\*/g, '$1') // **bold**
    text = text.replace(/__(.+?)__/g, '$1') // __bold__
    text = text.replace(/\*(\S[^*]*\S)\*/g, '$1') // *emphasis*
    text = text.replace(/_(\S[^_]*\S)_/g, '$1') // _emphasis_

    // Remove backticks used for code formatting
    text = text.replace(/`/g, '')

    // Collapse 3+ blank lines into max 2
    text = text.replace(/\n{3,}/g, '\n\n')

    return text.trim()
  }

  const callGemini = async (userText) => {
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [
                {
                  text: SYSTEM_CONTEXT,
                },
              ],
            },
            {
              role: 'user',
              parts: [
                {
                  text: userText,
                },
              ],
            },
          ],
        }),
      })

      if (!response.ok) {
        throw new Error(`Gemini API error: ${response.status}`)
      }

      const data = await response.json()
      const raw =
        data?.candidates?.[0]?.content?.parts?.map((p) => p.text).join('\n').trim() ||
        'Sorry, I could not generate a reply right now.'
      return cleanText(raw)
    } catch (err) {
      console.error('Gemini call failed:', err)
      return 'Sorry, I had trouble reaching the AI service. Please try again.'
    }
  }

  const sendMessage = async () => {
    const trimmed = input.trim()
    if (!trimmed || isLoading) return

    const userEntry = { sender: 'You', text: trimmed }
    setMessages((prev) => [...prev, userEntry])
    // Fire-and-forget log for user message
    saveChatMessage({ userId, sender: 'user', text: trimmed })
    setInput('')
    setIsLoading(true)

    const aiText = await callGemini(trimmed)
    const botEntry = { sender: 'Bot', text: aiText }
    setMessages((prev) => [...prev, botEntry])
    // Log bot reply as well
    saveChatMessage({ userId, sender: 'bot', text: aiText })
    setIsLoading(false)
  }

  const toggleChat = () => {
    if (!isLoggedIn) {
      window.alert('Please login first to use the chatbot.')
      return
    }
    setIsOpen((prev) => !prev)
  }

  return (
    <>
      <div id="chatbotToggle" className="chatbot-toggle" onClick={toggleChat}>
        💬
      </div>
      {isOpen ? (
        <div id="chatbotWindow" className="chatbot-window">
          <div className="chatbot-header">
            <span className="font-semibold">🤖 Amigos Vehicle Bot</span>
            <button onClick={toggleChat} className="text-xl">
              ✕
            </button>
          </div>
          <div id="chatMessages" className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className="chatbot-message">
                <b>{msg.sender}:</b> {msg.text}
              </div>
            ))}
            {isLoading ? <div className="chatbot-message"><b>Bot:</b> Typing...</div> : null}
            <div ref={messageEndRef} />
          </div>
          <div className="chatbot-input">
            <input
              id="chatInput"
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              disabled={isLoading}
            />
            <button onClick={sendMessage} disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send'}
            </button>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Chatbot

