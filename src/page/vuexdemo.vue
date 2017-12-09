<template>
  <div>
    <h2>这是由多个组件修改一个state的例子，可以看到所有组件的state一同变化，而且每个组件中都可以操作state的变化。</h2>
    <hr>
    <child></child>
    <!-- <single></single> -->
    <child1></child1>
    <child2></child2>
  </div>
</template>

<script>
import child from '../components/vuexC/vuexChild'
// import Single from './components/Single'
import child1 from '../components/vuexC/vuexChild1'
import child2 from '../components/vuexC/vuexChild2'
export default {
  name: 'app',
  components: {
    child,
    child1,
    child2,
    // Single,
  }
}
</script>