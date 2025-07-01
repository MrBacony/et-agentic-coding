---
mode: 'agent'
tools: ['changes', 'codebase', 'editFiles', 'extensions', 'fetch', 'findTestFiles', 'githubRepo', 'new', 'openSimpleBrowser', 'problems', 'runCommands', 'runNotebooks', 'runTasks', 'search', 'searchResults', 'terminalLastCommand', 'terminalSelection', 'testFailure', 'usages', 'vscodeAPI']
description: 'Generate a new design document for the following feature'
---

# Aufgabe
Erzeuge Vitest-Unit-Tests für das Feature basierend auf der Dateistruktur.

# Anforderungen
- Vitest-Syntax (`describe`, `it`, `expect`, `vi.fn()`)  
- Tests für Services, Komponenten, Store-Logik, FormValidation  
- Angular‑Material-UI-Interaktionen und Tailwind-Klassenverhalten prüfen

# Format
- Ein Testfile pro Datei (`*.spec.ts`)  
- Klare Arrange–Act–Assert-Struktur  
- Mocks für Services/Selectors, Fokus auf Isolation