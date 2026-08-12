export type Service = {
  name: string;
  description: string;
};

export type ServicePillar = {
  id: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  ctaLabel: string;
  services: Service[];
};

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: "hr",
    title: "HR & People Management",
    shortTitle: "HR Services",
    tagline: "Our strongest area of expertise",
    description:
      "Practical HR systems, documentation, and processes that help you manage people with more structure, clarity, and consistency.",
    ctaLabel: "Explore HR Services",
    services: [
      {
        name: "HR Consultancy",
        description:
          "Ongoing HR guidance and advisory support tailored to the specific needs and stage of your business.",
      },
      {
        name: "HR System Setup and Development",
        description:
          "Build the core HR structure your business needs — from documentation to policies to processes — from the ground up.",
      },
      {
        name: "Employment Contract Preparation",
        description:
          "Clear, properly structured employment contracts that set expectations from day one.",
      },
      {
        name: "Employee Handbook Development",
        description:
          "Develop clear and structured employee guidelines that establish expectations, policies, procedures, and workplace standards.",
      },
      {
        name: "Code of Conduct Development",
        description:
          "Define the workplace behavior and professional standards expected of every employee.",
      },
      {
        name: "HR Policies and Procedures",
        description:
          "Document the policies and procedures that keep people management consistent and fair.",
      },
      {
        name: "Job Description Development",
        description:
          "Well-defined job descriptions that clarify roles, responsibilities, and reporting lines.",
      },
      {
        name: "KPI Development",
        description:
          "Set measurable performance indicators aligned with each role and your business objectives.",
      },
      {
        name: "Performance Management System",
        description:
          "A structured approach to setting expectations, tracking performance, and supporting employee growth.",
      },
      {
        name: "Employee Performance Appraisal System",
        description:
          "A consistent, fair process for evaluating employee performance across your organization.",
      },
      {
        name: "Performance-Based Salary Increase System",
        description:
          "A transparent framework for tying compensation increases to performance results.",
      },
      {
        name: "Salary Structure and Compensation Guidelines",
        description:
          "Organized salary structures and compensation guidelines that support fairness and retention.",
      },
      {
        name: "Attendance and Timekeeping Policies",
        description:
          "Clear rules and procedures for attendance, tardiness, and timekeeping.",
      },
      {
        name: "Employee Records Management",
        description:
          "Organize and maintain accurate, accessible employee records and files.",
      },
      {
        name: "HR Forms and Documentation",
        description:
          "Standardized HR forms and templates that keep documentation consistent and audit-ready.",
      },
      {
        name: "Notice to Explain (NTE) Preparation",
        description:
          "Properly prepared NTE documentation to support fair and defensible disciplinary processes.",
      },
      {
        name: "Disciplinary Process and Documentation",
        description:
          "Guidance and documentation support for handling employee disciplinary matters appropriately.",
      },
      {
        name: "Employee Relations Support",
        description:
          "Practical support for managing employee concerns, conflicts, and workplace relations.",
      },
      {
        name: "Recruitment and Selection Assistance",
        description:
          "Support in sourcing, screening, and selecting the right candidates for your team.",
      },
      {
        name: "Applicant Tracking System (ATS) Setup",
        description:
          "Set up a simple applicant tracking process to organize and manage candidates.",
      },
      {
        name: "Employee Onboarding System",
        description:
          "A structured onboarding process that helps new hires start productively and stay longer.",
      },
      {
        name: "Orientation and Training Programs",
        description:
          "Design orientation and training programs that set new and existing employees up for success.",
      },
      {
        name: "Organizational Structure Development",
        description:
          "Define reporting lines and structure that match how your business actually operates.",
      },
      {
        name: "Organizational Chart Development",
        description:
          "Clear, visual organizational charts that reflect roles, teams, and reporting relationships.",
      },
      {
        name: "HR Audit and Process Improvement",
        description:
          "Review existing HR practices and identify practical improvements and compliance gaps.",
      },
      {
        name: "HR Consultation and Advisory Services",
        description:
          "One-on-one advisory sessions to work through specific HR questions and challenges.",
      },
    ],
  },
  {
    id: "accounting",
    title: "Accounting & Business Support",
    shortTitle: "Accounting & Business Support",
    tagline: "Keep your financial records organized",
    description:
      "Practical bookkeeping, payroll, and documentation support that keeps your business's financial records organized and audit-ready.",
    ctaLabel: "Explore Accounting & Business Support",
    services: [
      {
        name: "Basic Accounting / Bookkeeping Support",
        description:
          "Ongoing bookkeeping support to keep your financial records accurate and current.",
      },
      {
        name: "Recording and Monitoring of Business Transactions",
        description:
          "Systematic recording and tracking of day-to-day business transactions.",
      },
      {
        name: "Income and Expense Monitoring",
        description:
          "Keep a clear, organized view of income and expenses across your business.",
      },
      {
        name: "Financial Records Organization",
        description:
          "Organize financial documents and records into a system that's easy to maintain and retrieve.",
      },
      {
        name: "Basic Accounting Reports",
        description:
          "Straightforward accounting reports that give you visibility into your business's financial position.",
      },
      {
        name: "Payroll Support",
        description:
          "Support in processing payroll accurately and on schedule.",
      },
      {
        name: "BIR Filing Assistance",
        description:
          "Assistance in preparing and organizing documentation for BIR filing requirements.",
      },
      {
        name: "Organization of Accounting and BIR Documents",
        description:
          "Keep accounting and BIR-related documents organized and readily accessible.",
      },
      {
        name: "General Business Documentation Support",
        description:
          "Support in preparing and organizing general business documentation as needed.",
      },
    ],
  },
  {
    id: "business-development",
    title: "Business & Organizational Development",
    shortTitle: "Business Solutions",
    tagline: "Build the systems behind your operations",
    description:
      "Documented processes, policies, and management support that help your business run with greater consistency as it grows.",
    ctaLabel: "Explore Business Solutions",
    services: [
      {
        name: "Business Development",
        description:
          "Practical guidance to support the growth and direction of your business.",
      },
      {
        name: "Business Process Development",
        description:
          "Design and document business processes so operations run consistently, even as your team grows.",
      },
      {
        name: "Standard Operating Procedures (SOP) Development",
        description:
          "Documented SOPs that make day-to-day operations repeatable and easier to manage.",
      },
      {
        name: "Company Policy Development",
        description:
          "Develop company policies that give your business clear, consistent operating guidelines.",
      },
      {
        name: "Business Documentation",
        description:
          "General business documentation support to keep your operations organized.",
      },
      {
        name: "Organizational Development",
        description:
          "Support in strengthening how your organization is structured and how it operates.",
      },
      {
        name: "Administrative System Development",
        description:
          "Set up administrative systems that support smoother day-to-day operations.",
      },
      {
        name: "Management Consultation",
        description:
          "Advisory sessions with business owners and managers on operational and people-related decisions.",
      },
      {
        name: "Leadership and Employee Training",
        description:
          "Training programs designed to build leadership capability and employee skills.",
      },
      {
        name: "Customized Business Solutions",
        description:
          "Solutions built around the specific needs of your business, beyond a standard service list.",
      },
    ],
  },
];

export function getAllServiceNames(): string[] {
  return SERVICE_PILLARS.flatMap((pillar) => pillar.services.map((s) => s.name));
}
