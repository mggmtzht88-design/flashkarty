# FLASH CARDS RUSSIAN

A bilingual (Czech/English) web application for learning Russian, focused on reading news, OSINT, and military terminology. Works as a PWA (Progressive Web App) — can be added to the iPhone home screen and used offline.

## Features

- **Bilingual UI** — Full Czech and English interface with flag switcher (🇨🇿 / 🇬🇧)
- **Alphabet** — Practice Cyrillic letters with pronunciation
- **Vocabulary** — 50+ words divided into categories and difficulty levels
- **Media Phrases** — Phrases from pro-Russian and anti-Russian news sources
- **Military Abbreviations** — Abbreviations with explanations (VSU, FSB, GRU, BPLA…)
- **Alphabet Table** — Overview of all letters with military vocabulary examples
- **Audio Pronunciation** — Russian text-to-speech via Web Speech API
- **Repeat Mistakes** — Automatic repetition of incorrectly answered cards
- **Statistics** — Track score, number of games and average success rate
- **Offline Mode** — Service Worker caches the app for offline use

## Language Modes

|Interface|Available Directions                                                  |
|---------|----------------------------------------------------------------------|
|Czech 🇨🇿  |Russian → Czech, Czech → Russian, Czech → English, English → Czech    |
|English 🇬🇧|Russian → English, English → Russian, Czech → English, English → Czech|

## Vocabulary Categories

|Category  |Description                        |
|----------|-----------------------------------|
|Basic     |Everyday vocabulary                |
|Military  |Combat actions, casualties, tactics|
|Technology|Weapons, vehicles, drones          |
|Geography |Countries, cities, territories     |
|Units     |Command, ranks, military units     |
|OSINT     |Intelligence, sources, media       |
|Politics  |Diplomacy, propaganda, sanctions   |

## Difficulty Levels

|Level     |Description                        |
|----------|-----------------------------------|
|🟢 Beginner|Basic vocabulary, short phrases    |
|🔴 Advanced|Complex terminology, longer phrases|
|All       |Combination of both levels         |

## Usage

### Online

Open in your browser:

```
https://mggmtzht88-design.github.io/flashkarty/flashkarty.html
```

### Add to iPhone Home Screen (PWA)

1. Open the link in Safari
1. Tap the Share icon (box with arrow)
1. Select **Add to Home Screen**
1. The app behaves like a native application

### Offline

After the first load, the app is automatically saved to cache via Service Worker and works without an internet connection.

## Technologies

|Technology          |Usage                                        |
|--------------------|---------------------------------------------|
|HTML5               |Application structure                        |
|Tailwind CSS        |Styling — utility-first CSS framework        |
|JavaScript (vanilla)|App logic, navigation, scoring               |
|Web Speech API      |Russian pronunciation (text-to-speech)       |
|Service Worker      |Offline mode, cache                          |
|localStorage        |Persistent statistics and language preference|
|GitHub Pages        |Free hosting                                 |

## Project Structure

```
flashkarty/
├── flashkarty.html   # Main application (HTML + Tailwind CSS + JS)
├── sw.js             # Service Worker for offline mode
└── README.md         # Project documentation
```

## Author

PS · 2026
