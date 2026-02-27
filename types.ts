// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, unknown>;
  type?: string;
  created_at?: string;
  modified_at?: string;
}

// Cosmic file/image type
export interface CosmicFile {
  url: string;
  imgix_url: string;
}

// Cosmic select-dropdown type
export interface CosmicSelectDropdown {
  key: string;
  value: string;
}

// Service object type
export interface Service extends CosmicObject {
  metadata: {
    description: string;
    icon?: string;
    featured_image?: CosmicFile;
  };
}

// Team Member object type
export interface TeamMember extends CosmicObject {
  metadata: {
    role: string;
    bio?: string;
    photo?: CosmicFile;
    email?: string;
  };
}

// Rating select-dropdown value from Cosmic
export interface RatingValue {
  key: string;
  value: string;
}

// Testimonial object type
export interface Testimonial extends CosmicObject {
  metadata: {
    client_name: string;
    company?: string;
    quote: string;
    rating?: RatingValue;
  };
}

// Changed: Added Page object type (merged from types/index.ts)
export interface Page {
  id: string;
  title: string;
  slug: string;
  metadata: {
    hero_title: string;
    hero_subtitle?: string;
    hero_image?: CosmicFile;
    content?: string;
  };
}

// Changed: Added SiteSettings object type (merged from types/index.ts)
export interface SiteSettings {
  id: string;
  title: string;
  slug: string;
  metadata: {
    site_name: string;
    tagline?: string;
    logo?: CosmicFile;
    phone?: string;
    email?: string;
    address?: string;
    facebook_url?: string;
    twitter_url?: string;
    linkedin_url?: string;
    instagram_url?: string;
    footer_text?: string;
  };
}

// API response type
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
}

// Error helper type - Type guard for error objects with status
export function hasStatus(error: unknown): error is { status: number } {
  return (
    typeof error === 'object' &&
    error !== null &&
    'status' in error &&
    typeof (error as { status: unknown }).status === 'number'
  );
}