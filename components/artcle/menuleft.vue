<template>

  <ul class="firstmenu clear" :value="value">
    <template v-for="el in arraylist">
      <li :class="value==el.id?'active clear':'clear'"
          @click="checkedname(el.id)">{{el.menuname}} <slot v-bind:el="el"></slot></li>
    </template>
  </ul>

</template>

<script>
export default {
  data () {
    return {


    };
  },
  mounted () {
  
 
     this.$emit('change',  this.value)
       this.$emit('input',this.value)
  },
  methods: {
    checkedname (val) {
    
     this.$emit('input',val)
     this.$emit('change',val)
     
    },
  },
  watch: {
    value(val){
      //  this.$emit('input',val)
     this.$emit('change',val)
    }
  },
  props: {
    value: { required: true },

    arraylist: { type: Array, required: true }
  }
};
</script>


<style scoped lang="scss">
.firstmenu {
  li {
    line-height: 40px;
    list-style: none;
    font-size: 15px;
    color: #f2f2f2;
    background-color: #404040;
    padding: 0 15px;
    cursor: pointer;
  }
  .active {
    color: goldenrod;
    background-color: #666;
    // border-left: 3px solid #ec7259;
    // padding-left: 12px;
  }
}
</style>
