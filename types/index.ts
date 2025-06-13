// Section Interface
export interface Sec {
  h: string; // Title of the section
  p: string; // Content of the section
  img: string;
}

// Character Interface
export interface Chapter {
  name: string; // Name of the character
  description: string; // Description of the character
  img: string; // Image URL for the character
  link: string; // Link associated with the character
  type: string; // Type of the character
  sections: Sec[]; // List of sections
}

// Mythology Interface
export interface Mythology {
  _id?: string; // MongoDB ID for the mythology
  name?: string; // Name of the mythology
  chapters?: Chapter[]; // List of characters (chapters)
}

// Response Interface
export interface MythologyResponse {
  data: Mythology[]; // Array of mythologies
  message?: string; // Optional message
  error?: string; // Optional error message
}
