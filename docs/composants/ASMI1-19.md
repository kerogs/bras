# ASMI1-19
![img](https://img.shields.io/badge/KS--Components-dd2222.svg?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAEv0lEQVRoge2aa4hVVRTHf+pYX9S0QpwCIwwrKMiRqUHtRQ96aBQ6YalQGkWEJWUSFVhRENKQRRRCU/agItEPKUXRy57GhDIVg9FDTHvZw+xaDGmtWLEuHC73nLP3uudMl5n5w/5y9lp7rf/eZ6/9WiNE5AXgIoYGNithGSJk/8NIYH8T+DFQ2K+Eh9IIy8gmcGJAMUx4sGOY8GDHMOHBjmHCgx1DkvDYJvBjwNAC7AXGZeypxTpmVAFOHQBGRMjrweZP4KiiOkSPh5OMzD8pMkp4LvBIA3Z6gU6gEkH4D+ugncAnwMvAacCsBjqgoiP8Q4DgDqcBxedAB9Dv0H3N/Ds38W00cAZwBXB1dBzS839AuVJ8+FpEJgTaqC29InIwR+Y4EXk8wrPfy4zS3wLtFiNi8T4wBRiTo/clcA0wA9gWYqMswhUj+4tD91UjcFjENPgQaAMeyBMsg7BG1dOB7x26G4HzgfHA3w79W4HlWQJFE+63ke116G4AZgOtwL4GfOgCrgJ+rldZNGH9Ffscek8DlwFHBK4aeXgK2FRPpkjCZ4cGjhp0A4uAycCvBfmyAphfr6KlIANn6SW3Q083M4uBE4Bdie8dNo/7bXrERPpVNpfro4B1+ELnOrvK9Kckvp0sIttq2t8nIt0iMjWgzbV563CjhBc5yd5r+m2Jby0isjvDWd2EzM9oc1MO2YYJL3SSvcP0Z9Z8bwtwWEw/qacd9VagrpvwYifZW0y/vU7dMYFOK1abzjgR+TRCL5jw5QmlFU6yN5j+BRkyT0Y4f7eI9ETIRxG+zhRuc5JdYvpzAmS7IkmUQniliDzrJLvAjF0codMhIuv/T8JHOsnONkPeaK6BbI2I/FYUYb3xcOwXgjDDjnnbgRMbbGsCMM82KR0NtFMpi/DhiaOhnnpmAh8V1PZ5wPW2945FxfObhZTRNXPwixJs6HTZXtYc9pbvEsbWltC+/qH3NRPhU2oMPl+Snc5mIaxleY3RN0WktQQ7IReNA0JYy3u1hm3HNqpgO7fnES5zWUpivB3uay/h9b77QeBR5x1WPfRlLIOlRel6ZWFGz+8QkTtFZHIBdi5thl+6Wp7I+eUO2nIWsufOKnuKJrxFROY6dXflkK5iqx1aPDbSTl0uwptNebetg7H67YGEq3hbRCZG2liWRjj21vIde8hSHA286AgqPcD9EfJn2uthzIth+uNfYI/pzcLrKb3W6fzt3o0c6cci2p7V6AhfApyTUvcMcGhE7yfbjMHUCNnUN+hQwlmv/0p2XaTz2F3zggj5byJkJ6ZVhBI+kFM/B7gxwqEqngPesOyDV3JkuyLaPTatosinloecqQjVJ5FuezlcD3wF/Gij+hJwKvBZRJvTU2sCg0BoBsBWZwCrnnaS3w5xLnuqs7fRoBWKacBKh946e+1Lvhz+5czWn2d79/ooeISrmOYcacXDTt1q6cvwq7Qcj41OPb37WmrpSR7clHdhWBZh3YWtceh9YFNii0NXL/dW5wmVmcVzrUXXWNwD7In8S6ZbMkwuQgl7dlLYiLU69E6yfI+bA2SXAR8HZviNDc0A0JxHTUWKhSau6o2GZs3FRNyfgCW2NmsET2YHVHE8cFdiHc/3D3r+BcBSA5D+vEfCAAAAAElFTkSuQmCC)


::: warning
Le Shield n'est pas disponible sur internet. C'est un shield conçu spécialement pour l'arduino. Il peut être également utilisé en dessous du [shield moteur](/composants/)
:::

## Description
Ce shield permet de simplifier les connections entre les différents éléments du B.R.A.S. Il est composé également de composants nécessaire au bon fonctionnement du projet.

Le ASMI1 fonctionne sur une tension VIN de ``12V``. Il possède un régulateur de tension afin de la convertir de 12V -> 9V afin d'être compatible pour l'utilisation du [csn-a2](/composants/csn-a2)

## Composant utilisé
- [4069](/composants/4069)
- Régulateur 12v -> 9v

## Equipement supporté
|Equipement|Sortie|Testé|
|----------|------|-----|
|[STONE HMI](/composants/hmi)|J1 STONE (1-4)|✅|
|[Imprimante](/composants/csn-a2)|J2 PRINT (1-4)|✅|
|Moteur|J3 CASIER (1-8)|✅|
|[DRI0023](/composants/dri0023)|Shield|✅|

![Rendu](https://src.ks-infinite.fr/bras/preview1.png)