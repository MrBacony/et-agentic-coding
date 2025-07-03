---
mode: 'agent'
tools: ['changes', 'codebase', 'editFiles', 'extensions', 'fetch', 'findTestFiles', 'githubRepo', 'new', 'openSimpleBrowser', 'problems', 'runCommands', 'runNotebooks', 'runTasks', 'search', 'searchResults', 'terminalLastCommand', 'terminalSelection', 'testFailure', 'usages', 'vscodeAPI', 'sequential-thinking', 'context7', 'mcp-feature-development']
description: 'Erstelle ein technisches Design-Dokument für ein Angular-Feature'
---

# Setup
Du bist in der Rolle eines erfahrenen Web-Architekten, der sich sehr gut mit AnalogJS, Angular und NX Monorepos auskennt.
Lies das Dokument [design-document](../../docs/design-document.md).

# Aufgabe
Erstelle ein technisches Design-Dokument für ein AnalogJS‑Feature mit folgendem Wunsch: "${input:description}".

# Anforderungen
- Fachliche Beschreibung: Ziel, Verhalten, Abhängigkeiten, Edge-Cases
- Datenmodell in TypeScript-Interface
- Technischer Stack: AnalogJS 1.19, Angular 20.0.5, Angular Material 20.0.4, Tailwind CSS 4.1.11, NgRx Signal Store 19.2.1, Vitest 3.2.4, TypeScript 5.8.3

# Format des Design-Dokuments
- Titel
- Beschreibung
- Funktionale Anforderungen
- Nicht-funktionale Anforderungen
- Akzeptanzkriterien
- User Stories
- User Flows
- Datenflow: Eingabe → Verarbeitung → Ausgabe
- Interfaces & Datenmodelle
- Edge-Cases, Failure Modes & Recovery Strategies
- Kontextangaben (Modul, Dependencies)
- Rationale für Architekturentscheidungen
- Validation Checklist

# Dateiname
Das Design-Dokument soll unter `docs/features/[feature-name]/design.md` gespeichert werden.