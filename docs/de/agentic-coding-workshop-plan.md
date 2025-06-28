# Agentic Coding mit Angular Workshop-Plan

## Workshop-Überblick

**Titel:** Agentic Coding mit Angular beherrschen  
**Dauer:** 90 Minuten  
**Ziele:**
- Das Konzept und die Vorteile von Agentic Coding verstehen
- Lernen, wie man den Entwicklungsworkflow mit KI-Tools schrittweise verbessert
- Praktische Erfahrungen bei der Entwicklung von Angular-Features mit Agentic Coding sammeln
- Erkenntnisse und Best Practices mit anderen Entwicklern teilen

**Zielgruppe:**
- Angular-Entwickler (Fortgeschrittene bis Experten)
- Technische Leiter und Engineering Manager, die an KI-gestützter Entwicklung interessiert sind
- Entwickler, die ihren Workflow mit KI-Tools optimieren möchten

**Voraussetzungen:**
- Erfahrung mit Angular-Entwicklung
- VS Code mit GitHub Copilot-Erweiterung
- Node.js und npm installiert
- Git-Kenntnisse
- GitHub-Konto

## Workshop-Zeitplan

| Zeit (Min) | Aktivität |
|------------|----------|
| 0-5        | Einführung und Einrichtung |
| 5-15       | Präsentation: Einführung in Agentic Coding |
| 15-20      | Überprüfung der Umgebungseinrichtung |
| 20-35      | Praxisteil: Vollständiger App-Entwicklungsworkflow |
| 35-45      | Der iterative Entwicklungszyklus im Agentic Coding |
| 45-50      | Gruppeneinteilung und Planung |
| 50-75      | Gruppenaktivität: Feature-Entwicklung |
| 75-80      | Erfahrungssammlung |
| 80-85      | Gruppenaustausch und Diskussion |
| 85-90      | Abschluss und nächste Schritte |

## Inhaltsdetails

### 1. Einführung in Agentic Coding (10 Minuten)

**Schlüsselkonzepte:**
- Definition von Agentic Coding: KI als aktiver Mitarbeiter in der Entwicklung
- Warum Agentic Coding wichtig ist:
  - Erhöhte Produktivität
  - Reduzierte kognitive Belastung
  - Schnellere Problemlösung
  - Mehr Fokus auf kreative Aspekte der Entwicklung
  
**Verschiedene Ansätze:**
- Code-Vervollständigung und einfache Vorschläge
- Code-Erklärung
- App-Entwicklung mit KI-Unterstützung
- Feature-Entwicklung durch Zusammenarbeit mit KI

**Web-App spezifische Beispiele:**
- Komponenten-Generierung und -Strukturierung
- Service-Implementierung
- Komplexe Formularvalidierung
- State-Management
- Testunterstützung

**Potenzielle Risiken und Herausforderungen:**
- Übermäßiges Vertrauen auf KI-generierten Code ohne angemessenes Verständnis
- Inkonsistenzen in der generierten Code-Qualität über verschiedene Features hinweg
- Mögliche Einführung von Sicherheitslücken, wenn generierter Code nicht richtig überprüft wird
- Wartungsherausforderungen, wenn Teammitglieder unterschiedliche Kompetenzniveaus im Bereich Agentic Coding haben
- Lernkurve für die effektive Strukturierung von Prompts, um optimale Ergebnisse zu erzielen

### 2. Praxisteil: Vollständiger App-Entwicklungsworkflow (15 Minuten)

**Progressive Implementierung für die App-Entwicklung:**

1. **Grundlegendes Copilot-Chat-Prompting**
   - Direkte Prompts im Chat für schnelle Lösungen
   - Beispiel: Erstellen eines App-Architekturplans
   
   ```
   Erstelle einen Architekturplan für eine Angular-Konferenzmanagement-Anwendung, die es Organisatoren 
   ermöglicht, Konferenzdetails wie Daten, Veranstaltungsort, Räume und Tracks zu erstellen und zu 
   bearbeiten. Berücksichtige die Komponentenstruktur, Service-Organisation und den State-Management-Ansatz.
   ```
   
   - Einschränkungen: Repetitiv, Kontext ist sehr beschränkt, nicht teamweit wiederverwendbar

2. **Verwendung von Instruction-Dateien für den Projektkontext**
   - Extrahieren von Basisinformationen in `.instructions.md`-Dateien
   - Beispiel: Projektstruktur- und Standards-Instruktionsdatei
   
   ```markdown
   # Angular-Konferenzmanagement-Projektstruktur
   
   Dieses Projekt folgt Angular-Best-Practices mit folgender Struktur:
   - Komponenten sind nach Features in `/src/app/features/` organisiert (conferences, scheduling, rooms, speakers)
   - Gemeinsam genutzte Komponenten befinden sich in `/src/app/shared/components/` (calendar, venue-map, time-slot-picker)
   - Services befinden sich in `/src/app/core/services/` (conference-api, auth, notification)
   - Modelle befinden sich in `/src/app/core/models/` (conference, track, session, speaker, room)
   - State-Management verwendet NgRx
   
   ## Coding-Standards
   - OnPush Change Detection verwenden
   - SCSS BEM-Methodologie für Styling befolgen
   - Lazy Loading für Feature-Module implementieren
   - Unit-Tests für alle Services und Komponenten schreiben
   ```
   
   - Vorteile: Bietet konsistenten Kontext für alle Prompts, verbessert die KI-Antwortqualität

3. **Verwendung von Prompt-Dateien für wiederverwendbare Workflows**
   - Erstellen strukturierter Prompt-Dateien für wiederkehrende Entwicklungsaufgaben
   - Beispiel: Feature-Modul-Erstellungs-Prompt-Datei
   
   ```markdown
   [ROLLE]
   Du bist ein Angular-Experte, der sich auf die Erstellung gut strukturierter Konferenzmanagement-Features spezialisiert hat.
   
   [ZIEL]
   Erstelle ein vollständiges Angular-Feature-Modul für das Konferenzmanagement mit Komponenten, Services und State-Management.
   
   [ANFORDERUNGEN]
   - Feature-Name: {{featureName}} (z.B. "schedule-management", "room-allocation", "speaker-management")
   - Beschreibung: {{featureDescription}}
   - Erforderliche Komponenten: {{componentList}} (z.B. "schedule-grid", "time-slot-editor", "conflict-detector")
   - Datenmodelle: {{dataModels}} (z.B. "Conference", "Room", "TimeSlot", "Speaker", "Session")
   - API-Endpunkte: {{apiEndpoints}} (z.B. "/api/conferences", "/api/rooms", "/api/schedule")
   
   [AUSGABE]
   1. Modulstruktur mit Routing
   2. Komponentenimplementierungen mit OnPush-Erkennung
   3. Service-Implementierungen
   4. State-Management-Setup (NgRx)
   5. Unit-Tests für Komponenten und Services
   ```
   
   - Vorteile: Standardisierte, wiederverwendbare Workflows für Teammitglieder, konsistente Ausgabestruktur

4. **Verwendung von MCP (Model Context Protocol) für Unternehmenslösungen**
   - Erstellen von benutzerdefinierten MCP-Tools für teamweiten Zugriff und proprietäre Workflows
   - Beispiel: Konferenzmanagement-Komponenten-Generator MCP-Tool
   
   ```json
   {
     "name": "generate-conference-component",
     "description": "Generiert eine Angular-Komponente für Konferenzmanagement-Features",
     "parameters": {
       "componentName": {
         "type": "string",
         "description": "Name der zu generierenden Komponente"
       },
       "componentType": {
         "type": "string",
         "enum": ["conference", "schedule", "room", "track", "speaker", "session"],
         "description": "Art der zu generierenden Konferenzmanagement-Komponente"
       },
       "includeCalendarIntegration": {
         "type": "boolean",
         "default": false,
         "description": "Ob Kalenderintegration einbezogen werden soll"
       },
       "includeDragAndDrop": {
         "type": "boolean",
         "default": false,
         "description": "Ob Drag-and-Drop-Funktionalität für die Planung einbezogen werden soll"
       },
       "includeTests": {
         "type": "boolean",
         "default": true,
         "description": "Ob Unit-Tests einbezogen werden sollen"
       }
     }
   }
   ```
   
   - Vorteile: Proprietäre Workflows können privat gehalten werden, tiefere Integration in die Entwicklungsumgebung, konsistent über Projekte und Teams hinweg
   - Demo: Zeigen, wie das MCP-Tool aufgerufen werden kann, um eine Zeitplanverwaltungskomponente zu generieren

**App-Entwicklungs-Progressions-Demonstration:**

1. Beginnen mit einem grundlegenden Architekturplan für die Konferenz-App (mit Chat-Prompt)
2. Anwenden von Konferenzmanagement-Projektstrukturstandards (mit Instruction-Dateien)
3. Generieren von Terminplanungs- und Raumzuweisungs-Feature-Modulen (mit Prompt-Dateien)
4. Erstellen spezialisierter Komponenten wie dem Drag-and-Drop-Terminplaner (mit MCP-Tools)
5. Anzeigen der fertigen Konferenzmanagement-App-Struktur und Komponenten

**Workshop-Ablauf:**
- Jeder Schritt baut auf dem vorherigen auf und zeigt, wie sich Agentic Coding von einfach zu fortgeschritten entwickelt
- Teilnehmer sehen, wie man von Ad-hoc-Prompting zu systematischen, wiederverwendbaren Ansätzen übergeht
- Betonung auf Team-Zusammenarbeit und Wissensaustausch durch strukturierte Prompts
- Demonstration, wie jeder Ansatz die Antwortqualität, Konsistenz und Entwicklungsgeschwindigkeit verbessert

### 2.1. Der iterative Entwicklungszyklus im Agentic Coding (10 Minuten)

**Planung, Überprüfung und Verfeinerung:**

Die Erstellung einer kompletten Anwendung mit Agentic Coding erfordert einen strukturierten, iterativen Ansatz jenseits einzelner Prompts. Dieser Abschnitt demonstriert den vollständigen Entwicklungszyklus.

1. **Planungsphase**
   - **Business Design Document**: Beginnen mit Geschäftsanforderungen und Benutzerbedürfnissen
     ```
     Erstelle ein umfassendes Business Design Document für unsere Konferenzmanagement-Anwendung, einschließlich:
     1. Benutzer-Personas (Konferenzorganisatoren, Sprecher, Teilnehmer) und Journey Maps
     2. Wesentliche Geschäftsanforderungen (Veranstaltungserstellung, Raumplanung, Sprecherverwaltung) und Erfolgskriterien
     3. Feature-Priorisierung basierend auf den Bedürfnissen der Konferenzorganisatoren
     4. Wettbewerbsanalyse gegenüber bestehenden Konferenzplattformen
     5. Benutzererfahrungsziele und Zugänglichkeitsanforderungen für verschiedene Veranstaltungskontexte
     ```

   - **Architekturplanung**: Verwendung von KI zum Entwerfen der Systemarchitektur basierend auf Geschäftsbedürfnissen
     ```
     Basierend auf unserem Business Design Document erstelle einen detaillierten Architekturplan für unsere 
     Konferenzmanagement-Anwendung, einschließlich:
     1. Modulstruktur mit Lazy-Loading-Strategie für Konferenz-Dashboard, Terminplanung und Administration
     2. State-Management-Ansatz mit NgRx, abgestimmt auf Organisator-Workflows
     3. Authentifizierungsablauf und Sicherheitsüberlegungen für verschiedene Benutzerrollen
     4. API-Schnittstellendesign und Service-Struktur für Konferenzdatenmanagement
     ```
   
   - **Technische Spezifikation**: Generieren detaillierter technischer Spezifikationen aus Anforderungen
     ```
     Basierend auf unseren User Stories für das Terminplanungs-Feature erstelle eine technische 
     Spezifikation mit Komponentenaufschlüsselung, Service-Anforderungen, State-Management und API-Endpunkten.
     Stelle Unterstützung für kritische Planungs-Workflows wie Konflikterkennung, Raumkapazitätsmanagement 
     und Verfügbarkeitsverfolgung von Sprechern sicher.
     ```

2. **Implementierungsphase**
   - **Grundgerüst**: Generieren der initialen Code-Struktur
   - **Komponentenentwicklung**: Erstellen von Feature-Komponenten mit Geschäftslogik
   - **Services und State**: Implementieren von Services und State-Management
   - **Integration**: Verbinden von Komponenten mit Services und State

3. **Überprüfungsphase**
   - **Code-Review-Prompts**: Verwendung von KI als Reviewer
     ```
     Überprüfe diese Terminplanungs-Komponenten-Implementierung auf:
     1. Performance-Probleme, insbesondere bei der Kalenderdarstellung und Zeitslot-Handhabung
     2. Zugänglichkeitskonformität für farbcodierte Planungsschnittstellen
     3. Einhaltung unserer Coding-Standards
     4. Potenzielle Randfälle wie überlappende Sitzungen oder Raum-Doppelbuchungen
     ```
   
   - **Testabdeckungsanalyse**: Identifizieren fehlender Tests
     ```
     Analysiere die Testabdeckung für unseren Raumzuweisungsservice und schlage zusätzliche
     Testfälle vor, die unsere Abdeckung von Konflikterkennung, Kapazitätsbeschränkungen
     und speziellen Ausrüstungsanforderungen verbessern würden.
     ```

4. **Verfeinerungsphase**
   - **Performance-Optimierung**: Gezielte Verbesserungen
     ```
     Unsere Konferenzplan-Kalenderkomponente wird bei großen Veranstaltungen langsam gerendert.
     Analysiere die Implementierung und schlage Optimierungen für verbesserte Rendering-Performance
     beim Anzeigen von Hunderten von Sitzungen über mehrere Tracks hinweg vor.
     ```
   
   - **Refactoring**: Bereinigen des Codes
     ```
     Dieser Sitzungsverwaltungsservice ist mit mehreren Planungsalgorithmen zu komplex geworden.
     Schlage einen Refactoring-Ansatz vor, um die Wartbarkeit zu verbessern und gleichzeitig
     alle bestehenden Funktionen und Planungsregeln zu erhalten.
     ```

5. **Dokumentationsphase**
   - **Code-Kommentare**: Generieren aussagekräftiger Kommentare
   - **Entwicklerdokumentation**: Erstellen von Entwicklerleitfäden
   - **Benutzerdokumentation**: Generieren von Endbenutzerdokumentation

**Schlüsselprinzipien:**
- Immer mit angemessener Planung vor der Implementierung beginnen
- KI zur Code-Überprüfung genauso gründlich einsetzen wie zur Code-Generierung
- Verfeinerung in den Workflow einbauen, nicht als Nachgedanke
- Kontinuierlich dokumentieren, nicht erst am Ende
- Feedback-Schleifen zwischen den Phasen erstellen (Planungserkenntnisse aus Reviews usw.)

**Demo: Iterative Entwicklung**
- Zeigen, wie sich eine initiale Komponente durch mehrere KI-Interaktionen entwickelt
- Demonstrieren, wie Feedback aus Review-Prompts die Implementierung verbessert
- Hervorheben, wie verfeinerte Prompts zu besseren Ergebnissen in jeder Phase führen

### 3. Gruppenaktivität: Feature-Entwicklung (25 Minuten)

**Einrichtung:**
- Basis-Angular-Anwendung mit bereits konfigurierter Authentifizierung und Datenbank
- Jeder Gruppe wird ein anderes Feature zugewiesen
- Zugang zu Instruction-Dateien, Prompt-Dateien und MCP-Server

**Feature-Beispiele:**

1. **Konferenzverwaltung**
   - Formular für Konferenzdetails
   - Raumverwaltung
   - Track-Management
   - Konferenzeinstellungen

2. **Sprecher- und Sitzungsverwaltung**
   - Sprecherprofile erstellen/bearbeiten
   - Sitzungserstellung und -planung
   - Sitzungstypen konfigurieren
   - Raum- und Zeitfenster-Zuweisung

3. **Öffentlicher Konferenzplan**
   - Interaktiver Zeitplan
   - Sitzungsdetails und Sprecherinformationen
   - Persönlicher Zeitplan für Teilnehmer
   - Such- und Filterfunktionen

4. **Registrierung und Ticketing**
   - Mehrstufiges Anmeldeformular
   - Ticket-Management
   - Rabattcode-System
   - Registrierungs-Dashboard

5. **Feedback- und Bewertungssystem**
   - Sitzungsbewertungen
   - Konferenzbewertungsformular
   - Feedback-Dashboard für Organisatoren
   - Gamification-Elemente

**Aktivitätsstruktur:**
- 5 Minuten: Feature-Zuweisung und Planung
- 15 Minuten: Entwicklung mit Agentic Coding
- 5 Minuten: Erfahrungssammlung

**Richtlinien für Gruppen:**
- Alle verfügbaren Agentic-Coding-Techniken verwenden
- Prozess und KI-Interaktionen dokumentieren
- Notieren, was gut funktioniert hat und was herausfordernd war
- Vorbereiten, um Erkenntnisse mit der größeren Gruppe zu teilen

### 4. Diskussion und Abschluss (15 Minuten)

**Gruppenaustausch (10 Minuten):**
- Jede Gruppe präsentiert ihr Feature und ihre Erfahrung (2-3 Minuten pro Gruppe)
- Wichtige Erkenntnisse und Einsichten

**Diskussionsanregungen:**
- Welche Agentic-Coding-Techniken waren am effektivsten?
- Welche Angular-spezifischen Herausforderungen sind aufgetreten?
- Wie hat die KI die Erwartungen nicht erfüllt oder übertroffen?
- Welche Workflows würden Sie in Ihrer täglichen Entwicklung übernehmen?

**Abschluss (5 Minuten):**
- Wichtige Erkenntnisse
- Ressourcen für weiteres Lernen
- Kommunikationskanäle für fortlaufende Diskussion

## Erforderliche Materialien

### Repository-Struktur

```
workshop-materialien/
├── README.md (Einrichtungsanweisungen)
├── basis-app/ (vorkonfigurierte Angular-App)
│   ├── src/
│   ├── ...Angular-Dateien
├── beispiele/
│   ├── instruction-dateien/
│   │   ├── angular-struktur.instructions.md
│   │   ├── state-management.instructions.md
│   │   ├── testing.instructions.md
│   ├── prompt-dateien/
│   │   ├── komponente.prompt.md
│   │   ├── service.prompt.md
│   │   ├── formular.prompt.md
│   ├── mcp-beispiele/
│   │   ├── mcp.json
│   │   ├── tools/
│   │   │   ├── komponenten-analysator/
│   │   │   ├── abhängigkeits-visualisierer/
├── features/
│   ├── konferenzverwaltung/
│   │   ├── anforderungen.md
│   │   ├── ausgangspunkt/
│   ├── zeitplan/
│   │   ├── anforderungen.md
│   │   ├── ausgangspunkt/
│   ├── ...andere Features
```

### Beispieldateien

#### Instruction-Dateien

1. **Angular-Projektstruktur:**
   - Details zur Komponentenorganisation
   - Service-Struktur
   - State-Management-Ansatz

2. **API-Integration:**
   - HTTP-Service-Muster
   - Fehlerbehandlungsstrategien
   - Authentifizierungsablauf

3. **Teststrategie:**
   - Komponententestansätze
   - Service-Testmuster
   - E2E-Testanleitung

#### Prompt-Dateien

1. **Komponentenerstellung:**
   - Struktur für die Generierung von Komponenten
   - Hinweise zur Change-Detection-Strategie
   - Dokumentationsvorlagen

2. **Service-Implementierung:**
   - Dependency Injection-Muster
   - Fehlerbehandlung
   - Retry-Logik

3. **Route-Guard:**
   - Authentifizierungsprüfungen
   - Berechtigungsverifizierung
   - Weiterleitungslogik

### MCP-Server-Konfigurationen

**Beispiel MCP-Tools:**

1. **Komponenten-Analysator:**
   - Analysiert Komponentenstruktur
   - Schlägt Verbesserungen vor
   - Prüft auf Best Practices

2. **Abhängigkeits-Visualisierer:**
   - Kartiert Service-Abhängigkeiten
   - Hebt potenzielle zirkuläre Abhängigkeiten hervor
   - Schlägt Optimierungen vor

3. **Template-Validator:**
   - Überprüft Templates auf Zugänglichkeit
   - Schlägt Performance-Verbesserungen vor
   - Identifiziert potenzielle Probleme

## Einrichtungsanweisungen

### Vorbereitung vor dem Workshop

1. **Repository-Zugriff:**
   - Workshop-Repository klonen
   - `npm install` im basis-app-Verzeichnis ausführen
   - Testen, dass die Anwendung lokal läuft

2. **Tool-Installation:**
   - VS Code mit GitHub Copilot-Erweiterung
   - GitHub Copilot Chat-Erweiterung
   - MCP VS Code-Erweiterung

3. **Umgebungsanforderungen:**
   - Node.js 20+
   - npm 10+
   - Angular CLI 17+
   - Git

### Workshop-Einrichtung

1. **Repository-Struktur:**
   - Main-Branch: Ausgangspunkt
   - Solution-Branches: Fertige Features

2. **Basis-App-Features:**
   - Authentifizierung (JWT)
   - Benutzerverwaltung
   - Firebase/Supabase-Integration
   - Grundlegendes Routing und Layout

## Feature-Zuweisungen

### 1. Konferenzverwaltung

**Anforderungen:**
- Formular für Konferenzdetails
- Raumverwaltung mit Kapazitätseinstellungen
- Track-Management (Frontend, Backend, KI)
- Konferenzeinstellungen (Registrierung, Sichtbarkeit)

**Ausgangspunkt:**
- Konferenz-Service mit CRUD-Methoden
- Grundlegende Konferenzverwaltungskomponente
- Authentifizierungsservice (bereits eingerichtet)

### 2. Sprecher- und Sitzungsverwaltung

**Anforderungen:**
- Sprecherprofile erstellen/bearbeiten
- Sitzungserstellung mit Titel, Beschreibung, Dauer
- Sitzungsplanung mit Raumzuweisung
- Sitzungstypen konfigurieren

**Ausgangspunkt:**
- Sprecher- und Sitzungsservices mit API-Methoden
- Grundlegende Sitzungsverwaltungskomponente
- Zeitfenster-Management-Service

### 3. Öffentlicher Konferenzplan

**Anforderungen:**
- Interaktiver Zeitplan mit Grid-Ansicht
- Detailansicht für Sitzungen und Sprecher
- Persönlicher Zeitplan für Teilnehmer
- Such- und Filterfunktionen

**Ausgangspunkt:**
- Zeitplan-Service mit API-Methoden
- Grundlegende Zeitplan-Komponente
- Komponententemplate für Sitzungsdetails

### 4. Konferenzregistrierung und Ticketing

**Anforderungen:**
- Mehrstufiges Anmeldeformular
- Verschiedene Ticket-Typen und Preisstufen
- Rabattcode-System
- Registrierungs-Dashboard

**Ausgangspunkt:**
- Registrierungs-Service mit API-Endpunkten
- Zahlungsabwicklungsservice (simuliert)
- Grundlegendes Registrierungsformular

### 5. Feedback- und Bewertungssystem

**Anforderungen:**
- Sitzungsbewertungen mit Sternensystem
- Konferenz-Gesamtbewertungsformular
- Feedback-Dashboard für Sprecher und Organisatoren
- Gamification-Elemente für aktive Teilnehmer

**Ausgangspunkt:**
- Feedback-Service mit API-Endpunkten
- Grundlegende Bewertungskomponente
- Analyse-Service für Dashboard

## Moderatoren-Hinweise

### Häufige Probleme und Lösungen

1. **GitHub Copilot-Einrichtung:**
   - Sicherstellen, dass die Authentifizierung funktioniert
   - Überprüfen, ob die Erweiterung richtig aktiviert ist

2. **MCP-Konfiguration:**
   - Überprüfen, ob mcp.json korrekt eingerichtet ist
   - Verbindungen zum Server überprüfen

3. **Basis-App-Probleme:**
   - Behebung häufiger Angular-Fehler
   - Behandlung von Authentifizierungsproblemen

### Diskussionsmoderation

1. **Leitfragen:**
   - "Welche KI-Technik hat Ihnen am meisten Zeit gespart?"
   - "Was hat Sie an den Fähigkeiten oder Grenzen der KI überrascht?"
   - "Wie würden Sie diese Praktiken in Ihren aktuellen Workflow integrieren?"

2. **Teilnahme fördern:**
   - Reihum-Austausch
   - Anonyme Notizen zu Beobachtungen
   - Gruppensynthese

### Zeitmanagement

1. **Zeitplan einhalten:**
   - Visuelle Timer für jeden Abschnitt
   - 5-Minuten-Warnungen vor Übergängen
   - Moderator zirkuliert während der Gruppenarbeit

2. **Anpassungsfähigkeit:**
   - Abschnitte, die bei Zeitverzug gekürzt werden können
   - Zusatzaktivitäten, falls Zeit übrig ist

### Weiterführende Ressourcen

1. **Community:**
   - Discord/Slack-Kanal für fortlaufende Diskussion
   - GitHub-Repository für weitere Beiträge

2. **Lernressourcen:**
   - Artikel über Agentic Coding
   - Angular KI-Integrationstools
   - Beispielprojekte

3. **Nächste Schritte:**
   - Fortgeschrittener Agentic-Coding-Workshop
   - Entwicklung benutzerdefinierter MCP-Tools
   - Team-Workflow-Integrationsstrategien

## Fazit

Dieser Workshop bietet eine umfassende Einführung in Agentic Coding mit Angular und ermöglicht den Teilnehmern, die Vorteile aus erster Hand zu erleben und praktische Fähigkeiten zu entwickeln, die sie sofort in ihren Entwicklungsworkflows anwenden können. Die Kombination aus theoretischem Verständnis und praktischer Übung stellt sicher, dass die Teilnehmer mit Wissen und praktischer Erfahrung den Workshop verlassen.
