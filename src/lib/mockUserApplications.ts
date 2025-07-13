// src/lib/mockUserApplications.ts

import { UserApplication } from "../types";

export const mockUserApplications: UserApplication[] = [
  {
    id: "1",
    firstName: "Alice",
    lastName: "Johnson",
    status: "pending",
    submittedAt: "2025-07-01",
  },
  {
    id: "2",
    firstName: "Bob",
    lastName: "Smith",
    status: "approved",
    submittedAt: "2025-07-02",
  },
];
