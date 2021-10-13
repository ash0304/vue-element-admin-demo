<template>
  <div class="modal-bg" @click.self="emitClose">
    <div ref="box" class="modal-box">
      <header class="box-header" :class="{ 'no-icon': detailSet }">
        <h1>
          <svg-icon :icon-class="icon" :class="{ none: detailSet }" />{{
            title
          }}
        </h1>
        <span />
        <svg-icon icon-class="close" @click="emitClose" />
      </header>
      <div class="box-content" :class="{ detail: detailSet }">
        <slot :close="emitClose" />
      </div>
    </div>
  </div>
</template>
<script>
import _ from 'lodash'
import gsap from 'gsap'
export default {
  name: 'ModalFrame',
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    detailSet: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      aniDuration: 0.2,
    }
  },
  watch: {
    show(ni) {
      if (ni) this.openModal()
      else this.closeModal()
    },
  },
  mounted() {
    this.setBgColor()
    if (this.show) this.openModal()
  },
  methods: {
    setBgColor() {
      // 新增唯一有顏色的bg
      if (!document.querySelector('.modal-bg-color')) {
        const ele = document.createElement('div')
        ele.classList.add('modal-bg-color')
        document.body.appendChild(ele)
      }
    },
    initBg() {
      // 超出畫面可滾
      if (this.$refs.box.clientHeight >= window.innerHeight) {
        this.$el.style.alignItems = 'initial'
      } else this.$el.style.alignItems = 'center'
    },
    restoreScroll() {
      // 所有modal 關閉恢復可滑
      const list = document.querySelectorAll('.modal-bg')
      const allClosed = _.every(
        list,
        (i) => getComputedStyle(i).display === 'none'
      )
      if (allClosed) document.body.style.overflowY = 'auto'
    },
    openModal() {
      document.body.style.overflowY = 'hidden'
      gsap.to('.modal-bg-color', {
        duration: this.aniDuration,
        opacity: 1,
      })
      gsap.fromTo(
        this.$el,
        { display: 'flex' },
        {
          duration: this.aniDuration,
          onStart: this.initBg,
        }
      )
      const tl = gsap.timeline()
      tl.fromTo(
        this.$refs.box,
        {
          opacity: 0,
          transform: 'scale(0.5)',
        },
        { duration: this.aniDuration, opacity: 1, transform: 'scale(1)' }
      )
      tl.fromTo(
        this.$refs.box.querySelectorAll('*'),
        { opacity: 0 },
        { duration: this.aniDuration, opacity: 1 }
      )
    },
    emitClose() {
      this.$emit('update:show', false)
    },
    closeModal() {
      // 剩最後一個modal時連顏色背景關閉
      const list = document.querySelectorAll('.modal-bg')
      const openedLen = _.filter(
        list,
        (i) => getComputedStyle(i).display !== 'none'
      ).length
      if (openedLen === 1) {
        gsap.to('.modal-bg-color', {
          duration: this.aniDuration,
          opacity: 0,
        })
      }

      gsap.to(this.$el, {
        display: 'none',
        duration: this.aniDuration,
      })
      gsap.to(this.$refs.box, {
        duration: this.aniDuration,
        transform: 'scale(0.5)',
        opacity: 0,
        onComplete: this.restoreScroll,
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.modal-bg {
  padding:5%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2000;
  display: none;
  justify-content: center;
  align-items: center;
  overflow: auto;
  ::v-deep .el-table th.gutter {
    display: table-cell !important;
  }
  .modal-box {
    width: 440px;
    box-shadow: 0px 2px 2px 0 rgba(28, 79, 157, 0.2);
    border: solid 1.5px #dceaff;
    border-radius: 10px;
    background: white;
    padding: 25px 0 30px 0;
    height: fit-content;
    > header {
      display: flex;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 25px 45px 45px;
      &.no-icon {
        padding: 0 30px 25px 30px;
      }
      > h1 {
        font-size: 20px;
        color: #0c338e;
        white-space: nowrap;
        font-weight: bold;
        display: flex;
        align-items: center;
        > svg {
          width: 32px;
          height: 32px;
          margin-right: 15px;
          color: #2d82ff;
          &.none {
            display: none;
          }
        }
      }
      > span {
        height: 2px;
        width: 100%;
        margin-left: 13px;
        margin-right: 35px;
        background: linear-gradient(to right, #bfd4ff, #fff);
      }
      > svg {
        //關閉
        min-width: 22px;
        height: 22px;
        cursor: pointer;
        &:hover {
          filter: brightness(120%);
        }
      }
    }
    ::v-deep.box-content {
      padding: 0 48px;
      &.detail {
        padding: 0px;
      }
      label {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin: 0;
        $title-width: 80px;
        > h6 {
          font-size: 14px;
          color: #515151;
          width: $title-width;
          padding-right: 20px;
          font-weight: bold;
          text-align: right;
        }
        > .el-select,
        > .el-input {
          width: calc(100% - #{$title-width});
        }
        > span {
          color: #7ea3dd;
          font-size: 12px;
          height: 25px;
          position: relative;
          left: $title-width;
          padding-top: 2px;
          width: calc(100% - #{$title-width});
          // padding-left: $title-width;
        }
      }
    }
    ::v-deep.modal-btn {
      width: 100%;
      height: 42px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-image: linear-gradient(to top, #0043b3, #699eff);
      border-radius: 40px;
      color: white;
      font-size: 14px;
      cursor: pointer;
      margin-top: 20px;
      &:hover {
        filter: brightness(110%);
      }
    }
  }
}
</style>
<style lang="scss">
.modal-bg-color {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(124, 146, 180, 0.7);
  opacity: 0;
  z-index: 1999;
  pointer-events: none;
}
</style>
