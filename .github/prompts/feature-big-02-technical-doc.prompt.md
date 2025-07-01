---
mode: 'agent'
tools: ['changes', 'codebase', 'editFiles', 'extensions', 'fetch', 'findTestFiles', 'githubRepo', 'new', 'openSimpleBrowser', 'problems', 'runCommands', 'runNotebooks', 'runTasks', 'search', 'searchResults', 'terminalLastCommand', 'terminalSelection', 'testFailure', 'usages', 'vscodeAPI']
description: 'Generate a file structure with components, services, and NgRx implementation based on the feature design document'
---

# Aufgabe
Generiere eine Dateistruktur für das Feature basierend auf dem Design‑Dokument.

# Anforderungen
- Komponenten mit OnPush-Detection und Tailwind/CSS  
- Tailwind für Layout-Utilities, Angular Material für UI-Komponenten  
- Services, ggf. NgRx Actions/Reducers/Selectors

# Ausgabe
- Strukturierter Dateibaum (z. B. `todo-filter/…`)  
- Jede Datei: Beschreibung + kommentierter Header mit Imports/Boilerplate  
- Beispielcode mit Angular Material-Komponenten (z. B. `mat-form-field`) sowie Tailwind-Klassen