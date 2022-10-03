<template>
  <div class="tweet-form container" :class="{ open: showForm }">
    <form @submit.prevent="sendTweet">
      <input class="form-control" placeholder="Tu nombre" v-model="username" />
      <textarea
        class="form-control"
        rows="3"
        placeholder="Escribe tu Tweet"
        v-model="tweet"
      ></textarea>
      <button type="submit" class="btn btn-primary">Agregar Tweet</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { saveTweetApi } from "../api/tweet";
export default {
  props: {
    showForm: Boolean,
    reloadTweets: Function,
    openCloseForm: Function,
  },
  setup(props) {
    let username = ref("");
    let tweet = ref("");

    const sendTweet = () => {
      if (!tweet.value || !username.value) return;
      saveTweetApi(tweet.value, username.value);
      username.value = "";
      tweet.value = "";
      props.openCloseForm();
      props.reloadTweets();
    };

    return {
      sendTweet,
      username,
      tweet,
    };
  },
};
</script>

<style lang="scss" scoped>
.tweet-form {
  margin-top: 20px;
  height: 0px;
  overflow: hidden;

  &.open {
    height: auto;
  }

  form {
    margin-bottom: 50px;
    input {
      margin-bottom: 10px;
    }
    button {
      width: 100%;
      margin-top: 10px;
    }
  }
}
</style>
