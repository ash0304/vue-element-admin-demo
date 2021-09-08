<script>
import _ from 'lodash'
export default {
  name: 'Pagination',
  props: {
    pagerCount: { type: Number, default: 5 },
    currentPage: { type: Number, required: true },
    total: { type: Number, required: true },
    pageSize: { type: Number, required: true },
    layout: { type: String, default: 'prev, pager, next' },
    hideOnSinglePage: { type: Boolean, default: true },
  },
  computed: {
    layoutAry() {
      return _.chain(this.layout).split(',').map(_.trim).value()
    },
  },
  watch: {
    currentPage() {
      this.$emit('current-change')
    },
  },
  methods: {
    changePage(target) {
      this.$emit('update:currentPage', target)
    },
  },
  render(h) {
    const pageCount = Math.ceil(this.total / this.pageSize) // 總頁數
    const areaIndex = Math.floor((this.currentPage - 1) / this.pagerCount) // 第幾區
    const areaCount = Math.ceil(pageCount / this.pagerCount) // 總區數
    const createPage = () => {
      return _.times(this.pagerCount, (i) => {
        const pageNum = i + 1 + areaIndex * this.pagerCount // 頁數數字
        if (pageNum <= pageCount) {
          return h(
            'li',
            {
              class: { current: this.currentPage === pageNum },
              on: {
                click: () => this.changePage(pageNum),
              },
            },
            [pageNum]
          )
        }
      })
    }
    const createHead = () => {
      const prev = h('i', {
        class: { 'el-icon-arrow-left': true,
          prev: true, disable: this.currentPage === 1 },
        on: {
          click: () => this.changePage(this.currentPage - 1),
        },
      })

      const first = h('li', {
        class: { first: true, disable: this.currentPage === 1 },
        on: {
          click: () => this.changePage(1),
        },
      })
      const more = h('li', {
        class: { more: true, hidden: areaIndex === 0 },
        on: {
          click: () => this.changePage(1 + (areaIndex - 1) * this.pagerCount),
        },
      })
      return [first, prev, more]
    }
    const createTail = () => {
      const next = h('i', {
        class: { 'el-icon-arrow-right': true, next: true, disable: this.currentPage === pageCount },
        on: {
          click: () => this.changePage(this.currentPage + 1),
        },
      })
      const last = h('li', {
        class: { last: true, disable: this.currentPage === pageCount },
        on: {
          click: () => this.changePage(pageCount),
        },
      })
      const more = h('li', {
        class: {
          more: true,
          hidden: areaIndex === areaCount - 1,
        },
        on: {
          click: () => this.changePage(1 + (areaIndex + 1) * this.pagerCount),
        },
      })
      return [more, next, last]
    }
    const nodeObj = {
      prev: createHead(),
      pager: createPage(),
      next: createTail(),
    }
    const childNode = _.chain(this.layoutAry)
      .map((i) => nodeObj[i])
      .flatten()
      .value()

    return h(
      'ul',
      { class: { hidden: pageCount <= 1 && this.hideOnSinglePage }},
      childNode
    )
  },
}
</script>
<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}
ul {
  display: flex;
  font-size: 14px;
  justify-content: center;
  padding: 10px 0 0px 0;
  &.hidden {
    display: none;
  }
  li,i {
    height: 28px;
    width: 28px;
    // height: 34px;
    // width: 34px;
    font-size: 12px;
    color: #7f95c5;
    border-radius: 5px;
    border: solid 1px #dceaff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 0 4px;
    // &:hover {
    //   filter: brightness(150%);
    // }
    &.prev,&.next {
      color:#5994eb;
      // background: url('../assets/images/back_arrow.png') no-repeat center center;
      margin: 0;
    }
    &.first {
      background: url('../../assets/images/forward_arrow.png') no-repeat center
        center;
      display: none;
      margin: 0;
    }
    &.last {
      background: url('../../assets/images/end_arrow.png') no-repeat center center;
      margin: 0;
      display: none;
    }
    &.more {
      position: relative;
      max-width: 12px;
      margin: 0 8px;
      border: 0;
      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0%;
        width: 100%;
        // height: 1px;
        transform: translateY(-50%);
        border-bottom: 2px dotted #5994eb;
      }
    }
    &:hover:not(.more),
    &.current {
      box-shadow: 1px 1.7px 4px 0 rgba(0, 120, 221, 0.3);
      background-image: linear-gradient(to top, #0043b3, #699eff);
      color: white;
      &.current {
        pointer-events: none;
      }
    }
    &.disable {
      pointer-events: none;
      opacity: 0.3;
    }
    &.hidden {
      display: none;
    }
  }
}
</style>
