// src/lib/types.ts

export interface UserApplication {
  id: string;
  name: string;
  email: string;
  status: "pending" | "approved" | "rejected";
  submittedAt: string;
}
