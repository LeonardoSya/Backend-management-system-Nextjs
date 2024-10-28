export default function OverviewPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">仪表盘概览</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: '总用户数', value: Math.floor(Math.random() * 1000) },
          { label: '活跃文章', value: Math.floor(Math.random() * 1000) },
          { label: '评论数', value: Math.floor(Math.random() * 1000) },
          { label: '分类数', value: Math.floor(Math.random() * 1000) }
        ].map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-lg bg-card border border-border"
          >
            <h3 className="text-sm font-medium text-muted-foreground">{item.label}</h3>
            <p className="text-2xl font-bold mt-2">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}