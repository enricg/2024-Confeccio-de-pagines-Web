# Configuración GIT
![Funcionament GitHub](../imatges/vcs.png)
## Instalación de Git
### Para Ubuntu
1- Actualitzar paquetes
```bash
sudo apt update
```
2- Instalación Git
```bash
sudo apt-get install git
```
3- Verificar instalación
```bash
git --version
```
4- Establecer nombre de usuario i correo electrónico predeterminados para salvar el trabajo
```bash
git config --global user.name "Mi nombre"
git config --global user.email "micorreo@mail.com"
```
## Trabajando con proyectos GitHub
Dos maneras de hacerlo
### Crear repositorio en plataforma GitHub, clonarlo en tu PC i trabajar con él (recomendado)
1- Crear repositorio
![](../imatges/new-repo.png)
2- Elegir nombre, descripción, marcar opción "Inicializar repositorio con un README", y clic en botón "Crear Repositorio".
![](../imatges/readme.png)
3- Clonar repositorio
![](../imatges/github-project.png)
Des de la terminal escribir:
```bash
git clone [DIRECCION HTTPS]
```
![](../imatges/cmd-1.png)
Des de la terminal escribir:
```bash
cd [NOMBRE DEL REPOSITORIO]
```
![](../imatges/cmd-2.png
)
Estando en la terminal, y habiendo clonado el proyecto en nuestro equipo, dentro del directorio de trabajo del proyecto, tenemos 4 pasos en un **commit**:
1- "status": revisión del estado de los archivos
```bash
git status
```
![](../imatges/git-status-1.png)
2- "add": agregar los archivos que queremos llevar al *commit*
```bash
git add [NOMBRE DE ARCHIVO] [NOMBRE DE ARCHIVO] [...]
```
En el ejemplo mostrado, agregamos un solo archivo
```
git add sample.html
```
![](../imatges/sample.png)
Si quisiéramos agregar **todos** los archivos modificados, escribiremos la instrucción con un punto
```bash
git add .
```
3- "commit": se debe escribir un mensaje informativo de los cambios realizados
```bash
git commit -m "Se agregó archivo HTML de muestra que contiene síntaxis basica"
```
![](../imatges/commit-1.png)
4- "push": subir los cambios a la plataforma de *GitHub*. Para realizarlo, deberemos enviarlo a *Remote*, que es una instancia duplicada de nuestro proyecto, en la nube. Normalmente, el nombre del *Remote* se nombra como **origin**.
Para saber el nombre, escribimos en la terminal:
```bash
git remote
```
![](../imatges/remote-1.png)
Para enviar el trabajo escribiremos lo siguiente:
```bash
git push origin master
```
Ahora, si vamos a la plataforma podremos ver que los cambios ya se han subido
![](../imatges/push-1.png)
> Explicación sobre como enviar o recibir de GitHub
![](../imatges/explanation.png)
**Pulling**: recibir de GitHub
**Pushing**: enviar a GitHub
### Trabajar en tu proyecto localmente y después crear el repositorio en GitHub y enviarlo a remote
1- Des de la terminal nos situamos en el directorio de nuestro proyecto
![](../imatges/type-2.png)
2- Convertimos el directorio en repositorio.
En la terminal escribimos
```bash
git init
```
![](../imatges/init.png)
3- Revisamos estado
Imaginemos que hemos creado dos archivos. Estos deberan verse a continuación
```bash
git status
```
![](../imatges/status-2.png)
4- Añadir estos archivos a estado "stage"
```bash
git add [FILENAME] [FILENAME] [...]
```
> Recuerda que si queremos añadir todos los archivos modificados, podemos escribir un punto, en vez de cada uno de los archivos

```bash
git add .
```
Si, a continuación, hacemos la revisión, visualizaremos los archivos en color verde. Significa que ya estan listos para hacer el **commit**
![](../imatges/commit-1.png)
A continuación realizamos el commit
```bash
git commit -m "Agregando un formulario web de encuesta"
```
![](../imatges/survey-form.png)
Para empezar a subir los cambios a la plataforma de GitHub, hay que crear un *enlace* con el *Remote*
Vamos a GitHub --> creamos un proyecto y lo nombramos, y hacemos clic en el botón "Crear Repositorio".
> IMPORTANTE: al crear este proyecto en GitHub, no lo inicialices con un archivo README

![](../imatges/new-repo-2.png)
A continuación verás la siguiente imagen
![](../imatges/web-page.png)
Copia la direccón HTTPS para poder crear el enlace con *Remote*
```bash
git remote add origin [DIRECCION HTTPS]
```
Verificamos que se ha realizado correctamente:
```bash
git remote
```
Ahora ya podemos enviar nuestro proyecto a GitHub
```bash
git push origin master
```
Podemos revisar en la plataforma si nuestro código ya se ha subido
![](../imatges/final.png)

---
Tutorial extraído de: [La guía para principiantes de Git y GitHub](https://www.freecodecamp.org/espanol/news/guia-para-principiantes-de-git-y-github/)
