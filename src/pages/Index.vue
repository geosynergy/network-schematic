<template>
  <q-page :style="myStyle(50)">
    <tree-map-schema class="full-width full-height"></tree-map-schema>
  </q-page>
</template>

<script>
  import PageMixin from '../mixins/PageMixin'
  import TreeMapSchema from "../components/TreeMapSchema";

  export default {
    name: 'PageIndex',
    components: {TreeMapSchema},
    mixins: [PageMixin]
  }
</script>
