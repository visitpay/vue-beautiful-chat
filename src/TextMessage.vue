<template>
  <div class="sc-message--text" :style="messageColors">
    <p v-html="messageText" :style="{ maxWidth: maxTextWidth }"></p>
    <p v-if="data.meta" class='sc-message--meta' :style="{color: messageColors.color}">{{data.meta}}</p>
  </div>
</template>

<script>
import escapeGoat from 'escape-goat'
import Autolinker from 'autolinker'
const fmt = require('msgdown')

export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    messageColors: {
      type: Object,
      required: true
    },
    messageStyling: {
      type: Boolean,
      required: true
    },
    styles: {
      type: Object,
      required: true
    }
  },
  computed: {
    messageText() {
      const escaped = escapeGoat.escape(this.data.text)

      return Autolinker.link(this.messageStyling ? fmt(escaped) : escaped, {
        className: 'chatLink',
        truncate: { length: 50, location: 'smart' }
      })
    },
    maxTextWidth() {
      if (this.styles.window && this.styles.window.width) {
        var windowWidth = parseInt(this.styles.window.width);
        var widthToUse = `${windowWidth - 150}px`;
        return widthToUse;
      } else {
        return '';
      }
    }
  }
}
</script>

<style scoped>
a.chatLink {
  color: inherit !important;
}
</style>
