interface Company {
  _id: string;
  name: string;
  logo: string;
  thumbnail: string;
  staff: number;
}

interface Author {
  _id: string;
  first_name: string;
  last_name: string;
  bio: string | null;
}

interface Salary {
  amount: number;
  currency: string;
  period: string;
}

interface ExternalData {
  image: string | null;
  url: string | null;
  date: string | null;
}

interface Job {
  _id: string;
  _company: Company;
  _author: Author;
  title: string;
  industry: string;
  description: string;
  requirement: string;
  benefit: string;
  experience: string;
  type: string;
  status: "Active" | "Inactive";
  location: string;
  salary: Salary;
  redirect: boolean;
  redirect_url: string;
  verify: boolean;
  private: boolean;
  promoted: boolean;
  publish: boolean;
  expiry: string;
  service: string;
  external_data: ExternalData;
  isDirectApply:boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}


export interface IJobApiResponse {
  success: boolean;
  status: string;
  total: number;
  count: number;
  pagination: Record<string, unknown>;
  data: Job[];
}



export interface ICreateJobApiResponse {
  success: boolean;
  redirect: boolean;
  redirect_url: string;
  verify: boolean;
  private: boolean;
  promoted: boolean;
  publish: boolean;
  expiry: string;
  external_data: ExternalData;
  createdAt: string;
  updatedAt: string;
  data: Job[]



}