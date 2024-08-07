function Get-QQpath {
    try {
        $key = Get-ItemProperty -Path "HKLM:\SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\Uninstall\QQ"
        $uninstallString = $key.UninstallString
        return [System.IO.Path]::GetDirectoryName($uninstallString) + "\"
    }
    catch {
        throw "get QQ path error: $_"
    }
}
function Select-QQPath {
    Add-Type -AssemblyName System.Windows.Forms
    [System.Windows.Forms.Application]::EnableVisualStyles()

    $dialogTitle = "Select QQ.exe"

    $filePicker = New-Object System.Windows.Forms.OpenFileDialog
    $filePicker.Title = $dialogTitle
    $filePicker.Filter = "Executable Files (*.exe)|*.exe|All Files (*.*)|*.*"
    $filePicker.FilterIndex = 1
    $null = $filePicker.ShowDialog()
    if (-not ($filePicker.FileName)) {
        throw "User did not select an .exe file."
    }
    return $filePicker.FileName
}

$params = $args -join " "
Try {
    $QQpath = Get-QQpath
}
Catch {
    $QQpath = Select-QQPath
}

if (!(Test-Path $QQpath)) {
    throw "provided QQ path is invalid: $QQpath"
}

Set-Location -Path $QQpath
Start-Process powershell -ArgumentList "-noexit", "-noprofile", "-command &{& chcp 65001;& ./QQ.exe --enable-logging $params}"
