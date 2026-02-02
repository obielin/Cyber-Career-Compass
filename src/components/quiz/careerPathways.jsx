// UK Cyber Security Council Career Framework - Career Pathways
// Aligned with Sycom Academy course offerings

export const careerPathways = [
  {
    id: 'secure_operations',
    name: 'Secure Operations (SOC / Blue Team)',
    shortName: 'Security Operations',
    description: 'Monitor, detect, and respond to security threats in real-time. Work in a Security Operations Centre protecting organisational assets.',
    icon: 'Shield',
    color: 'cyan',
    traits: {
      security_operations_interest: 0.35,
      technical_comfort: 0.25,
      resilience_persistence: 0.20,
      problem_solving: 0.20
    },
    responsibilities: [
      'Monitor security alerts and investigate potential threats',
      'Analyse logs and network traffic for suspicious activity',
      'Respond to and contain security incidents',
      'Maintain and tune security tools and systems',
      'Document incidents and produce security reports'
    ],
    entryExpectations: [
      'Understanding of networking fundamentals',
      'Familiarity with common security tools',
      'Analytical mindset and attention to detail',
      'Ability to work in shift patterns',
      'Strong communication skills'
    ],
    recommendedCourses: ['isc2_cc', 'comptia_network', 'isc2_sscp']
  },
  {
    id: 'security_testing',
    name: 'Security Testing (Penetration Testing)',
    shortName: 'Penetration Testing',
    description: 'Ethically hack systems to find vulnerabilities before malicious actors do. Help organisations strengthen their security posture.',
    icon: 'Search',
    color: 'violet',
    traits: {
      investigative_curiosity: 0.35,
      technical_comfort: 0.30,
      problem_solving: 0.25,
      ethical_risk_awareness: 0.10
    },
    responsibilities: [
      'Conduct authorised penetration tests on systems and applications',
      'Identify and document security vulnerabilities',
      'Develop and execute exploitation techniques',
      'Write detailed technical reports for clients',
      'Recommend remediation strategies'
    ],
    entryExpectations: [
      'Strong networking and systems knowledge',
      'Programming/scripting abilities',
      'Understanding of common vulnerabilities',
      'Ethical mindset and professional conduct',
      'Continuous learning attitude'
    ],
    recommendedCourses: ['isc2_cc', 'comptia_network', 'isc2_sscp']
  },
  {
    id: 'incident_response',
    name: 'Incident Response',
    shortName: 'Incident Response',
    description: 'Lead the response when security breaches occur. Investigate, contain, and help organisations recover from cyber attacks.',
    icon: 'AlertTriangle',
    color: 'orange',
    traits: {
      investigative_curiosity: 0.25,
      resilience_persistence: 0.25,
      security_operations_interest: 0.25,
      communication_orientation: 0.15,
      problem_solving: 0.10
    },
    responsibilities: [
      'Lead incident response activities during security breaches',
      'Conduct digital forensics and evidence collection',
      'Coordinate with stakeholders during incidents',
      'Develop incident response plans and playbooks',
      'Perform post-incident analysis and lessons learned'
    ],
    entryExpectations: [
      'Understanding of attack techniques and indicators',
      'Knowledge of forensic principles',
      'Calm under pressure',
      'Strong analytical skills',
      'Excellent documentation abilities'
    ],
    recommendedCourses: ['isc2_cc', 'isc2_sscp', 'comptia_network']
  },
  {
    id: 'governance_risk',
    name: 'Governance & Risk Management',
    shortName: 'Governance & Risk',
    description: 'Develop and manage security policies, risk frameworks, and compliance programmes that protect organisations strategically.',
    icon: 'FileCheck',
    color: 'emerald',
    traits: {
      governance_policy_interest: 0.40,
      ethical_risk_awareness: 0.25,
      communication_orientation: 0.20,
      problem_solving: 0.15
    },
    responsibilities: [
      'Develop and maintain security policies and standards',
      'Conduct risk assessments and manage risk registers',
      'Ensure compliance with regulations (GDPR, ISO 27001, etc.)',
      'Report on security posture to senior leadership',
      'Manage security awareness programmes'
    ],
    entryExpectations: [
      'Understanding of risk management principles',
      'Knowledge of security frameworks and standards',
      'Strong written communication skills',
      'Analytical thinking',
      'Stakeholder management abilities'
    ],
    recommendedCourses: ['isc2_cc', 'isc2_grc', 'isc2_sscp']
  },
  {
    id: 'audit_assurance',
    name: 'Audit & Assurance',
    shortName: 'Security Audit',
    description: 'Independently assess and verify security controls. Ensure organisations meet security standards and regulatory requirements.',
    icon: 'ClipboardCheck',
    color: 'blue',
    traits: {
      governance_policy_interest: 0.35,
      ethical_risk_awareness: 0.30,
      communication_orientation: 0.20,
      problem_solving: 0.15
    },
    responsibilities: [
      'Plan and conduct security audits',
      'Assess compliance with standards and regulations',
      'Evaluate effectiveness of security controls',
      'Prepare audit reports and recommendations',
      'Track remediation of audit findings'
    ],
    entryExpectations: [
      'Understanding of audit methodologies',
      'Knowledge of security standards',
      'Attention to detail',
      'Independence and objectivity',
      'Strong reporting skills'
    ],
    recommendedCourses: ['isc2_cc', 'isc2_grc', 'isc2_sscp']
  },
  {
    id: 'secure_architecture',
    name: 'Secure System Design / Architecture',
    shortName: 'Security Architecture',
    description: 'Design and build security into systems from the ground up. Create secure architectures that protect organisations by design.',
    icon: 'Layers',
    color: 'indigo',
    traits: {
      technical_comfort: 0.35,
      security_operations_interest: 0.20,
      problem_solving: 0.25,
      ethical_risk_awareness: 0.20
    },
    responsibilities: [
      'Design secure system architectures',
      'Define security requirements for new projects',
      'Evaluate and select security technologies',
      'Review designs for security weaknesses',
      'Create security reference architectures'
    ],
    entryExpectations: [
      'Strong technical foundation',
      'Understanding of security principles',
      'Systems thinking approach',
      'Knowledge of cloud and infrastructure',
      'Ability to balance security with usability'
    ],
    recommendedCourses: ['isc2_cc', 'comptia_network', 'isc2_sscp']
  },
  {
    id: 'privacy_data',
    name: 'Privacy & Data Protection',
    shortName: 'Privacy & Data',
    description: 'Protect personal data and ensure privacy compliance. Help organisations handle data ethically and legally.',
    icon: 'Lock',
    color: 'rose',
    traits: {
      ethical_risk_awareness: 0.35,
      governance_policy_interest: 0.30,
      communication_orientation: 0.20,
      problem_solving: 0.15
    },
    responsibilities: [
      'Ensure compliance with data protection regulations',
      'Conduct privacy impact assessments',
      'Develop data protection policies',
      'Handle data subject requests',
      'Train staff on privacy best practices'
    ],
    entryExpectations: [
      'Understanding of privacy regulations (GDPR)',
      'Knowledge of data handling principles',
      'Strong ethical compass',
      'Good communication skills',
      'Attention to detail'
    ],
    recommendedCourses: ['isc2_cc', 'isc2_grc', 'isc2_sscp']
  },
  {
    id: 'cyber_strategy',
    name: 'Cyber Strategy & Advisory',
    shortName: 'Cyber Strategy',
    description: 'Advise organisations at the highest level on cybersecurity strategy. Translate technical risks into business decisions.',
    icon: 'Compass',
    color: 'amber',
    traits: {
      communication_orientation: 0.35,
      governance_policy_interest: 0.25,
      ethical_risk_awareness: 0.20,
      problem_solving: 0.20
    },
    responsibilities: [
      'Develop cybersecurity strategies for organisations',
      'Advise boards and executives on cyber risk',
      'Translate technical risks into business language',
      'Guide security investment decisions',
      'Stay ahead of emerging threats and trends'
    ],
    entryExpectations: [
      'Broad cybersecurity knowledge',
      'Business acumen',
      'Excellent presentation skills',
      'Strategic thinking',
      'Ability to influence stakeholders'
    ],
    recommendedCourses: ['isc2_cc', 'isc2_grc', 'isc2_sscp']
  }
];

export const sycomCourses = [
  {
    id: 'isc2_cc',
    name: 'ISC2 Certified in Cybersecurity (CC)',
    shortName: 'ISC2 CC',
    provider: 'Sycom Academy',
    level: 'Foundation',
    description: 'The perfect starting point for your cybersecurity career. This entry-level certification covers essential security concepts and prepares you for further specialisation.',
    duration: '20-25 hours',
    prerequisites: 'None - suitable for complete beginners',
    topics: [
      'Security Principles',
      'Business Continuity & Disaster Recovery',
      'Access Controls',
      'Network Security',
      'Security Operations'
    ],
    pathways: ['secure_operations', 'security_testing', 'incident_response', 'governance_risk', 'audit_assurance', 'secure_architecture', 'privacy_data', 'cyber_strategy']
  },
  {
    id: 'comptia_network',
    name: 'CompTIA Network+',
    shortName: 'Network+',
    provider: 'Sycom Academy',
    level: 'Foundation',
    description: 'Build a solid foundation in networking concepts. Essential knowledge for any technical cybersecurity role.',
    duration: '40-50 hours',
    prerequisites: 'Basic IT knowledge recommended',
    topics: [
      'Network Architecture',
      'Network Operations',
      'Network Security',
      'Network Troubleshooting',
      'Network Protocols'
    ],
    pathways: ['secure_operations', 'security_testing', 'incident_response', 'secure_architecture']
  },
  {
    id: 'isc2_sscp',
    name: 'ISC2 Systems Security Certified Practitioner (SSCP)',
    shortName: 'ISC2 SSCP',
    provider: 'Sycom Academy',
    level: 'Practitioner',
    description: 'Take your security skills to the next level. This certification validates your ability to implement, monitor, and administer IT infrastructure using security best practices.',
    duration: '30-40 hours',
    prerequisites: 'ISC2 CC or equivalent experience recommended',
    topics: [
      'Access Controls',
      'Security Operations & Administration',
      'Risk Identification, Monitoring & Analysis',
      'Incident Response & Recovery',
      'Cryptography',
      'Network & Communications Security',
      'Systems & Application Security'
    ],
    pathways: ['secure_operations', 'security_testing', 'incident_response', 'secure_architecture']
  },
  {
    id: 'isc2_grc',
    name: 'ISC2 Governance, Risk & Compliance',
    shortName: 'ISC2 GRC',
    provider: 'Sycom Academy',
    level: 'Specialist',
    description: 'Specialise in the governance side of cybersecurity. Learn to manage risk, ensure compliance, and develop security policies.',
    duration: '25-35 hours',
    prerequisites: 'ISC2 CC or equivalent experience recommended',
    topics: [
      'Governance Frameworks',
      'Risk Management',
      'Regulatory Compliance',
      'Policy Development',
      'Security Metrics & Reporting'
    ],
    pathways: ['governance_risk', 'audit_assurance', 'privacy_data', 'cyber_strategy']
  }
];

export default { careerPathways, sycomCourses };