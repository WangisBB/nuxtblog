<template>
  <mavon-editor
    :subfield="false"
    :scrollStyle="true"
    :value="value"
    :defaultOpen="'preview'"
    :editable="false"
    v-bind="$attrs"
    :toolbarsFlag="false"
 :boxShadow="false"
 previewBackground="#fff"
  codeStyle='vs'
  />
     <!-- codeStyle='vs'
    
    boxShadowStyle="none" -->
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  props: {
    value: { type: String, required: true, default: "" },
  },
};
</script>

<style>

.v-note-wrapper {
  border: none;
}
</style>