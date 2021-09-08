<template>
  <div class="table-frame">
    <el-table
      ref="refTable"
      v-loading="listLoading"
      :data="list"
      :border="border"
      fit
      style="width: 100%"
      :height="list.length > 9 ? height : null"
      :header-row-style="{ height: rowStyleHeaderHeight }"
      :row-style="{ height: rowStyleHeight }"
      :header-cell-style="headerCellStyle"
      :row-class-name="(obj) => isZebraRow(obj)"
      :show-summary="showSummary"
      :summary-method="summaryMethod"
      @row-click="clickTable"
      @selection-change="selectionChange"
      @expand-change="emitRead"
    >
      >
      <template v-if="isNoDataImg" slot="empty">
        <!-- eslint-disable-next-line -->
        <img
          src="../../assets/images/img_not-found.png"
          style="margin-top: 50px; width: calc(370px * 0.6); height: calc(288px * 0.6);"
        />
        <div class="no-data">查无资料</div>
      </template>
      <slot />
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'TableFrame',
  props: {
    listLoading: {
      type: Boolean,
      default: false,
    },
    rowStyleHeaderHeight: {
      type: String,
      default: '48px',
    },
    rowStyleHeight: {
      type: String,
      default: '40px',
    },
    border: {
      type: Boolean,
      default: true,
    },
    list: {
      type: Array,
      required: true,
    },
    showSummary: {
      type: Boolean,
      default: false,
    },
    summaryMethod: {
      type: Function,
      default: () => false,
    },
    isZebra: {
      type: Boolean,
      default: false,
    },
    selectionChange: {
      type: Function,
      default: () => false,
    },
    height: {
      type: String,
      default: '450px',
    },
    isNoDataImg: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    headerCellStyle() {
      return {
        background: '#bad3ff',
        color: '#3f63b2',
        'font-size': '15px'
      }
    },
    tableRowClassName({ rowm, rowIndex }) {
      if (rowIndex % 2 === 1) {
        return 'even-row'
      } else {
        return 'odd-row'
      }
    },
    isZebraRow(obj) {
      if (this.isZebra) {
        return this.tableRowClassName(obj)
      }
    },
    // emit消息至父層, 以確定已讀未讀
    clickTable(row, index, e) {
      row.expanded = !row.expanded
      this.$refs.refTable.toggleRowExpansion(row, row.expanded)
      if (row.expanded && row.IsRead === 0) {
        this.$emit('handle-click-row', row)
      }
    },
    emitRead(row, index) {
      if (row.IsRead === 0) {
        this.$emit('handle-click-row', row)
      }
    }
  },
}
</script>
<style lang="scss" scoped>
.table-frame {
  ::v-deep .el-table {
    th:nth-last-child(2) {
      border-right: 0;
    }
    th.gutter {
      background: rgb(186, 211, 255);
      // display: table-cell !important;
      // width: 0 !important;
    }
  }
}
.no-data {
  color: #7f95c5;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 2px;
  text-align: center;
}
</style>
