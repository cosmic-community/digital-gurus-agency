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
export interface Service extends CosmicObject {
  metadata: {
    description: string;
    icon?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Team Member object type
export interface TeamMember extends CosmicObject {
  metadata: {
    role: string;
    bio?: string;
    photo?: {
      url: string;
      imgix_url: string;
    };
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

// API response type
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
}

// Error helper type
export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}