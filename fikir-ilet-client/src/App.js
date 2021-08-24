import './App.css';
import { useState } from 'react';
import axios from "axios";

const App = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [typeofidea, setTypeofidea] = useState("");
  const [idea, setIdea] = useState("");

  const formuGonder = () => {
        axios.post("http://localhost:5555/fikirkaydet",{fullname,email,typeofidea,idea});
  }
  return (
    <div className="text-center">
      <h1>fikir ilet uygulaması</h1>
      <div className="mx-auto w-25">
          <div class="form-group">
            <label for="exampleFormControlInput1">Full Name</label>
            <input
              type="name"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="e.g. Mertbaba Okulmuş"
              value={fullname}
              onChange={e => setFullname(e.target.value)} />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput2">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput2"
              placeholder="name@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)} />
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Fiki Türü</label>
            <select class="form-control" id="exampleFormControlSelect1" onChange={e => setTypeofidea(e.target.value)}>
              <option>Öneri</option>
              <option>Hata Bildirme</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Fikir</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={idea}
              onChange={e => setIdea(e.target.value)}
            ></textarea>
          </div>
          <button className="btn btn-success" onClick={formuGonder}>Gönder</button>
      </div>
    </div>
  );
}

export default App;
