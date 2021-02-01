<template>
    <div id="login">
        <b-container>
            <div class="mt-4 mt-5" align-self="center">
                <b-card border-variant="dark" class="bgcard">
                    <b-row align-v="center">
                        <b-col md="6">                            
                            <img src="@/assets/img-enkku.jpg" alt="EN-KKU" class="rounded-0" width="100">
                        </b-col>
                        <b-col md="6">
                            <b-card-body>
                                <h4>Login to your account</h4>
                            <b-form-group >
                                <label for="input-mail">E-mail</label>
                                <b-form-input id="input-mail" v-model="mail" type="email" 
                                    placeholder="Enter your email"></b-form-input>
                                <label for="input-pass" class="mt-2">Password</label>
                                <b-form-input id="input-pass" v-model="password" type="password" placeholder="Enter your password"></b-form-input>
                                <b-button block pill class="mt-3" type="submit"><font-awesome-icon icon="sign-in-alt" />&nbsp;&nbsp;Login</b-button>
                                <a class="" href="">forget password</a>
                            </b-form-group>

                            </b-card-body>
                        </b-col>
                    </b-row>
                </b-card>
            </div>
        </b-container>
    </div>
  
</template>

<script>
export default {
    name: "login",
    

}
</script>

<style lang="scss">
img {
  width: 100%;
  height: 100%;
  
}
.bgcard{
    background-color: #BEBEBE;
}

    
</style>
