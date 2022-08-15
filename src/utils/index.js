/*
 * @Date: 2022-08-10 14:19:08
 * @LastEditors: Mr.qin
 * @LastEditTime: 2022-08-12 10:45:58
 * @Description:
 */

// 数组去重
export const uniqueValues = (arr) => [...new Set(arr)];

//  确定任意对象的具体类型
export const getType = (v) => Object.prototype.toString.call(v).slice(8, -1);

// 函数防抖
export const debounce = (
	func,
	time = 17,
	options = {
		leading: true,
		context: null,
	}
) => {
	let timer;
	const _debounce = function (...args) {
		if (timer) {
			clearTimeout(timer);
		}
		if (options.leading && !timer) {
			timer = setTimeout(null, time);
			func.apply(options.context, args);
		} else {
			timer = setTimeout(() => {
				func.apply(options.context, args);
				timer = null;
			}, time);
		}
	};

	_debounce.cancel = function () {
		clearTimeout(timer);
		timer = null;
	};
	return _debounce;
};

// 节流
export const throttle = (
	func,
	time = 17,
	options = {
		leading: true,
		trailing: false,
		context: null,
	}
) => {
	let previous = new Date(0).getTime();
	let timer;
	const _throttle = function (...args) {
		let now = new Date().getTime();

		if (!options.leading) {
			if (timer) return;
			timer = setTimeout(() => {
				timer = null;
				func.apply(options.context, args);
			}, time);
		} else if (now - previous > time) {
			func.apply(options.context, args);
			previous = now;
		} else if (options.trailing) {
			clearTimeout(timer);
			timer = setTimeout(() => {
				func.apply(options.context, args);
			}, time);
		}
	};

	_throttle.cancel = () => {
		previous = 0;
		clearTimeout(timer);
		timer = null;
	};
	return _throttle;
};
