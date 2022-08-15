<!--
 * @Date: 2022-07-22 16:50:58
 * @LastEditors: Mr.qin
 * @LastEditTime: 2022-08-12 14:49:19
 * @Description: 入口文件
-->
<script lang="ts" setup>
	// post('/user/userData').catch((e) => console.log(e));
	// import api from '@/api/index.js';

	const params = {
		a: 1,
		b: 2,
		c: 3,
	};
	// api.test(params, 'a', 'c');
	console.log(getType(new Date()));
	const todo = ref('');
	const color = ref('#8a75ff');
	const todoList = reactive([]); //todo
	const doneList = reactive([]); //已完成

	function add() {
		if (!todo.value) return;
		todoList.push({
			status: false,
			text: todo.value,
			color: color.value,
		});
		todo.value = '';
	}
	function handleDone(item, i) {
		const theList = item.status ? doneList : todoList;
		theList.push(item);
		console.log(theList);
	}
	onBeforeUnmount(() => {});
</script>

<template>
	<div class="todo flex-col-center">
		<!-- <header class="tac m-40">
			<h1>🏳️‍🌈代办事项🏳️‍🌈</h1>
		</header> -->

		<nav>
			<input v-model="color" type="color" name="" id="" />

			<input v-model="todo" class="w-200" :style="{ color }" type="text" />
			<button @click="add" class="bd-theme m-l-5">+</button>
		</nav>
		<main>
			<!-- todo列表 -->
			<TodoItem @toDone="handleDone" :todoList="todoList"></TodoItem>
			<hr class="" />
			<!-- 完成列表 -->
			<TodoItem @toDone="handleDone" :todoList="doneList"></TodoItem>
		</main>
	</div>
</template>

<style lang="less" scoped>
	.todo {
		width: auto;
		main {
			width: auto;
		}
	}
</style>
