export interface User {
  accessFailedCount: number;
  city: string;
  componyAddress: string;
  componyName: string;
  concurrencyStamp: string;
  country: string;
  email: string;
  emailConfirmed: boolean;
  firstName: string;
  id: string;
  lastName: string;
  lockoutEnabled: boolean;
  lockoutEnd: string;
  normalizedEmail: string;
  normalizedUserName: string;
  phoneNumber: string;
  phoneNumberConfirmed: boolean;
  position: string;
  securityStamp: string;
  state: string;
  twoFactorEnabled: boolean;
  userName: string;
  website: string;
  zipCode: number;
}
