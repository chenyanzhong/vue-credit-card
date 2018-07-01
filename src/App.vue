<template>
    <div id="app">
        <RecommendIcon v-if="icons.length!==0" :list="icons" />
        <Banner v-if="banners.length!==0" :list="banners" />
        <TofuBlock v-if="squares.length!==0" :list="squares" />
        <CardList v-if="creditCards.length!==0" :list="creditCards" />
    </div>
</template>

<script>
import "./components/styles/index.scss";
import "./common/styles/common.scss";
import { testData } from "./modules/const.js";

import RecommendIcon from "./components/recommend-icon.vue";
import Banner from "./components/banner.vue";
import TofuBlock from "./components/tofu-block.vue";
import CardList from "./components/hot-card-list.vue";

export default {
    name: "app",
    components: {
        RecommendIcon,
        Banner,
        TofuBlock,
        CardList
    },
    data() {
        return {
            data: testData
        };
    },
    computed: {
        icons() {
            return this.data.icon ? this.data.icon : [];
        },
        banners() {
            return this.data.banner ? this.data.banner : [];
        },
        squares() {
            return this.data.square ? this.data.square : [];
        },
        creditCards() {
            return this.data.creditCards ? this.data.creditCards : [];
        }
    },
    methods: {}
};
</script>

