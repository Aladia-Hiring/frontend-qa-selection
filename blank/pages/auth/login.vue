<template>
  <div class="background">
    <div class="surface">
      <div class="header-box">
        <img src="assets/images/aladia-logo.jpg" alt="Logo" class="aladia-logo" />
        <div>
          <h1>Welcome to Aladia</h1>
          <p class="info-text">Create or access your account from here</p>
        </div>
      </div>
      
      <div class="components-div">

        <div class="component-container">
          <label for="email" class="email-label">Enter your email</label>
          <input
            id="email"
            type="email"
            placeholder="Email Address"
            class="email-input"
          />
        </div>
  
        <div class="component-container">
        
        <button
          type="button"
          class="enter-button"
        >
          Enter
        </button>
      
        </div>
  
        <div class="component-container">
          <button class="link-btns">
            <div class="img-text-cont">

              <img src="assets/images/google.jpeg" alt="Google" class="symbol-imgs" />
              Continue with Google
            </div>
        </button>
        </div>
  
        <div class="component-container">
          <button class="link-btns">
            <div class="img-text-cont">
              <img src="assets/images/facebook.png" alt="facebook" class="symbol-imgs" />
              Continue with facebook
            </div>
        </button>
        </div>

        <div class="component-container">
          <button class="link-btns">
            <div class="img-text-cont">
              <img src="assets/images/apple.png" alt="apple" class="symbol-imgs"  />
              Continue with apple
            </div>
        </button>
        </div>
        <a href="" class="terms">Terms & conditions</a>
      </div>
      
    </div>
  </div>
</template>


<script setup>

</script>

<style lang="css" scoped>
  h2 {
    color: blue;
  }
  h1{
    font-size: 0.85rem; /* text-xl */
    color: white; /* text-white */
  }
  .background {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background-color: #1a202c; /* bg-gray-900 */
  }
  .surface {
    display: flex;
    flex-direction: column;
    background-color: black;
    opacity: 0.75;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
    width: 100%;
    max-width: 20rem;
    padding-top: 4rem;
  }
  .aladia-logo {
      margin: auto;
      margin-bottom: 1rem;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
  }
  .info-text {
      font-size: 0.75rem; /* text-sm */
      color: #cbd5e0; /* text-gray-400 */
  }
  .header-box {
    display: flex;
    gap: 4rem;
    align-items: center;
    margin-bottom: 1rem;
    border: #626364 1px solid ;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;

  }

  .components-div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }
  .component-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: transparent
  }

  .email-label {
    color: white;
    font-weight: 400;
    padding: 1rem 0;
    
  }
  .email-input {
      width: 80%;
      padding: 0.5rem 1rem;
      background-color: #ffffff; 
      color: #37393a;
      border-radius: 0.25rem;
      border: none;
      outline: none;
      &:focus {
        border-color: #a3c5c1; /* focus:ring-yellow-500 */
        box-shadow: 0 0 0 2px #a3c5c1;
      }
    }

    .enter-button {
      width: 90%;
      padding: 0.5rem 1rem;
      background: black;
      color: white;
      font-weight: 400;
      font-size: medium;
      border: 1px gray solid;
      border-radius: 0.25rem;
      transition: background-color 0.3s;
      cursor: pointer;
      margin: 0.75rem 0;
    }
    .enter-button:hover {
      background-color: #4a5568;
    }

    .symbol-imgs{
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
    }

    .link-btns{
      width: 90%;
      background-color: black;
      border: 1px solid rgb(78, 77, 77);
      border-radius: 0.35rem;
      color: white;
      display: flex;
      gap: 1rem;
      align-items: center;
      padding: 0.25rem 3rem ;
      cursor: pointer;
    }

    .img-text-cont{
      display: flex;
      align-items: center;
      gap: 1rem;
      justify-content: center;
    }

    a{
      text-decoration: none;
      color: rgb(126, 122, 122);
      font-size: small;
      margin-top: 1rem;
    }

</style>

  