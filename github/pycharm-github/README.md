---
permalink: /github/pycharm-github/
---

# GitHub v PyCharme

[Späť na návody pre GitHub](../README.md) · [Úvod TerraNetu](../../README.md)

Postup od stiahnutia tímového repozitára po odoslanie zmeny a aktualizáciu projektu. Pred začiatkom [nainštaluj Git a nastav meno s e-mailom](../git-vscode/README.md). Tím ti pridelí prístup do repozitára. V PyCharme over Git cez **Settings → Version Control → Git → Test**.

<details markdown="block">
<summary><strong>1. Naklonuj repozitár a prihlás sa</strong></summary>

1. Na úvodnej obrazovke PyCharmu klikni na **Clone Repository**.

![Clone Repository na úvodnej obrazovke PyCharmu](../../snimky/ide/Screenshot_26.png)

2. Do **URL** vlož HTTPS adresu tímového projektu z **GitHub → Code → HTTPS**. Skontroluj lokálny priečinok **Directory** a klikni na **Clone**.

![URL repozitára a cieľový priečinok v dialógu Clone](../../snimky/ide/Screenshot_27.png)

3. Ak príde výzva, vyber **Log In via GitHub** a dokonči prihlásenie v prehliadači.

![Prihlásenie PyCharmu ku GitHubu cez prehliadač](../../snimky/ide/Screenshot_28.png)

4. Pri otvorení vlastného tímového projektu potvrď **Trust Project**, keď poznáš jeho zdroj. Na ďalšie kroky stačí otvorený súbor README.

![Trust Project pri prvom otvorení projektu](../../snimky/ide/Screenshot_29.png)

</details>

<details markdown="block">
<summary><strong>2. Vytvor pracovnú vetvu</strong></summary>

1. V hornej lište otvor ponuku vetvy **main** a klikni na **New Branch**.

![Ponuka main a New Branch v PyCharme](../../snimky/ide/Screenshot_30.png)

2. Zadaj `docs/skuska-pycharm`, ponechaj **Checkout branch** a klikni na **Create**.

![Vytvorenie vetvy docs/skuska-pycharm s prepnutím na ňu](../../snimky/ide/Screenshot_31.png)

3. Over, že v hornej lište už vidíš novú vetvu.

![Aktuálna pracovná vetva v hornej lište](../../snimky/ide/Screenshot_32.png)

</details>

<details markdown="block">
<summary><strong>3. Uprav súbor a odošli commit</strong></summary>

1. Otvor `README.md` a doplň krátku skúšobnú vetu. V PyCharme môžeš uloženie vyvolať cez **File → Save All**.

![README so skúšobným textom v PyCharme](../../snimky/ide/Screenshot_33.png)

2. Otvor panel **Commit**, napríklad cez `Ctrl + K`, a zaškrtni upravený súbor. Kliknutím naň skontroluj rozdiel.

![Výber súboru README do commitu](../../snimky/ide/Screenshot_34.png)

3. Napíš popis, napríklad `Doplň poznámku do README z PyCharmu`, a klikni na **Commit and Push**.

![Správa commitu a tlačidlo Commit and Push](../../snimky/ide/Screenshot_35.png)

4. V dialógu skontroluj, že odosielaš `docs/skuska-pycharm` do rovnako pomenovanej vetvy pri `origin`. Potvrď **Push**.

![Kontrola cieľovej vetvy a potvrdenie Push](../../snimky/ide/Screenshot_36.png)

Úspešné hlásenie potvrdí, že vetva je na GitHube.

![Hlásenie o odoslaní vetvy s odkazom Create pull request](../../snimky/ide/Screenshot_37.png)

</details>

<details markdown="block">
<summary><strong>4. Otvor pull request</strong></summary>

1. V úspešnom hlásení klikni na **Create pull request**. Prípadne otvor **Git → GitHub → Create Pull Request**.
2. Skontroluj cieľ **TerraNet:main** a zdroj **TerraNet:docs/skuska-pycharm**. Doplň názov, popis a podľa potreby kontrolujúceho spolužiaka.

![Pull request v PyCharme s cieľovou a pracovnou vetvou](../../snimky/ide/Screenshot_38.png)

3. Klikni na **Create Pull Request**. Spolužiak potom môže pokračovať [kontrolou na GitHube](../review/README.md).

</details>

<details markdown="block">
<summary><strong>5. Po zlúčení aktualizuj main</strong></summary>

1. Keď je pull request zlúčený, ulož vlastnú rozpracovanú prácu commitom alebo stashom. V ponuke vetiev vyber **main → Checkout**.

![Prepnutie z pracovnej vetvy na main cez Checkout](../../snimky/ide/Screenshot_39.png)

2. Na vetve `main` klikni na **Update Project**, prípadne použi `Ctrl + T`.

![Update Project na vetve main](../../snimky/ide/Screenshot_40.png)

3. Ak príde výber spôsobu aktualizácie, pre toto cvičenie ponechaj **Merge incoming changes into the current branch** a potvrď **OK**.

![Dialóg aktualizácie projektu s vybranou možnosťou Merge](../../snimky/ide/Screenshot_41.png)

V README skontroluj prijatú zmenu. Z aktuálnej vetvy `main` môžeš vytvoriť vetvu pre ďalšiu úlohu.

</details>

[PyCharm – klonovanie](https://www.jetbrains.com/help/pycharm/manage-projects-hosted-on-github.html) · [Commit a Push](https://www.jetbrains.com/help/pycharm/commit-and-push-changes.html) · [Pull request](https://www.jetbrains.com/help/pycharm/create-and-merge-github-pull-requests.html)
