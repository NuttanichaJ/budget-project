<template>
  <div id="header">
    <b-navbar toggleable="sm" type="light" variant="light">
      <b-navbar-brand to="/homecenter">
        <img src="@/assets/en-logo.png" />
        <div id="logo-name">
          <span>EN KKU</span>
          <br />
          <span id="fullname">Engineering KKU</span>
        </div>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        
        <b-navbar-nav>
          <b-nav-item-dropdown id="menu-bar" xact exact-active-class="active">
            <template slot="button-content">
              <font-awesome-icon
                :icon="['fas', 'clipboard-list']"
              />&nbsp;จัดการโครงการ
            </template>
            <b-dropdown-item href="/manageprojectcenter">จัดการโครงการ{{user.depart_name}}</b-dropdown-item>
            <b-dropdown-item href="/managemainprojectbranch">จัดการโครงการของสาขา</b-dropdown-item>
          </b-nav-item-dropdown>
          <!-- <b-nav-item id="menu-bar" to="/manageprojectcenter" exact exact-active-class="active"
            ><font-awesome-icon
              :icon="['fas', 'clipboard-list']"
            />&nbsp;จัดการโครงการ</b-nav-item
          > -->
          <b-nav-item id="menu-bar" to="/summarycenter" exact exact-active-class="active"
            ><font-awesome-icon
              :icon="['fas', 'chart-bar']"
            />&nbsp;สรุปงบประมาณ</b-nav-item
          >
          <b-nav-item id="menu-bar" to="/historycenter" exact exact-active-class="active"
            ><font-awesome-icon
              :icon="['fas', 'history']"
            />&nbsp;ประวัติการแก้ไข</b-nav-item
          >
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <template #button-content>
              <div id="user-info">
                <span id="username">{{ user.email }}</span>
                <br />
                <span id="user-depart">{{user.depart_name}}</span>
                <br />
                <div id="status">
                  <span><font-awesome-icon :icon="['fas', 'check-circle']"/>&nbsp;{{user.permission}}</span>
                </div>
              </div>
            </template>
            <b-dropdown-item @click="logout()">ออกจากระบบ</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>

// import axios from 'axios'
// import {mapGetters} from 'vuex'
// import UserDataservice from "../services/user.datasevice.js";
export default {
  name: "CenterHeader",
  data() {
    return {
      user : this.$store.state.user,
      
    }
  },

  // async created () {
  //   this.users = (await UserDataservice.Header().data)
  //   // this.$store.dispatch('users/getAll');
  // },
  methods: {
    logout() {
      // this.$store.dispatch('logout');
      // localStorage.removeItem("user");
      window.localStorage.removeItem('user');
      // window.localStorage.removeItem('vuex');
      // window.localStorage.removeItem('');
      window.sessionStorage.clear()
      this.$router.push('/login');
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

#logo-name {
  text-align: center;
  float: right;
  font-size: 14px;
  padding-left: 5px;

  #fullname {
    font-size: 12px;
    color: #817979;
  }
}

#user-depart {
  font-size: 14px;
}
#user-info {
  float: left;
  text-align: center;

  #status {
    color: #ffffff;
    border: 2px solid;
    border-radius: 25px;
    font-size: 12px;
    background: rgb(237, 118, 94);
    background: linear-gradient(
      90deg,
      rgba(237, 118, 94, 1) 7%,
      rgba(242, 185, 33, 1) 93%
    );
    font-weight: bold;
  }
}

#menu-bar {
  padding-right: 10px;
}

</style>
