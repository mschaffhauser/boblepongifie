<template>
  <div class="container">
    <header class="row">
      <div class="col-12 text-center">
        <h1>BoBlEpOnGiFiE</h1>
        <i>IdÉe dE PaThEmAn</i>
      </div>
    </header>
    <div class="row main justify-content-center align-content-center">
      <div class="col-12">
        <div class="col-12">
          <img class="bob-img" src="../assets/sponge-bob-mocking.webp" />
        </div>
        <div class="row my-4">
          <div class="col-12">
            <b-form
              class="d-flex justify-content-center"
              @submit.stop.prevent="copySomething(newText)"
            >
              <b-form-input
                v-model="text"
                class="flex-grow-0"
                placeholder="Enter your text"
                @submit.stop.prevent
              ></b-form-input>
            </b-form>
          </div>
        </div>
        <div class="cop-section my-4">
          <div v-if="newText" class="row flex-column">
            <div class="col">
              {{ newText }}
            </div>
            <div class="col mt-4">
              <button
                :class="copied ? 'btn-success' : 'btn-warning'"
                class="btn font-weight-bold"
                @click="copySomething(newText)"
              >
                <span v-if="copied">Copied ✔️</span>
                <span v-else>Copy ✂️</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      copied: '',
    }
  },
  computed: {
    newText() {
      let i = 0
      const x = this.text.split('').map((currElement, index) => {
        if (!currElement.match(/[a-z]/i)) {
          return currElement
        } else {
          i++
        }
        if (i % 2 === 0) {
          return currElement.toUpperCase()
        } else {
          return currElement.toLowerCase()
        }
      })
      return x.join('')
    },
  },
  watch: {
    text() {
      this.copied = false
    },
  },
  methods: {
    async copySomething(text) {
      try {
        this.copied = true
        await this.$copyText(text)
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e)
      }
    },
  },
}
</script>

<style lang="scss">
.container {
  overflow: hidden;
  margin: 0 auto;
  min-height: calc(100vh - 125px);
  justify-content: center;
  align-items: center;
  text-align: center;
}
.row.main {
  min-height: calc(95vh - 125px);
}
header {
  min-height: 100px;
}
footer {
  min-height: 25px;
}
.bob-img {
  width: 350px;
  max-width: 100%;
}
form {
  margin: 0 15px;
}
.form-control {
  max-width: 100%;
  width: 350px;
  display: flex;
}
.cop-section {
  min-height: 150px;
}
</style>
