---
mode: 'agent'
tools: ['changes', 'codebase', 'editFiles', 'extensions', 'fetch', 'findTestFiles', 'githubRepo', 'new', 'openSimpleBrowser', 'problems', 'runCommands', 'runNotebooks', 'runTasks', 'search', 'searchResults', 'terminalLastCommand', 'terminalSelection', 'testFailure', 'usages', 'vscodeAPI']
description: 'Perform a comprehensive code review of the implemented feature, checking Angular best practices, test coverage, and generating MCP-compliant documentation'
---

# Aufgabe
Führe einen Agent‑Review des abgeschlossenen Features durch.

# Anforderungen
- Angular Best Practices + Tailwind-Effizienz prüfen  
- Tests, Typen, RxJS, OnPush-Performance, CSS-Optimierung (Purging)  
- Erstelle MCP-konforme JSON für Prompt-Verlauf & Instruction-Files

# Format
- Bullet Points mit Code-Referenzen  
- JSON mit `promptName`, `purpose`, `inputs`, `outputs`, `dependencies`