export interface TeamEntry {
    company: string;
    period?: string; 
    description: string;
    superscripts?: {
      text: string;
      position: number;
    }[];
  }
  
  export const teamData: TeamEntry[] = [
    {
      company: "Repixelx Studio",
      period: "2025 - Present",
      description: "In Studio i works on diffrent-diffrent freelance project like web-app, e-commerce, product landing page, brand website, etc."
    },
    {
      company: "Agrofix",
      period: "2025 - 2025",
      description: "First full-time design hire as full-stack intern. i have to build diffrent-diffrent full-stackproduct."
    },
   
  ];