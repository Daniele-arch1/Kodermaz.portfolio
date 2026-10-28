@echo off
REM Doppio clic qui per creare la copia pulita del sito da caricare online.
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0Prepara-per-pubblicare.ps1"
echo.
pause
