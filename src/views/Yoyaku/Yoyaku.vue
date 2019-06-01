<template>
  <div>
    <CardYoyaku
      v-on:openDrawerYoyakuMachine="openDrawerYoyakuMachine"
    ></CardYoyaku>
    <DrawerYoyakuMachine
      :visible="visibleDrawerYoyakuMachine"
      v-on:closeDrawerYoyakuMachine="closeDrawerYoyakuMachine"
    ></DrawerYoyakuMachine>
  </div>
</template>

<script>
import CardYoyaku from "../../components/CardYoyaku";
import DrawerYoyakuMachine from "../../components/DrawerYoyakuMachine";
export default {
  components: {
    CardYoyaku,
    DrawerYoyakuMachine
  },
  data() {
    return {
      visibleDrawerYoyakuMachine: false
    };
  },
  methods: {
    openDrawerYoyakuMachine(val) {
      this.visibleDrawerYoyakuMachine = val;
    },
    closeDrawerYoyakuMachine(val) {
      this.visibleDrawerYoyakuMachine = val;
    }
  }
};
</script>

<style></style>
