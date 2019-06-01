<template>
  <div class="usertable">
    <UserTable></UserTable>
  </div>
</template>

<script>
import UserTable from "../../components/UserTable";
export default {
  components: {
    UserTable
  }
};
</script>

<style scoped>
.usertable {
  margin-top: 20px;
}
</style>
