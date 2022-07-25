<template>
       <v-container class="form" >
              <v-row>
                  <v-col>
                       <div class="alert alert-success" v-if="isSuccess">Details Submitted Successfully</div>
                       <v-form ref="signUpForm" class="formNav" v-model="formValidity" @submit.prevent="submitForm">
                            <h1 class="text center">Vuelidate Validations Submit Form</h1>
                            <hr>
                            <!-- Title -->
                            <v-text-field label="Title" v-model.trim="title"  @blur="$v.title.$touch()" required placeholder="Enter your title" ></v-text-field>
                            <span v-if="!$v.title.required && $v.title.$dirty" class="alert alert-danger">Title is Required!</span>
                            <span v-if="!$v.title.minLength && $v.title.$dirty" class="alert alert-danger">Minimum {{$v.title.$params.minLength.min}} characters should required!</span>
                            <span v-if="!$v.title.maxLength && $v.title.$dirty" class="alert alert-danger">Characters should not exceed {{$v.title.$params.maxLength.max}} </span>
                            <!-- <span v-if="$v.title.minLength && $v.title.maxLength" class="alert alert-success">Strong Title!</span> -->

                            <!-- Firstname -->
                            <v-text-field label="Firstname" v-model.trim="firstName"  @blur="$v.firstName.$touch()" required placeholder="Enter your firstname" ></v-text-field>
                            <span v-if="!$v.firstName.required && $v.firstName.$dirty" class="alert alert-danger">Firstname is Required!</span>
                            <span v-if="!$v.firstName.minLength && $v.firstName.$dirty" class="alert alert-danger">Minimum {{$v.firstName.$params.minLength.min}} characters should required!</span>
                            <span v-if="!$v.firstName.maxLength && $v.firstName.$dirty" class="alert alert-danger">Characters should not exceed {{$v.firstName.$params.maxLength.max}} </span>
                            <!-- <span v-if="$v.firstName.minLength && $v.firstName.maxLength" class="text-success">Strong Title!</span> -->

                            <!-- Lastname -->
                            <v-text-field label="Lastname" v-model.trim="lastName"  @blur="$v.lastName.$touch()" required placeholder="Enter your lastname" ></v-text-field>
                            <span v-if="!$v.lastName.required && $v.lastName.$dirty" class="alert alert-danger">Lastname is Required!</span>
                            <span v-if="!$v.lastName.minLength && $v.lastName.$dirty" class="alert alert-danger">Minimum {{$v.lastName.$params.minLength.min}} characters should required!</span>
                            <span v-if="!$v.lastName.maxLength && $v.lastName.$dirty" class="alert alert-danger">Characters should not exceed {{$v.lastName.$params.maxLength.max}} </span>
                            <!-- <span v-if="$v.lastName.minLength && $v.lastName.maxLength" class="text-success">Strong Title!</span> -->

                            <!-- Email -->
                            <v-text-field label="Email" type="email" v-model.trim="email" @blur="$v.email.$touch()" required placeholder="Enter your Email" ></v-text-field>
                            <span v-if="!$v.email.required && $v.email.$dirty" class="alert alert-danger">Email is Required!</span>
                            <span v-if="!$v.email.minLength && $v.email.$dirty" class="alert alert-danger">Minimum {{$v.email.$params.minLength.min}} characters should required!</span>
                            <span v-if="!$v.email.maxLength && $v.email.$dirty" class="alert alert-danger">Characters should not exceed {{$v.email.$params.maxLength.max}} </span>
                            <!-- <span v-if="$v.email.minLength && $v.email.maxLength" class="text-success">Strong Title!</span> -->

                            <!-- Mobile Number -->
                            <v-text-field label="Mobile Number" type="number" v-model.trim="mobileNumber" @blur="$v.mobileNumber.$touch()" required placeholder="Enter your mobile number" ></v-text-field>
                            <span v-if="!$v.mobileNumber.required && $v.mobileNumber.$dirty" class="alert alert-danger">MobileNumber is Required!</span>
                            <span v-if="!$v.mobileNumber.minLength && $v.mobileNumber.$dirty" class="alert alert-danger">Minimum {{$v.mobileNumber.$params.minLength.min}} characters should required!</span>
                            <span v-if="!$v.mobileNumber.maxLength && $v.mobileNumber.$dirty" class="alert alert-danger">Characters should not exceed {{$v.mobileNumber.$params.maxLength.max}} </span>
                            <!-- <span v-if="$v.mobileNumber.minLength && $v.mobileNumber.maxLength" class="text-success">Strong Title!</span> -->

                            <!-- Organization -->
                            <v-text-field label="Organization" v-model.trim="organization" @blur="$v.organization.$touch()" required placeholder="Enter your organization" ></v-text-field>
                            <span v-if="!$v.organization.required && $v.organization.$dirty" class="alert alert-danger">Organization is Required!</span>
                            <span v-if="!$v.organization.minLength && $v.organization.$dirty" class="alert alert-danger">Minimum {{$v.organization.$params.minLength.min}} characters should required!</span>
                            <span v-if="!$v.organization.maxLength && $v.organization.$dirty" class="alert alert-danger">Characters should not exceed {{$v.organization.$params.maxLength.max}} </span>
                            <!-- <span v-if="$v.organization.minLength && $v.organization.maxLength" class="text-success">Strong Title!</span> --> 

                            <!-- Designation -->
                            <v-text-field label="Designation" v-model.trim="designation" @blur="$v.designation.$touch()" required placeholder="Enter your designation" ></v-text-field>
                            <span v-if="!$v.designation.required && $v.designation.$dirty" class="alert alert-danger">Designation is Required!</span>
                            <span v-if="!$v.designation.minLength && $v.designation.$dirty" class="alert alert-danger">Minimum {{$v.designation.$params.minLength.min}} characters should required!</span>
                            <span v-if="!$v.designation.maxLength && $v.designation.$dirty" class="alert alert-danger">Characters should not exceed {{$v.designation.$params.maxLength.max}} </span>
                            <!-- <span v-if="$v.designation.minLength && $v.designation.maxLength" class="text-success">Strong Title!</span> --> 

                            <!-- Address -->
                            <v-textarea label="Address" v-model.trim="address" @blur="$v.address.$touch()" counter="50" required placeholder="Enter your current address" ></v-textarea>
                            <span v-if="!$v.address.required && $v.address.$dirty" class="alert alert-danger">Address is Required!</span>
                            <span v-if="!$v.address.minLength && $v.address.$dirty" class="alert alert-danger">Minimum {{$v.address.$params.minLength.min}} characters should required!</span>
                            <span v-if="!$v.address.maxLength && $v.address.$dirty" class="alert alert-danger">Characters should not exceed {{$v.address.$params.maxLength.max}} </span>
                            <!-- <span v-if="$v.firstName.minLength && $v.firstName.maxLength" class="text-success">Strong Title!</span> -->

                            <!-- Password -->
                            <v-text-field label="Password" v-model.trim="password" @blur="$v.password.$touch()" counter="10" required placeholder="Enter password" ></v-text-field>
                            <span v-if="!$v.password.required && $v.password.$dirty" class="alert alert-danger">Password is Required!</span>
                            <span v-if="(!$v.password.minLength || !$v.password.maxLength) && $v.password.$dirty" class="alert alert-danger">Password must be between {{$v.password.$params.minLength.min}} to {{$v.password.$params.maxLength.max}} characters!</span>
                            <!-- <span v-if="$v.firstName.minLength && $v.firstName.maxLength" class="text-success">Strong Title!</span> -->

                            <!-- Confirm Password -->
                            <v-text-field label="Confirm Password" v-model.trim="confirmPassword" @blur="$v.confirmPassword.$touch()" counter="10" required placeholder="Enter confirm password" ></v-text-field>
                            <span v-if="!$v.confirmPassword.sameAsPassword.required && $v.confirmPassword.sameAsPassword.$dirty" class="alert alert-danger">Confirm Password is Required!</span>
                            <span v-if="!$v.confirmPassword.sameAsPassword" class="alert alert-danger">Password and Confirm Password should match</span>
                            
                           <!-- age -->
                            <v-text-field type="number" v-model="age" placeholder="Age 10-70" @blur="$v.age.$touch()" required></v-text-field>
                            <span v-if="!$v.age.required && $v.age.$dirty" class="alert alert-danger">This field is Required!</span>
                            <span v-if="!$v.age.between && $v.age.$dirty" class="alert alert-danger" >Age should be in between 10 to 70 </span>   
                            

                            <!-- Gender -->
                            <v-radio-group v-model="gender" label="Select Gender" row @blur="$v.gender.$touch()" required >
                              <v-radio label="Male" value="male"></v-radio>
                              <v-radio label="Female" value="female"></v-radio>
                            </v-radio-group>  
                            <span v-if="!$v.gender.required && $v.gender.$dirty" class="alert alert-danger">This field is Required!</span>             
                           
                            <!-- Select Browsers -->
                            <v-autocomplete label="Which browser you use?" v-model="browers" :items="browers" @blur="$v.browers.$touch()" required ></v-autocomplete>
                            <span v-if="!$v.browers.required && $v.browers.$dirty" class="alert alert-danger">This field is Required!</span>
                            
                            <!-- Attach Profile -->
                            <v-file-input  label="Attach Profile picture" v-model="images" @blur="$v.images.$touch()" required  ></v-file-input>
                            <span v-if="!$v.images.required && $v.images.$dirty" class="alert alert-danger">This field is Required!</span>
                            
                            <!-- Date of Birth -->
                            <v-text-field  label="DOB" v-model="dob" readonly prepend-icon="mdi-calendar"></v-text-field>
                            
                            <v-date-picker type="date" class="datePicker" v-model="dob" @blur="$v.dob.$touch()" required  ></v-date-picker>
                            <span v-if="!$v.dob.required && $v.dob.$dirty" class="alert alert-danger" >This field is Required!</span>

                            <v-checkbox label="Agree to terms & conditions" v-model="agreeToTerms" @blur="$v.agreeToTerms.$touch()" required ></v-checkbox>
                            <span v-if="!$v.agreeToTerms.required && $v.agreeToTerms.$dirty" class="alert alert-danger">You should accept Terms and conditions for creating an account</span>
                            <hr>
                            <!-- Submit Button -->
                            <div class="button">
                           <v-btn  color="error" @click="reset">Reset</v-btn>
                           
                           <v-btn class="mr-4" type="submit" color="primary" :disabled="!formValidity"  >Submit</v-btn>
                            <!-- Validate Form -->
                            <!-- <v-btn color="success" class="mr-4" @click="validateForm">Validate Form</v-btn> -->
                            <!-- Reset Validation -->
                            <!-- <v-btn class="mr-4" color="warning" @click="resetValidation" >Reset Validation</v-btn>  -->
                            <!-- Reset -->
                            
                           
                            </div>
                       </v-form>
                  </v-col>
              </v-row>
       </v-container>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { required, minLength, maxLength, alpha, email, sameAs, between } from 'vuelidate/lib/validators'
Vue.use(VueAxios, axios);

export default {
    
    name:'FormValidations',
    data(){
        return{
             formValidity:false,
             agreeToTerms:false,            
             title:null,
             email:null,
             dob:null,
             firstName:null,
             lastName:null,
             mobileNumber:null,
             organization:null,
             designation:null,
             address:null,
             password:"",
             confirmPassword:"",
             age:null,
             browers:['Chrome','Firefox','Safari','Edge','Brave'],
             images:null,
             gender:null,
             dob1:null,
             isSuccess:false,

        }
    },
    validations:{
           title:{
              required,
              alpha,
              minLength:minLength(4),
              maxLength:maxLength(10),
           },
           firstName:{
              required,
              alpha,
              minLength:minLength(4),
              maxLength:maxLength(10),
           },
           lastName:{
              required,
              alpha,
              minLength:minLength(4),
              maxLength:maxLength(10),
           },
           email:{
              required,
              email,
              minLength:minLength(4),
              maxLength:maxLength(20)
           },
           mobileNumber:{
              required,
              minLength:minLength(4),
              maxLength:maxLength(20)
           },
           organization:{
              required,
              minLength:minLength(4),
              maxLength:maxLength(20)
           },
           designation:{
              required,
              minLength:minLength(4),
              maxLength:maxLength(20)
           },
           address:{
              required,
              minLength:minLength(4),
              maxLength:maxLength(50)
           },
           password:{
              required,
              minLength:minLength(4),
              maxLength:maxLength(10),              
           },
           confirmPassword:{
                required,
                minLength:minLength(4),
                sameAsPassword: sameAs('password'),
                 
           },
           age:{
               required,
               between:between(10,70)
               
           },
           browers:{
                required
           },
           images:{
                required
           },
           dob:{
                required
           },
           gender:{
               required
           },
           agreeToTerms:{
               required
           }
      },
    methods:{
        submitForm(){
                alert('Form Submitted Successfully')
                console.log(`The submitted Form Data is ${this.title} ${this.firstName} ${this.lastName} ${this.email} ${this.mobileNumber} ${this.organization} ${this.designation} ${this.address} ${this.password} ${this.confirmPassword} ${this.dob} ${this.age} ${this.browers} ${this.gender} ${this.images} `)
                
                axios.post(`https://passport-registration-app-default-rtdb.firebaseio.com/posts.json`,{ 
                                                                                           Title:this.title,
                                                                                           Firstname:this.firstName,
                                                                                           Lastname:this.lastName,
                                                                                           EMail: this.email,
                                                                                           Password: this.password,
                                                                                           ConfirmPassword: this.confirmPassword,
                                                                                           MobileNumber:this.mobileNumber,
                                                                                           Organization:this.organization,
                                                                                           Designation:this.designation,
                                                                                           Address:this.address,
                                                                                           Dob:this.dob,
                                                                                           Gender:this.gender,
                                                                                           Age:this.age,
                                                                                           Browers:this.browers,
                                                                                          // Images:this.images,

                                                                                        })
            .then((res)=>{
                     this.isSuccess = true;
                     console.log('Details Submitted to Firbase successfully',res);
                     this.$emit('postCreated');
                     this.$router.push(`/post-details`)
            }).catch((err)=>{
                     console.log('Error while Posting Data to Firebase',err);
            })
        },
         resetValidation(){
            this.$refs.signUpForm.resetValidation()
         },
         reset(){
            this.$refs.signUpForm.reset()  
         },
         validateForm(){
            this.$refs.signUpForm.validate()
         },
         created(){
          this.submitForm();
         }
    },
 

}
</script>

<style scoped>
  .form{
     max-width: 600px;
     border: 1px solid grey;
     border-radius: 5px;
     box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
     background-color: white;
     margin-top: 6rem;
  }

  .datePicker{
     max-width: 300px;
  }

  .button{
   display: flex;
   justify-content: space-between;
  }

  /* .formNav{
   margin-top: 10rem;
  } */


</style>