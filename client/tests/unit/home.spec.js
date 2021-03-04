import { shallowMount, createLocalVue, mount } from '@vue/test-utils'
import Vuetify from 'vuetify';
import Vue from 'vue';
import Home from './../../src/components/Home.vue';
import Events from './../../src/components/Events.vue';

let wrapper;

Vue.use(Vuetify)

const localVue = createLocalVue();
localVue.use(Vuetify, {});

describe('Home.vue', () => {

  beforeEach(() => {
    wrapper = shallowMount(Home, {
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('is a Vue instance', () => {
      expect(wrapper.isVueInstance).toBeTruthy();
  });

  test('has data', () => {
    expect(typeof Home.data).toBe('function')
  })

  test('renders props.msg when passed', () => {
    const msg = "We make a living by what we get, but we make a life by what we give. – Winston ChurchillEven if you just change one life, you’ve changed the world forever. – Mike SatterfieldVolunteers do not necessarily have the time; they just have the heart. – Elizabeth AndrewThe smallest act of kindness is worth more than the grandest intention. – Oscar Wilde";
    wrapper.setProps ({ msg });
    expect(wrapper.text()).toMatch(msg);
  });

  test('renders child component Events', () => {
    expect(wrapper.findComponent(Events).exists()).toBe(true);
  });

});  
