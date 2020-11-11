<template>
  <div>
    <b-carousel id="servers" controls indicators fade :interval="3000">
      <b-carousel-slide v-for="image in Object.keys(images)" :key="image" :img-src="'/screenshots/' + image" :caption="servers[image.split('-')[0]].name" :text="images[image]">
        <b-button variant="success" @click="$bvModal.show(image.split('-')[0])">Join Now!</b-button>
        <b-button variant="success" :href="'https://' + image.split('-')[0] + '-map.nathann5684.tk:2096/'" v-if="servers[image.split('-')[0]].map">View Map</b-button>
      </b-carousel-slide>
    </b-carousel>

    <b-modal v-for="server in Object.keys(servers)" :key="server" :id="server" :title="servers[server].name">
      <b-list-group>
        <b-list-group-item>
          <b-badge variant="primary" pill>1</b-badge>
          <template v-if="servers[server].modpack == 'twitch'">
            <span> Download the modpack through the </span>
            <b-link href="https://app.twitch.tv/download">Twitch Launcher!</b-link>
          </template>
          <template v-else-if="servers[server].modpack != 'vanilla'">
            <span> Download the modpack </span>
            <b-link href="https://app.twitch.tv/download">Twitch Launcher</b-link>
            <span> and install the </span>
            <b-link :href="servers[server].modpack">Modpack</b-link>
            <span> (</span>
            <b-link href="https://help.twitch.tv/s/article/guide-to-modpacks?language=en_US#Import">Instructions</b-link>
            <span>).</span>
          </template>
          <span v-else> Lucky you! You don't have to install any mods! Use the Latest version of the game to connect.</span>
        </b-list-group-item>
        <b-list-group-item>
          <b-badge variant="primary" pill>2</b-badge>
          <span> This server is </span>
          <span v-if="servers[server].restricted == 'irl'">restricted to people who know me in real life. Join the Discord to verify. </span>
          <span v-else-if="servers[server].restricted == 'special'">restricted to people who meet criteria I can't fit into a generic website. Join the Discord to learn more. </span>
          <span v-else>open to anyone! You still need to verify your account - join the Discord to do so. </span>
          <b-link href="https://discord.gg/7Zqkvdt">
            <b-img alt="Discord" src="https://img.shields.io/discord/766873202797314059?label=Join%20Discord"/>
          </b-link>
        </b-list-group-item>
        <b-list-group-item>
          <b-badge variant="primary" pill>3</b-badge>
          <span> Connect via the IP </span>
          <template v-if="servers[server].version == '1.7.10'">
            <b>{{server}}.nathann5684.tk</b>
            <span>. Connecting via the 'standard' IP will crash your game.</span>
          </template>
          <template v-else>
            <b>{{server}}.nathann5684.tk</b>
            <span>. If this fails, join via </span>
            <b>lobby.nathann5684.tk</b>
            <span>. Run the command </span>
            <b>/sub start {{server}}</b>
            <span>. Leave the server, wait two minutes for the server to start, and then reconnect via the regular IP.</span>
          </template>
        </b-list-group-item>
        <b-list-group-item v-if="servers[server].version == '1.7.10'">
          <b-badge variant="primary" pill>4</b-badge>
          <template>
            <span> If you cannot join, </span>
            <span>connect via the IP </span>
            <b>lobby.nathann5684.tk</b>
            <span>. Run the command </span>
            <b>/sub start {{server}}</b>
            <span>. Leave the server, wait five minutes for the server to start, and then reconnect via the regular IP.</span>
          </template>
        </b-list-group-item>
      </b-list-group>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Object,
      required: true
    },
    servers: {
      type: Object,
      required: true
    }
  }
}
</script>
