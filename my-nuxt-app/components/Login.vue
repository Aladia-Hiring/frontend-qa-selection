<template>
    <div v-if="currentView === 'login'" class="login-form flex flex-col items-center justify-center min-h-screen bg-black">
        <!-- Box container -->
        <div class="w-[420px] h-[640px] bg-gradient-to-r from-zinc-800 via-slate-50 to-zinc-900 p-0.5 rounded-lg shadow-lg">
            <div class="w-full h-full bg-black rounded-lg p-5">
            <!-- Image and text section -->
            <div class="flex mb-5 p-6 border border-custom-gray mt-10 custom-rounded"
            style="background: linear-gradient(25deg, rgba(255, 255, 255, 0) 9.55%, rgba(255, 255, 255, 0) 30.28%, rgba(246, 246, 246, 0.1) 49.58%, rgba(255, 255, 255, 0) 59.02%, rgba(255, 255, 255, 0) 67.97%, rgba(246, 246, 246, 0.1) 74.56%, rgba(255, 255, 255, 0) 100%);"
            >
                <img src="../assets/header.png" alt="Random Image" class="w-20 h-20 object-cover pl-3" />
                <div class="text-white ml-24"> 
                <h2 class="text-base font-semibold text-sm mb-2">Welcome to Aladia,</h2> 
                <p class="text-custom-gray text-sm">Create or access your account from here</p>
                </div>
            </div>

  
            <!-- Email input section -->
            <h4 class="mb-5 text-white text-center text-sm email">{{ email }}</h4>
            <div class="relative mb-5 m-4 mt-1">
                <svg
                    fill="#5c5959"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="18px"
                    height="18px"
                    viewBox="0 0 528.633 528.632"
                    xml:space="preserve"
                    class="absolute left-3 top-3"
                    >
                    <g>
                        <path d="M264.317,326.235c-13.739,0-26.659-5.349-36.371-15.067L0.692,83.914v356.863c0,16.897,13.703,30.601,30.6,30.601h466.044c16.896,0,30.6-13.703,30.6-30.601V83.92L300.693,311.167C290.977,320.886,278.057,326.235,264.317,326.235z"></path>
                        <path d="M0.692,57.255H0l0.698,0.697l240.229,240.234c6.463,6.457,14.927,9.688,23.391,9.688c8.464,0,16.933-3.231,23.39-9.688L527.936,57.953l0.697-0.697h-0.697H0.692L0.692,57.255z"></path>
                    </g>
                </svg>
                <input
                type="email"
                name="email"
                ref="emailInput"
                placeholder="Email Address"
                class="w-full p-2 email-field pl-10 border border-gray-600 rounded bg-white text-black focus:outline-none focus:border-blue-500"
                />

                <div v-if="isEmailInvalid" class="text-red-500 text-xs" >
                    Invalid Email
                </div>
    
                <!-- Enter button -->
                <button class="w-full button mt-5 text-white py-2 rounded hover:bg-blue-500 mb-3"
                style="background: linear-gradient(25deg, rgba(255, 255, 255, 0) 9.55%, rgba(255, 255, 255, 0) 30.28%, rgba(255, 246, 246, 0.1) 41.58%, rgba(255, 255, 255, 0) 59.02%, rgba(255, 255, 255, 0) 67.97%, rgba(255, 255, 255, 0.4) 74.56%, rgba(255, 255, 255, 0) 100%);"
                @click="goToNewPage">
                Enter
                </button>
    
                <!-- Or section -->
                <div class="flex items-center mb-3">
                    <div class="flex-1 h-px bg-gradient-to-r from-transparent to-white"></div>
                    <span class="mx-2 text-white p-2">Or</span>
                    <div class="flex-1 h-px bg-gradient-to-l from-transparent to-white"></div>
                </div>
    
                <!-- Social login buttons -->
                <div class="flex flex-col space-y-4">
                    <button class="w-full bg-black border border-custom-gray text-white text-sm py-2 rounded hover:bg-gray-800 text-left flex items-center justify-start">
                        <svg class="ml-20" width="20px" height="20px" viewBox="-0.5 0 48 48" fill="#000000">
                            <path d="M9.827 24c0-1.524.253-2.986.705-4.356L2.623 13.604C1.082 16.734.214 20.26.214 24c0 3.737.868 7.261 2.407 10.388l7.905-6.051c-.448-1.364-.698-2.82-.698-4.337z" fill="#FBBC05"></path>
                            <path d="M23.714 10.133c3.311 0 6.302 1.173 8.652 3.093l6.836-6.827C35.036 2.773 29.695.533 23.714.533 14.427.533 6.445 5.844 2.623 13.604l7.909 6.04c1.822-5.532 7.017-9.511 13.182-9.511z" fill="#EB4335"></path>
                            <path d="M23.714 37.867c-6.165 0-11.36-3.979-13.182-9.511l-7.909 6.038c3.822 7.761 11.804 13.072 21.091 13.072 5.732 0 11.204-2.035 15.311-5.849l-7.507-5.804c-2.118 1.334-4.785 2.052-7.804 2.052z" fill="#34A853"></path>
                            <path d="M46.145 24c0-1.387-.214-2.88-.534-4.267H23.714v9.067h12.604c-.63 3.091-2.345 5.468-4.8 7.014l7.507 5.804c4.314-4.004 7.12-9.969 7.12-16.614z" fill="#4285F4"></path>
                        </svg>
                    <span class="ml-4">Continue with Google</span>
                    </button> 
                    <button class="w-full bg-black border border-custom-gray text-white text-sm py-2 rounded hover:bg-gray-800 text-left flex items-center justify-start transition-colors duration-300">
                        <img class="w-5 h-5 object-cover ml-20" src="../assets/fb.png">
                        <span class="ml-4">Continue with Facebook</span>
                    </button>

                    <button class="w-full bg-black border border-custom-gray text-white text-sm py-2 rounded hover:bg-gray-800 text-left flex items-center justify-start">
                        <svg class="ml-20" width="20px" height="20px" viewBox="-1.5 0 20 20" fill="#000000">
                                <g id="Dribbble-Light-Preview" transform="translate(-102.000000, -7439.000000)" fill="#ffffff">
                                    <g id="icons" transform="translate(56.000000, 160.000000)">
                                    <path d="M57.571 7282.193c.729-.845 1.22-2.022 1.086-3.193-.95.04-2.221.671-2.974 1.515-.677.749-1.267 1.946-1.108 3.094 1.172.087 2.368-.57 3.007-1.416zm2.628 7.432c.029 3.027 2.77 4.034 2.8 4.047-.022.071-.438 1.435-1.444 2.845-.87 1.218-1.773 2.431-3.196 2.457-1.398.025-1.848-.794-3.447-.794-1.598 0-2.098.768-3.421.819-1.373.049-2.42-1.318-3.297-2.532-1.794-2.483-3.164-7.017-1.324-10.077.914-1.519 2.547-2.482 4.321-2.506 1.348-.025 2.621.869 3.445.869.824 0 2.371-1.075 3.997-.917.681.027 2.592.263 3.819 1.984-.099.059-2.28 1.275-2.256 3.805z" id="apple-[#173]"></path>
                                    </g>
                                </g>
                            </svg>
                        <span class="ml-4">Continue with Apple</span>
                    </button>
                </div>
                <div class="href=# cursor-pointer text-white text-center mt-7 text-sm font-semibold text-custom-gray">Terms & conditions</div>
            </div>
        </div>
        </div>
    </div>

    <div v-else>

        <div class="next-page flex flex-col items-center justify-center min-h-screen bg-black">
            <!-- Box container -->
            <div class="w-[420px] h-[640px] bg-gradient-to-r from-zinc-800 via-slate-50 to-zinc-900 p-0.5 rounded-lg shadow-lg">
                <div class="w-full h-full bg-black rounded-lg p-5">
                    <div class="text-white text-center cursor-pointer" @click="goToLogin">Back to Login</div>
                    <!-- Image and text section -->
                    <div class="flex h-[100px] mb-5 p-6 border border-custom-gray mt-3 custom-rounded" style="background: linear-gradient(25deg, rgba(255, 255, 255, 0) 9.55%, rgba(255, 255, 255, 0) 30.28%, rgba(246, 246, 246, 0.1) 49.58%, rgba(255, 255, 255, 0) 59.02%, rgba(255, 255, 255, 0) 67.97%, rgba(246, 246, 246, 0.1) 74.56%, rgba(255, 255, 255, 0) 100%);">
                        <img src="../assets/header.png" alt="Random Image" class="w-24 h-24 object-cover pl-3 -mt-5" />
                        <div class="text-white ml-4 mr-16 -mt-5"> 
                            <h2 class="text-base font-semibold text-sm mb-2">Nice to meet you</h2> 
                            <p class="text-custom-gray text-sm">Upload a profile picture
                                and complete your
                                presentation</p>
                        </div>
                    </div>
                    <!-- Checkbox section -->
                    <div class="flex justify-center items-center mt-4">
                        <input type="checkbox" id="accept" v-model="accepted" class="mr-2">
                        <label for="accept" class="text-white text-sm text-custom-gray">I accept <a class="text-white underline">Terms & Conditions</a> and <a class="text-white underline">Privacy Policy</a></label>
                    </div>

                    <div>
                        <h2 class="text-center m-3 text-white text-xs">
                            Enter your details
                            <input
                                type="name"
                                placeholder="Name"
                                class="w-full h-[40px] p-2 pl-10 mb-4 mt-4 border border-gray-600 rounded bg-white text-black focus:outline-none focus:border-blue-500"
                            />
                            <input
                                type="surname"
                                placeholder="Surname"
                                class="w-full h-[40px] p-2 pl-10 mb-4 border border-gray-600 rounded bg-white text-black focus:outline-none focus:border-blue-500"
                            />
                            <input
                                type="email"
                                :value="email"
                                :disabled = true
                                placeholder="Email Address"
                                class="w-full h-[40px] p-2 pl-10 mb-4 border border-gray-600 rounded bg-white text-black focus:outline-none focus:border-blue-500"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                class="w-full h-[40px] p-2 pl-10 mb-4 border border-gray-600 rounded bg-white text-black focus:outline-none focus:border-blue-500"
                            />
                            <input
                                type="confirm-password"
                                placeholder="Confirm Password"
                                class="w-full h-[40px] p-2 pl-10 mb-4 border border-gray-600 rounded bg-white text-black focus:outline-none focus:border-blue-500"
                            />
                            <button class="w-full text-white py-2 rounded hover:bg-blue-500 mb-3" style="background: linear-gradient(25deg, rgba(255, 255, 255, 0) 9.55%, rgba(255, 255, 255, 0) 30.28%, rgba(255, 246, 246, 0.1) 41.58%, rgba(255, 255, 255, 0) 59.02%, rgba(255, 255, 255, 0) 67.97%, rgba(255, 255, 255, 0.4) 74.56%, rgba(255, 255, 255, 0) 100%);">
                                Enter
                            </button>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
    export default {
        data(){
            return {
                isEmailInvalid: false,
                currentView: 'login'
        };
        },
        methods: {
            validateEmail(email) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailPattern.test(email);
            },
            goToNewPage() {
                const email = this.$refs.emailInput.value;
                this.isEmailInvalid = !this.validateEmail(email);
                if (!this.isEmailInvalid) {
                    this.currentView = 'newPage';
             }
            },
            goToLogin(){
                this.currentView = 'login';
            }
        },
        name: "Login",
        props: {
            email: String
        }
    }
</script>

<style scoped>

    .custom-rounded {
        border-radius: 3px; 
    }
    .border-custom-gray {
        border-color: #2e2e2e; 
    }
    .text-custom-gray {
        color: #909090; 
        font-weight: 600;
    }
</style>
  