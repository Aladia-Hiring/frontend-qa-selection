<template>
  <div>
    <div data-layout="default">
      <div
        class="fixed left-0 right-0 top-0 z-[60] flex h-14 w-full items-center justify-between gap-2 bg-[#060606] px-4 py-2"
      >
        <div class="flex items-center gap-4 md:pl-20"></div>
        <div
          class="pointer-events-none absolute inset-0 z-10 flex h-full w-full items-center justify-center"
        >
          <div
            id="search"
            class="w-3/5 sm:w-1/3 group/input pointer-events-auto relative h-full rounded-md pt-2 transition-all"
          >
            <div
              class="relative z-10 flex h-9 w-full items-center gap-2 px-2 text-sm"
              data-v-2f5a6ce3=""
            >
              <div
                class="group-hover/input:scale-110 shrink-0 cursor-pointer text-lg transition-all"
                data-v-2f5a6ce3=""
              >
                <i
                  class="fa-solid fa-magnifying-glass text-xs"
                  data-v-2f5a6ce3=""
                ></i>
              </div>
              <input
                value=""
                maxlength="100"
                role="presentation"
                autocomplete="new-password"
                class="h-full w-0 flex-1 bg-transparent text-13 outline-none"
                placeholder="Search courses..."
                data-v-2f5a6ce3=""
              />
              <div
                class="relative z-20 shrink-0 cursor-pointer text-sm text-[#707070] hover:text-[#ffffff]"
                data-v-2f5a6ce3=""
              >
                <i
                  style="display: none"
                  class="fa-solid fa-circle-xmark"
                  data-v-2f5a6ce3=""
                ></i>
              </div>
              <div
                class="bg-gradient-top absolute bottom-0 left-0 right-0 h-[1px] w-full"
                data-v-2f5a6ce3=""
              ></div>
            </div>
          </div>
        </div>
        <div>
          <div class="flex items-center gap-1.5 pr-4">
            <div
              data-v-df211d4a=""
              class="group relative shrink-0 scale-100 cursor-pointer items-center justify-center overflow-hidden rounded border px-3 py-2 text-sm leading-none transition-all hover:border-transparent active:scale-95"
            >
              <div
                data-v-df211d4a=""
                class="absolute inset-0 z-0 flex h-full w-full items-center justify-center"
              >
                <div
                  data-v-df211d4a=""
                  class="gradient h-0 w-0 rounded-full transition-all duration-200 group-hover:h-full group-hover:w-full group-hover:rounded"
                ></div>
              </div>
              <div
                data-v-df211d4a=""
                @click="togglePopup"
                class="relative z-10 flex items-center justify-center gap-2 group-hover:text-black text-white"
              >
                <i data-v-df211d4a="" class="fa-solid fa-user-plus"></i> Join Us
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="page"
        class="relative min-h-screen pt-14 transition-all duration-200"
      >
        <div class="relative h-[36rem] overflow-hidden">
          <div class="z-1 relative flex items-center px-10 pt-40 text-white">
            <div class="mr-10 flex-1">
              <div class="mb-5 text-6xl font-bold opacity-90">
                E-learing Revolution 2
              </div>
              <div class="mb-5 text-xl">
                We have worked to digitize our school, ang give the whole world
                the opportunity to do it with a new study platform designed for
                teachers
              </div>
              <a
                href="/courses"
                class="inline-block cursor-pointer rounded-md bg-black px-4 py-3"
              >
                Go to Marketplace
              </a>
              <div>
                <div>Hello</div>
                <div>en</div>
                <div>it</div>
              </div>
            </div>
            <div class="h-80 flex-1 rounded bg-black"></div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="isPopupVisible"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div
        v-if="true"
        class="relative z-10 h-full p-5 text-13 border popup-content"
      >
        <div class="pt-8">
          <div
            class="relative flex h-32 justify-between overflow-hidden rounded border border-white/20 bg-black px-8 py-6 opacity-80 transition-all duration-300 mt-0 mb-6"
          >
            <div class="gradient absolute inset-0 opacity-[0.15]"></div>
            <div
              class="relative flex w-full justify-between transition-all duration-300 opacity-100"
            >
              <img
                src="../public/image.png"
                class="h-20 w-20 object-cover"
              />
              <div>
                <div class="mb-2 text-base font-semibold text-white">
                  Welcome to Aladia,
                </div>
                <div class="text-white/70">
                  Create or access your <br />
                  account from here
                </div>
              </div>
            </div>
            <div
              class="absolute inset-0 flex items-center justify-center transition-all duration-300 opacity-0"
            >
              <i class="fa-solid fa-spinner animate-spin text-xs"> </i>
            </div>
          </div>
          <div class="mb-6 text-center text-white">Enter your email</div>
          <div class="mb-6 flex flex-col items-center px-4">
            <div
              class="group relative mb-8 flex h-10 w-full rounded transition-all bg-white"
            >
              <div class="flex w-10 items-center justify-center text-xl">
                <i class="fa-solid fa-envelope text-base text-black/70"></i>
              </div>
              <input
                maxlength="100"
                class="h-full flex-1 rounded bg-transparent text-sm text-black outline-none transition-all"
                autocomplete="off"
                type="text"
              />
              <div
                class="pointer-events-none absolute left-10 top-[0.65rem] origin-left text-sm text-black/50 transition-all scale-100"
              >
                Email Address
              </div>
            </div>
            <div
              class="relative flex h-10 w-full items-center justify-center overflow-hidden rounded-md border-white/100 bg-black text-center text-sm pointer-events-none opacity-70 mb-6 border"
            >
              <div class="gradient absolute inset-0 opacity-50"></div>
              <div class="text-white" @click="signUp">Enter</div>
            </div>
            <div class="w-full transition-all duration-300">
              <div class="mb-6 flex items-center justify-between gap-4">
                <div
                  class="h-[1px] w-40 bg-gradient-to-r from-white/0 to-white"
                ></div>
                <div class="text-white">Or</div>
                <div
                  class="h-[1px] w-40 bg-gradient-to-r from-white to-white/0"
                ></div>
              </div>
              <div class="mb-8 flex w-full flex-col gap-4">
                <div
                  class="flex cursor-pointer items-center justify-center gap-4 rounded border border-white/20 py-1.5 shadow-[0px_3px_6px_#00000000] transition-all hover:bg-white/20 hover:shadow-[0px_3px_6px_#000000] active:scale-95"
                >
                  <img
                    src="data:image/svg+xml,%3csvg%20width='50'%20height='50'%20viewBox='0%200%2050%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M45.4284%2020.9199H43.7503V20.8334H25.0003V29.1667H36.7743C35.0566%2034.0178%2030.441%2037.5001%2025.0003%2037.5001C18.0972%2037.5001%2012.5003%2031.9032%2012.5003%2025.0001C12.5003%2018.097%2018.0972%2012.5001%2025.0003%2012.5001C28.1868%2012.5001%2031.0857%2013.7022%2033.293%2015.6657L39.1857%209.773C35.4649%206.30529%2030.4878%204.16675%2025.0003%204.16675C13.4951%204.16675%204.16699%2013.4949%204.16699%2025.0001C4.16699%2036.5053%2013.4951%2045.8334%2025.0003%2045.8334C36.5055%2045.8334%2045.8337%2036.5053%2045.8337%2025.0001C45.8337%2023.6032%2045.6899%2022.2397%2045.4284%2020.9199Z'%20fill='%23FFC107'/%3e%3cpath%20d='M6.56836%2015.3032L13.4132%2020.323C15.2652%2015.7376%2019.7507%2012.5001%2024.9996%2012.5001C28.1861%2012.5001%2031.085%2013.7022%2033.2923%2015.6657L39.185%209.773C35.4642%206.30529%2030.4871%204.16675%2024.9996%204.16675C16.9975%204.16675%2010.0579%208.68446%206.56836%2015.3032Z'%20fill='%23FF3D00'/%3e%3cpath%20d='M25%2045.8333C30.3812%2045.8333%2035.2708%2043.7739%2038.9677%2040.425L32.5198%2034.9687C30.4281%2036.5531%2027.8281%2037.5%2025%2037.5C19.5812%2037.5%2014.9802%2034.0448%2013.2469%2029.2229L6.45312%2034.4573C9.90104%2041.2041%2016.9031%2045.8333%2025%2045.8333Z'%20fill='%234CAF50'/%3e%3cpath%20d='M45.4281%2020.9197H43.75V20.8333H25V29.1666H36.774C35.949%2031.4968%2034.45%2033.5062%2032.5167%2034.9697C32.5177%2034.9687%2032.5187%2034.9687%2032.5198%2034.9676L38.9677%2040.4239C38.5115%2040.8385%2045.8333%2035.4166%2045.8333%2024.9999C45.8333%2023.603%2045.6896%2022.2395%2045.4281%2020.9197Z'%20fill='%231976D2'/%3e%3c/svg%3e"
                    class="h-6"
                  />
                  <div class="w-40 text-white">Continue with Google</div>
                </div>
                <div
                  class="flex cursor-pointer items-center justify-center gap-4 rounded border border-white/20 py-1.5 shadow-[0px_3px_6px_#00000000] transition-all hover:bg-white/20 hover:shadow-[0px_3px_6px_#000000] active:scale-95"
                  href="/"
                >
                  <img
                    src="data:image/svg+xml,%3csvg%20width='55'%20height='55'%20viewBox='0%200%2055%2055'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M27.5003%205.72925C21.7263%205.72925%2016.1888%208.02295%2012.106%2012.1058C8.0232%2016.1886%205.72949%2021.7261%205.72949%2027.5001C5.72949%2033.2741%208.0232%2038.8116%2012.106%2042.8944C16.1888%2046.9772%2021.7263%2049.2709%2027.5003%2049.2709C33.2743%2049.2709%2038.8118%2046.9772%2042.8946%2042.8944C46.9775%2038.8116%2049.2712%2033.2741%2049.2712%2027.5001C49.2712%2021.7261%2046.9775%2016.1886%2042.8946%2012.1058C38.8118%208.02295%2033.2743%205.72925%2027.5003%205.72925Z'%20fill='%23039BE5'/%3e%3cpath%20d='M29.4475%2033.2703H35.0816L35.9662%2027.5469H29.4464V24.4188C29.4464%2022.0412%2030.2233%2019.9328%2032.4473%2019.9328H36.0212V14.9381C35.3933%2014.8533%2034.0652%2014.6677%2031.5559%2014.6677C26.316%2014.6677%2023.244%2017.4349%2023.244%2023.7393V27.5469H17.8574V33.2703H23.244V49.0015C24.3108%2049.1619%2025.3913%2049.2707%2026.5004%2049.2707C27.503%2049.2707%2028.4816%2049.1791%2029.4475%2049.0485V33.2703Z'%20fill='white'/%3e%3c/svg%3e"
                    class="h-6"
                  />
                  <div class="w-40 text-white whitespace-nowrap">
                    Continue with Facebook
                  </div>
                </div>
                <div
                  class="flex cursor-pointer items-center justify-center gap-4 rounded border border-white/20 py-1.5 shadow-[0px_3px_6px_#00000000] transition-all hover:bg-white/20 hover:shadow-[0px_3px_6px_#000000] active:scale-95"
                >
                  <img
                    src="data:image/svg+xml,%3csvg%20width='55'%20height='55'%20viewBox='0%200%2055%2055'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_195_22359)'%3e%3cpath%20d='M37.2396%2050.4167C35.2023%2050.4167%2033.8009%2049.7556%2032.5646%2049.1724C31.3729%2048.6109%2030.3428%2048.1251%2028.6458%2048.1251C26.9489%2048.1251%2025.9188%2048.6109%2024.7271%2049.1724C23.4907%2049.7556%2022.0894%2050.4167%2020.0521%2050.4167C15.0952%2050.4167%206.875%2039.0397%206.875%2026.9271C6.875%2018.8948%2012.4117%2012.6042%2019.4792%2012.6042C21.8018%2012.6042%2023.2134%2013.27%2024.459%2013.8566C25.6415%2014.4146%2026.6635%2014.8959%2028.6458%2014.8959C30.6281%2014.8959%2031.6502%2014.4146%2032.8327%2013.8566C34.0782%2013.27%2035.4899%2012.6042%2037.8125%2012.6042C40.865%2012.6042%2043.5795%2013.7294%2045.8815%2015.9512C46.2688%2016.3247%2046.459%2016.8599%2046.3936%2017.395C46.3283%2017.9301%2046.0167%2018.4033%2045.5515%2018.6737C42.8977%2020.2171%2041.25%2023.4885%2041.25%2027.2136C41.25%2031.4085%2043.5462%2035.0156%2046.9631%2036.1866C47.4111%2036.3402%2047.7755%2036.6713%2047.9703%2037.1021C48.1663%2037.5318%2048.1766%2038.0245%2047.9967%2038.4634C45.2157%2045.2777%2040.59%2050.4167%2037.2396%2050.4167ZM29.2188%2011.4584C28.8085%2011.4584%2028.4075%2011.3117%2028.0913%2011.0367C27.6753%2010.6746%2027.4565%2010.1338%2027.5069%209.58266C27.5206%209.44173%2027.8541%206.0936%2030.478%203.41579C32.9461%200.894955%2035.349%200.14558%2035.6136%200.0676633C36.174%20-0.095045%2036.779%200.0378717%2037.219%200.42058C37.6601%200.802143%2037.8767%201.38193%2037.7953%201.96058C37.7564%202.23673%2037.3496%204.75183%2035.2378%207.57402C32.9771%2010.5944%2029.7481%2011.3805%2029.6118%2011.4126C29.4811%2011.4435%2029.3494%2011.4584%2029.2188%2011.4584Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_195_22359'%3e%3crect%20width='55'%20height='55'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                    class="h-6"
                  />
                  <div class="w-40 text-white">Continue with Apple</div>
                </div>
              </div>
              <div class="cursor-pointer text-center text-white/40">
                Terms &amp; Conditions
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- back to log-in 
    <div class="relative z-10 h-full p-5 text-13 border">
      <div>
        <div
          class="next-icon flex h-8 scale-100 cursor-pointer items-center justify-center gap-2 pb-4 transition-all active:scale-95 text-white"
        >
          <div
            class="inline-flex items-center justify-center pt-0.5 rotate-180"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="octicon arrow-symbol-mktg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill="currentColor"
                d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
              ></path>
              <path
                class="octicon-chevrow-stem"
                stroke="currentColor"
                d="M1.75 8H11"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
            </svg>
          </div>
          Back to Log in
        </div>
        <div class="flex flex-col items-center px-4">
          <div class="mb-4 flex w-full items-end gap-6 px-4">
            <div
              class="relative h-24 w-24 rounded border transition-all border-white/20 hover:border-white"
            >
              <div class="gradient absolute inset-0 opacity-20"></div>
              <img
                class="absolute inset-0 h-full w-full rounded object-cover"
                src="../public/image.png"
              />
              <div class="absolute inset-0 flex items-end justify-center pb-4">
               
              </div>
              <input
                type="file"
                accept="image/*"
                class="absolute inset-0 opacity-0"
              />
            </div>
            <div class="">
              <div class="mb-1 text-sm font-semibold">Nice to meet you,</div>
              <div class="text-xs text-white/70">
                Upload a profile picture <br />
                and complete your <br />
                presentation
              </div>
            </div>
          </div>
          <div class="mb-4 flex items-center gap-2">
            <div
              class="flex h-4 w-4 cursor-pointer items-center justify-center rounded border pt-0.5 transition-all border-white/50 hover:border-white"
            >
              <i class="fa-solid fa-check tex-sm" style="display: none"></i>
            </div>
            <div class="text-xs text-white/70">
              I accept
              <span class="underline text-white"> Terms &amp; Conditions </span>
              and <span class="underline text-white"> Privacy Policy </span>
            </div>
          </div>
          <div class="mb-4 text-center text-xs">Enter your details</div>
          <div class="group relative mb-6 flex h-10 w-full rounded bg-white">
            
            <div class="flex w-10 items-center justify-center text-xl">
              <i class="fa-solid fa-user text-base text-black/70"></i>
            </div>
            <input
              maxlength="100"
              class="h-full flex-1 rounded bg-transparent text-sm text-black outline-none transition-all"
              autocomplete="new-password"
              type="text"
            />
            <div
              class="pointer-events-none absolute left-10 top-[0.65rem] origin-left text-sm text-black/50 transition-all scale-100"
            >
              Name
            </div>
           
          </div>
          <div class="group relative mb-6 flex h-10 w-full rounded bg-white">
            
            <div class="flex w-10 items-center justify-center text-xl">
              <i class="fa-solid fa-user text-base text-black/70"></i>
            </div>
            <input
              maxlength="100"
              class="h-full flex-1 rounded bg-transparent text-sm text-black outline-none transition-all"
              autocomplete="new-password"
              type="text"
            />
            <div
              class="pointer-events-none absolute left-10 top-[0.65rem] origin-left text-sm text-black/50 transition-all scale-100"
            >
              Surname
            </div>
          </div>
          <div
            class="group relative mb-6 flex h-10 w-full rounded bg-[#A8A8A8]"
          >
            <div class="flex w-10 items-center justify-center text-xl">
              <i class="fa-solid fa-envelope text-base text-black/70"></i>
            </div>
            <input
              disabled=""
              maxlength="100"
              class="h-full flex-1 rounded bg-transparent text-sm text-black outline-none transition-all"
              autocomplete="new-password"
              type="text"
            />
          </div>
          <div class="group relative mb-1 flex h-10 w-full rounded bg-white">
            <div class="flex w-10 items-center justify-center text-xl">
              <i class="fa-solid fa-key text-base text-black/70"></i>
            </div>
            <input
              maxlength="100"
              class="autofill-input h-full flex-1 rounded bg-transparent text-sm text-black outline-none"
              autocomplete="new-password"
              type="password"
              style="--bg-body: white"
            /><i
              class="fa-solid absolute right-3 top-[0.7rem] scale-100 cursor-pointer text-base text-black/50 transition-all active:scale-90 fa-eye-slash"
            ></i>
            <div
              class="pointer-events-none absolute left-10 top-[0.65rem] origin-left text-sm text-black/50 transition-all scale-100"
            >
              Password
            </div>
          </div>
          <div
            class="flex h-4 w-full items-center justify-between text-xs mb-2"
          >
            <div></div>
            <div class="h-1.5 w-36 rounded bg-[#4e4e4e]">
              <div class="h-full rounded transition-all duration-300 w-0"></div>
            </div>
          </div>
          <div class="group relative mb-6 flex h-10 w-full rounded bg-white">
            <div class="flex w-10 items-center justify-center text-xl">
              <i class="fa-solid fa-key text-base text-black/70"></i>
            </div>
            <input
              maxlength="100"
              class="autofill-input h-full flex-1 rounded bg-transparent text-sm text-black outline-none"
              autocomplete="new-password"
              type="password"
              style="--bg-body: white"
            /><i
              class="fa-solid absolute right-3 top-[0.7rem] scale-100 cursor-pointer text-base text-black/50 transition-all active:scale-90 fa-eye-slash"
            ></i>
            <div
              class="pointer-events-none absolute left-10 top-[0.65rem] origin-left text-sm text-black/50 transition-all scale-100"
            >
              Confirm Password
            </div>
          </div>
          <div
            class="relative flex h-10 w-full items-center justify-center overflow-hidden rounded-md border border-white/0 bg-black text-center text-sm pointer-events-none opacity-70 mb-2"
          >
            <div class="gradient absolute inset-0 opacity-50"></div>
            <div>Enter</div>
          </div>
          <div class="cursor-pointer text-center text-white/40">
            Terms &amp; Conditions
          </div>
        </div>
      </div>
    </div>
    -->
    <!-- 6 digit code 
    <div class="relative z-10 h-full p-5 text-13">
      <div class="flex flex-col items-center px-6 pt-8">
        <img
          src="../../public/image.png"
          class="mb-2 h-24 w-24 rounded object-cover"
        />
        <div class="mb-4 text-lg font-semibold">abbe kebede</div>
        <div class="mb-8 text-white/70">Thanks for joining Aladia.</div>
        <div class="mb-20 text-center text-white/70">
          Please enter below the 6-digit code we sent you through your
          registration e-mail:
        </div>
        <div
          class="relative mb-4 flex h-10 w-full justify-between text-xl text-black"
        >
          <input
            maxlength="1"
            class="flex w-10 items-center justify-center rounded bg-white text-center outline-none transition-transform active:scale-90"
          /><input
            maxlength="1"
            class="flex w-10 items-center justify-center rounded bg-white text-center outline-none transition-transform active:scale-90"
          /><input
            maxlength="1"
            class="flex w-10 items-center justify-center rounded bg-white text-center outline-none transition-transform active:scale-90"
          /><input
            maxlength="1"
            class="flex w-10 items-center justify-center rounded bg-white text-center outline-none transition-transform active:scale-90"
          /><input
            maxlength="1"
            class="flex w-10 items-center justify-center rounded bg-white text-center outline-none transition-transform active:scale-90"
          /><input
            maxlength="1"
            class="flex w-10 items-center justify-center rounded bg-white text-center outline-none transition-transform active:scale-90"
          />
        </div>
        <div class="mb-24 flex w-full justify-center">
          <div
            class="flex cursor-pointer items-center justify-center text-xs transition-all"
          >
            <div class="text-white/50">You didn't receive any mail?</div>
          </div>
        </div>
        <div
          class="relative flex h-10 w-full items-center justify-center overflow-hidden rounded-md border border-white/0 bg-black text-center text-sm scale-100 cursor-pointer transition-all hover:border-white/40 active:scale-95 mb-2"
        >
          <div class="gradient absolute inset-0 opacity-50"></div>
          <div>Enter</div>
        </div>
      </div>
    </div>
  
  -->
    <!-- recovery code 
    <div class="relative z-10 h-full p-5 text-13">
     
      <div class="flex h-full flex-col pb-6">
        <div
          class="group relative mb-6 flex cursor-pointer justify-center font-semibold"
        >
          <div class="group-hover:hidden">Password Recovery</div>
          <div class="hidden text-white/50 group-hover:flex">
            Back to Log in
          </div>
          <div class="absolute left-0">
            <i
              class="fa-regular fa-arrow-left text-white/50 transition-all group-hover:text-white"
            ></i>
          </div>
        </div>
        <div
          class="mb-6 flex items-center gap-6 rounded border border-red-600 px-4 py-6"
        >
          <div class="flex w-32 justify-center">
            <img
              src="data:image/svg+xml,%3csvg%20width='50'%20height='50'%20viewBox='0%200%2050%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M45.4284%2020.9199H43.7503V20.8334H25.0003V29.1667H36.7743C35.0566%2034.0178%2030.441%2037.5001%2025.0003%2037.5001C18.0972%2037.5001%2012.5003%2031.9032%2012.5003%2025.0001C12.5003%2018.097%2018.0972%2012.5001%2025.0003%2012.5001C28.1868%2012.5001%2031.0857%2013.7022%2033.293%2015.6657L39.1857%209.773C35.4649%206.30529%2030.4878%204.16675%2025.0003%204.16675C13.4951%204.16675%204.16699%2013.4949%204.16699%2025.0001C4.16699%2036.5053%2013.4951%2045.8334%2025.0003%2045.8334C36.5055%2045.8334%2045.8337%2036.5053%2045.8337%2025.0001C45.8337%2023.6032%2045.6899%2022.2397%2045.4284%2020.9199Z'%20fill='%23FFC107'/%3e%3cpath%20d='M6.56836%2015.3032L13.4132%2020.323C15.2652%2015.7376%2019.7507%2012.5001%2024.9996%2012.5001C28.1861%2012.5001%2031.085%2013.7022%2033.2923%2015.6657L39.185%209.773C35.4642%206.30529%2030.4871%204.16675%2024.9996%204.16675C16.9975%204.16675%2010.0579%208.68446%206.56836%2015.3032Z'%20fill='%23FF3D00'/%3e%3cpath%20d='M25%2045.8333C30.3812%2045.8333%2035.2708%2043.7739%2038.9677%2040.425L32.5198%2034.9687C30.4281%2036.5531%2027.8281%2037.5%2025%2037.5C19.5812%2037.5%2014.9802%2034.0448%2013.2469%2029.2229L6.45312%2034.4573C9.90104%2041.2041%2016.9031%2045.8333%2025%2045.8333Z'%20fill='%234CAF50'/%3e%3cpath%20d='M45.4281%2020.9197H43.75V20.8333H25V29.1666H36.774C35.949%2031.4968%2034.45%2033.5062%2032.5167%2034.9697C32.5177%2034.9687%2032.5187%2034.9687%2032.5198%2034.9676L38.9677%2040.4239C38.5115%2040.8385%2045.8333%2035.4166%2045.8333%2024.9999C45.8333%2023.603%2045.6896%2022.2395%2045.4281%2020.9197Z'%20fill='%231976D2'/%3e%3c/svg%3e"
              class="h-20 w-20 object-contain"
            />
          </div>
          <div class="flex-1">
            <div class="mb-2 text-base font-semibold">Add a new password</div>
            <div class="text-13 text-white/70">
              Your account uses <br /><span class="capitalize">google</span>
              Sign-in. <br />
              Add a new password.
            </div>
          </div>
        </div>
        <div class="flex flex-1 flex-col px-6">
          <div class="leading-none text-white/70">
            <div class="text-sm font-semibold text-white/70">
              Recovery link sent to:
            </div>
            <div class="text-xs font-light italic"></div>
          </div>
          <div class="flex flex-1 items-center justify-between gap-6">
            <img
              src="https://develop.aladia.io/_nuxt/image.ChQ3biW9.png"
              class="h-20 w-20 object-cover"
            />
            <div class="flex flex-col items-center gap-3">
              <i class="fa-regular fa-arrow-right text-xl"></i
              ><img
                src="data:image/svg+xml,%3csvg%20width='48'%20height='34'%20viewBox='0%200%2048%2034'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group%2022'%20opacity='0.6'%3e%3cpath%20id='Union'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M37.309%203.885L23.7397%2018.8413L10.1704%203.885H37.309ZM41.3597%203.885C41.3286%203.91929%2041.2971%203.95399%2041.2652%203.98913L25.2209%2021.6734C24.5288%2022.4363%2024.1827%2022.8177%2023.7397%2022.8177C23.2967%2022.8177%2022.9507%2022.4363%2022.2585%2021.6734L6.21421%203.98913L6.21419%203.98911C6.18232%203.95398%206.15083%203.91928%206.11975%203.885H5.36023C4.25566%203.885%203.36023%204.78043%203.36023%205.885V28.6172C3.36023%2029.7218%204.25566%2030.6172%205.36022%2030.6172H42.1206C43.2251%2030.6172%2044.1206%2029.7218%2044.1206%2028.6172V5.885C44.1206%204.78043%2043.2251%203.885%2042.1206%203.885H41.3597ZM42.6518%200.912893C45.1635%201.17815%2047.1206%203.30302%2047.1206%205.885V28.6172C47.1206%2031.3787%2044.882%2033.6172%2042.1206%2033.6172H5.36022C2.5988%2033.6172%200.360229%2031.3787%200.360229%2028.6172V5.885C0.360229%203.3036%202.31645%201.1791%204.82731%200.913068C5.24797%200.671204%206.03628%200.64778%207.27962%200.645511L7.28514%200.645499C7.41677%200.645267%207.55351%200.645266%207.69543%200.645266L39.784%200.645264C39.9259%200.645264%2040.0626%200.645264%2040.1943%200.645496L40.1998%200.645508C41.4428%200.647776%2042.2311%200.67119%2042.6518%200.912893Z'%20fill='url(%23paint0_linear_318_751)'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_318_751'%20x1='23.9999'%20y1='0.999878'%20x2='23.9999'%20y2='39.4999'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23373333'/%3e%3cstop%20offset='1'%20stop-color='%237C7C7C'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
                class="h-10 object-contain"
              />
            </div>
            <img
              src="data:image/svg+xml,%3csvg%20width='55'%20height='75'%20viewBox='0%200%2055%2075'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='Vector'%20opacity='0.6'%20d='M13.2501%2029.0097V29.1097H13.3501H48.2411C49.0523%2029.1097%2049.8557%2029.2719%2050.6053%2029.5869C51.3549%2029.902%2052.0361%2030.3639%2052.6099%2030.9463C53.1838%2031.5286%2053.6391%2032.2201%2053.9497%2032.9812C54.2604%2033.7423%2054.4203%2034.5581%2054.4203%2035.3819V67.7194C54.4203%2069.3834%2053.7689%2070.9789%2052.6099%2072.1551C51.4509%2073.3312%2049.8794%2073.9917%2048.241%2073.9917H6.27918C4.64083%2073.9917%203.06929%2073.3312%201.91035%2072.1551C0.751369%2070.9789%200.1%2069.3834%200.1%2067.7194V35.3822C0.1%2033.7181%200.751399%2032.1226%201.91044%2030.9463C3.06943%2029.7702%204.64104%2029.1097%206.27945%2029.1097H7.40356H7.50356V29.0097V20.5626C7.50356%209.75405%2015.764%200.581119%2026.3963%200.118872L26.3964%200.11887C29.8817%20-0.0347026%2033.345%200.751297%2036.4339%202.39701C39.5229%204.04273%2042.1274%206.48949%2043.9823%209.48854L43.9828%209.48932C44.1975%209.82945%2044.3362%2010.2133%2044.3889%2010.6138C44.4417%2011.0144%2044.4072%2011.4218%2044.2881%2011.8073C44.1689%2012.1928%2043.968%2012.5471%2043.6994%2012.8451C43.431%2013.143%2043.1015%2013.3774%2042.7343%2013.5321C42.7342%2013.5321%2042.7341%2013.5321%2042.734%2013.5322L42.4278%2013.6596C42.4276%2013.6597%2042.4274%2013.6598%2042.4273%2013.6598C41.8271%2013.9016%2041.1622%2013.9208%2040.5496%2013.7139C39.9367%2013.507%2039.4151%2013.0871%2039.077%2012.5277L39.0762%2012.5264C37.7554%2010.4162%2035.9093%208.69673%2033.724%207.54181C31.5388%206.3869%2029.0919%205.83744%2026.6303%205.949C19.0733%206.28687%2013.2501%2012.8729%2013.2501%2020.5387V29.0097ZM33.291%2062.4359H33.4268L33.3865%2062.3062L30.2816%2052.2987C31.4411%2051.6324%2032.3557%2050.6005%2032.8858%2049.3588C33.4267%2048.092%2033.5369%2046.6787%2033.199%2045.3415C32.8611%2044.0043%2032.0943%2042.8189%2031.0191%2041.9722C29.9438%2041.1256%2028.6214%2040.6659%2027.26%2040.6659C25.8987%2040.6659%2024.5762%2041.1256%2023.501%2041.9722C22.4257%2042.8189%2021.659%2044.0043%2021.3211%2045.3415C20.9832%2046.6787%2021.0933%2048.092%2021.6342%2049.3588C22.1643%2050.6005%2023.0789%2051.6324%2024.2385%2052.2987L21.1337%2062.3062L21.0935%2062.4359H21.2292H33.291Z'%20fill='url(%23paint0_linear_318_755)'%20stroke='%23383434'%20stroke-width='0.2'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_318_755'%20x1='27.2601'%20y1='0'%20x2='27.2601'%20y2='74.0917'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%236F6363'/%3e%3cstop%20offset='1'%20stop-color='%238A8A8A'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
              class="h-20 object-cover"
            />
          </div>
          <div
            class="relative flex h-10 w-full items-center justify-center overflow-hidden rounded-md border border-white/0 bg-black text-center text-sm scale-100 cursor-pointer transition-all hover:border-white/40 active:scale-95"
          >
            <div class="gradient absolute inset-0 opacity-50"></div>
            <div>Send Link</div>
          </div>
        </div>
      </div>
    </div>
  --></div>
</template>

<script>
export default {
  data() {
    return {
      isPopupVisible: false,

      // popUpVisibles: false,
    };
  },
  methods: {
    togglePopup() {
      this.isPopupVisible = !this.isPopupVisible;
    },
    // signUp() {
    //   this.PopupVisibles = !this.PopupVisibles;
    // },
  },
};
</script>

<style scoped>
.popup-content {
  width: auto;
  height: auto;
  padding: 20px;
}
</style>
