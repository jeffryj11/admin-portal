import '../styles/globals.css';
import { ReactNode } from 'react';
import AdminLayout from '../components/layout/AdminLayout';

export const metadata = {
  title: 'Texas Home Energy Rebates – Admin Portal',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AdminLayout>{children}</AdminLayout>
      </body>
    </html>
  );
}
