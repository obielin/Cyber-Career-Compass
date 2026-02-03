# Cyber Career Compass

A React-based career guidance application that helps learners explore cybersecurity pathways via a short assessment, personalised recommendations, and curated learning resources.

## Problem and users
Many early-career learners (students, career changers, and entry-level professionals) struggle to map interests and current skills to realistic cyber roles and UK-relevant learning steps. This tool provides a structured self-assessment and a transparent recommendation workflow.

## What the app does
- Runs a short assessment (interests, experience level, preferred work style)
- Computes role/pathway matches
- Outputs a personalised pathway: recommended roles, skill gaps, and learning resources

## How recommendations work (transparent method)
Recommendations are produced using **[rule-based / weighted scoring / hybrid]** matching:
- Inputs: **[list your assessment dimensions]**
- Scoring: **[e.g., weighted sum with normalised scores; thresholds for “strong match”]**
- Output: top-k pathways + rationale signals (why a pathway is recommended)

Implementation lives in: **`src/[path-to-scoring-logic]`**.

## Evaluation (what we checked)
- **Sanity checks:** deterministic outputs for fixed inputs; edge-case handling (empty/partial responses)
- **Quality checks:** lint + build pass locally; basic unit tests for scoring logic where applicable

## Limitations
- The assessment is not a psychometric instrument; it is a guidance aid.
- Recommendations depend on self-reported inputs and may not capture all background factors.
- Resource lists may drift over time; updates are planned.

## Data & privacy
## Data & privacy
- The app processes assessment answers in the browser to generate pathway recommendations.
- If a user chooses to receive their report by email, the app collects **their email address solely for report delivery**.
- Email addresses are **not used for marketing** and are **not shared with third parties**.
- Stored data (if any) is limited to what is required to send the report and is not retained beyond delivery unless explicitly stated.
- Users may request deletion of their data by opening a GitHub issue or contacting the maintainer.
- See `PRIVACY.md` for details.

## Tech stack
- React (Vite)
- Tailwind CSS
- Framer Motion

## Local development
### Prerequisites
- Node.js **18.x** (recommended)

### Install
```bash
npm install

