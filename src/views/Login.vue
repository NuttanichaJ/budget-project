<template>
    <div id="login">
        <b-container>
            <div class="mt-4 mt-5" align-self="center">
                <b-card border-variant="dark" class="bgcard">
                    <b-row align-v="center">
                        <b-col md="6">
                            <img src="@/assets/img-enkku.jpg" alt="EN-KKU" class="rounded-0 imgen" width="100">
                        </b-col>
                        <b-col md="6">
                            <b-card-body>
                                <h4>Login to your account</h4>
                                <b-form @submit.prevent>
                                    <!-- <b-form-group >
                                        <label for="input-mail">E-mail</label>
                                        <b-form-input id="input-mail" v-model="email" type="email"
                                            placeholder="Enter your email"></b-form-input>

                                        <label for="input-pass" class="mt-2">Password</label>
                                        <b-form-input id="input-pass" v-model="password" type="password" 
                                            placeholder="Enter your password"></b-form-input>
                                        <b-button block pill class="mt-3" type="submit"><font-awesome-icon icon="sign-in-alt" />&nbsp;&nbsp;</b-button>
                                        <a class="" href="">forget password</a>
                                    </b-form-group> -->
                                    <GoogleLogin
                                        :params="params"
                                        :onSuccess="onSuccess"
                                        class="btn-login">
                                        Login with Google
                                    </GoogleLogin>
                                </b-form>
                              

                            </b-card-body>
                        </b-col>
                    </b-row>
                </b-card>
            </div>
        </b-container>
    </div>
  
</template>
<script src="https://apis.google.com/js/api.js?onload=onGoogleApiLoad" defer></script>
<script>
// import axios from 'axios';
import GoogleLogin from 'vue-google-login';

// import User from '../models/user.model';
// import UserService from "../services/user.sevice"
// import DepartmentDataservice from "../services/department.dataservice"
import UserDataservice from "../services/user.dataservice.js";
export default {
    name: "login",
    components: {
        GoogleLogin,
    },
    data() {
        return {
            // client_id google api
            params: {
                client_id:'739770244137-b1d92li2tcs044jsj49ck7qmvbnchr9c.apps.googleusercontent.com',
            },
           
        }
    },
    
    methods: {
        onSuccess(googleUser) {
            
            console.log("ID: " + googleUser.getBasicProfile().getId()); // Don't send this directly to your server!
            console.log('Full Name: ' + googleUser.getBasicProfile().getName());
            console.log('Given Name: ' + googleUser.getBasicProfile().getGivenName());
            console.log('Family Name: ' + googleUser.getBasicProfile().getFamilyName());
            console.log("Email: " + googleUser.getBasicProfile().getEmail());
            // var userInfo = {
            //     name: googleUser.Rs.Te,
            //     fName: googleUser.Rs.BT,
            //     lName: googleUser.Rs.xR,
            //     email: googleUser.Rs.At,
            //     token: googleUser.tc.access_token
            // }
            var userInfo = {
                name: googleUser.getBasicProfile().getName(),
                fName: googleUser.getBasicProfile().getGivenName(),
                lName: googleUser.getBasicProfile().getFamilyName(),
                email: googleUser.getBasicProfile().getEmail(),
                token: googleUser.tc.access_token
            }


        // console.log(userInfo.token)
        // localStorage.setItem('user', JSON.stringify(userInfo))
        // this.$store.commit("setUser", userInfo.token)
            // console.log(userInfo.token)
            // localStorage.setItem('user', JSON.stringify(userInfo))
            // this.$store.commit("setUser", userInfo.token)



        //     var departments = {D_Name: 'Admin'}
        //     var departments2 = {D_Name: 'ผู้บริหาร'}
        //     DepartmentDataservice.create(departments)
        //     DepartmentDataservice.create(departments2)

        // var nurse = {User_FName: 'Aoy1', Email: 'm.thanwarat@kkumail.com', D_ID: 3, Permission: 'admin'}
        // var nurse2 = {User_FName: 'Aoy2', Email: 'mk.thanwarat@gmail.com', D_ID: 4, Permission: 'ผู้บริหาร'}
        // UserDataservice.create(nurse)
        // UserDataservice.create(nurse2)

            UserDataservice.getAll() 
                .then(response => {
                    // console.log(response.data)
                    var i;
                    for (i in response.data) {
                        if(userInfo.email === response.data[i].Email) {
                            // console.log(response.data)
                            // var email = response.data[i].Email;
                            // var permission = response.data[i].Permission
                            var userID = {
                                email: response.data[i].Email,
                                fName : response.data[i].User_FName,
                                userid: response.data[i].User_ID,
                                depart_id: response.data[i].D_ID,
                                permission: response.data[i].Permission,
                                depart_name: response.data[i].departments.D_Name
                            }
                            // console.log("permission = ", userID.permission)
                            localStorage.setItem('user', JSON.stringify(userID))
                            this.$store.commit("setUser", userID)

                            // console.log("D_ID",depart_id)
                            // localStorage.setItem("setUserInfo", response.data)
                            // this.$router.push(`/user/${userID.permission}`)
                            if(userID.permission == "admin") {
                                this.$router.push('/adminmanagement')
                            }
                            else if(userID.permission == "สาขาวิชา") {
                                this.$router.push('/home')
                            }
                        
                            else if(userID.permission == "ส่วนกลาง") {
                                this.$router.push('/homecenter')
                            }
                            else if(userID.permission == "ผู้บริหาร") {
                                this.$router.push('/allsummaryDean')
                            }
                            // else{
                            //     alert("not define")
                            // }
                        }
                    }
                })
        },
    },
    
}
</script>

<style lang="scss" scope>
.imgen {
  width: 100%;
  height: 100%;
}
.bgcard{
    background-color: #BEBEBE;
}
.btn-login{
    display: inline-block;
    background-color: #8d8c8c;
    text-align: center;
    font-size: 20px;
    margin: 4px 2px;
    border-radius: 8px;
    cursor: pointer;
    width: 50%;
    border: 2px solid black;
}
.btn-login:hover {background-color: #6d6b6b}

</style>