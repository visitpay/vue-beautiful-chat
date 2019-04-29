<template>
  <div class="sc-message--system" :style="messageColors">
    <p v-html="data.text"></p>
    <p v-if="data.meta" class='sc-message--meta' :style="{color: messageColors.color}">{{data.meta}}</p>
  </div>
</template>

<script>
import escapeGoat from 'escape-goat'
import Autolinker from 'autolinker'

export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    messageColors: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.sc-message--system {
  padding: 8px 20px;
  border-radius: 6px;
  font-weight: 300;
  font-size: 12px;
  line-height: 1.2;
  /*white-space: pre-wrap;*/
  white-space: normal;
  text-align: center;
  -webkit-font-smoothing: subpixel-antialiased;
  font-style: italic;
  opacity: .55;
}

.sc-message--system > p {
    margin-top: 5px;
    margin-bottom: 5px;
}

.sc-message--meta {
  font-size: xx-small;
  margin-bottom: 0px;
  margin-top: 5px;
  opacity: .5;
  text-align: center;
}

a.chatLink {
  color: inherit !important;
}
</style>
