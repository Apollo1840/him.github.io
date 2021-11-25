:: 0.2
for %%i in (*.png) do (convert %%i -resize 702x496 %%~ni_small.png)