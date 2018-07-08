<template>
    <div class='rem-box'>
        <!-- 推荐内容icon  -->
        <div @click="gotoPage(item)" :class="`rem-item-${list.length}`" v-for="(item,key) in list" :key="key">
            <img class='rem-img' :src="item.icon" alt="icon图标" />
            <p class='rem-title'>{{item.name}}</p>
        </div>
    </div>
</template>

<script>
import "./styles/recommend-icon.scss";

export default {
    name: "RecommendIcon",
    props: ["list"],
    data() {
        return {};
    },
    methods: {
        gotoPage(data) {
            let { name, must_login, value } = data;
            console.log(`跳转${name}`);
        }
    }
};
</script>
