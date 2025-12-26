// Enhanced math CAPTCHA generator (slightly harder to prevent simple bots)
export const generateCaptcha = () => {
  const num1 = Math.floor(Math.random() * 15) + 5 // 5-19
  const num2 = Math.floor(Math.random() * 15) + 5 // 5-19
  return {
    question: `${num1} + ${num2} = ?`,
    answer: num1 + num2
  }
}

// Sanitize HTML to prevent XSS (improved)
export const sanitizeInput = (str) => {
  if (typeof str !== 'string') return ''
  // Remove HTML tags and dangerous characters
  return str
    .replace(/[<>]/g, '') // Remove < and >
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers (onclick, onerror, etc.)
    .trim()
}

// Client-side rate limiting using localStorage
export const checkRateLimit = (formType = 'default', maxSubmissions = 3, windowMinutes = 15) => {
  try {
    const key = `form_submissions_${formType}`
    const now = Date.now()
    const windowMs = windowMinutes * 60 * 1000
    
    const stored = localStorage.getItem(key)
    if (!stored) {
      // First submission
      localStorage.setItem(key, JSON.stringify([now]))
      return { allowed: true, remaining: maxSubmissions - 1 }
    }
    
    const submissions = JSON.parse(stored)
    // Remove old submissions outside the time window
    const recentSubmissions = submissions.filter(time => now - time < windowMs)
    
    if (recentSubmissions.length >= maxSubmissions) {
      const oldestSubmission = Math.min(...recentSubmissions)
      const waitTime = Math.ceil((windowMs - (now - oldestSubmission)) / 60000) // minutes
      return { 
        allowed: false, 
        message: `Too many submissions. Please wait ${waitTime} minute(s) before trying again.`,
        remaining: 0
      }
    }
    
    // Add current submission
    recentSubmissions.push(now)
    localStorage.setItem(key, JSON.stringify(recentSubmissions))
    
    return { 
      allowed: true, 
      remaining: maxSubmissions - recentSubmissions.length 
    }
  } catch (error) {
    // If localStorage fails, allow submission (graceful degradation)
    console.warn('Rate limit check failed:', error)
    return { allowed: true, remaining: maxSubmissions }
  }
}

// Check minimum form fill time (prevents instant bot submissions)
export const checkFormTiming = (startTime, minSeconds = 5) => {
  const elapsed = (Date.now() - startTime) / 1000
  if (elapsed < minSeconds) {
    return {
      allowed: false,
      message: `Please take at least ${minSeconds} seconds to fill out the form.`
    }
  }
  return { allowed: true }
}

// Generate honeypot field name (randomized to avoid detection)
export const generateHoneypotName = () => {
  const random = Math.random().toString(36).substring(7)
  return `website_${random}`
}

// Validate honeypot field (should be empty)
export const validateHoneypot = (honeypotValue) => {
  return !honeypotValue || honeypotValue.trim() === ''
}
