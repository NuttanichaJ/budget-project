<template>
  <div id="adminheader">
    <b-navbar toggleable="sm" type="light" variant="light">
        <b-navbar-brand to="/admin">
          <img id="img" src="@/assets/en-logo.png" />
          <div id="logo-name">
            <span>EN KKU</span>
            <br />
            <span id="fullname">Engineering KKU</span>
          </div>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item id="menu-bar" to="/adminmanagement" exact exact-active-class="active"
              ><font-awesome-icon
              :icon="['fas', 'user']"
              />&nbsp;จัดการสมาชิก</b-nav-item
            >
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <div id="admin-info">
                <!-- <span id="adminname">ADMIN's Name</span> -->
                 <span id="adminname">{{ user.email }}</span>
                <br />
                <span id="user-depart">{{user.depart_name}}</span>
                <br />
                <div id="status">
                  <span><font-awesome-icon :icon="['fas', 'check-circle']"/>&nbsp;{{user.depart_name}}</span>
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
export default {
  name: 'Adminheader',
  components: {},
  data() {
    return {
      user : this.$store.state.user,
    }
  },
  methods: {
    logout() {
      // this.$store.dispatch('logout');
      // localStorage.removeItem("user");
      window.localStorage.removeItem('user');
      // window.localStorage.removeItem('vuex');
      // window.localStorage.removeItem('');
      window.sessionStorage.clear()
      this.$router.push('/login');
    }
  },
}
</script>


<style lang="scss" scoped>

#img {
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

#admin-info {
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
      rgb(108, 195, 245) 7%,
      rgb(206, 56, 243) 93%
    );
    font-weight: bold;
  }
}

#menu-bar {
  padding-right: 10px;
}

</style>
