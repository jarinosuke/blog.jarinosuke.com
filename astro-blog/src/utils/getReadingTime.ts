// ABOUTME: This file provides utilities for calculating reading time for blog posts
// ABOUTME: It estimates reading time based on word count and average reading speed

export function getReadingTime(content: string): { text: string; minutes: number } {
  // Average reading speed: 200 words per minute (Japanese/English mixed content)
  const wordsPerMinute = 200;
  
  // Remove HTML tags and count words
  const plainText = content
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();
  
  // Count words (split by spaces for English, characters for Japanese estimation)
  const wordCount = plainText.split(/\s+/).length;
  
  // Calculate reading time
  const minutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute));
  
  return {
    text: `${minutes} min read`,
    minutes
  };
}