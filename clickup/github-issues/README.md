---
permalink: /clickup/github-issues/
---

# Prepojenie úlohy v ClickUpe s GitHub Issue

[Späť na návod na ClickUp](../README.md) · [Úvod TerraNetu](../../README.md)

V ClickUpe máš úlohu **Pridať blokovú schému** s riešiteľom a termínom. K nej môžeš pripojiť GitHub Issue, kde tím rieši podrobnosti súvisiace s repozitárom.

## 1. Prepoj existujúce Issue odkazom

1. Na GitHube otvor príslušné **Issue** a skopíruj jeho adresu z prehliadača.
2. V úlohe v ClickUpe vlož adresu do popisu alebo komentára. Skús na ňu kliknúť a over, že vedie na správne Issue. Členovia tímu potrebujú prístup do repozitára.
3. Do popisu Issue môžeš pridať aj odkaz na úlohu v ClickUpe, ak k nej má tím prístup.
4. Keď vytvoríš pull request, pridaj jeho odkaz do ClickUpu. Ak pull request rieši Issue z toho istého repozitára, môžeš do popisu pull requestu napísať napríklad `Closes #12`, kde `12` nahradíš číslom Issue. Pri zlúčení do predvolenej vetvy GitHub uzavrie toto Issue. Po overení výsledku tím uzavrie aj úlohu v ClickUpe.

## 2. Voliteľne nastav integráciu GitHubu

Pre správcov ClickUpu a GitHub repozitára:

1. V ClickUpe otvor **avatar pracovného priestoru → Apps → GitHub → Workspace → Connect** a dokonči autorizáciu.
2. Na stránke integrácie otvor **Settings → Add repo**, vyber tímový repozitár a cez **+ Add Space** ho pripoj k priestoru **TerraNet**.
3. Ak chce člen tímu zakladať Issue priamo z úlohy, pripojí v **Apps → GitHub → Personal** svoj účet. Potom v úlohe v pripojenom priestore otvorí ikonu **GitHub → Add GitHub link → New GitHub Issue**, vyberie repozitár a potvrdí **Create**.

Pri pripojenom priestore sa dá k úlohe priradiť aj aktivita z pull requestu. Pri vytváraní pull requestu pridaj do jeho názvu alebo popisu ID úlohy v tvare `CU-…` a v úlohe skontroluj **Activity**. `Closes #12` označuje číslo Issue na GitHube, kým `CU-…` označuje úlohu v ClickUpe.

[ClickUp – integrácia s GitHubom](https://help.clickup.com/hc/en-us/articles/6305771568791-GitHub-integration) · [GitHub – prepojenie pull requestu s Issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue)
