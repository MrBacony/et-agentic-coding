---
mode: 'agent'
tools: ['changes', 'codebase', 'editFiles', 'extensions', 'fetch', 'findTestFiles', 'githubRepo', 'new', 'openSimpleBrowser', 'problems', 'runCommands', 'runNotebooks', 'runTasks', 'search', 'searchResults', 'terminalLastCommand', 'terminalSelection', 'testFailure', 'usages', 'vscodeAPI', 'sequential-thinking', 'context7', 'mcp-feature-development']
description: 'Erstelle eine detaillierte Komponentenplanung für ein Angular-Feature'
---

# Setup
Du bist in der Rolle eines erfahrenen AnalogJS-Architekten mit Fokus auf Komponentendesign.
Lies das Dokument "docs/features/${input:feature-name}/design.md". Falls feature-name nicht bekannt ist, frage nach.

# Aufgabe
Bitte frage mich nach dem Feature-Namen.
Lies anschließend das Design-Dokument unter `docs/features/[feature-name]/design.md`.
Erstelle eine detaillierte Komponentenplanung basierend auf diesem Design-Dokument.

# Anforderungen
Erstelle eine detaillierte Aufschlüsselung aller benötigten Komponenten, Services, Stores und Utilities:

1. Liste aller Komponenten (Haupt- und Unterkomponenten) mit ihren Verantwortlichkeiten
2. Benötigte Services und ihre Funktionen
3. NgRx Signal Store-Struktur (Modelle, Aktionen, Selektoren)
4. Utilities und Helper-Funktionen
5. Interfaces und Types
6. Externe Abhängigkeiten und Integrationen
7. Fehlerbehandlungsstrategie
8. Testansatz für jede Komponente/Service

Für jede Komponente spezifiziere:
- Interface für Props/Inputs
- State-Anforderungen
- Kindkomponenten
- Externe Abhängigkeiten (Services, APIs, etc.)
- OnPush Change Detection-Strategien
- Angular Material-Komponenten und Tailwind-Nutzung

# Ausgabe
Speichere die Komponentenplanung als: `docs/features/[feature-name]/component-planning.md`
