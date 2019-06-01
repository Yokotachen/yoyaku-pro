<template>
  <div class="machinetable">
    <MachineTable></MachineTable>
  </div>
</template>

<script>
import MachineTable from "../../components/MachineTable.vue";
export default {
  components: {
    MachineTable
  }
};
</script>

<style scoped>
.machinetable {
  margin-top: 20px;
}
</style>
