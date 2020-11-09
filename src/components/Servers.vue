<template>
  <div>
    <b-carousel id="servers" controls indicators fade :interval="3000">
      <b-carousel-slide v-for="image in Object.keys(images)" :key="image" :img-src="'/screenshots/' + image" :caption="servers[image.split('-')[0]].name" :text="images[image]">
        <b-button variant="success" @click="shownServer = 'agskies2'">Join Now!</b-button>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Object,
      required: true
    },
    servers: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {
      shownServer: undefined
    }
  }
}
</script>
