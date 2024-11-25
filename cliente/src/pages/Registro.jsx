import { useState } from "react";

export default function Registrar() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const registrar = async(event) => {
    event.preventDefault();
    await fetch("http://localhost:3000/usuarios", {
      method: 'POST',
      headers: { 'Content-type': 'App'}
    })
  }

  return (
        <main>
          <form action="" onSubmit={registrar}>

          </form>
        </main>
  );
}