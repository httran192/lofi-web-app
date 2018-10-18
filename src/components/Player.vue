<template>
  <div class="center">
    <aplayer :audio="audio" :lrcType="0" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      audio: {
        // name: 'ヒビカセ',
        // artist: 'れをる',
        // url: 'http://pdacsgxq7.bkt.clouddn.com/mp3/hibikase.mp3',
        // cover: 'http://p1.music.126.net/cZPx3peGTuWEI_GaZB5CDg==/8892850045794893.jpg?param=300y300', // prettier-ignore
        // lrc: 'http://pdacsgxq7.bkt.clouddn.com/lrc/hibikase.lrc',

        name: 'Game over',
        artist: 'orca vibes',
        url: 'https://drive.google.com/uc?export=download&id=1wF3yGa24SRN9fB-I9EdOO20Jn_XczM3m',
        // cover: 'http://p1.music.126.net/cZPx3peGTuWEI_GaZB5CDg==/8892850045794893.jpg?param=300y300',
        lrc: 'http://pdacsgxq7.bkt.clouddn.com/lrc/hibikase.lrc',
      },
    };
  },
};
</script>

<style>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 500px;
}
</style>

