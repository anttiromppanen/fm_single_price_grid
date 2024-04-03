function App() {
  return (
    <main className="min-h-[100dvh] w-full items-center justify-center md:flex md:min-h-screen">
      <div className="mx-8 my-20 max-w-3xl grid-cols-2 rounded-md shadow-xl *:p-6 md:m-0 md:grid md:rounded-xl md:*:p-10">
        <div className="col-span-2 col-start-1 col-end-4 w-full rounded-t-md bg-white md:rounded-t-xl">
          <h2 className="text-userCyan text-xl font-bold md:text-2xl">
            Join our community
          </h2>
          <h3 className="text-userBrightYellow my-4 font-bold md:text-lg">
            30-day, hassle-free money back guarantee
          </h3>
          <p className="text-userGrayishBlue text-sm leading-7 md:text-base">
            Gain access to our full library of tutorials along with expert code
            reviews. Perfect for any developers who are serious about honing
            their skills.
          </p>
        </div>
        <div className="bg-userCyan w-full text-white md:rounded-bl-xl">
          <h2 className="text-xl font-bold md:text-xl">Monthly Subscription</h2>
          <h3 className="text-userLightGray/90 mt-4 flex items-center gap-x-3 text-sm">
            <span className="text-3xl font-bold text-white">$29</span> per month
          </h3>
          <p className="mt-2">Full access for less than $1 a day</p>
          <button
            type="button"
            className="bg-userBrightYellow mt-8 w-full max-w-[333px] rounded-md py-3 font-bold shadow-lg hover:brightness-105"
          >
            Sign Up
          </button>
        </div>
        <div className="bg-userCyan/70 w-full rounded-b-md text-white md:rounded-bl-none">
          <h2 className="text-xl font-bold md:text-xl">Why Us</h2>
          <div className="text-userLightGray mt-4 text-sm">
            <p>Tutorials by industry experts</p>
            <p>Peer &amp; expert code review</p>
            <p>Coding exercises</p>
            <p>Access to our GitHub repos</p>
            <p>Community forum</p>
            <p>Flashcard decks</p>
            <p>New videos every week</p>
          </div>
          <p className="text-sm" />
        </div>
      </div>
    </main>
  );
}

export default App;
