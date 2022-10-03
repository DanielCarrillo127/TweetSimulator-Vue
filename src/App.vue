<template>
  <Menu :openCloseForm="openCloseForm" :showForm="showForm" />
  <Form
    :showForm="showForm"
    :openCloseForm="openCloseForm"
    :reloadTweets="reloadTweets"
  />
  <TweetList :tweets="tweets" :reloadTweets="reloadTweets" />
</template>

<script>
import Menu from "./components/Menu.vue";
import Form from "./components/TweetForm.vue";
import useFormTweet from "./hooks/useFormTweet";
import TweetList from "./components/TweetList.vue";
import { ref } from "vue";
import { getTweetApi } from "./api/tweet";

export default {
  name: "App",
  components: {
    Menu,
    Form,
    TweetList,
  },
  setup() {
    let tweets = ref(getTweetApi().reverse());

    const reloadTweets = () => {
      tweets.value = getTweetApi().reverse();
    };

    return {
      ...useFormTweet(),
      tweets,
      reloadTweets,
    };
  },
};
</script>

<style lang="scss"></style>
