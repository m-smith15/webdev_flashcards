import React from 'react';


const Main = (props) => {


    return (
        <div>
            <h1>Welcome to WebDev Flashcards! </h1>
            <p>Use the navigational buttons in the header to practice, view the entire flashcard database, or return here (home)!</p>
            <hr />
            <div className="aboutUs">
                <h2>A little about us...</h2>
                <p>Hi, we're Coren and Mack - creators of WebDev Flashcards. We built this application after graduating from our Coding Bootcamp at Coding Dojo. The purpose of this application is to help visitors learn, brush up, and practice their knowledge of fundamental devleopment concepts. <br /><br />
                    The idea behind this project came about when I sat down to write flashcards at my kitchen table. It hit me just as I was putting pen to flashcard - what better way to practice, than to actually practice!? I spoke with Coren about the idea and we immediately started jotting down ideas.  <br /><br />
                    We have a laundry list of things we’d like to add, with big dreams of taking this open source at some point in the future. If you’re someone who’d be interested in joining us in any capacity then reach out to either Coren or Mack on LinkedIn. There is no shortage on the wishlist of things we’d like to add to the Front or Back end. We have a zero requirement policy in joining us, so even if you know very little we’d be happy to help you learn along the way. <br /><br />
                    We hope you enjoy, and wish you the best of luck on your journey!
                </p>
            </div>
        </div>
    )
}

export default Main;