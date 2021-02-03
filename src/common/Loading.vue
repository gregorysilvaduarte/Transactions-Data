<template>
  <div></div>
</template>

<style scoped>
 div{
  width: 5rem;
  height: 5rem;
  margin: auto;
  border-radius: 50%;
  border: 0.3rem solid var(--deep-blue);
  transform: translate(50%);
  animation: 1s ripple ease-out infinite;
}
@keyframes ripple {
  from {
    transform: scale(0);
    opacity: 1;
  }
  to {
    transform: scale(1);
    opacity: 0;
  }
}
</style>