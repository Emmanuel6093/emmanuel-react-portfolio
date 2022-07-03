import React from 'react';

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>

                <p className='text-xl mt-20'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos magnam libero necessitatibus laborum reprehenderit quidem deserunt vero mollitia! Non repellendus ab consequuntur reiciendis similique sit aut maxime eius fugiat distinctio dicta, neque earum voluptas dolore, officiis in dolorem iure nemo omnis eaque? Quod consequatur harum similique ea, asperiores aliquam dolor.
                </p>

                <br />

                <p className='text-xl'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti sequi eaque iusto debitis assumenda nihil inventore suscipit veritatis in, ut error aliquid animi facilis totam placeat! Rerum deserunt optio impedit nemo consequuntur corporis perferendis earum velit consequatur eaque aut provident odio natus nisi iste facere cupiditate doloribus, exercitationem facilis commodi!
                </p>
            </div>


        </div>
    )
}

export default About;