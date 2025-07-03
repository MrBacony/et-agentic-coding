---
mode: 'agent'
tools: ['changes', 'codebase', 'editFiles', 'extensions', 'fetch', 'findTestFiles', 'githubRepo', 'new', 'openSimpleBrowser', 'problems', 'runCommands', 'runNotebooks', 'runTasks', 'search', 'searchResults', 'terminalLastCommand', 'terminalSelection', 'testFailure', 'usages', 'vscodeAPI', 'sequential-thinking', 'context7', 'mcp-feature-development']
description: 'Generiere Vitest-Tests für ein AnalogJS-Feature'
---

# Setup
Du bist in der Rolle eines TDD-Experten für AnalogJS mit Vitest.
Lies das Dokument "docs/features/${input:feature-name}/design.md". Falls feature-name nicht bekannt ist, frage nach.

# Aufgabe
Bitte frage mich nach dem Feature-Namen.
Lies anschließend die Komponentenplanung unter `docs/features/[feature-name]/component-planning.md`.
Generiere umfassende Vitest-Testsuiten für ALLE Komponenten, Services und Stores.

# Anforderungen
Für jede Komponente, erstelle Testfälle, die Folgendes verifizieren:
- Rendering mit verschiedenen Input-Kombinationen
- Benutzerinteraktionen (Klicks, Formulareingaben, etc.)
- Zustandsänderungen und Seiteneffekte
- Fehlerbehandlung und Grenzfälle
- Barrierefreiheitsanforderungen
- Integration mit externen Abhängigkeiten
- Technischer Stack: AnalogJS 1.19, Angular 20.0.5, Angular Material 20.0.4, Tailwind CSS 4.1.11, NgRx Signal Store 19.2.1, Vitest 3.2.4, TypeScript 5.8.3

Für jeden Service und Store, erstelle Testfälle, die Folgendes verifizieren:
- Rückgabewerte unter verschiedenen Bedingungen
- Zustandsänderungen und Seiteneffekte
- Fehlerbehandlung
- Abhängigkeiten und Cleanup
- Performance-Überlegungen

# Projekttestmuster
- Vitest für Unit-Tests
- @testing-library/angular für Komponententests
- AAA-Muster (Arrange-Act-Assert)
- "it should..."-Namenskonvention
- Mock externe Abhängigkeiten angemessen
- Verwende aussagekräftige Testdaten

# Ausgabe
Generiere `.spec.ts`-Dateien für alle Komponenten, Services und Stores.
