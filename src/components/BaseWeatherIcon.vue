<script setup lang="ts">
import type { WeatherIconsType } from '@/types'

defineProps<{ name: WeatherIconsType }>()
</script>

<template>
  <!-- sun -->
  <div v-if="name === 'sun'" :class="$attrs.class">
    <div class="sunny">
      <div class="inner"></div>
    </div>
  </div>

  <!-- mostlysun -->
  <div v-if="name === 'mostlysun'" :class="$attrs.class">
    <div class="mostlysunny">
      <div class="inner"></div>
    </div>
  </div>

  <!-- mostlycloudy -->
  <div v-if="name === 'mostlycloudy'" :class="$attrs.class">
    <div class="mostlycloudy">
      <div class="inner"></div>
    </div>
  </div>

  <!-- cloudy -->
  <div v-if="name === 'cloudy'" :class="$attrs.class">
    <div class="cloudy">
      <div class="inner"></div>
    </div>
  </div>

  <!-- fog  -->
  <div v-if="name === 'fog'" :class="$attrs.class">
    <div class="fog">
      <div class="inner"></div>
    </div>
  </div>

  <!-- rain -->
  <div v-if="name === 'rain'" :class="$attrs.class">
    <div class="rain">
      <div class="inner"></div>
    </div>
  </div>

  <!-- storms -->
  <div v-if="name === 'storms'" :class="$attrs.class">
    <div class="tstorms">
      <div class="inner"></div>
    </div>
  </div>

  <!-- sleet -->
  <div v-if="name === 'sleet'" :class="$attrs.class">
    <div class="sleet">
      <div class="inner"></div>
    </div>
  </div>

  <!-- flurries -->
  <div v-if="name === 'flurries'" :class="$attrs.class">
    <div class="flurries">
      <div class="inner"></div>
    </div>
  </div>

  <!-- snow -->
  <div v-if="name === 'snow'" :class="$attrs.class">
    <div class="snow">
      <div class="inner"></div>
    </div>
  </div>
</template>

<style scoped>
.weatherIcon {
  display: inline-block;
  font-family: Helvetica, sans-serif;
  /* Redefine this font size if resizing height & width */
  font-size: 0.48em;
  height: 48px;
  width: 48px;
  line-height: 1em;
  margin: 2%;
  position: relative;
}
.weatherIcon:before,
.weatherIcon:after {
  content: '';
  height: inherit;
  left: 0;
  top: 0;
  width: inherit;
}
.weatherIcon > div:before,
.weatherIcon > div:after,
.weatherIcon .inner:before,
.weatherIcon .inner:after {
  content: '';
  letter-spacing: 0;
  position: absolute;
}
.clear,
.sunny,
.mostlysunny,
.partlycloudy,
.mostlycloudy,
.partlysunny,
.cloudy,
.fog,
.hazy,
.chancerain,
.rain,
.chancetstorms,
.tstorms,
.chancesleet,
.sleet,
.chanceflurries,
.flurries,
.chancesnow,
.snow,
.inner {
  height: inherit;
  width: inherit;
}

/*** Clear/Sunny ***/
.clear,
.sunny {
  margin-top: 48.5%;
}
.clear,
.clear:before,
.clear > .inner:before,
.clear > .inner:after,
.sunny,
.sunny:before,
.sunny > .inner:before,
.sunny > .inner:after {
  background: #ffd632;
  left: 0;
  top: 48.5%;
  width: 100%;
  height: 0.2em;
}
.clear:before,
.sunny:before {
  transform: rotate(45deg);
}
.clear > .inner:before,
.sunny > .inner:before {
  transform: rotate(90deg);
}
.clear > .inner:after,
.sunny > .inner:after {
  transform: rotate(135deg);
}
.clear:after,
.sunny:after {
  background: #ffd632;
  border-radius: 50%;
  height: 60%;
  left: 20%;
  top: 20%;
  width: 60%;
}

/*** Partly Cloudy/Mostly Sunny ***/
.mostlysunny,
.partlycloudy {
  background: #ffd632;
  height: 80%;
  margin-left: 48.5%;
  top: 0;
  width: 0.2em;
}
.mostlysunny:before,
.partlycloudy:before {
  background: #ffd632;
  left: 0;
  top: 48.5%;
  width: 100%;
  height: 0.2em;
}
.mostlysunny > .inner:before,
.partlycloudy > .inner:before {
  border-bottom: 0.2em solid #ffd632;
  border-left: 0.2em solid #ffd632;
  height: 80%;
  left: 8%;
  top: -48.5%;
  transform: rotate(-45deg);
  width: 80%;
}
.mostlysunny > .inner,
.partlycloudy > .inner {
  background: #ffd632;
  border-radius: 50%;
  height: 60%;
  left: 20%;
  position: absolute;
  top: 20%;
  width: 60%;
}
.mostlysunny > .inner:after,
.partlycloudy > .inner:after {
  background: #fff;
  border-radius: 50%;
  bottom: -33%;
  height: 65%;
  right: -15%;
  width: 70%;
}
.mostlysunny:after,
.partlycloudy:after {
  background: #fff;
  border-radius: 50%;
  bottom: 0;
  height: 50%;
  left: 10%;
  width: 55%;
}
/*** Mostly Cloudy/Partly Sunny ***/
.mostlycloudy,
.partlysunny {
  background: #ffd632;
  height: 80%;
  margin-left: 48.5%;
  top: 0;
  width: 0.2em;
}
.mostlycloudy:before,
.partlysunny:before {
  background: #ffd632;
  left: 0;
  top: 48.5%;
  width: 100%;
  height: 0.2em;
}
.mostlycloudy > .inner:before,
.partlysunny > .inner:before {
  border-bottom: 0.2em solid #ffd632;
  border-left: 0.2em solid #ffd632;
  height: 80%;
  left: 8%;
  top: -48.5%;
  transform: rotate(-45deg);
  width: 80%;
}
.mostlycloudy > .inner,
.partlysunny > .inner {
  background: #ffd632;
  border-radius: 50%;
  height: 60%;
  left: 20%;
  position: absolute;
  top: 20%;
  width: 60%;
}
.mostlycloudy > .inner:after,
.partlysunny > .inner:after {
  background: #fff;
  border-radius: 50%;
  bottom: -33%;
  height: 82%;
  right: -34%;
  width: 90%;
}
.mostlycloudy:after,
.partlysunny:after {
  background: #fff;
  border-radius: 50%;
  bottom: 0%;
  height: 63%;
  left: 0;
  width: 70%;
}
/*** Cloudy ***/
.cloudy:before,
.cloudy > .inner:before,
.cloudy > .inner:after,
.cloudy:after {
  background: #fff;
  border-radius: 50%;
}
.cloudy:before {
  height: 35%;
  right: 0;
  top: 0;
  width: 38%;
}
.cloudy > .inner:before {
  height: 27%;
  left: 45%;
  top: 8%;
  width: 30%;
}
.cloudy > .inner:after {
  bottom: 0;
  height: 50%;
  right: 0;
  width: 55%;
}
.cloudy:after {
  bottom: 0;
  height: 63%;
  left: 0;
  width: 70%;
}
/*** Fog / Hazy ***/
.fog:before,
.fog:after,
.hazy:before,
.hazy:after {
  background: #fff;
  border-radius: 50%;
}
.fog:before,
.hazy:before {
  height: 63%;
  left: 0;
  top: 0;
  width: 70%;
}
.fog:after,
.hazy:after {
  height: 50%;
  right: 0;
  top: 13%;
  width: 55%;
}
.fog > .inner:before,
.fog > .inner:after,
.hazy > .inner:before,
.hazy > .inner:after {
  color: #fff;
  content: '\2307';
  font-size: 5em;
  left: 7%;
  transform: rotate(90deg);
}
.fog > .inner:before,
.hazy > .inner:before {
  bottom: 14%;
}
.fog > .inner:after,
.hazy > .inner:after {
  bottom: 0;
}

/*** Chance Rain / Rain ***/
.chancerain:before,
.chancerain > .inner:before,
.rain:before,
.rain > .inner:before {
  border-left: 0.2em dashed #fff;
  border-right: 0.2em dashed #fff;
  bottom: 0;
  height: 60%;
  transform: skew(-20deg);
  width: 13%;
}
.chancerain:before,
.rain:before {
  left: 25%;
}
.chancerain > .inner:before,
.rain > .inner:before {
  left: 57%;
}
.chancerain > .inner:after,
.chancerain:after,
.rain > .inner:after,
.rain:after {
  background: #7799af;
  border-radius: 50%;
}
.chancerain > .inner:after,
.rain > .inner:after {
  height: 63%;
  left: 0;
  top: 0;
  width: 70%;
}
.chancerain:after,
.rain:after {
  height: 50%;
  right: 0;
  top: 13%;
  width: 55%;
}

/*** Chance T-Storms / T-Storms ***/
.chancetstorms:before,
.tstorms:before {
  background: #ffd632;
  height: 30%;
  left: 43%;
  top: 50%;
  transform: skew(-20deg);
  width: 10%;
}
.chancetstorms > .inner:before,
.tstorms > .inner:before {
  border-right: 0.7em solid transparent;
  border-top: 1.9em solid #ffd632;
  bottom: 0;
  left: 45%;
  transform: skew(-20deg);
}
.chancetstorms > .inner:after,
.chancetstorms:after,
.tstorms > .inner:after,
.tstorms:after {
  background: #7799af;
  border-radius: 50%;
}
.chancetstorms > .inner:after,
.tstorms > .inner:after {
  height: 63%;
  left: 0;
  top: 0;
  width: 70%;
}
.chancetstorms:after,
.tstorms:after {
  height: 50%;
  right: 0;
  top: 13%;
  width: 55%;
}
/*** Chance Sleet / Sleet ***/
.chancesleet:before,
.sleet:before {
  border-left: 0.2em dashed #fff;
  border-right: 0.2em dashed #fff;
  bottom: 0;
  height: 60%;
  left: 30%;
  transform: skew(-20deg);
  width: 35%;
}
.chancesleet > .inner:before,
.sleet > .inner:before {
  bottom: 12%;
  color: #fff;
  content: '\2733\ \ \2733';
  font-size: 1em;
  left: 27%;
  transform: rotate(-70deg);
  width: 40%;
}
.chancesleet > .inner:after,
.chancesleet:after,
.sleet > .inner:after,
.sleet:after {
  background: #bacedd;
  border-radius: 50%;
}
.chancesleet > .inner:after,
.sleet > .inner:after {
  height: 63%;
  left: 0;
  top: 0;
  width: 70%;
}
.chancesleet:after,
.sleet:after {
  height: 50%;
  right: 0;
  top: 13%;
  width: 55%;
}
/*** Chance Flurries / Flurries ***/
.chanceflurries > .inner:before,
.chanceflurries > .inner:after,
.flurries > .inner:before,
.flurries > .inner:after {
  color: #fff;
  content: '\25CF\ \25CF\ \25CF';
  font-size: 1.1em;
}
.chanceflurries > .inner:before,
.flurries > .inner:before {
  bottom: 17%;
  right: 25%;
}
.chanceflurries > .inner:after,
.flurries > .inner:after {
  bottom: 0;
  left: 25%;
}
.chanceflurries:before,
.chanceflurries:after,
.flurries:before,
.flurries:after {
  background: #bacedd;
  border-radius: 50%;
}
.chanceflurries:before,
.flurries:before {
  height: 63%;
  left: 0;
  top: 0;
  width: 70%;
}
.chanceflurries:after,
.flurries:after {
  height: 50%;
  right: 0;
  top: 13%;
  width: 55%;
}
/*** Chance Snow / Snow ***/
.chancesnow > .inner:before,
.chancesnow > .inner:after,
.snow > .inner:before,
.snow > .inner:after {
  color: #fff;
  content: '\2733\ \2733\ \2733';
  font-size: 1em;
}
.chancesnow > .inner:before,
.snow > .inner:before {
  bottom: 17%;
  right: 21%;
}
.chancesnow > .inner:after,
.snow > .inner:after {
  bottom: 0;
  left: 21%;
}
.chancesnow:before,
.chancesnow:after,
.snow:before,
.snow:after {
  background: #bacedd;
  border-radius: 50%;
}
.chancesnow:before,
.snow:before {
  height: 63%;
  left: 0;
  top: 0;
  width: 70%;
}
.chancesnow:after,
.snow:after {
  height: 50%;
  right: 0;
  top: 13%;
  width: 55%;
}
</style>
