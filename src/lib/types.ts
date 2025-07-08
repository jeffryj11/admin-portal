export interface UserApplication {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  status: "pending" | "approved" | "rejected";
  submittedAt: string;
}
