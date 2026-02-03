# Cyber Career Compass

A React-based career guidance application that helps learners explore cybersecurity pathways via a short assessment, personalised recommendations, and curated learning resources.

## Problem and users
Many early-career learners (students, career changers, and entry-level professionals) struggle to map interests and current skills to realistic cyber roles and UK-relevant learning steps. This tool provides a structured self-assessment and a transparent recommendation workflow.

## What the app does
- Runs a short assessment (interests, experience level, preferred work style)
- Computes role/pathway matches
- Outputs a personalised pathway: recommended roles, skill gaps, and learning resources

## How recommendations work

The Cyber Career Compass uses a transparent, rule-based scoring approach to generate pathway recommendations.

### 1. Trait scoring
Each quiz question contributes to one or more traits (e.g. technical comfort, problem-solving, investigative curiosity).

- **Likert-scale questions** contribute `weight × response value (1–5)` to the relevant traits.
- **Multiple-choice questions** contribute fixed trait weights based on the selected option.

Trait scores are accumulated across all questions.

### 2. Normalisation
Raw trait totals are normalised to a **0–100 scale**.  
The maximum possible score for each trait is derived from the quiz design itself, ensuring that scores are comparable across users.

### 3. Pathway matching
Each career pathway defines a weighted trait profile indicating which traits are most important for that role.

For each pathway:
- The user’s normalised trait scores are combined using the pathway’s trait weights.
- A weighted average produces a **pathway match score (0–100)**.
- The top three pathways by match score are returned.

### 4. Explainability
To support interpretability, the app identifies the strongest contributing traits for each matched pathway and generates a short natural-language explanation (e.g. highlighting technical aptitude or investigative curiosity).

### 5. Learning recommendations
Associated courses are recommended based on:
- Alignment with the matched pathways
- Course level (foundation courses prioritised for early-career users)

### Implementation
- Trait scoring and pathway matching logic: `src/components/quiz/scoringEngine.jsx`
- Quiz structure and trait mappings: `src/components/quiz/quizQuestions.jsx`
- Pathway definitions and course mappings: `src/components/quiz/careerPathways.jsx`

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

