<!--
 * @Date: 2022-07-22 16:50:58
 * @LastEditors: Mr.qin
 * @LastEditTime: 2022-08-10 14:23:44
 * @Description: 入口文件
-->
<script setup>
	// import { get, post } from "@/utils/http";
	// import { get } from "@/utils";
	console.log(get);
	const params = {
		geocodedCode: 130000000000,
		token: "44809c1435aade4731b9cf03fdb159e3",
	};
	get("/fireBrigade/getFireBrigadeList", params).then((res) => {
		console.log(res);
	});
	const todo = ref("");
	const color = ref("#8a75ff");
	const todoList = reactive([]); //todo
	const doneList = reactive([]); //已完成

	function add() {
		if (!todo.value) return;
		todoList.push({
			status: false,
			text: todo.value,
			color: color.value,
		});
		todo.value = "";
	}
	function handleDone(item, i) {
		const theList = item.status ? doneList : todoList;
		theList.push(item);
		console.log(theList);
	}
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
