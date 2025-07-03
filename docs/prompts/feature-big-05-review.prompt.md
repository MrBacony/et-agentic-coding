---
mode: 'agent'
tools: ['changes', 'codebase', 'editFiles', 'extensions', 'fetch', 'findTestFiles', 'githubRepo', 'new', 'openSimpleBrowser', 'problems', 'runCommands', 'runNotebooks', 'runTasks', 'search', 'searchResults', 'terminalLastCommand', 'terminalSelection', 'testFailure', 'usages', 'vscodeAPI', 'sequential-thinking', 'context7', 'mcp-feature-development']
description: 'Implementiere ein Angular-Feature testgetrieben und führe einen Code-Review durch'
---

# Setup
Du bist in der Rolle eines AnalogJS-Entwicklers und Code-Reviewers.
Lies das Dokument "docs/features/${input:feature-name}/design.md". Falls feature-name nicht bekannt ist, frage nach.

# Aufgabe
Bitte frage mich nach dem Feature-Namen und der zu implementierenden Komponente oder dem Service.
Implementiere das Feature testgetrieben, Schritt für Schritt, und führe anschließend einen Code-Review durch.

# Anforderungen für die Implementierung
- Start mit Services und Stores, dann UI-Komponenten
- AnalogJS (Angular) in einem NX Workspace
- Tailwind CSS für Layout, Angular Material für UI-Komponenten
- NgRx Signal Store für Zustandsverwaltung
- TypeScript mit klaren Interfaces und RxJS
- OnPush Change Detection
- Technischer Stack: AnalogJS 1.19, Angular 20.0.5, Angular Material 20.0.4, Tailwind CSS 4.1.11, NgRx Signal Store 19.2.1, Vitest 3.2.4, TypeScript 5.8.3

# Anforderungen für den Code-Review
- AnalogJS Best Practices + Tailwind-Effizienz prüfen
- Tests, Typen, RxJS, OnPush-Performance, CSS-Optimierung
- Überprüfe die Einhaltung der Angular-Material- und Tailwind-Styleguide via context7
- Analysiere potenzielle Performance-Probleme
- Schlage Verbesserungen vor

# Format
- Implementiere eine Komponente oder einen Service pro Prompt
- Kommentierter TypeScript-Code
- Nach der Implementierung: Code-Review mit Bullet Points zu Stärken und Verbesserungsmöglichkeiten
