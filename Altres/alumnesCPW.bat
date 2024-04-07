@ECHO OFF
@ECHO CREACIO DE DIRECTORI DIARI ALUMNES 
REM Creem una variable que contingui la data actual amb el format AnyMesDia

SET YYYY=%DATE:~-4%
SET MM=%DATE:~-7,2%
SET DD=%DATE:~-10,2%
SET FOLDER=%YYYY%%MM%%DD%

MKDIR %USERPROFILE%\Documents\compartida\%FOLDER%\CMRC
MKDIR %USERPROFILE%\Documents\compartida\%FOLDER%\DRG
MKDIR %USERPROFILE%\Documents\compartida\%FOLDER%\DMN
MKDIR %USERPROFILE%\Documents\compartida\%FOLDER%\JMC
MKDIR %USERPROFILE%\Documents\compartida\%FOLDER%\JNM
MKDIR %USERPROFILE%\Documents\compartida\%FOLDER%\JAPA
MKDIR %USERPROFILE%\Documents\compartida\%FOLDER%\JMCL
MKDIR %USERPROFILE%\Documents\compartida\%FOLDER%\LDA
MKDIR %USERPROFILE%\Documents\compartida\%FOLDER%\LECO
MKDIR %USERPROFILE%\Documents\compartida\%FOLDER%\LMVP
MKDIR %USERPROFILE%\Documents\compartida\%FOLDER%\MK
MKDIR %USERPROFILE%\Documents\compartida\%FOLDER%\VLHC
MKDIR %USERPROFILE%\Documents\compartida\%FOLDER%\EGL
