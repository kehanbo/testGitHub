<template>
    <div>
        <h3>嵌入式滑块</h3>
        <button @click="handlebtnShow">
            点击显示
        </button>
        <button @click="handlebtnHide">
            点击关闭
        </button>
        <verify
            ref="verify2"
            :mode="'fixed'"
            :captcha-type="'blockPuzzle'"
            :captcha-id="'9ca07a9c-c260-50ae-2c13-89cde2f34cb9'"
            :container-id="'#sliderFixed_btn'"
        ></verify>
    </div>
</template>
<script>
import verify from '@jzjy/verify'

export default {
    name:'slidValidation',
    components: {
        verify,
    },
    data() {
        return {

        };
    },
    created() {},
    mounted() {},
    methods: {
        handlebtnShow() {
            this.$refs.verify2.show();
            console.log('点击了')
        },
        handlebtnHide() {
            this.$refs.verify2.hide();
            console.log('点击了')
        },
    },
}
</script>
<style scoped>

</style>
