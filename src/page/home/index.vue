<template>
    <div>
    	<Table border :columns="columns" :data="dataSet"></Table>
    </div>
</template>
<script>
	import api from '@/fetch/api'
  	export default {
	    data () {
	      	return {
	      		columns:[
	      			{
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '头像',
                        key: 'usericon'
                        // render: (h, params) => {
                        // 	return h('div',[
                        // 		h('img',{ attrs: {
		                      //       src: params.row.usericon,
		                      //       width:"40px",
		                      //       height:"40px"
		                      //   }})
                        // 	])
                        // }
                    },
                    {
                        title: '创建时间',
                        key: 'createtime'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
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
                                            //this.show(params.index)
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
                                           // this.remove(params.index)
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
	      		],
	      		dataSet:[]
	      	}
	    },
	    mounted(){
	    	api.getUser({}).then(res=>{
	    		this.dataSet = res.data;
	    	})
	    },
	    methods:{
	        
	    },
	    activated(){
	    },
	    created(){
	       
	    }
  	}
</script>
