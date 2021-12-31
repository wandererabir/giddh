import ContactForm from "./ContactForm";

const Database = () => {
  return (
    <>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4 text-center">Database</h1>
        </div>
      </div>
      <div classname="row">
        <div classname="col-md-5">
          <ContactForm />
        </div>
        <div className="col-md-7">
        </div>

      </div>
    </>
  );
}


export default Database;