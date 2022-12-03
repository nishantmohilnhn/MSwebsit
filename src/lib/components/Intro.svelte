<div class=" relative yooyo min-h-screen bg-cover bg-no-repeat  bg-center">
	<div class="  text-5xl w-full h-full ">
		<div>
			<p class="pt-20 text-center text-4xl font-extrabold md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-my-nvy1">
				Grow your business,<br />Succeed with Us.
			</p>
			<div class="mt-2 flex justify-center flex-wrap gap-3 ">
				<p class="text-center px-1 text-2xl font-light text-my-nvy1">Project consultancy</p>
				<p class="text-center px-1 text-2xl font-light text-my-nvy1">Product Design</p>
				<p class="text-center px-1 text-2xl font-light text-my-nvy1">Machine Design</p>
			</div>
			<p class="text-center text-2xl font-thin text-my-nvy1 pb-16">And much more.</p>
		</div>
	</div>
	<section class=" hidden ">
		<div class="relative items-center w-full px-5 py-10 mx-auto md:px-12 lg:px-24 max-w-7xl">
			<div class="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">				
				{#each dat as i}
					
				<div class="p-6">
					<img class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="{i.imgsrc}" alt="blog">
					<h2 class="mb-2 text-xs font-semibold tracking-widest text-my-nvy1 uppercase">{i.small}</h2>
					<h1 class="mx-auto mb-2 text-2xl font-semibold leading-none tracking-tighter text-white lg:text-3xl">{i.title}</h1>
					<div class="mt-4">
						<a href="/" class="inline-flex items-center mt-4 font-semibold text-my-nvy1 lg:mb-0 hover:text-neutral-600" title="read more"> Read More » </a>
					</div>
				</div>
				{/each}
			</div>
		</div>
	</section>
</div>


<style>
    .yooyo{
	background-image: url("data:image/svg+xml,%3Csvg id='visual' viewBox='0 0 900 600' width='900' height='600' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1'%3E%3Cpath d='M0 353L21.5 353.5C43 354 86 355 128.8 370.7C171.7 386.3 214.3 416.7 257.2 417.3C300 418 343 389 385.8 379C428.7 369 471.3 378 514.2 392.7C557 407.3 600 427.7 642.8 428.5C685.7 429.3 728.3 410.7 771.2 395.7C814 380.7 857 369.3 878.5 363.7L900 358L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z' fill='%230d9488'%3E%3C/path%3E%3Cpath d='M0 480L21.5 472.8C43 465.7 86 451.3 128.8 447C171.7 442.7 214.3 448.3 257.2 448.3C300 448.3 343 442.7 385.8 444.7C428.7 446.7 471.3 456.3 514.2 456.8C557 457.3 600 448.7 642.8 445.7C685.7 442.7 728.3 445.3 771.2 448.2C814 451 857 454 878.5 455.5L900 457L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z' fill='%2335a798'%3E%3C/path%3E%3Cpath d='M0 484L21.5 487.5C43 491 86 498 128.8 499.2C171.7 500.3 214.3 495.7 257.2 487.7C300 479.7 343 468.3 385.8 461.8C428.7 455.3 471.3 453.7 514.2 457.2C557 460.7 600 469.3 642.8 478C685.7 486.7 728.3 495.3 771.2 494C814 492.7 857 481.3 878.5 475.7L900 470L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z' fill='%234fbaa9'%3E%3C/path%3E%3Cpath d='M0 508L21.5 513.5C43 519 86 530 128.8 531.8C171.7 533.7 214.3 526.3 257.2 524.2C300 522 343 525 385.8 520.3C428.7 515.7 471.3 503.3 514.2 502.5C557 501.7 600 512.3 642.8 513.8C685.7 515.3 728.3 507.7 771.2 509.7C814 511.7 857 523.3 878.5 529.2L900 535L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z' fill='%2367cdba'%3E%3C/path%3E%3Cpath d='M0 560L21.5 556.8C43 553.7 86 547.3 128.8 545.2C171.7 543 214.3 545 257.2 543.7C300 542.3 343 537.7 385.8 534C428.7 530.3 471.3 527.7 514.2 533.8C557 540 600 555 642.8 555.2C685.7 555.3 728.3 540.7 771.2 539.7C814 538.7 857 551.3 878.5 557.7L900 564L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z' fill='%237ee1cc'%3E%3C/path%3E%3C/svg%3E");
}
</style>

<script>
	let dat=[
		{"imgsrc":"http://picsum.photos/id/950/500",
		"small":"shotr title",
		"title":"Short length headline to use as a title."
	},{"imgsrc":"http://picsum.photos/id/952/500",
		"small":"shotr title",
		"title":"Short length headline to use as a title."
	},{"imgsrc":"http://picsum.photos/id/953/500",
		"small":"shotr title",
		"title":"Short length headline to use as a title."
	},

	];
</script>