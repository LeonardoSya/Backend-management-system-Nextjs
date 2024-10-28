'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LockKeyhole } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (credentials.username && credentials.password) {
      router.push('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/10 backdrop-blur-lg border-gray-800">
        <CardHeader className="space-y-1 flex flex-col items-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <LockKeyhole className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold text-center text-white">欢迎回来</CardTitle>
          <p className="text-gray-400 text-sm">登录以访问您的管理面板</p>
          <p className="text-gray-400 text-sm mt-2">地信22张毅阳制作</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="用户名"
                className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="密码"
                className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              />
            </div>
            <Button type="submit" className="w-full">
              登录
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}