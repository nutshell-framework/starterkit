# Nutshell Framework Starterkit for Contao CMS

You can find the documentation of the **Nutshell** at <http://nutshell.erdmann-freunde.de/> (deutsch/german).

**nutshell-framework/starterkit** is a convenience wrapper for web developers to start with a new Contao project.
It is packed with scss files to start with, an `.htaccess.example` suitable for the most projects and maybe more to come.

Be reminded that starting with the point you created the project (`composer create-project`) further updates within this repository will not affect your installation.

## Usage
### Create composer project
```bash
composer create-project nutshell-framework/starterkit [path] [branch]
```
`[path]`= name of the folder you want to install your Contao installation in

`[branch]` = choose a branch from the repository, for example `4.9.x-dev` for a contao 4.9 installation

_Alternatively, download and extract the zip file, run `composer install`._

### Change to the Contao installation
```bash
cd path
```

### Install node modules
```bash
npm install
```

### Initialize git repository
```bash
git init
git add .
git commit -m "Initial files"
```
