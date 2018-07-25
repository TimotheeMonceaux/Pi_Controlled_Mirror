# Pi_Controlled_Mirror

*TODO*

# Installation:

## Meteo Component

To enable the meteo, copy src/meto/config.json.template to src/meteo/config.json and add your api key (from https://openweathermap.org)

## XKCD Component

The API of XKCD does not allow CORS request, hence I couldn't update it directly in the browser.
Use a cronjob to run refresh.sh daily, that will update the xkcd.json file.