# Arbeitspaket 6: Öffentliches Programm und Teilnehmer-Interface

## Übersicht

Dieses Arbeitspaket umfasst die Entwicklung des öffentlichen Interfaces für Konferenzteilnehmer. Es stellt Funktionen bereit, mit denen Teilnehmer das Konferenzprogramm durchsuchen, personalisierte Zeitpläne erstellen und auf relevante Informationen zugreifen können. Dieses Modul bildet die Hauptschnittstelle für die Endbenutzer während der Konferenz.

## Library-Struktur

```
libs/
  bitference-public/
    src/
      lib/
        components/            # Wiederverwendbare UI-Komponenten
          public-schedule/
          schedule-filter/
          session-card/
          speaker-card/
          my-schedule/
          program-search/
          offline-indicator/
          notification-center/
        services/              # Datenmanagement-Services
          public-schedule.service.ts
          attendee-schedule.service.ts
          notification.service.ts
          offline.service.ts
        models/                # Typen und Interfaces (falls nicht in core)
          public-view.model.ts
          attendee-schedule.model.ts
          filter.model.ts
        utils/                 # Hilfsfunktionen
          schedule-formatter.ts
          search-algorithm.ts
          local-storage.ts
      pages/                   # Seiten (AnalogJS)
        public/
          index.page.ts
          schedule.page.ts
          sessions/
            [id].page.ts
          speakers/
            [id].page.ts
          my-schedule.page.ts
          search.page.ts
      api/                     # API-Endpunkte (AnalogJS)
        routes/
          public/
            schedule.get.ts                  # Öffentlichen Zeitplan abrufen
            sessions/
              [id].get.ts                    # Details einer Session abrufen
            speakers/
              [id].get.ts                    # Details eines Referenten abrufen
            search.get.ts                    # Programm durchsuchen
            my-schedule/
              index.get.ts                   # Persönlichen Zeitplan abrufen
              add.post.ts                    # Session zum persönlichen Zeitplan hinzufügen
              remove.delete.ts               # Session aus persönlichem Zeitplan entfernen
            notifications.get.ts             # Benachrichtigungen für den Teilnehmer abrufen
```

## Funktionsumfang

### Öffentliches Programm

- Mobile-freundliche Programmanzeige
  - Optimiert für verschiedene Bildschirmgrößen
  - Schnelle Ladezeiten auch bei langsamen Verbindungen
- Anpassbare Programmansichten
  - Nach Tag, Track oder Raum
  - Liste oder Zeitplan-Darstellung
  - Kompakte oder detaillierte Ansicht
- Sessiondetails mit Referenteninformationen
  - Vollständige Beschreibungen und Lernziele
  - Speaker-Profile mit Foto und Bio
  - Präsentationsmaterialien (falls verfügbar)
- Such- und Filteroptionen
  - Volltextsuche über alle Programminhalte
  - Filterung nach verschiedenen Kriterien
  - Sortierung nach Relevanz oder Zeit

### Teilnehmer-Interface

- Persönliche Programmerstellung für Teilnehmer
  - Hinzufügen von Sessions zum persönlichen Zeitplan
  - Kennzeichnung von Favoriten
  - Automatische Konfliktwarnung bei überlappenden Sessions
- Benachrichtigungssystem für Programmänderungen
  - Push-Benachrichtigungen (optional)
  - Email-Updates
  - In-App-Benachrichtigungen
- Offline-Zugriff auf Programminformationen
  - Caching wichtiger Daten
  - Synchronisation bei Wiederverbindung
  - Minimaler Datenverbrauch
- Personalisierte Empfehlungen (optional)
  - Basierend auf gewählten Sessions
  - Basierend auf Teilnehmerpräferenzen

## Integration mit anderen Modulen

- **Conference Management**: Konferenzdaten für öffentliche Anzeige
- **Speaker Management**: Referenteninformationen für öffentliche Profile
- **Venue Management**: Orts- und Rauminformationen für Navigation
- **Track Management**: Darstellung von Track-Informationen und Farbcodes
- **Schedule Management**: Zugriff auf den veröffentlichten Zeitplan
- **Feedback System**: Integration von Feedback-Eingabeformularen
- **Authentication**: Nutzung des vorhandenen Auth-Systems für personalisierte Features

## Technische Anforderungen

- Angular-Standalone-Komponenten mit Angular Material UI
- Progressive Web App (PWA) Funktionalitäten für Offline-Zugriff
- Hochoptimierte Performance für mobile Geräte
- Responsive Design mit TailwindCSS
- Erweiterte Suchfunktionen mit Filtern und Sortierung
- Angular Signals für reaktives State Management
- Service Worker für Offline-Funktionalität

## API-Endpunkte

Die API-Routen folgen den AnalogJS-Best-Practices mit HTTP-Methoden im Dateinamen:

```
# Öffentliches Programm
GET    /api/public/schedule         -> public/schedule.get.ts
GET    /api/public/sessions/:id     -> public/sessions/[id].get.ts
GET    /api/public/speakers/:id     -> public/speakers/[id].get.ts
GET    /api/public/search           -> public/search.get.ts

# Teilnehmer-Interface
GET    /api/public/my-schedule      -> public/my-schedule/index.get.ts
POST   /api/public/my-schedule/add  -> public/my-schedule/add.post.ts
DELETE /api/public/my-schedule/remove -> public/my-schedule/remove.delete.ts
GET    /api/public/notifications    -> public/notifications.get.ts
```

Beispiel-Implementierung:

```typescript
// libs/bitference-public/src/api/routes/public/search.get.ts

import { defineEventHandler, getQuery } from 'h3';
import { PublicSearchService } from '../../../lib/services/public-search.service';

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const searchTerm = query.q?.toString() || '';
  const filter = query.filter?.toString() || '';
  
  const searchService = new PublicSearchService();
  
  try {
    const results = await searchService.searchProgram(searchTerm, filter);
    return results;
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Fehler bei der Programmsuche',
      data: { error: error.message }
    });
  }
});
```

## Erfolgsmetriken

- 80% der Teilnehmer nutzen aktiv das öffentliche Interface
- Durchschnittliche Session-Findungszeit < 30 Sekunden
- Nutzerzufriedenheit mit der Benutzeroberfläche > 4,5/5
- 90% erfolgreiche Offline-Nutzung während der Konferenz
- Reduzierung der Support-Anfragen bezüglich Programminformationen um 70%
