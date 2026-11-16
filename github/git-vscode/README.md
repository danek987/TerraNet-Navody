---
permalink: /github/git-vscode/
---

# Inštalácia a nastavenie Gitu pre VS Code

[Späť na návody pre GitHub](../README.md) · [Úvod TerraNetu](../../README.md)

Tento postup je pre Windows. VS Code má zabudované ovládanie Gitu a používa Git nainštalovaný v počítači.

## 1. Nainštaluj Git

Stiahni a spusti inštalátor z [Git for Windows](https://git-scm.com/install/win). Ak sa inštalátor pýta na použitie Gitu z príkazového riadka, ponechaj možnosť, ktorá Git sprístupní aj ostatným programom.

Ak už používaš `winget`, v PowerShelli môžeš namiesto inštalátora spustiť:

```powershell
winget install --id Git.Git -e --source winget
```

Po inštalácii úplne zatvor VS Code a znova ho otvor. V **Terminal → New Terminal** spusti:

```powershell
git --version
```

Ak sa zobrazí číslo verzie, VS Code má k Gitu prístup. Ak terminál príkaz nepozná ani po reštarte VS Code, skús ho v novom PowerShelli. Ak chýba aj tam, skontroluj inštaláciu Git for Windows.

## 2. Nastav meno a e-mail pre commity

V termináli VS Code spusti tieto príkazy so svojimi údajmi:

```powershell
git config --global user.name "Tvoje meno"
git config --global user.email "SEM_VLOZ_SVOJ_EMAIL"
```

Použi e-mail overený v účte GitHub. Ak chceš osobnú adresu skryť z histórie commitov, skopíruj presnú adresu `noreply` zo svojho účtu v **GitHub → Settings → Emails**. Meno a e-mail označujú autora commitu. Prihlásenie ku GitHubu prebehne samostatne pri práci s repozitárom.

`--global` nastaví predvolené údaje pre tvoje repozitáre na tomto počítači. Ak chceš odlišné údaje iba pre jeden projekt, otvor jeho priečinok a použi `git config --local user.name "Tvoje meno"` a `git config --local user.email "TVÔJ_E-MAIL"`.

## 3. Over nastavenie

```powershell
git config --get user.name
git config --get user.email
```

Keď terminál vypíše správne údaje, pokračuj [pripojením VS Code ku GitHubu](../vscode-github/README.md).

[VS Code – prvé kroky s Gitom](https://code.visualstudio.com/docs/sourcecontrol/quickstart) · [GitHub – nastavenie e-mailu pre commity](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address)
