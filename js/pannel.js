KG.WYJ.Pannel = (function(){
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
			// 事件绑定
			this._bindEvent();
		},
		_bindEvent: function(){
			var _this = this;
			this.$wrapper.off('mouseenter').on('mouseenter', 'ul > li', function(){
				var $this = $(this);
				
				var $oDiv = $this.children('div');
				if ($oDiv == null){
					return;
				}
				
				var res = 1;
				
				var iDivHei = $oDiv.outerHeight();
				
				var iDivTop = $this.index() * $this.outerHeight();
				
				if (iDivHei + iDivTop > _this.iHeight){
					res = iDivTop - (_this.iHeight - iDivHei);
				}
				
				$(this).addClass('selected').siblings().removeClass('selected');
				
				$oDiv.css({
					'display': 'block',
					'top': res * -1
				});
			});
			
			this.$wrapper.off('mouseleave').on('mouseleave', 'ul > li', function(){
				
				var $oDiv = $(this).children('div');
				if ($oDiv == null){
					return;
				}
				
				$(this).removeClass('selected');
				
				$oDiv.css({
					'display': 'none'
				});
			});
		},
		_setPara: function(option){ // 设置参数
			this.$wrapper = option.$wrapper;
			this.iHeight = option.iHeight || 486;
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
