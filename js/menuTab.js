KG.WYJ.MenuTab = (function(){
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
			this._bindMenuLiEvent();
		},
		_bindMenuLiEvent: function(){
			var _this = this;
			this.$menuBox.find('ul').off('mouseenter').on('mouseenter','li',function(){
				var $this=$(this);
				var $menuList=$this.find(_this.$menuList);
				if($menuList==null){
					return;
				}
				$menuList.css({
					'dispaly':'block'
				});
			});
			this.$menuBox.find('ul').off('mouseout').on('mouseout','li',function(){
				var $this=$(this);
				var $menuList=$this.find(_this.$menuList);
				if($menuList==null){
					return;
				}
				$menuList.css({
					'dispaly':'none'
				});
			});
		},
		_setPara: function(option){ // 设置参数
			this.$menuBox = option.$menuBox;
			this.$menuList = option.$menuList;
		},
		remove: function(){ // 移除组件
			
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
