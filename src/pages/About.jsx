import aboutImage from "../assets/aboutImg.jpg";

export const About = () => {
  return (
    <section>
        <div style={{ backgroundImage: `url(${aboutImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <h1 className="mb-5 mt-20 py-44 text-5xl text-center font-bold text-orange-100 shadow-2xl">
                ABOUT US
            </h1>
        </div>
        <div className="container mx-auto max-w-4xl px-6">
            <h2 className="text-2xl text-center font-bold text-yellow-900 mb-2 mt-12">
                WHO WE ARE
            </h2>
            <p className="font-semibold text-l leading-7">
                Welcome to Bookfinder, your ultimate destination for discovering and exploring the world of books. At Bookfinder, we are passionate about connecting readers with the stories and information that matter to them. Whether you are a casual reader or a dedicated bibliophile, our platform is designed to make your book-finding journey both enjoyable and effortless.
                Our mission is simple: to help you find books that captivate, inform, and inspire. With the help of <i>Google Books API</i>, Bookfinder makes it easy to search for specific titles and authors. Additionally, our trending books section highlights the most popular reads, ensuring you stay up-to-date with the latest and greatest in the literary world.
                We believe that the right book can change your perspective, broaden your horizons, and provide a much-needed escape. That's why we're committed to providing a seamless and user-friendly experience, allowing you to focus on discovering and enjoying great books. Join us on Bookfinder and let your next favorite read find you.
            </p>
            <h2 className="text-2xl text-center font-bold text-yellow-900 mb-2 mt-12">
                A FEW THINGS YOU CAN DO ON BOOKFINDER
            </h2>
            <ul className="font-semibold text-l list-disc leading-7">
                <li>Find Book That You Want To Read Next.</li>
                <li>Explore Recent Trending Books.</li>
            </ul>
        </div>
    </section>
  )
}

export default About;