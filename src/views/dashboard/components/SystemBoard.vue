<template>
  <div class="system-broad">
    <div class="infos">
      <div v-for="(item, index) in showList" :key="index" class="info-block">
        <div v-if="showList.length" class="time">{{ item.Title }}</div>
        <div v-if="showList.length" class="message">
          {{ item.Content }}
        </div>
      </div>
    </div>
    <Pagination
      :current-page.sync="Pagination.PageIndex"
      :total="length"
      :page-size="Pagination.PageSize"
      class="pagination-row"
      @current-change="changePage(Pagination.PageIndex)"
    />
  </div>
</template>
<script>
export default {
  name: 'SystemBoard',
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    length: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      Pagination: {
        PageIndex: 1,
        PageSize: 3,
        TotalCount: 0,
      },
      showList: [],
    }
  },
  watch: {
    list: {
      handler: function() {
        this.changePage(this.Pagination.PageIndex)
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    changePage(currentIndex) {
      this.showList = []
      for (
        let i = currentIndex * this.Pagination.PageSize - 3;
        i < currentIndex * this.Pagination.PageSize;
        i++
      ) {
        if (this.list[i]) {
          this.showList.push({
            Title: this.list[i].Title,
            Content: this.list[i].Content,
          })
        } else {
          break
        }
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.system-broad {
  height: calc(100% - 27px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .infos {
    min-height: 300px;
    .info-block {
      word-wrap: break-word;
      min-height: 100px;
      text-align: justify;
      padding: 12px 0;
      .time {
        color: #b3c0dd;
        font-size: 12px;
      }
      .message {
        color: #3f63b2;
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
      &:nth-child(2) {
        border-top: solid 1px #deeafe;
        border-bottom: solid 1px #deeafe;
      }
    }
  }
  .pagination-row {
    // height: 34px;
    // background-color: cadetblue;
  }
}
</style>
