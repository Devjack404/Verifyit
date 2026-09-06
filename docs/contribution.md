````md
# Contributing to VerifyIt

Thank you for your interest in contributing to VerifyIt.

VerifyIt is a URL analysis project designed to analyze URLs, collect security-related evidence, execute detection rules, and produce an understandable analysis result.

This document explains how to contribute to the project, including development setup, coding conventions, architecture, testing, Git workflow, Pull Requests, and security considerations.

---

## Table of Contents

- [About VerifyIt](#about-verifyit)
- [Development Philosophy](#development-philosophy)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Architecture](#architecture)
- [Rules](#rules)
- [Evidence](#evidence)
- [Rule Results](#rule-results)
- [Risk Analysis](#risk-analysis)
- [Testing](#testing)
- [Coding Guidelines](#coding-guidelines)
- [TypeScript Guidelines](#typescript-guidelines)
- [Error Handling](#error-handling)
- [Logging](#logging)
- [Security Guidelines](#security-guidelines)
- [Git Workflow](#git-workflow)
- [Branch Naming](#branch-naming)
- [Commit Convention](#commit-convention)
- [Pull Requests](#pull-requests)
- [Issue Guidelines](#issue-guidelines)
- [Adding a New Rule](#adding-a-new-rule)
- [Adding New Evidence](#adding-new-evidence)
- [Dependencies](#dependencies)
- [Code Review](#code-review)
- [Development Checklist](#development-checklist)
- [Future Development](#future-development)
- [License](#license)

---

# About VerifyIt

VerifyIt is a project focused on analyzing URLs and identifying characteristics that may indicate potential security risks.

The main analysis flow is:

```text
User Input
    |
    v
URL Validation
    |
    v
URL Parsing
    |
    v
Evidence Collection
    |
    v
Rule Engine
    |
    v
Rule Results
    |
    v
Risk Analyzer
    |
    v
Final Analysis
````

The project intentionally separates:

* URL parsing
* Evidence collection
* Detection rules
* Risk analysis
* API/application logic

This separation makes the project easier to maintain, test, and extend.

---

# Development Philosophy

VerifyIt follows several important principles.

## 1. Correctness First

The first priority is producing correct and explainable results.

Do not add complexity simply to make the project look more advanced.

Prefer:

```text
Simple
   |
   v
Correct
   |
   v
Tested
   |
   v
Refactored
   |
   v
Scalable
```

---

## 2. Separation of Concerns

Each component should have one clear responsibility.

For example:

```text
URL Parser
    |
    v
Evidence Collector
    |
    v
Rules
    |
    v
Risk Analyzer
```

Avoid putting everything inside one function.

---

## 3. Evidence Before Conclusion

VerifyIt should distinguish between:

```text
FACT
```

and:

```text
CONCLUSION
```

For example:

```text
Evidence:
Hostname = 1.1.1.1
```

is a fact.

While:

```text
URL is malicious
```

is a conclusion.

A rule may interpret evidence, while the risk analyzer can combine multiple rule results.

---

## 4. Explainability

Every important analysis result should be explainable.

Instead of:

```text
Risk: HIGH
```

prefer something like:

```text
Risk: HIGH

Reasons:
- Hostname uses an IP address.
- Domain uses punycode.
- URL contains a suspicious port.

Evidence:
- Hostname: 1.1.1.1
- Domain: xn--example...
- Port: 4444
```

This makes VerifyIt easier to understand and debug.

---

# Getting Started

## Requirements

Make sure the following tools are installed:

* Node.js
* pnpm
* Git
* TypeScript

Check your installation:

```bash
node --version
pnpm --version
git --version
```

---

## Clone Repository

Clone the repository:

```bash
git clone <repository-url>
```

Enter the project directory:

```bash
cd verifyIt
```

---

## Install Dependencies

Install dependencies:

```bash
pnpm install
```

---

## Run Development Server

If the project has a development script:

```bash
pnpm dev
```

If you want to execute a TypeScript file directly:

```bash
pnpm tsx src/index.ts
```

---

## Build

Before submitting a Pull Request, make sure the project can build successfully.

```bash
pnpm build
```

---

## Run Tests

Run the test suite:

```bash
pnpm test
```

If a watch mode is available:

```bash
pnpm test:watch
```

---

# Project Structure

The project structure may evolve over time.

A recommended structure is:

```text
verifyIt/
│
├── src/
│   │
│   ├── rules/
│   │   ├── checkUsesIP.ts
│   │   ├── checkProtocol.ts
│   │   ├── checkDomain.ts
│   │   └── index.ts
│   │
│   ├── evidence/
│   │   ├── collector.ts
│   │   ├── types.ts
│   │   └── index.ts
│   │
│   ├── analyzer/
│   │   ├── riskAnalyzer.ts
│   │   └── index.ts
│   │
│   ├── services/
│   │   ├── dns.ts
│   │   ├── http.ts
│   │   └── ...
│   │
│   ├── types/
│   │   ├── rule.ts
│   │   ├── evidence.ts
│   │   └── analysis.ts
│   │
│   ├── utils/
│   │   └── ...
│   │
│   └── index.ts
│
├── tests/
│   ├── rules/
│   ├── evidence/
│   ├── analyzer/
│   └── ...
│
├── CONTRIBUTING.md
├── README.md
├── LICENSE
├── package.json
├── tsconfig.json
└── .gitignore
```

The exact structure can change as the application grows.

---

# Architecture

The general architecture is:

```text
                    URL
                     |
                     v
              +-------------+
              | URL Parser  |
              +------+------+
                     |
                     v
           +-------------------+
           | Evidence Collector|
           +---------+---------+
                     |
                     v
              +-------------+
              | Rule Engine |
              +------+------+ 
                     |
          +----------+----------+
          |          |          |
          v          v          v
       Rule 1      Rule 2     Rule 3
          |          |          |
          +----------+----------+
                     |
                     v
              Rule Results
                     |
                     v
              Risk Analyzer
                     |
                     v
              Final Result
```

The architecture should allow new rules to be added without rewriting the entire application.

---

# Rules

Rules are responsible for detecting specific characteristics.

Examples:

```text
HOST_IS_IP
INVALID_URL
SUSPICIOUS_PROTOCOL
SUSPICIOUS_PORT
PUNYCODE_DOMAIN
EXCESSIVE_SUBDOMAIN
SUSPICIOUS_CHARACTER
LONG_URL
SUSPICIOUS_PATH
```

A rule should have a focused responsibility.

---

## Example: IP Detection

One of the rules may determine whether a hostname is an IPv4 or IPv6 address.

Example:

```ts
import net from "node:net";

function checkUsesIP(urlText: string): string {
    try {
        const urlObject = new URL(urlText);
        const hostname = urlObject.hostname;

        const ipAddress = hostname.replace(/^\[|\]$/g, "");
        const ipVersion = net.isIP(ipAddress);

        if (ipVersion === 4) {
            return "Hostname menggunakan IPv4";
        }

        if (ipVersion === 6) {
            return "Hostname menggunakan IPv6";
        }

        return "Hostname menggunakan domain";
    } catch {
        return "Format URL tidak valid";
    }
}
```

Node.js `net.isIP()` returns:

```text
0 -> Not an IP address
4 -> IPv4
6 -> IPv6
```

---

## IPv4 Example

```text
http://1.1.1.1
```

Expected:

```text
IPv4
```

---

## IPv6 Example

IPv6 addresses in URLs must use brackets:

```text
http://[::1]
```

or:

```text
http://[2001:db8::1]
```

Expected:

```text
IPv6
```

---

## Domain Example

```text
https://example.com
```

Expected:

```text
Domain
```

---

## Important Rule Limitation

Do not assume:

```ts
net.isIP(hostname) === 0
```

means:

```text
Valid domain
```

It only means:

```text
The value is not recognized as IPv4 or IPv6.
```

For example:

```text
1.1.1.1.1.1
```

is not a valid IPv4 address, but it should not automatically be treated as a valid domain.

Domain validation is a separate concern.

---

# Rule Responsibilities

A rule should:

1. Receive required input.
2. Analyze the input.
3. Produce a structured result.
4. Provide evidence where appropriate.
5. Remain focused on one detection responsibility.

A rule should not unnecessarily:

* Access the database.
* Start an HTTP server.
* Handle API routing.
* Perform unrelated network operations.
* Calculate the entire risk score.
* Modify unrelated application state.

---

# Rule Naming

Use descriptive names.

Good:

```text
checkUsesIP
checkProtocol
checkDomain
checkSuspiciousPort
```

Avoid:

```text
check1
doThing
analyzeData
processURL
```

Rule identifiers should also be stable.

Example:

```text
HOST_IS_IP
SUSPICIOUS_PORT
PUNYCODE_DOMAIN
```

---

# Evidence

Evidence represents factual information discovered during analysis.

Evidence answers:

> "What did we observe?"

Evidence should not directly answer:

> "Is this URL malicious?"

---

## Example

URL:

```text
http://1.1.1.1
```

Evidence:

```ts
{
    type: "ip_address",
    value: "1.1.1.1",
    source: "url.hostname"
}
```

This is useful because the evidence is factual and can be consumed by multiple rules.

---

# Evidence Structure

A basic evidence structure may look like:

```ts
type Evidence = {
    type: string;
    value: string;
    source: string;
};
```

For example:

```ts
const evidence: Evidence = {
    type: "hostname",
    value: "example.com",
    source: "url.hostname"
};
```

---

# Evidence Categories

## URL Evidence

Examples:

```text
original URL
protocol
hostname
port
pathname
query
fragment
```

Example:

```ts
{
    type: "hostname",
    value: "example.com",
    source: "url.hostname"
}
```

---

## Network Evidence

Potential evidence:

```text
IPv4
IPv6
DNS records
resolved IP
port
HTTP status
redirect chain
TLS information
```

---

## Domain Evidence

Potential evidence:

```text
domain
TLD
domain length
subdomain count
punycode
suspicious characters
```

---

## External Evidence

Future external sources may provide:

```text
IP reputation
Domain reputation
Threat intelligence
DNS intelligence
Certificate information
```

External evidence should always identify its source.

Example:

```ts
{
    type: "reputation",
    value: "suspicious",
    source: "external-service"
}
```

---

# Evidence Principles

Evidence should be:

* Factual
* Relevant
* Traceable
* Structured
* Reusable
* As reproducible as possible

Avoid:

```ts
{
    type: "warning",
    value: "URL is dangerous"
}
```

Prefer:

```ts
{
    type: "ip_address",
    value: "1.1.1.1",
    source: "url.hostname"
}
```

---

# Rule Results

Rules should eventually return structured results.

Example:

```ts
type RuleResult = {
    rule: string;
    passed: boolean;
    severity: "info" | "low" | "medium" | "high";
    message: string;
    evidence: Evidence[];
};
```

Example result:

```ts
{
    rule: "HOST_IS_IP",
    passed: false,
    severity: "medium",
    message: "Hostname menggunakan alamat IP",
    evidence: [
        {
            type: "ip_address",
            value: "1.1.1.1",
            source: "url.hostname"
        }
    ]
}
```

Structured results make it easier for the Rule Engine and Risk Analyzer to process multiple rules consistently.

---

# Risk Analysis

Risk analysis should be separated from individual detection rules.

Example:

```text
HOST_IS_IP
severity: medium

SUSPICIOUS_PORT
severity: low

PUNYCODE_DOMAIN
severity: high
```

The Risk Analyzer can combine these results.

Example:

```text
Rule Results
     |
     v
Risk Analyzer
     |
     +-- Score
     |
     +-- Level
     |
     +-- Summary
```

Possible output:

```ts
{
    score: 75,
    level: "high"
}
```

The exact scoring system may evolve.

---

# Risk Principle

A single characteristic should not automatically be treated as proof that a URL is malicious.

For example:

```text
Hostname uses an IP address
```

does not necessarily mean:

```text
URL is malicious
```

Instead:

```text
Evidence
    |
    v
Rule
    |
    v
Rule Result
    |
    v
Risk Analyzer
    |
    v
Risk Level
```

This approach makes the analysis more explainable and less likely to produce misleading conclusions.

---

# Testing

Every new rule should have tests.

Tests should cover:

* Normal input
* Positive case
* Negative case
* Invalid input
* Edge cases

---

# Example Test Cases

For IP detection:

```text
http://1.1.1.1
```

Expected:

```text
IPv4
```

---

```text
http://[::1]
```

Expected:

```text
IPv6
```

---

```text
http://[2001:db8::1]
```

Expected:

```text
IPv6
```

---

```text
https://example.com
```

Expected:

```text
Domain
```

---

```text
invalid-url
```

Expected:

```text
Invalid URL
```

---

# Edge Cases

Consider cases such as:

```text
http://1.1.1.1
http://[::1]
http://[2001:db8::1]
https://example.com
https://sub.example.com
https://example.com:8080
http://1.1.1.1.1.1
invalid-url
```

Do not only test the "happy path".

---

# Coding Guidelines

## Naming

Use descriptive names.

Avoid:

```ts
const x = ...
const d = ...
const data = ...
```

Prefer:

```ts
const hostname = ...
const ipVersion = ...
const ruleResult = ...
const evidence = ...
```

---

## Functions

Functions should have a clear responsibility.

Good:

```ts
function checkUsesIP(urlText: string) {
    // IP detection
}
```

Avoid:

```ts
function analyzeURL() {
    // parse URL
    // validate URL
    // query DNS
    // make HTTP request
    // calculate score
    // save database
}
```

---

## Variables

Prefer `const` by default.

```ts
const hostname = url.hostname;
```

Use `let` only when reassignment is necessary.

---

# TypeScript Guidelines

VerifyIt is written in TypeScript.

Avoid unnecessary `any`.

Avoid:

```ts
const result: any = ...
```

Prefer:

```ts
const result: RuleResult = ...
```

---

## Types

Use types or interfaces for important data structures.

Example:

```ts
interface Evidence {
    type: string;
    value: string;
    source: string;
}
```

And:

```ts
interface RuleResult {
    rule: string;
    passed: boolean;
    severity: "info" | "low" | "medium" | "high";
    message: string;
    evidence: Evidence[];
}
```

---

# Error Handling

Errors should be handled at the correct layer.

For invalid user input:

```text
Validation Error
```

For unexpected internal errors:

```text
Log Error
    |
    v
Return Appropriate Application Error
```

Avoid silently ignoring unexpected errors.

---

# Catch Blocks

If the error object is not needed:

```ts
try {
    // ...
} catch {
    // handle error
}
```

Prefer this over:

```ts
try {
    // ...
} catch (err) {
    // err is never used
}
```

---

# Logging

Logs should help developers understand what is happening.

Example:

```text
[LOG] Info: Hostname "example.com" menggunakan domain biasa.
```

Warning:

```text
[LOG] Warning: Hostname "1.1.1.1" terdeteksi sebagai IPv4.
```

Error:

```text
[LOG] Error: Format URL tidak valid.
```

Do not log sensitive information.

Avoid unnecessarily verbose logs.

---

# Security Guidelines

VerifyIt handles untrusted user input.

All user-provided URLs must be treated as untrusted.

Potential security concerns include:

* SSRF
* Malicious redirects
* Internal IP addresses
* DNS rebinding
* Unsafe protocols
* Unexpected ports
* Resource exhaustion
* Malicious URL payloads
* External service abuse

---

# SSRF

If VerifyIt eventually makes HTTP requests to URLs submitted by users, do not blindly perform:

```ts
await fetch(userProvidedUrl);
```

without proper validation and network restrictions.

Potentially dangerous targets include:

```text
localhost
127.0.0.1
private IP ranges
link-local addresses
internal hostnames
cloud metadata endpoints
```

Network access must be carefully controlled.

---

# Secrets

Never commit secrets.

Do not commit:

```text
.env
API keys
Passwords
Access tokens
Private keys
Credentials
```

Use environment variables instead.

Example:

```ts
const apiKey = process.env.API_KEY;
```

---

# Git Workflow

Use feature branches instead of directly modifying `main`.

Example:

```text
main
 |
 +-- feature/ipv6-detection
 |
 +-- feature/rule-engine
 |
 +-- fix/url-validation
 |
 +-- refactor/evidence-system
```

---

# Branch Naming

## Feature

```text
feature/<name>
```

Examples:

```text
feature/ipv6-detection
feature/rule-engine
feature/evidence-system
feature/risk-analyzer
```

---

## Bug Fix

```text
fix/<name>
```

Examples:

```text
fix/ipv6-detection
fix/url-validation
fix/domain-parser
```

---

## Refactoring

```text
refactor/<name>
```

Examples:

```text
refactor/rule-engine
refactor/evidence-model
```

---

## Documentation

```text
docs/<name>
```

Example:

```text
docs/contributing
```

---

# Commit Convention

Use:

```text
<type>: <description>
```

Available types:

| Type       | Purpose       |
| ---------- | ------------- |
| `feat`     | New feature   |
| `fix`      | Bug fix       |
| `refactor` | Refactoring   |
| `test`     | Tests         |
| `docs`     | Documentation |
| `chore`    | Maintenance   |
| `perf`     | Performance   |
| `build`    | Build changes |
| `ci`       | CI/CD changes |

---

# Commit Examples

Good:

```text
feat: add IPv6 detection rule
```

```text
fix: handle IPv6 hostname brackets
```

```text
test: add IPv4 detection cases
```

```text
refactor: separate evidence from rule result
```

```text
docs: update contributing guide
```

```text
chore: update dependencies
```

---

# Commit Best Practices

Keep commits focused.

Avoid:

```text
feat: add rule engine + database + API + fix unrelated bug
```

Prefer:

```text
feat: add rule engine
```

Then:

```text
test: add rule engine tests
```

Then:

```text
docs: document rule engine
```

Small commits make code review easier.

---

# Pull Requests

Every Pull Request should explain:

### What?

What changed?

### Why?

Why was it necessary?

### How?

How was it implemented?

---

# Pull Request Template

```md
## Summary

Describe the changes made in this PR.

## Motivation

Explain why this change is necessary.

## Changes

- Change 1
- Change 2
- Change 3

## Testing

- [ ] Unit tests
- [ ] Integration tests
- [ ] Manual testing

## Security Considerations

Describe any security implications.

## Checklist

- [ ] Code follows project conventions
- [ ] Tests pass
- [ ] TypeScript builds successfully
- [ ] No secrets committed
- [ ] No unnecessary dependencies added
- [ ] Documentation updated if necessary
```

---

# Pull Request Size

Prefer small and focused Pull Requests.

Good:

```text
PR #1
Add IPv4 and IPv6 detection
```

Then:

```text
PR #2
Add domain validation
```

Then:

```text
PR #3
Add rule engine
```

Avoid combining many unrelated features into one PR.

---

# Issue Guidelines

Issues can be used for:

* Bug reports
* Feature requests
* Documentation improvements
* Security concerns
* Architecture discussions
* Performance problems

---

# Bug Report

Use this structure:

```md
## Description

Describe the problem.

## Steps to Reproduce

1. Run ...
2. Input ...
3. Observe ...

## Expected Behavior

What should happen?

## Actual Behavior

What actually happens?

## Environment

Node.js:
pnpm:
OS:
```

---

# Feature Request

Use:

```md
## Feature

Describe the proposed feature.

## Motivation

Why is this feature useful?

## Proposed Implementation

Describe a possible implementation.

## Alternatives

Describe alternative approaches.
```

---

# Adding a New Rule

When adding a new rule, follow these steps.

## Step 1 — Define the Purpose

Clearly define what the rule detects.

Example:

```text
HOST_IS_IP

Detect whether the hostname is an IPv4 or IPv6 address.
```

---

## Step 2 — Identify Required Evidence

Determine what information the rule needs.

Example:

```text
hostname
IP version
```

---

## Step 3 — Implement the Rule

Keep the rule focused.

Example:

```ts
function checkUsesIP(...) {
    // Detect IP
}
```

---

## Step 4 — Produce a Structured Result

Prefer:

```ts
{
    rule: "HOST_IS_IP",
    passed: false,
    severity: "medium",
    message: "Hostname menggunakan alamat IP",
    evidence: [...]
}
```

Instead of:

```ts
return "URL menggunakan IP";
```Tentu. Berikut **`CONTRIBUTING.md` full** yang bisa langsung kamu jadikan file di repository **VerifyIt**.

````md
# Contributing to VerifyIt

Thank you for your interest in contributing to VerifyIt.

VerifyIt is a URL analysis project designed to analyze URLs, collect security-related evidence, execute detection rules, and produce an understandable analysis result.

This document explains how to contribute to the project, including development setup, coding conventions, architecture, testing, Git workflow, Pull Requests, and security considerations.

---

## Table of Contents

- [About VerifyIt](#about-verifyit)
- [Development Philosophy](#development-philosophy)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Architecture](#architecture)
- [Rules](#rules)
- [Evidence](#evidence)
- [Rule Results](#rule-results)
- [Risk Analysis](#risk-analysis)
- [Testing](#testing)
- [Coding Guidelines](#coding-guidelines)
- [TypeScript Guidelines](#typescript-guidelines)
- [Error Handling](#error-handling)
- [Logging](#logging)
- [Security Guidelines](#security-guidelines)
- [Git Workflow](#git-workflow)
- [Branch Naming](#branch-naming)
- [Commit Convention](#commit-convention)
- [Pull Requests](#pull-requests)
- [Issue Guidelines](#issue-guidelines)
- [Adding a New Rule](#adding-a-new-rule)
- [Adding New Evidence](#adding-new-evidence)
- [Dependencies](#dependencies)
- [Code Review](#code-review)
- [Development Checklist](#development-checklist)
- [Future Development](#future-development)
- [License](#license)

---

# About VerifyIt

VerifyIt is a project focused on analyzing URLs and identifying characteristics that may indicate potential security risks.

The main analysis flow is:

```text
User Input
    |
    v
URL Validation
    |
    v
URL Parsing
    |
    v
Evidence Collection
    |
    v
Rule Engine
    |
    v
Rule Results
    |
    v
Risk Analyzer
    |
    v
Final Analysis
````

The project intentionally separates:

* URL parsing
* Evidence collection
* Detection rules
* Risk analysis
* API/application logic

This separation makes the project easier to maintain, test, and extend.

---

# Development Philosophy

VerifyIt follows several important principles.

## 1. Correctness First

The first priority is producing correct and explainable results.

Do not add complexity simply to make the project look more advanced.

Prefer:

```text
Simple
   |
   v
Correct
   |
   v
Tested
   |
   v
Refactored
   |
   v
Scalable
```

---

## 2. Separation of Concerns

Each component should have one clear responsibility.

For example:

```text
URL Parser
    |
    v
Evidence Collector
    |
    v
Rules
    |
    v
Risk Analyzer
```

Avoid putting everything inside one function.

---

## 3. Evidence Before Conclusion

VerifyIt should distinguish between:

```text
FACT
```

and:

```text
CONCLUSION
```

For example:

```text
Evidence:
Hostname = 1.1.1.1
```

is a fact.

While:

```text
URL is malicious
```

is a conclusion.

A rule may interpret evidence, while the risk analyzer can combine multiple rule results.

---

## 4. Explainability

Every important analysis result should be explainable.

Instead of:

```text
Risk: HIGH
```

prefer something like:

```text
Risk: HIGH

Reasons:
- Hostname uses an IP address.
- Domain uses punycode.
- URL contains a suspicious port.

Evidence:
- Hostname: 1.1.1.1
- Domain: xn--example...
- Port: 4444
```

This makes VerifyIt easier to understand and debug.

---

# Getting Started

## Requirements

Make sure the following tools are installed:

* Node.js
* pnpm
* Git
* TypeScript

Check your installation:

```bash
node --version
pnpm --version
git --version
```

---

## Clone Repository

Clone the repository:

```bash
git clone <repository-url>
```

Enter the project directory:

```bash
cd verifyIt
```

---

## Install Dependencies

Install dependencies:

```bash
pnpm install
```

---

## Run Development Server

If the project has a development script:

```bash
pnpm dev
```

If you want to execute a TypeScript file directly:

```bash
pnpm tsx src/index.ts
```

---

## Build

Before submitting a Pull Request, make sure the project can build successfully.

```bash
pnpm build
```

---

## Run Tests

Run the test suite:

```bash
pnpm test
```

If a watch mode is available:

```bash
pnpm test:watch
```

---

# Project Structure

The project structure may evolve over time.

A recommended structure is:

```text
verifyIt/
│
├── src/
│   │
│   ├── rules/
│   │   ├── checkUsesIP.ts
│   │   ├── checkProtocol.ts
│   │   ├── checkDomain.ts
│   │   └── index.ts
│   │
│   ├── evidence/
│   │   ├── collector.ts
│   │   ├── types.ts
│   │   └── index.ts
│   │
│   ├── analyzer/
│   │   ├── riskAnalyzer.ts
│   │   └── index.ts
│   │
│   ├── services/
│   │   ├── dns.ts
│   │   ├── http.ts
│   │   └── ...
│   │
│   ├── types/
│   │   ├── rule.ts
│   │   ├── evidence.ts
│   │   └── analysis.ts
│   │
│   ├── utils/
│   │   └── ...
│   │
│   └── index.ts
│
├── tests/
│   ├── rules/
│   ├── evidence/
│   ├── analyzer/
│   └── ...
│
├── CONTRIBUTING.md
├── README.md
├── LICENSE
├── package.json
├── tsconfig.json
└── .gitignore
```

The exact structure can change as the application grows.

---

# Architecture

The general architecture is:

```text
                    URL
                     |
                     v
              +-------------+
              | URL Parser  |
              +------+------+
                     |
                     v
           +-------------------+
           | Evidence Collector|
           +---------+---------+
                     |
                     v
              +-------------+
              | Rule Engine |
              +------+------+ 
                     |
          +----------+----------+
          |          |          |
          v          v          v
       Rule 1      Rule 2     Rule 3
          |          |          |
          +----------+----------+
                     |
                     v
              Rule Results
                     |
                     v
              Risk Analyzer
                     |
                     v
              Final Result
```

The architecture should allow new rules to be added without rewriting the entire application.

---

# Rules

Rules are responsible for detecting specific characteristics.

Examples:

```text
HOST_IS_IP
INVALID_URL
SUSPICIOUS_PROTOCOL
SUSPICIOUS_PORT
PUNYCODE_DOMAIN
EXCESSIVE_SUBDOMAIN
SUSPICIOUS_CHARACTER
LONG_URL
SUSPICIOUS_PATH
```

A rule should have a focused responsibility.

---

## Example: IP Detection

One of the rules may determine whether a hostname is an IPv4 or IPv6 address.

Example:

```ts
import net from "node:net";

function checkUsesIP(urlText: string): string {
    try {
        const urlObject = new URL(urlText);
        const hostname = urlObject.hostname;

        const ipAddress = hostname.replace(/^\[|\]$/g, "");
        const ipVersion = net.isIP(ipAddress);

        if (ipVersion === 4) {
            return "Hostname menggunakan IPv4";
        }

        if (ipVersion === 6) {
            return "Hostname menggunakan IPv6";
        }

        return "Hostname menggunakan domain";
    } catch {
        return "Format URL tidak valid";
    }
}
```

Node.js `net.isIP()` returns:

```text
0 -> Not an IP address
4 -> IPv4
6 -> IPv6
```

---

## IPv4 Example

```text
http://1.1.1.1
```

Expected:

```text
IPv4
```

---

## IPv6 Example

IPv6 addresses in URLs must use brackets:

```text
http://[::1]
```

or:

```text
http://[2001:db8::1]
```

Expected:

```text
IPv6
```

---

## Domain Example

```text
https://example.com
```

Expected:

```text
Domain
```

---

## Important Rule Limitation

Do not assume:

```ts
net.isIP(hostname) === 0
```

means:

```text
Valid domain
```

It only means:

```text
The value is not recognized as IPv4 or IPv6.
```

For example:

```text
1.1.1.1.1.1
```

is not a valid IPv4 address, but it should not automatically be treated as a valid domain.

Domain validation is a separate concern.

---

# Rule Responsibilities

A rule should:

1. Receive required input.
2. Analyze the input.
3. Produce a structured result.
4. Provide evidence where appropriate.
5. Remain focused on one detection responsibility.

A rule should not unnecessarily:

* Access the database.
* Start an HTTP server.
* Handle API routing.
* Perform unrelated network operations.
* Calculate the entire risk score.
* Modify unrelated application state.

---

# Rule Naming

Use descriptive names.

Good:

```text
checkUsesIP
checkProtocol
checkDomain
checkSuspiciousPort
```

Avoid:

```text
check1
doThing
analyzeData
processURL
```

Rule identifiers should also be stable.

Example:

```text
HOST_IS_IP
SUSPICIOUS_PORT
PUNYCODE_DOMAIN
```

---

# Evidence

Evidence represents factual information discovered during analysis.

Evidence answers:

> "What did we observe?"

Evidence should not directly answer:

> "Is this URL malicious?"

---

## Example

URL:

```text
http://1.1.1.1
```

Evidence:

```ts
{
    type: "ip_address",
    value: "1.1.1.1",
    source: "url.hostname"
}
```

This is useful because the evidence is factual and can be consumed by multiple rules.

---

# Evidence Structure

A basic evidence structure may look like:

```ts
type Evidence = {
    type: string;
    value: string;
    source: string;
};
```

For example:

```ts
const evidence: Evidence = {
    type: "hostname",
    value: "example.com",
    source: "url.hostname"
};
```

---

# Evidence Categories

## URL Evidence

Examples:

```text
original URL
protocol
hostname
port
pathname
query
fragment
```

Example:

```ts
{
    type: "hostname",
    value: "example.com",
    source: "url.hostname"
}
```

---

## Network Evidence

Potential evidence:

```text
IPv4
IPv6
DNS records
resolved IP
port
HTTP status
redirect chain
TLS information
```

---

## Domain Evidence

Potential evidence:

```text
domain
TLD
domain length
subdomain count
punycode
suspicious characters
```

---

## External Evidence

Future external sources may provide:

```text
IP reputation
Domain reputation
Threat intelligence
DNS intelligence
Certificate information
```

External evidence should always identify its source.

Example:

```ts
{
    type: "reputation",
    value: "suspicious",
    source: "external-service"
}
```

---

# Evidence Principles

Evidence should be:

* Factual
* Relevant
* Traceable
* Structured
* Reusable
* As reproducible as possible

Avoid:

```ts
{
    type: "warning",
    value: "URL is dangerous"
}
```

Prefer:

```ts
{
    type: "ip_address",
    value: "1.1.1.1",
    source: "url.hostname"
}
```

---

# Rule Results

Rules should eventually return structured results.

Example:

```ts
type RuleResult = {
    rule: string;
    passed: boolean;
    severity: "info" | "low" | "medium" | "high";
    message: string;
    evidence: Evidence[];
};
```

Example result:

```ts
{
    rule: "HOST_IS_IP",
    passed: false,
    severity: "medium",
    message: "Hostname menggunakan alamat IP",
    evidence: [
        {
            type: "ip_address",
            value: "1.1.1.1",
            source: "url.hostname"
        }
    ]
}
```

Structured results make it easier for the Rule Engine and Risk Analyzer to process multiple rules consistently.

---

# Risk Analysis

Risk analysis should be separated from individual detection rules.

Example:

```text
HOST_IS_IP
severity: medium

SUSPICIOUS_PORT
severity: low

PUNYCODE_DOMAIN
severity: high
```

The Risk Analyzer can combine these results.

Example:

```text
Rule Results
     |
     v
Risk Analyzer
     |
     +-- Score
     |
     +-- Level
     |
     +-- Summary
```

Possible output:

```ts
{
    score: 75,
    level: "high"
}
```

The exact scoring system may evolve.

---

# Risk Principle

A single characteristic should not automatically be treated as proof that a URL is malicious.

For example:

```text
Hostname uses an IP address
```

does not necessarily mean:

```text
URL is malicious
```

Instead:

```text
Evidence
    |
    v
Rule
    |
    v
Rule Result
    |
    v
Risk Analyzer
    |
    v
Risk Level
```

This approach makes the analysis more explainable and less likely to produce misleading conclusions.

---

# Testing

Every new rule should have tests.

Tests should cover:

* Normal input
* Positive case
* Negative case
* Invalid input
* Edge cases

---

# Example Test Cases

For IP detection:

```text
http://1.1.1.1
```

Expected:

```text
IPv4
```

---

```text
http://[::1]
```

Expected:

```text
IPv6
```

---

```text
http://[2001:db8::1]
```

Expected:

```text
IPv6
```

---

```text
https://example.com
```

Expected:

```text
Domain
```

---

```text
invalid-url
```

Expected:

```text
Invalid URL
```

---

# Edge Cases

Consider cases such as:

```text
http://1.1.1.1
http://[::1]
http://[2001:db8::1]
https://example.com
https://sub.example.com
https://example.com:8080
http://1.1.1.1.1.1
invalid-url
```

Do not only test the "happy path".

---

# Coding Guidelines

## Naming

Use descriptive names.

Avoid:

```ts
const x = ...
const d = ...
const data = ...
```

Prefer:

```ts
const hostname = ...
const ipVersion = ...
const ruleResult = ...
const evidence = ...
```

---

## Functions

Functions should have a clear responsibility.

Good:

```ts
function checkUsesIP(urlText: string) {
    // IP detection
}
```

Avoid:

```ts
function analyzeURL() {
    // parse URL
    // validate URL
    // query DNS
    // make HTTP request
    // calculate score
    // save database
}
```

---

## Variables

Prefer `const` by default.

```ts
const hostname = url.hostname;
```

Use `let` only when reassignment is necessary.

---

# TypeScript Guidelines

VerifyIt is written in TypeScript.

Avoid unnecessary `any`.

Avoid:

```ts
const result: any = ...
```

Prefer:

```ts
const result: RuleResult = ...
```

---

## Types

Use types or interfaces for important data structures.

Example:

```ts
interface Evidence {
    type: string;
    value: string;
    source: string;
}
```

And:

```ts
interface RuleResult {
    rule: string;
    passed: boolean;
    severity: "info" | "low" | "medium" | "high";
    message: string;
    evidence: Evidence[];
}
```

---

# Error Handling

Errors should be handled at the correct layer.

For invalid user input:

```text
Validation Error
```

For unexpected internal errors:

```text
Log Error
    |
    v
Return Appropriate Application Error
```

Avoid silently ignoring unexpected errors.

---

# Catch Blocks

If the error object is not needed:

```ts
try {
    // ...
} catch {
    // handle error
}
```

Prefer this over:

```ts
try {
    // ...
} catch (err) {
    // err is never used
}
```

---

# Logging

Logs should help developers understand what is happening.

Example:

```text
[LOG] Info: Hostname "example.com" menggunakan domain biasa.
```

Warning:

```text
[LOG] Warning: Hostname "1.1.1.1" terdeteksi sebagai IPv4.
```

Error:

```text
[LOG] Error: Format URL tidak valid.
```

Do not log sensitive information.

Avoid unnecessarily verbose logs.

---

# Security Guidelines

VerifyIt handles untrusted user input.

All user-provided URLs must be treated as untrusted.

Potential security concerns include:

* SSRF
* Malicious redirects
* Internal IP addresses
* DNS rebinding
* Unsafe protocols
* Unexpected ports
* Resource exhaustion
* Malicious URL payloads
* External service abuse

---

# SSRF

If VerifyIt eventually makes HTTP requests to URLs submitted by users, do not blindly perform:

```ts
await fetch(userProvidedUrl);
```

without proper validation and network restrictions.

Potentially dangerous targets include:

```text
localhost
127.0.0.1
private IP ranges
link-local addresses
internal hostnames
cloud metadata endpoints
```

Network access must be carefully controlled.

---

# Secrets

Never commit secrets.

Do not commit:

```text
.env
API keys
Passwords
Access tokens
Private keys
Credentials
```

Use environment variables instead.

Example:

```ts
const apiKey = process.env.API_KEY;
```

---

# Git Workflow

Use feature branches instead of directly modifying `main`.

Example:

```text
main
 |
 +-- feature/ipv6-detection
 |
 +-- feature/rule-engine
 |
 +-- fix/url-validation
 |
 +-- refactor/evidence-system
```

---

# Branch Naming

## Feature

```text
feature/<name>
```

Examples:

```text
feature/ipv6-detection
feature/rule-engine
feature/evidence-system
feature/risk-analyzer
```

---

## Bug Fix

```text
fix/<name>
```

Examples:

```text
fix/ipv6-detection
fix/url-validation
fix/domain-parser
```

---

## Refactoring

```text
refactor/<name>
```

Examples:

```text
refactor/rule-engine
refactor/evidence-model
```

---

## Documentation

```text
docs/<name>
```

Example:

```text
docs/contributing
```

---

# Commit Convention

Use:

```text
<type>: <description>
```

Available types:

| Type       | Purpose       |
| ---------- | ------------- |
| `feat`     | New feature   |
| `fix`      | Bug fix       |
| `refactor` | Refactoring   |
| `test`     | Tests         |
| `docs`     | Documentation |
| `chore`    | Maintenance   |
| `perf`     | Performance   |
| `build`    | Build changes |
| `ci`       | CI/CD changes |

---

# Commit Examples

Good:

```text
feat: add IPv6 detection rule
```

```text
fix: handle IPv6 hostname brackets
```

```text
test: add IPv4 detection cases
```

```text
refactor: separate evidence from rule result
```

```text
docs: update contributing guide
```

```text
chore: update dependencies
```

---

# Commit Best Practices

Keep commits focused.

Avoid:

```text
feat: add rule engine + database + API + fix unrelated bug
```

Prefer:

```text
feat: add rule engine
```

Then:

```text
test: add rule engine tests
```

Then:

```text
docs: document rule engine
```

Small commits make code review easier.

---

# Pull Requests

Every Pull Request should explain:

### What?

What changed?

### Why?

Why was it necessary?

### How?

How was it implemented?

---

# Pull Request Template

```md
## Summary

Describe the changes made in this PR.

## Motivation

Explain why this change is necessary.

## Changes

- Change 1
- Change 2
- Change 3

## Testing

- [ ] Unit tests
- [ ] Integration tests
- [ ] Manual testing

## Security Considerations

Describe any security implications.

## Checklist

- [ ] Code follows project conventions
- [ ] Tests pass
- [ ] TypeScript builds successfully
- [ ] No secrets committed
- [ ] No unnecessary dependencies added
- [ ] Documentation updated if necessary
```

---

# Pull Request Size

Prefer small and focused Pull Requests.

Good:

```text
PR #1
Add IPv4 and IPv6 detection
```

Then:

```text
PR #2
Add domain validation
```

Then:

```text
PR #3
Add rule engine
```

Avoid combining many unrelated features into one PR.

---

# Issue Guidelines

Issues can be used for:

* Bug reports
* Feature requests
* Documentation improvements
* Security concerns
* Architecture discussions
* Performance problems

---

# Bug Report

Use this structure:

```md
## Description

Describe the problem.

## Steps to Reproduce

1. Run ...
2. Input ...
3. Observe ...

## Expected Behavior

What should happen?

## Actual Behavior

What actually happens?

## Environment

Node.js:
pnpm:
OS:
```

---

# Feature Request

Use:

```md
## Feature

Describe the proposed feature.

## Motivation

Why is this feature useful?

## Proposed Implementation

Describe a possible implementation.

## Alternatives

Describe alternative approaches.
```

---

# Adding a New Rule

When adding a new rule, follow these steps.

## Step 1 — Define the Purpose

Clearly define what the rule detects.

Example:

```text
HOST_IS_IP

Detect whether the hostname is an IPv4 or IPv6 address.
```

---

## Step 2 — Identify Required Evidence

Determine what information the rule needs.

Example:

```text
hostname
IP version
```

---

## Step 3 — Implement the Rule

Keep the rule focused.

Example:

```ts
function checkUsesIP(...) {
    // Detect IP
}
```

---

## Step 4 — Produce a Structured Result

Prefer:

```ts
{
    rule: "HOST_IS_IP",
    passed: false,
    severity: "medium",
    message: "Hostname menggunakan alamat IP",
    evidence: [...]
}
```

Instead of:

```ts
return "URL menggunakan IP";
```

---

## Step 5 — Add Tests

Test:

```text
IPv4
IPv6
Domain
Invalid URL
Edge cases
```

---

## Step 6 — Document the Rule

Document:

* What the rule detects
* Why the rule exists
* Required evidence
* Limitations
* Expected behavior

---

# Adding New Evidence

When adding evidence:

1. Define what it represents.
2. Identify the source.
3. Keep it factual.
4. Make it structured.
5. Make it reusable where possible.

Example:

```ts
{
    type: "hostname",
    value: "example.com",
    source: "url.hostname"
}
```

Avoid:

```ts
{
    type: "security",
    value: "This URL is dangerous"
}
```

because that is a conclusion rather than raw evidence.

---

# Dependencies

Do not add dependencies without a clear reason.

Before adding a package, consider:

1. Is the functionality already available in Node.js?
2. Is the dependency maintained?
3. Does it introduce security risks?
4. Does it add unnecessary complexity?
5. Is the license compatible with the project?
6. Does the project actually need it?

For example, prefer Node.js built-in modules when appropriate:

```ts
import net from "node:net";
```

instead of adding another package that provides the same functionality.

---

# Code Review

Code reviewers should primarily consider:

* Correctness
* Security
* Readability
* Maintainability
* Test coverage
* Type safety
* Performance
* Architectural consistency

Review comments should be constructive and explain why a change is recommended.

---

# Development Checklist

Before creating a Pull Request:

```text
[ ] Code compiles
[ ] TypeScript errors are resolved
[ ] Tests pass
[ ] New functionality has tests
[ ] Edge cases were considered
[ ] No secrets are committed
[ ] No unnecessary dependencies were added
[ ] Naming is clear
[ ] Functions have clear responsibilities
[ ] Error handling is appropriate
[ ] Documentation is updated where necessary
```

---

# Rule Development Checklist

When creating a new rule:

```text
[ ] Rule has a clear purpose
[ ] Rule has a stable identifier
[ ] Required evidence is identified
[ ] Rule result is structured
[ ] Severity is justified
[ ] Evidence is attached
[ ] Positive case is tested
[ ] Negative case is tested
[ ] Invalid input is tested
[ ] Edge cases are tested
[ ] Documentation is updated
```

---

# Evidence Development Checklist

When creating new evidence:

```text
[ ] Evidence represents a factual observation
[ ] Evidence source is identified
[ ] Evidence value is structured
[ ] Evidence can be reused
[ ] Evidence does not contain unnecessary conclusions
[ ] Sensitive information is handled safely
```

---

# Future Development

VerifyIt may eventually evolve into:

```text
                    URL
                     |
                     v
               URL Parser
                     |
                     v
            Evidence Collector
                     |
                     v
                Rule Engine
                     |
                     v
               Rule Results
                     |
                     v
                Risk Analyzer
                     |
                     v
                 REST API
                     |
                     v
                 Database
                     |
                     v
              Authentication
                     |
                     v
               Rate Limiting
                     |
                     v
               Monitoring
```

Potential future rules:

```text
HOST_IS_IP
INVALID_URL
SUSPICIOUS_PROTOCOL
SUSPICIOUS_PORT
PUNYCODE_DOMAIN
EXCESSIVE_SUBDOMAIN
SUSPICIOUS_CHARACTER
LONG_URL
SUSPICIOUS_PATH
REDIRECT_CHAIN
```

Potential future evidence:

```text
hostname
protocol
port
IP address
IP version
DNS records
TLS certificate
HTTP response
redirect chain
domain information
external reputation
```

These features should be introduced incrementally.

---

# Development Roadmap

The recommended development order is:

```text
Phase 1
URL Parsing
    |
    v
Phase 2
Evidence Model
    |
    v
Phase 3
Individual Rules
    |
    v
Phase 4
Rule Engine
    |
    v
Phase 5
Risk Analyzer
    |
    v
Phase 6
Unit Tests
    |
    v
Phase 7
REST API
    |
    v
Phase 8
Database
    |
    v
Phase 9
Authentication
    |
    v
Phase 10
External Security Intelligence
```

Do not implement everything at once.

The core analysis engine should be stable before adding external services and infrastructure.

---

# Design Principles

## Separation of Concerns

Parsing, evidence, rules, risk analysis, and API handling should remain separate.

## Explicit Data

Prefer structured objects over plain strings.

## Testability

Each component should be testable independently.

## Security

All user input should be considered untrusted.

## Explainability

Results should be traceable back to evidence and rules.

## Maintainability

Code should be understandable by contributors who did not originally write it.

## Simplicity

Do not introduce abstractions until they solve a real problem.

---

# Contribution Philosophy

Contributions are not limited to writing code.

Useful contributions include:

* Bug reports
* Test cases
* Documentation
* New detection rules
* Evidence improvements
* Security reviews
* Performance improvements
* Architecture discussions
* Developer experience improvements

Every contribution should help make VerifyIt more:

```text
Reliable
Secure
Understandable
Testable
Maintainable
```

---

# Final Notes

VerifyIt is an evolving project.

Not every architectural decision needs to be perfect from the beginning.

The goal is to continuously improve the project while keeping the core system understandable.

When in doubt, prefer:

```text
Correctness
    >
Complexity
```

```text
Evidence
    >
Assumption
```

```text
Small Changes
    >
Huge Changes
```

```text
Tested Code
    >
Untested Code
```

```text
Explainable Results
    >
Black-box Results
```

---

# License

By contributing to VerifyIt, you agree that your contributions will be licensed under the same license as the project.

See the `LICENSE` file for more information.

```

Ini sudah cocok dijadikan **`CONTRIBUTING.md` di root repository VerifyIt**.
```


---

## Step 5 — Add Tests

Test:

```text
IPv4
IPv6
Domain
Invalid URL
Edge cases
```

---

## Step 6 — Document the Rule

Document:

* What the rule detects
* Why the rule exists
* Required evidence
* Limitations
* Expected behavior

---

# Adding New Evidence

When adding evidence:

1. Define what it represents.
2. Identify the source.
3. Keep it factual.
4. Make it structured.
5. Make it reusable where possible.

Example:

```ts
{
    type: "hostname",
    value: "example.com",
    source: "url.hostname"
}
```

Avoid:

```ts
{
    type: "security",
    value: "This URL is dangerous"
}
```

because that is a conclusion rather than raw evidence.

---

# Dependencies

Do not add dependencies without a clear reason.

Before adding a package, consider:

1. Is the functionality already available in Node.js?
2. Is the dependency maintained?
3. Does it introduce security risks?
4. Does it add unnecessary complexity?
5. Is the license compatible with the project?
6. Does the project actually need it?

For example, prefer Node.js built-in modules when appropriate:

```ts
import net from "node:net";
```

instead of adding another package that provides the same functionality.

---

# Code Review

Code reviewers should primarily consider:

* Correctness
* Security
* Readability
* Maintainability
* Test coverage
* Type safety
* Performance
* Architectural consistency

Review comments should be constructive and explain why a change is recommended.

---

# Development Checklist

Before creating a Pull Request:

```text
[ ] Code compiles
[ ] TypeScript errors are resolved
[ ] Tests pass
[ ] New functionality has tests
[ ] Edge cases were considered
[ ] No secrets are committed
[ ] No unnecessary dependencies were added
[ ] Naming is clear
[ ] Functions have clear responsibilities
[ ] Error handling is appropriate
[ ] Documentation is updated where necessary
```

---

# Rule Development Checklist

When creating a new rule:

```text
[ ] Rule has a clear purpose
[ ] Rule has a stable identifier
[ ] Required evidence is identified
[ ] Rule result is structured
[ ] Severity is justified
[ ] Evidence is attached
[ ] Positive case is tested
[ ] Negative case is tested
[ ] Invalid input is tested
[ ] Edge cases are tested
[ ] Documentation is updated
```

---

# Evidence Development Checklist

When creating new evidence:

```text
[ ] Evidence represents a factual observation
[ ] Evidence source is identified
[ ] Evidence value is structured
[ ] Evidence can be reused
[ ] Evidence does not contain unnecessary conclusions
[ ] Sensitive information is handled safely
```

---

# Future Development

VerifyIt may eventually evolve into:

```text
                    URL
                     |
                     v
               URL Parser
                     |
                     v
            Evidence Collector
                     |
                     v
                Rule Engine
                     |
                     v
               Rule Results
                     |
                     v
                Risk Analyzer
                     |
                     v
                 REST API
                     |
                     v
                 Database
                     |
                     v
              Authentication
                     |
                     v
               Rate Limiting
                     |
                     v
               Monitoring
```

Potential future rules:

```text
HOST_IS_IP
INVALID_URL
SUSPICIOUS_PROTOCOL
SUSPICIOUS_PORT
PUNYCODE_DOMAIN
EXCESSIVE_SUBDOMAIN
SUSPICIOUS_CHARACTER
LONG_URL
SUSPICIOUS_PATH
REDIRECT_CHAIN
```

Potential future evidence:

```text
hostname
protocol
port
IP address
IP version
DNS records
TLS certificate
HTTP response
redirect chain
domain information
external reputation
```

These features should be introduced incrementally.

---

# Development Roadmap

The recommended development order is:

```text
Phase 1
URL Parsing
    |
    v
Phase 2
Evidence Model
    |
    v
Phase 3
Individual Rules
    |
    v
Phase 4
Rule Engine
    |
    v
Phase 5
Risk Analyzer
    |
    v
Phase 6
Unit Tests
    |
    v
Phase 7
REST API
    |
    v
Phase 8
Database
    |
    v
Phase 9
Authentication
    |
    v
Phase 10
External Security Intelligence
```

Do not implement everything at once.

The core analysis engine should be stable before adding external services and infrastructure.

---

# Design Principles

## Separation of Concerns

Parsing, evidence, rules, risk analysis, and API handling should remain separate.

## Explicit Data

Prefer structured objects over plain strings.

## Testability

Each component should be testable independently.

## Security

All user input should be considered untrusted.

## Explainability

Results should be traceable back to evidence and rules.

## Maintainability

Code should be understandable by contributors who did not originally write it.

## Simplicity

Do not introduce abstractions until they solve a real problem.

---

# Contribution Philosophy

Contributions are not limited to writing code.

Useful contributions include:

* Bug reports
* Test cases
* Documentation
* New detection rules
* Evidence improvements
* Security reviews
* Performance improvements
* Architecture discussions
* Developer experience improvements

Every contribution should help make VerifyIt more:

```text
Reliable
Secure
Understandable
Testable
Maintainable
```

---

# Final Notes

VerifyIt is an evolving project.

Not every architectural decision needs to be perfect from the beginning.

The goal is to continuously improve the project while keeping the core system understandable.

When in doubt, prefer:

```text
Correctness
    >
Complexity
```

```text
Evidence
    >
Assumption
```

```text
Small Changes
    >
Huge Changes
```

```text
Tested Code
    >
Untested Code
```

```text
Explainable Results
    >
Black-box Results
```

---

# License

By contributing to VerifyIt, you agree that your contributions will be licensed under the same license as the project.

See the `LICENSE` file for more information.

```

