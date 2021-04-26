<template>
  <ul class="firstmenu clear" :value="value">
    <template v-for="el in arraylist">
      <li :class="value == el.id ? 'active' : ''" @click="checkedname(el)">
        {{ el.artTitle }} <slot></slot>
      </li>
    </template>
  </ul>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {

    this.$emit("change", this.arraylist[0]);
    this.$emit("input", this.arraylist[0].id);
  },
  methods: {
    checkedname(val) {
      this.$emit("change", val);
      this.$emit("input", val.id);
    },
  },
  watch: {
    value(id) {
      if (id) {
        this.checkedname(
          this.arraylist.filter((el) => {
            if (el.id == id) {
              return true;
            }
          })[0]
        );
      }
    },
  },
  props: {
    value: { required: true },
    arraylist: { type: Array, required: true },
  },
};
</script>


<style scoped lang="scss">
.firstmenu {
  li {
    line-height: 40px;
    list-style: none;
    font-size: 15px;
    color: #404040;
    // background-color: ;
    padding: 0 15px;
    cursor: pointer;
  }
  .active {
    color: goldenrod;
  }
}
</style>
