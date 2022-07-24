<!--
 * @Date: 2022-07-23 22:55:46
 * @LastEditors: Mr.qin
 * @LastEditTime: 2022-07-24 16:27:34
 * @Description: todo 项
-->
<script setup>
	const prop = defineProps({
		todoList: Array,
	});
	const todoList = prop.todoList;
	console.log(todoList);
	const emit = defineEmits(["toDone"]);
	function onChangeState(item, i) {
		item.status = !item.status;

		todoList.splice(i, 1);
		emit("toDone", item, i);
	}
</script>

<template>
	<div
		class="todo-item m-t-15 p-10 flex-sb brs-8"
		:style="{ background: item.color }"
		v-for="(item, i) in todoList"
		:key="i"
	>
		<span class="fz-18 c-stroke trs-5">{{ item.text }}{{ item.status }}</span>
		<input
			@change="onChangeState(item, i)"
			type="checkbox"
			class="bd-white c-stroke"
			:class="item.status ? 'bd-0' : ''"
			name="status"
		/>
	</div>
</template>

<style scoped>
	.todo-item {
		width: 240px;
	}
</style>
