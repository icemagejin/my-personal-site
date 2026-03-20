'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Chrome as Home, Newspaper, Lightbulb, MapPin } from 'lucide-react';

const navItems = [
  { href: '/', label: '首页', icon: Home, disabled: false },
  { href: '/news', label: '行业动态', icon: Newspaper, disabled: false },
  { href: '/chat', label: '产品拆解', icon: Lightbulb, disabled: false },
  { href: '/map', label: '美食地图', icon: MapPin, disabled: true },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-70 transition-opacity">
            <div className="w-8 h-8 bg-black rounded flex items-center justify-center text-white font-bold text-sm">
              敷
            </div>
            <span className="font-medium text-lg hidden sm:inline">四袋敷尼</span>
          </Link>

          <div className="flex space-x-1 items-center">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/');

              if (item.disabled) {
                return (
                  <div
                    key={item.href}
                    className="relative group px-3 py-2 rounded-md text-sm cursor-not-allowed opacity-40"
                  >
                    <div className="flex items-center space-x-2">
                      <Icon className="w-4 h-4 text-gray-400" />
                      <span className="hidden sm:inline text-gray-400">{item.label}</span>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                      Contributing, see u later
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm transition-colors ${
                    isActive
                      ? 'bg-gray-100 text-black font-medium'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
