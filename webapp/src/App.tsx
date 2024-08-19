import { FormEvent } from "react";

function App() {
  function startProccessing(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log("Start processing");
  }

  return (
    <div className="flex justify-center items-center p-4">
      <div className="m-11 card h-full w-3/4 bg-slate-700">
        <div className="p-4 md:p-10">
          <h1>BiCo Chatbot</h1>
          <h3 className="mt-6">Upload your documents</h3>
          <form
            action=""
            method="post"
            onSubmit={startProccessing}
            className="w-full"
          >
            <div className="flex flex-col justify-center items-center">
   
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
