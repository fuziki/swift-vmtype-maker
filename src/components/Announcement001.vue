<template>
  <div>
    <p>
      {{msg1}}<br>
      {{msg2}}
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg1: 'バージョン1.0.0 をリリースしました',
      msg2: '今後ともよろしくお願いいたします'
    }
  }
}
</script>