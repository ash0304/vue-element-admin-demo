<template>
  <div class="Jumbotron">
    <el-carousel
      ref="carousel"
      direction="vertical"
      class="picture-screen"
      indicator-position="none"
      @change="setPageBtn"
    >
      <el-carousel-item
        v-for="(item, index) in list"
        :key="index"
        :style="{
          backgroundImage: `url('${item.PicURL}')`,
        }"
      />
    </el-carousel>
    <div class="picture-pagination-container">
      <i class="el-icon-arrow-up" @click="$refs.carousel.prev()" />
      <div ref="btns">
        <span
          v-for="(i, index) in list"
          :key="index"
          :class="{ active: index === imgIndex }"
          @click="$refs.carousel.setActiveItem(index)"
        >{{ index + 1 }}</span>
      </div>
      <i class="el-icon-arrow-down" @click="$refs.carousel.next()" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'Jumbotron',
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      imgIndex: 0,
    }
  },
  methods: {
    setPageBtn(index) {
      this.imgIndex = index
      const btns = this.$refs.btns
      const target = btns.querySelectorAll(`span`)[index]
      if (target) {
        btns.scroll({
          top: target.offsetTop - btns.querySelector(`span`).offsetTop,
          left: 0,
          behavior: 'smooth',
        })
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.Jumbotron {
  height: 100%;
  display: flex;
  width: 100%;
  ::v-deep.picture-screen {
    width: 100%;
    display: flex;
    align-items: center;
    margin-right: 12px;
    .el-carousel__container {
      // height: auto;
      height: 100%;
      width: 100%;
      padding-top: 48%; //依比例 撐開高度
      .el-carousel__item {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }
    }
  }
  .picture-pagination-container {
    min-width: 28px;
    $btn-height: 28px;
    display: flex;
    position: relative;
    justify-content: space-between;
    flex-direction: column;
    min-height: $btn-height * 3 + 20;
    i,
    span {
      height: $btn-height;
      color: #7f95c5;
      border-radius: 5px;
      border: solid 1px #dceaff;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 12px;
      &.active,
      &:hover {
        background-image: linear-gradient(to top, #0043b3, #699eff);
        color: white;
      }
    }
    i {
      color: #5994eb;
    }
    > div {
      position: absolute;
      height: calc(100% - #{$btn-height * 2 + 20});
      width: 100%;
      left: 0;
      top: $btn-height + 10;
      scrollbar-width: none; //firefox用
      overflow: auto;
      &::-webkit-scrollbar {
        display: none;
      }
      > span {
        &:not(:last-of-type) {
          margin-bottom: 10px;
        }
        &.active {
          background-image: linear-gradient(to top, #0043b3, #699eff);
          color: white;
        }
      }
    }
  }
}
</style>
