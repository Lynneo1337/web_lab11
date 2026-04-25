<template>
  <div>
    <nav>
      <router-link to="/">Главная</router-link>
      <router-link to="/lab7">Лабораторная №7 (DOM)</router-link>
      <router-link to="/lab8">Лабораторная №8 (События)</router-link>
      <router-link to="/lab9">Лабораторная №9 (Async)</router-link>
    </nav>

    <main>
      <router-view />
    </main>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #f5f5f5;
}

nav {
  background: #42b983;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

nav a {
  color: white;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 5px;
}

nav a:hover {
  background: rgba(255, 255, 255, 0.2);
}

.router-link-active {
  background: rgba(255, 255, 255, 0.3);
  font-weight: bold;
}

main {
  background: white;
  padding: 20px;
  border-radius: 8px;
  min-height: 400px;
}
</style>