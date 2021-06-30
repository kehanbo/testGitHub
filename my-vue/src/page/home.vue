<template>
  <div class="main-content">
       <div class="editor">
            <div ref="toolbar" class="toolbar">
            </div>
            <div ref="editor" class="text">
            </div>
        </div>
  </div>
</template>

<script>
import E from 'wangeditor'

export default {
    name: 'home',
    data() {
        return {
            name: '我的家',
            editor: null,
            info_: null
        }
    },
    created() {
    },
    mounted() {
        this.seteditor()
        this.editor.txt.html(this.value)
    },
    methods: {
         seteditor() {
            this.editor = new E(this.$refs.toolbar, this.$refs.editor) 
            this.editor.create();
        },
    },
}

</script>

<style scoped>
.main-content {
    height: 100%;
    width: 100%;
    padding:20px;
}
</style>
