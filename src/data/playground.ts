export const css = `.box {
    @apply
      py-8 px-8 inline-flex mx-auto
      bg-white dark:bg-gray-400 dark:bg-opacity-10
      rounded-xl shadow-md space-y-2;
  }
  .btn {
    @apply
      px-4 py-1 text-sm text-purple-600 font-semibold
      rounded-full border border-purple-200 dark:border-purple-800
      hover:text-white hover:bg-purple-600 hover:border-transparent
      focus:outline-none focus:ring-2 ring-purple-600 ring-opacity-40;
  }
  `

export const html = `
  <div class="flex align-items-center justify-content-center">
      <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
          <div class="text-center mb-5">
              <img src="/logo.svg" alt="Image" height="50" class="mb-3">
              <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
              <span class="text-600 font-medium line-height-3">Don't have an account?</span>
              <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>
          </div>
  
          <div>
              <label for="email1" class="block text-900 font-medium mb-2">Email</label>
              <InputText id="email1" type="text" class="w-full mb-3" />
  
              <label for="password1" class="block text-900 font-medium mb-2">Password</label>
              <InputText id="password1" type="password" class="w-full mb-3" />
  
              <div class="flex align-items-center justify-content-between mb-6">
                  <div class="flex align-items-center">
                      <Checkbox id="rememberme" :binary="true" class="mr-2"></Checkbox>
                      <label for="rememberme">Remember me</label>
                  </div>
                  <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot your password?</a>
              </div>
  
              <Button label="Sign In" icon="pi pi-user" class="w-full"></Button>
          </div>
      </div>
  </div>`
