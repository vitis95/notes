# Configurazione Premiere Pro per video TikTok
## Impostazioni sequenza
- importa i media
- file > new > sequence (oppure è[cmd + N])
- digital SLR > 1080p > DSLR 1080p24
- impostazioni - qui tutte le impostazioni sono buone, devi cambiare solo la risoluzione. 
- Risoluzione: 1080 x 1920
- Drago la mia clip nel timeline e clicca su mantieni le impostazioni esistenti
- Clicca sulla clip due volte > controllo effetti > scale - cambiare la dimensione della clip

**Preset: Personale > TikTok 1080x1920 23.976**

## Impostazioni di Esportazione
- puoi cliccare [i] e [o] per impostare l'inizio e la fine del video per la esportazione. 
- [cmd + M] per esportare
- config
	- format: H.264
	- preset: puoi selezionare qualsiasi cosa perché personalizziamo tutta la config, ma se puoi imposta "Match Source - High bitrate"
	- nome e destinazione del file 
	- seleziona Export Video e Export Audio
	- assicurati che la dimensione video sia 1080 x 1920 
	- frame rate: 23.976
	- field order: Progressive
	- Aspcet: Square Pixels (1:0)
	- Seleziona Render at Maximum Depth
	- **Econding Settings**
		- Profile: Main
		- Level: 4.1
		- Deseleziona le tre caselle sotto
	- **Bitare Settings**
		- Bitrate Encoding: CBR
		- Target Bitrate (Mbps): 15
	- Seleziona la casella "Use Maximum Render Quality"
	- **Audio Setting**
		- Formato Audio: AAC
		- Sample Rate: 48000 Hz
		- Channels: Stereo
		- Audio Quality: High
		- Bitrate: 320
		- Precedence: Bitrate

Preset - Clicca su predefinito > salva predefinito 
**Preset: TikTok 1080x1920 23.976fps 15mbps cbr**