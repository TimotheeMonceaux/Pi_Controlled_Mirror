# Pi_Controlled_Mirror

The Pi Controlled Mirror is a pi-controlled-screen displaying several informations on a mirror, i.e. the date, meteo and latest news:

![Pi Controlled Mirror](./pi_controlled_mirror.jpg?raw=true "Pi Controlled Mirror")

# Installation:

To install the Pi Controlled Mirror, simply clone this repo on a freshly installed Raspbian and run `npm install` (first time only). Once this is done, you can run the front with the script `run.sh` and stop it with the command `pkill chromium` (works in a SSH terminal).

## Clock Component

The clock is retrieving the datetime directly from the Pi and does not need any configuration.

## Meteo Component

To enable the meteo, copy `src/meto/config.json.template` to `src/meteo/config.json` and add your api key (from https://openweathermap.org)

## XKCD Component

The API of XKCD does not allow CORS request, hence I couldn't update it directly in the browser.
Use a cronjob to run `refresh.sh` daily, that will update the `xkcd.json` file.

## News Component

To enable the news, copy `src/news/config.json.template` to `src/news/config.json` and add your api key (from https://newsapi.org)