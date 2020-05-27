import { createLocalVue } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import Map from './Map.vue';

createLocalVue();

describe('Admin Map', () => {
  test('Unlocks admin', () => {
    const wrapper = mount(Map);

    wrapper.vm.adminUnlock(1);

    expect(wrapper.vm.mapState.unlockedRooms.indexOf(1)).toBeGreaterThan(0);
  });
});
