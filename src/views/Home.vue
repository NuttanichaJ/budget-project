<template>
  <div id="home">
      <div id="contents">
          <div class="header">
            <!-- <h1>หน้าหลัก ฝ่าย/สาขา... {{userID.permission}} </h1> -->
            <h3>หน้าหลัก  {{user.depart_name}}</h3>
          </div>
      </div>

      <div class="mt-5">
        <b-card-group class="justify-content-center" deck>
          <b-card
            class="mr-2 mb-1 shadow bg-white rounded" 
            v-for="project in newlastEdit" 
            :key="project.MP_ID"
            :title="project.MP_Name"
            tag="article"
            style="max-width: 20rem;"
          >
            <template #header>
               <h6 class="mb-4"></h6>
            </template>

            <b-button v-if="user.permission == 'ส่วนกลาง'" :to="`managesubprojectcenter/${project.MP_ID}`" variant="primary">แก้ไขโครงการย่อย</b-button>
            <b-button v-if="user.permission == 'สาขาวิชา'" :to="`managesubproject/${project.MP_ID}`" variant="primary">แก้ไขโครงการย่อย</b-button>
            <template #footer>
                      <small class="text-muted">แก้ไขล่าสุด {{project.lastEditDate}}</small>
            </template>
          </b-card>
        </b-card-group>
      </div>


    </div>
  
</template>

<script>
import MainprojectDataservice from "../services/mainproject.dataservice.js";

export default {
  name: 'Home',
  data() {
      return {
        user : this.$store.state.user,
        lastEdit: [],
        newlastEdit: [],
        DURATION_IN_SECONDS: {
          epochs: ['year', 'month', 'day', 'hour', 'minute'],
          year: 31536000,
          month: 2592000,
          day: 86400,
          hour: 3600,
          minute: 60
        },
      }
    },
  
  mounted(){  
    this.retrieveMainProject(this.user.depart_id);
  },
  

  methods: {
    retrieveMainProject(depart_id) {
      MainprojectDataservice.getAll()
            .then(response => {
              for(var i in response.data) {
                  if(depart_id == response.data[i].D_ID) {
                    //var time = this.timeSince(response.data[i].updatedAt)
                    //response.data[i].lastEditDate = time
                    //this.time_ago(response.data[i].updatedAt)
                    
                    var date = new Date(response.data[i].updatedAt);
                    var lastdate = this.timeSince(date.getTime())
                    response.data[i].lastEditDate = lastdate
                    this.lastEdit.push(response.data[i]);
                    this.lastEdit.sort((a, b) => (a.updatedAt < b.updatedAt) ? 1 : -1)
                }
              }
              this.lastEdit.splice(4, this.lastEdit.length)
              this.newlastEdit = this.lastEdit
            })
            .catch(e => {
              console.log(e);
            });
    },

    timeSince(date) {
      if (typeof date !== 'object') {
        date = new Date(date);
      }

      var seconds = Math.floor((new Date() - date) / 1000);
      var intervalType;

      var interval = Math.floor(seconds / 31536000);
      if (interval >= 1) {
        intervalType = 'year';
      } else {
        interval = Math.floor(seconds / 2592000);
        if (interval >= 1) {
          intervalType = 'month';
        } else {
          interval = Math.floor(seconds / 86400);
          if (interval >= 1) {
            intervalType = 'day';
          } else {
            interval = Math.floor(seconds / 3600);
            if (interval >= 1) {
              intervalType = "hour";
            } else {
              interval = Math.floor(seconds / 60);
              if (interval >= 1) {
                intervalType = "minute";
              } else {
                interval = seconds;
                intervalType = "second";
              }
            }
          }
        }
      }

      if (interval > 1 || interval === 0) {
        intervalType += 's';
      }

      return interval + ' ' + intervalType;
    }

  },
  
}
</script>

<style lang="scss" scoped>
#home {
  margin: 20px;
}

.row {
  margin-bottom: 20px;
}
.col {
  margin-bottom: 10px;
}
.font{
  font-size: 18px;
  color: black;

}
.font-cent{
  text-align: center;
  font-size: 20pz;
}
small{
  font-size: 16px;
}
.font-20{
  font-size: 20px;
  color: black;
}
#chart {
  max-width: 650px;
  margin: 35px auto;
}
.budgetchart{
  border: black solid 1px;
  background: white;
  width: auto;
  height: auto;
}
.numProjectchart{
  border: black solid 1px;
  background: white;
  width: auto;
  height: auto;
}
</style>
