Set WshShell = CreateObject("WScript.Shell")
WshShell.Run chr(34) & "C:\Apache\htdocs\easyrtc\start.bat" & Chr(34), 0
Set WshShell = Nothing