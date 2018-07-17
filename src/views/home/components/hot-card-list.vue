<template>
    <div class="list-bg">
        <div class='list-top-white' />
        <div class='list-top'></div>

        <!-- 查看全部 -->
        <div class='card-title-box'>
            <div class='title'>热门信用卡</div>
            <div class='jump-text' @click="gotoSeeMorePage()">查看全部</div>
            <img class='jump-symbol' :src="arrow_icon" alt="箭头" />
        </div>

        <div class='card-line' />

        <!-- 信用卡列表 -->
        <div>
            <div @click="gotoPage(item)" class='card-item' v-for="(item,key) in list" :key="key">
                <div class='card-line' v-if="key !== 0" />

                <img class='card-img' :src="item.cardImg" alt="信用卡图片" />

                <div class='info'>
                    <p class='name'>{{item.cardName}}</p>
                    <p class='descr'>{{item.describes}}</p>
                    <div class='tags'>
                        <div class='tags-item' v-for="(item,key) in item.tags" :key="key">
                            {{item}}
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <!-- 查看更多 -->
        <div class='card-line' />
        <p  @click="gotoSeeMorePage()" class='card-more'>查看全部</p>
        <div class='card-bottom'></div>

    </div>
</template>

<script>
import "./styles/hot-card-list.scss";

export default {
    name: "RecommendIcon",
    props: ["list"],
    data() {
        return {
            arrow_icon: icon.card_arrow
        };
    },
    methods: {
        gotoPage(data) {
            let { cardName } = data;
            console.log(`跳转${cardName}`);
        },
        gotoSeeMorePage() {
            console.log(`跳转查看全部`);
        }
    }
};
</script>
