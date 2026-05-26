export enum UserRole {
  USER = 'user',
  VENUE_OWNER = 'venue_owner',
  ADMIN = 'admin',
}

export class User {
  id!: string;
  email!: string;
  password!: string;
  role!: UserRole;
  createdAt!: Date;
  updatedAt!: Date;
}
