<script>
export default {
  name: 'VnodeToHtml',
  // eslint-disable-next-line vue/require-prop-types
  props: ['vnode'],
  mounted() {
    this.$emit('html', [...this.$el.childNodes].map(n => n.outerHTML || n.textContent).join('\n'));
  },
  render(createElement) {
    return createElement('template', [this.vnode]);
  },
};
</script>
