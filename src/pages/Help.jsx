export const Help = () => {
    return (
      <section>
          <div>
              <h1 className="mb-5 mt-20 py-44 text-5xl text-center font-bold text-yellow-900">
                  FREQUENTLY ASKED QUESTIONS (FAQs)
              </h1>
          </div>
          <div className="container mx-auto max-w-4xl px-6">
              <h2 className="text-2xl font-bold text-yellow-900 mb-2 mt-12">
                General Questions
              </h2>
              <p className="font-semibold text-l leading-7">
                  <p className="text-yellow-900 font-bold">Q: What is BookFinder?</p> A: BookFinder is a comprehensive search engine that helps users find new, used, rare, and out-of-print books.
                  <br></br>
                  <p className="text-yellow-900 font-bold">Q: How does BookFinder work?</p> A: BookFinder searches for Google Books API to find books. Simply enter the book title or author and we will provide a list of available options.
                  <br></br>
                  <p className="text-yellow-900 font-bold">Q: Is BookFinder free to use?</p> A: Yes, BookFinder is completely free to use.
              </p>

              <h2 className="text-2xl font-bold text-yellow-900 mb-2 mt-12">
                Searching for Books
              </h2>
              <p className="font-semibold text-l leading-7">
                  <p className="text-yellow-900 font-bold">Q: How do I search for a book on BookFinder?</p> A: Enter the book title or author in the search bar on our homepage and click the search button. You will see a list of results from various online bookstores.
                  <br></br>
                  <p className="text-yellow-900 font-bold">Q: Can I search for textbooks on BookFinder?</p> A: Yes, you can search for textbooks as well as other types of books. Simply enter the textbook title or author in the search bar.
                  <br></br>
                  <p className="text-yellow-900 font-bold">Q: Can I find rare or out-of-print books on BookFinder?</p> A: Yes, BookFinder specializes in finding rare and out-of-print books. Use our search function to find these hard-to-find titles.
              </p>

              <h2 className="text-2xl font-bold text-yellow-900 mb-2 mt-12">
                Account
              </h2>
              <p className="font-semibold text-l leading-7">
                  <p className="text-yellow-900 font-bold">Q: Do I need to create an account to use BookFinder?</p> A: No, you do not need to create an account to search for books.
              </p>
          </div>
      </section>
    )
  }
  
  export default Help;