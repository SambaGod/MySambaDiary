<template>  
  <div class="page">
    <v-container fluid>
      <div>
        <v-textarea
          v-model="text"
          solo
          name="input-7-4"
          label="Write something!"
          @click="activateTextBox(true)"
        ></v-textarea>
        <div v-if="activeTextBox">
          <v-layout row wrap>
          <v-btn flat icon><v-icon>image</v-icon></v-btn>
          <v-btn flat icon><v-icon>event</v-icon></v-btn>
          <v-btn flat icon><v-icon>language</v-icon></v-btn>
          <v-spacer></v-spacer>
          <v-btn @click="addPost()" :disabled="text.length == 0">Submit</v-btn>
          </v-layout>
          <div v-if="user.isAdmin">
            Admin options:
            <v-checkbox
              v-model="urgent"
              :label="'Create sticky note'"
            ></v-checkbox>
            <small>Use this option only for urgent issues, that the users should know. For example, technical issues</small>
          </div>
        </div>
      </div>
      <v-divider class="divider" />
      <div>
        
        <div class="stickies" v-if="stickyNotes.length > 0">
          <h2>Announcements from admins</h2>
          <v-card class="dashcard">
              <v-card-text>
                <v-layout row wrap>
                  <div><v-icon>warning</v-icon></div>
                  <div>
                    Announce from {{stickyNotes[stickyIndex].author.name}} 
                  </div>
                  <div class="timedata">
                    {{ stickyNotes[stickyIndex].time }}
                  </div>
                  <v-spacer />
                  <v-btn class="articlebutton" flat icon @click="deletePost(stickyNotes[stickyIndex].id)"><v-icon v-if="stickyNotes[stickyIndex].author.id == user.id">delete</v-icon></v-btn>
                </v-layout>
                <v-divider class="articledivider" />
                {{stickyNotes[stickyIndex].text}}
              </v-card-text>
            </v-card>
        </div>
        
        <h2>What's new?!</h2>
        <div v-if="posts.length > 0">
          <div v-for="(article, index) in posts" v-bind:key="index">
            <v-card v-if="!article.urgent" class="dashcard">
              <v-card-text>
                <v-layout row wrap>
                  <div>
                    {{article.author.name}} 
                  </div>
                  <div class="timedata">
                    {{ article.time }}
                  </div>
                  <v-spacer />
                  <v-btn class="articlebutton" flat icon @click="deletePost(article.id)"><v-icon v-if="article.author.id == user.id">delete</v-icon></v-btn>
                </v-layout>
                <v-divider class="articledivider" />
                {{article.text}}
              </v-card-text>
            </v-card>
          </div>
        </div>
        <div v-else class="noarticles">
          <div class="noarticlestext"><v-icon>error</v-icon></div>
          <div class="noarticlestext">No articles. What if you could create one? :)</div>
        </div>
      </div>
    </v-container>
    <!--<School class="schoolpanel" v-if="user.school" :schoolId="user.school"></School>-->
  </div>
</template>  
<script>
import School from "@/components/School.vue"
import axios from "axios"
import router from "../router"    
export default {    
    name: "Login",    
    data() {    
      return {
        posts: [],
        urgent: false,
        stickyIndex: 0,
        user: {},
        text: "",
        activeTextBox: false,
        counter: 0
      }    
    },
    components: {
      School
    },
    computed: {
      stickyNotes() {
        var tmp = []
        for (var i = 0; i < this.posts.length; i++) {
          if (this.posts[i].urgent) {
            tmp.push(this.posts[i])
          }
        }
        return tmp
      }
    },
    methods: {
        getUserData() { 
            axios.get("/api/user")    
              .then((response) => {      
                this.user = response.data.user
                this.$store.commit('welcomeUser', response.data.user)
              })    
              .catch((errors) => {    
                console.log(errors)    
                router.push("/")    
              })    
        },
        activateTextBox(val) {
          this.activeTextBox = val
        },
        addPost() {
          var article = {id: this.counter, text: this.text, author: this.user, time: new Date(), urgent: this.urgent}
          this.posts.unshift(article)
          this.text = ""
          this.activeTextBox = false
          this.urgent = false
          this.counter += 1
        },
        deletePost(index) {
          for (var i = 0; i < this.posts.length; i++) {
            if (this.posts[i].id == index) {
              this.posts.splice(i, 1)
              break
            }
          }
        }
    },
    mounted() {    
      this.getUserData()    
    }    
}
</script>
<style scoped>
.page {
  height: 100%;
  background-color: rgb(241, 241, 241);
}
.schoolpanel {
  position: fixed;
  bottom: 0px;
  width: 100%;
}
.stickies {
  margin-bottom: 20px;
}
.pretext {
  border: 1px solid black;
}
.textcontainer {
  margin: 20px;
}
.articledivider {
  margin-top: 10px;
  margin-bottom: 10px;
}
.divider {
  margin-top: 20px;
  margin-bottom: 20px;
}
.articlebutton {
  margin: -5px !important;
}
.additions {
  background-color: teal;
  border-radius: 25px;
}
.dashcard {
  margin-top: 20px;
}
.timedata {
  color: gray;
}
.noarticles {
  margin-top: 20px;
}
.noarticlestext {
  text-align: center;
}
</style>
