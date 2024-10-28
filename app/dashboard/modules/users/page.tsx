export default function UsersPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">用户管理</h1>
      <div className="rounded-lg border border-border overflow-hidden">
        <table className="w-full">
          <thead className="bg-muted">
            <tr>
              <th className="px-4 py-3 text-left">用户</th>
              <th className="px-4 py-3 text-left">邮箱</th>
              <th className="px-4 py-3 text-left">角色</th>
              <th className="px-4 py-3 text-left">状态</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: '张三', email: 'zhangsan@example.com', role: '管理员', status: '活跃' },
              { name: '李四', email: 'lisi@example.com', role: '编辑', status: '活跃' },
              { name: '王五', email: 'wangwu@example.com', role: '作者', status: '未激活' },
            ].map((user, index) => (
              <tr key={index} className="border-t border-border">
                <td className="px-4 py-3">{user.name}</td>
                <td className="px-4 py-3">{user.email}</td>
                <td className="px-4 py-3">{user.role}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    user.status === '活跃' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}