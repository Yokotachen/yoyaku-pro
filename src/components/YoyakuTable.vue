<template>
  <div>
    <a-button class="editable-add-btn" @click="showDrawerYoyaku()">
      <a-icon type="plus">添加</a-icon>
    </a-button>
    <DrawerYoyaku
      :visible="visibleDrawer"
      v-on:closeVisibleDrawer="closeVisibleDrawer"
    ></DrawerYoyaku>
    <a-table
      :columns="columns"
      :dataSource="data"
      bordered
      :pagination="pagination"
    >
      <template
        v-for="col in ['machinename', 'machineip', 'remarks']"
        :slot="col"
        slot-scope="text, record"
      >
        <div :key="col">
          <a-input
            v-if="record.editable"
            style="margin: -5px 0"
            :value="text"
            @change="e => handleChange(e.target.value, record.key, col)"
          />
          <template v-else>{{ text }}</template>
        </div>
      </template>
      <template slot="operation" slot-scope="text, record">
        <div class="editable-row-operations">
          <span v-if="record.editable">
            <a-tooltip>
              <template slot="title"
                >确认</template
              >
              <a-icon
                type="check-circle"
                :theme="iconTheme"
                :spin="iconSpin"
                @click="() => save(record.key)"
              ></a-icon>
            </a-tooltip>
            <a-tooltip>
              <template slot="title"
                >取消</template
              >
              <a-icon
                type="close-circle"
                :theme="iconTheme"
                style="margin-left: 15px;"
                @click="() => cancel(record.key)"
              ></a-icon>
            </a-tooltip>
          </span>
          <span v-else>
            <a-tooltip>
              <template slot="title"
                >编辑</template
              >
              <a-icon
                type="edit"
                :theme="iconTheme"
                :spin="iconSpin"
                @click="() => edit(record.key)"
              ></a-icon>
            </a-tooltip>
          </span>
          <span style="margin-left: 15px;">
            <a-tooltip>
              <template slot="title"
                >删除</template
              >
              <a-icon
                type="delete"
                :theme="iconTheme"
                :spin="iconSpin"
                @click="() => delete record.key"
              ></a-icon>
            </a-tooltip>
          </span>
        </div>
      </template>
    </a-table>
  </div>
</template>

<script>
import DrawerYoyaku from "./DrawerYoyaku";

const columns = [
  {
    title: "设备名称",
    dataIndex: "machinename",
    width: "10%",
    scopedSlots: { customRender: "machinename" },
    align: "center"
  },
  {
    title: "设备IP",
    dataIndex: "machineip",
    width: "45%",
    scopedSlots: { customRender: "machineip" },
    align: "center"
  },
  {
    title: "备注",
    dataIndex: "remarks",
    width: "35%",
    scopedSlots: { customRender: "remarks" },
    align: "center"
  },
  {
    title: "操作",
    dataIndex: "operation",
    scopedSlots: { customRender: "operation" },
    align: "center"
  }
];

const data = [
  { key: "machine1", machinename: "M310", machineip: 123, remarks: "123" },
  { key: "machine2", machinename: "M320", machineip: 456, remarks: "456" },
  { key: "machine3", machinename: "M330", machineip: 789, remarks: "789" }
];

export default {
  components: {
    DrawerYoyaku
  },
  data() {
    this.cacheData = data.map(item => ({ ...item }));
    return {
      data,
      columns,
      iconTheme: "filled",
      iconSpin: false,
      pagination: {
        pageSize: 10 // 默认每页显示数量
      },
      visibleDrawer: false
    };
  },
  methods: {
    showDrawerYoyaku() {
      this.visibleDrawer = true;
    },
    closeVisibleDrawer(val) {
      this.visibleDrawer = val;
    },
    handleChange(value, key, column) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      if (target) {
        target[column] = value;
        this.data = newData;
      }
    },
    edit(key) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      if (target) {
        target.editable = true;
        this.data = newData;
      }
    },
    save(key) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      if (target) {
        delete target.editable;
        this.data = newData;
        this.cacheData = newData.map(item => ({ ...item }));
      }
    },
    cancel(key) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      if (target) {
        Object.assign(
          target,
          this.cacheData.filter(item => key === item.key)[0]
        );
        delete target.editable;
        this.data = newData;
      }
    },
    delete() {
      console.log("delete");
    }
  }
};
</script>
<style scoped>
.editable-add-btn {
  margin-bottom: 8px;
}

.editable-row-operations a-icon {
  font-size: larger;
}
</style>
