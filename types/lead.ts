export interface Lead {
  id: string;
  name: string;
  email: string;
  company: string;
  country: string;
  phone: string;
  division: "carbon" | "glass" | "general";
  product_interest?: string;
  source_page: string;
  message: string;
  status: "new" | "contacted" | "quoted" | "closed";
  created_at: string;
  updated_at: string;
}

export interface InquiryFormData {
  name: string;
  email: string;
  company?: string;
  country?: string;
  phone?: string;
  division?: "carbon" | "glass" | "general";
  product_interest?: string;
  message: string;
}
