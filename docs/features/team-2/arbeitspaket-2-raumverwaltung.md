# Arbeitspaket 2: Veranstaltungsort und Raumverwaltung

## Übersicht

Dieses Arbeitspaket befasst sich mit der Verwaltung von Veranstaltungsorten und Räumen für Konferenzen. Es ermöglicht die detaillierte Konfiguration von Veranstaltungsorten, die Verwaltung von Räumen und deren Eigenschaften sowie die Handhabung von Raumbelegungen und -konflikten.

## Library-Struktur

```
libs/
  bitference-venue/
    src/
      lib/
        components/            # Wiederverwendbare UI-Komponenten
          venue-form/
          venue-list/
          venue-details/
          room-form/
          room-list/
          floor-plan/
          room-setup/
        services/              # Datenmanagement-Services
          venue.service.ts
          room.service.ts
        models/                # Typen und Interfaces (falls nicht in core)
          venue.model.ts
          room.model.ts
        utils/                 # Hilfsfunktionen
          capacity-calculator.ts
          conflict-detector.ts
      pages/                   # Seiten (AnalogJS)
        venues/
          index.page.ts
          [id].page.ts
          new.page.ts
          [id]/
            rooms/
              index.page.ts
              [roomId].page.ts
              new.page.ts
      api/                     # API-Endpunkte (AnalogJS)
        routes/
          venues/
            index.get.ts                     # Liste aller Veranstaltungsorte
            index.post.ts                    # Neuen Veranstaltungsort erstellen
            [id].get.ts                      # Details eines Veranstaltungsortes abrufen
            [id].put.ts                      # Veranstaltungsort aktualisieren
            [id].delete.ts                   # Veranstaltungsort löschen
            [id]/
              rooms/
                index.get.ts                 # Räume eines Veranstaltungsortes abrufen
                index.post.ts                # Neuen Raum erstellen
                [roomId].get.ts              # Details eines Raums abrufen
                [roomId].put.ts              # Raum aktualisieren
                [roomId].delete.ts           # Raum löschen
              floorplan.get.ts               # Gebäudeplan abrufen
              floorplan.put.ts               # Gebäudeplan aktualisieren
```

## Funktionsumfang

### Veranstaltungsortverwaltung

- Konfiguration von Veranstaltungsorten
  - Adresse, Karten, Einrichtungen, Barrierefreiheit
  - Kontaktinformationen und Notfallkontakte
  - Flächenpläne und Navigationshilfen
- Verwaltung mehrerer Veranstaltungsorte für große Konferenzen
- Upload und Verwaltung von Gebäudeplänen und Kartenansichten
- Informationen zu Anreise, Parkmöglichkeiten und öffentlichen Verkehrsmitteln

### Raumverwaltung

- Hinzufügen, Bearbeiten und Zuweisen von Räumen innerhalb von Veranstaltungsorten
- Tracking von Raumkapazitäten und verfügbarer Ausstattung
  - Sitzplatzkapazität
  - Technische Ausrüstung (Beamer, Mikrofone, etc.)
  - Barrierefreiheit
- Verwaltung von Raumeinrichtungskonfigurationen
  - Theater, Klassenzimmer, Konferenztisch, etc.
  - Anpassbare Bestuhlung und Ausrüstungsoptionen
- Behandlung von Raumbuchungskonflikten und Planungseinschränkungen
- Visueller Raum-Editor für die Konfiguration der Raumeinrichtung

## Integration mit anderen Modulen

- **Conference Management**: Zuweisung von Veranstaltungsorten zu Konferenzen
- **Session Management**: Bereitstellung von Räumen für Sessionplanung
- **Schedule Management**: Raumverfügbarkeiten für die Zeitplanung
- **Public Interface**: Raum- und Ortsinformationen für Teilnehmer
- **Track Management**: Unterstützung der räumlichen Zuordnung von Tracks

## Technische Anforderungen

- Angular-Standalone-Komponenten mit Angular Material UI
- Interaktive Raumplanungstools mit Canvas oder SVG
- Drag-and-Drop-Funktionalität für Raumkonfiguration
- Responsive Design mit TailwindCSS
- Konflikterkennungsalgorithmen für Raumbelegungen
- Integration von Kartendiensten (optional: Google Maps, OpenStreetMap)

## API-Endpunkte

Die API-Routen folgen den AnalogJS-Best-Practices mit HTTP-Methoden im Dateinamen:

```
# Veranstaltungsorte
GET    /api/venues                -> venues/index.get.ts
POST   /api/venues                -> venues/index.post.ts
GET    /api/venues/:id            -> venues/[id].get.ts
PUT    /api/venues/:id            -> venues/[id].put.ts
DELETE /api/venues/:id            -> venues/[id].delete.ts

# Räume
GET    /api/venues/:id/rooms      -> venues/[id]/rooms/index.get.ts
POST   /api/venues/:id/rooms      -> venues/[id]/rooms/index.post.ts
GET    /api/venues/:id/rooms/:roomId  -> venues/[id]/rooms/[roomId].get.ts
PUT    /api/venues/:id/rooms/:roomId  -> venues/[id]/rooms/[roomId].put.ts
DELETE /api/venues/:id/rooms/:roomId  -> venues/[id]/rooms/[roomId].delete.ts

# Gebäudepläne
GET    /api/venues/:id/floorplan  -> venues/[id]/floorplan.get.ts
PUT    /api/venues/:id/floorplan  -> venues/[id]/floorplan.put.ts
```

Beispiel-Implementierung:

```typescript
// libs/bitference-venue/src/api/routes/venues/[id]/rooms/index.get.ts

import { defineEventHandler } from 'h3';
import { RoomService } from '../../../../../lib/services/room.service';

export default defineEventHandler(async (event) => {
  const venueId = event.context.params.id;
  const roomService = new RoomService();
  
  try {
    const rooms = await roomService.getRoomsByVenueId(venueId);
    return rooms;
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Fehler beim Abrufen der Räume',
      data: { error: error.message }
    });
  }
});
```

## Erfolgsmetriken

- Effiziente Raumzuweisung mit 90% Auslastung
- Reduzierung von Raumkonflikten um 50%
- Benutzerfreundlichkeit der Raumplanungstools: Bewertung > 4,3/5
- Positive Teilnehmerbewertung der Veranstaltungsorte und Navigation: > 4,0/5
