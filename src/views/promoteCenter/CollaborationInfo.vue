<template>
  <div class="CollaborationInfo">
    <div class="basic-block data-table">
      <div class="hint-block">
        <svg-icon icon-class="Warning" />
        <div class="cs-label">绑定专属合营链接,</div>
        <div class="cs-link" @click="goToCS">请洽客服</div>
      </div>
      <div class="table-box">
        <TableFrame :list="list" :list-loading="listLoading" :is-zebra="true">
          <el-table-column label="类别" align="center">
            <template slot-scope="scope">
              <span>{{ scope.row.Type }}</span>
            </template>
          </el-table-column>
          <el-table-column label="链接" align="center" width="800">
            <template slot-scope="scope">
              <span>{{ scope.row.Url }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作" align="center" width="400">
            <template slot-scope="scope">
              <div class="custom-btn" @click="handleClipboard(scope.row.Url)">
                复制
              </div>
            </template>
          </el-table-column>
        </TableFrame>
      </div>
    </div>
  </div>
</template>
<script>
import handleClipboard from '@/utils/clipboard'

export default {
  name: 'CollaborationInfo',
  data() {
    return {
      list: [],
      listLoading: false,
    }
  },
  methods: {
    listAsync() {
      this.listLoading = true
      // listAsync().then((response) => {
      //   const { Data, Code, Message } = response
      //   if (Code === 0) {
      //     this.list = Data
      //   } else {
      //     this.$notify({
      //       title: '提示',
      //       message: Message,
      //     })
      //   }
      //   setTimeout(() => {
      //     this.listLoading = false
      //   }, 500)
      // })
    },
    handleClipboard(text) {
      handleClipboard(text, event)
    },
    goToCS() {
      window.open(
        this.serviceList[0].sub,
        '_blank',
        'toolbar=no,scrollbars=no,menubar=no,status=no,resizable=yes,location=no'
      )
    },
  },
}
</script>
<style lang="scss" scoped>
.CollaborationInfo {
  .data-table {
    height: 799px;
    .hint-block {
      display: flex;
      color: #2d82ff;
      line-height: 22px;
      margin-bottom: 11px;
      svg {
        margin-right: 5px;
        width: 18px;
        height: 18px;
      }
      .cs-label {
        margin-right: 5px;
        color: #7f95c5;
        font-size: 12px;
      }
      .cs-link {
        color: #2d82ff;
        font-size: 12px;
      }
    }
    .custom-btn {
      width: 110px;
      height: 30px;
      line-height: 30px;
      border: solid 1px #cddcff;
      border-radius: 30px;
      margin: 0 auto;
      background: #fff;
      &:hover {
        background: linear-gradient(to bottom, #699eff, #0043b3);
        color: #fff;
        cursor: pointer;
        transition: background 0.5s ease-in-out;
      }
    }
  }
}
</style>
