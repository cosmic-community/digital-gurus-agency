// Base Cosmic file/image type
export interface CosmicFile {
  url: string;
  imgix_url: string;
}

// Cosmic select-dropdown type
export interface CosmicSelectDropdown {
  key: string;
  value: string;
}

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

// Service object type
export interface Service {
  id: string;
  title: string;
  slug: string;
  metadata: {
    description: string;
    icon: string;
    featured_image: CosmicFile;
  };
}

// Team Member object type
export interface TeamMember {
  id: string;
  title: string;
  slug: string;
  metadata: {
    role: string;
    bio: string;
    photo: CosmicFile;
    email: string;
  };
}

// Testimonial object type
export interface Testimonial {
  id: string;
  title: string;
  slug: string;
  metadata: {
    client_name: string;
    company: string;
    quote: string;
    rating: CosmicSelectDropdown;
  };
}

// Page object type
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

// Site Settings object type
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

// Rating select-dropdown value from Cosmic (alias for backward compatibility)
export interface RatingValue {
  key: string;
  value: string;
}

// API response type
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
}

// Type guard for error objects with status
export function hasStatus(error: unknown): error is { status: number } {
  return (
    typeof error === 'object' &&
    error !== null &&
    'status' in error &&
    typeof (error as { status: unknown }).status === 'number'
  );
}