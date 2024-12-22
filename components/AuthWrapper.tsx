'use client';

import { AuthProvider } from '@/context/auth';
const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AuthWrapper;
