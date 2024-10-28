'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  LayoutDashboard,
  Users,
  FileText,
  Settings,
  LogOut,
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();
  const [currentModule, setCurrentModule] = useState('/dashboard/modules/overview');

  const menuItems = [
    { icon: LayoutDashboard, label: '概览', path: '/dashboard/modules/overview' },
    { icon: Users, label: '用户', path: '/dashboard/modules/users' },
    { icon: FileText, label: '内容', path: '/dashboard/modules/content' },
    { icon: Settings, label: '设置', path: '/dashboard/modules/settings' },
  ];

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <div className="flex h-screen bg-background">
      <div className="w-64 bg-card border-r border-border flex flex-col">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-primary">内容管理系统</h1>
        </div>
        
        <ScrollArea className="flex-1 px-3">
          <div className="space-y-2">
            {menuItems.map((item) => (
              <Button
                key={item.path}
                variant={currentModule === item.path ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => setCurrentModule(item.path)}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.label}
              </Button>
            ))}
          </div>
        </ScrollArea>

        <div className="p-4 border-t border-border">
          <Button
            variant="ghost"
            className="w-full justify-start text-destructive hover:text-destructive"
            onClick={handleLogout}
          >
            <LogOut className="mr-2 h-4 w-4" />
            退出登录
          </Button>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="h-16 border-b border-border flex items-center px-6">
          <h2 className="text-lg font-semibold">
            {menuItems.find(item => item.path === currentModule)?.label}
          </h2>
        </div>
        
        <div className="flex-1 p-6">
          <iframe
            src={currentModule}
            className="w-full h-full rounded-lg border border-border"
            style={{ backgroundColor: 'var(--background)' }}
          />
        </div>
      </div>
    </div>
  );
}