<template>
      <div class="overflow-hidden">
          <v-app-bar fixed="top" dark dense height="100px" width="300rem" src="https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1464&q=80" >
          <v-app-bar-nav-icon class="black--text"></v-app-bar-nav-icon>
          <v-toolbar-title class="passport text-h6 black--text">Passport Registration App</v-toolbar-title>

          <v-spacer></v-spacer>
          <div class="routesCenter">
          <router-link to="/create-account" class="routes" >
                   <v-toolbar-title class="validations" > 
                             <v-btn>Vuelidate Validations</v-btn> 
                    </v-toolbar-title>
          </router-link>
          <router-link to="/custom-validations" class="routes">
                   <v-toolbar-title class="validations" > 
                             <v-btn>Custom Validations</v-btn> 
                    </v-toolbar-title>
          </router-link>
          <router-link to="/login-form" class="routes">
                    <v-toolbar-title class="validations" >
                            <v-btn>Login Form</v-btn>
                    </v-toolbar-title>
          </router-link>
          <router-link to="/post-details" class="routes">
                   <v-toolbar-title class="validations" > 
                             <v-btn>Post Details</v-btn> 
                    </v-toolbar-title>
          </router-link>
          </div>
         
          <v-spacer></v-spacer>

          <v-btn icon>
              <v-icon class=" white--text">mdi-heart</v-icon>
          </v-btn>

          <v-btn icon>
              <v-icon class=" white--text">mdi-magnify</v-icon>
          </v-btn>
          
          
          <template >
              <v-btn icon class="white--text">
                 <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
          </template>

          <!-- <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
          </v-list> -->
       

          </v-app-bar>
      </div>
</template>

<script>
export default {
    name:'NavbarComponent',
    data(){
        return{

        }
    }

}
</script>

<style scoped>
   
    .routes{
        text-decoration: none;
    }


    .validations{
        margin-left: 10px;
        margin-right: 10px;
        color: aliceblue;
        
    }

    .passport{
        font-weight: bold;
    }

    .routesCenter{
        display: flex;
        justify-content: center;
        margin-right: 10rem;
    }

    a{
        text-decoration: none;
    }

</style>