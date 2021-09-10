// components/common/showItem/showItemC.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // config:{
    //   type:Object,
    //   value:{
    //     isLink:false,
    //     value:'',
    //     label:'',
    //     title:''
    //   }
    // },
    isLink:{
      type:Boolean,
      value:false
    },
    label:{
      type:String,
      value:''
    },
    title:{
      type:String,
      value:''
    },
    value:{
      type:String,
      value:''
    },
    params:{
      type:Object,
      value:null
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    cpnTap(){
      this.triggerEvent('cpnTap',this.__data__.params,{})
    }
  }
})
