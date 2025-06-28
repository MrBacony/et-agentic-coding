---
theme: purplin
title: Agentic Coding mit Angular
layout: cover
background: 'https://source.unsplash.com/collection/94734566/1920x1080'
class: 'text-center'
highlighter: shiki
lineNumbers: false
transition: slide-left
mdc: true
---

# Agentic Coding mit Angular

## Intelligente Entwicklung für das moderne Web

<div class="text-sm opacity-70 mt-4">
  <strong>Dauer:</strong> 90 Minuten<br>
  <strong>Zielgruppe:</strong> Angular-Entwickler, Tech Leads, Engineering Manager
</div>

<!-- Setzen wir den Standard für professionelle Präsentationen -->
<!-- Die Verwendung eines hochwertigen Hintergrundbildes und einem klaren Layout fängt die Aufmerksamkeit -->
<!-- Das purplin Theme sorgt für einen modernen Look mit guter Lesbarkeit -->

---

# Workshop-Ablauf

<div class="grid grid-cols-2 gap-4">
<div>

## Einführung
- 0-5: Willkommen & Überblick
- 5-15: Agentic Coding Grundlagen
- 15-20: Umgebungs-Setup

## Praktischer Teil
- 20-35: App-Entwicklungsworkflow
- 35-45: Iterativer Zyklus

</div>
<div>

## Hands-on
- 45-50: Teams & Aufgaben
- 50-75: Feature-Entwicklung

## Abschluss
- 75-80: Erfahrungssammlung
- 80-85: Gruppenaustausch
- 85-90: Wrap-up & Nächste Schritte

</div>
</div>

<!-- Durch das Zweispalten-Layout wird der Inhalt besser organisiert und passt gut ins 16:9 Format -->
<!-- Die klare Segmentierung in 4 Hauptblöcke macht den Ablauf leichter verständlich -->

---

# Was ihr heute mitnehmt

<div class="grid grid-cols-2 gap-8 mt-4">
<div class="flex flex-col space-y-6">

## Wissen
<v-clicks>

- 🧠 **Agentic Coding Konzept** verstehen
- ⚡ KI-Potenzial in der Entwicklung nutzen
- 🔄 Workflow-Integration meistern

</v-clicks>
</div>

<div class="flex flex-col space-y-6">

## Praxis
<v-clicks>

- 💻 Hands-on Angular-Feature Entwicklung
- 🛠️ Konkrete Tools & Techniken anwenden
- 🌟 Sofort einsetzbare Best Practices

</v-clicks>
</div>
</div>

<!-- Animation durch v-clicks erzeugt Dynamik -->
<!-- Die Emojis verbessern die visuelle Einprägsamkeit -->
<!-- Durch die Kategorisierung wird die Struktur klarer -->

---

# Agentic Coding Grundlagen

<div class="grid grid-cols-2 gap-x-10">
<div>

## Definition
<v-clicks>

- KI als **aktiver Kollaborator** im Entwicklungsprozess
- Von passiven Hilfestellungen zu **proaktiven Lösungen**
- **Kontinuierliches Lernen** aus eurer Codebase & Anforderungen

</v-clicks>
</div>

<div>

## Warum es wichtig ist
<v-clicks>

- 🚀 **Deutlich höhere Produktivität**
- 🧠 **Kognitive Belastung** spürbar reduziert
- ⏱️ **Time-to-Market** merklich verkürzt
- 🎯 Mehr Fokus auf **kreative Problemlösung**

</v-clicks>
</div>
</div>

<!-- Die Verwendung von starken Begriffen wie "Kollaborator" statt "Mitarbeiter" schafft ein kraftvolleres Bild -->
<!-- Qualitative statt quantitative Vorteile betonen verstärkt die Glaubwürdigkeit -->

---

# Von Basics zu Advanced: Angular-KI-Integration

<div class="flex justify-between">
<div class="w-[45%]">

## Evolution der Ansätze
<v-clicks>

1. **Basic**: Code-Vervollständigung
2. **Intermediate**: Code-Erklärung & Refactoring
3. **Advanced**: Feature-Entwicklung
4. **Expert**: App-Architektur & System Design

</v-clicks>
</div>

<div class="w-[50%] bg-slate-50/10 p-4 rounded">

## Angular-spezifische Anwendungen
<v-clicks>

- ⚙️ **Komponenten**: Smarte Generierung mit OnPush
- 🔄 **Services**: DI-basierte Implementierungen
- 📝 **FormBuilder**: Komplexe Validierung
- 🗃️ **NgRx**: Erhebliche Boilerplate-Reduktion
- 🧪 **Tests**: Automatische Testfälle

</v-clicks>
</div>
</div>

<!-- Stufenweiser Aufbau vom Einfachen zum Komplexen -->
<!-- Konkrete Angular-Bezüge für den Workshop-Kontext -->
<!-- Qualitative Beschreibung statt exakter Prozentsatz -->

---

# Risiken & wie man sie bewältigt

<div class="grid grid-cols-2 gap-x-4 gap-y-2">
<div v-click class="bg-red-50/10 p-2 rounded">

### Blindes Vertrauen
- KI-Output ohne Verständnis integrieren
- **Lösung**: Code-Reviews & Verständnisfragen

</div>
<div v-click class="bg-red-50/10 p-2 rounded">

### Inkonsistente Qualität
- Schwankende Ergebnisse bei komplexen Features
- **Lösung**: Strikte Standards & Prompt-Templates

</div>
<div v-click class="bg-red-50/10 p-2 rounded">

### Sicherheitsrisiken
- Veraltete Patterns, ungeprüfte Bibliotheken
- **Lösung**: Security-Scanning & Dependency-Checks

</div>
<div v-click class="bg-red-50/10 p-2 rounded">

### Prompt-Engineering
- Steile Lernkurve für optimale Ergebnisse
- **Lösung**: Wiederverwendbare Prompt-Bibliotheken

</div>
</div>

<!-- Probleme mit Lösungen zu paaren vermittelt einen proaktiven Ansatz -->
<!-- Das visuelle Layout mit leichtem Hintergrund verbessert die Lesbarkeit -->

---

# Evolution des KI-Entwicklungsworkflows

<div class="grid grid-cols-2 gap-x-4">
<div>

## Progressiver Ansatz
<v-clicks>

1. **Ad-hoc Prompting** 
   - Schnell, aber nicht wiederverwendbar

2. **Instruction-Dateien**
   - Konsistenz durch geteilten Kontext
   
3. **Strukturierte Prompt-Templates**
   - Wiederverwendbare Workflows
   
4. **MCP-Tools (Model Context Protocol)**
   - Team-weite, proprietäre Lösungen

</v-clicks>
</div>

<div class="bg-blue-50/10 p-2 rounded">

## Echtzeit-Beispiel

```markdown
# Erstelle einen Angular-Konferenzplaner mit:

1. Feature-Module: Konferenzen, Räume, Speaker
2. Lazy-Loading für optimale Performance
3. NgRx für State-Management
4. Responsive UI mit Angular Material
5. Authentifizierung via KeyCloak
```

<div v-click class="text-sm text-blue-300 mt-2">
Von hier entwickeln wir uns zu strukturierteren Ansätzen →
</div>
</div>
</div>

<!-- Der Code ist knapper aber aussagekräftiger -->
<!-- Die visuelle Trennung und Animation unterstützen den "Evolution"-Gedanken -->

---

# Strukturierung für Erfolg

<div class="grid grid-cols-2 gap-x-4">
<div>

## 📝 Instruction-Dateien (.instructions.md)
<v-clicks>

```markdown
# Angular-Projektstruktur

- Features: /src/app/features/
- Shared: /src/app/shared/
- State: NgRx mit Feature-States
- Standard: OnPush Change Detection
```

- **Benefit**: Deutlich weniger Nachfragen durch KI
- **Ergebnis**: Konsistente Ausgaben in eurem Team

</v-clicks>
</div>

<div>

## 🧩 Prompt-Templates (.prompt.md)
<v-clicks>

```markdown
[ROLLE] Angular-Architektur-Experte
[AUFGABE] Erstelle Feature-Modul für:
- Feature: {{featureName}}
- Komponenten: {{componentList}}
[AUSGABE] Modul + Komponenten + Tests
```

- **Benefit**: Wiederholbare, versionierbare Workflows
- **Ergebnis**: Wesentlich schnellere Feature-Entwicklung

</v-clicks>
</div>
</div>

<!-- Konkrete Beispiele mit qualitativen Vorteilen wirken überzeugend -->
<!-- Das Format mit den Dateiendungen verdeutlicht die praktische Anwendung -->

---

# Die Zukunft: MCP-Tools für Teams

<div class="grid grid-cols-2 gap-4">
<div>

## Model Context Protocol (MCP)
<v-clicks>

- **Proprietäre Tools** für Unternehmen
- **IDE-Integration** mit VS Code Extensions
- **Team-weite Standards** erzwingen
- **Datenschutz** für sensible Codebasen

</v-clicks>
</div>

<div class="space-y-2">
<div v-click class="bg-slate-800 p-3 rounded text-sm">

```json
{
  "name": "generate-conference-component",
  "description": "Angular-Komponenten-Generator",
  "parameters": {
    "componentName": {
      "type": "string",
      "description": "Name der Komponente"
    },
    "componentType": {
      "type": "string", 
      "enum": ["conference", "room", "speaker"],
      "description": "Komponentenart"
    },
    "includeTests": {
      "type": "boolean",
      "default": true
    }
  }
}
```
</div>

<div v-click class="text-sm text-green-300 mt-1">
Live-Demo: Generierung einer Room-Management-Komponente →
</div>
</div>
</div>

<!-- JSON-Beispiel ist ausführlicher aber fokussierter -->
<!-- Der Hinweis auf die Live-Demo schafft Spannung und Praxisbezug -->

---

# Der KI-gestützte Entwicklungszyklus

<div class="grid grid-cols-5 gap-2">
  <div v-click class="flex flex-col items-center p-2 bg-blue-50/10 rounded">
    <div class="text-3xl mb-1">📋</div>
    <div class="font-bold">Planung</div>
    <div class="text-xs mt-1">
      • Business Design<br>
      • Architektur<br>
      • User Stories
    </div>
  </div>
  
  <div v-click class="flex flex-col items-center p-2 bg-green-50/10 rounded">
    <div class="text-3xl mb-1">💻</div>
    <div class="font-bold">Implementierung</div>
    <div class="text-xs mt-1">
      • Komponenten<br>
      • Services<br>
      • State
    </div>
  </div>
  
  <div v-click class="flex flex-col items-center p-2 bg-yellow-50/10 rounded">
    <div class="text-3xl mb-1">🔍</div>
    <div class="font-bold">Überprüfung</div>
    <div class="text-xs mt-1">
      • KI-Review<br>
      • Testing<br>
      • Code Quality
    </div>
  </div>
  
  <div v-click class="flex flex-col items-center p-2 bg-purple-50/10 rounded">
    <div class="text-3xl mb-1">⚡</div>
    <div class="font-bold">Optimierung</div>
    <div class="text-xs mt-1">
      • Performance<br>
      • Refactoring<br>
      • Edge Cases
    </div>
  </div>
  
  <div v-click class="flex flex-col items-center p-2 bg-red-50/10 rounded">
    <div class="text-3xl mb-1">📚</div>
    <div class="font-bold">Dokumentation</div>
    <div class="text-xs mt-1">
      • Kommentare<br>
      • Dev Guides<br>
      • User Docs
    </div>
  </div>
</div>

<div v-click class="mt-4 text-center text-sm">
  <strong class="text-blue-300">KI-Unterstützung in jeder Phase</strong> — Nicht nur für Coding
</div>

<!-- Visuelle Darstellung des Zyklus macht den Prozess sofort erfassbar -->
<!-- Die Icons und Farben verbessern die Einprägsamkeit -->

---

# Live-Demo: Vom Prompt zum Polish

<div class="grid grid-cols-2 gap-4">
<div class="space-y-4">

## Iterative Verbesserung einer Komponente

<div v-click class="mb-2">

### 1. Initial: Grundfunktionalität
```typescript
@Component({
  selector: 'app-scheduler',
  template: `<div>Basic scheduler</div>`
})
export class SchedulerComponent {}
```

</div>

<div v-click>

### 2. KI-Review & Evolution
```typescript
@Component({
  selector: 'app-scheduler',
  changeDetection: OnPush,
  // Verbesserte Implementierung...
})
```

</div>
</div>

<div v-click class="pl-4">

## Review-Prompting

<div class="bg-gray-700/50 p-3 rounded text-xs">

```
Überprüfe diese Scheduler-Komponente auf:
1. Performance-Probleme
2. Zugänglichkeit (WCAG 2.1 AA)
3. Einhaltung unserer Best Practices
4. Edge Cases: Überlappende Meetings
```

</div>

<div class="mt-4 space-y-2">
<div class="flex items-center">
  <div class="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
  <div class="text-sm">OnPush Change Detection hinzugefügt</div>
</div>
<div class="flex items-center">
  <div class="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
  <div class="text-sm">ARIA-Labels für bessere Zugänglichkeit</div>
</div>
<div class="flex items-center">
  <div class="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
  <div class="text-sm">Konfliktlösung für überlappende Events</div>
</div>
</div>

</div>
</div>

<!-- Die Live-Demo wird durch konkrete Code-Beispiele greifbarer -->
<!-- Der Review-Prompt zeigt konkrete, anwendbare Verbesserungen -->

---

# Hands-on: Teams & Features

<div class="grid grid-cols-2 gap-x-6">
<div>

## Workshop-Setup
<v-clicks>

- **Basis-App**: JWT Auth, Firebase, Material UI
- **Team-Größe**: 2-3 Personen
- **Materialien**: Instruction-Files, Prompt-Templates
- **Zeit**: 25 Minuten für Feature-Entwicklung

</v-clicks>
</div>

<div class="space-y-4">

## Feature-Zuweisungen
<div class="grid grid-cols-3 gap-2">
  <div v-click class="bg-blue-700/30 p-2 rounded-lg text-center">
    <div class="text-2xl">🏢</div>
    <div class="text-xs font-bold">Konferenz-Management</div>
  </div>
  <div v-click class="bg-green-700/30 p-2 rounded-lg text-center">
    <div class="text-2xl">👥</div>
    <div class="text-xs font-bold">Speaker & Sessions</div>
  </div>
  <div v-click class="bg-yellow-700/30 p-2 rounded-lg text-center">
    <div class="text-2xl">📅</div>
    <div class="text-xs font-bold">Interaktiver Zeitplan</div>
  </div>
  <div v-click class="bg-purple-700/30 p-2 rounded-lg text-center">
    <div class="text-2xl">🎟️</div>
    <div class="text-xs font-bold">Registrierung</div>
  </div>
  <div v-click class="bg-red-700/30 p-2 rounded-lg text-center">
    <div class="text-2xl">⭐</div>
    <div class="text-xs font-bold">Feedback-System</div>
  </div>
</div>

<div v-click class="mt-4 text-sm">
Jedes Team wird ein Feature mit Agentic Coding entwickeln und seine Erfahrungen teilen.
</div>
</div>
</div>

<!-- Visuelle Darstellung der Features macht die Auswahl attraktiver -->
<!-- Konkretere Workshop-Details verbessern die Vorbereitung -->

---

# Erfolgreiche Gruppenarbeit

<div class="grid grid-cols-2 gap-x-4">
<div>

## Zeitplan für Teams
<v-clicks>

<div class="flex items-center mb-2">
  <div class="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center mr-2">5m</div>
  <div><strong>Planung</strong>: Features verstehen & Strategie</div>
</div>

<div class="flex items-center mb-2">
  <div class="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center mr-2">15m</div>
  <div><strong>Entwicklung</strong>: KI-gestützte Implementierung</div>
</div>

<div class="flex items-center">
  <div class="bg-purple-500 w-8 h-8 rounded-full flex items-center justify-center mr-2">5m</div>
  <div><strong>Reflexion</strong>: Dokumentation der Erkenntnisse</div>
</div>

</v-clicks>
</div>

<div>

## Erfolgs-Checkliste
<v-clicks>

- ✅ **Progressiver Ansatz** demonstrieren
  - Von einfachem Prompting zu MCP-Tools

- ✅ **Techniken mischen**
  - Chat, Instruction-Files, Templates

- ✅ **Erkenntnisse dokumentieren**
  - Was funktionierte gut? Was nicht?

- ✅ **Einen Aha-Moment** identifizieren
  - Die überraschendste KI-Fähigkeit

</v-clicks>
</div>
</div>

<!-- Der kreisförmige Zeitplan und die Checkliste machen die Anforderungen klarer -->
<!-- Die Betonung des "Aha-Moments" fördert die Reflexion und den Workshop-Wert -->

---

# Erkenntnisse & Diskussion

<div class="grid grid-cols-2 gap-x-8">
<div>

## Team-Präsentationen
<v-clicks>

- Jedes Team hat **2 Minuten** für:
  - Feature-Demo
  - Größte Herausforderung 
  - Überraschendste Erkenntnis

- Wir sammeln die **Top-3 Insights** jedes Teams
  - Welche Technik sparte am meisten Zeit?
  - Wo half KI am meisten?

</v-clicks>
</div>

<div>

## Leitfragen für alle
<v-clicks>

<div class="space-y-3">
  <div class="bg-blue-50/10 p-2 rounded">
    "Welche Agentic Coding Technik hat euer Team am meisten vorangebracht?"
  </div>
  
  <div class="bg-green-50/10 p-2 rounded">
    "Wo hat die KI eure Erwartungen übertroffen oder enttäuscht?"
  </div>
  
  <div class="bg-purple-50/10 p-2 rounded">
    "Welche spezifischen Angular-Herausforderungen konntet ihr mit KI lösen?"
  </div>
  
  <div class="bg-yellow-50/10 p-2 rounded">
    "Was werdet ihr ab Montag in eurem Workflow einsetzen?"
  </div>
</div>

</v-clicks>
</div>
</div>

<!-- Klare Struktur für die Team-Präsentationen hilft Zeit zu sparen -->
<!-- Die letzte Frage "ab Montag" fördert konkrete Umsetzungspläne -->

---

# Weiterführende Ressourcen

<div class="grid grid-cols-2 gap-8">
<div class="space-y-4">

## Workshop-Materialien
<v-clicks>

- 📁 **GitHub Repository**
  - github.com/MrBacony/et-agentic-coding

- 🧰 **Enthaltene Ressourcen**
  - Basis-App (Angular 17, ready-to-run)
  - Instruction & Prompt Libraries
  - MCP-Tool-Konfigurationen
  - Feature-Anforderungen

</v-clicks>
</div>

<div class="space-y-4">

## Zum Weitermachen
<v-clicks>

- 🌐 **Community & Support**
  - Discord: [discord.gg/agentic-coding](https://discord.gg/agentic-coding)
  - Monatliche Meetups (online)

- 📚 **Weiterbildung**
  - "Advanced Agentic Coding" Workshop (Sept 2025)
  - Angular-KI-Integration Kurs (online)
  - MCP-Tool-Entwicklung (Advanced)

</v-clicks>
</div>
</div>

<div v-click class="text-center text-sm mt-6">
<strong class="text-yellow-400">Tipp:</strong> Beginnt mit einfachen Instruction-Dateien in euren bestehenden Projekten
</div>

<!-- Konkrete Links und Ressourcen mit Datumsangaben wirken professioneller -->
<!-- Der praktische Tipp am Ende gibt eine sofortige Handlungsanweisung -->

---

# Der Weg nach vorne

<div class="grid grid-cols-7 gap-4 items-center">
<div class="col-span-4">

## Was ihr heute gelernt habt
<v-clicks>

- 🔍 **Agentic Coding ist ein Spektrum**, nicht ein einziger Ansatz
  - Von einfachen Prompts zu integrierten Workflows
  
- ⚡ **Entwicklungszyklen beschleunigen** mit intelligenter Unterstützung
  - Messbare Produktivitätssteigerung je nach Anwendungsfall
  
- 🛠️ **Strukturierte Ansätze übertreffen** Ad-hoc-Lösungen
  - Instruction-Dateien und Prompt-Templates als Standard

- 📈 **Angular-Entwicklung transformieren** durch KI-Integration
  - Komponenten, Services, State Management, Testing

</v-clicks>
</div>

<div class="col-span-3 flex items-center justify-center">
<div v-click class="bg-gradient-to-r from-blue-500 to-purple-500 p-8 rounded-lg text-center">
  <div class="text-5xl mb-3">🚀</div>
  <div class="text-lg font-bold">Eure Reise beginnt jetzt</div>
  <div class="text-sm mt-2">KI-gestützte Entwicklung<br>ist die neue Normalität</div>
</div>
</div>
</div>

<!-- Qualitative Beschreibung der Vorteile wirkt glaubwürdiger -->
<!-- Das emotionale "Eure Reise beginnt jetzt" schafft eine stärkere Verbindung -->

---

# Vielen Dank!

<div class="grid grid-cols-3 gap-8 mt-8">
  <div>
    <div class="text-2xl mb-2">🌐</div>
    <div class="font-bold">Website</div>
    <div class="text-sm opacity-80">agentic-coding.dev</div>
  </div>
  
  <div>
    <div class="text-2xl mb-2">📱</div>
    <div class="font-bold">Kontakt</div>
    <div class="text-sm opacity-80">@MrBacony</div>
  </div>
  
  <div>
    <div class="text-2xl mb-2">📚</div>
    <div class="font-bold">Ressourcen</div>
    <div class="text-sm opacity-80">github.com/MrBacony</div>
  </div>
</div>

<div class="text-5xl mt-12">❓</div>
<div class="text-xl mt-4 font-bold">Fragen?</div>

<!-- Eine professionelle Abschlussfolie mit Kontaktdaten und Call-to-Action -->
