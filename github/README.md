---
permalink: /github/
---

# GitHub pre tím TerraNet

[Späť na úvod TerraNetu](../README.md)

V prehliadači pridáš blokovú schému do spoločného repozitára. Vytvoríš vetvu, uložíš zmenu, otvoríš pull request a po kontrole ju zlúčiš do hlavnej vetvy. Ak už máte zadanie v ClickUpe, po zlúčení ho [uzavri podľa postupu](../clickup/README.md#dokončenie-úlohy-v-clickupe).

## Prvá zmena na GitHube

<details markdown="block">
<summary><strong>Založ repozitár</strong> · preskoč, ak už tím repozitár má</summary>

1. Vpravo hore klikni na **+ → New repository**.

   ![Otvorená ponuka GitHubu s vyznačenou položkou New repository](../snimky/Screenshot_18.png)

2. Ako názov zadaj **TerraNet**. Pre tímovú ukážku vyber **Private**, zapni **Add README** a klikni na **Create repository**.

   ![Zvýraznené polia Repository name, Private a Add README v ukážkovom repozitári](../snimky/github-ukazka/06a_novy_repozitar.png)

   [GitHub Docs – prvý repozitár](https://docs.github.com/en/get-started/using-github/hello-world)

</details>

<details markdown="block">
<summary><strong>Pozvi spolužiakov do repozitára</strong> · pre vlastníka osobného repozitára</summary>

1. Otvor repozitár a prejdi na jeho **Settings → Collaborators** v časti **Access**.
2. Klikni na **Add people**, vyhľadaj GitHub meno spolužiaka a potvrď pozvánku.

   ![Nastavenia prístupu do súkromného repozitára a tlačidlo Add people](../snimky/github-ukazka/06b_collaborators.png)

3. Spolužiak prijme pozvánku a overí, či vidí tímový repozitár.

[GitHub Docs – pozvanie spolupracovníkov](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/repository-access-and-collaboration/inviting-collaborators-to-a-personal-repository)

</details>

<details markdown="block">
<summary><strong>Vytvor vetvu a ulož zmenu</strong> · docs/blokova-schema</summary>

1. V karte **Code** otvor výber vetvy **main**. Napíš `docs/blokova-schema` a klikni na možnosť vytvorenia tejto vetvy z `main`. Pred úpravou skontroluj, že je vybratá nová vetva.

   ![Výber vetvy s možnosťou vytvoriť docs/blokova-schema z main](../snimky/Screenshot_20.png)

2. Otvor `README.md` a klikni na ceruzku **Edit this file**.

   ![Otvorený README a ceruzka na jeho úpravu](../snimky/Screenshot_21.png)

3. Pod existujúci úvod doplň:

   ```markdown
   ## Bloková schéma

   Sonda → merací uzol → rádio → centrála → uloženie údaja

   Centrála uloží čas prijatia, ID uzla a prijatú hodnotu.
   ```

   ![Editor s textom schémy a označeným tlačidlom Commit changes](../snimky/Screenshot_22.png)

4. Klikni na **Commit changes**. Napíš správu `Pridaj blokovú schému TerraNetu`, nechaj vybranú vetvu `docs/blokova-schema` a potvrď **Commit changes**. Na snímke je ukážková správa `Update README.md`.

   ![Dialóg na uloženie commitu do vetvy docs/blokova-schema](../snimky/Screenshot_23.png)

   [GitHub Docs – vetvy a commity](https://docs.github.com/en/get-started/using-github/hello-world)

</details>

<details markdown="block">
<summary><strong>Otvor pull request a daj zmenu skontrolovať</strong></summary>

1. Prejdi na **Pull requests** a klikni na **Compare & pull request**. Ak sa výzva nezobrazuje, použi **New pull request**.

   ![Karta Pull requests s tlačidlom Compare & pull request](../snimky/Screenshot_24.png)

2. Nastav **base** na `main` a **compare** na `docs/blokova-schema`. Ako názov uveď **Pridať blokovú schému TerraNetu** a v popise stručne napíš, čo si pridal. Klikni na **Create pull request**.

   ![Porovnanie vetiev main a docs/blokova-schema pred vytvorením pull requestu](../snimky/Screenshot_25.png)

3. V časti **Reviewers** vyber spolužiaka s prístupom do repozitára. Popros ho, aby v **Files changed** skontroloval, či je v README celá cesta od sondy po uloženie. Spätnú väzbu môže odoslať cez **Review changes**. Pri samostatnom cvičení otvor **Files changed** a prejdi si rozdiel sám.

   ![Bočný panel pull requestu s časťou Reviewers](../snimky/Screenshot_26.png)

   [GitHub Docs – vytvorenie a kontrola pull requestu](https://docs.github.com/en/get-started/using-github/hello-world)

</details>

<details markdown="block">
<summary><strong>Zlúč zmenu do main</strong> · po kontrole</summary>

1. Otvor kartu **Conversation**. Keď je zmena skontrolovaná a GitHub umožní zlúčenie, klikni na **Merge pull request** a potvrď **Confirm merge**. Ak vidíš **Resolve conflicts**, pokračuj podľa [postupu pri konflikte](#konflikt-v-readme) a potom sa vráť sem.

   ![Pull request bez konfliktu s dostupným tlačidlom Merge pull request](../snimky/Screenshot_27.png)

2. Po hlásení o úspešnom zlúčení otvor **Code → main → README.md** a skontroluj, že schéma je na hlavnej vetve. Skopíruj adresu zlúčeného pull requestu pre úlohu v ClickUpe.

   ![Stav Merged a potvrdenie o zlúčení a uzavretí pull requestu](../snimky/github-ukazka/12b_merged.png)

   ![Bloková schéma zobrazená v README na hlavnej vetve main](../snimky/github-ukazka/13_vysledok.png)

   [GitHub Docs – zlúčenie pull requestu](https://docs.github.com/en/get-started/using-github/hello-world)

</details>

Ak chceš tú istú zmenu robiť na počítači, použi [návod na Git v termináli](terminal/README.md).

## Konflikt v README

<details markdown="block">
<summary><strong>Vyrieš konflikt v prehliadači</strong> · otvor iba pri hlásení o konflikte</summary>

Konflikt môže vzniknúť, keď niekto upraví rovnakú časť `README.md` aj na vetve `main`. GitHub potrebuje, aby ste rozhodli, ako má výsledný text vyzerať.

1. V pull requeste klikni na **Resolve conflicts**.

   ![Hlásenie o konflikte v README.md s tlačidlom Resolve conflicts](../snimky/Screenshot_28.png)

2. Porovnaj obe verzie. V tomto príklade je **Current change** z pracovnej vetvy a **Incoming change** z `main`. Uprav súbor tak, aby v ňom zostal pôvodný názov a úvod projektu aj nová schéma. Ak použiješ **Accept both changes**, skontroluj poradie nadpisov a odstráň nepotrebný skúšobný text. Značky `<<<<<<<`, `=======` a `>>>>>>>` po vyriešení v súbore nemajú zostať.

   ![Editor konfliktu zobrazuje obe verzie README a možnosti ich prijatia](../snimky/Screenshot_29.png)

3. Klikni na **Mark as resolved** a potom na **Commit merge**. Tým uložíš vyriešenie do pracovnej vetvy. Vráť sa do pull requestu, skontroluj **Files changed** a dokonči zlúčenie do `main`.

   ![Tlačidlo Mark as resolved](../snimky/Screenshot_30.png)

   ![Tlačidlo Commit merge po vyriešení konfliktu](../snimky/Screenshot_31.png)

   [GitHub Docs – riešenie konfliktu na GitHube](https://docs.github.com/en/pull-requests/how-tos/merge-and-close-pull-requests/resolving-a-merge-conflict-on-github)

</details>
