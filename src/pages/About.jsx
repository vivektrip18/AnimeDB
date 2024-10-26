export const About = ({setBlur}) => {
    return <div>
        {setBlur(true)};

        <div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div class="flex flex-col lg:flex-row justify-between gap-8">
                <div class="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 class="text-3xl lg:text-4xl font-bold leading-9  text-gray-950  pb-4">About Us</h1>
                    <p class="font-normal text-base leading-6 text-gray-950 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                </div>
                <div class="w-full lg:w-8/12">
                    <img class="w-full h-full" src="src\images\about_us.jpg" alt="A group of People" />
                </div>
            </div>

            <div class="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div class="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 class="text-3xl lg:text-4xl font-bold leading-9  text-gray-950   pb-4">Our Story</h1>
                    <p class="font-normal text-base leading-6 text-gray-950  ">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                </div>
                <div class="w-full lg:w-8/12 lg:pt-8">
                    <div class="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                        <div class="p-4 pb-6 flex justify-center flex-col items-center">
                            <img class="md:block hidden" src="src\images\char_1_aboutus.jpg" alt="Manabu featured Image" />
                            <p class="font-medium text-xl leading-5  text-gray-950   mt-4">Manabu</p>
                        </div>

                        <div class="p-4 pb-6 flex justify-center flex-col items-center">
                            <img class="md:block hidden" src="src\images\char-3-about-us.jpg" alt="Kaede featured Image" />
                            <p class="font-medium text-xl leading-5  text-gray-950   mt-4">Kaede</p>
                        </div>

                        <div class="p-4 pb-6 flex justify-center flex-col items-center">
                            <img class="md:block hidden" src="src\images\char-2-aboutus.jpg" alt="Yuji featued Image" />   
                            <p class="font-medium text-xl leading-5  text-gray-950   mt-4">Yuji</p>
                        </div>

                        <div class="p-4 pb-6 flex justify-center flex-col items-center">
                            <img class="md:block hidden" src="src\images\char-4-aboutus.jpg" alt="Suzune featured image" />
                           
                            <p class="font-medium text-xl leading-5 text-gray-950   mt-4">Suzune</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
}