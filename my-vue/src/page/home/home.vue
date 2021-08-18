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
            info_: null,
            dataList: ['1','2','3',['3','4','5'],['5','6','7']],
        }
    },
    created() {
    },
    mounted() {
        this.seteditor()
        this.editor.txt.html(this.value)
        console.log(99999, this.change(this.dataList));
    },
    methods: {
         seteditor() {
            this.editor = new E(this.$refs.toolbar, this.$refs.editor) 
            this.editor.create();
        },
        change(arr) {
            let ArrList = [];
            arr.map(item => {
                if (Array.isArray(item)) {
                    ArrList = ArrList.concat(this.change(item));
                } else {
                    ArrList.push(item);
                }
            })
            return ArrList;
        }
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
