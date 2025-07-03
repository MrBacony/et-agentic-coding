# Arbeitspaket 5: Zeitplanung und Terminplanung

## Übersicht

Dieses Arbeitspaket fokussiert sich auf die zeitliche Planung von Konferenzen, die Erstellung und Verwaltung von Zeitplänen sowie die Erkennung und Lösung von Zeitkonflikten. Es bietet leistungsstarke visuelle Werkzeuge für die Zeitplanung und stellt sicher, dass Konferenzen reibungslos und ohne Überschneidungen ablaufen.

## Library-Struktur

```
libs/
  bitference-scheduler/
    src/
      lib/
        components/            # Wiederverwendbare UI-Komponenten
          scheduler-view/
          calendar-grid/
          timeline-view/
          conflict-detector/
          schedule-exporter/
          drag-drop-scheduler/
          time-block-editor/
        services/              # Datenmanagement-Services
          scheduler.service.ts
          calendar.service.ts
          conflict.service.ts
          export.service.ts
        models/                # Typen und Interfaces (falls nicht in core)
          schedule.model.ts
          time-block.model.ts
          conflict.model.ts
        utils/                 # Hilfsfunktionen
          conflict-detection.ts
          ical-generator.ts
          pdf-generator.ts
      pages/                   # Seiten (AnalogJS)
        scheduler/
          index.page.ts
          calendar.page.ts
          conflicts.page.ts
          timeline.page.ts
          publish.page.ts
      api/                     # API-Endpunkte (AnalogJS)
        routes/
          schedule/
            index.get.ts                     # Aktuellen Zeitplan abrufen
            index.put.ts                     # Zeitplan aktualisieren
            session/
              index.post.ts                  # Session zum Zeitplan hinzufügen
              [id].put.ts                    # Session im Zeitplan aktualisieren
              [id].delete.ts                 # Session aus Zeitplan entfernen
            conflicts.get.ts                 # Konflikte im Zeitplan identifizieren
            publish.post.ts                  # Zeitplan veröffentlichen
            versions.get.ts                  # Zeitplanversionen abrufen
            restore/
              [version].post.ts              # Zeitplanversion wiederherstellen
            export/
              ical.get.ts                    # Zeitplan als iCal exportieren
              pdf.get.ts                     # Zeitplan als PDF exportieren
```

## Funktionsumfang

### Zeitplanung

- Visuelle Kalenderoberfläche für die Zeitplanung
  - Tag-, Wochen- und Monatsansichten
  - Detailansicht für bestimmte Zeitabschnitte
  - Überlappende Zeitblöcke visuell hervorheben
- Drag-and-Drop-Funktionalität für zeitliche Anpassungen
  - Verschieben von Sessions im Zeitplan
  - Ändern der Dauer von Sessions
  - Zeitslotsbasierte Planung
- Konflikterkennung und -lösung
  - Identifizierung von Referenten-Konflikten (gleiche Person, gleiche Zeit)
  - Raumbelegungskonflikte
  - Überlappungen bei ähnlichen Interessen oder Themen
- Zeitplanversionierung und Veröffentlichungskontrolle
  - Speichern von Entwürfen
  - Veröffentlichungshistorie
  - Wiederherstellung früherer Versionen

### Terminplanung

- Persönliche Zeitplanerstellung für Teilnehmer
  - Interessenbasierte Vorschläge
  - Konfliktprüfung bei persönlichen Terminplänen
- Zeitplanfilterung nach verschiedenen Kriterien
  - Nach Track, Referent oder Sessiontyp
  - Nach Ort oder Raum
  - Nach Schwierigkeitsgrad oder Zielgruppe
- Zeitplanexportoptionen
  - PDF-Export für Druck
  - iCal-Export für Kalender-Apps
  - JSON/API für Integration mit anderen Systemen
- Benachrichtigungssystem für Zeitplanänderungen

## Integration mit anderen Modulen

- **Conference Management**: Zeitrahmen der Konferenz
- **Speaker Management**: Verfügbarkeiten und Sessioninformationen
- **Venue Management**: Rauminformationen und Verfügbarkeiten
- **Track Management**: Trackbezogene Planung und Koordination
- **Public Interface**: Anzeige von Zeitplänen für Teilnehmer
- **Feedback System**: Zeitabhängige Feedbackerfassung

## Technische Anforderungen

- Angular-Standalone-Komponenten mit Angular Material UI
- Fortschrittliche Kalender- und Zeitplankomponenten
- Drag-and-Drop-Funktionalität mit Angular CDK
- Komplexe Konflikterkennungsalgorithmen
- PDF- und iCal-Generierung
- Responsive Design mit TailwindCSS
- Angular Signals für reaktives State Management

## API-Endpunkte

Die API-Routen folgen den AnalogJS-Best-Practices mit HTTP-Methoden im Dateinamen:

```
# Zeitplanverwaltung
GET    /api/schedule                -> schedule/index.get.ts
PUT    /api/schedule                -> schedule/index.put.ts
POST   /api/schedule/session        -> schedule/session/index.post.ts
PUT    /api/schedule/session/:id    -> schedule/session/[id].put.ts
DELETE /api/schedule/session/:id    -> schedule/session/[id].delete.ts
GET    /api/schedule/conflicts      -> schedule/conflicts.get.ts
POST   /api/schedule/publish        -> schedule/publish.post.ts
GET    /api/schedule/versions       -> schedule/versions.get.ts
POST   /api/schedule/restore/:version -> schedule/restore/[version].post.ts

# Export-Funktionen
GET    /api/schedule/export/ical    -> schedule/export/ical.get.ts
GET    /api/schedule/export/pdf     -> schedule/export/pdf.get.ts
```

Beispiel-Implementierung:

```typescript
// libs/bitference-scheduler/src/api/routes/schedule/conflicts.get.ts

import { defineEventHandler } from 'h3';
import { ConflictService } from '../../../lib/services/conflict.service';

export default defineEventHandler(async (event) => {
  const conflictService = new ConflictService();
  
  try {
    const conflicts = await conflictService.detectScheduleConflicts();
    return {
      conflicts,
      count: conflicts.length,
      hasConflicts: conflicts.length > 0
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Fehler bei der Konflikterkennung',
      data: { error: error.message }
    });
  }
});
```

## Erfolgsmetriken

- 90% konfliktfreie Zeitplanung beim ersten Entwurf
- Reduzierung von Zeitplanänderungen nach Veröffentlichung um 50%
- Hohe Benutzerfreundlichkeit des Planungstools: Bewertung > 4,4/5
- 80% der Teilnehmer nutzen persönliche Zeitpläne
- Zeit für die Erstellung eines kompletten Konferenzzeitplans reduziert um 70%
