<template>
  <button type="button" class="btn font-weight-bold btn-info" @click="share()">
    <slot v-if="hasSlot()" name="clickable"> </slot>
    <p v-else class="m-0">Partager 🗨</p>
  </button>
</template>

<script>
export default {
  props: {
    text: String,
    onError: Function,
    onSuccess: Function,
  },
  methods: {
    hasSlot() {
      return !!this.$slots.clickable
    },
    share() {
      const data = {
        text: this.text,
      }
      if (navigator.share) {
        navigator
          .share(data)
          .then((succ) => {
            if (succ) {
              this.onSuccess(succ)
            }
          })
          .catch((err) => {
            this.onError(err)
          })
      } else if (this.onError) {
        this.onError('method not supported')
      }
    },
  },
}
</script>
