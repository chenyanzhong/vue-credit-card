let mixin = {
    beforeCreate() {
        console.log("beforeCreate");
    },
    created() {
        console.log("created");
    },
    mounted() {
        console.log("mounted");
    },
    destroyed() {
        console.log("destroyed");
    },

};

export default mixin; 