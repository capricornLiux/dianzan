'use strict';
import $ from 'jquery';
class Praise {
    // 点击的次数和元素
    constructor(num, element) {
        this.num = num;
        this.element = element;
    }
    // 点击事件
    clickButton() {
        this.element.click(() => {
            if (this.num < 10) {
                // 处理大拇指的样式
                // 点赞动画

                // 处理点赞次数加加
                this.num = add(this.num);

                // 移除点赞动画

                alert(`点赞${this.num}`);
            } else {
                // 大拇指置灰
                alert(`置灰了`);
                // 清空点击次数
                this.num = 0;
            }
        })
    }
}

class Thumb extends Praise {
    constructor(num, element){
        super(num, element);
    }
}

// const thumb = new Thumb(0, $('.main'));
// thumb.clickButton();

// 导出模块
export default {Thumb};