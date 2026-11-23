# Verdes Group Website

Statische, responsive Website für die Dachmarke **Verdes Group**.

## Struktur

- / – Startseite
- /objektservice/ – Verdes Objektservice
- /verkehrsleitung/ – Verdes Verkehrsleiter & Transportberater
- /ueber-uns/ – Über uns
- /kontakt/ – Kontakt
- /impressum/ – Entwurf; **vor Veröffentlichung vervollständigen**
- /datenschutz/ – Entwurf; **vor Veröffentlichung vervollständigen**

## Lokal ansehen

Im Repositoryordner einen lokalen HTTP-Server starten, z. B. `python -m http.server 8000`, dann `http://localhost:8000` öffnen.

## Veröffentlichung

Die Website ist für statisches Hosting ausgelegt. Sie ist **noch nicht auf verdes-group.de veröffentlicht**. Vor dem Livegang insbesondere Impressum, Datenschutzerklärung, Verantwortlichkeiten, Kontaktdaten und gegebenenfalls Bild-/Markenrechte final prüfen. GitHub Pages kann unter **Settings → Pages** eingerichtet werden. Aufgrund der absoluten Pfade (z. B. `/assets/styles.css`) sollte die Site unter einer **Root-Domain oder einer User-Page-Domain**, nicht bloß unter einem Repository-Unterpfad betrieben werden. Für eine Repository-Demo müssen absolute Pfade vorher auf relative Pfade umgestellt werden.

## DNS

Beim Verbinden der Domain `verdes-group.de` die bestehenden Google Workspace MX-, SPF-, DKIM- und DMARC-Einträge nicht verändern.
