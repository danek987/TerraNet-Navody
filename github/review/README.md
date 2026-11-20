---
permalink: /github/review/
---

# Kontrola a oprava pull requestu

[Späť na návody pre GitHub](../README.md) · [Úvod TerraNetu](../../README.md)

Autor pridal skúšobnú poznámku do README. Spolužiak skontroluje zmenu a požiada o úpravu. Na snímkach sa skúša odstránenie prázdneho riadka. Vlastnú zmenu môžeš odoslať z [VS Code](../vscode-github/README.md) alebo [PyCharmu](../pycharm-github/README.md).

<details markdown="block">
<summary><strong>1. Autor otvorí pull request</strong></summary>

Na GitHube otvor **Compare & pull request**, zvoľ cieľovú vetvu `main` a svoju pracovnú vetvu. Napíš názov a stručný popis a klikni na **Create pull request**. Spolužiaka môžeš vybrať v **Reviewers** alebo mu poslať odkaz.

![Vytvorenie pull requestu s názvom a popisom skúšobnej zmeny](../../snimky/review/Screenshot_45.png)

</details>

<details markdown="block">
<summary><strong>2. Spolužiak pridá pripomienku k riadku</strong></summary>

1. Otvor pull request a kartu **Files changed**.
2. Pri riadku, ku ktorému chceš niečo napísať, klikni na modré **+**.

![Modré plus na pridanie pripomienky k riadku](../../snimky/review/Screenshot_46.png)

3. Napíš konkrétnu pripomienku. Napríklad „Odstráň tento prázdny riadok.“ Cez **Start a review** ju pridaj do rozpracovanej kontroly.

![Text pripomienky a tlačidlo Start a review](../../snimky/review/Screenshot_47.png)

</details>

<details markdown="block">
<summary><strong>3. Odošli review</strong></summary>

1. Po kontrole súborov klikni na **Submit review**, prípadne **Review changes** podľa zobrazenia GitHubu.

![Tlačidlo Submit review so zatiaľ neodoslanou pripomienkou](../../snimky/review/Screenshot_48.png)

2. Doplň krátke zhrnutie a vyber výsledok:

   - **Comment** odošle spätnú väzbu.
   - **Request changes** požiada autora o opravu.
   - **Approve** schváli zmenu na zlúčenie.

3. Klikni na **Submit review**, aby autor dostal všetky pripomienky.

![Dokončenie kontroly s výberom Comment, Approve a Request changes](../../snimky/review/Screenshot_49.png)

Na snímke kontroluje autor vlastný pull request, preto sú dostupné komentáre. Pre vzájomné schválenie nech review odošle spolužiak zo svojho účtu. Práva a pravidlá vetvy určujú, ktorá kontrola sa započíta pred zlúčením.

</details>

<details markdown="block">
<summary><strong>4. Autor opraví tú istú vetvu</strong></summary>

Prečítaj pripomienku a v editore otvor vetvu patriacu k pull requestu. Uprav README a sprav nový commit. Môžeš použiť jeden z týchto postupov:

**PyCharm**

V paneli **Commit** vyber opravený súbor, napíš správu a cez **Commit and Push** odošli opravu. Na snímke vidíš výber README a správu o odstránení medzery.

![Opravený README a výber súboru do commitu v PyCharme](../../snimky/review/Screenshot_50.png)

**VS Code**

Vyber opravu do commitu a sprav **Commit**, potom použi **Push**. Na snímke je alternatíva **Sync Changes**. Zobrazené potvrdenie hovorí, že najprv stiahne a zapracuje vzdialené commity a potom odošle tvoje. Pred potvrdením over, že ide o správnu pracovnú vetvu.

![VS Code pri synchronizácii opravy do vetvy docs/skuska-vscode](../../snimky/review/Screenshot_51.png)

Nový commit sa objaví v pôvodnom pull requeste v karte **Commits**. Skontroluj aj výsledný rozdiel vo **Files changed**.

![Pull request obsahuje pôvodný commit aj nový commit s opravou](../../snimky/review/Screenshot_52.png)

</details>

<details markdown="block">
<summary><strong>5. Odpovedz na pripomienku a zlúč zmenu</strong></summary>

1. Pri pripomienke napíš, čo si upravil, a odošli **Comment**.

![Odpoveď autora pri pôvodnej pripomienke](../../snimky/review/Screenshot_53.png)

2. Požiadaj spolužiaka o opätovnú kontrolu. Spolužiak overí opravu a podľa výsledku dá **Approve**.
3. Po kontrole môže člen tímu s právom zlúčenia kliknúť na **Merge pull request → Confirm merge**, keď to GitHub povolí.

![Potvrdenie zlúčenia skontrolovaného pull requestu](../../snimky/review/Screenshot_54.png)

4. Hlásenie **Pull request successfully merged and closed** potvrdí zlúčenie. Over README na `main`, potom si [aktualizuj projekt vo VS Code](../vscode-github/README.md) alebo [v PyCharme](../pycharm-github/README.md).

![Úspešne zlúčený pull request s možnosťami Delete branch a Revert](../../snimky/review/Screenshot_55.png)

</details>

<details markdown="block">
<summary><strong>Voliteľne. Vráť už zlúčenú zmenu cez Revert</strong></summary>

Tento postup použi, keď tím potrebuje odvolať zmenu, ktorá už bola zlúčená.

1. Otvor pôvodný zlúčený pull request a klikni na **Revert**, ktoré vidíš na predchádzajúcej snímke.
2. GitHub pripraví nový pull request s opačnou zmenou. Skontroluj jeho obsah vo **Files changed** a vytvor ho cez **Create pull request**.

![Nový pull request pripravený na vrátenie pôvodnej zmeny](../../snimky/review/Screenshot_56.png)

3. Po kontrole zlúč tento nový pull request a potvrď **Confirm merge**. Tým sa vrátenie zapíše do histórie.

![Potvrdenie zlúčenia pull requestu vytvoreného cez Revert](../../snimky/review/Screenshot_57.png)

[GitHub – vrátenie pull requestu](https://docs.github.com/en/pull-requests/how-tos/merge-and-close-pull-requests/reverting-a-pull-request)

</details>

[GitHub – kontrola pull requestu](https://docs.github.com/en/pull-requests/how-tos/review-pull-requests/reviewing-proposed-changes-in-a-pull-request)
