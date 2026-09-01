export const manifesto = {
  eyebrow: "01 — Thesis",
  body: "Unreliable revenue AI leaks money twice: pipeline nobody trusts, and ops hours burned babysitting it. We close that gap — evaluation, monitoring, governance — until the AI inside your revenue stack grows revenue instead of consuming it.",
  stats: [
    { label: "What we own", value: "The gap between pilot and production" },
    { label: "What we do not", value: "CRM migrations and chatbot demos" },
    { label: "Where we sit", value: "Beside your CRM, warehouse, and agents" },
  ],
  pillars: [
    {
      label: "Forecasting",
      note: "Drift-watched and evaluated against actuals — a forecast your CRO can defend to the board.",
    },
    {
      label: "Lead scoring",
      note: "The scorer gets scored: measured against real closed-won outcomes before sales bets a quarter on it.",
    },
    {
      label: "AI agents",
      note: "SDR and workflow agents with an action trail, escalation rules, and a kill switch — observed in production, not trusted on faith.",
    },
    {
      label: "Reporting",
      note: "AI-drafted QBRs and pipeline commentary fact-checked against source data before anyone client-facing sees them.",
    },
    {
      label: "Evals",
      note: "Automated evaluation layers that catch failures before your customers do — the discipline most pilots skip.",
    },
    {
      label: "Governance",
      note: "Design-stage regulatory screens, human-in-the-loop controls, and audit trails for every AI-touched decision.",
    },
  ],
} as const;
