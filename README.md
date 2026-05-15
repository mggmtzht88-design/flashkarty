# ФЛЭШ КАРТЫ — Ruština

Webová aplikace pro učení ruštiny zaměřená na čtení zpravodajství, OSINT a vojenskou terminologii. Funguje jako PWA (Progressive Web App) — lze přidat na plochu iPhonu a používat offline.

## Funkce

- **Azbuka** — procvičování písmen s výslovností
- **Slovíčka** — přes 50 slovíček rozdělených do kategorií a obtížností
- **Fráze z médií** — fráze z proruských a protiruských zpravodajských zdrojů
- **Vojenské zkratky** — zkratky s vysvětlením (ВСУ, ФСБ, ГРУ, БПЛА...)
- **Tabulka azbuky** — přehled všech písmen s příklady vojenských pojmů
- **Zvuk výslovnosti** — ruský text-to-speech přes Web Speech API
- **Opakování chyb** — automatické opakování nesprávně zodpovězených karet
- **Statistiky** — sledování skóre, počtu her a průměrné úspěšnosti
- **Offline režim** — Service Worker ukládá appku do cache

## Kategorie slovíček

| Kategorie | Popis |
|---|---|
| Základní | Běžná slovní zásoba |
| Vojenství | Bojové akce, ztráty, taktika |
| Technika | Zbraně, vozidla, drony |
| Geografie | Státy, města, území |
| Jednotky | Velení, hodnosti, útvary |
| OSINT | Zpravodajství, zdroje, média |
| Politika | Diplomacie, propaganda, sankce |

## Obtížnost

- 🟢 **Začátečník** — základní slovíčka, krátké fráze
- 🔴 **Pokročilý** — složitější terminologie, delší fráze
- **Vše** — kombinace obou úrovní

## Použití

### Online
Otevři v prohlížeči:
```
https://mggmtzht88-design.github.io/flashkarty/flashkarty.html
```

### Přidat na plochu iPhonu (PWA)
1. Otevři odkaz v Safari
2. Klikni na ikonu sdílení (⬜ se šipkou)
3. Vyber **Přidat na plochu**
4. Aplikace funguje jako nativní appka

### Offline
Po prvním načtení se aplikace automaticky uloží do cache a funguje bez internetového připojení.

## Technologie

- HTML5 / CSS3 / JavaScript (vanilla)
- Web Speech API (ruská výslovnost)
- Service Worker (offline režim)
- localStorage (ukládání statistik)
- GitHub Pages (hosting)

## Struktura projektu

```
flashkarty/
├── flashkarty.html   # hlavní aplikace
├── sw.js             # Service Worker pro offline režim
└── README.md         # dokumentace
```

## Autor

PS · 2026
