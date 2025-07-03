# Bitference - Arbeitspakete

Basierend auf dem Design-Dokument wurden die folgenden Arbeitspakete definiert, die von 7 verschiedenen Teams parallel bearbeitet werden können. Die Benutzerverwaltung und Authentifizierung ist bereits über @analog-tools/auth und Keycloak implementiert und wird daher nicht als separates Arbeitspaket aufgeführt.

## Monorepo-Struktur und Parallelisierung

Alle Arbeitspakete werden im Nx-Monorepo als separate Angular-Libraries implementiert, was eine vollständige Parallelisierung der Entwicklungsarbeiten ermöglicht. Die vorgeschlagene Bibliotheksstruktur ist wie folgt:

```
libs/
  bitference-core/             # Gemeinsame Datenmodelle, Interfaces, Utilities
  bitference-conference/       # Arbeitspaket 1
  bitference-venue/            # Arbeitspaket 2
  bitference-speakers/         # Arbeitspaket 3
  bitference-tracks/           # Arbeitspaket 4
  bitference-scheduler/        # Arbeitspaket 5
  bitference-public/           # Arbeitspaket 6
  bitference-feedback/         # Arbeitspaket 7
```

## Übersicht der Arbeitspakete

1. [Konferenzmanagement und Administration](./arbeitspaket-1-konferenzmanagement.md) - `libs/bitference-conference`
2. [Veranstaltungsort und Raumverwaltung](./arbeitspaket-2-raumverwaltung.md) - `libs/bitference-venue`
3. [Referenten- und Sessionverwaltung](./arbeitspaket-3-referenten-session.md) - `libs/bitference-speakers`
4. [Track-Management und Programmplanung](./arbeitspaket-4-track-management.md) - `libs/bitference-tracks`
5. [Zeitplanung und Terminplanung](./arbeitspaket-5-zeitplanung.md) - `libs/bitference-scheduler`
6. [Öffentliches Programm und Teilnehmer-Interface](./arbeitspaket-6-teilnehmer-interface.md) - `libs/bitference-public`
7. [Feedback und Analytics](./arbeitspaket-7-feedback-analytics.md) - `libs/bitference-feedback`

Jedes Arbeitspaket ist als eigenständige Einheit konzipiert, die unabhängig entwickelt werden kann. Die Teams sollten die gemeinsamen Datenmodelle und Interfaces aus einer zentralen `bitference-core`-Library verwenden, um die Konsistenz zu gewährleisten. Für jede Library werden entsprechende Pages, Komponenten, Services und API-Endpunkte nach dem AnalogJS-Muster implementiert.
