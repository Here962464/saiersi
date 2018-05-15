KG.WYJ.Tab = (function(){
	// OOP
	// 定义构造函数/类      第一段
	var Obj = function(options){
		// 设计一个方法，专门处理属性的
		this._setPara(options);
	};
	
	// 在原型对象上添加方法     第二段
	Obj.prototype = {
		constructor: Obj, // 修正一下构造函数的指针
		author: 'WYJ',
		verson: '1.00',
		init: function (){ // 入口方法     共有方法
			// 初始化选项卡
			this._cutTabStyle();
			this._cutTabCont();
			
			// 事件绑定
			this._bindEvent();
		},
		_bindEvent: function(){
			var _this = this;
			this.$tabList.off(this.evType).on(this.evType, function(){
				_this.curIndex = $(this).index();
				_this._cutTabStyle();
				_this._cutTabCont();
				// 执行回调
				_this.callback && _this.callback(_this.curIndex);
			});
		},
		_cutTabStyle: function(){
			this.$tabList.eq(this.curIndex).addClass('selected').
			siblings().removeClass('selected');
		},
		_cutTabCont: function(){
			this.$tabContList.eq(this.curIndex).fadeIn(200).
			siblings().fadeOut(200);
		},
		_setPara: function(option){ // 设置参数
			this.$tabList = option.$tabList;
			this.$tabContList = option.$tabContList;
			this.evType = option.evType || 'click';
			this.curIndex = option.curIndex || 0;
			this.callback = option.callback || null;
		},
		remove: function(){ // 移除组件
			this.$tabList.off(this.evType);
			// 释放内存
			for (var i in this){
				this[i] = null;
			}
		}
	};
	
	
	// 公开接口
	return Obj;
})();

// 调用的示例
