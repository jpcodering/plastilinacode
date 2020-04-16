# Utility Disco

[WIKI](https://it.wikipedia.org/wiki/Utility_Disco)

Utility Disco è un'utility sviluppata dalla Apple Inc. per il sistema operativo macOS. 
Essa serve per eseguire operazioni sui dischi rigidi e, più in generale, sulle unità di 
immagazzinamento dati del sistema operativo

---

[Support Apple](https://support.apple.com/it-it/guide/disk-utility/dskutl1040/mac)

## Riparare un dispositivo di archiviazione in Utility Disco sul Mac

Utility Disco può risolvere alcuni tipi di problema del disco, per esempio più app che si chiudono inaspettatamente, un file corrotto, un dispositivo esterno che non funziona correttamente oppure il computer che non si avvia. Ci sono problemi che potrebbero non essere rilevati o riparati da Utility Disco.

Se esegui S.O.S. su un disco, Utility Disco verifica le mappe delle partizioni sul disco ed esegue alcuni controlli aggiuntivi, quindi verifica ciascun volume. Se esegui S.O.S. su un volume, Utility Disco verifica l'intero contenuto solo di quel volume.

Nell'app Utility Disco  sul Mac, scegli Vista > Mostra tutti i dispositivi.

Nota: se stai controllando il disco di avvio o il volume di avvio, riavvia il tuo computer in macOS Recovery, seleziona Utility Disco nella finestra Utility macOS, quindi fai clic su Continua. Se controlli il volume di avvio (Macintosh HD), assicurati di controllare anche il volume di dati (Macintosh HD - Dati).

Dalla barra laterale, seleziona un disco o un volume, quindi fai clic sul pulsante S.O.S. .

Se Utility Disco ti informa che il disco sta per corrompersi, esegui il backup dei dati e sostituisci il disco. Non puoi più ripararlo. Altrimenti, continua al passo successivo.

Fai clic su Esegui, quindi fai clic su Continua.

Se Utility Disco riporta che il disco è OK oppure che è stato riparato, hai finito. Puoi fare clic su “Mostra dettagli” per visualizzare maggiori informazioni sulle riparazioni effettuate. Altrimenti, esegui una delle seguenti azioni:

Se Utility Disco riporta errori di “allocazione extent sovrapposta”, due o più file occupano lo stesso spazio sul disco e almeno uno di essi sembra essere danneggiato. Devi verificare ogni file presente nell'elenco dei file interessati. Per la maggior parte dei file nell'elenco sono presenti degli alias nella cartella DamagedFiles al livello principale del disco.

Se puoi sostituire o ricreare il file, eliminalo.

Se contiene informazioni importanti, apri il documento e esamina i dati che contiene assicurandoti che non sia danneggiato.

Se Utility Disco non riesce a riparare il disco o ricevi un resoconto secondo cui il processo S.O.S. non è andato a buon fine, prova a riparare nuovamente il disco o la partizione. Se quest’operazione non funziona, crea una copia di backup del maggior numero possibile di documenti, riformatta il disco, reinstalla macOS, quindi ripristina i dati di cui hai eseguito il backup.

Se il Mac dispone di un'unità Fusion Drive e viene visualizzato un punto interrogativo lampeggiante o un avviso, consulta la sezione relativa alla risoluzione dei problemi dell'articolo del supporto Apple Informazioni su Fusion Drive, un’opzione di archiviazione disponibile per alcuni Mac.

Se continui ad avere problemi con il disco o non può essere riparato, potrebbe essere danneggiato fisicamente e deve essere sostituito. Per informazioni sull'assistenza per Mac, consulta Come richiedere assistenza o riparazione per il Mac.



---

[iphoneitalia](https://mac.iphoneitalia.com/80991/come-verificare-la-presenza-di-eventuali-errori-sul-disco-rigido-tramite-terminale-guida)

Utility Disco offre un’interfaccia grafica semplice ed intuitiva. Basta scegliere il volume ed avviare il controllo. Per chi, invece, volesse provare ad effettuare un controllo più approfondito, è possibile farlo grazie al “Terminale” ed apposite linee di comando che vi riportiamo di seguito. Quindi, avviate il Terminale e copiate/incollate le opportune stringhe:

diskutil verifyVolume [nome dell’unità]
ddiskutil verifyVolume /

se desiderate effettuare un controllo sul disco rigido
diskutil verifyvolume / Volumes / [nome dell’unità] /
se desiderate effettuare un controllo su un disco rigido esterno collegato al Mac
diskutil verifyvolume /Volumes/BackupStuff/ 
Se, in caso, qualche controllo avesse riportato degli errori, potete avviare la riparazione tramite comando:

diskutil repairvolume /
repairvolume diskutil / Volumes / BackupStuff /
per unità esterne
I casi più gravi, i rimedi offerti da OS X non potrebbero bastare, ma prima di acquistare specifici software o inviare il Mac in assistenza, si può tentare di eseguire lo stesso controllo in “modalità ripristino”.


---

[tuttologico](https://tuttologico.altervista.org/diskutil-ripariamo-dischi-osx/)

Utilizzo del comando
Digitando il solo diskutil otteniamo la lista delle opzione che possiamo utilizzare. Sicuramente il primo verbo che utilizzeremo sarà:

diskutil list

che ci restituirà la lista di tutti i dischi collegati al nostro computer come nell’immagine di seguito:

Clonare Hard disk diskutil

Se vogliamo verificare la presenza di errori in un disco e ripararli, basta digitare:

diskutil repairDisk <nome disco>

ad esempio per riparare il disco di sistema contrassegnato come disk0 digitiamo il comando repairDisk disk0. 

Se invece vogliamo verificare e riparare il filesystem di un volume, basta digitare:

diskutil repairVolume <nome volume>

quindi se vogliamo verificare ad esempio il volume di sistema utilizziamo repairVolume disk0s2.

Questi tre comandi possono essere utili quando un disco non viene montato oppure appare corrotto o non leggibile. Inoltre come si nota dalla figura a inizio articolo diskutil ci mette a disposizione altre potenti opzioni come info, reformat (attenzione, usare con cautela! reformat provoca la perdita di dati).

Possiamo avere informazioni dettagliate sull’utilizzo di tutte le funzioni a disposizione digitando il comando:

man diskutil


---


https://www.buydifferent.it/blog/come-usare-utility-disco-del-tuo-mac/

---

## 10 COMANDI DEL TERMINAL

https://computers.tutsplus.com/it/tutorials/10-terminal-commands-that-every-mac-user-should-know--mac-4825


---

## Come inizializzare un disco su macOS con il Terminale quando Utility Disco fallisce

https://www.saggiamente.com/2018/05/come-inizializzare-un-disco-su-macos-con-il-terminale-quando-utility-disco-fallisce/

