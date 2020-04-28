<template>
  <div style="height: 35em">
    <LMap :zoom="zoom" :center="center">
      <LTileLayer :url="url"></LTileLayer>
      <LMarker
        :lat-lng="[element.latitude, element.longitude]"
        v-for="element in suppliers"
        :latitude="element.latitude"
        :longitude="element.longitude"
        v-bind:key="element.id"
      >
      </LMarker>
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
      suppliers: [
        {
          id: 1,
          latitude: 45.18,
          longitude: 5.7,
        },
        {
          id: 2,
          latitude: 45.34,
          longitude: 5.55,
        },
      ],
    };
  },
};
</script>
