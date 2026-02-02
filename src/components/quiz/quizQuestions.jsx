// Quiz Questions - UK Cyber Security Council Career Framework Aligned
// 30 Questions across 4 sections

export const quizQuestions = [
  // SECTION A — Interest & Motivation (8 questions)
  {
    id: 'a1',
    section: 'Interest & Motivation',
    text: 'When you hear "cybersecurity", what appeals most to you?',
    type: 'multiple',
    options: [
      { value: 'protecting', label: 'Protecting systems from threats' },
      { value: 'investigating', label: 'Investigating attacks and breaches' },
      { value: 'managing_risk', label: 'Managing risk and compliance' },
      { value: 'advising', label: 'Advising organisations on security strategy' }
    ],
    traits: {
      protecting: { security_operations_interest: 25, technical_comfort: 15 },
      investigating: { investigative_curiosity: 25, problem_solving: 15 },
      managing_risk: { governance_policy_interest: 25, ethical_risk_awareness: 15 },
      advising: { communication_orientation: 25, governance_policy_interest: 15 }
    }
  },
  {
    id: 'a2',
    section: 'Interest & Motivation',
    text: 'Which would you rather learn first?',
    type: 'multiple',
    options: [
      { value: 'exploits', label: 'How exploits and attacks work' },
      { value: 'defence', label: 'How to defend and protect systems' },
      { value: 'policies', label: 'How policies and procedures reduce risk' },
      { value: 'audits', label: 'How audits ensure security compliance' }
    ],
    traits: {
      exploits: { investigative_curiosity: 25, technical_comfort: 20 },
      defence: { security_operations_interest: 25, technical_comfort: 15 },
      policies: { governance_policy_interest: 25, ethical_risk_awareness: 15 },
      audits: { governance_policy_interest: 20, ethical_risk_awareness: 20 }
    }
  },
  {
    id: 'a3',
    section: 'Interest & Motivation',
    text: 'I am interested in analysing security breaches and digital evidence.',
    type: 'likert',
    traits: { investigative_curiosity: 20, problem_solving: 15 }
  },
  {
    id: 'a4',
    section: 'Interest & Motivation',
    text: 'Which type of work sounds more appealing to you?',
    type: 'multiple',
    options: [
      { value: 'vulnerabilities', label: 'Finding vulnerabilities before attackers do' },
      { value: 'defences', label: 'Building and maintaining strong defences' },
      { value: 'org_risk', label: 'Assessing organisational security risks' },
      { value: 'explaining', label: 'Explaining cyber risks to business leaders' }
    ],
    traits: {
      vulnerabilities: { investigative_curiosity: 25, technical_comfort: 20 },
      defences: { security_operations_interest: 25, resilience_persistence: 15 },
      org_risk: { governance_policy_interest: 25, ethical_risk_awareness: 15 },
      explaining: { communication_orientation: 25, governance_policy_interest: 15 }
    }
  },
  {
    id: 'a5',
    section: 'Interest & Motivation',
    text: 'If you could do one of these tasks every day, which would you choose?',
    type: 'multiple',
    options: [
      { value: 'pentest', label: 'Penetration testing and ethical hacking' },
      { value: 'incident', label: 'Incident response and threat hunting' },
      { value: 'governance', label: 'Governance, risk analysis and compliance' },
      { value: 'strategy', label: 'Cyber strategy and advisory work' }
    ],
    traits: {
      pentest: { investigative_curiosity: 25, technical_comfort: 25 },
      incident: { security_operations_interest: 25, resilience_persistence: 20 },
      governance: { governance_policy_interest: 25, ethical_risk_awareness: 20 },
      strategy: { communication_orientation: 25, governance_policy_interest: 20 }
    }
  },
  {
    id: 'a6',
    section: 'Interest & Motivation',
    text: 'What is your main motivation for exploring cybersecurity?',
    type: 'multiple',
    options: [
      { value: 'technical', label: 'Gaining deep technical skills and mastery' },
      { value: 'protecting', label: 'Protecting people and systems from harm' },
      { value: 'safer', label: 'Making organisations safer and more resilient' },
      { value: 'translating', label: 'Translating technical risks for decision-makers' }
    ],
    traits: {
      technical: { technical_comfort: 25, problem_solving: 20 },
      protecting: { security_operations_interest: 20, ethical_risk_awareness: 20 },
      safer: { governance_policy_interest: 20, resilience_persistence: 15 },
      translating: { communication_orientation: 25, governance_policy_interest: 15 }
    }
  },
  {
    id: 'a7',
    section: 'Interest & Motivation',
    text: 'I would likely pursue cybersecurity learning on my own time.',
    type: 'likert',
    traits: { resilience_persistence: 20, investigative_curiosity: 15 }
  },
  {
    id: 'a8',
    section: 'Interest & Motivation',
    text: 'I actively follow cybersecurity news, breach reports, or security podcasts.',
    type: 'likert',
    traits: { investigative_curiosity: 20, security_operations_interest: 15 }
  },

  // SECTION B — Problem Solving & Technical Style (8 questions)
  {
    id: 'b1',
    section: 'Problem Solving & Technical Style',
    text: 'I prefer problems that are:',
    type: 'multiple',
    options: [
      { value: 'structured', label: 'Structured with clear steps and procedures' },
      { value: 'exploratory', label: 'Exploratory, requiring creative investigation' }
    ],
    traits: {
      structured: { governance_policy_interest: 20, security_operations_interest: 15 },
      exploratory: { investigative_curiosity: 25, problem_solving: 20 }
    }
  },
  {
    id: 'b2',
    section: 'Problem Solving & Technical Style',
    text: 'I am comfortable using command-line tools or terminal interfaces.',
    type: 'likert',
    traits: { technical_comfort: 25 }
  },
  {
    id: 'b3',
    section: 'Problem Solving & Technical Style',
    text: 'When something is broken, I enjoy troubleshooting until I fix it.',
    type: 'likert',
    traits: { problem_solving: 20, resilience_persistence: 20 }
  },
  {
    id: 'b4',
    section: 'Problem Solving & Technical Style',
    text: 'If given network logs with suspicious patterns, how would you react?',
    type: 'multiple',
    options: [
      { value: 'dig_in', label: 'I would enjoy digging into the data to find anomalies' },
      { value: 'guidance', label: 'I would need guidance but could learn to analyse them' },
      { value: 'conceptual', label: 'I prefer working with concepts rather than raw data' }
    ],
    traits: {
      dig_in: { investigative_curiosity: 25, technical_comfort: 20 },
      guidance: { security_operations_interest: 15, problem_solving: 10 },
      conceptual: { communication_orientation: 15, governance_policy_interest: 20 }
    }
  },
  {
    id: 'b5',
    section: 'Problem Solving & Technical Style',
    text: 'I enjoy solving logical puzzles, even when they take a long time.',
    type: 'likert',
    traits: { problem_solving: 25, resilience_persistence: 15 }
  },
  {
    id: 'b6',
    section: 'Problem Solving & Technical Style',
    text: 'Which work environment appeals most to you?',
    type: 'multiple',
    options: [
      { value: 'soc', label: 'Security Operations Centre (monitoring and response)' },
      { value: 'pentest_env', label: 'Penetration testing lab or red team' },
      { value: 'governance_env', label: 'Governance, risk and assurance office' },
      { value: 'advisory_env', label: 'Advisory and strategy consulting' }
    ],
    traits: {
      soc: { security_operations_interest: 25, technical_comfort: 15 },
      pentest_env: { investigative_curiosity: 25, technical_comfort: 20 },
      governance_env: { governance_policy_interest: 25, ethical_risk_awareness: 15 },
      advisory_env: { communication_orientation: 25, governance_policy_interest: 15 }
    }
  },
  {
    id: 'b7',
    section: 'Problem Solving & Technical Style',
    text: 'How do you prefer to learn new technical concepts?',
    type: 'multiple',
    options: [
      { value: 'hands_on', label: 'Hands-on labs and practical exercises' },
      { value: 'case_studies', label: 'Real-world case studies and examples' },
      { value: 'discussion', label: 'Conceptual discussion and frameworks' }
    ],
    traits: {
      hands_on: { technical_comfort: 20, problem_solving: 15 },
      case_studies: { investigative_curiosity: 15, security_operations_interest: 15 },
      discussion: { communication_orientation: 15, governance_policy_interest: 20 }
    }
  },
  {
    id: 'b8',
    section: 'Problem Solving & Technical Style',
    text: 'I am comfortable working on long, detailed technical tasks.',
    type: 'likert',
    traits: { technical_comfort: 15, resilience_persistence: 20 }
  },

  // SECTION C — Security & Risk Orientation (7 questions)
  {
    id: 'c1',
    section: 'Security & Risk Orientation',
    text: 'What aspect of security matters most to you?',
    type: 'multiple',
    options: [
      { value: 'detection', label: 'Detection and rapid response to threats' },
      { value: 'confidentiality', label: 'Confidentiality and data integrity' },
      { value: 'compliance', label: 'Compliance and regulatory governance' },
      { value: 'privacy', label: 'Privacy and ethical data handling' }
    ],
    traits: {
      detection: { security_operations_interest: 25, investigative_curiosity: 15 },
      confidentiality: { technical_comfort: 15, ethical_risk_awareness: 20 },
      compliance: { governance_policy_interest: 25, ethical_risk_awareness: 15 },
      privacy: { ethical_risk_awareness: 25, governance_policy_interest: 15 }
    }
  },
  {
    id: 'c2',
    section: 'Security & Risk Orientation',
    text: 'I believe ethics should be central to every cybersecurity decision.',
    type: 'likert',
    traits: { ethical_risk_awareness: 25 }
  },
  {
    id: 'c3',
    section: 'Security & Risk Orientation',
    text: 'I enjoy evaluating and comparing different security risks.',
    type: 'likert',
    traits: { governance_policy_interest: 20, ethical_risk_awareness: 15 }
  },
  {
    id: 'c4',
    section: 'Security & Risk Orientation',
    text: 'I am curious about understanding threat actors and their motivations.',
    type: 'likert',
    traits: { investigative_curiosity: 25, security_operations_interest: 15 }
  },
  {
    id: 'c5',
    section: 'Security & Risk Orientation',
    text: 'I would enjoy coordinating a team during a security incident.',
    type: 'likert',
    traits: { communication_orientation: 20, resilience_persistence: 20 }
  },
  {
    id: 'c6',
    section: 'Security & Risk Orientation',
    text: 'Designing secure systems from the start is more important than fixing them later.',
    type: 'likert',
    traits: { technical_comfort: 15, security_operations_interest: 15, ethical_risk_awareness: 10 }
  },
  {
    id: 'c7',
    section: 'Security & Risk Orientation',
    text: 'I want to help senior leaders understand cyber risks in business terms.',
    type: 'likert',
    traits: { communication_orientation: 25, governance_policy_interest: 15 }
  },

  // SECTION D — Career Preferences (7 questions)
  {
    id: 'd1',
    section: 'Career Preferences',
    text: 'I enjoy communicating complex ideas to different audiences.',
    type: 'likert',
    traits: { communication_orientation: 25 }
  },
  {
    id: 'd2',
    section: 'Career Preferences',
    text: 'I would enjoy participating in attack/defence competitions or challenges.',
    type: 'likert',
    traits: { investigative_curiosity: 20, technical_comfort: 20 }
  },
  {
    id: 'd3',
    section: 'Career Preferences',
    text: 'I value having recognised industry certifications.',
    type: 'likert',
    traits: { governance_policy_interest: 10, resilience_persistence: 15 }
  },
  {
    id: 'd4',
    section: 'Career Preferences',
    text: 'I prefer roles focused on governance and policy rather than hands-on technical work.',
    type: 'likert',
    traits: { governance_policy_interest: 25, communication_orientation: 10 }
  },
  {
    id: 'd5',
    section: 'Career Preferences',
    text: 'In my ideal role, I would prefer:',
    type: 'multiple',
    options: [
      { value: 'technical_depth', label: 'Deep technical specialisation' },
      { value: 'strategy_policy', label: 'Strategy and policy influence' }
    ],
    traits: {
      technical_depth: { technical_comfort: 25, problem_solving: 15 },
      strategy_policy: { governance_policy_interest: 20, communication_orientation: 20 }
    }
  },
  {
    id: 'd6',
    section: 'Career Preferences',
    text: 'I want a career with clear progression and structured development.',
    type: 'likert',
    traits: { governance_policy_interest: 10, resilience_persistence: 15 }
  },
  {
    id: 'd7',
    section: 'Career Preferences',
    text: 'I work well in high-pressure team environments.',
    type: 'likert',
    traits: { resilience_persistence: 20, security_operations_interest: 15, communication_orientation: 10 }
  }
];

export default quizQuestions;