import { profile } from './profile';
import type { NavItem } from './types';

export type { ImageAsset, NavItem } from './types';

export const siteContent = {
  brand: {
    name: profile.brand.fullName,
    role: profile.brand.role,
    location: profile.brand.location,
    email: profile.brand.email,
  },
  socialLink: profile.socialLinks[0],
  navigation: profile.navigation satisfies readonly NavItem[],
} as const;
