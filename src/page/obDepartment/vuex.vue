<template>
    <div>
        <div class="article-list">
            <Table border :columns="cols" :data="userData"></Table>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                cols : [
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 300,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '查看'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
                userData : []
            }
        },
        mounted(){
            this.$store.dispatch('getUserData');
            this.userData = this.$store.state.user.users;
        },
        methods:{
            show(idx){
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.userData[idx].name}<br>Age：${this.userData[idx].age}`
                })
            },
            remove(idx){
                this.$store.dispatch('removeUser',idx);
                this.userData = this.$store.state.user.users;
            }
        }
    }
</script>