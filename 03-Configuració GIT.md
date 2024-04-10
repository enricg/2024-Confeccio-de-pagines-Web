# Pas a pas per configurar un compte de Git i connectar-lo amb GitHub:
1- Instal·la Git:
Si encara no tens Git instal·lat al teu sistema, descarrega'l i instal·la'l des del lloc web oficial de Git (https://git-scm.com/). Segueix les instruccions per al teu sistema operatiu específic.
2- Configura Git:
Obre la teva terminal (a Windows, pots utilitzar Git Bash que ve amb la instal·lació de Git). Configura el teu nom d'usuari i la teva adreça de correu electrònic utilitzant els següents comandaments, substituint "El Teu Nom" i "el.teu@correu.com" amb la teva informació real:
```
cmd
git config --global user.name "El Teu Nom"
git config --global user.email "el.teu@correu.com"
```
3- Genera una clau SSH (opcional però recomanat):
Si prefereixes autenticació SSH en lloc de HTTPS, genera una nova clau SSH utilitzant el següent comandament:
```
cmd
ssh-keygen -t rsa -b 4096 -C "el.teu@correu.com"
```
Segueix les instruccions i deixa el nom de fitxer predeterminat si no tens una raó específica per canviar-lo.
4- Afegeix la clau SSH al teu compte de GitHub (si has creat un):
Si encara no tens un compte de GitHub, crea'l a https://github.com/join.
Després de crear el teu compte, ves a la configuració del teu perfil a GitHub i selecciona "SSH and GPG keys". Fes clic a "New SSH key" i enganxa el contingut de la teva clau pública SSH (~/.ssh/id_rsa.pub en sistemes Unix) al camp proporcionat.
5- Clona un repositori existent de GitHub o en crea un de nou:
Per clonar un repositori existent des de GitHub, copia la URL del repositori i utilitza el comandament git clone seguit de la URL a la teva terminal. Per exemple:
```
cmd
git clone git@github.com:usuari/repositori.git
```
Si prefereixes crear un nou repositori, ves al teu compte de GitHub i fes clic al botó "New" a la cantonada superior dreta de la pàgina.
6- Fes canvis al teu repositori local:
Vés al directori clonat del teu repositori o al nou repositori que has creat i realitza canvis als teus fitxers.
7- Afegeix els teus canvis a l'àrea de preparació (staging area):
Utilitza el comandament git add per afegir els fitxers modificats a l'àrea de preparació. Per exemple:
```
cmd
git add .
```
8- Confirma els teus canvis:
Utilitza el comandament git commit per confirmar els canvis que has afegit a l'àrea de preparació:
```
cmd
git commit -m "Missatge descriptiu dels teus canvis"
```
9- Envia els teus canvis a GitHub:
Utilitza el comandament git push per enviar els teus canvis al repositori remot a GitHub:
```
cmd
git push origin nom-de-la-teva-rama
```
Si estàs treballant a la branca principal (generalment anomenada main o master), no necessites especificar el nom de la branca.
10- Actualitza el teu repositori local des de GitHub (opcional):
Si altres persones estan col·laborant en el mateix repositori i han realitzat canvis, pots utilitzar git pull per actualitzar el teu repositori local:
```
cmd
git pull origin nom-de-la-teva-rama
```
Això sincronitzarà el teu repositori local amb la versió més recent a GitHub.