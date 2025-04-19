import Footer from '@/components/ui/footer';
import Header from '@/components/ui/header';
import { type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';


interface FrontendLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

const FrontendLayout = ({ children }: FrontendLayoutProps) => (
    <>
        <Header />
        {children}
        <Footer />
    </>
);

export default FrontendLayout;
