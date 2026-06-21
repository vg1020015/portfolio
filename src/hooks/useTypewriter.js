import { useEffect, useState } from 'react'

/**
 * Cycles through a list of words with a typing + deleting animation.
 * Returns the current substring to render.
 */
export default function useTypewriter(words = [], { typingSpeed = 80, deletingSpeed = 40, pauseTime = 1400 } = {}) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (words.length === 0) return

    const currentWord = words[wordIndex % words.length]
    let timeout

    if (!isDeleting && text === currentWord) {
      // finished typing the word — pause, then start deleting
      timeout = setTimeout(() => setIsDeleting(true), pauseTime)
    } else if (isDeleting && text === '') {
      // finished deleting — move to next word
      setIsDeleting(false)
      setWordIndex((prev) => prev + 1)
    } else {
      const nextText = isDeleting
        ? currentWord.substring(0, text.length - 1)
        : currentWord.substring(0, text.length + 1)

      timeout = setTimeout(() => setText(nextText), isDeleting ? deletingSpeed : typingSpeed)
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime])

  return text
}
