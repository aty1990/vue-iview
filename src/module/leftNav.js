/**
 * Created by Administrator on 2017/4/10.
 */
function navConfig() {}
navConfig.prototype.nav=[];
var config=new navConfig();
var ymzs=new navConfig();
ymzs.nav=[
  {
    nodeName: "基本元素",
    nodeId: 'node1',
    isActive: false,
    childrens: [{
        nodeName: '按钮',
        nodeId: 'node1-1',
        parentId:'node1',
        select:true,
        reflink: '/obd/1'
    },{
        nodeName: 'tree',
        nodeId: 'node1-2',
        parentId:'node11',
        select:false,
        reflink: '/obd/11'
    },{
        nodeName: 'tabs',
        nodeId: 'node1-3',
        parentId:'node12',
        select:false,
        reflink: '/obd/12'
    },{
        nodeName: 'upload',
        nodeId: 'node1-4',
        parentId:'node13',
        select:false,
        reflink: '/obd/13'
    },{
        nodeName: 'circle',
        nodeId: 'node1-5',
        parentId:'node14',
        select:false,
        reflink: '/obd/14'
    },{
        nodeName: '通知提醒',
        nodeId: 'node1-6',
        parentId:'node15',
        select:false,
        reflink: '/obd/15'
    },{
        nodeName: '时间轴',
        nodeId: 'node1-7',
        parentId:'node16',
        select:false,
        reflink: '/obd/16'
    },{
        nodeName: 'scroll',
        nodeId: 'node1-8',
        parentId:'node17',
        select:false,
        reflink: '/obd/17'
    },{
        nodeName: 'steps',
        nodeId: 'node1-9',
        parentId:'node18',
        select:false,
        reflink: '/obd/18'
    }]
  },
  {
    nodeName: "组件",
    nodeId: 'node2',
    isActive: false,
    childrens: [{
        nodeName: 'DataTable',
        nodeId: 'node2-1',
        parentId:'node2',
        select:false,
        reflink: '/obd/2'
    },{
        nodeName: 'MarkDown',
        nodeId: 'node2-2',
        parentId:'node2',
        select:false,
        reflink: '/obd/2-1'
    }]
  },
  {
    nodeName: "第三方组件",
    nodeId: 'node3',
    isActive: false,
    childrens: [{
        nodeName: 'iCheck组件',
        nodeId: 'node3-1',
        parentId:'node3',
        select:false,
        reflink: '/obd/3'
    },
    {
        nodeName: '基础表格',
        nodeId: 'node3-2',
        parentId:'node3',
        select:false,
        reflink: '/obd/4'
    },{
        nodeName: '分页表格',
        nodeId: 'node3-3',
        parentId:'node4',
        select:false,
        reflink: '/obd/5'
    }]
  },
  {
    nodeName: "vuex",
    nodeId: 'node4',
    isActive: false,
    childrens: [{
        nodeName: 'vuex',
        nodeId: 'node4-1',
        parentId:'node40',
        select:false,
        reflink: '/obd/vuex/article'
    }]
  }
];
  console.info(config);
  export {config,ymzs};
