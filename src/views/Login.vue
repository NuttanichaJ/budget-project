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
                            <!-- <b-form-group >
                                <label for="input-mail">E-mail</label>
                                <b-form-input id="input-mail" v-model="mail" type="email" 
                                    placeholder="Enter your email"></b-form-input>
                                <label for="input-pass" class="mt-2">Password</label>
                                <b-form-input id="input-pass" v-model="password" type="password" placeholder="Enter your password"></b-form-input>
                                <b-button block pill class="mt-3" type="submit"><font-awesome-icon icon="sign-in-alt" />&nbsp;&nbsp;</b-button>                                                               
                                <a class="" href="">forget password</a>
                            </b-form-group> -->
                            <GoogleLogin 
                                :params="params" 
                                :onSuccess="onSuccess" 
                                :onFailure="onFailure"
                                class="btn-login"
                                >Login Your Account</GoogleLogin>

                            </b-card-body>
                        </b-col>
                    </b-row>
                </b-card>
            </div>
        </b-container>
    </div>
  
</template>
<script src="https://apis.google.com/js/platform.js?onload=init" async defer></script>
<script>
import GoogleLogin from 'vue-google-login';
export default {
    name: "login",
    components: {
        GoogleLogin,
        
    },
    data() {
        return {
            // client_id is the only required property but you can add several more params, full list down bellow on the Auth api section
            params: {
                client_id:'739770244137-b1d92li2tcs044jsj49ck7qmvbnchr9c.apps.googleusercontent.com',
                
            
            },
            renderParams: {
                width: 250,
                height: 50,                
            },
            
            methods: {
                onSuccess(googleUser) {
                    console.log(googleUser);
        
                    // This only gets the user information: id, name, imageUrl and email
                    console.log(googleUser.getBasicProfile());
                }
                
            },            
            
        }       
        
    },    

}


</script>

<style lang="scss">
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
