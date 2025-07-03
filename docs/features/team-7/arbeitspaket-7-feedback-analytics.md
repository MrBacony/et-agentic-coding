# Arbeitspaket 7: Feedback und Analytics

## Übersicht

Dieses Arbeitspaket umfasst die Entwicklung des Feedback-Systems und der analytischen Komponenten der Bitference-Plattform. Es ermöglicht die Erfassung, Analyse und Visualisierung von Teilnehmerfeedback sowie die Generierung aussagekräftiger Berichte und Statistiken zur Konferenzleistung.

## Library-Struktur

```
libs/
  bitference-feedback/
    src/
      lib/
        components/            # Wiederverwendbare UI-Komponenten
          feedback-form/
          feedback-list/
          feedback-stats/
          rating-widget/
          analytics-dashboard/
          chart-display/
          report-generator/
        services/              # Datenmanagement-Services
          feedback.service.ts
          analytics.service.ts
          report.service.ts
        models/                # Typen und Interfaces (falls nicht in core)
          feedback.model.ts
          analytics.model.ts
          report.model.ts
        utils/                 # Hilfsfunktionen
          feedback-analyzer.ts
          stats-calculator.ts
          chart-generator.ts
      pages/                   # Seiten (AnalogJS)
        feedback/
          index.page.ts
          submit/
            [sessionId].page.ts
          results/
            [sessionId].page.ts
            [speakerId].page.ts
            summary.page.ts
        analytics/
          dashboard.page.ts
          reports/
            index.page.ts
            [reportId].page.ts
            generate.page.ts
      api/                     # API-Endpunkte (AnalogJS)
        routes/
          feedback/
            submit.post.ts                 # Feedback einreichen
            index.get.ts                   # Feedback-Liste abrufen
            [id].get.ts                    # Spezifisches Feedback abrufen
            session/
              [sessionId].get.ts           # Feedback für eine Session abrufen
            speaker/
              [speakerId].get.ts           # Feedback für einen Referenten abrufen
          analytics/
            index.get.ts                   # Grundlegende Analysedaten abrufen
            dashboard.get.ts               # Dashboard-Daten abrufen
            reports/
              index.get.ts                 # Verfügbare Berichte abrufen
              [id].get.ts                  # Spezifischen Bericht abrufen
              generate.post.ts             # Anpassbaren Bericht generieren
```

## Funktionsumfang

### Feedback-System

- Sessionspezifische Feedback-Formulare
  - Anpassbare Fragen und Bewertungsskalen
  - QR-Code-Zugang zu Feedback-Formularen
  - Integration mit Session-Ende-Zeitpunkten
- Echtzeit-Feedback-Erfassung während und nach Sessions
  - Sofortige Datenerfassung und -verarbeitung
  - Live-Updates für Organisatoren
  - Zeitgesteuerte Feedback-Erinnerungen
- Anonyme Feedback-Optionen für ehrliche Antworten
  - Wahrung der Anonymität bei Bedarf
  - Vertrauliche Behandlung sensibler Rückmeldungen
- Quantitative und qualitative Feedback-Mechanismen
  - Numerische Bewertungen und Metriken
  - Freitextfelder für detaillierte Kommentare
  - Sentiment-Analyse von Textkommentaren

### Analytics und Reporting

- Feedback-Analyse und Berichterstattung
  - Aggregierte Bewertungen pro Session
  - Vergleichsanalysen über Sessions hinweg
  - Trendanalysen über Konferenztage
- Benachrichtigung über Feedback an Referenten und Organisatoren
  - Automatische Zusammenfassungen
  - Hervorhebung besonders positiver/negativer Bewertungen
  - Privater Zugang zu persönlichem Feedback
- Vergleichende Analyse über Sessions und Konferenzen hinweg
  - Historische Vergleiche für wiederkehrende Referenten
  - Benchmark-Vergleiche zwischen ähnlichen Sessiontypen
  - Identifikation von Verbesserungsmöglichkeiten
- Erweiterte Analytik und Visualisierung
  - Interaktive Dashboards
  - Anpassbare Berichte und Grafiken
  - Exportoptionen für weitere Analyse

## Integration mit anderen Modulen

- **Conference Management**: Kontext für Feedback und Analysen
- **Speaker Management**: Feedback zu Referenten und Sessions
- **Track Management**: Trackbezogene Feedback-Analyse
- **Schedule Management**: Zeitliche Koordination von Feedback-Anfragen
- **Public Interface**: Feedback-Eingabe für Teilnehmer
- **Authentication**: Nutzung des vorhandenen Systems für Berechtigungen

## Technische Anforderungen

- Angular-Standalone-Komponenten mit Angular Material UI
- Chart.js oder D3.js für Datenvisualisierung
- Echtzeitfähigkeit mit SignalR oder WebSockets (optional)
- PDF-Berichtsgenerierung für exportierbare Berichte
- Text-Mining für qualitative Feedback-Analyse
- Responsive Design mit TailwindCSS
- Angular Signals für reaktives State Management

## API-Endpunkte

Die API-Routen folgen den AnalogJS-Best-Practices mit HTTP-Methoden im Dateinamen:

```
# Feedback-System
POST   /api/feedback/submit         -> feedback/submit.post.ts
GET    /api/feedback                -> feedback/index.get.ts
GET    /api/feedback/:id            -> feedback/[id].get.ts
GET    /api/feedback/session/:sessionId  -> feedback/session/[sessionId].get.ts
GET    /api/feedback/speaker/:speakerId  -> feedback/speaker/[speakerId].get.ts

# Analytics und Reporting
GET    /api/analytics               -> analytics/index.get.ts
GET    /api/analytics/dashboard     -> analytics/dashboard.get.ts
GET    /api/analytics/reports       -> analytics/reports/index.get.ts
GET    /api/analytics/reports/:id   -> analytics/reports/[id].get.ts
POST   /api/analytics/reports/generate -> analytics/reports/generate.post.ts
```

Beispiel-Implementierung:

```typescript
// libs/bitference-feedback/src/api/routes/feedback/submit.post.ts

import { defineEventHandler, readBody } from 'h3';
import { FeedbackService } from '../../../lib/services/feedback.service';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const feedbackService = new FeedbackService();
  
  try {
    const { sessionId, rating, comments, attendeeId } = body;
    
    // Validierung der Eingabedaten
    if (!sessionId || !rating) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Session-ID und Bewertung sind erforderlich'
      });
    }
    
    // Feedback speichern
    const feedbackId = await feedbackService.submitFeedback({
      sessionId,
      rating,
      comments,
      attendeeId,
      submittedAt: new Date()
    });
    
    return {
      success: true,
      feedbackId,
      message: 'Feedback erfolgreich übermittelt'
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Fehler beim Speichern des Feedbacks',
      data: { error: error.message }
    });
  }
});
```

## Erfolgsmetriken

- Feedback-Abgabequote für Sessions > 60%
- Schnelle Feedback-Verarbeitung (< 5s vom Absenden bis zur Verfügbarkeit)
- Zufriedenheit der Organisatoren mit Analytics-Tools > 4,5/5
- Zufriedenheit der Referenten mit Feedback-Qualität > 4,3/5
- Identifizierung konkreter Verbesserungsmöglichkeiten für 90% der unterdurchschnittlich bewerteten Sessions
