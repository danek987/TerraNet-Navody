---
permalink: /github/review/
---

# Kontrola a oprava pull requestu

[Späť na návody pre GitHub](../README.md) · [Úvod TerraNetu](../../README.md)

Autor otvoril pull request z vetvy `docs/blokova-schema` do `main`. Spolužiak pri kontrole zistí, že schéma končí príjmom správy a chýba krok uloženia.

## 1. Autor požiada o kontrolu

Otvor pull request, do popisu napíš, čo sa mení a čo má spolužiak overiť. V časti **Reviewers** vyber spolužiaka s prístupom do repozitára alebo mu pošli odkaz na pull request.

## 2. Spolužiak pridá pripomienku

1. Otvor **Files changed** a porovnaj nový text s pôvodným.
2. Pri príslušnom riadku klikni na **+** a napíš, čo má autor upraviť. Napríklad „Za centrálu doplň krok uloženia prijatej hodnoty.“
3. Vyber **Start a review** alebo pridaj pripomienku k už rozpracovanej kontrole. Po prejdení všetkých zmien otvor **Review changes** alebo **Submit review** a vyber výsledok:

   - **Comment** pre nezáväznú spätnú väzbu.
   - **Request changes** pri oprave, ktorú treba spraviť pred zlúčením.
   - **Approve** keď je zmena pripravená na zlúčenie.

4. Odošli kontrolu cez **Submit review**, aby ju autor videl.

## 3. Autor opraví tú istú vetvu

1. V **Code** vyber `docs/blokova-schema`, otvor `README.md` a doplň krok uloženia.
2. Sprav commit priamo do `docs/blokova-schema`. Ak pracuješ vo VS Code, po commite použi **Push**. Nový commit sa zobrazí v tom istom pull requeste.
3. Pri pripomienke napíš, čo sa zmenilo, a požiadaj spolužiaka o novú kontrolu. Ak je pri mene možnosť opätovne vyžiadať review, použi ju.

Spolužiak skontroluje opravu v **Files changed** a po vyriešení pripomienky môže dať **Approve**. Potom môže člen tímu s príslušnými právami dokončiť zlúčenie, keď to GitHub povolí.

[GitHub – ako kontrolovať pull request](https://docs.github.com/en/pull-requests/get-started/reviewing-pull-requests-quickstart) · [Ako spracovať pripomienky](https://docs.github.com/en/pull-requests/concepts/resolving-reviews)
