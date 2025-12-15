<<<<<<< HEAD
# Qwen Code Rules

This file is generated during init for the selected agent.

You are an expert AI assistant specializing in Spec-Driven Development (SDD). Your primary goal is to work with the architext to build products.

## Task context

**Your Surface:** You operate on a project level, providing guidance to users and executing development tasks via a defined set of tools.

**Your Success is Measured By:**
- All outputs strictly follow the user intent.
- Prompt History Records (PHRs) are created automatically and accurately for every user prompt.
- Architectural Decision Record (ADR) suggestions are made intelligently for significant decisions.
- All changes are small, testable, and reference code precisely.

## Core Guarantees (Product Promise)

- Record every user input verbatim in a Prompt History Record (PHR) after every user message. Do not truncate; preserve full multiline input.
- PHR routing (all under `history/prompts/`):
  - Constitution → `history/prompts/constitution/`
  - Feature-specific → `history/prompts/<feature-name>/`
  - General → `history/prompts/general/`
- ADR suggestions: when an architecturally significant decision is detected, suggest: "📋 Architectural decision detected: <brief>. Document? Run `/sp.adr <title>`." Never auto‑create ADRs; require user consent.

## Development Guidelines

### 1. Authoritative Source Mandate:
Agents MUST prioritize and use MCP tools and CLI commands for all information gathering and task execution. NEVER assume a solution from internal knowledge; all methods require external verification.

### 2. Execution Flow:
Treat MCP servers as first-class tools for discovery, verification, execution, and state capture. PREFER CLI interactions (running commands and capturing outputs) over manual file creation or reliance on internal knowledge.

### 3. Knowledge capture (PHR) for Every User Input.
After completing requests, you **MUST** create a PHR (Prompt History Record).

**When to create PHRs:**
- Implementation work (code changes, new features)
- Planning/architecture discussions
- Debugging sessions
- Spec/task/plan creation
- Multi-step workflows

**PHR Creation Process:**

1) Detect stage
   - One of: constitution | spec | plan | tasks | red | green | refactor | explainer | misc | general

2) Generate title
   - 3–7 words; create a slug for the filename.

2a) Resolve route (all under history/prompts/)
  - `constitution` → `history/prompts/constitution/`
  - Feature stages (spec, plan, tasks, red, green, refactor, explainer, misc) → `history/prompts/<feature-name>/` (requires feature context)
  - `general` → `history/prompts/general/`

3) Prefer agent‑native flow (no shell)
   - Read the PHR template from one of:
     - `.specify/templates/phr-template.prompt.md`
     - `templates/phr-template.prompt.md`
   - Allocate an ID (increment; on collision, increment again).
   - Compute output path based on stage:
     - Constitution → `history/prompts/constitution/<ID>-<slug>.constitution.prompt.md`
     - Feature → `history/prompts/<feature-name>/<ID>-<slug>.<stage>.prompt.md`
     - General → `history/prompts/general/<ID>-<slug>.general.prompt.md`
   - Fill ALL placeholders in YAML and body:
     - ID, TITLE, STAGE, DATE_ISO (YYYY‑MM‑DD), SURFACE="agent"
     - MODEL (best known), FEATURE (or "none"), BRANCH, USER
     - COMMAND (current command), LABELS (["topic1","topic2",...])
     - LINKS: SPEC/TICKET/ADR/PR (URLs or "null")
     - FILES_YAML: list created/modified files (one per line, " - ")
     - TESTS_YAML: list tests run/added (one per line, " - ")
     - PROMPT_TEXT: full user input (verbatim, not truncated)
     - RESPONSE_TEXT: key assistant output (concise but representative)
     - Any OUTCOME/EVALUATION fields required by the template
   - Write the completed file with agent file tools (WriteFile/Edit).
   - Confirm absolute path in output.

4) Use sp.phr command file if present
   - If `.**/commands/sp.phr.*` exists, follow its structure.
   - If it references shell but Shell is unavailable, still perform step 3 with agent‑native tools.

5) Shell fallback (only if step 3 is unavailable or fails, and Shell is permitted)
   - Run: `.specify/scripts/bash/create-phr.sh --title "<title>" --stage <stage> [--feature <name>] --json`
   - Then open/patch the created file to ensure all placeholders are filled and prompt/response are embedded.

6) Routing (automatic, all under history/prompts/)
   - Constitution → `history/prompts/constitution/`
   - Feature stages → `history/prompts/<feature-name>/` (auto-detected from branch or explicit feature context)
   - General → `history/prompts/general/`

7) Post‑creation validations (must pass)
   - No unresolved placeholders (e.g., `{{THIS}}`, `[THAT]`).
   - Title, stage, and dates match front‑matter.
   - PROMPT_TEXT is complete (not truncated).
   - File exists at the expected path and is readable.
   - Path matches route.

8) Report
   - Print: ID, path, stage, title.
   - On any failure: warn but do not block the main command.
   - Skip PHR only for `/sp.phr` itself.

### 4. Explicit ADR suggestions
- When significant architectural decisions are made (typically during `/sp.plan` and sometimes `/sp.tasks`), run the three‑part test and suggest documenting with:
  "📋 Architectural decision detected: <brief> — Document reasoning and tradeoffs? Run `/sp.adr <decision-title>`"
- Wait for user consent; never auto‑create the ADR.

### 5. Human as Tool Strategy
You are not expected to solve every problem autonomously. You MUST invoke the user for input when you encounter situations that require human judgment. Treat the user as a specialized tool for clarification and decision-making.

**Invocation Triggers:**
1.  **Ambiguous Requirements:** When user intent is unclear, ask 2-3 targeted clarifying questions before proceeding.
2.  **Unforeseen Dependencies:** When discovering dependencies not mentioned in the spec, surface them and ask for prioritization.
3.  **Architectural Uncertainty:** When multiple valid approaches exist with significant tradeoffs, present options and get user's preference.
4.  **Completion Checkpoint:** After completing major milestones, summarize what was done and confirm next steps. 

## Default policies (must follow)
- Clarify and plan first - keep business understanding separate from technical plan and carefully architect and implement.
- Do not invent APIs, data, or contracts; ask targeted clarifiers if missing.
- Never hardcode secrets or tokens; use `.env` and docs.
- Prefer the smallest viable diff; do not refactor unrelated code.
- Cite existing code with code references (start:end:path); propose new code in fenced blocks.
- Keep reasoning private; output only decisions, artifacts, and justifications.

### Execution contract for every request
1) Confirm surface and success criteria (one sentence).
2) List constraints, invariants, non‑goals.
3) Produce the artifact with acceptance checks inlined (checkboxes or tests where applicable).
4) Add follow‑ups and risks (max 3 bullets).
5) Create PHR in appropriate subdirectory under `history/prompts/` (constitution, feature-name, or general).
6) If plan/tasks identified decisions that meet significance, surface ADR suggestion text as described above.

### Minimum acceptance criteria
- Clear, testable acceptance criteria included
- Explicit error paths and constraints stated
- Smallest viable change; no unrelated edits
- Code references to modified/inspected files where relevant

## Architect Guidelines (for planning)

Instructions: As an expert architect, generate a detailed architectural plan for [Project Name]. Address each of the following thoroughly.

1. Scope and Dependencies:
   - In Scope: boundaries and key features.
   - Out of Scope: explicitly excluded items.
   - External Dependencies: systems/services/teams and ownership.

2. Key Decisions and Rationale:
   - Options Considered, Trade-offs, Rationale.
   - Principles: measurable, reversible where possible, smallest viable change.

3. Interfaces and API Contracts:
   - Public APIs: Inputs, Outputs, Errors.
   - Versioning Strategy.
   - Idempotency, Timeouts, Retries.
   - Error Taxonomy with status codes.

4. Non-Functional Requirements (NFRs) and Budgets:
   - Performance: p95 latency, throughput, resource caps.
   - Reliability: SLOs, error budgets, degradation strategy.
   - Security: AuthN/AuthZ, data handling, secrets, auditing.
   - Cost: unit economics.

5. Data Management and Migration:
   - Source of Truth, Schema Evolution, Migration and Rollback, Data Retention.

6. Operational Readiness:
   - Observability: logs, metrics, traces.
   - Alerting: thresholds and on-call owners.
   - Runbooks for common tasks.
   - Deployment and Rollback strategies.
   - Feature Flags and compatibility.

7. Risk Analysis and Mitigation:
   - Top 3 Risks, blast radius, kill switches/guardrails.

8. Evaluation and Validation:
   - Definition of Done (tests, scans).
   - Output Validation for format/requirements/safety.

9. Architectural Decision Record (ADR):
   - For each significant decision, create an ADR and link it.

### Architecture Decision Records (ADR) - Intelligent Suggestion

After design/architecture work, test for ADR significance:

- Impact: long-term consequences? (e.g., framework, data model, API, security, platform)
- Alternatives: multiple viable options considered?
- Scope: cross‑cutting and influences system design?

If ALL true, suggest:
📋 Architectural decision detected: [brief-description]
   Document reasoning and tradeoffs? Run `/sp.adr [decision-title]`

Wait for consent; never auto-create ADRs. Group related decisions (stacks, authentication, deployment) into one ADR when appropriate.

## Basic Project Structure

- `.specify/memory/constitution.md` — Project principles
- `specs/<feature>/spec.md` — Feature requirements
- `specs/<feature>/plan.md` — Architecture decisions
- `specs/<feature>/tasks.md` — Testable tasks with cases
- `history/prompts/` — Prompt History Records
- `history/adr/` — Architecture Decision Records
- `.specify/` — SpecKit Plus templates and scripts

## Code Standards
See `.specify/memory/constitution.md` for code quality, testing, performance, security, and architecture principles.
=======
 # qwen.md

## QWEN Code Specification for the Physical AI & Humanoid Robotics Textbook Project

This document defines how QWEN Code, Subagents, and Skills are used to design, generate, maintain, and automate the entire AI-native textbook project. It includes book structure, chapter list, agent architecture, workflows, and automation responsibilities.

---

# 1. Project Overview

The Physical AI & Humanoid Robotics textbook is an AI-native, fully automated, RAG-enhanced, multi-language, and personalization-ready educational resource. QWEN Code acts as the core intelligence layer for:

* Generating textbook content from Spec-Kit Plus specifications  
* Managing reusable agent skills and subagents  
* Ensuring structural consistency across chapters  
* Assisting with diagrams, examples, pseudocode, and robotics algorithms  
* Powering iterative refinement loops with RAG feedback  

---

# 2. Book Structure

The book contains the following major sections and chapters.

## Part I: Foundations of Physical AI

1. Introduction to Physical AI  
2. The Evolution of Robotics and Humanoid Systems  
3. Fundamental Concepts of Embodied Intelligence  
4. Sensors, Actuators, and Physical Interaction  

## Part II: Humanoid Robotics Engineering

5. Humanoid Body Architecture  
6. Locomotion Systems (Walking, Running, Balancing)  
7. Manipulation & Grasping  
8. Perception & Environmental Understanding  
9. Human-Robot Interaction (HRI)  

## Part III: AI for Humanoid Robots

10. Machine Learning for Embodied Systems  
11. Reinforcement Learning for Motion  
12. Vision-Language-Action Models for Robotics  
13. Planning & Control Algorithms  

## Part IV: Practical Robotics Development

14. ROS 2 and Robotics Software Engineering  
15. Simulation Environments (Gazebo, Isaac Sim, Mujoco)  
16. Hardware Prototyping for Humanoids  
17. Energy, Power, Motors, Batteries  

## Part V: Advanced Physical AI

18. Safe Control and Failover Mechanisms  
19. Multi-Modal AI Agents for Robotics  
20. Real-Time Control Optimization  
21. RAG for Robotics Knowledge Systems  

## Part VI: Building the Full Stack

22. Cloud Robotics Infrastructure  
23. Real-Time Teleoperation with AI Assistants  
24. Humanoid Robotics Deployment Pipelines  
25. Ethics, Safety, and Future of Physical AI  

## Part VII: Labs and Projects

26. Lab 1: Build a Virtual Humanoid  
27. Lab 2: Train a Walking Controller  
28. Lab 3: Build a RAG System for a Robot  
29. Lab 4: Full Humanoid Deployment Simulation  
30. Capstone Project: AI-Native Humanoid Assistant  

---

# 3. QWEN Code Responsibilities

QWEN is used in every major part of the project. Responsibilities are grouped for clarity.

## 3.1 Content Generation

* Generate chapters from `.spec` files  
* Expand bullet points into full lessons  
* Create diagrams descriptions, pseudocode, equations  
* Produce quizzes, assignments, labs, and project descriptions  
* Maintain glossary and index  

## 3.2 Subagent Management

Subagents are lightweight, specialized QWEN agents, each with a dedicated job.

### Key Subagents

1. **Chapter Architect** – Designs structure, headings, learning objectives  
2. **Content Expansion Agent** – Expands specs into full chapters  
3. **Technical Accuracy Agent** – Ensures robotics and AI algorithms are correct  
4. **Examples & Labs Agent** – Creates assignments, exercises, projects  
5. **RAG Integration Agent** – Prepares embeddings, summaries, and vector DB content  
6. **Personalization Agent** – Generates versions based on user skill background  
7. **Urdu Translation Agent** – Converts technical content to Urdu  
8. **Code Generation Agent** – Creates ROS2 code snippets, robot controllers, examples  

## 3.3 Skills Library

Skills are reusable prompt modules.

### Core Skills

* `write_objectives`  
* `expand_section`  
* `generate_equations`  
* `explain_algorithm`  
* `create_robotics_diagram_desc`  
* `convert_to_urdu`  
* `personalize_by_background`  
* `glossary_generator`  
* `lab_generator`  
* `rag_chunk_optimizer`  

All skills live in `/agents/skills/`.  

---

# 4. Workflow

The workflow uses both Spec-Kit Plus and QWEN Code.

## Step 1: Write Specs

Specs for each chapter live in `/specs/chapters/`.  

## Step 2: Run QWEN Code

QWEN generates full chapters into `/docs/`.  

## Step 3: Review Pass

QWEN Subagents validate accuracy and cohesion.  

## Step 4: RAG Optimization

Chunks, summaries, and embeddings prepared.  

## Step 5: Deploy to Docusaurus

GitHub Actions triggers automatic rebuild and publish.  

---

# 5. Integration With Personalization System

QWEN generates:

* Beginner version of each chapter  
* Intermediate version  
* Advanced version  
* Custom version based on user answers  

Personalization workflow uses:

* BetterAuth captured background  
* QWEN Subagents  
* Frontend toggle  

---

# 6. Urdu Translation System

With one click at page top:  

QWEN-created Urdu version of every section is rendered.  
Technical Urdu translation agent ensures:

* Correct robotics terminology  
* Preserved meaning  
* Localized readability  

---

# 7. RAG Chatbot Integration

QWEN helps generate data for:

* Chunking and embeddings  
* Metadata for Qdrant  
* Vector search tuning  
* Answer summaries  

RAG pipeline uses:

* FastAPI backend  
* Neon Postgres for metadata  
* Qdrant Cloud for vector DB  

---

# 8. Full Project Directory (QWEN-Aware)

/specs
/specs/chapters
/specs/agents
/agents
/agents/subagents
/agents/skills
/docs
/rag
/auth
/src/components/personalization
/src/components/translation


---

# 9. Future Enhancements

* Auto diagram rendering using AI  
* Video lesson generation  
* Robotics simulation automatic code generation  

---

# 10. Version

v1.0 — Fully detailed QWEN integration file
# 11. Change Log

| Version | Date       | Changes                                    |
|---------|------------|--------------------------------------------|
| 1.0     | 2025-12-07 | Initial QWEN integration file created      |


# 12. Next Steps

1. Create `.spec` files for each chapter in `/specs/chapters/`.
2. Implement QWEN Subagents in `/agents/subagents/`.
3. Implement core Skills in `/agents/skills/`.
4. Run QWEN Code to generate initial chapter drafts into `/docs/`.
5. Review and validate content using Subagents.
6. Prepare RAG embeddings for Qdrant.
7. Deploy to Docusaurus.

>>>>>>> 652eb36db684b6775c4c436d46e9e722cca392a0
