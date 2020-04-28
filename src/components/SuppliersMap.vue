<template>
  <div style="height: 35em">
    <LMap :zoom="zoom" :center="center">
      <LTileLayer :url="url"></LTileLayer>
      <LMarker :lat-lng="[47.41322, -1.219482]"></LMarker>
      <LMarker :lat-lng="[46.19322, 4.82]"></LMarker>
      <LMarker :lat-lng="[45.19322, 6.82]"></LMarker>
      <LMarker :lat-lng="[47.0322, -0.9482]"></LMarker>
      <LMarker :lat-lng="[46.0322, 2.9482]"></LMarker>
    </LMap>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
export default {
  name: 'Map',
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      url: 'https://{s}.tile.osm.org/{z}/{x}/{y}.png',
      zoom: 6,
      center: [46.5322, 2.9482],
      bounds: null,
    };
  },
};
</script>
