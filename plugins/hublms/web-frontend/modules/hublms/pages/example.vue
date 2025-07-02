<template>
  <div>
    {{ content }}
  </div>
</template>

<script>
export default {
  async asyncData({app}) {
    // TODO Make sure you change this url prefix to the underscore separated and 
    // lowercase name of your plugin.
    const response = await app.$client.get('hublms/example/')
    return response.data
  },
  head() {
    return {
      title: this.title,
    }
  },
}
</script>
