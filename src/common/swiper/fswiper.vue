<template>
    <div class="swiper-container">
        <div ref="wrapper" class="swiper-wrapper">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import "./swiper.min.css";
import Swiper from "./swiper.min";

export default {
    name: "FSwiper",
    props: ["options", "length"],
    data() {
        return {
            currentIndex: 0
        };
    },
    computed: {
        _options() {
            return Object.assign(this.getDefalutOption(), this.options);
        },
    },
    methods: {
        getDefalutOption() {
            let _this = this;
            return {
                loop: true,
                speed: 1000,
                interval: 3000,
                observer: true,
                autoplay: true,
                on: {
                    // 开始滑动
                    transitionStart: function() {
                        if (_this.options.transitionStart) {
                            _this.options.transitionStart(
                                _this._getNextIndex(this.activeIndex)
                            );
                        }
                    },
                    // 点击内容
                    tap: function() {
                        if (_this.options.tap) {
                            _this.options.tap(
                                _this._getNextIndex(this.activeIndex)
                            );
                        }
                    }
                }
            };
        },
        _getNextIndex(index) {
            if (!this._options.loop) {
                return index;
            }
            //可以循环,会生成左右对应的复制图
            if (index === 0) {
                index = this._length - 1;
            } else {
                index = (index - 1) % this._length;
            }
            return index;
        }
    },
    mounted: function() {
        let mySwiper = new Swiper(".swiper-container", this._options);
    }
};
</script>
