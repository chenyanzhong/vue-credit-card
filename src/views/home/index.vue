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
import { mapState, mapActions } from "vuex";

import RecommendIcon from "./components/recommend-icon";
import Banner from "./components/banner";
import TofuBlock from "./components/tofu-block";
import CardList from "./components/hot-card-list";

export default {
    name: "app",
    components: {
        RecommendIcon,
        Banner,
        TofuBlock,
        CardList
    },
    computed: mapState({
        icons: state => state.home.icons,
        banners: state => state.home.banners,
        squares: state => state.home.squares,
        creditCards: state => state.home.creditCards
    }),
};
</script>

