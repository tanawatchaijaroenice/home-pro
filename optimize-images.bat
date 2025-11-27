@echo off
setlocal enabledelayedexpansion

REM === Check if ImageMagick is installed ===
where magick >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: ImageMagick not found!
    echo Please install ImageMagick and add it to PATH
    echo Download from: https://imagemagick.org/script/download.php
    pause
    exit /b 1
)

REM === Define source and destination folders ===
set INPUT=%~dp0images
set OUTPUT=%~dp0images_optimized

REM === Check if input folder exists ===
if not exist "%INPUT%" (
    echo ERROR: Input folder not found: %INPUT%
    pause
    exit /b 1
)

REM === Create main output folder if it doesn't exist ===
if not exist "%OUTPUT%" mkdir "%OUTPUT%"

echo Starting image optimization...
echo Input:  %INPUT%
echo Output: %OUTPUT%
echo.

set TOTAL_FILES=0
set SUCCESS_FILES=0

REM === Loop through all subfolders in images ===
for /D %%d in ("%INPUT%\*") do (

    set FOLDERNAME=%%~nxd
    set SRC=%%d
    set DEST=%OUTPUT%\!FOLDERNAME!

    REM Create sub output folder
    if not exist "!DEST!" mkdir "!DEST!"

    echo ===========================
    echo Processing folder: !FOLDERNAME!
    echo ===========================

    REM Loop through all images in the subfolder
    for %%f in ("!SRC!\*.jpg" "!SRC!\*.jpeg" "!SRC!\*.png") do (
        if exist "%%f" (
            set /a TOTAL_FILES+=1
            echo Processing: %%~nxf
            magick "%%f" -resize "1280x>" -strip -quality 85 "!DEST!\%%~nxf"
            if !errorlevel! equ 0 (
                set /a SUCCESS_FILES+=1
            ) else (
                echo   ^[ERROR^] Failed to process: %%~nxf
            )
        )
    )
)

echo.
echo ===========================
echo Optimization Complete!
echo ===========================
echo Total files processed: %TOTAL_FILES%
echo Successfully optimized: %SUCCESS_FILES%
echo Output folder: %OUTPUT%
echo.
pause
