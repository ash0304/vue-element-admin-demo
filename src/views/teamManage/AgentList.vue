<template>
  <div class="AgentList">
    <div class="basic-block selects-row">
      <el-form :label-position="'left'" label-width="72px">
        <el-row :gutter="20">
          <el-col :lg="6" :md="12" :sm="12" :xs="24">
            <el-form-item label="代理账号">
              <el-input
                v-model="listQuery.agentAccount"
                class="filter-item"
                style="width: 100%"
              />
            </el-form-item>
          </el-col>
          <el-col :lg="6" :md="12" :sm="12" :xs="24">
            <div class="search-btn" @click="handleSearch">
              搜寻
            </div>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="basic-block data-table">
      <div class="add-block">
        <div class="add-btn pointer">新增</div>
      </div>
      <TableFrame :list="list" :list-loading="listLoading" :is-zebra="true">
        <el-table-column label="序" align="center" width="100">
          <template slot-scope="scope">
            <span>{{ sequenceCalculate(scope.$index) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="代理账号" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.Account }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="最近登录时间"
          align="center"
          width="350"
          prop="loginTime"
        >
          <template slot-scope="scope">
            <span>{{
              scope.row.LastLoginDate | parseTime('{y}-{m}-{d} {h}:{i}:{s}')
            }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="注册时间"
          align="center"
          width="350"
          prop="registerTime"
        >
          <template slot-scope="scope">
            <span>{{
              scope.row.CreateDate | parseTime('{y}-{m}-{d} {h}:{i}:{s}')
            }}</span>
          </template>
        </el-table-column>
      </TableFrame>
      <Pagination
        hide-on-single-page
        :page-size="10"
        :pager-count="5"
        :current-page.sync="listQuery.Pagination.PageIndex"
        layout="prev, pager, next"
        :total="listQuery.Pagination.TotalCount"
        @current-change="listAsync"
      />
    </div>
  </div>
</template>
<script>
import { listAgentAsync } from '@/api/agent'
import { parseTime } from '@/utils/parseTime'

export default {
  name: 'AgentList',
  filters: {
    parseTime
  },
  data() {
    return {
      list: [],
      listLoading: false,
      listQuery: {
        sortColumn: 2,
        sequence: 1,
        agentAccount: '',
        Pagination: {
          PageIndex: 1,
          PageSize: 10,
          TotalCount: 30,
        },
      },
      targetColumn: [2, 3],
    }
  },
  created() {
    this.listAsync()
  },
  methods: {
    sequenceCalculate(index) {
      return (this.listQuery.Pagination.PageIndex - 1) * 10 + index + 1
    },
    handleSearch() {
      this.listQuery.PageIndex = 1
      this.listAsync()
    },
    listAsync() {
      this.listLoading = true
      listAgentAsync(this.listQuery).then((response) => {
        const { data, code, Message, Pagination } = response
        if (code === 20000) {
          this.list = data
          this.listQuery.Pagination = Pagination
        } else {
          this.$notify({
            title: '提示',
            message: Message,
          })
        }
        setTimeout(() => {
          this.listLoading = false
        }, 500)
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.AgentList {
  .data-table {
    height: auto;
    .add-block {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-bottom: 12px;
      .add-btn {
        width: 110px;
        height: 30px;
        line-height: 30px;
        background-image: linear-gradient(to bottom, #699eff, #0043b3);
        color: #fff;
        text-align: center;
        border-radius: 30px;
        font-size: 12px;
      }
    }
  }
}
</style>
