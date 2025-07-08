import { UserApplication } from "../types";

export const mockUserApplications: UserApplication[] = [
  {
    id: "1",
    firstName: "Jacob",
    lastName: "Goralski",
    email: "jacob@example.com",
    status: "pending",
    submittedAt: "2025-07-07T10:00:00Z",
  },
  {
    id: "2",
    firstName: "Tracy",
    lastName: "Johnson",
    email: "tracy@example.com",
    status: "approved",
    submittedAt: "2025-07-06T14:30:00Z",
  },
  {
    id: "3",
    firstName: "Jeff",
    lastName: "Johnson",
    email: "jeff@example.com",
    status: "rejected",
    submittedAt: "2025-07-05T08:45:00Z",
  },
];
