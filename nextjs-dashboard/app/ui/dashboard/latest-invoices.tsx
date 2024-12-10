export default function LatestInvoices({ latestInvoices }: { latestInvoices: any[] }) {
    return (
      <div className="bg-white p-4 border rounded-lg">
        <h2>Latest Invoices</h2>
        <ul>
          {latestInvoices.map((invoice, index) => (
            <li key={index}>{invoice.name}</li>
          ))}
        </ul>
      </div>
    );
  }
  