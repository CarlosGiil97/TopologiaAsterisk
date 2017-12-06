;
; BIND data file for local loopback interface
;
$TTL	604800
@	IN	SOA	cotillas.es. root.cotillas.es. (
			      2		; Serial
			 604800		; Refresh
			  86400		; Retry
			2419200		; Expire
			 604800 )	; Negative Cache TTL
;
@	IN	NS	cotillas.es.
@	IN	A	127.0.0.1

	
ns1.cotillas.es.	IN	A	210.34.2.2
ns2.cotillas.es.	IN	A	210.34.3.2
windows.cotillas.es.	IN 	A	210.34.2.11
