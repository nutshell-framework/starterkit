# Nutshell Framework Starterkit für Contao CMS

**nutshell-framework/starterkit** ist ein praktisches Werkzeug für Webentwickler, um ein neues Contao-Projekt zu starten.
Es enthält SCSS-Dateien als Ausgangspunkt, eine `.htaccess.example`, die für die meisten Projekte geeignet ist, und möglicherweise weitere nützliche Inhalte in der Zukunft.

Beachte, dass ab dem Zeitpunkt, an dem du das Projekt erstellst (`composer create-project`), weitere Updates in diesem Repository keine Auswirkungen auf deine Installation haben.

## Verwendung

### Composer-Projekt erstellen

```bash
composer create-project nutshell-framework/starterkit [pfad] [branch]
```

`[pfad]` = Name des Ordners, in dem du deine Contao-Installation erstellen möchtest

`[branch]` = Wähle einen Branch aus dem Repository, z. B. `5.3.x-dev` für eine Contao 5.3-Installation

_Alternativ kannst du die ZIP-Datei herunterladen und entpacken und anschließend `composer install` ausführen._

### Wechsle in die Contao-Installation

```bash
cd pfad
```

### Node-Module installieren

```bash
npm install
```

### Git-Repository initialisieren

```bash
git init
git add .
git commit -m "Initiale Dateien"
```

### Webpack mit HMR ausführen (DEV)

```bash
npm run dev-server
```

### Webpack im Produktiveinsatz

```bash
npm run build
```
