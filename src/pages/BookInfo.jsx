function BookInfo() {
  return (
    <>
      <main className="w-100 d-flex flex-column align-items-center mt-5">
        <div className="container d-flex flex-wrap row justify-content-center">
          <img
            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1474154022i/3.jpg"
            className="card-img-top col-6"
            alt="..."
            style={{ width: "15rem" }}
          />
          <ul className=" text-center flex-wrap">
            <h3>Harry Potter and the Sorcerer's Stone</h3>
            <p className="text-center">J.K. Rowling</p>
            <p className=" text-start">
              Harry Potter has no idea how famous he is. That's because he's
              being raised by his miserable aunt and uncle who are terrified
              Harry will learn that he's really a wizard, just as his parents
              were. But everything changes when Harry is summoned to attend an
              infamous school for wizards, and he begins to discover some clues
              about his illustrious birthright. From the surprising way he is
              greeted by a lovable giant, to the unique curriculum and colorful
              faculty at his unusual school, Harry finds himself drawn deep
              inside a mystical world he never knew existed and closer to his
              own noble destiny.
            </p>
            <div className="text-start">
              <p>309 pages, Hardcover</p>
              <p>First published June 26, 1997</p>
            </div>
            <div className="text-start">
              <h5>Literary awards</h5>
              <p>
                Mythopoeic Fantasy Award for Children's Literature (2008),
                British Book Award for Children's Book of the Year (1998), Kate
                Greenaway Medal Nominee (2017), Prijs van de Nederlandse
                Kinderjury for 6-9 jaar en 10-12 jaar (2002), American
                Booksellers Book Of The Year Award for Children (1999), Audie
                Award (2000), West Australian Young Readers' Book Award (WAYRBA)
                for Younger Readers (2000), South Carolina Book Award for Junior
                Book Award (2001), Grand Canyon Reader Award for Teen Book
                (2000), Charlotte Award (2000), Nene Award (2000), Massachusetts
                Children's Book Award (2000), Colorado Blue Spruce Young Adult
                Book Award (2001), Blue Hen Book Award for Chapter Book (2001),
                Nevada Young Readers' Award for Young Reader Category (2000),
                Golden Archer Award for Middle/Junior High (2000), Indian
                Paintbrush Book Award (2000), Hotze de Roosprijs (2002), Nestlé
                Smarties Book Prize for 9–11 years (1997), Eliot Rosewater
                Indiana High School Book Award (2001), Kinderboekwinkelprijs
                (1999), Parenting Book of the Year Award (1998), North East
                Teenage Book Award (1999), Specsavers National Book Award for
                Children's Book of the Year (1998), Washington State Sasquatch
                Award (2000), Literaturpreis der Jury der jungen Leser for
                Kinderbuch (1999), Carnegie Medal Nominee (1997), Rebecca
                Caudill Young Readers' Book Award (2001), Premi Protagonista
                Jove for Categoria 12-13 anys (2000)
              </p>

              <h5>Original Title</h5>
              <p>Harry Potter and the Philosopher's Stone</p>

              <h5>Series</h5>
              <p>Harry Potter (#1)</p>

              <h5>Setting</h5>
              <p>
                London, England (, 1991), Hogwarts School of Witchcraft and
                Wizardry (United Kingdom, 1991)
              </p>

              <h5>Characters</h5>
              <p>Ron Weasley, Petunia Dursley, Vernon Dursley, Dudley Dursley, Severus Snape, Quirinus Quirrell, Rubeus Hagrid, Lord Voldemort, Minerva McGonagall, Neville Longbottom, Fred Weasley, George Weasley, Percy Weasley, Filius Flitwick, Pomona Sprout, Molly Weasley, Poppy Pomfrey, Oliver Wood, Parvati Patil, Dean Thomas, James Potter, Lily Potter, Seamus Finnigan, Garrick Ollivander, Rolanda Hooch, Katie Bell, Draco Malfoy, Albus Dumbledore, Dedalus Diggle, Harry Potter, Hermione Granger, Lavender Brown</p>
            </div>
          </ul>
        </div>

        <div className="mt-5 ">
          <span>
            <button className="btn btn-primary">Borrow</button>{" "}
          </span>
          <span>
            <button className="btn btn-danger">Return</button>
          </span>
        </div>
      </main>
    </>
  );
}

export default BookInfo;
