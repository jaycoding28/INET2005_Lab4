import { sql } from "@vercel/postgres";

export async function fetchRevenue() {
  return [1000, 2000, 3000];
}

export async function fetchLatestInvoices() {
  return [
    { name: "Invoice 1", amount: 100 },
    { name: "Invoice 2", amount: 200 },
  ];
}

export async function fetchCardData() {
  return {
    numberOfInvoices: 10,
    numberOfCustomers: 5,
    totalPaidInvoices: 5000,
    totalPendingInvoices: 2000,
  };
}
