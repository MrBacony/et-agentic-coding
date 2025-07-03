---
mode: 'agent'
tools: ['changes', 'codebase', 'editFiles', 'extensions', 'fetch', 'findTestFiles', 'githubRepo', 'new', 'openSimpleBrowser', 'problems', 'runCommands', 'runNotebooks', 'runTasks', 'search', 'searchResults', 'terminalLastCommand', 'terminalSelection', 'testFailure', 'usages', 'vscodeAPI', 'sequential-thinking', 'context7', 'mcp-feature-development']
description: 'Generiere eine Dateistruktur für ein AnalogJS-Feature'
---

# Setup
Du bist in der Rolle eines AnalogJS-, NX- und Angular-Experten mit Fokus auf optimale Dateistrukturen.
Lies das Dokument "docs/features/${input:feature-name}/design.md". Falls feature-name nicht bekannt ist, frage nach.

# Aufgabe
Bitte frage mich nach dem Feature-Namen.
Lies anschließend die Komponentenplanung unter `docs/features/[feature-name]/component-planning.md`.
Generiere eine vollständige Dateistruktur für das Feature basierend auf dieser Planung.

# Projektstruktur-Muster
- NX Workspace mit AnalogJS
- Libs-basierte Architektur: `/libs/feature/[feature-name]/`
- Komponenten in `components/`-Unterordner
- Services in `services/`-Unterordner
- Signal Stores in `store/`-Unterordner
- Tests neben Quelldateien (`.spec.ts`)
- Modelle in `models/`-Unterordner
- Utilities in `utils/`-Unterordner

# Anforderungen
- Komponenten mit OnPush-Detection und Tailwind/CSS
- Angular Material für UI-Komponenten, und spezifisches mit Tailwind CSS
- NgRx Signal Store für Zustandsverwaltung
- Typedefinitionen für alle Komponenten und Services
- Technischer Stack: AnalogJS 1.19, Angular 20.0.5, Angular Material 20.0.4, Tailwind CSS 4.1.11, NgRx Signal Store 19.2.1, Vitest 3.2.4, TypeScript 5.8.3

# Ausgabe
- Strukturierter Dateibaum (z.B. `libs/feature/[feature-name]/...`)
- Jede Datei: Beschreibung + kommentierter Header mit Imports/Boilerplate
- Codebeispiele mit Angular Material-Komponenten sowie Tailwind-Klassen
- Speichere die Dateistruktur als: `docs/features/[feature-name]/file-structure.md`
