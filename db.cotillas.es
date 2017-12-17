$ORIGIN .
$TTL 60	; 1 minute
cotillas.es		IN SOA	cotillas.es. root.cotillas.es. (
				242        ; serial
				60         ; refresh (1 minute)
				60         ; retry (1 minute)
				60         ; expire (1 minute)
				60         ; minimum (1 minute)
				)
			NS	ns1.cotillas.es.
			NS	cotillas.es.
			A	127.0.0.1
			AAAA	::2
$ORIGIN cotillas.es.
$TTL 1800	; 30 minutes
carlos-virtual-machine	A	210.34.2.6
			TXT	"008909f7cc307647dcee9d08ef82440e9f"
$TTL 30	; 30 seconds
comercialuno		A	210.34.2.29
			TXT	"00ff69d86fee95a5a0124457f952a4ca08"
DESKTOP-6ETBGC7		A	210.34.0.41
			TXT	"31c99cd8b352bdbb2c233a109aa943f091"
gestoruno		A	210.34.2.23
			TXT	"00ff69d86fee95a5a0124457f952a4ca08"
$TTL 86400	; 1 day
ns1			A	210.34.2.2
$TTL 1800	; 30 minutes
PC11			A	210.34.0.7
			TXT	"311930ba4ed18d8814cfc258048746f73b"
$TTL 30	; 30 seconds
PC31			A	210.34.0.37
			TXT	"316952e66f05f79641c4dbcb82ec617e5f"
PC41			A	210.34.3.35
			TXT	"311a85d790a7d5d5111eb14c8c4330822e"
$TTL 86400	; 1 day
WindowsCarlos		A	210.34.2.7
			TXT	"315a9da561bad8dd78219c1c919c7e7615"
