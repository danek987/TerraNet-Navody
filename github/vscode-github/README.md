---
permalink: /github/vscode-github/
---

# Pripojenie VS Code ku GitHubu

[Späť na návody pre GitHub](../README.md) · [Úvod TerraNetu](../../README.md)

Cieľom je stiahnuť spoločný repozitár TerraNetu, spraviť malú zmenu v pracovnej vetve a odoslať ju na GitHub. Pred začiatkom [nainštaluj a nastav Git](../git-vscode/README.md). Pri súkromnom repozitári prijmi pozvánku a over si prístup v prehliadači. Na odoslanie vetvy do tímového repozitára potrebuješ právo zápisu.

## 1. Stiahni tímový repozitár

1. Na GitHube otvor repozitár s kódom projektu. V **Code → HTTPS** skopíruj jeho adresu.
2. Vo VS Code stlač `Ctrl + Shift + P`, vyhľadaj **Git: Clone** a vlož adresu.
3. Vyber priečinok, do ktorého sa má repozitár stiahnuť, a potom klikni na **Open**.
4. Keď príde výzva na prihlásenie, dokonči prihlásenie ku GitHubu v prehliadači. Výzva sa pri verejnom repozitári môže objaviť až pri prvom odoslaní zmeny.

Ak už máš klon projektu, otvor ho cez **File → Open Folder**. V termináli v priečinku projektu si over pripojenie:

```powershell
git remote -v
git status
```

Pri `origin` má byť adresa správneho tímového repozitára. `git status` ukáže aktuálnu vetvu aj prípadné rozpracované zmeny.

## 2. Urob a odošli skúšobnú zmenu

1. Na aktuálnej hlavnej vetve `main` otvor `Ctrl + Shift + P` a vyber **Git: Create Branch**. Nazvi vetvu napríklad `docs/skuska-vscode` a v stavovom riadku over, že je aktívna.
2. Po dohode s tímom doplň krátku vetu do `README.md` a ulož súbor.
3. Otvor **Source Control** cez `Ctrl + Shift + G`. Klikni na zmenený súbor a skontroluj rozdiel. Cez **+** pri súbore ho vyber do commitu.
4. Napíš správu `Doplň poznámku do README` a klikni na **Commit**. Tým uložíš zmenu do lokálnej histórie.
5. Klikni na **Publish Branch**, aby sa nová vetva objavila na GitHube. Pri už publikovanej vetve použi **Push** v ponuke **Source Control → …**.

Na GitHube over, že vidíš vetvu aj nový commit. Potom môžeš [otvoriť pull request](../README.md#prvá-zmena-na-githube) a poslať ho [na kontrolu spolužiakovi](../review/README.md).

[VS Code – práca s GitHubom](https://code.visualstudio.com/docs/sourcecontrol/github) · [Klonovanie, publikovanie a práca s vetvami](https://code.visualstudio.com/docs/sourcecontrol/repos-remotes)
