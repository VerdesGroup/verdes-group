# Verdes Group Website

Statische, responsive Website für die Dachmarke **Verdes Group**.

## Struktur

- / – Startseite
- /objektservice/ – Verdes Objektservice
- /verkehrsleitung/ – Verdes Verkehrsleiter & Transportberater
- /mv-transporte/ – M&amp;V Transporte (rechtlich eigenständiges Partnerunternehmen)
- /ueber-uns/ – Über uns
- /kontakt/ – Kontakt
- /impressum/ – Entwurf; **vor Veröffentlichung vervollständigen**
- /datenschutz/ – Entwurf; **vor Veröffentlichung vervollständigen**

## Geschäftsbereiche und Kontaktadressen

- Verdes Objektservice — Inhaberin Ana Verdes — objektservice@verdes-group.de
- Verdes Verkehrsleiter & Transportberater — Inhaber Vadim Verdes — verkehrsleiter@verdes-trans.com
- M&V Transporte — Inhaber Alexandros Milidis — betriebliche Zusammenarbeit mit Vadim Verdes — vadim@verdes-trans.com

**verdes-group.de ist die Hauptdomain.** Die bestehende Domain verdes-trans.com bleibt für E-Mail-Adressen im Einsatz. Kein Domainwechsel für bestehende E-Mail-Postfächer erforderlich.

Die rechtliche Partnerstruktur darf nicht als gesellschaftsrechtliche 50/50-Beteiligung dargestellt werden, solange diese nicht rechtlich geklärt bzw. dokumentiert ist.

## Lokal ansehen

Im Repositoryordner einen lokalen HTTP-Server starten, z. B. `python -m http.server 8000`, dann `http://localhost:8000` öffnen.

## Veröffentlichung

Die Website ist für statisches Hosting ausgelegt. Sie ist **noch nicht auf verdes-group.de veröffentlicht**. Vor dem Livegang insbesondere Impressum, Datenschutzerklärung, Verantwortlichkeiten, Kontaktdaten und gegebenenfalls Bild-/Markenrechte final prüfen. GitHub Pages kann unter **Settings → Pages** eingerichtet werden. Aufgrund der absoluten Pfade (z. B. `/assets/styles.css`) sollte die Site unter einer **Root-Domain oder einer User-Page-Domain**, nicht bloß unter einem Repository-Unterpfad betrieben werden. Für eine Repository-Demo müssen absolute Pfade vorher auf relative Pfade umgestellt werden.

## DNS

Beim Verbinden der Domain `verdes-group.de` die bestehenden Google Workspace MX-, SPF-, DKIM- und DMARC-Einträge nicht verändern.

## Designfassung 02 (Premium)

Der bevorzugte Entwurf ist als tatsächliches CSS-/HTML-Layout umgesetzt: Anthrazit, warmes Offwhite, Champagner-Akzente, Fotobanner und drei Geschäftskarten. Die Markenmotive für die Startseite, Objektservice und Verkehrsleitung sind als optimierte WebP-Dateien unter `assets/images/` eingebunden und sichtbar als **Symbolbilder** gekennzeichnet. Das Original-M&V-Logo wird unverändert verwendet. Die Bilddateien werden gemeinsam mit der Website bereitgestellt; externe Unsplash-Aufrufe wurden entfernt. Die Motive zeigen keine nachgewiesenen Geschäftsräume oder Unternehmensfahrzeuge.

## Offizielles Verdes-Group-Logo

Die vom Nutzer verbindlich ausgewählte horizontale Fassung in Schwarz/Anthrazit/Champagner-Beige ist als optimierte WebP-Datei unter `/assets/verdes-group-logo.webp` abgelegt und auf allen Seiten im Kopf- und Fußbereich integriert. Für hochwertige Druckprodukte das Original in maximaler Auflösung bzw. eine professionell nachgezeichnete Vektorversion verwenden.

## Impressum und Datenschutz: verifizierter Arbeitsstand (2026-11-23)

- Verdes Objektservice und Verdes Verkehrsleiter & Transportberater: Oldenburger Str. 128A, 27753 Delmenhorst.
- M&V Transporte: Brendelweg 168, 27755 Delmenhorst; Inhaber Alexandros Milidis; operative Geschäftsleitung Alexandros Milidis und Vadim Verdes; E-Mails vadim@verdes-trans.com und milidis@mail.de.
- Verantwortlicher für den Betrieb der gemeinsamen Website: Vadim Verdes, Oldenburger Str. 128A, 27753 Delmenhorst.
- M&V ist derzeit als Einzelunternehmen mit Inhaber bezeichnet; deshalb **nicht** die (organschaftliche) Bezeichnung "zwei Geschäftsführer" im Impressum verwenden, bis die Rechtsform etwas anderes belegt.
- **Vor Livegang offen:** finale Prüfung der offiziellen Unternehmensbezeichnungen und Pflichtangaben, Hosting-Auftragsverarbeitung, Datenschutzhinweise zu konkreten Serverlogs, Bildlizenzen, externen Bildzugriffen und rechtliche Prüfung.

- Laut bestätigter Auskunft des Nutzers (23.11.2026) sind für Verdes Objektservice und Verdes Verkehrsleiter & Transportberater **keine USt-IdNr. oder W-IdNr. vorhanden**; daher im Impressum keine Identifikationsnummer für diese beiden Betriebe aufführen. M&V Transporte: USt-IdNr. DE344739509.

- Bestätigung des Nutzers (23.11.2026): Verdes Objektservice, Verdes Verkehrsleiter & Transportberater und M&V Transporte sind **nicht im Handelsregister eingetragen**, jeweils Einzelunternehmen ohne e.K.-Eintrag; im öffentlichen Impressum daher keine Handelsregisterangaben ergänzen.


## Netlify-Vorabprüfung am 23.11.2026
- Netlify-Projekt durch Eigentümer eingerichtet und in Screenshot als **Private** gekennzeichnet, automatisches Deployment aus `main` aktiv.
- Test-Subdomain: `verdes-group.netlify.app`. `verdes-group.de` bei STRATO ist noch **nicht** verbunden; Mail-DNS darf bei späterer Einrichtung nicht verändert werden.
- Datenschutzerklärung als **Entwurf** konkretisiert: Hosting durch Netlify, Inc., Datenverarbeitungs-Verweise und Prüfaufgaben eingefügt.
- Browser-`theme-color` auf die vom Nutzer gewählte Anthrazit-Farbe umgestellt.
- Alle acht HTML-Seiten auf Linkziele und Einbindung des Original-Logos geprüft (Stand: keine fehlerhaften internen Seitenpfade gefunden).
- Die zunächst vier externen Unsplash-Hintergrundbilder wurden durch die lokal eingebundenen Markenmotive und das originale M&V-Logo ersetzt (siehe Bildintegration unten).
- Datenschutz vor dem Livegang: genaue Netlify-Logdaten und Speicherdauer, mögliche Drittlandübermittlung und Auftragsverarbeitung rechtlich prüfen.
- Weitere Veröffentlichungsschritte: responsiven Eindruck am Handy freigeben, Rechtstexte final fachlich prüfen, danach Domain verbinden und Private/Public bewusst umstellen.


## M&V Transporte: Erfahrung, Fahrerbewerbungen und Kooperationen (23.11.2026)
- Auf `/mv-transporte/` wurde eine sachliche Angabe über die vom Nutzer bestätigte, **seit mehr als fünf Jahren bestehende Zusammenarbeit als selbstständiger Transportdienstleister im GLS-Paketnetzwerk** ergänzt. Ohne GLS-Logo, ohne Behauptung einer gesellschaftsrechtlichen Verbindung oder offiziellen Empfehlung durch GLS.
- **Vor öffentlicher Veröffentlichung unbedingt prüfen**, ob vertragliche Regelungen mit GLS Aussagen über die Zusammenarbeit im Marketing untersagen oder von einer Zustimmung abhängig machen. Die Nennung muss inhaltlich aktuell und zutreffend sein.
- Zwei neue Bereiche: `#fahrer-bewerbung` für Initiativbewerbungen als Zustellfahrer (m/w/d), `#kooperation-anfragen` für Transport-/Logistikunternehmen, Kooperationen und mögliche zusätzliche Touren.
- Die E-Mail-Schaltflächen für beide Zielgruppen sind auf `vadim@verdes-trans.com` gesetzt; kein Bewerbungsformular, keine angeforderten sensiblen Daten.
- Die Datenschutz-Entwurfsseite enthält nun Informationen zu Fahrerbewerbungen bei M&V. Vor Veröffentlichung die tatsächliche Aufbewahrungsdauer, Zugriffsregelung und Bewerberdaten-Löschung verbindlich klären.


## Bildintegration und Footer-Prüfung (23.11.2026)

- Startseitenmotiv: zuletzt erstellte Datei „Verdes Group – Moderne Unternehmensdienste.png“, als `assets/images/verdes-group-unternehmen.webp` komprimiert; vollständiges Motiv ohne Beschnitt.
- Objektservice: „Verdes Objektservice im modernen Empfangsbereich.png“, als `assets/images/verdes-objektservice.webp` auf Startseite und Dienstleistungsseite.
- Verkehrsleitung: „Logistikberatung mit Vadim Verdes.png“, als `assets/images/verdes-verkehrsleitung.webp` auf Startseite und Dienstleistungsseite.
- M&V: originales `mv_original_logo_cropped.webp`, unverändert als `assets/images/mv-transporte-logo.webp` auf Startseite und Partnerseite.
- Die drei großen Motive sind bei unveränderten Bildabmessungen im WebP-Format komprimiert. Motive und Logos werden im Browser ohne zusätzliche Bildanbieter geladen. Die ursprünglichen Bilddateien bleiben außerhalb dieses Repositorys erhalten.
- Einheitlicher Footer auf allen acht Seiten: „Geschäftsbereiche“ und „Informationen“, lesbarere Links, weiß hervorgehobene Überschriften und beige Abschlusslinie. Keine direkten E-Mail-Adressen im Footer.
- CSS und JavaScript verwenden einen Versionsparameter, damit eine ältere Datei nicht versehentlich im Browser weiterverwendet wird.
- Mobiles Menü: Schließen setzt jetzt auch die Beschriftung zurück; Escape schließt das Menü und fokussiert den Menüknopf.
- Die übrigen offenen Aufgaben zum Netlify-Hosting und zu den Rechtstexten bleiben vor dem öffentlichen Start bestehen. Keine Änderung an Domain, DNS oder Zugriffsrechten.
