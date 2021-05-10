export interface User {
  accessFailedCount: number;
  city: string;
  componyAddress: string;
  componyName: string;
  country: string;
  email: string;
  emailConfirmed: boolean;
  firstName: string;
  id: string;
  lastName: string;
  lockoutEnabled: string;
  lockoutEnd: string;
  normalizedEmail: string;
  normalizedUserName: string;
  phoneNumber: string;
  phoneNumberConfirmed: boolean;
  position: string;
  state: string;
  twoFactorEnabled: boolean;
  userName: string;
  website: string;
  zipCode: number;
  isActive: boolean;
  lastLoginIp: string;
  createdAt: string;
}
