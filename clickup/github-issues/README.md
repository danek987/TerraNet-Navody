---
permalink: /clickup/github-issues/
---

# GitHub Issue a prepojenie s ClickUpom

[Späť na návod na ClickUp](../README.md) · [Úvod TerraNetu](../../README.md)

Najprv vytvoríš Issue na GitHube a vložíš jeho odkaz do úlohy v ClickUpe. Ďalšie časti ukazujú nastavenie GitHub integrácie. Založenie úlohy nájdeš v [základnom návode na ClickUp](../README.md).

<details markdown="block">
<summary><strong>1. Založ Issue na GitHube</strong></summary>

1. V tímovom repozitári otvor **Issues**.

![Karta Issues v repozitári GitHubu](../../snimky/clickup-github/Screenshot_58.png)

2. Klikni na **New issue**.

![Tlačidlo New issue nad zoznamom](../../snimky/clickup-github/Screenshot_59.png)

3. Napíš názov, popis a podmienku dokončenia. Na snímke je úloha na pridanie súboru `test.py`. Použi zadanie dohodnuté vo vašom tíme a potvrď **Create**.

![Formulár Issue s názvom, popisom a podmienkami dokončenia](../../snimky/clickup-github/Screenshot_60.png)

4. V **Assignees** vyber riešiteľa.

![Výber riešiteľa pre Issue](../../snimky/clickup-github/Screenshot_61.png)

</details>

<details markdown="block">
<summary><strong>2. Vlož odkaz do úlohy v ClickUpe</strong></summary>

1. Otvor vytvorené Issue a skopíruj adresu z prehliadača. Na snímke je Issue číslo 4, pri práci použi vlastnú adresu.

![Adresa konkrétneho GitHub Issue](../../snimky/clickup-github/Screenshot_62.png)

2. Vlož ju do popisu alebo komentára príslušnej úlohy v ClickUpe. Skontroluj, že odkaz otvorí správne Issue.

![Odkaz na GitHub Issue vložený do ClickUpu s výzvou na pripojenie účtu](../../snimky/clickup-github/Screenshot_63.png)

Na snímke karta žiada **Connect** na načítanie náhľadu. Člen tímu stále potrebuje prístup do súkromného repozitára.

3. V ponuke úlohy vyber **Copy link**. Tento odkaz môžeš vložiť späť do popisu Issue, aby sa dalo prejsť aj z GitHubu do ClickUpu.

![Ponuka úlohy v ClickUpe s voľbou Copy link](../../snimky/clickup-github/Screenshot_64.png)

</details>

<details markdown="block">
<summary><strong>3. Otvor nastavenie integrácie GitHubu</strong></summary>

V ClickUpe otvor **More → Apps**, vyhľadaj GitHub a otvor ho.

![Ponuka More v ClickUpe s položkou Apps](../../snimky/clickup-github/otvorit-apps.png)

V zobrazení na ďalšej snímke je vstup aj cez **Integrations → GitHub** pri úlohe.

![Panel Integrations s položkou GitHub v ClickUpe](../../snimky/clickup-github/Screenshot_3.png)

</details>

<details markdown="block">
<summary><strong>4. Pripoj GitHub k pracovnému priestoru</strong></summary>

Túto časť robí správca ClickUpu s príslušným prístupom do GitHub repozitára.

1. Na stránke integrácie vyber **Workspace → Connect**.

![Workspace pripojenie GitHubu a tlačidlo Connect](../../snimky/clickup-github/Screenshot_4.png)

2. Pre účet na github.com ponechaj **OAuth**, klikni na **Next** a dokonči autorizáciu.

![Výber OAuth pri pripojení GitHubu](../../snimky/clickup-github/Screenshot_5.png)

3. Pri nastavení vyhľadávania vyber repozitár, klikni na **Save** a dokonči sprievodcu.

![Výber GitHub repozitárov pre vyhľadávanie v ClickUpe](../../snimky/clickup-github/Screenshot_6.png)

![Tlačidlo Done na dokončenie pripojenia](../../snimky/clickup-github/Screenshot_7.png)

4. Pre priradenie GitHub aktivity k úlohám ešte otvor **Settings → Add repo** a zvolený repozitár cez **+ Add Space** pripoj k priestoru **TerraNet**.

</details>

<details markdown="block">
<summary><strong>5. Pripoj vlastný účet a pokračuj s úlohou</strong></summary>

Na stránke integrácie otvor **Personal → Connect** a dokonči prihlásenie do svojho GitHub účtu.

![Personal pripojenie GitHub účtu v ClickUpe](../../snimky/clickup-github/Screenshot_8.png)

V úlohe v pripojenom priestore sa potom dá cez ikonu **GitHub → Add GitHub link → New GitHub Issue** vytvoriť nové Issue. Pri pull requeste môžeš v názve alebo popise uviesť ID ClickUp úlohy v tvare `CU-…` a následne skontrolovať jej **Activity**.

Použi skutočné ID úlohy zo svojho ClickUpu.

</details>

<details markdown="block">
<summary><strong>6. Prepoj opravu s Issue a dokonči úlohu</strong></summary>

Ak pull request rieši Issue v rovnakom repozitári, do jeho popisu pridaj napríklad `Closes #4`. Číslo nahraď číslom vášho Issue. Po zlúčení do predvolenej vetvy GitHub toto Issue automaticky uzavrie.

Do úlohy v ClickUpe vlož odkaz na pull request a po overení výsledku ju uzavri. Pre kontrolu zmeny použi [návod na review](../../github/review/README.md).

[GitHub – prepojenie pull requestu s Issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue)

</details>

[ClickUp – integrácia s GitHubom](https://help.clickup.com/hc/en-us/articles/6305771568791-GitHub-integration)
