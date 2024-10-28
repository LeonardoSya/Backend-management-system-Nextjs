export default function SettingsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">系统设置</h1>
      <div className="space-y-6">
        <div className="p-6 rounded-lg border border-border">
          <h2 className="text-lg font-semibold mb-4">基本设置</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">网站名称</label>
              <input
                type="text"
                className="w-full px-3 py-2 rounded-md border border-border bg-background"
                defaultValue="我的内容管理系统"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">网站描述</label>
              <textarea
                className="w-full px-3 py-2 rounded-md border border-border bg-background"
                rows={3}
                defaultValue="一个强大的内容管理系统"
              />
            </div>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-border">
          <h2 className="text-lg font-semibold mb-4">邮件设置</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">SMTP服务器</label>
              <input
                type="text"
                className="w-full px-3 py-2 rounded-md border border-border bg-background"
                placeholder="smtp.example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">SMTP端口</label>
              <input
                type="number"
                className="w-full px-3 py-2 rounded-md border border-border bg-background"
                placeholder="587"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}