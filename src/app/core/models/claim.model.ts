// Interfaces para las respuestas del API
interface ApiClaim {
  id?: string;
  code: string;
  company: string;
  reason: string;
  description: string;
  customerEmail: string;
  creationDate?: string;
  currentStatus?: string;
}

interface ApiClaimListItem {
  id: string;
  company: string;
  reason: string;
  currentStatus: string;
  creationDate: string;
}

// Interfaces para el frontend
export interface Claim {
  id: string;
  code: string;
  company: string;
  reason: string;
  description: string;
  status: string;
  customerEmail: string;
  attachments: string;
  creationDate?: string;
  currentStatus?: string;
}

export interface ClaimListItem {
  id: string;
  code: string;
  company: string;
  reason: string;
  currentStatus: string;
  creationDate: string;
}

export interface ClaimCreate {
  company: string;
  reason: string;
  description: string;
  customerEmail: string;
}
