<template>
    <div class='tofu-box'>
        <!-- 豆腐块 -->
        <div :class="`tofu-item`" v-for="(item,key) in _list" :key="key">

            <div @click="gotoPage(item.first)" class='left-item'>
                <img :src="item.first.imgurl" :alt="item.first.title" />
            </div>

            <!-- 右边为空就显示个空div -->
            <div @click="gotoPage(item.second)" class='right-item' v-if="item.second">
                <img :src="item.second.imgurl" :alt="item.second.title" />
            </div>
            <div class='right-item' v-else></div>

        </div>
    </div>
</template>

<script>
import "./styles/tofu.scss";

export default {
    name: "tofu",
    props: ["list"],
    computed: {
        _list() {
            return this.splitList(this.list);
        }
    },
    methods: {
        /**
         * 合并数据生成为一行左右两个数据源
         */
        splitList(list) {
            let temp = [];
            let size = Math.ceil(list.length / 2);
            for (let i = 0; i < size; i++) {
                let [first, second] = list.slice(2 * i, 2 * i + 2);
                temp.push({ first, second });
            }
            return temp;
        },
        gotoPage(data) {
            let { title } = data;
            console.log(`跳转${title}`);
        }
    }
};
</script>
