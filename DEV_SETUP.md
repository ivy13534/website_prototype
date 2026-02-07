# Developer Quick Start

Small reference for running the project and common PowerShell ⇄ Unix command equivalents.

## Prerequisites
- Node.js (LTS) and npm
- VS Code (optional)

## Run (development)
Open a terminal in the project root and run:

```powershell
npm run dev
```

If you prefer using the VS Code task: Run `Run Task...` → `npm: dev` (or use the `Tasks` view). The workspace task is configured to always reveal the terminal.

## Build (production)

```powershell
npm run build
```

Start the built server:

```powershell
npm start
```

## VS Code tips
- Use `Terminal > Run Task...` to run `npm: build` (Ctrl+Shift+B runs the default build task).
- The workspace includes `.vscode/tasks.json` (presentation.reveal is set to `always`).
- To set the default terminal profile, see `.vscode/settings.json`.

## Quick PowerShell vs Unix command equivalents

| Action | Unix (bash/zsh) | PowerShell |
|---|---:|---|
| List files | `ls` | `Get-ChildItem` (`gci`) |
| Read file | `cat file` | `Get-Content file` |
| Search text | `grep 'pat' file` | `Select-String -Pattern 'pat' file` |
| Remove file | `rm file` | `Remove-Item file` |
| Copy file | `cp src dst` | `Copy-Item src dst` |
| Move file | `mv src dst` | `Move-Item src dst` |
| Env var | `$VAR` | `$env:VAR` |
| Tail follow | `tail -f file` | `Get-Content file -Wait -Tail 10` |

Notes:
- PowerShell pipes objects (use `| Select-Object` / `| ForEach-Object`) while Unix shells pipe text.
- When running npm scripts, commands are identical across shells: `npm run <script>`.

## Examples

Open dev server (project root):

```powershell
cd "D:\Project-private\website_prototype"
npm run dev
```

Search for TODOs in files (PowerShell):

```powershell
Select-String -Path .\**\* -Pattern 'TODO' -SimpleMatch
```

---
File created to help quick iteration; update as needed.
