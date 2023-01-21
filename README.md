# wlw-Projket
/********************************************
/ Setup and Test
/********************************************
Um einen Server aufzusetzten wurden folgende Schritte durchgefuert:
	1.) npm init, Dabei wurden die allgemeinen Infos wie name,
	description usw. angeben.
	2.) Express instalieren "npm install express
	3.) Datei namens server.js erstellen
	4.) Server kann mittels node server.js gestartet werden.

Um die Funktionalitaet des Servers zu ueberpruefen wurde ein Hello WOrld
Programm getestet, welches in dem Ordner Hell_World zu finden ist.
Dies funktionierte einwandfrei.

/*******************************************
/ I2C
/*******************************************
Um die I2C-Schnittstelle verwenden zu koennen, wurde diese hinzugefuegt:
	npm install i2c-bus
	npm instal raspi raspi-i2c
	npm install raspi-kit-ads1x15
	und im server.js file implementiert

 	
Um die Funktion zu testen wurde ein i2c Programm gestartet, welches im 
Ordner i2c zu fineden ist. Dies funktionierte nur teilweise, da es Probleme mit
der Security Policy gab. Es wurde mittels verschiednen Herangehensweisen wie Helmet
oder setHeader versucht dies zu lösen. Jedoch funktionierte es nie einwandfrei.

/*******************************************
/ Raspi Server
/*******************************************
In dem Ordner Server ist die Abgabe für das wlw-Projekt zu finden.
Dies beinhaltet:
	- server.js
	- index.html
	- main.js
	- style.css
	
Die aufgelistetetn FIles, ermöglichen eine AUswertung einer Batteriezelle mittels
zwei ADC's und zeigen deren Werte auf einer Webseite an.
