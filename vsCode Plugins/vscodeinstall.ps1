$extensions =
      "alexcvzz.vscode-sqlite",
      "andys8.jest-snippets",
      "apollographql.vscode-apollo",
      "austincummings.razor-plus",
      "bobsparadox.seti-black",
      "BriteSnow.vscode-toggle-quotes",
      "christian-kohler.npm-intellisense",
      "christian-kohler.path-intellisense",
      "CoenraadS.bracket-pair-colorizer",
      "dbaeumer.vscode-eslint",
      "esbenp.prettier-vscode",
      "formulahendry.auto-close-tag",
      "formulahendry.auto-rename-tag",
      "fosshaas.fontsize-shortcuts",
      "ginfuru.ginfuru-onedark-raincoat-theme",
      "glitch.glitch",
      "HookyQR.beautify",
      "JamesBirtles.svelte-vscode",
      "JCsoftIA.jcsoftia",
      "joelday.docthis",
      "johnpapa.vscode-cloak",
      "ms-azuretools.vscode-docker",
      "MS-CEINTL.vscode-language-pack-es",
      "ms-mssql.mssql",
      "ms-vscode-remote.remote-ssh",
      "ms-vscode-remote.remote-ssh-edit",
      "ms-vscode.azure-account",
      "ms-vsliveshare.vsliveshare",
      "msjsdiag.debugger-for-chrome",
      "Nimda.deepdark-material",
      "Nur.just-black",
      "octref.vetur",
      "Orta.vscode-jest",
      "patbenatar.advanced-new-file",
      "PKief.material-icon-theme",
      "ritwickdey.LiveServer",
      "SmukkeKim.theme-setimonokai",
      "streetsidesoftware.code-spell-checker",
      "vscode-icons-team.vscode-icons",
      "WallabyJs.quokka-vscode",
      "WallabyJs.wallaby-vscode",
      "whatwedo.twig",
      "Zignd.html-css-class-completion",
      "eamodio.gitlens",
      "akamud.vscode-javascript-snippet-pack",
      "esbenp.prettier-vscode",
      "wayou.vscode-todo-highlight"

$cmd = "code --list-extensions"
Invoke-Expression $cmd -OutVariable output | Out-Null
$installed = $output -split "\s"

foreach ($ext in $extensions) {
    if ($installed.Contains($ext)) {
        Write-Host $ext "already installed." -ForegroundColor Gray
    } else {
        Write-Host "Installing" $ext "..." -ForegroundColor White
        code --install-extension $ext
    }
}