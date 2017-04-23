
# IPPower9258 ping

Library to power-cycle IPPower9258 outlet when ping fails


## Example config.json

```javascript
{
   "host": "http://www.google.com",
   "interval" : 3, /* check every 3 minutes */
   "powercycle_wait": 6, /* wait 6 minutes after powercycle before checking again */
   "ippower9258" : {
       "ipAddress" : "192.168.0.11", /* IPPower9258 device */
       "userName" : "admin",
       "password" : "12345678",
       "outlet" : 0 /* outlet to powercycle on ping fail. Values 0-3
   }
}
```


## License

This is free software; you can redistribute and/or modify it under the terms of the MIT Licence. See the LICENSE file for more information.

