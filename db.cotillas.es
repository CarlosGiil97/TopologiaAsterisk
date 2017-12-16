$ORIGIN .
$TTL 60	; 1 minute
cotillas.es		IN SOA	cotillas.es. root.cotillas.es. (
				17         ; serial
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
$TTL 86400	; 1 day
ns1			A	210.34.2.2
$TTL 1800	; 30 minutes
PC11			A	210.34.0.7
			TXT	"311930ba4ed18d8814cfc258048746f73b"
$TTL 86400	; 1 day
WindowsCarlos		A	210.34.2.7
			TXT	"315a9da561bad8dd78219c1c919c7e7615"
