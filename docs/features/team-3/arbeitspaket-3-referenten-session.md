# Arbeitspaket 3: Referenten- und Sessionverwaltung

## Übersicht

Dieses Arbeitspaket konzentriert sich auf die Verwaltung von Referenten (Speakern) und deren Sessions innerhalb der Bitference-Plattform. Es umfasst alle Funktionen zur Erfassung und Pflege von Sprecherinformationen, die Organisation von Sessioninhalten sowie die Kommunikation mit den Referenten.

## Library-Struktur

```
libs/
  bitference-speakers/
    src/
      lib/
        components/            # Wiederverwendbare UI-Komponenten
          speaker-form/
          speaker-list/
          speaker-detail/
          session-form/
          session-list/
          session-detail/
          speaker-dashboard/
          material-uploader/
        services/              # Datenmanagement-Services
          speaker.service.ts
          session.service.ts
          communication.service.ts
        models/                # Typen und Interfaces (falls nicht in core)
          speaker.model.ts
          session.model.ts
        utils/                 # Hilfsfunktionen
          bio-formatter.ts
          session-validator.ts
      pages/                   # Seiten (AnalogJS)
        speakers/
          index.page.ts
          [id].page.ts
          new.page.ts
          dashboard.page.ts
        sessions/
          index.page.ts
          [id].page.ts
          new.page.ts
          types.page.ts
      api/                     # API-Endpunkte (AnalogJS)
        routes/
          speakers/
            index.get.ts                   # Liste aller Referenten
            index.post.ts                  # Neuen Referenten erstellen
            [id].get.ts                    # Details eines Referenten abrufen
            [id].put.ts                    # Referenten aktualisieren
            [id].delete.ts                 # Referenten löschen
            [id]/
              sessions.get.ts              # Sessions eines Referenten abrufen
              invite.post.ts               # Einladung an Referenten senden
          sessions/
            index.get.ts                   # Liste aller Sessions
            index.post.ts                  # Neue Session erstellen
            types.get.ts                   # Verfügbare Sessiontypen abrufen
            [id].get.ts                    # Details einer Session abrufen
            [id].put.ts                    # Session aktualisieren
            [id].delete.ts                 # Session löschen
            [id]/
              materials.post.ts            # Materialien für Session hochladen
```

## Funktionsumfang

### Referentenverwaltung

- Erstellung und Verwaltung von Referentenprofilen
  - Biografische Informationen und Fotos
  - Kontaktdaten und Kommunikationspräferenzen
  - Expertise und vorherige Sprechererfahrungen
- Verfolgung der Kommunikation mit Referenten
  - Einladungs- und Bestätigungsworkflow
  - Kommunikationshistorie und Notizen
- Verwaltung von speziellen Anforderungen
  - Technische Bedürfnisse
  - Zeitliche Einschränkungen
  - Reise- und Unterkunftspräferenzen
- Vergütungs- und Incentive-Tracking
- Bewertungssystem für Referenten und historische Daten

### Sessionverwaltung

- Erstellung verschiedener Sessiontypen
  - Keynotes, Workshops, Panels, Lightning Talks, etc.
  - Dauer und Formatdefinition
- Verwaltung von Sessioninhalten
  - Titel, Beschreibung, Lernziele
  - Schwierigkeitsgrad und Zielgruppe
  - Voraussetzungen oder Vorbereitungsanforderungen
- Upload und Organisation von Präsentationsmaterialien
  - Folien, Handouts, Code-Beispiele
  - Vortragsnotizen und Zusatzmaterialien
- Zuordnung von Referenten zu Sessions
- Verwaltung von Co-Referenten für gemeinsame Präsentationen
- Stornierung und Neuplanung von Sessions

## Integration mit anderen Modulen

- **Conference Management**: Kontext für Referenten und Sessions
- **Venue Management**: Raumanforderungen für Sessions
- **Track Management**: Zuordnung von Sessions zu thematischen Tracks
- **Schedule Management**: Verfügbarkeiten von Referenten für die Zeitplanung
- **Public Interface**: Anzeige von Referenten- und Sessioninformationen
- **Feedback System**: Sammlung von Session-Feedback und Referentenbewertungen
- **Authentication**: Spezielle Zugriffsrechte für Referenten (Nutzung des vorhandenen Systems)

## Technische Anforderungen

- Angular-Standalone-Komponenten mit Angular Material UI
- Fortschrittlicher Datei-Upload für Präsentationsmaterialien
- Rich-Text-Editor für Biographien und Sessionbeschreibungen
- Responsive Design mit TailwindCSS
- Angular Signals für reaktives State Management
- Email-Integration für Referentenkommunikation

## API-Endpunkte

Die API-Routen folgen den AnalogJS-Best-Practices mit HTTP-Methoden im Dateinamen:

```
# Referentenverwaltung
GET    /api/speakers                -> speakers/index.get.ts
POST   /api/speakers                -> speakers/index.post.ts
GET    /api/speakers/:id            -> speakers/[id].get.ts
PUT    /api/speakers/:id            -> speakers/[id].put.ts
DELETE /api/speakers/:id            -> speakers/[id].delete.ts
GET    /api/speakers/:id/sessions   -> speakers/[id]/sessions.get.ts
POST   /api/speakers/:id/invite     -> speakers/[id]/invite.post.ts

# Sessionverwaltung
GET    /api/sessions                -> sessions/index.get.ts
POST   /api/sessions                -> sessions/index.post.ts
GET    /api/sessions/:id            -> sessions/[id].get.ts
PUT    /api/sessions/:id            -> sessions/[id].put.ts
DELETE /api/sessions/:id            -> sessions/[id].delete.ts
GET    /api/sessions/types          -> sessions/types.get.ts
POST   /api/sessions/:id/materials  -> sessions/[id]/materials.post.ts
```

Beispiel-Implementierung:

```typescript
// libs/bitference-speakers/src/api/routes/speakers/[id]/sessions.get.ts

import { defineEventHandler } from 'h3';
import { SessionService } from '../../../../lib/services/session.service';

export default defineEventHandler(async (event) => {
  const speakerId = event.context.params.id;
  const sessionService = new SessionService();
  
  try {
    const sessions = await sessionService.getSessionsBySpeakerId(speakerId);
    return sessions;
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Fehler beim Abrufen der Sessions',
      data: { error: error.message }
    });
  }
});
```

## Erfolgsmetriken

- 90% Erfolgsquote bei Referenteneinladungen und -bestätigungen
- Vollständige Profil- und Sessioninformationen für 95% der Referenten
- Durchschnittliche Zeit für die Sessionerstellung < 5 Minuten
- Benutzerfreundlichkeit der Referenten-Tools: Bewertung > 4,5/5
