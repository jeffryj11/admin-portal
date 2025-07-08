export type UserApplication = {
  id: string;
  firstName: string;
  lastName: string;
  submittedAt: string;
  status: "pending" | "approved" | "rejected";
};

export const mockUserApplications: UserApplication[] = [
  {
    id: "1",
    firstName: "Alice",
    lastName: "Johnson",
    submittedAt: "2025-07-01",
    status: "pending",
  },
  {
    id: "2",
    firstName: "Bob",
    lastName: "Smith",
    submittedAt: "2025-07-02",
    status: "approved",
  },
];
