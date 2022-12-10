<script>
	let hidden = true;
	function bawa() {
		hidden = !hidden;
	}
  </script>
  
  <div class="fixed top-0 z-50 w-full bg-opacity-80 backdrop-blur-lg sm:bg-opacity-60">
	<div class="items-center justify-between sm:flex lg:justify-around">
	  <div class="flex items-center justify-between">
		<a class="m-1 flex shrink-0 items-center gap-1 p-1" href="/">
		  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-10 w-10 rounded-full bg-gradient-to-r from-my-nvy1 to-pink-800 p-2 text-white" viewBox="0 0 24 24">
			<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
		  </svg>
		  <h1 class="text-xl font-bold">DiaperExperts</h1>
		</a>
		<button on:click="{bawa}" class="sm:hidden">
		  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-5 h-9 w-9">
			<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
		  </svg>
		</button>
	  </div>
	  <div class:hidden class="items-center sm:flex sm:gap-4 sm:pr-5">
		<a on:click="{bawa}" class="mx-2 flex items-center justify-start gap-1 rounded-md py-2 px-11 text-right text-base hover:text-my-nvy1 focus:outline-none sm:mx-0 sm:px-0 sm:py-0" href="/">
		  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
			<path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
		  </svg>
		  Home</a
		>
		<a on:click="{bawa}" class="mx-2 flex items-center justify-start gap-1 rounded-md py-2 px-11 text-right text-base hover:text-my-nvy1 focus:outline-none sm:mx-0 sm:px-0 sm:py-0" href="/services">
		  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
			<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
		  </svg>
		  Services
		</a>
		<a on:click="{bawa}" class="mx-2 flex items-center justify-start gap-1 rounded-md py-2 px-11 text-right text-base hover:text-my-nvy1 focus:outline-none sm:mx-0 sm:px-0 sm:pl-0 lg:text-base" href="/cta">
		  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
			<path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
		  </svg>
		  Work With Us
		</a>
		<a on:click="{bawa}" class="mx-2 flex items-center justify-start gap-1 rounded-md py-2 px-11 text-right text-base hover:text-my-nvy1 focus:outline-none sm:mx-0 sm:px-0 sm:py-0" href="/about">
		  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
			<path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
		  </svg>
		  About
		</a>
		<a on:click="{bawa}" class="mx-2 flex items-center justify-start gap-1 rounded-md py-2 px-11 pb-2 text-right text-base hover:text-my-nvy1 focus:outline-none sm:mx-0 sm:px-0 sm:py-0 sm:pb-0" href="/contact">
		  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
			<path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
		  </svg>
		  Get in Touch
		</a>
	  </div>
	</div>
  </div>
  