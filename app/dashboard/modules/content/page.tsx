export default function ContentPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">内容管理</h1>
      <div className="grid gap-4">
        {[
          { title: 'Next.js入门指南', status: '已发布', date: '2024-03-20' },
          { title: 'React高级模式', status: '草稿', date: '2024-03-19' },
          { title: 'CSS最佳实践', status: '审核中', date: '2024-03-18' },
        ].map((post, index) => (
          <div
            key={index}
            className="p-4 rounded-lg border border-border flex items-center justify-between"
          >
            <div>
              <h3 className="font-medium">{post.title}</h3>
              <p className="text-sm text-muted-foreground">最后修改：{post.date}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm ${
              post.status === '已发布' ? 'bg-green-100 text-green-800' :
              post.status === '草稿' ? 'bg-yellow-100 text-yellow-800' :
              'bg-blue-100 text-blue-800'
            }`}>
              {post.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}