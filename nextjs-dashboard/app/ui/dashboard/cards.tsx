export function Card({ title, value, type }: { title: string; value: number; type: string }) {
    return (
      <div className="p-4 border rounded-lg">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-xl font-bold">{value}</p>
      </div>
    );
  }
  