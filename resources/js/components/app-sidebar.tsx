import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { NavItemWithSubmenu, type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { LayoutGrid, Car, Grape, MoveRight } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItemWithSubmenu[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutGrid,
    },
    {
        title: 'Cars',
        href: '/admin/cars',
        icon: Car,
        subItems:[
            {
                title: 'Add new car',
                href: '/admin/cars/create',
                icon: MoveRight,
            },
            {
                title: 'Car List',
                href: '/admin/cars',
                icon: MoveRight,
            }
        ]
    },
    {
        title: 'Car Extenitons',
        href: '#',
        icon: Grape,
        subItems:[
            {
                title: 'Body Types',
                href: '/admin/body-types',
                icon: MoveRight,
            }
        ]
    },
];

const footerNavItems: NavItem[] = [
    // {
    //     title: 'Repository',
    //     href: 'https://github.com/laravel/react-starter-kit',
    //     icon: Folder,
    // },
    // {
    //     title: 'Documentation',
    //     href: 'https://laravel.com/docs/starter-kits',
    //     icon: BookOpen,
    // },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
