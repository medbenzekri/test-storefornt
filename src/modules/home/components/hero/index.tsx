
import Link from "next/link"

const Hero = () => {
  return (
    <div className="flex flex-col min-h-dvh">
      <section className="w-full py-12 md:py-24 lg:py-32 border-b">
        <div className="container grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Elevate Your Workout with Our Dumbbell Stands
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Discover the ultimate solution for organizing and displaying your dumbbells. Our durable, adjustable
                stands provide a sleek and space-saving design to keep your home gym tidy and professional-looking.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Buy Now
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
          </div>
          <img
            src="/placeholder.svg"
            width="600"
            height="600"
            alt="Dumbbell Stand"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
          />
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container space-y-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Features That Set Us Apart</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our dumbbell stands are designed with your needs in mind, offering a range of features to elevate your
                home gym experience.
              </p>
            </div>
          </div>
          <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Adjustable Heights</h3>
              <p className="text-sm text-muted-foreground">
                Customize the stand to fit your specific dumbbell sizes and workout needs.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Sturdy Construction</h3>
              <p className="text-sm text-muted-foreground">
                Built with high-quality materials to withstand heavy use and last for years.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Space-Saving Design</h3>
              <p className="text-sm text-muted-foreground">
                Our compact design helps you maximize your workout space and keep your gym organized.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Non-Slip Feet</h3>
              <p className="text-sm text-muted-foreground">
                Stable and secure on any floor surface, preventing unwanted movement during use.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Easy Assembly</h3>
              <p className="text-sm text-muted-foreground">Simple and straightforward setup, no tools required.</p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Sleek Appearance</h3>
              <p className="text-sm text-muted-foreground">
                Elevate the look of your home gym with our modern, minimalist design.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Our Customers Say</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from real people who have transformed their home gyms with our dumbbell stands.
            </p>
          </div>
          <div className="divide-y rounded-lg border">
            <div className="grid w-full grid-cols-1 items-stretch justify-center divide-x md:grid-cols-3">
              <div className="mx-auto flex w-full flex-col items-center justify-center p-8 space-y-4">
                <img
                  src="/placeholder.svg"
                  width="64"
                  height="64"
                  alt="Customer Avatar"
                  className="aspect-square rounded-full object-cover"
                />
                <div className="text-center">
                  <p className="text-lg font-bold">Jane Doe</p>
                  <p className="text-sm text-muted-foreground">Fitness Enthusiast</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  "These dumbbell stands have been a game-changer for my home\n gym. They're sturdy, adjustable, and
                  really help keep my\n space organized."
                </p>
              </div>
              <div className="mx-auto flex w-full flex-col items-center justify-center p-8 space-y-4">
                <img
                  src="/placeholder.svg"
                  width="64"
                  height="64"
                  alt="Customer Avatar"
                  className="aspect-square rounded-full object-cover"
                />
                <div className="text-center">
                  <p className="text-lg font-bold">John Smith</p>
                  <p className="text-sm text-muted-foreground">Home Gym Owner</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  "I'm really impressed with the quality and design of these\n dumbbell stands. They've helped me
                  maximize my workout space\n and keep my gym looking professional."
                </p>
              </div>
              <div className="mx-auto flex w-full flex-col items-center justify-center p-8 space-y-4">
                <img
                  src="/placeholder.svg"
                  width="64"
                  height="64"
                  alt="Customer Avatar"
                  className="aspect-square rounded-full object-cover"
                />
                <div className="text-center">
                  <p className="text-lg font-bold">Sarah Lee</p>
                  <p className="text-sm text-muted-foreground">Home Fitness Blogger</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  "These dumbbell stands are a must-have for any home gym. They\n look great, are super sturdy, and have
                  made my workout space\n so much more organized."
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center space-x-4">
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Buy Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
