# Estructura bàsica d'una pàgina HTML5
```
<!doctype html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>Títol de la web</title>    
    </head>    
    <body>
        Contingut de la web
    </body>			
</html>
```		

# Contingut del \<head>
Al **\<head>** col·loquem les etiquetes que no es visualitzaran però que indicaran totes les característiques que el navegador necessita.

> \<meta charset="utf-8"/>
> Indica la codificació que tindrà la pàgina.

> \<title>Títol de la pàgina</title>
> Mostrarà el títol a la pestanya del navegador.

> \<meta name="description" content="Descripció de la pàgina"/>
> L'atribut content hi haurà el que volem que es visualitzi com a descripció quan aquest aparegui en una cerca dels cercadors. No afecta els posicionadors.

> \<style type="text/css"&;gt;
> /* codi CSS */
> \</style>
> Ubicarem el codi CSS, que afectarà nomès als elements d'aquest arxiu HTML.

> \<link rel=stylesheet href="css/estilo.css" type="text/css"/>
> Associarem l'arxiu d'estils CSS a l'arxiu html.

> \<script type="text/javascript">
> // codi de javaScript
> </script>
> Inclourem el codi javaScript, el qual només afectarà a l'arxiu HTML declarat.

> \<meta name="viewport" content="width=device-width, initial-scale=1.0">
> Això serà llegit per dispositius mòbils per a poder adaptar-se a la mida d'aquests.

# Etiquetes semàntiques en HTML5
Al **\<body>** és on es col·loquen tots els elements que es mostraran a la pàgina. Aquest contingut està dins de caixes.
- \<header>
- \<nav>
- \<main>
- \<section>
- \<article>
- \<article>
- \<aside>
- \<footer>

## \<div> Caixa genèrica </div>
Tipus de caixa genèrica. És la més utilitzada. sol estar dins de caixes que tenen significat semàntic concret.
## \<main> Contingut principal de la pàgina </main>
Caixa que conté tot el contingut principal de la pàgina. Té les següents característiques:
- Només un main per pàgina
- No pot estar inclòs en una altra caixa
- Contindrà aquell contingut (div, section, article, aside) que no es repeteixi (header, nav, footer) a cada pàgina.
## \<header> Capçalera </header>
Ubiquem el contingut destinat a la capçalera de la pàgina. Normalment conté el logo i el nom de la pàgina.
## \<footer> Peu de pàgina </footer>
Ubiquem informació del copyright, del mapa de la pàgina, autor, data, ...
## \<nav> enllaços </>av>
Conté tots els enllaços de la pàgina. En una pàgina pot haver més d'una etiqueta nav. Per exemple, dins el footer i/o a la capçalera.
## \<section> secció d'informació </section>
Conté el contingut genèric de la pàgina:
- Pot haver més d'una a la mateixa pàgina.
- Pot contenir múltiples div i d'altres con article.
- S'utilitza per a grans quantitats o seccions d'informació de tipus similar.
## \<article> article </article>
Aquestes caixes també contenen informació, però normalment s'utilitza per mostrar informació més reduïda i concreta.
## \<aside> contingut </aside>
Ubiquem els continguts que no tenen relació directa amb la pàgina com, per exemple, publicitat.
## \<figure> imatge </figure>
Aquesta té l'objectiu de contenir imatges.
# Exemple d'estructura
```
<!doctype html>
<html>
    <head>
        <meta charset="utf-8"/>
        <meta name="descripcio" content="Resum del contingut de la pàgina">   
        <title>Títol de la pàgina</title>
        <link rel="stylesheet" href="css/estils.css" type="text/css"/>
        <style type="text/css">
            codi CSS 
            codi CSS 
        </style>
        <script type="text/javascript">
            codi javaScript 
            codi javaScript 
        </script>
        <script type="text/javascript" src="js/codi.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
	</head>

	<body>
	    <header>
                cabecera
            </header>
		<nav>
            enlaç1
            enlaç2
        </nav>
        <main>
            <section>
                <article> contingut </article>
                <article> contingut </article>
            </section>
        </main>
        <footer>
            © peu de la pàgina
        </footer>
    </body>
</html>
```