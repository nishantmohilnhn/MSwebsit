<div class=" sticky top-0 w-full bg-white backdrop-filter backdrop-blur-lg">
<div class="items-center justify-between sm:flex lg:justify-around">
    <div class="flex items-center justify-between">
      <a class="m-1 flex shrink-0 items-center gap-1 p-1" href="/">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-10 w-10 rounded-full bg-teal-600 p-2 text-white" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        <h1 class="text-xl font-bold">DiaperExperts</h1>
      </a>
      <button on:click={bawa} class="sm:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-5 h-9 w-9">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
        </svg>
      </button>
    </div>
    <div class:hidden class="items-center sm:flex sm:gap-4 sm:pr-5">
      <a on:click={bawa}  class="block pr-6 text-right  text-base sm:pr-0" href="/">Home</a>
      <a on:click={bawa}  class="block pr-6 text-right  text-base sm:pr-0" href="/services">Services</a>
      <a on:click={bawa}  class="block pr-6 text-right  text-base sm:pr-0" href="/cta">Work With Us</a>
      <a on:click={bawa}  class="block pr-6 text-right  text-base sm:pr-0" href="/about">About</a>
      <a on:click={bawa}  class="block pr-6 text-right  text-base sm:pr-0 mb-2 sm:mb-0" href="/Getintouch">Get in Touch</a>
    </div>
  </div>
  </div>

  <script>
    let hidden = false;
    function bawa() {
      hidden = !hidden;
    }
  </script>