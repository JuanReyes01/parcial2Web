import React, { useEffect, useState } from "react";

function SignIn({logged}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const HandleSubmit = (e) => {
        e.preventDefault();

        useEffect(() => {
            let response = fetch("http://localhost:3000/api/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                //logged(data);
            }
            )
        }, []);
    };



  return (
    <div
      className="text-center"
      style={{ backgroundColor: "rgb(120,120,120,1)" }}
    >
      <div className="row">a</div>
      <div className="row">
        <div className="col-2"></div>
        <div
          className="col-5"
          style={{ backgroundColor: "rgb(32,178,170,1)", width: "30%" }}
        >
          Encuentra hasta el libro que no estas buscando
        </div>
        <div className="col-5" style={{ backgroundColor: "rgb(255,255,255,1)", width: "30%" }}>
        
          <div
            className="form-signin w-100 m-auto"
          >
            <form>
            <div className="row">
              <h1 className="h3 mb-3 fw-normal">Tu Libreria Aliada</h1>
            </div>
            <div className="row text-center">
                Users name or Email
            </div>
            <div className="row y-10">
                <input type="text" className="form-control"  required=""  onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="row text-center">
                Password
            </div>
            <div className="row y-10">
                <input type="text" className="form-control"  required=""  onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="row">
                <button className="w-100 btn btn-lg btn-primary" type="submit" style={{backgroundColor:"gray", alignSelf:"right" }} onClick={HandleSubmit}>Sign in</button>
            </div>
            </form>
          </div>
        </div>
        <div className="col-2"></div>
      </div>
      <div className="row">a</div>
    </div>
  );
}
export default SignIn;
