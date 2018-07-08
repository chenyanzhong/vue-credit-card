<template>
    <div class="banner-bg">

        <FSwiper class="banner-bg" :options="options" :length="list.length">
            <FSwiperSlide v-for="(item,key) in list" :key="key">
                <img class="banner-img" :src="item.imgurl" alt="banner图片" />
            </FSwiperSlide>
        </FSwiper>

        <!-- 导航条 -->
        <div class='bar-box'>
            <div v-for="(item,key) in list" :key="key">
                <div v-if="currentIndex===key" class='bar-item-select' />
                <div v-else class='bar-item' />
            </div>
        </div>

    </div>
</template>

<script>
import "./styles/banner.scss";

import FSwiper from "./../../../common/swiper/fswiper.vue";
import FSwiperSlide from "./../../../common/swiper/fswiper-slide.vue";

export default {
    name: "Banner",
    props: ["list"],
    components: {
        FSwiper,
        FSwiperSlide
    },
    data() {
        return {
            currentIndex: 0
        };
    },
    computed: {
        options() {
            // 轮播图相关配置
            let opt = {
                auto: true,
                speed: 1000,
                interval: 4000,
                transitionStart: index => this.transitionStart(index),
                tap: index => this.tap(index)
            };
            return opt;
        }
    },
    methods: {
        gotoPage(data) {
            let { cardName } = data;
        },
        transitionStart(index) {
            this.currentIndex = index;
        },
        tap(index) {
            let { title } = this.list[index];
        }
    }
};
</script>
